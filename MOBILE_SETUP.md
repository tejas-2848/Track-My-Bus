# How to Run and Test "Track My Bus" on Your Mobile Phone

This guide explains how to run the project on your PC and access it on your mobile phone with full, real-time GPS geolocation enabled.

---

## Why HTTPS is Required

Modern mobile browsers (Google Chrome for Android and Safari for iOS) require a **Secure Context** (isSecureContext === true) to access device sensors. 

- On plain HTTP network IP addresses (e.g., http://192.168.x.x:8080), mobile browsers **silently block** the Geolocation API without even showing the permission prompt.
- Serving over **HTTPS** (port 8443) provides the necessary secure context so the phone activates its physical satellite GPS receiver and provides real coordinates (accuracy < 15 meters) to the dynamic nearby stop engine.

---

## Prerequisites

1. **Same Network Connection**: 
   - Your PC and phone must be on the same local network (e.g., your phone's Wi-Fi hotspot connected to your PC, or both connected to the same Wi-Fi router).
2. **Python 3**: Installed on your PC.
3. **SSL Certificates**: cert.pem and key.pem in the project root directory.

> If cert.pem and key.pem are ever missing, generate them with this one-line command in PowerShell:
> `powershell
> openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=TrackMyBusDev"
> `

---

## Step 1: Find Your PC's Local IP Address

Open PowerShell on your PC and run:

`powershell
(Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Wi-Fi*").IPAddress
`

*(Alternatively, run ipconfig and look for the **IPv4 Address** under your active Wi-Fi adapter, for example: 10.167.115.113 or 192.168.1.5.)*

---

## Step 2: Start the Server

In PowerShell, navigate to the project directory and run:

`powershell
python server.py 8080
`

The server automatically starts both:
- **HTTP Server**: http://localhost:8080 (for desktop browser use)
- **HTTPS Server**: https://0.0.0.0:8443 (for mobile phone GPS testing)

---

## Step 3: Open the Site on Your Phone

1. Open **Google Chrome** (or any browser) on your phone.
2. Enter the HTTPS address using your PC's IP from Step 1:
   `	ext
   https://<YOUR-PC-IP>:8443/index.html
   `
   *(Example: https://10.167.115.113:8443/index.html)*

---

## Step 4: Bypass the Local SSL Warning (One-Time)

Because cert.pem is a self-signed development certificate:

1. Chrome will display: **"Your connection is not private"**.
2. Tap **Advanced** (at the bottom).
3. Tap **Proceed to <YOUR-PC-IP> (unsafe)**.

---

## Step 5: Allow Location Access

Because the site is loaded over HTTPS, Chrome will prompt:
> **"<YOUR-PC-IP> wants to use your device's location"**

Tap **Allow** (or **"While using the app"**).

---

## Verification & Dynamic Behavior

Once location is granted:
- Your phone’s hardware GPS receiver sends genuine coordinates with 5–15 meter accuracy.
- The dynamic Haversine distance engine in pp.js runs across all stops in data.js.
- The **Nearby Bus Stop** card will automatically detect and display the closest stop (e.g. **Pimpalas Phata** when in Pimpalas, or whichever stop you are physically closest to) along with live distance and incoming bus arrivals.
- Zero hardcoded coordinates or stops are used.

---

## Alternative: Using Plain HTTP via Chrome Flag

If you prefer to use plain http:// without SSL certificate warnings:

1. On your Android phone, open Chrome and navigate to:
   `	ext
   chrome://flags/#unsafely-treat-insecure-origin-as-secure
   `
2. Set the flag to **Enabled**.
3. In the text box below it, enter:
   `	ext
   http://<YOUR-PC-IP>:8080
   `
4. Tap **Relaunch** at the bottom of the screen.
5. Open http://<YOUR-PC-IP>:8080/index.html in Chrome. Geolocation will now work directly over plain HTTP.
