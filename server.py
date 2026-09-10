import os
import sys
import json
import base64
import struct
import urllib.request
import urllib.error
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CACHE_DIR = os.path.join(BASE_DIR, "audio_cache")

if not os.path.exists(CACHE_DIR):
    os.makedirs(CACHE_DIR, exist_ok=True)

def load_env_key():
    key = os.environ.get("GEMINI_API_KEY")
    if key:
        return key.strip()
    env_path = os.path.join(BASE_DIR, ".env")
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line.startswith("GEMINI_API_KEY="):
                    val = line.split("=", 1)[1].strip().strip('"').strip("'")
                    if val:
                        return val
    return None

def pcm_to_wav(pcm_bytes, sample_rate=24000, num_channels=1, bit_depth=16):
    byte_rate = sample_rate * num_channels * (bit_depth // 8)
    block_align = num_channels * (bit_depth // 8)
    data_size = len(pcm_bytes)
    chunk_size = 36 + data_size

    header = bytearray()
    header.extend(b'RIFF')
    header.extend(struct.pack('<I', chunk_size))
    header.extend(b'WAVE')
    header.extend(b'fmt ')
    header.extend(struct.pack('<I', 16))
    header.extend(struct.pack('<H', 1))
    header.extend(struct.pack('<H', num_channels))
    header.extend(struct.pack('<I', sample_rate))
    header.extend(struct.pack('<I', byte_rate))
    header.extend(struct.pack('<H', block_align))
    header.extend(struct.pack('<H', bit_depth))
    header.extend(b'data')
    header.extend(struct.pack('<I', data_size))

    return bytes(header) + pcm_bytes

def call_gemini_tts(text, lang, api_key):
    prompt_prefix = "Make a clear, official bus station arrival announcement: "
    if lang == "mr":
        prompt_prefix = "Make a clear, official bus station public arrival announcement in clear Marathi: "
    elif lang == "hi":
        prompt_prefix = "Make a clear, official bus station public arrival announcement in clear Hindi: "

    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-tts-preview:generateContent?key={api_key}"
    payload = {
        "contents": [{
            "parts": [{ "text": f'{prompt_prefix}"{text}"' }]
        }],
        "generationConfig": {
            "responseModalities": ["AUDIO"],
            "speechConfig": {
                "voiceConfig": {
                    "prebuiltVoiceConfig": {
                        "voiceName": "Charon"
                    }
                }
            }
        }
    }

    req_data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=req_data,
        headers={"Content-Type": "application/json"}
    )

    with urllib.request.urlopen(req, timeout=25) as resp:
        res_json = json.loads(resp.read().decode("utf-8"))

    parts = res_json.get("candidates", [{}])[0].get("content", {}).get("parts", [])
    for p in parts:
        inline = p.get("inlineData")
        if inline and "data" in inline:
            pcm_bytes = base64.b64decode(inline["data"])
            return pcm_to_wav(pcm_bytes, sample_rate=24000)

    raise ValueError("No audio content returned by Gemini 3.1 Flash TTS")

class TransitServerHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if self.path == "/api/tts":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode("utf-8"))
            except Exception:
                self.send_error(400, "Invalid JSON")
                return

            text = data.get("text", "").strip()
            lang = data.get("lang", "en").strip().lower()
            bus_id = data.get("busId", "default").strip()

            if not text:
                self.send_error(400, "Missing 'text' field")
                return

            safe_bus_id = "".join(c for c in bus_id if c.isalnum() or c in "-_")
            cache_candidates = [
                os.path.join(CACHE_DIR, f"{safe_bus_id}_{lang}.wav")
            ]
            parts = safe_bus_id.split("-")
            if len(parts) > 2:
                base_id = f"{parts[0]}-{parts[1]}"
                cache_candidates.append(os.path.join(CACHE_DIR, f"{base_id}_{lang}.wav"))
            cache_candidates.append(os.path.join(CACHE_DIR, f"default_{lang}.wav"))

            # 1. Return from disk cache if any candidate exists
            found_cache = None
            for p in cache_candidates:
                if os.path.exists(p) and os.path.getsize(p) > 100:
                    found_cache = p
                    break

            if found_cache:
                with open(found_cache, "rb") as f:
                    wav_data = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "audio/wav")
                self.send_header("Content-Length", str(len(wav_data)))
                self.send_header("Access-Control-Allow-Origin", "*")
                self.send_header("X-Audio-Source", "cache")
                self.end_headers()
                self.wfile.write(wav_data)
                return

            # 2. Check server-side GEMINI_API_KEY
            api_key = load_env_key()
            if not api_key:
                err_resp = json.dumps({
                    "error": "KEY_NOT_CONFIGURED",
                    "message": "Gemini API key is not configured on the server. Please set GEMINI_API_KEY in environment or .env."
                }).encode("utf-8")
                self.send_response(503)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(err_resp)
                return

            # 3. Call Gemini 3.1 Flash TTS
            try:
                save_path = os.path.join(CACHE_DIR, f"{safe_bus_id}_{lang}.wav")
                wav_bytes = call_gemini_tts(text, lang, api_key)
                with open(save_path, "wb") as f:
                    f.write(wav_bytes)

                self.send_response(200)
                self.send_header("Content-Type", "audio/wav")
                self.send_header("Content-Length", str(len(wav_bytes)))
                self.send_header("Access-Control-Allow-Origin", "*")
                self.send_header("X-Audio-Source", "gemini-3.1-flash-tts")
                self.end_headers()
                self.wfile.write(wav_bytes)
            except Exception as e:
                err_resp = json.dumps({
                    "error": "TTS_FAILED",
                    "message": str(e)
                }).encode("utf-8")
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(err_resp)
            return

        self.send_error(404, "Endpoint not found")

if __name__ == "__main__":
    server_address = ("", PORT)
    httpd = HTTPServer(server_address, TransitServerHandler)
    print(f"Track My Bus Server running on http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
