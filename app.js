/**
 * Where's My Bus? - MSRTC Live Bus Tracking System
 * Core Web Application Logic & Telemetry Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Application State
  const state = {
    currentScreen: 'splash-view',
    currentLanguage: 'en', // Default to English as requested; switches to Marathi/Hindi on user selection
    activeStop: null,
    hasUserSelectedStop: false,
    selectedBus: null,
    userCoords: null,
    isGpsActive: false,
    currentUser: (() => {
      try { return JSON.parse(localStorage.getItem('wmb_currentUser')) || null; } catch(e) { return null; }
    })(),
    favorites: (() => {
      try { return JSON.parse(localStorage.getItem('wmb_favorites')) || ['YEO-26', 'NPH-01', 'CHN-13']; } catch(e) { return ['YEO-26', 'NPH-01', 'CHN-13']; }
    })(),
    lastViewedStopId: localStorage.getItem('wmb_last_viewed_stop') || 'YEO-26',
    feedbackList: (() => {
      try { return JSON.parse(localStorage.getItem('wmb_feedbacks')) || []; } catch(e) { return []; }
    })(),
    mapInstance: null,
    activeTileLayer: null,
    activeLayerIndex: 0,
    busMarker: null,
    stopMarker: null,
    userLocationMarker: null,
    routePolylineCasing: null,
    routePolylineCore: null,
    intermediateMarkers: [],
    followBus: true,
    simulationInterval: null,
    busRoadPath: [],
    busRouteIndex: 0,
    busTargetStopIndex: 0,
    isCameraScanning: false,
    qrScanTimer: null,
    isQrProcessing: false,
    cameraStream: null,
    videoTrack: null,
    isTorchOn: false,
    barcodeDetector: (typeof window !== 'undefined' && 'BarcodeDetector' in window) ? new BarcodeDetector({ formats: ['qr_code'] }) : null,
    lastScrollTime: 0,
    notifications: {
      km10: true,
      km5: true,
      km2: true,
      arriving: true,
      delayed: true,
      cancelled: true
    },
    communityReportsList: [...SMART_ST_DATA.communityReports],
    speechSynth: window.speechSynthesis || null,
    audioPitch: 1.0,
    audioRate: 0.95
  };

  // Helpers to retrieve display strings based on selected language (English by default)
  function getStopDisplayName(st) {
    if (!st) return '';
    if (state.currentLanguage === 'mr') return st.nameMr || st.name;
    if (state.currentLanguage === 'hi') return st.nameHi || st.nameMr || st.name;
    return st.name; // English by default
  }

  function getBusDestination(bus) {
    if (!bus) return '';
    if (state.currentLanguage === 'mr') return bus.destinationMr || bus.destination;
    if (state.currentLanguage === 'hi') return bus.destinationHi || bus.destinationMr || bus.destination;
    return bus.destination; // English by default
  }

  function getBusRouteName(bus) {
    if (!bus) return '';
    if (state.currentLanguage === 'mr') return bus.routeNameMr || bus.routeName;
    if (state.currentLanguage === 'hi') return bus.routeNameHi || bus.routeNameMr || bus.routeName;
    return bus.routeName; // English by default
  }

  function getTimelineStatusLabel(status) {
    const lang = state.currentLanguage;
    if (status === 'covered') {
      return lang === 'mr' ? 'कव्हर झाले' : (lang === 'hi' ? 'कवर हुआ' : 'Covered');
    }
    if (status === 'current') {
      return lang === 'mr' ? 'पुढील थांबा • जवळ येत आहे' : (lang === 'hi' ? 'अगला स्टॉप • आ रहा है' : 'Next Stop • Approaching');
    }
    return lang === 'mr' ? 'कवर होणार' : (lang === 'hi' ? 'आने वाला' : 'To be Covered');
  }

  // --------------------------------------------------------------------------
  // Navigation & Screen Switcher
  // --------------------------------------------------------------------------

  function navigateTo(screenId, params = {}) {
    console.log(`[WMB] Navigating to screen: ${screenId}`);
    
    // Stop camera if leaving scanner
    if (state.currentScreen === 'scanner-view' && screenId !== 'scanner-view') {
      stopCameraScan();
    }

    // Stop live tracking simulation if leaving tracking view
    if (state.currentScreen === 'tracking-view' && screenId !== 'tracking-view') {
      stopLiveBusSimulation();
    }

    // Hide all screen views
    document.querySelectorAll('.screen-view').forEach(view => {
      view.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      state.currentScreen = screenId;
      window.scrollTo(0, 0);
    }

    // Update bottom nav active state
    document.querySelectorAll('.nav-item').forEach(nav => {
      if (nav.dataset.screenTarget === screenId) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    });

    // Trigger Screen-Specific Hooks
    if (screenId === 'home-view') {
      renderHomeDashboard();
    } else if (screenId === 'routes-view' || screenId === 'stop-view') {
      renderRoutesScreen();
    } else if (screenId === 'account-view') {
      renderAccountScreen();
    } else if (screenId === 'tracking-view') {
      if (!params.busId && (!state.hasUserSelectedStop || !state.activeStop)) {
        showToast('📷 Please scan a bus stop QR or select a nearby stop to view the live map');
        navigateTo('scanner-view');
        return;
      }
      if (params.busId) {
        const found = SMART_ST_DATA.buses.find(b => b.id === params.busId);
        if (found) state.selectedBus = found;
      }
      renderTrackingScreen();
    } else if (screenId === 'bus-details-view') {
      if (params.busId) {
        const found = SMART_ST_DATA.buses.find(b => b.id === params.busId);
        if (found) state.selectedBus = found;
      }
      renderBusDetailsScreen();
    } else if (screenId === 'scanner-view') {
      startCameraScan();
      renderNearbyBusStops();
    } else if (screenId === 'stop-info-view') {
      renderStopInfoScreen();
    } else if (screenId === 'schedule-view') {
      renderScheduleScreen();
    } else if (screenId === 'community-view') {
      renderCommunityReportsScreen();
    } else if (screenId === 'admin-view') {
      renderAdminDashboardScreen();
    } else if (screenId === 'voice-view') {
      renderVoiceViewScreen();
    } else if (screenId === 'nearby-stops-view') {
      renderNearbyStopsScreen();
    }
  }

  // --------------------------------------------------------------------------
  // Multilingual & Translation Engine
  // --------------------------------------------------------------------------

  function updateAppLanguage(langCode) {
    state.currentLanguage = langCode;
    const dict = SMART_ST_DATA.i18n[langCode] || SMART_ST_DATA.i18n.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key === 'appName') {
        const brandMap = {
          en: 'Where\'s My <span class="brand-accent">Bus?</span>',
          mr: 'माझी बस <span class="brand-accent">कुठे आहे?</span>',
          hi: 'मेरी बस <span class="brand-accent">कहाँ है?</span>'
        };
        el.innerHTML = brandMap[langCode] || dict[key];
        return;
      }
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update active highlight on all language selector buttons
    document.querySelectorAll('.lang-selector-btn').forEach(btn => {
      if (btn.dataset.lang === langCode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const langLabels = { en: 'English', mr: 'मराठी', hi: 'हिंदी' };
    const headerLangText = document.getElementById('header-current-lang-text');
    if (headerLangText) {
      headerLangText.textContent = langLabels[langCode] || langCode;
    }
    showToast(`Language set to ${langLabels[langCode] || langCode.toUpperCase()}`);
    
    // Re-render active view to refresh dynamic text
    if (state.currentScreen === 'tracking-view') {
      const bus = state.selectedBus;
      renderTripDetailsTimeline(bus);
      renderMapBusChips();

      const routeEl = document.getElementById('track-bus-route');
      if (routeEl) routeEl.textContent = getBusRouteName(bus);

      const targetStop = bus.intermediateStops && (bus.intermediateStops.find(s => s.isCurrentTarget) || bus.intermediateStops[0]);
      if (targetStop) {
        const bannerTitle = document.getElementById('map-banner-title');
        if (bannerTitle) {
          const prefix = langCode === 'mr' ? 'कडे मार्गस्थ: ' : (langCode === 'hi' ? 'की ओर अग्रसर: ' : 'En Route to ');
          bannerTitle.textContent = `${prefix}${getStopDisplayName(targetStop)}`;
        }
      }
      const prevStopObj = bus.intermediateStops && (bus.intermediateStops.find(s => s.name === bus.previousStop) || bus.intermediateStops[0]);
      const nextStopObj = bus.intermediateStops && (bus.intermediateStops.find(s => s.name === bus.nextStop) || bus.intermediateStops[1]);
      if (prevStopObj) {
        const pEl = document.getElementById('trip-prev-stop');
        if (pEl) pEl.textContent = getStopDisplayName(prevStopObj);
      }
      if (nextStopObj) {
        const nEl = document.getElementById('trip-next-stop');
        if (nEl) nEl.textContent = getStopDisplayName(nextStopObj);
      }
    } else {
      navigateTo(state.currentScreen);
    }
  }

  // --------------------------------------------------------------------------
  // Voice Announcement (Web Speech API)
  // --------------------------------------------------------------------------

  function speakText(text, lang = state.currentLanguage) {
    if (!state.speechSynth) {
      showToast('Voice announcements not supported on this browser');
      return;
    }

    state.speechSynth.cancel(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set appropriate voice language tag
    if (lang === 'mr') utterance.lang = 'mr-IN';
    else if (lang === 'hi') utterance.lang = 'hi-IN';
    else utterance.lang = 'en-IN';

    utterance.rate = state.audioRate;
    utterance.pitch = state.audioPitch;

    utterance.onstart = () => {
      showToast('🔊 Playing Voice Announcement...');
    };

    state.speechSynth.speak(utterance);
  }

  function announceBusArrival(bus) {
    const lang = state.currentLanguage;
    let text = bus.voiceScriptMr;
    if (lang === 'en') text = bus.voiceScriptEn;
    else if (lang === 'hi') text = bus.voiceScriptHi;

    speakText(text, lang);
  }

  // --------------------------------------------------------------------------
  // SCREEN 2: CAMERA & QR SCANNER SIMULATOR
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // SCREEN 2: FUNCTIONAL CAMERA & QR SCANNER ENGINE
  // --------------------------------------------------------------------------

  function playScanSuccessBeep() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5 note
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
      if (navigator.vibrate) navigator.vibrate(90);
    } catch (e) {
      // audio feedback fallback
    }
  }

  function handleScannedQr(rawText) {
    if (state.isQrProcessing) return;
    const text = (rawText || '').trim();
    if (!text) return;

    state.isQrProcessing = true;
    playScanSuccessBeep();

    const scanFrame = document.getElementById('scan-target-frame');
    if (scanFrame) scanFrame.classList.add('scan-success');

    console.log('[WMB] QR Code detected:', text);

    // Extract potential stop code or URL param (e.g. ?stop=NPH-01 or MSRTC-MH15-NPH01)
    let queryCode = text;
    const urlMatch = text.match(/[?&]stop=([^&]+)/i);
    if (urlMatch) {
      queryCode = decodeURIComponent(urlMatch[1]);
    }

    // Try finding matching stop in SMART_ST_DATA.busStops
    let matchedStop = SMART_ST_DATA.busStops.find(s => {
      if (s.qrCode && s.qrCode.toLowerCase() === queryCode.toLowerCase()) return true;
      if (s.id && s.id.toLowerCase() === queryCode.toLowerCase()) return true;
      if (s.name && s.name.toLowerCase().includes(queryCode.toLowerCase())) return true;
      if (s.nameMr && s.nameMr.includes(queryCode)) return true;
      return false;
    });

    // If still not matched, check intermediate stops across routes
    if (!matchedStop && SMART_ST_DATA.buses) {
      for (const b of SMART_ST_DATA.buses) {
        if (b.intermediateStops) {
          const st = b.intermediateStops.find(s => 
            (s.name && s.name.toLowerCase().includes(queryCode.toLowerCase())) ||
            (s.nameMr && s.nameMr.includes(queryCode))
          );
          if (st) {
            matchedStop = SMART_ST_DATA.busStops.find(bs => bs.name.toLowerCase() === st.name.toLowerCase()) || {
              id: `ST-${st.roadIndex || 1}`,
              qrCode: queryCode,
              name: st.name,
              nameMr: st.nameMr,
              village: st.name.split(' ')[0],
              taluka: 'Nashik District',
              district: 'Nashik',
              pincode: '422001',
              latitude: st.lat,
              longitude: st.lng,
              landmark: `Near ${st.name} Highway Corridor`,
              photo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
              facilities: [
                { name: 'Passenger Bench', nameMr: 'बैठक बाकडा', icon: '🪑', status: 'Available' },
                { name: 'Rain Shade', nameMr: 'पक्का शेड', icon: '⛱️', status: 'Available' }
              ],
              emergencyContacts: [
                { role: 'MSRTC Control Room', number: '1800-22-1250', icon: '📞' }
              ]
            };
            break;
          }
        }
      }
    }

    // Default to Niphad if generic or unknown QR code
    if (!matchedStop) {
      matchedStop = SMART_ST_DATA.busStops[0];
    }

    setTimeout(() => {
      if (scanFrame) scanFrame.classList.remove('scan-success');
      state.isQrProcessing = false;
      showToast(`🎉 QR Code Scanned: ${getStopDisplayName(matchedStop)}`);
      openLiveMapForStop(matchedStop);
    }, 400);
  }

  function startCameraScan() {
    state.isCameraScanning = true;
    state.isQrProcessing = false;
    const video = document.getElementById('camera-video-element');
    const canvas = document.getElementById('qr-scan-canvas');
    const ctx = canvas ? canvas.getContext('2d', { willReadFrequently: true }) : null;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: { ideal: "environment" },
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      })
      .then(stream => {
        state.cameraStream = stream;
        state.videoTrack = stream.getVideoTracks()[0] || null;
        state.isTorchOn = false;
        updateTorchUI();

        if (video) {
          video.srcObject = stream;
          video.setAttribute('playsinline', 'true');
          video.play().catch(() => {});
        }

        // Start scanning frames in real-time
        if (state.qrScanTimer) clearInterval(state.qrScanTimer);
        state.qrScanTimer = setInterval(() => {
          if (!state.isCameraScanning || state.isQrProcessing || !video || !canvas || !ctx) return;
          if (video.readyState < video.HAVE_CURRENT_DATA) return;

          canvas.width = video.videoWidth || 320;
          canvas.height = video.videoHeight || 320;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Fast native BarcodeDetector scan if available
          if (state.barcodeDetector) {
            state.barcodeDetector.detect(canvas)
              .then(barcodes => {
                if (barcodes && barcodes.length > 0) {
                  const val = barcodes[0].rawValue;
                  if (val) handleScannedQr(val);
                } else {
                  scanWithJsQR(canvas, ctx);
                }
              })
              .catch(() => {
                scanWithJsQR(canvas, ctx);
              });
          } else {
            scanWithJsQR(canvas, ctx);
          }
        }, 180);
      })
      .catch(err => {
        console.warn("[WMB] Camera access restricted or unavailable:", err);
      });
    }
  }

  function scanWithJsQR(canvas, ctx) {
    if (typeof jsQR === 'undefined' || !canvas || !ctx) return;
    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imgData.data, imgData.width, imgData.height, {
        inversionAttempts: "dontInvert"
      });
      if (code && code.data) {
        handleScannedQr(code.data);
      }
    } catch (e) {
      // frame processing skipped
    }
  }

  function stopCameraScan() {
    state.isCameraScanning = false;
    if (state.qrScanTimer) {
      clearInterval(state.qrScanTimer);
      state.qrScanTimer = null;
    }
    if (state.videoTrack) {
      try {
        if (state.isTorchOn) {
          state.videoTrack.applyConstraints({ advanced: [{ torch: false }] }).catch(() => {});
        }
      } catch (e) {}
      state.videoTrack = null;
    }
    state.isTorchOn = false;
    updateTorchUI();

    const video = document.getElementById('camera-video-element');
    if (video && video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      video.srcObject = null;
    }
    state.cameraStream = null;
    const scanFrame = document.getElementById('scan-target-frame');
    if (scanFrame) scanFrame.classList.remove('scan-success');
  }

  async function toggleTorch() {
    if (!state.videoTrack) {
      showToast('Camera is not active. Please start camera scanner first.');
      return;
    }

    try {
      const capabilities = typeof state.videoTrack.getCapabilities === 'function' 
        ? state.videoTrack.getCapabilities() 
        : {};

      if (!capabilities.torch) {
        showToast('Flashlight/Torch is not supported on this camera/device.');
        return;
      }

      state.isTorchOn = !state.isTorchOn;
      await state.videoTrack.applyConstraints({
        advanced: [{ torch: state.isTorchOn }]
      });

      updateTorchUI();
      showToast(state.isTorchOn ? '🔦 Torch turned ON' : '🔦 Torch turned OFF');
    } catch (err) {
      console.warn('[WMB] Torch toggle failed:', err);
      state.isTorchOn = false;
      updateTorchUI();
      showToast('Flashlight/Torch is not available on this device.');
    }
  }

  function updateTorchUI() {
    const btn = document.getElementById('btn-toggle-torch');
    const label = document.getElementById('torch-label');
    if (!btn) return;
    if (state.isTorchOn) {
      btn.classList.add('btn-torch-active');
      if (label) label.textContent = 'Torch On';
    } else {
      btn.classList.remove('btn-torch-active');
      if (label) label.textContent = 'Torch';
    }
  }

  // --------------------------------------------------------------------------
  // UPCOMING BUS SELECTOR & LIVE MAP CONNECTOR
  // --------------------------------------------------------------------------

  function findBestUpcomingBusForStop(stop) {
    if (!stop) return null;
    const stopName = (stop.name || '').toLowerCase();
    const stopMr = (stop.nameMr || '').trim();

    const candidates = [];

    SMART_ST_DATA.buses.forEach(b => {
      if (!b.intermediateStops) return;

      let stopIdx = b.intermediateStops.findIndex(s => {
        if (s.name && s.name.toLowerCase() === stopName) return true;
        if (s.nameMr && stopMr && s.nameMr.trim() === stopMr) return true;
        if (s.lat && s.lng && stop.latitude && stop.longitude) {
          return calculateDistanceKm(s.lat, s.lng, stop.latitude, stop.longitude) < 0.8;
        }
        return false;
      });

      if (stopIdx === -1) return;

      let targetIdx = b.intermediateStops.findIndex(s => s.isCurrentTarget);
      if (targetIdx === -1) {
        targetIdx = b.intermediateStops.findIndex(s => s.status !== 'Departed');
      }

      const isPassed = (targetIdx === -1) || (targetIdx > stopIdx);

      // Realistic ETA in minutes to this stop
      let etaMins = 0;
      let distKm = 0;
      if (stop.latitude && stop.longitude && b.currentLat && b.currentLng) {
        distKm = calculateDistanceKm(b.currentLat, b.currentLng, stop.latitude, stop.longitude);
        const stopsBetween = Math.max(0, stopIdx - Math.max(0, targetIdx));
        etaMins = Math.max(2, Math.round((distKm / 38) * 60 + stopsBetween * 2 + (b.delayMinutes || 0)));
      } else {
        etaMins = b.etaMinutes || 15;
      }

      candidates.push({
        bus: b,
        stopIdx,
        targetIdx,
        isPassed,
        isUpcoming: !isPassed,
        etaMins,
        distKm
      });
    });

    if (candidates.length === 0) return null;

    const upcoming = candidates.filter(c => c.isUpcoming);

    if (upcoming.length > 0) {
      upcoming.sort((a, b) => a.etaMins - b.etaMins);
      return {
        bus: upcoming[0].bus,
        etaMinutes: upcoming[0].etaMins,
        distanceKm: upcoming[0].distKm,
        isPassed: false,
        upcomingCandidates: upcoming.map(u => u.bus)
      };
    }

    candidates.sort((a, b) => a.targetIdx - b.targetIdx);
    return {
      bus: candidates[0].bus,
      etaMinutes: candidates[0].etaMins,
      distanceKm: candidates[0].distKm,
      isPassed: true,
      upcomingCandidates: []
    };
  }

  function openLiveMapForStop(stop) {
    const targetStop = resolveStopObject(stop.id || stop.name) || stop;
    state.activeStop = targetStop;
    state.hasUserSelectedStop = true;
    state.lastViewedStopId = targetStop.id;
    try { localStorage.setItem('wmb_last_viewed_stop', targetStop.id); } catch(e) {}

    // Automatically select the next UPCOMING bus for this stop
    const upcomingResult = findBestUpcomingBusForStop(targetStop);
    if (upcomingResult && upcomingResult.bus) {
      state.selectedBus = upcomingResult.bus;
      if (!upcomingResult.isPassed) {
        showToast(`🚏 ${getStopDisplayName(targetStop)}: Next bus arriving in ${upcomingResult.etaMinutes}m`);
      } else {
        showToast(`🚏 Connected to ${getStopDisplayName(targetStop)}`);
      }
    } else {
      state.selectedBus = SMART_ST_DATA.buses[0];
      showToast(`🚏 Connected to ${getStopDisplayName(targetStop)}`);
    }

    navigateTo('tracking-view', { busId: state.selectedBus.id });
  }

  function requestUserGpsLocation(onSuccess, onError) {
    if (!navigator.geolocation) {
      if (onError) onError(new Error('Geolocation not supported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => {
        state.userCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        };
        state.isGpsActive = true;
        if (onSuccess) onSuccess(pos);
      },
      err => {
        state.isGpsActive = false;
        if (onError) onError(err);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  function getSortedNearbyStops(limit = 6) {
    let userLat = state.userCoords ? state.userCoords.lat : null;
    let userLng = state.userCoords ? state.userCoords.lng : null;

    if (!userLat || !userLng) {
      if (state.activeStop && state.activeStop.latitude && state.activeStop.longitude) {
        userLat = state.activeStop.latitude;
        userLng = state.activeStop.longitude;
      } else {
        userLat = 19.9975; // Nashik CBS
        userLng = 73.7898;
      }
    }

    const candidatesMap = new Map();
    SMART_ST_DATA.busStops.forEach(s => candidatesMap.set(s.name, s));

    if (SMART_ST_DATA.buses) {
      SMART_ST_DATA.buses.forEach(b => {
        if (b.intermediateStops) {
          b.intermediateStops.forEach(st => {
            if (st.lat && st.lng && !candidatesMap.has(st.name)) {
              candidatesMap.set(st.name, {
                id: `ST-${st.roadIndex || 1}`,
                name: st.name,
                nameMr: st.nameMr || st.name,
                latitude: st.lat,
                longitude: st.lng,
                landmark: b.routeName
              });
            }
          });
        }
      });
    }

    const stopList = Array.from(candidatesMap.values()).map(st => {
      const d = calculateDistanceKm(userLat, userLng, st.latitude, st.longitude);
      const upcomingResult = findBestUpcomingBusForStop(st);
      return {
        stop: st,
        distKm: d,
        upcomingBus: upcomingResult ? upcomingResult.bus : null,
        etaMinutes: upcomingResult ? upcomingResult.etaMinutes : null,
        isUpcoming: upcomingResult ? !upcomingResult.isPassed : false
      };
    });

    stopList.sort((a, b) => a.distKm - b.distKm);
    return stopList.slice(0, limit);
  }

  function simulateQRScan(stopId) {
    const targetStop = resolveStopObject(stopId) || SMART_ST_DATA.busStops.find(s => s.id === stopId) || SMART_ST_DATA.busStops[0];
    playScanSuccessBeep();
    openLiveMapForStop(targetStop);
  }

  // --------------------------------------------------------------------------
  // NEARBY BUS STOPS & MANUAL STOP SELECTION FEATURES
  // --------------------------------------------------------------------------

  function resolveStopObject(stopIdOrName) {
    if (!stopIdOrName) return null;
    const term = stopIdOrName.trim().toLowerCase();

    // 1. Match in SMART_ST_DATA.busStops by id, qrCode, name, or nameMr
    let found = SMART_ST_DATA.busStops.find(s => 
      s.id.toLowerCase() === term ||
      s.name.toLowerCase() === term ||
      (s.nameMr && s.nameMr.trim() === stopIdOrName.trim()) ||
      (s.qrCode && s.qrCode.toLowerCase() === term)
    );
    if (found) return found;

    // 2. Search in all bus intermediate stops
    if (SMART_ST_DATA.buses) {
      for (const b of SMART_ST_DATA.buses) {
        if (b.intermediateStops) {
          const st = b.intermediateStops.find(s => 
            s.name.toLowerCase() === term ||
            (s.nameMr && s.nameMr.trim() === stopIdOrName.trim())
          );
          if (st) {
            const synthesizedStop = {
              id: `ST-${st.roadIndex || Math.floor(Math.random() * 1000)}`,
              qrCode: `MSRTC-MH15-${st.name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 5).toUpperCase()}`,
              name: st.name,
              nameMr: st.nameMr || st.name,
              village: st.name.split(' ')[0],
              taluka: b.routeName.split(' to ')[0] || 'Nashik Division',
              district: 'Nashik',
              pincode: '422001',
              latitude: st.lat,
              longitude: st.lng,
              landmark: `Along ${b.routeName} Corridor (NH Highway)`,
              photo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
              facilities: [
                { name: 'Passenger Bench', nameMr: 'बैठक बाकडा', icon: '🪑', status: 'Available' },
                { name: 'Rain Shade', nameMr: 'पक्का शेड', icon: '⛱️', status: 'Available' },
                { name: 'Solar Lighting', nameMr: 'सौर पथदिवे', icon: '💡', status: 'Functional' }
              ],
              emergencyContacts: [
                { role: 'MSRTC Control Room', number: '1800-22-1250', icon: '📞' },
                { role: 'Police Station', number: '112', icon: '🚓' }
              ]
            };
            SMART_ST_DATA.busStops.push(synthesizedStop);
            return synthesizedStop;
          }
        }
      }
    }

    return null;
  }

  function renderNearbyBusStops(customLat, customLng) {
    const container = document.getElementById('nearby-stops-container');
    if (!container) return;

    if (customLat && customLng) {
      state.userCoords = { lat: customLat, lng: customLng, accuracy: 15 };
      state.isGpsActive = true;
    }

    const nearby = getSortedNearbyStops(6);

    container.innerHTML = '';
    nearby.forEach(item => {
      const st = item.stop;
      const dKm = item.distKm;
      const distStr = dKm < 1 ? `${Math.round(dKm * 1000)} m` : `${dKm.toFixed(1)} km`;
      const walkMins = Math.max(1, Math.round(dKm * 12));
      const upBus = item.upcomingBus;

      let upBusBadge = '';
      if (upBus && item.isUpcoming) {
        upBusBadge = `<div class="text-xs text-green font-bold mt-1">⚡ Next: ${upBus.number} (${item.etaMinutes}m)</div>`;
      }

      const card = document.createElement('div');
      card.className = 'nearby-stop-card';
      card.setAttribute('data-stop-id', st.id || st.name);

      card.innerHTML = `
        <div class="nearby-stop-icon">🚏</div>
        <div class="nearby-stop-info" style="flex: 1;">
          <div class="nearby-stop-name">${getStopDisplayName(st)}</div>
          <div class="nearby-stop-meta">
            <span class="nearby-dist-pill">📍 ${distStr} away</span>
            <span class="nearby-walk-pill">🚶 ~${walkMins} min walk</span>
          </div>
          ${upBusBadge}
        </div>
        <button class="btn btn-sm btn-primary btn-select-nearby-stop" type="button" style="padding: 6px 12px; font-size: 12px; font-weight: 700;">
          Live Map ➔
        </button>
      `;

      card.addEventListener('click', () => {
        openLiveMapForStop(st);
      });

      container.appendChild(card);
    });
  }

  function setupNearbyStopsFeature() {
    // Locate Me GPS Button in Scanner
    const btnLocate = document.getElementById('btn-detect-gps-stops');
    const statusEl = document.getElementById('nearby-gps-status');

    if (btnLocate) {
      btnLocate.addEventListener('click', () => {
        if (statusEl) statusEl.textContent = '● Locating with GPS...';
        showToast('Acquiring live GPS coordinates...');

        requestUserGpsLocation(
          pos => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            if (statusEl) statusEl.textContent = `● GPS Located (±${Math.round(pos.coords.accuracy)}m)`;
            renderNearbyBusStops(lat, lng);
            renderHomeNearbyStopCard();
            renderPortalNearbyStopsList();
            showToast('Updated nearby stops based on your location!');
          },
          err => {
            console.warn('[WMB] Geolocation error:', err);
            if (statusEl) statusEl.textContent = '● Regional Transit Network';
            renderNearbyBusStops();
            renderHomeNearbyStopCard();
            showToast('Location permission denied or unavailable. Showing regional stops.');
          }
        );
      });
    }
  }

  // --------------------------------------------------------------------------
  // SCREEN 1: HOME TRANSPORTATION DASHBOARD
  // --------------------------------------------------------------------------

  function renderHomeDashboard() {
    const lang = state.currentLanguage;
    const dict = SMART_ST_DATA.i18n[lang] || SMART_ST_DATA.i18n.en;

    // 1. Language Dropdown Indicator
    const langNames = { en: 'English', mr: 'मराठी', hi: 'हिंदी' };
    const langTextEl = document.getElementById('header-current-lang-text');
    if (langTextEl) {
      langTextEl.textContent = langNames[lang] || 'English';
    }

    // 2. Favorites List in Favorites Modal
    renderPortalFavoritesList();

    // 3. Fallback compatibility for any legacy cards
    renderHomeFavoritesList();
    renderHomeServiceStatus();
    renderHomeReportsPreview();

    // 4. Dynamic Live Nearby Bus Stop Card
    renderHomeNearbyStopCard();
  }

  function renderHomeNearbyStopCard() {
    const card = document.getElementById('home-nearby-card');
    if (!card) return;

    // Get closest stop from user's GPS position
    const sortedStops = getSortedNearbyStops(1);
    if (sortedStops.length === 0) return;

    const closest = sortedStops[0];
    const st = closest.stop;
    const distKm = closest.distKm;
    const distStr = distKm < 1 ? `${Math.round(distKm * 1000)} m away` : `${distKm.toFixed(1)} km away`;
    const upcomingBus = closest.upcomingBus;

    const nameEl = document.getElementById('home-nearby-stop-name');
    const distEl = document.getElementById('home-nearby-stop-dist');
    const busTypeEl = document.getElementById('home-nearby-bus-type');
    const busDestEl = document.getElementById('home-nearby-bus-dest');
    const etaEl = document.getElementById('home-nearby-eta');
    const busBox = document.getElementById('home-nearby-bus-box');

    if (nameEl) nameEl.textContent = getStopDisplayName(st);
    if (distEl) distEl.textContent = state.isGpsActive ? `📍 ${distStr} • Live GPS` : `📍 ${distStr}`;

    if (upcomingBus) {
      if (busTypeEl) busTypeEl.textContent = upcomingBus.type.split('(')[0].trim();
      if (busDestEl) busDestEl.textContent = `Towards ${getBusDestination(upcomingBus)}`;
      if (etaEl) etaEl.textContent = `${closest.etaMinutes} min`;
    } else {
      if (busTypeEl) busTypeEl.textContent = 'MSRTC Bus';
      if (busDestEl) busDestEl.textContent = 'Towards Next Station';
      if (etaEl) etaEl.textContent = 'Soon';
    }

    // Clicking card or bus box opens live map for this stop
    card.onclick = (e) => {
      if (e.target.closest('#btn-home-nearby-view-all')) return;
      openLiveMapForStop(st);
    };

    if (busBox) {
      busBox.onclick = (e) => {
        e.stopPropagation();
        openLiveMapForStop(st);
      };
    }

    const viewAllBtn = document.getElementById('btn-home-nearby-view-all');
    if (viewAllBtn) {
      viewAllBtn.onclick = (e) => {
        e.stopPropagation();
        navigateTo('nearby-stops-view');
      };
    }
  }

  function renderPortalNearbyStopsList() {
    const container = document.getElementById('portal-nearby-stops-list');
    if (!container) return;

    const statusEl = document.getElementById('portal-nearby-gps-status');
    if (statusEl) {
      if (state.isGpsActive && state.userCoords) {
        statusEl.textContent = `● Live GPS (±${Math.round(state.userCoords.accuracy || 10)}m)`;
        statusEl.style.color = 'var(--status-green)';
      } else {
        statusEl.textContent = '● Regional Transit Network';
        statusEl.style.color = 'var(--text-secondary)';
      }
    }

    const sortedStops = getSortedNearbyStops(6);
    container.innerHTML = '';

    if (sortedStops.length === 0) {
      container.innerHTML = '<div class="text-sm text-center p-3 text-secondary">No nearby bus stops found.</div>';
      return;
    }

    sortedStops.forEach(item => {
      const st = item.stop;
      const dKm = item.distKm;
      const distStr = dKm < 1 ? `${Math.round(dKm * 1000)} m away` : `${dKm.toFixed(1)} km away`;
      const walkMins = Math.max(1, Math.round(dKm * 12));
      const upBus = item.upcomingBus;

      const card = document.createElement('div');
      card.className = 'nearby-stop-card';
      card.setAttribute('data-stop-id', st.id || st.name);

      let nextBusHtml = '';
      if (upBus && item.isUpcoming) {
        nextBusHtml = `<div class="text-xs text-green font-bold mt-1">⚡ Next: ${upBus.number} to ${getBusDestination(upBus)} in ${item.etaMinutes}m</div>`;
      } else if (upBus) {
        nextBusHtml = `<div class="text-xs text-secondary mt-1">Bus ${upBus.number} (Scheduled)</div>`;
      }

      card.innerHTML = `
        <div class="nearby-stop-icon">🚏</div>
        <div class="nearby-stop-info" style="flex: 1;">
          <div class="nearby-stop-name">${getStopDisplayName(st)}</div>
          <div class="nearby-stop-meta">
            <span class="nearby-dist-pill">📍 ${distStr}</span>
            <span class="nearby-walk-pill">🚶 ~${walkMins} min walk</span>
          </div>
          ${nextBusHtml}
        </div>
        <button class="btn btn-sm btn-primary btn-select-nearby-stop" type="button" style="padding: 6px 12px; font-size: 12px; font-weight: 700; white-space: nowrap;">
          Live Map ➔
        </button>
      `;

      card.onclick = () => {
        closeModal('nearby-stops-modal');
        openLiveMapForStop(st);
      };

      container.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // Dedicated Nearby Bus Stops Screen (Live GPS Precision & Arrivals)
  // --------------------------------------------------------------------------

  const nearbyPageState = {
    selectedRadius: 'all',
    searchQuery: '',
    isInitialized: false
  };

  function setupNearbyStopsScreen() {
    if (nearbyPageState.isInitialized) return;
    nearbyPageState.isInitialized = true;

    const searchInput = document.getElementById('nearby-page-search-input');
    const clearBtn = document.getElementById('btn-clear-nearby-search');
    const refreshBtn = document.getElementById('btn-nearby-page-refresh');
    const radiusPillsContainer = document.getElementById('nearby-radius-pills');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        nearbyPageState.searchQuery = (e.target.value || '').trim().toLowerCase();
        if (clearBtn) {
          clearBtn.style.display = nearbyPageState.searchQuery ? 'block' : 'none';
        }
        renderNearbyStopsCards();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        nearbyPageState.searchQuery = '';
        clearBtn.style.display = 'none';
        renderNearbyStopsCards();
      });
    }

    if (radiusPillsContainer) {
      radiusPillsContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.nearby-radius-pill');
        if (!pill) return;
        radiusPillsContainer.querySelectorAll('.nearby-radius-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        nearbyPageState.selectedRadius = pill.dataset.radius || 'all';
        renderNearbyStopsCards();
      });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        showToast('Acquiring live GPS coordinates...');
        refreshBtn.disabled = true;
        refreshBtn.style.opacity = '0.6';
        requestUserGpsLocation(
          pos => {
            refreshBtn.disabled = false;
            refreshBtn.style.opacity = '1';
            showToast('📍 Updated nearby stops with live GPS location!');
            renderNearbyStopsScreen();
            renderHomeNearbyStopCard();
          },
          err => {
            refreshBtn.disabled = false;
            refreshBtn.style.opacity = '1';
            showToast('Could not acquire GPS coordinates. Showing regional stops.');
            renderNearbyStopsScreen();
          }
        );
      });
    }
  }

  function renderNearbyStopsScreen() {
    setupNearbyStopsScreen();

    // Update GPS status banner
    const gpsStatusEl = document.getElementById('nearby-page-gps-status');
    if (gpsStatusEl) {
      if (state.isGpsActive && state.userCoords) {
        gpsStatusEl.textContent = `● Live GPS (±${Math.round(state.userCoords.accuracy || 10)}m)`;
        gpsStatusEl.classList.add('gps-active');
      } else {
        gpsStatusEl.textContent = `● Regional Network`;
        gpsStatusEl.classList.remove('gps-active');
      }
    }

    renderNearbyStopsCards();
  }

  function renderNearbyStopsCards() {
    const container = document.getElementById('nearby-page-cards-container');
    if (!container) return;

    // Fetch all stops sorted by GPS distance
    const sortedStops = getSortedNearbyStops(50);
    const q = nearbyPageState.searchQuery;
    const rad = nearbyPageState.selectedRadius;

    // Filter by radius & search query
    const filteredStops = sortedStops.filter(item => {
      const st = item.stop;
      const dKm = item.distKm;

      // Radius filter
      if (rad !== 'all') {
        const maxDist = parseFloat(rad);
        if (!isNaN(maxDist) && dKm > maxDist) return false;
      }

      // Query filter
      if (q) {
        const nameMatch = (st.name || '').toLowerCase().includes(q);
        const nameMrMatch = (st.nameMr || '').toLowerCase().includes(q);
        const idMatch = (st.id || '').toLowerCase().includes(q);
        const busMatch = item.upcomingBus && (
          (item.upcomingBus.to || '').toLowerCase().includes(q) ||
          (item.upcomingBus.number || '').toLowerCase().includes(q)
        );
        if (!nameMatch && !nameMrMatch && !idMatch && !busMatch) return false;
      }

      return true;
    });

    // Narrow down to 6 nearest stops
    const displayStops = filteredStops.slice(0, 6);

    // Update Stats Bar
    const statCount = document.getElementById('nearby-stat-count');
    const statNearest = document.getElementById('nearby-stat-nearest');
    const statWalking = document.getElementById('nearby-stat-walking');

    if (statCount) statCount.textContent = displayStops.length;
    if (statNearest) {
      if (displayStops.length > 0) {
        const d = displayStops[0].distKm;
        statNearest.textContent = d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1)} km`;
      } else {
        statNearest.textContent = '--';
      }
    }
    if (statWalking) {
      if (displayStops.length > 0) {
        const wMin = Math.max(1, Math.round(displayStops[0].distKm * 12));
        statWalking.textContent = `~${wMin} min`;
      } else {
        statWalking.textContent = '--';
      }
    }

    // Render Cards
    container.innerHTML = '';

    if (displayStops.length === 0) {
      container.innerHTML = `
        <div class="card nearby-empty-card">
          <div class="nearby-empty-icon">🔍</div>
          <h4 class="nearby-empty-title">No bus stops found</h4>
          <p class="nearby-empty-text">
            ${q ? `No stops matching "<strong>${q}</strong>" within ${rad === 'all' ? 'the active network' : rad + ' km'}.` : 'No stops found within selected radius.'}
          </p>
          <button class="btn btn-secondary btn-sm" id="btn-nearby-reset-filters" type="button">
            Reset Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-nearby-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const searchInput = document.getElementById('nearby-page-search-input');
          if (searchInput) searchInput.value = '';
          nearbyPageState.searchQuery = '';
          nearbyPageState.selectedRadius = 'all';
          const pills = document.getElementById('nearby-radius-pills');
          if (pills) {
            pills.querySelectorAll('.nearby-radius-pill').forEach(p => {
              p.classList.toggle('active', p.dataset.radius === 'all');
            });
          }
          const clearBtn = document.getElementById('btn-clear-nearby-search');
          if (clearBtn) clearBtn.style.display = 'none';
          renderNearbyStopsCards();
        });
      }
      return;
    }

    displayStops.forEach(item => {
      const st = item.stop;
      const dKm = item.distKm;
      const distStr = dKm < 1 ? `${Math.round(dKm * 1000)} m away` : `${dKm.toFixed(1)} km away`;
      const walkMins = Math.max(1, Math.round(dKm * 12));
      const upBus = item.upcomingBus;

      const card = document.createElement('div');
      card.className = 'card nearby-stop-rich-card';
      card.setAttribute('data-stop-id', st.id || st.name);

      let upcomingHtml = '';
      if (upBus && item.isUpcoming) {
        const busDest = getBusDestination(upBus);
        upcomingHtml = `
          <div class="nearby-card-bus-preview">
            <div class="nearby-preview-left">
              <div class="nearby-preview-badge">
                <span class="pulse-dot"></span>
                <span>${upBus.type || 'Ordinary'} • ${upBus.number || upBus.id}</span>
              </div>
              <div class="nearby-preview-dest">
                <span class="nearby-preview-arrow">➔</span> Towards <strong>${busDest}</strong>
              </div>
            </div>
            <div class="nearby-preview-right">
              <span class="nearby-preview-eta">🟢 ${item.etaMinutes} min</span>
              <span class="nearby-preview-status">On Time</span>
            </div>
          </div>
        `;
      } else if (upBus) {
        upcomingHtml = `
          <div class="nearby-card-bus-preview scheduled">
            <div class="nearby-preview-left">
              <div class="nearby-preview-badge secondary">
                <span>${upBus.type || 'Ordinary'} • ${upBus.number || upBus.id}</span>
              </div>
              <div class="nearby-preview-dest">
                Towards <strong>${getBusDestination(upBus)}</strong>
              </div>
            </div>
            <div class="nearby-preview-right">
              <span class="nearby-preview-eta secondary">Scheduled</span>
            </div>
          </div>
        `;
      } else {
        upcomingHtml = `
          <div class="nearby-card-bus-preview empty">
            <div class="nearby-preview-empty-text">⚪ No active buses currently scheduled</div>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="nearby-card-header">
          <div class="nearby-card-title-group">
            <div class="nearby-card-icon-stop">🚏</div>
            <div>
              <div class="flex-align gap-2">
                <h3 class="nearby-card-title">${getStopDisplayName(st)}</h3>
                <span class="nearby-card-code-pill">${st.id || 'ST'}</span>
              </div>
              ${st.nameMr ? `<div class="nearby-card-marathi">${st.nameMr}</div>` : ''}
            </div>
          </div>
          <div class="nearby-card-distance-box">
            <span class="nearby-card-dist-pill">📍 ${distStr}</span>
            <span class="nearby-card-walk-pill">🚶 ~${walkMins} min</span>
          </div>
        </div>

        ${upcomingHtml}

        <div class="nearby-card-footer">
          <button class="btn btn-primary btn-sm btn-nearby-live-map" type="button">
            🗺️ Live Map ➔
          </button>
          <button class="btn btn-secondary btn-sm btn-nearby-timetable" type="button">
            📅 Routes & Times
          </button>
        </div>
      `;

      // Live map button & card click: openLiveMapForStop
      const liveMapBtn = card.querySelector('.btn-nearby-live-map');
      if (liveMapBtn) {
        liveMapBtn.onclick = (e) => {
          e.stopPropagation();
          openLiveMapForStop(st);
        };
      }

      const timetableBtn = card.querySelector('.btn-nearby-timetable');
      if (timetableBtn) {
        timetableBtn.onclick = (e) => {
          e.stopPropagation();
          state.activeStop = st;
          state.hasUserSelectedStop = true;
          navigateTo('routes-view');
        };
      }

      card.onclick = () => {
        openLiveMapForStop(st);
      };

      container.appendChild(card);
    });
  }

  function renderPortalFavoritesList() {
    const container = document.getElementById('portal-favorites-list');
    if (!container) return;

    container.innerHTML = '';
    if (!state.favorites || state.favorites.length === 0) {
      container.innerHTML = `
        <div class="text-center p-3" style="color: var(--text-secondary); font-size: 13px;">
          No favorite stops added yet. Tap <strong>+ Add Favorite Bus Stop</strong> to save your daily route!
        </div>
      `;
      return;
    }

    state.favorites.forEach(stopId => {
      const stop = resolveStopObject(stopId);
      if (!stop) return;

      const stopNameLower = (stop.name || '').toLowerCase();
      const bus = SMART_ST_DATA.buses.find(b => 
        b.intermediateStops && b.intermediateStops.some(s => (s.name || '').toLowerCase() === stopNameLower)
      ) || SMART_ST_DATA.buses[0];

      const item = document.createElement('div');
      item.className = 'favorite-search-item';
      item.innerHTML = `
        <div>
          <div style="font-weight: 700; font-size: 14px;">${getStopDisplayName(stop)}</div>
          <div class="text-xs" style="color: var(--text-secondary);">${stop.taluka || 'Nashik'} • Next: ${bus ? bus.etaMinutes + ' min (' + (bus.delayMinutes > 0 ? bus.delayMinutes + 'm delay' : 'On Time') + ')' : 'Scheduled'}</div>
        </div>
        <div class="flex-align gap-2">
          <button class="btn btn-sm btn-primary btn-fav-go" title="View Live Arrivals">
            Arrivals ➔
          </button>
          <button class="icon-btn btn-fav-del" title="Remove" style="font-size: 14px; padding: 4px 6px;">
            ✕
          </button>
        </div>
      `;

      item.querySelector('.btn-fav-go').onclick = () => {
        closeModal('home-favorites-modal');
        openLiveMapForStop(stop);
      };

      item.querySelector('.btn-fav-del').onclick = () => {
        removeFavoriteStop(stop.id);
        renderPortalFavoritesList();
      };

      container.appendChild(item);
    });
  }

  function renderHomeFavoritesList() {
    const container = document.getElementById('home-favorites-list');
    if (!container) return;

    container.innerHTML = '';

    if (!state.favorites || state.favorites.length === 0) {
      container.innerHTML = `
        <div class="text-center p-3" style="color: var(--text-secondary); font-size: 13px;">
          No favorite stops added yet. Tap <strong>+ Add Favorite Stop</strong> to save your daily commute station!
        </div>
      `;
      return;
    }

    state.favorites.forEach(stopId => {
      const stop = resolveStopObject(stopId);
      if (!stop) return;

      // Find an ETA if available for this stop
      const stopNameLower = (stop.name || '').toLowerCase();
      const bus = SMART_ST_DATA.buses.find(b => 
        b.intermediateStops && b.intermediateStops.some(s => (s.name || '').toLowerCase() === stopNameLower)
      ) || SMART_ST_DATA.buses[Math.floor(Math.random() * Math.min(3, SMART_ST_DATA.buses.length))];

      const etaText = bus ? `Next bus · ${bus.etaMinutes} min` : 'No live bus';

      const item = document.createElement('div');
      item.className = 'home-favorite-item';
      item.innerHTML = `
        <div class="home-fav-left">
          <span class="home-fav-icon">⭐</span>
          <div>
            <div class="home-fav-name">${getStopDisplayName(stop)}</div>
            <div class="home-fav-sub">${stop.taluka || 'Nashik'} • ${stop.qrCode || 'MSRTC'}</div>
          </div>
        </div>
        <div class="home-fav-right">
          <span class="home-fav-eta">${etaText}</span>
          <button class="btn-remove-fav" title="Remove Favorite" data-stop-id="${stop.id}">✕</button>
        </div>
      `;

      // Click on row to open stop
      item.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove-fav')) return;
        state.activeStop = stop;
        state.hasUserSelectedStop = true;
        state.lastViewedStopId = stop.id;
        try { localStorage.setItem('wmb_last_viewed_stop', stop.id); } catch(e) {}
        if (!state.selectedBus) state.selectedBus = SMART_ST_DATA.buses[0];
        navigateTo('tracking-view');
      });

      // Remove button handler
      const removeBtn = item.querySelector('.btn-remove-fav');
      if (removeBtn) {
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          removeFavoriteStop(stop.id);
        });
      }

      container.appendChild(item);
    });
  }

  function addFavoriteStop(stopId) {
    if (!state.favorites.includes(stopId)) {
      state.favorites.push(stopId);
      try { localStorage.setItem('wmb_favorites', JSON.stringify(state.favorites)); } catch(e) {}
      if (state.currentUser) {
        state.currentUser.favorites = [...state.favorites];
        try { localStorage.setItem('wmb_currentUser', JSON.stringify(state.currentUser)); } catch(e) {}
      }
      showToast('⭐ Added to Favorite Stops!');
      renderHomeFavoritesList();
      closeModal('add-favorite-modal');
    } else {
      showToast('Stop is already in your favorites.');
    }
  }

  function removeFavoriteStop(stopId) {
    state.favorites = state.favorites.filter(id => id !== stopId);
    try { localStorage.setItem('wmb_favorites', JSON.stringify(state.favorites)); } catch(e) {}
    if (state.currentUser) {
      state.currentUser.favorites = [...state.favorites];
      try { localStorage.setItem('wmb_currentUser', JSON.stringify(state.currentUser)); } catch(e) {}
    }
    showToast('Removed from favorites');
    renderHomeFavoritesList();
    if (state.currentScreen === 'account-view') renderAccountScreen();
  }

  function renderHomeServiceStatus() {
    const card = document.getElementById('home-service-status-card');
    const iconEl = document.getElementById('home-status-icon');
    const badgeEl = document.getElementById('home-status-badge');
    const detailEl = document.getElementById('home-status-detail');
    const routesListEl = document.getElementById('home-status-routes-list');

    if (!card) return;

    // Calculate actual delays across the fleet
    const delayedBuses = SMART_ST_DATA.buses.filter(b => b.delayMinutes > 5);
    const affectedRoutes = [...new Set(delayedBuses.map(b => b.routeName))];

    if (delayedBuses.length === 0) {
      card.classList.remove('has-delay');
      if (iconEl) iconEl.textContent = '🟢';
      if (badgeEl) {
        badgeEl.className = 'badge badge-green';
        badgeEl.textContent = 'Normal';
      }
      if (detailEl) detailEl.textContent = 'All tracked corridors operating on schedule.';
      if (routesListEl) routesListEl.style.display = 'none';
    } else if (delayedBuses.length <= 4) {
      card.classList.add('has-delay');
      if (iconEl) iconEl.textContent = '🟠';
      if (badgeEl) {
        badgeEl.className = 'badge badge-orange';
        badgeEl.textContent = 'Minor Delays';
      }
      const avgDelay = Math.round(delayedBuses.reduce((a, b) => a + b.delayMinutes, 0) / delayedBuses.length);
      if (detailEl) detailEl.textContent = `${affectedRoutes.length} corridor(s) experiencing traffic delays (Avg delay ~${avgDelay} min).`;
      if (routesListEl) {
        routesListEl.style.display = 'flex';
        routesListEl.innerHTML = affectedRoutes.map(r => `<span style="color:var(--status-orange); font-size:11px;">⚠️ ${r}</span>`).join('');
      }
    } else {
      card.classList.add('has-delay');
      if (iconEl) iconEl.textContent = '🔴';
      if (badgeEl) {
        badgeEl.className = 'badge badge-orange';
        badgeEl.style.background = 'rgba(239, 68, 68, 0.15)';
        badgeEl.style.color = '#EF4444';
        badgeEl.textContent = 'Disruption';
      }
      if (detailEl) detailEl.textContent = 'Multiple corridors experiencing weather & highway delays. Check trip timelines.';
      if (routesListEl) {
        routesListEl.style.display = 'flex';
        routesListEl.innerHTML = affectedRoutes.slice(0, 3).map(r => `<span style="color:#EF4444; font-size:11px;">⚠️ ${r}</span>`).join('');
      }
    }
  }

  function renderHomeReportsPreview() {
    const container = document.getElementById('home-reports-preview-list');
    if (!container) return;

    container.innerHTML = '';
    const recentReports = state.communityReportsList.slice(0, 2);

    if (recentReports.length === 0) {
      container.innerHTML = `<div class="text-sm" style="color:var(--text-secondary);">No passenger reports submitted recently.</div>`;
      return;
    }

    recentReports.forEach(rep => {
      const item = document.createElement('div');
      item.className = 'home-report-mini-item';
      item.innerHTML = `
        <div class="home-report-mini-top">
          <span class="home-report-mini-title">${rep.title}</span>
          <span class="badge badge-orange" style="font-size:10px;">${rep.timestamp}</span>
        </div>
        <div class="home-report-mini-meta">
          <span>By ${rep.reporter}</span>
          <span style="color:var(--status-green); font-weight:700;">👍 ${rep.votes} verified</span>
        </div>
      `;
      container.appendChild(item);
    });

    // Also update contextual reports banner in stop-view
    const stopReportsText = document.getElementById('stop-contextual-reports-text');
    if (stopReportsText) {
      stopReportsText.innerHTML = `<strong>Recent Reports:</strong> ${state.communityReportsList.length} passenger updates active across corridor`;
    }

    // Also update contextual reports count in bus-details-view
    const busReportsCount = document.getElementById('bus-detail-reports-count');
    if (busReportsCount) {
      busReportsCount.textContent = `${state.communityReportsList.length} verified updates from commuters on this route`;
    }
  }

  // --------------------------------------------------------------------------
  // SCREEN 14: ACCOUNT
  // --------------------------------------------------------------------------

  function renderAccountScreen() {
    const loggedOutView = document.getElementById('account-logged-out');
    const loggedInView = document.getElementById('account-logged-in');

    if (state.currentUser) {
      if (loggedOutView) loggedOutView.style.display = 'none';
      if (loggedInView) loggedInView.style.display = 'flex';

      const nameEl = document.getElementById('account-user-name');
      if (nameEl) nameEl.textContent = state.currentUser.name || 'Commuter';

      const phoneEl = document.getElementById('account-user-phone');
      if (phoneEl) phoneEl.textContent = state.currentUser.contact || '+91 98XXX XXXXX';

      const avatarEl = document.getElementById('account-user-avatar');
      if (avatarEl) {
        const parts = (state.currentUser.name || 'C P').trim().split(' ');
        const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
        avatarEl.textContent = initials;
      }

      const favCountEl = document.getElementById('account-stat-favorites');
      if (favCountEl) favCountEl.textContent = (state.favorites || []).length;

      const repCountEl = document.getElementById('account-stat-reports');
      if (repCountEl) {
        const userReports = state.communityReportsList.filter(r => r.reporter === state.currentUser.name || r.reporter === 'Commuter Passenger');
        repCountEl.textContent = userReports.length || 1;
      }
    } else {
      if (loggedOutView) loggedOutView.style.display = 'flex';
      if (loggedInView) loggedInView.style.display = 'none';
    }
  }

// --------------------------------------------------------------------------
  // SCREEN 3: BUS ROUTES NETWORK (CORRIDORS & FLEET)
  // --------------------------------------------------------------------------

  const routesScreenState = {
    activeCategory: 'all',
    searchQuery: '',
    expandedStops: {},
    expandedBuses: {},
    initialized: false
  };

  function setupRoutesScreen() {
    const searchInput = document.getElementById('routes-search-input');
    const clearBtn = document.getElementById('btn-clear-routes-search');
    const filterPills = document.getElementById('routes-filter-pills');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        routesScreenState.searchQuery = e.target.value.trim().toLowerCase();
        if (clearBtn) {
          clearBtn.style.display = routesScreenState.searchQuery ? 'flex' : 'none';
        }
        renderRoutesCards();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        routesScreenState.searchQuery = '';
        clearBtn.style.display = 'none';
        renderRoutesCards();
        if (searchInput) searchInput.focus();
      });
    }

    if (filterPills) {
      filterPills.querySelectorAll('.routes-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          filterPills.querySelectorAll('.routes-pill').forEach(p => p.classList.remove('active'));
          e.currentTarget.classList.add('active');
          routesScreenState.activeCategory = e.currentTarget.dataset.category || 'all';
          renderRoutesCards();
        });
      });
    }

    routesScreenState.initialized = true;
  }

  function renderRoutesScreen() {
    if (!routesScreenState.initialized) {
      setupRoutesScreen();
    }

    // Synchronize network summary metrics
    const statCount = document.getElementById('routes-stat-count');
    const statBuses = document.getElementById('routes-stat-buses');
    const statStops = document.getElementById('routes-stat-stops');

    const allRoutes = SMART_ST_DATA.routes || [];
    const allBuses = SMART_ST_DATA.buses || [];
    const totalStops = allRoutes.reduce((acc, r) => acc + (r.stops ? r.stops.length : 0), 0);

    if (statCount) statCount.textContent = allRoutes.length;
    if (statBuses) statBuses.textContent = allBuses.length;
    if (statStops) statStops.textContent = totalStops;

    renderRoutesCards();
  }

  function renderRoutesCards() {
    const container = document.getElementById('routes-cards-container');
    if (!container) return;

    const allRoutes = SMART_ST_DATA.routes || [];
    const allBuses = SMART_ST_DATA.buses || [];
    const query = routesScreenState.searchQuery;
    const cat = routesScreenState.activeCategory;
    const lang = state.currentLanguage;
    const dict = SMART_ST_DATA.i18n[lang] || SMART_ST_DATA.i18n.en;

    // Filter routes by category and search term
    const filteredRoutes = allRoutes.filter(route => {
      // Category filter
      if (cat !== 'all' && route.category !== cat) {
        return false;
      }

      // Search query filter
      if (!query) return true;

      const matchName = (route.name && route.name.toLowerCase().includes(query)) ||
                        (route.nameMr && route.nameMr.includes(query)) ||
                        (route.nameHi && route.nameHi.includes(query));

      const matchEndpoints = (route.origin && route.origin.toLowerCase().includes(query)) ||
                             (route.destination && route.destination.toLowerCase().includes(query)) ||
                             (route.originMr && route.originMr.includes(query)) ||
                             (route.destinationMr && route.destinationMr.includes(query));

      const matchVia = (route.via && route.via.toLowerCase().includes(query)) ||
                       (route.viaMr && route.viaMr.includes(query));

      const matchCode = (route.id && route.id.toLowerCase().includes(query)) ||
                        (route.routeNumber && route.routeNumber.toLowerCase().includes(query));

      const matchStop = route.stops && route.stops.some(s => 
        (s.name && s.name.toLowerCase().includes(query)) ||
        (s.nameMr && s.nameMr.includes(query))
      );

      const matchBus = allBuses.some(b => 
        b.routeId === route.id && 
        ((b.number && b.number.toLowerCase().includes(query)) ||
         (b.type && b.type.toLowerCase().includes(query)))
      );

      return matchName || matchEndpoints || matchVia || matchCode || matchStop || matchBus;
    });

    if (filteredRoutes.length === 0) {
      container.innerHTML = `
        <div class="card text-center p-4">
          <div style="font-size: 32px; margin-bottom: 8px;">🔍</div>
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 4px;">No routes found</div>
          <div class="text-sm text-secondary">
            No MSRTC bus routes match "${query}". Try searching for Nashik, Shirdi, Pune, Yeola, or Niphad.
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = '';

    filteredRoutes.forEach(route => {
      const runningBuses = allBuses.filter(b => b.routeId === route.id);
      const stops = route.stops || [];
      const isStopsExpanded = !!routesScreenState.expandedStops[route.id];
      const isBusesExpanded = !!routesScreenState.expandedBuses[route.id];

      // Find earliest arriving / nearest active bus
      let nearestBus = null;
      if (runningBuses.length > 0) {
        nearestBus = [...runningBuses].sort((a, b) => (a.etaMinutes || 999) - (b.etaMinutes || 999))[0];
      }

      // Localized text
      const originText = (lang === 'mr' && route.originMr) ? route.originMr : route.origin;
      const destText = (lang === 'mr' && route.destinationMr) ? route.destinationMr : route.destination;
      const viaText = (lang === 'mr' && route.viaMr) ? route.viaMr : route.via;

      // Service types chips
      const busTypesHtml = (route.busTypes || []).map(t => `<span class="route-type-chip">${t.split('(')[0].trim()}</span>`).join('');

      // Stops list HTML
      const stopsTimelineHtml = stops.map((st, idx) => {
        const displayName = (lang === 'mr' && st.nameMr) ? st.nameMr : st.name;
        const subName = (lang === 'mr') ? st.name : (st.nameMr || '');
        const isTarget = st.isCurrentTarget;
        const statusBadge = isTarget ? '<span class="badge badge-green">NEXT STOP</span>' : `<span class="text-xs" style="color:var(--text-secondary);">${st.status}</span>`;

        return `
          <div class="route-stop-timeline-item">
            <span class="route-stop-idx">${idx + 1}</span>
            <div class="route-stop-names">
              <span class="route-stop-name-en">${displayName}</span>
              ${subName ? `<span class="route-stop-name-mr">${subName}</span>` : ''}
            </div>
            <div style="text-align: right;">
              <div class="route-stop-time">${st.time}</div>
              ${statusBadge}
            </div>
          </div>
        `;
      }).join('');

      // Running buses HTML
      const runningBusesHtml = runningBuses.map(b => {
        const isLate = b.delayMinutes > 0;
        const statusClass = isLate ? 'badge-orange' : 'badge-green';
        const statusText = isLate ? `${b.delayMinutes}m late` : 'On Time';

        return `
          <div class="route-bus-mini-card">
            <div class="route-bus-mini-header">
              <span class="route-bus-num">${b.number}</span>
              <span class="badge ${statusClass}">● ${statusText}</span>
            </div>
            <div class="text-xs" style="color:var(--text-secondary); font-weight:600;">
              ${b.type}
            </div>
            <div class="route-bus-mini-telemetry">
              <span>Speed: <strong>${b.speed} km/h</strong></span>
              <span>Seats: <strong>${b.occupancy}</strong></span>
              <span>ETA: <strong style="color:var(--status-green);">${b.etaMinutes} min</strong></span>
            </div>
            <button type="button" class="route-bus-track-action-btn" data-bus-id="${b.id}">
              🗺️ Track Bus Live
            </button>
          </div>
        `;
      }).join('');

      const card = document.createElement('div');
      card.className = 'route-card';
      card.id = `route-card-${route.id}`;
      card.innerHTML = `
        <!-- Card Header -->
        <div class="route-card-header">
          <div class="route-badge-and-title">
            <span class="route-code-pill">${route.id}</span>
            <div class="route-title-group">
              <div class="route-title-text">${originText} ➔ ${destText}</div>
              <div class="route-title-mr">${route.nameMr || ''}</div>
            </div>
          </div>
          <span class="route-fleet-status">
            ● ${runningBuses.length} Live Buses
          </span>
        </div>

        <!-- Path Visual: Origin to Destination -->
        <div class="route-path-visual">
          <div class="route-path-point start">
            <div class="route-path-dot origin"></div>
            <span class="route-path-name">${originText}</span>
            <span class="route-path-tag">Origin</span>
          </div>

          <div class="route-path-connector">
            <div class="route-path-line"></div>
            <span class="route-path-stops-badge">${stops.length} Stops • ${route.totalDistanceKm} km</span>
          </div>

          <div class="route-path-point end">
            <div class="route-path-dot dest"></div>
            <span class="route-path-name">${destText}</span>
            <span class="route-path-tag">Destination</span>
          </div>
        </div>

        <!-- Via Corridor -->
        <div class="route-via-row">
          <span class="route-via-label">🛣️ Via:</span>
          <span>${viaText}</span>
        </div>

        <!-- Key Metrics Strip -->
        <div class="route-metrics-grid">
          <div class="route-metric-item">
            <span class="route-metric-val">${stops.length}</span>
            <span class="route-metric-lbl">Stops</span>
          </div>
          <div class="route-metric-item">
            <span class="route-metric-val">${route.totalDistanceKm} km</span>
            <span class="route-metric-lbl">Distance</span>
          </div>
          <div class="route-metric-item">
            <span class="route-metric-val">${route.duration}</span>
            <span class="route-metric-lbl">Duration</span>
          </div>
          <div class="route-metric-item">
            <span class="route-metric-val">${route.frequency}</span>
            <span class="route-metric-lbl">Frequency</span>
          </div>
        </div>

        <!-- Bus Types Available -->
        <div class="route-types-row">
          <span class="text-xs" style="font-weight:700; color:var(--text-secondary);">Services:</span>
          ${busTypesHtml}
        </div>

        <!-- Next Bus Live Preview Pill -->
        ${nearestBus ? `
          <div class="route-next-bus-pill">
            <div class="route-next-bus-left">
              <span>⚡</span>
              <span>Next: <strong>${nearestBus.number}</strong> (${nearestBus.type.split('(')[0].trim()})</span>
            </div>
            <div class="route-next-bus-eta">
              ETA: ${nearestBus.etaMinutes} mins (${nearestBus.distanceFromStop || 3} km away)
            </div>
          </div>
        ` : ''}

        <!-- Interactive Actions -->
        <div class="route-actions-row">
          <button type="button" class="route-btn route-btn-primary btn-track-full-route" data-route-id="${route.id}">
            🗺️ <span>${dict.trackLiveMap || 'Track on Map'}</span>
          </button>
          <button type="button" class="route-btn route-btn-secondary btn-toggle-stops ${isStopsExpanded ? 'expanded' : ''}" data-route-id="${route.id}">
            🚏 <span>${isStopsExpanded ? (dict.hideStops || 'Hide Stops') : (dict.viewStops || 'View Stops')} (${stops.length})</span>
          </button>
          <button type="button" class="route-btn route-btn-secondary btn-toggle-buses ${isBusesExpanded ? 'expanded' : ''}" data-route-id="${route.id}">
            🚌 <span>${isBusesExpanded ? (dict.hideLiveBuses || 'Hide Buses') : (dict.viewLiveBuses || 'Live Buses')} (${runningBuses.length})</span>
          </button>
        </div>

        <!-- Collapsible Stops Drawer -->
        <div class="route-collapsible-drawer route-stops-drawer ${isStopsExpanded ? 'open' : ''}" id="stops-drawer-${route.id}">
          <div class="route-drawer-header">
            <span>🚏 All ${stops.length} Intermediate Waypoints</span>
            <span class="text-xs text-secondary">Ordered Sequence</span>
          </div>
          <div class="route-stops-list">
            ${stopsTimelineHtml}
          </div>
        </div>

        <!-- Collapsible Buses Drawer -->
        <div class="route-collapsible-drawer route-buses-drawer ${isBusesExpanded ? 'open' : ''}" id="buses-drawer-${route.id}">
          <div class="route-drawer-header">
            <span>🚌 ${runningBuses.length} Active Buses on this Route</span>
            <span class="badge badge-green">● Live Telemetry</span>
          </div>
          <div class="route-buses-grid">
            ${runningBusesHtml}
          </div>
        </div>
      `;

      // Event Listeners for this card
      // 1. Track full route on map
      card.querySelector('.btn-track-full-route').addEventListener('click', () => {
        const repBus = runningBuses[0] || SMART_ST_DATA.buses[0];
        if (repBus) {
          state.selectedBus = repBus;
          navigateTo('tracking-view', { busId: repBus.id });
        }
      });

      // 2. Toggle stops drawer
      card.querySelector('.btn-toggle-stops').addEventListener('click', (e) => {
        const rId = e.currentTarget.dataset.routeId;
        routesScreenState.expandedStops[rId] = !routesScreenState.expandedStops[rId];
        renderRoutesCards();
      });

      // 3. Toggle buses drawer
      card.querySelector('.btn-toggle-buses').addEventListener('click', (e) => {
        const rId = e.currentTarget.dataset.routeId;
        routesScreenState.expandedBuses[rId] = !routesScreenState.expandedBuses[rId];
        renderRoutesCards();
      });

      // 4. Track specific bus buttons inside buses drawer
      card.querySelectorAll('.route-bus-track-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const busId = e.currentTarget.dataset.busId;
          const found = SMART_ST_DATA.buses.find(b => b.id === busId);
          if (found) {
            state.selectedBus = found;
            navigateTo('tracking-view', { busId: found.id });
          }
        });
      });

      container.appendChild(card);
    });
  }

  // Alias for backward-compatibility with any lingering stop-view calls
  function renderStopScreen() {
    renderRoutesScreen();
  }

  // --------------------------------------------------------------------------
  // STOP SEARCH FEATURE ON BUS STOP HOME VIEW
  // --------------------------------------------------------------------------

  function setupStopSearch() {
    const searchInput = document.getElementById('stop-search-input');
    const clearBtn = document.getElementById('btn-clear-stop-search');
    const dropdown = document.getElementById('stop-search-dropdown');

    if (!searchInput || !dropdown) return;

    let allStops = [];

    function buildStopsList() {
      const map = new Map();

      // 1. Primary Major Stops in SMART_ST_DATA.busStops
      SMART_ST_DATA.busStops.forEach(s => {
        map.set(s.id.toLowerCase(), {
          id: s.id,
          name: s.name,
          nameMr: s.nameMr || s.name,
          nameHi: s.nameHi || s.nameMr || s.name,
          village: s.village || '',
          taluka: s.taluka || '',
          district: s.district || 'Maharashtra',
          qrCode: s.qrCode,
          latitude: s.latitude,
          longitude: s.longitude,
          isMajor: true,
          route: 'Major Station QR Hub'
        });
      });

      // 2. Corridor Intermediate Stops from all buses
      if (SMART_ST_DATA.buses) {
        SMART_ST_DATA.buses.forEach(b => {
          if (b.intermediateStops) {
            b.intermediateStops.forEach(st => {
              const nameKey = st.name.toLowerCase();
              if (!map.has(nameKey) && !Array.from(map.values()).some(item => item.name.toLowerCase() === nameKey)) {
                map.set(nameKey, {
                  id: st.name,
                  name: st.name,
                  nameMr: st.nameMr || st.name,
                  nameHi: st.nameHi || st.nameMr || st.name,
                  village: st.name,
                  taluka: b.routeName ? b.routeName.split(' to ')[0] : 'Nashik',
                  district: 'Nashik Region',
                  latitude: st.lat,
                  longitude: st.lng,
                  isMajor: false,
                  route: b.routeName || 'Corridor Highway Route'
                });
              }
            });
          }
        });
      }

      return Array.from(map.values());
    }

    function getStops() {
      if (allStops.length === 0) {
        allStops = buildStopsList();
      }
      return allStops;
    }

    function renderDropdownResults(query) {
      const stops = getStops();
      const cleanQ = (query || '').trim().toLowerCase();

      let matched = [];
      if (!cleanQ) {
        // Show top major hubs / stations when focused with empty query
        matched = stops.filter(s => s.isMajor).slice(0, 6);
      } else {
        matched = stops.filter(s => {
          const matchEn = s.name && s.name.toLowerCase().includes(cleanQ);
          const matchMr = s.nameMr && s.nameMr.toLowerCase().includes(cleanQ);
          const matchHi = s.nameHi && s.nameHi.toLowerCase().includes(cleanQ);
          const matchVil = s.village && s.village.toLowerCase().includes(cleanQ);
          const matchTal = s.taluka && s.taluka.toLowerCase().includes(cleanQ);
          const matchRoute = s.route && s.route.toLowerCase().includes(cleanQ);
          return matchEn || matchMr || matchHi || matchVil || matchTal || matchRoute;
        });

        matched.sort((a, b) => {
          const aStarts = (a.name.toLowerCase().startsWith(cleanQ) || (a.nameMr && a.nameMr.startsWith(cleanQ))) ? 1 : 0;
          const bStarts = (b.name.toLowerCase().startsWith(cleanQ) || (b.nameMr && b.nameMr.startsWith(cleanQ))) ? 1 : 0;
          if (aStarts !== bStarts) return bStarts - aStarts;
          if (a.isMajor !== b.isMajor) return (b.isMajor ? 1 : 0) - (a.isMajor ? 1 : 0);
          return a.name.localeCompare(b.name);
        });

        matched = matched.slice(0, 8);
      }

      if (matched.length === 0) {
        const safeQ = cleanQ.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        dropdown.innerHTML = `
          <div class="stop-search-empty">
            <div>🔍 No bus stops found matching "<strong>${safeQ}</strong>"</div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 4px;">
              Try searching by town or village name (e.g. Niphad, Yeola, Chandori, Saikheda, Sinnar)
            </div>
          </div>
        `;
        dropdown.style.display = 'flex';
        return;
      }

      const activeLat = state.activeStop ? (state.activeStop.latitude || state.activeStop.lat) : null;
      const activeLng = state.activeStop ? (state.activeStop.longitude || state.activeStop.lng) : null;

      let html = '';
      if (!cleanQ) {
        html += `<div class="stop-search-header-label">⭐ Popular Bus Stations & Hubs</div>`;
      }

      matched.forEach(st => {
        const isCurrentActive = state.activeStop && (
          (state.activeStop.id && state.activeStop.id.toLowerCase() === st.id.toLowerCase()) ||
          (state.activeStop.name && state.activeStop.name.toLowerCase() === st.name.toLowerCase())
        );

        let distText = '';
        if (activeLat && activeLng && st.latitude && st.longitude) {
          const distKm = calculateDistanceKm(activeLat, activeLng, st.latitude, st.longitude);
          if (distKm < 0.1) {
            distText = 'Current stop';
          } else if (distKm < 1) {
            distText = `${Math.round(distKm * 1000)} m away`;
          } else {
            distText = `${distKm.toFixed(1)} km away`;
          }
        }

        const dispName = (state.currentLanguage === 'mr' && st.nameMr) ? st.nameMr :
                         (state.currentLanguage === 'hi' && (st.nameHi || st.nameMr)) ? (st.nameHi || st.nameMr) :
                         st.name;
        const altName = (state.currentLanguage === 'mr') ? st.name : (st.nameMr || '');
        const metaSub = st.isMajor
          ? (st.taluka ? `${st.taluka}, ${st.district || 'MSRTC'}` : 'Major MSRTC Station')
          : (st.route || 'Highway Corridor Stop');

        html += `
          <div class="stop-search-item ${isCurrentActive ? 'is-active-stop' : ''}" data-stop-id="${st.id}">
            <div class="stop-search-item-left">
              <span class="stop-search-item-icon">${st.isMajor ? '🚏' : '📍'}</span>
              <div class="stop-search-item-text">
                <div class="stop-search-item-title">
                  <span>${dispName}</span>
                  ${altName && altName !== dispName ? `<span class="stop-search-item-alt">(${altName})</span>` : ''}
                  ${isCurrentActive ? '<span class="badge badge-green" style="font-size: 10px; padding: 1px 6px;">Current</span>' : ''}
                </div>
                <div class="stop-search-item-meta">${metaSub}</div>
              </div>
            </div>
            <div class="stop-search-item-right">
              ${distText ? `<span class="stop-search-item-dist">${distText}</span>` : ''}
              <span class="stop-search-select-badge">Switch ➔</span>
            </div>
          </div>
        `;
      });

      dropdown.innerHTML = html;
      dropdown.style.display = 'flex';

      // Attach click listeners
      dropdown.querySelectorAll('.stop-search-item').forEach(item => {
        item.addEventListener('click', () => {
          const stopId = item.dataset.stopId;
          selectSearchedStop(stopId);
        });
      });
    }

    function selectSearchedStop(stopIdOrName) {
      const resolved = resolveStopObject(stopIdOrName);
      if (resolved) {
        state.activeStop = resolved;
        state.hasUserSelectedStop = true;
        state.lastViewedStopId = resolved.id;
        try { localStorage.setItem('wmb_last_viewed_stop', resolved.id); } catch(e) {}
        renderStopScreen();
        showToast(`🚏 Connected to ${getStopDisplayName(resolved)}`);
        searchInput.value = getStopDisplayName(resolved);
        if (clearBtn) clearBtn.style.display = 'flex';
      } else {
        searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
      }
      dropdown.style.display = 'none';
    }

    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearBtn) clearBtn.style.display = val ? 'flex' : 'none';
      renderDropdownResults(val);
    });

    searchInput.addEventListener('focus', () => {
      renderDropdownResults(searchInput.value);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.hasUserSelectedStop = false;
        searchInput.value = '';
        clearBtn.style.display = 'none';
        renderDropdownResults('');
        searchInput.focus();
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.stop-search-box')) {
        dropdown.style.display = 'none';
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.style.display = 'none';
      }
    });
  }

  // --------------------------------------------------------------------------
  // SCREEN 4: INTERACTIVE LIVE TRACKING MAP (LEAFLET)
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // SCREEN 4: INTERACTIVE LIVE TRACKING MAP & REAL ROAD ROUTING (GOOGLE MAPS STYLE)
  // --------------------------------------------------------------------------

  // Distance calculation helpers (Haversine formula)
  function calculateDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function calculateRoadDistanceBetween(pts, startIdx, endIdx) {
    if (!pts || pts.length === 0) return 0;
    const start = Math.min(startIdx, endIdx);
    const end = Math.max(startIdx, endIdx);
    let total = 0;
    for (let i = start; i < end && i < pts.length - 1; i++) {
      total += calculateDistanceKm(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
    }
    return total;
  }

  // Watermark-Free High Quality Tile Layers (Default: OpenStreetMap Standard)
  const MAP_TILE_LAYERS = [
    {
      name: 'OpenStreetMap Standard',
      icon: '🚏',
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: { maxZoom: 19, attribution: '© OpenStreetMap contributors • Where\'s My Bus?' }
    },
    {
      name: 'Clean Street Map (Esri)',
      icon: '🗺️',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      options: { maxZoom: 19, attribution: 'Tiles © Esri' }
    },
    {
      name: 'Humanitarian Transit',
      icon: '🚌',
      url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      options: { maxZoom: 19, subdomains: ['a', 'b'], attribution: '© OpenStreetMap contributors' }
    },
    {
      name: 'Satellite Aerial View',
      icon: '🛰️',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      options: { maxZoom: 18, attribution: 'Tiles © Esri' }
    }
  ];

  function switchMapTileLayer(index = null) {
    if (!state.mapInstance) return;
    if (index === null) {
      state.activeLayerIndex = (state.activeLayerIndex + 1) % MAP_TILE_LAYERS.length;
    } else {
      state.activeLayerIndex = index;
    }
    const layerDef = MAP_TILE_LAYERS[state.activeLayerIndex];
    if (state.activeTileLayer) {
      state.mapInstance.removeLayer(state.activeTileLayer);
    }
    state.activeTileLayer = L.tileLayer(layerDef.url, layerDef.options).addTo(state.mapInstance);

    const iconSpan = document.getElementById('layer-icon-display');
    if (iconSpan) iconSpan.textContent = layerDef.icon;

    showToast(`Map Layer: ${layerDef.name}`);
  }

  function renderMapBusChips() {
    const container = document.getElementById('map-bus-chips-container');
    if (!container) return;
    container.innerHTML = '';

    const currentBus = state.selectedBus;
    const currentRouteId = currentBus ? currentBus.routeId : 'R-NSK-YEO';
    const userStop = state.activeStop;

    // Filter to ONLY buses running on the SAME corridor route
    const sameRouteBuses = SMART_ST_DATA.buses.filter(b => b.routeId === currentRouteId);
    const candidateBuses = sameRouteBuses.length > 0 ? sameRouteBuses : (currentBus ? [currentBus] : SMART_ST_DATA.buses.slice(0, 3));

    // Map each bus with pass/upcoming status
    const mappedBuses = candidateBuses.map(b => {
      let userStopIdx = -1;
      if (b.intermediateStops && userStop) {
        userStopIdx = b.intermediateStops.findIndex(st => {
          if (st.name && userStop.name && st.name.trim().toLowerCase() === userStop.name.trim().toLowerCase()) return true;
          if (st.nameMr && userStop.nameMr && st.nameMr.trim() === userStop.nameMr.trim()) return true;
          if (st.lat && st.lng && userStop.latitude && userStop.longitude) {
            return calculateDistanceKm(st.lat, st.lng, userStop.latitude, userStop.longitude) < 0.8;
          }
          return false;
        });

        if (userStopIdx === -1 && userStop.latitude && userStop.longitude) {
          let minD = Infinity, closestIdx = -1;
          b.intermediateStops.forEach((st, idx) => {
            if (st.lat && st.lng) {
              const d = calculateDistanceKm(st.lat, st.lng, userStop.latitude, userStop.longitude);
              if (d < minD) { minD = d; closestIdx = idx; }
            }
          });
          if (minD < 8.0) {
            userStopIdx = closestIdx;
          }
        }
      }

      let targetStopIdx = -1;
      if (b.intermediateStops) {
        targetStopIdx = b.intermediateStops.findIndex(st => st.isCurrentTarget);
        if (targetStopIdx === -1) {
          targetStopIdx = b.intermediateStops.findIndex(st => st.status !== 'Departed');
        }
      }

      let isPassed = false;
      if (userStopIdx !== -1) {
        if (targetStopIdx === -1) {
          isPassed = true;
        } else if (targetStopIdx > userStopIdx) {
          isPassed = true;
        } else {
          isPassed = false;
        }
      } else {
        const mid = b.intermediateStops ? Math.floor(b.intermediateStops.length / 2) : 10;
        isPassed = targetStopIdx > mid;
      }

      return { bus: b, isPassed };
    });

    // Sort so UPCOMING buses are shown first!
    mappedBuses.sort((a, b) => {
      if (a.isPassed !== b.isPassed) return a.isPassed ? 1 : -1;
      return 0;
    });

    mappedBuses.forEach(item => {
      const b = item.bus;
      const isPassed = item.isPassed;
      const isSelected = currentBus ? (b.id === currentBus.id) : false;

      const chip = document.createElement('button');
      const statusClass = isPassed ? 'chip-passed' : 'chip-upcoming';
      chip.className = `map-bus-chip ${statusClass} ${isSelected ? 'active' : ''}`;

      const shortPlate = b.number.replace('MH 15 ', '');
      const schedTime = b.scheduledTime || (b.intermediateStops && b.intermediateStops[0] ? b.intermediateStops[0].time : '--:--');

      let badgeLabel = '';
      if (isSelected) {
        badgeLabel = isPassed ? 'Passed ● Live' : 'Upcoming ● Live';
      } else if (isPassed) {
        badgeLabel = '✓ Passed';
      } else {
        badgeLabel = 'Upcoming';
      }

      chip.innerHTML = `
        <span class="chip-num">🚌 ${shortPlate}</span>
        <span class="chip-time">${schedTime}</span>
        <span class="chip-status-tag">${badgeLabel}</span>
      `;

      const stopLabel = userStop ? getStopDisplayName(userStop) : 'your stop';
      chip.title = `${b.number} (${b.type})\nScheduled Departure: ${schedTime}\nStatus for ${stopLabel}: ${isPassed ? 'Passed your stop' : 'Upcoming for your stop'}${isSelected ? ' (Currently Tracking)' : ''}`;

      chip.addEventListener('click', () => {
        state.selectedBus = b;
        renderTrackingScreen();
      });

      container.appendChild(chip);
    });
  }

  // Generate rich, clean on-click popup content for the circular bus icon
  function createBusPopupHtml(bus) {
    return `
      <div class="bus-map-popup-card">
        <div class="popup-bus-header">
          <div class="flex-between gap-2" style="margin-bottom: 4px;">
            <span class="badge" style="background:${bus.badgeColor}; color:#FFFFFF; font-size:11px; padding: 4px 8px;">🚌 ${bus.number}</span>
            <span class="badge badge-green" style="font-size:10px;">● ${bus.status}</span>
          </div>
          <div style="font-weight: 800; font-size: 13px; color: var(--text-main); margin-top: 2px;">${bus.type}</div>
          <div style="font-size: 11px; color: var(--text-secondary); line-height: 1.2;">${bus.routeName}</div>
        </div>
        <div class="popup-metrics-grid">
          <div class="popup-metric">
            <span class="m-val" id="popup-bus-speed">${bus.speed} km/h</span>
            <span class="m-lbl">Speed</span>
          </div>
          <div class="popup-metric">
            <span class="m-val" id="popup-bus-dist">${bus.distanceFromStop} km</span>
            <span class="m-lbl">Distance</span>
          </div>
          <div class="popup-metric">
            <span class="m-val" id="popup-bus-eta">${bus.etaMinutes} mins</span>
            <span class="m-lbl">Live ETA</span>
          </div>
        </div>
        <div class="popup-bus-footer">
          <div>Seats: <strong>${bus.occupancy}</strong></div>
          <div>Driver: <strong>${bus.driverName.split(' ')[0]}</strong></div>
        </div>
      </div>
    `;
  }

  // Format trip timestamp as DD-MM-YYYY HH:mm:ss (like in image 3)
  function formatTripTimestamp(d = new Date()) {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    const secs = String(d.getSeconds()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${mins}:${secs}`;
  }

  // Render Trip Overview & Vertical Timeline (CITILINC / MSRTC style from uploaded images)
  function renderTripDetailsTimeline(bus) {
    // 1. Live Trip Overview Card (Image 3)
    const prevStopEl = document.getElementById('trip-prev-stop');
    const currLocEl = document.getElementById('trip-curr-loc');
    const nextStopEl = document.getElementById('trip-next-stop');
    const refreshTimeEl = document.getElementById('trip-refresh-time');

    // Find index of current target stop
    let currentIdx = bus.intermediateStops ? bus.intermediateStops.findIndex(s => s.isCurrentTarget || s.name === bus.nextStop) : -1;
    if (currentIdx === -1) currentIdx = 2;

    const prevStopObj = bus.intermediateStops ? (bus.intermediateStops[Math.max(0, currentIdx - 1)] || bus.intermediateStops[0]) : null;
    const nextStopObj = bus.intermediateStops ? (bus.intermediateStops[currentIdx] || bus.intermediateStops[bus.intermediateStops.length - 1]) : null;

    if (prevStopEl && prevStopObj) prevStopEl.textContent = getStopDisplayName(prevStopObj);
    if (nextStopEl && nextStopObj) nextStopEl.textContent = getStopDisplayName(nextStopObj);
    if (currLocEl && prevStopObj) {
      const cleanPrevName = getStopDisplayName(prevStopObj).replace(' Bus Stop', '').replace(' Stand', '').replace(' बस स्थानक', '').replace(' थांबा', '');
      currLocEl.textContent = state.currentLanguage === 'mr' ? `महामार्ग कॉरिडॉर (${cleanPrevName} जवळ)` : (state.currentLanguage === 'hi' ? `हाईवे कॉरिडोर (${cleanPrevName} के पास)` : `Highway Corridor (Near ${cleanPrevName})`);
    }
    if (refreshTimeEl) refreshTimeEl.textContent = formatTripTimestamp();

    // 2. Trip Details Header Row (Image 1 & 2)
    const routeNoEl = document.getElementById('trip-route-no');
    const passCountEl = document.getElementById('trip-passengers-count');

    if (routeNoEl) routeNoEl.textContent = `Route No : ${bus.id.replace('BUS-', '')} (${bus.routeId || '101'})`;
    if (passCountEl) {
      const seats = bus.occupancy ? bus.occupancy.split(' ')[0] : '28';
      passCountEl.textContent = `Passengers Count : ${seats}`;
    }

    // 3. Vertical Timeline List (Image 1 & 2)
    const container = document.getElementById('trip-vertical-timeline-container');
    if (!container || !bus.intermediateStops) return;

    container.innerHTML = '';

    bus.intermediateStops.forEach((st, idx) => {
      const isCovered = idx < currentIdx;
      const isCurrent = idx === currentIdx;
      const isUpcoming = idx > currentIdx;

      let statusClass = 'upcoming';
      let statusLabel = getTimelineStatusLabel('upcoming');
      let timeText = st.time || '-';

      if (isCovered) {
        statusClass = 'covered';
        statusLabel = getTimelineStatusLabel('covered');
      } else if (isCurrent) {
        statusClass = 'current';
        statusLabel = getTimelineStatusLabel('current');
        timeText = `${st.time} (${bus.etaMinutes}m)`;
      }

      const displayName = getStopDisplayName(st);

      const row = document.createElement('div');
      row.className = `trip-stop-row ${statusClass}`;
      row.dataset.stopIdx = idx;

      row.innerHTML = `
        <div class="trip-node-col">
          <div class="trip-dot ${statusClass}"></div>
        </div>
        <div class="trip-content-col">
          <div class="trip-stop-title">${displayName}</div>
          <div class="trip-stop-status ${statusClass}">${statusLabel}</div>
        </div>
        <div class="trip-time-col">
          <span class="trip-time-text">${timeText}</span>
          ${(isCurrent || isUpcoming) ? `<button class="btn-stop-alert-bell" data-stop="${st.name}" title="Set reminder for ${displayName}">🔔</button>` : ''}
        </div>
      `;

      container.appendChild(row);
    });

    // Position live bus badge on the active segment (between previous covered stop and next approaching stop)
    const prevRowIdx = Math.max(0, currentIdx - 1);
    const rows = container.querySelectorAll('.trip-stop-row');
    rows.forEach((r, rIdx) => {
      if (rIdx === prevRowIdx) {
        r.classList.add('active-segment');
        r.style.setProperty('--segment-fill', '0%');
      } else {
        r.classList.remove('active-segment');
        r.style.removeProperty('--segment-fill');
      }
    });

    const hostRow = rows[prevRowIdx] || rows[0];
    if (hostRow) {
      const nodeCol = hostRow.querySelector('.trip-node-col');
      if (nodeCol) {
        const badge = document.createElement('div');
        badge.className = 'trip-bus-inline-badge';
        badge.id = 'trip-live-bus-badge';
        badge.textContent = '🚌';
        badge.style.top = '9px';
        nodeCol.appendChild(badge);
      }
    }

    // Auto-scroll timeline to the current approaching stop
    setTimeout(() => {
      const currentStopEl = container.querySelector('.trip-stop-row.current');
      if (currentStopEl) {
        currentStopEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, 150);

    // Wire up reminder bells
    container.querySelectorAll('.btn-stop-alert-bell').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const stopName = e.currentTarget.dataset.stop;
        const isActive = e.currentTarget.classList.toggle('active');
        if (isActive) {
          showToast(`🔔 Reminder alert set for ${stopName}!`);
        } else {
          showToast(`🔕 Reminder removed for ${stopName}`);
        }
      });
    });
  }

  function renderTrackingScreen() {
    const bus = state.selectedBus;
    const stop = state.activeStop;
    
    if (!bus || !stop) return; // Safely abort if missing

    // Header updates
    document.getElementById('track-bus-number').textContent = bus.number;
    document.getElementById('track-bus-route').textContent = getBusRouteName(bus);
    document.getElementById('track-speed').textContent = `${bus.speed} km/h`;
    document.getElementById('track-dist').textContent = `${bus.distanceFromStop} km`;
    document.getElementById('track-eta').textContent = `${bus.etaMinutes} mins`;
    
    const confEl = document.getElementById('track-confidence');
    if (confEl) confEl.textContent = `${bus.confidenceScore}%`;

    const roadInfoEl = document.getElementById('track-bus-road-info');
    if (roadInfoEl) roadInfoEl.textContent = `Via ${bus.via.split(',')[0]}`;

    // Render CITILINC/MSRTC Style Trip Overview & Vertical Timeline
    renderTripDetailsTimeline(bus);

    // Quick chips
    renderMapBusChips();

    // Leaflet Map Initialization with Google-Style Clean Tiles
    const mapContainer = document.getElementById('leaflet-map');
    if (!mapContainer) return;

    if (!state.mapInstance) {
      state.mapInstance = L.map('leaflet-map', {
        zoomControl: false
      }).setView([bus.currentLat, bus.currentLng], 12);

      L.control.zoom({ position: 'bottomright' }).addTo(state.mapInstance);

      // Default to Google-style clean Voyager tiles
      state.activeTileLayer = L.tileLayer(MAP_TILE_LAYERS[0].url, MAP_TILE_LAYERS[0].options).addTo(state.mapInstance);
    }

    // Fix grey tiles on screen switch
    setTimeout(() => {
      if (state.mapInstance) state.mapInstance.invalidateSize();
    }, 200);

    // Retrieve verified real road geometry (OSRM driving highway path)
    let roadPath = (SMART_ST_DATA.routesGeometry && (SMART_ST_DATA.routesGeometry[bus.routeId] || SMART_ST_DATA.routesGeometry[bus.id]))
      ? [...(SMART_ST_DATA.routesGeometry[bus.routeId] || SMART_ST_DATA.routesGeometry[bus.id])]
      : null;

    if (!roadPath || roadPath.length < 2) {
      roadPath = bus.intermediateStops.map(st => [st.lat || stop.latitude, st.lng || stop.longitude]);
    }

    state.busRoadPath = roadPath;

    // Find closest index for bus & stop along the road route
    let minBusD = Infinity, closestBusIdx = 0;
    let minStopD = Infinity, closestStopIdx = 0;
    for (let i = 0; i < roadPath.length; i++) {
      const dBus = calculateDistanceKm(roadPath[i][0], roadPath[i][1], bus.currentLat, bus.currentLng);
      if (dBus < minBusD) { minBusD = dBus; closestBusIdx = i; }

      const dStop = calculateDistanceKm(roadPath[i][0], roadPath[i][1], stop.latitude, stop.longitude);
      if (dStop < minStopD) { minStopD = dStop; closestStopIdx = i; }
    }

    state.busRouteIndex = closestBusIdx;

    // Check if commuter's active stop is on this bus route (<= 8km)
    const isStopOnRoute = minStopD <= 8;
    let targetStopName = getStopDisplayName(stop);
    let targetStopPt = [stop.latitude, stop.longitude];
    let targetStopIdx = closestStopIdx;

    if (!isStopOnRoute) {
      // For buses on other corridors, target the bus's designated next stop
      const busTarget = (bus.intermediateStops && (bus.intermediateStops.find(s => s.isCurrentTarget) || bus.intermediateStops[bus.intermediateStops.length - 1])) || null;
      if (busTarget && busTarget.lat && busTarget.lng) {
        targetStopName = getStopDisplayName(busTarget);
        targetStopPt = [busTarget.lat, busTarget.lng];
        let minTgtD = Infinity, bestTgtIdx = 0;
        for (let i = 0; i < roadPath.length; i++) {
          const d = calculateDistanceKm(roadPath[i][0], roadPath[i][1], busTarget.lat, busTarget.lng);
          if (d < minTgtD) { minTgtD = d; bestTgtIdx = i; }
        }
        targetStopIdx = bestTgtIdx;
      }
    }

    state.busTargetStopIndex = targetStopIdx;
    state.currentTargetStopName = targetStopName;
    state.targetStopPt = targetStopPt;
    state.isStopOnRoute = isStopOnRoute;

    // Clear previous map layers
    if (state.busMarker) state.mapInstance.removeLayer(state.busMarker);
    if (state.stopMarker) state.mapInstance.removeLayer(state.stopMarker);
    if (state.routePolylineCasing) state.mapInstance.removeLayer(state.routePolylineCasing);
    if (state.routePolylineCore) state.mapInstance.removeLayer(state.routePolylineCore);
    if (state.intermediateMarkers && state.intermediateMarkers.length) {
      state.intermediateMarkers.forEach(m => state.mapInstance.removeLayer(m));
      state.intermediateMarkers = [];
    }

    // 1. Draw Real Road Route Polylines (Google Maps Navigation Style: Casing + Inner Glow Core)
    state.routePolylineCasing = L.polyline(roadPath, {
      color: '#0284c7',
      weight: 8,
      opacity: 0.5,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(state.mapInstance);

    state.routePolylineCore = L.polyline(roadPath, {
      color: '#0ea5e9',
      weight: 5,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(state.mapInstance);

    // Update total route distance
    const totalRouteKm = calculateRoadDistanceBetween(roadPath, 0, roadPath.length - 1);
    const totalDistEl = document.getElementById('track-route-total-dist');
    if (totalDistEl) totalDistEl.textContent = `Route: ${totalRouteKm.toFixed(0)} km`;

    // 2. Add Destination Terminal Marker
    const endPt = roadPath[roadPath.length - 1];
    const flagIcon = L.divIcon({
      className: 'custom-flag-leaflet-icon',
      html: `<div class="terminal-flag-pin">🏁</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    const destMarker = L.marker(endPt, { icon: flagIcon }).addTo(state.mapInstance)
      .bindPopup(`<b>Destination: ${getBusDestination(bus)}</b><br>Final Terminal Stop`);
    state.intermediateMarkers.push(destMarker);

    // 3. Add Intermediate Stop Badges along the road
    if (bus.intermediateStops) {
      bus.intermediateStops.forEach(st => {
        if (st.lat && st.lng) {
          const isDeparted = st.status === 'Departed';
          const isTarget = st.isCurrentTarget;
          const wpColor = isDeparted ? '#94A3B8' : (isTarget ? '#10B981' : '#0EA5E9');
          const wpBorder = isDeparted ? '#64748B' : '#FFFFFF';
          const wpSize = isTarget ? 18 : 14;
          const wpAnchor = isTarget ? 9 : 7;

          const wpIcon = L.divIcon({
            className: 'custom-wp-leaflet-icon',
            html: `<div class="waypoint-dot-pin" style="width:${wpSize}px; height:${wpSize}px; background:${wpColor}; border-color:${wpBorder}; box-shadow: 0 2px 8px ${isTarget ? 'rgba(16,185,129,0.5)' : 'rgba(0,0,0,0.25)'};"></div>`,
            iconSize: [wpSize, wpSize],
            iconAnchor: [wpAnchor, wpAnchor]
          });
          const m = L.marker([st.lat, st.lng], { icon: wpIcon, zIndexOffset: isTarget ? 400 : 100 }).addTo(state.mapInstance)
            .bindPopup(`<b>${getStopDisplayName(st)}</b><br>Scheduled: <strong>${st.time || '-'}</strong><br>Status: <strong>${st.status || 'Scheduled'}</strong>`);
          state.intermediateMarkers.push(m);
        }
      });
    }

    // 5. Live Bus Pin (Simple Circular Bus Icon with Live Radar Ping - Click to view bus info)
    const busPt = roadPath[state.busRouteIndex] || [bus.currentLat, bus.currentLng];
    const busIcon = L.divIcon({
      className: 'custom-bus-leaflet-icon',
      html: `
        <div class="live-bus-pin-wrap" title="Bus ${bus.number} - Click for details">
          <div class="live-bus-pulse-ring" style="background: ${bus.badgeColor}40;"></div>
          <div class="live-bus-circle" style="background: ${bus.badgeColor};">
            <span>🚌</span>
          </div>
        </div>
      `,
      iconSize: [42, 42],
      iconAnchor: [21, 21],
      popupAnchor: [0, -22]
    });

    state.busMarker = L.marker(busPt, { icon: busIcon, zIndexOffset: 1000 })
      .addTo(state.mapInstance)
      .bindPopup(createBusPopupHtml(bus));

    // Fit View to show both bus and approaching stop with comfortable padding
    const bounds = L.latLngBounds([busPt, targetStopPt]);
    state.mapInstance.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });

    // Start Live Simulation Loop
    startLiveBusSimulation();
  }

  // Real-time continuous synchronization of Trip Details Vertical Timeline (Progress Bar)
  function updateTimelineProgress(bus, currentTargetIdx, liveFraction = 0.0) {
    const container = document.getElementById('trip-vertical-timeline-container');
    if (!container || !bus.intermediateStops) return;

    const rows = container.querySelectorAll('.trip-stop-row');
    if (!rows || rows.length === 0) return;

    // 1. Update row statuses and labels
    rows.forEach((row, idx) => {
      const isCovered = idx < currentTargetIdx;
      const isCurrent = idx === currentTargetIdx;
      const isUpcoming = idx > currentTargetIdx;

      let statusClass = 'upcoming';
      let statusLabel = getTimelineStatusLabel('upcoming');

      if (isCovered) {
        statusClass = 'covered';
        statusLabel = getTimelineStatusLabel('covered');
      } else if (isCurrent) {
        statusClass = 'current';
        statusLabel = getTimelineStatusLabel('current');
      }

      // Update row class
      if (!row.classList.contains(statusClass)) {
        row.className = `trip-stop-row ${statusClass}`;
      }

      // Update dot class
      const dot = row.querySelector('.trip-dot');
      if (dot && !dot.classList.contains(statusClass)) {
        dot.className = `trip-dot ${statusClass}`;
      }

      // Update status label
      const statusEl = row.querySelector('.trip-stop-status');
      if (statusEl && statusEl.textContent !== statusLabel) {
        statusEl.className = `trip-stop-status ${statusClass}`;
        statusEl.textContent = statusLabel;
      }

      // Update bell visibility
      const bell = row.querySelector('.btn-stop-alert-bell');
      if (bell) {
        bell.style.display = (isCurrent || isUpcoming) ? 'inline-block' : 'none';
      }

      // Update dynamic time text
      const timeEl = row.querySelector('.trip-time-text');
      if (timeEl && bus.intermediateStops[idx]) {
        const st = bus.intermediateStops[idx];
        if (isCurrent) {
          timeEl.textContent = `${st.time} (${bus.etaMinutes}m)`;
        } else {
          timeEl.textContent = st.time || '-';
        }
      }
    });

    // 2. Position the single live moving bus badge along the timeline
    // The bus badge travels along the segment between prevRowIdx and currentTargetIdx
    const prevRowIdx = Math.max(0, currentTargetIdx - 1);
    const hostRow = rows[prevRowIdx];
    const targetRow = rows[currentTargetIdx];

    const frac = Math.max(0, Math.min(1, liveFraction));
    const pct = Math.round(frac * 100);

    // Update active-segment class and gradient fill on the row connecting prevStop to nextStop
    rows.forEach((r, rIdx) => {
      if (rIdx === prevRowIdx) {
        r.classList.add('active-segment');
        r.style.setProperty('--segment-fill', `${pct}%`);
      } else {
        r.classList.remove('active-segment');
        r.style.removeProperty('--segment-fill');
      }
    });

    // Remove any orphaned badges in other rows
    rows.forEach((r, rIdx) => {
      if (rIdx !== prevRowIdx) {
        const b = r.querySelector('.trip-bus-inline-badge');
        if (b) b.remove();
      }
    });

    if (hostRow) {
      const nodeCol = hostRow.querySelector('.trip-node-col');
      if (nodeCol) {
        let badge = nodeCol.querySelector('.trip-bus-inline-badge');
        if (!badge) {
          badge = document.createElement('div');
          badge.className = 'trip-bus-inline-badge';
          badge.id = 'trip-live-bus-badge';
          badge.textContent = '🚌';
          nodeCol.appendChild(badge);
        }

        // Calculate step height between previous stop row and approaching stop row
        let stepHeight = 48;
        if (targetRow && targetRow !== hostRow) {
          stepHeight = targetRow.offsetTop - hostRow.offsetTop;
        } else {
          stepHeight = hostRow.offsetHeight || 48;
        }

        const topPx = 9 + (frac * stepHeight);
        badge.style.top = `${topPx}px`;
      }
    }

    // 3. Smooth auto-scroll only when target stop changes
    if (state.lastTimelineTargetIdx !== currentTargetIdx) {
      state.lastTimelineTargetIdx = currentTargetIdx;
      const currentStopEl = container.querySelector('.trip-stop-row.current');
      if (currentStopEl) {
        currentStopEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }

  // Live Bus Location Movement Engine (Real-Time Physics Animation along Roads)
  function startLiveBusSimulation() {
    stopLiveBusSimulation();

    const bus = state.selectedBus;
    const roadPath = state.busRoadPath;
    if (!roadPath || roadPath.length < 2) return;

    // 1. Map each intermediate stop to its exact geometry road index monotonically
    if (bus.intermediateStops) {
      let lastBest = 0;
      bus.intermediateStops.forEach((st) => {
        let minD = Infinity, bestIdx = lastBest;
        for (let j = lastBest; j < roadPath.length; j++) {
          const d = calculateDistanceKm(roadPath[j][0], roadPath[j][1], st.lat, st.lng);
          if (d < minD) { minD = d; bestIdx = j; }
        }
        st.roadIndex = bestIdx;
        lastBest = bestIdx;
      });
    }

    // 2. Determine initial active approaching stop
    let activeStopIdx = bus.intermediateStops.findIndex(s => s.isCurrentTarget);
    if (activeStopIdx === -1) {
      activeStopIdx = bus.intermediateStops.findIndex(s => s.roadIndex > state.busRouteIndex);
      if (activeStopIdx === -1) activeStopIdx = bus.intermediateStops.length - 1;
    }

    // Ensure stop statuses reflect the active approaching stop
    bus.intermediateStops.forEach((s, idx) => {
      if (idx < activeStopIdx) {
        s.status = 'Departed';
        s.isCurrentTarget = false;
      } else if (idx === activeStopIdx) {
        s.status = 'NEXT STOP';
        s.isCurrentTarget = true;
      } else {
        s.status = 'Scheduled';
        s.isCurrentTarget = false;
      }
    });

    const prevStopInit = bus.intermediateStops[Math.max(0, activeStopIdx - 1)] || bus.intermediateStops[0];
    const targetStopInit = bus.intermediateStops[activeStopIdx] || bus.intermediateStops[bus.intermediateStops.length - 1];

    bus.previousStop = prevStopInit.name;
    bus.nextStop = targetStopInit.name;

    // Initial Overview Card update
    const prevStopElInit = document.getElementById('trip-prev-stop');
    const nextStopElInit = document.getElementById('trip-next-stop');
    const currLocElInit = document.getElementById('trip-curr-loc');
    if (prevStopElInit) prevStopElInit.textContent = getStopDisplayName(prevStopInit);
    if (nextStopElInit) nextStopElInit.textContent = getStopDisplayName(targetStopInit);
    if (currLocElInit) {
      const cleanPrev = getStopDisplayName(prevStopInit).replace(' Bus Stop', '').replace(' Stand', '').replace(' बस स्थानक', '').replace(' थांबा', '');
      currLocElInit.textContent = state.currentLanguage === 'mr' ? `महामार्ग कॉरिडॉर (${cleanPrev} जवळ)` : (state.currentLanguage === 'hi' ? `हाईवे कॉरिडोर (${cleanPrev} के पास)` : `Highway Corridor (Near ${cleanPrev})`);
    }

    // 3. Continuous Simulation Clock: 200ms ticks with smooth sub-meter interpolation
    const TICK_MS = 200;
    const SPEED_SCALE = 3.5; // Realistic smooth visual pacing (~50 km/h)

    let simState = {
      segmentIdx: Math.min(state.busRouteIndex, roadPath.length - 2),
      progress: 0.0,
      speedKmH: 50,
      dwellRemainingMs: 0,
      activeStopIdx: activeStopIdx
    };

    state.simulationInterval = setInterval(() => {
      // A. Dwell at bus stop (passengers boarding, doors open)
      if (simState.dwellRemainingMs > 0) {
        simState.dwellRemainingMs -= TICK_MS;
        simState.speedKmH = 0;
        bus.speed = 0;

        const currentDwellStop = bus.intermediateStops[Math.max(0, simState.activeStopIdx - 1)] || bus.intermediateStops[simState.activeStopIdx];
        const stopDisplayName = getStopDisplayName(currentDwellStop);

        const speedEl = document.getElementById('track-speed');
        const distEl = document.getElementById('track-dist');
        const etaEl = document.getElementById('track-eta');
        const statusBadge = document.getElementById('track-bus-status-badge');
        const bannerTitle = document.getElementById('map-banner-title');
        const bannerSub = document.getElementById('map-banner-sub');

        if (speedEl) speedEl.textContent = '0 km/h';
        if (distEl) distEl.textContent = '0.0 km';
        if (etaEl) etaEl.textContent = '0 mins';
        if (statusBadge) {
          statusBadge.className = 'badge badge-green';
          statusBadge.textContent = state.currentLanguage === 'mr' ? '● स्थानकावर पोहोचली 🚏' : (state.currentLanguage === 'hi' ? '● स्टॉप पर पहुँची 🚏' : '● Arrived at Stop 🚏');
        }
        if (bannerTitle) bannerTitle.textContent = state.currentLanguage === 'mr' ? `${stopDisplayName} येथे! 🚏` : (state.currentLanguage === 'hi' ? `${stopDisplayName} पर! 🚏` : `At ${stopDisplayName}! 🚏`);
        if (bannerSub) bannerSub.textContent = state.currentLanguage === 'mr' ? 'प्रवासी चढत आहेत • दरवाजे उघडे' : (state.currentLanguage === 'hi' ? 'यात्री चढ़ रहे हैं • दरवाजे खुले' : 'Boarding Passengers • Doors Open');

        // During dwell, the bus badge stays firmly on the dwell stop
        updateTimelineProgress(bus, simState.activeStopIdx, 0.0);

        return; // Pause movement while dwelling
      }

      // B. Realistic Speed Modulation (Cruising at 48-54 km/h, decelerating near stop)
      const targetStop = bus.intermediateStops[simState.activeStopIdx];
      const targetRoadIdx = targetStop ? targetStop.roadIndex : (roadPath.length - 1);
      const remainingRoadKm = calculateRoadDistanceBetween(roadPath, simState.segmentIdx, targetRoadIdx);

      let targetSpeed = 50 + Math.sin(Date.now() / 4000) * 4;
      if (remainingRoadKm < 0.3) {
        targetSpeed = 24; // Decelerate smoothly on approach
      }
      simState.speedKmH = Math.round(targetSpeed);
      bus.speed = simState.speedKmH;

      // C. Sub-segment Distance Increment
      const p1 = roadPath[simState.segmentIdx];
      const p2 = roadPath[Math.min(simState.segmentIdx + 1, roadPath.length - 1)];
      const segDistKm = calculateDistanceKm(p1[0], p1[1], p2[0], p2[1]) || 0.05;

      const tickDistKm = (simState.speedKmH / 3600) * (TICK_MS / 1000) * SPEED_SCALE;
      simState.progress += (tickDistKm / segDistKm);

      if (simState.progress >= 1.0) {
        simState.progress = 0.0;
        if (simState.segmentIdx < roadPath.length - 2) {
          simState.segmentIdx += 1;
        } else {
          // Reached route terminus - loop back to start
          simState.segmentIdx = 0;
          simState.activeStopIdx = 1;
          bus.intermediateStops.forEach((s, idx) => {
            s.status = idx === 0 ? 'Departed' : (idx === 1 ? 'NEXT STOP' : 'Scheduled');
            s.isCurrentTarget = (idx === 1);
          });
          bus.previousStop = bus.intermediateStops[0].name;
          bus.nextStop = bus.intermediateStops[1].name;
          updateTimelineProgress(bus, 1, 0.0);
        }
      }

      state.busRouteIndex = simState.segmentIdx;

      // D. Compute Smooth Interpolated Lat/Lng
      const ptA = roadPath[simState.segmentIdx];
      const ptB = roadPath[Math.min(simState.segmentIdx + 1, roadPath.length - 1)];
      const curLat = ptA[0] + (ptB[0] - ptA[0]) * simState.progress;
      const curLng = ptA[1] + (ptB[1] - ptA[1]) * simState.progress;

      bus.currentLat = curLat;
      bus.currentLng = curLng;

      if (state.busMarker) {
        state.busMarker.setLatLng([curLat, curLng]);
      }

      // E. Check if Bus Reached or Passed the Approaching Stop
      if (targetStop) {
        const distToTargetStopKm = calculateDistanceKm(curLat, curLng, targetStop.lat, targetStop.lng);
        const hasPassedGeomIdx = simState.segmentIdx >= targetStop.roadIndex;

        if (hasPassedGeomIdx || distToTargetStopKm <= 0.05) {
          // Arrived at stop! Dwell for 3.5 seconds
          simState.dwellRemainingMs = 3500;

          // Mark current stop as departed / covered
          targetStop.status = 'Departed';
          targetStop.isCurrentTarget = false;
          bus.previousStop = targetStop.name;

          // Update waypoint pin on map
          if (state.intermediateMarkers && state.intermediateMarkers[simState.activeStopIdx]) {
            const stopMarkerObj = state.intermediateMarkers[simState.activeStopIdx];
            if (stopMarkerObj && stopMarkerObj.setIcon) {
              const coveredWpIcon = L.divIcon({
                className: 'custom-wp-leaflet-icon',
                html: `<div class="waypoint-dot-pin" style="background:#5C6BC0; border-color:#FFFFFF;"></div>`,
                iconSize: [14, 14],
                iconAnchor: [7, 7]
              });
              stopMarkerObj.setIcon(coveredWpIcon);
            }
          }

          // Advance target stop to next in sequence
          if (simState.activeStopIdx < bus.intermediateStops.length - 1) {
            simState.activeStopIdx += 1;
            const newTargetStop = bus.intermediateStops[simState.activeStopIdx];
            newTargetStop.status = 'NEXT STOP';
            newTargetStop.isCurrentTarget = true;
            bus.nextStop = newTargetStop.name;
          }

          // SYNC WITH THE PROGRESS BAR IMMEDIATELY (at arrival point)
          updateTimelineProgress(bus, simState.activeStopIdx, 0.0);

          // SYNC TRIP OVERVIEW CARD
          const prevStopEl = document.getElementById('trip-prev-stop');
          const nextStopEl = document.getElementById('trip-next-stop');
          const currLocEl = document.getElementById('trip-curr-loc');
          const pStop = bus.intermediateStops[Math.max(0, simState.activeStopIdx - 1)] || targetStop;
          const nStop = bus.intermediateStops[simState.activeStopIdx] || targetStop;
          if (prevStopEl) prevStopEl.textContent = getStopDisplayName(pStop);
          if (nextStopEl) nextStopEl.textContent = getStopDisplayName(nStop);
          if (currLocEl) {
            const cleanTarget = getStopDisplayName(targetStop).replace(' Bus Stop', '').replace(' Stand', '').replace(' बस स्थानक', '').replace(' थांबा', '');
            currLocEl.textContent = state.currentLanguage === 'mr' ? `महामार्ग कॉरिडॉर (${cleanTarget} जवळ)` : (state.currentLanguage === 'hi' ? `हाईवे कॉरिडोर (${cleanTarget} के पास)` : `Highway Corridor (Near ${cleanTarget})`);
          }
        }
      }

      // F. Compute Continuous Live Fraction between previous stop and approaching stop for 1:1 timeline synchronization
      const prevStopObj = bus.intermediateStops[Math.max(0, simState.activeStopIdx - 1)] || bus.intermediateStops[0];
      const targetStopObj = bus.intermediateStops[simState.activeStopIdx];
      const prevGeomIdx = prevStopObj.roadIndex || 0;
      const targetGeomIdx = targetStopObj ? targetStopObj.roadIndex : (roadPath.length - 1);

      const totalSegmentKm = calculateRoadDistanceBetween(roadPath, prevGeomIdx, targetGeomIdx);
      const distFromPrevKm = calculateRoadDistanceBetween(roadPath, prevGeomIdx, simState.segmentIdx) + (simState.progress * segDistKm);

      let liveFraction = 0.0;
      if (totalSegmentKm > 0.001) {
        liveFraction = distFromPrevKm / totalSegmentKm;
      } else if (targetGeomIdx > prevGeomIdx) {
        const currentGeomPos = simState.segmentIdx + simState.progress;
        liveFraction = (currentGeomPos - prevGeomIdx) / (targetGeomIdx - prevGeomIdx);
      } else {
        liveFraction = simState.progress;
      }
      liveFraction = Math.max(0, Math.min(1, liveFraction));

      // Continuous 1:1 sync with the vertical timeline progress bar on every tick!
      updateTimelineProgress(bus, simState.activeStopIdx, liveFraction);

      // G. Real ETA and Distance Telemetry Calculations
      const currentApproachingStop = bus.intermediateStops[simState.activeStopIdx] || targetStop;
      const distToApproachingKm = Math.max(0.05, calculateRoadDistanceBetween(roadPath, simState.segmentIdx, currentApproachingStop.roadIndex) + (1 - simState.progress) * segDistKm);
      const etaMins = Math.max(1, Math.round(distToApproachingKm / (simState.speedKmH / 60)));

      bus.distanceFromStop = parseFloat(distToApproachingKm.toFixed(1));
      bus.etaMinutes = etaMins;

      // Telemetry DOM updates
      const speedEl = document.getElementById('track-speed');
      const distEl = document.getElementById('track-dist');
      const etaEl = document.getElementById('track-eta');
      const bannerTitle = document.getElementById('map-banner-title');
      const bannerSub = document.getElementById('map-banner-sub');
      const statusBadge = document.getElementById('track-bus-status-badge');

      if (speedEl) speedEl.textContent = `${simState.speedKmH} km/h`;
      if (distEl) distEl.textContent = `${distToApproachingKm.toFixed(1)} km`;
      if (etaEl) etaEl.textContent = `${etaMins} mins`;

      const targetDisplayName = getStopDisplayName(currentApproachingStop);

      if (statusBadge) {
        statusBadge.className = 'badge badge-green';
        statusBadge.textContent = state.currentLanguage === 'mr' ? '● धावत आहे (थेट GPS)' : (state.currentLanguage === 'hi' ? '● चल रही है (लाइव GPS)' : '● Moving (Live GPS)');
      }
      if (bannerTitle) {
        const prefix = state.currentLanguage === 'mr' ? 'कडे मार्गस्थ: ' : (state.currentLanguage === 'hi' ? 'की ओर अग्रसर: ' : 'En Route to ');
        bannerTitle.textContent = `${prefix}${targetDisplayName}`;
      }
      if (bannerSub) {
        const awayStr = state.currentLanguage === 'mr' ? 'अंतर' : (state.currentLanguage === 'hi' ? 'दूरी' : 'away');
        const minsStr = state.currentLanguage === 'mr' ? 'मि.' : (state.currentLanguage === 'hi' ? 'मिनट' : 'mins');
        bannerSub.textContent = `${distToApproachingKm.toFixed(1)} km ${awayStr} • ~${etaMins} ${minsStr} (${simState.speedKmH} km/h)`;
      }

      // Auto-follow bus if enabled (Google Maps Turn-by-Turn Camera)
      if (state.followBus && state.mapInstance) {
        state.mapInstance.panTo([curLat, curLng], { animate: true, duration: 0.25 });
      }

      // Also update popup if open
      const pSpeed = document.getElementById('popup-bus-speed');
      const pDist = document.getElementById('popup-bus-dist');
      const pEta = document.getElementById('popup-bus-eta');
      if (pSpeed) pSpeed.textContent = `${simState.speedKmH} km/h`;
      if (pDist) pDist.textContent = `${distToApproachingKm.toFixed(1)} km`;
      if (pEta) pEta.textContent = `${etaMins} mins`;

      // Update trip overview live refresh timestamp
      const refreshEl = document.getElementById('trip-refresh-time');
      if (refreshEl) refreshEl.textContent = formatTripTimestamp();

    }, TICK_MS);
  }

  function stopLiveBusSimulation() {
    if (state.simulationInterval) {
      clearInterval(state.simulationInterval);
      state.simulationInterval = null;
    }
  }

  // Setup Google Maps Floating Interactive Controls
  function setupMapInteractiveControls() {
    // 1. Layer switcher (Google Clean Voyager / Satellite / OSM)
    const layerBtn = document.getElementById('btn-toggle-map-layer');
    if (layerBtn) {
      layerBtn.addEventListener('click', () => switchMapTileLayer());
    }

    // 2. Follow bus toggle (Auto-center lock)
    const followBtn = document.getElementById('btn-toggle-follow-bus');
    if (followBtn) {
      followBtn.addEventListener('click', () => {
        state.followBus = !state.followBus;
        if (state.followBus) {
          followBtn.classList.add('active');
          if (state.busMarker && state.mapInstance) {
            state.mapInstance.setView(state.busMarker.getLatLng(), 14, { animate: true });
          }
          showToast('🧭 Auto-Follow Bus: ON');
        } else {
          followBtn.classList.remove('active');
          showToast('🧭 Auto-Follow Bus: OFF');
        }
      });
    }

    // 3. Locate My Stop / Browser Geolocation
    const locateBtn = document.getElementById('btn-locate-user-stop');
    if (locateBtn) {
      locateBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const uLat = pos.coords.latitude;
              const uLng = pos.coords.longitude;
              if (state.mapInstance) {
                if (state.userLocationMarker) state.mapInstance.removeLayer(state.userLocationMarker);
                const userIcon = L.divIcon({
                  className: 'custom-user-leaflet-icon',
                  html: `
                    <div style="position:relative; display:flex; align-items:center; justify-content:center;">
                      <div class="live-bus-pulse-ring" style="background:rgba(59,130,246,0.5); width:36px; height:36px;"></div>
                      <div style="width:16px; height:16px; border-radius:50%; background:#2563EB; border:3px solid white; box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>
                    </div>
                  `,
                  iconSize: [36, 36],
                  iconAnchor: [18, 18]
                });
                state.userLocationMarker = L.marker([uLat, uLng], { icon: userIcon }).addTo(state.mapInstance)
                  .bindPopup('<b>Your Current Location</b>').openPopup();
                state.mapInstance.setView([uLat, uLng], 14, { animate: true });
                showToast('📍 Located your live GPS position!');
              }
            },
            () => {
              // Fallback to stop location
              if (state.mapInstance && state.stopMarker) {
                state.mapInstance.setView(state.stopMarker.getLatLng(), 15, { animate: true });
                showToast(`🚏 Centered on ${state.activeStop.name}`);
              }
            },
            { enableHighAccuracy: true, timeout: 5000 }
          );
        } else if (state.mapInstance && state.stopMarker) {
          state.mapInstance.setView(state.stopMarker.getLatLng(), 15, { animate: true });
          showToast(`🚏 Centered on ${state.activeStop.name}`);
        }
      });
    }

    // 4. Fit Full Route
    const fitRouteBtn = document.getElementById('btn-fit-full-route');
    if (fitRouteBtn) {
      fitRouteBtn.addEventListener('click', () => {
        if (state.mapInstance && state.routePolylineCore) {
          state.followBus = false;
          const fb = document.getElementById('btn-toggle-follow-bus');
          if (fb) fb.classList.remove('active');
          state.mapInstance.fitBounds(state.routePolylineCore.getBounds(), { padding: [40, 40], animate: true });
          showToast('📐 Showing Full Route');
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // SCREEN 5: BUS DETAILS & INTERMEDIATE STOPS
  // --------------------------------------------------------------------------

  function renderBusDetailsScreen() {
    const bus = state.selectedBus;
    document.getElementById('detail-bus-number').textContent = bus.number;
    document.getElementById('detail-bus-type').textContent = bus.type;
    document.getElementById('detail-bus-dest').textContent = getBusDestination(bus);
    document.getElementById('detail-bus-driver').textContent = `${bus.driverName} | Conductor: ${bus.conductorName}`;
    document.getElementById('detail-bus-fuel').textContent = bus.fuel;
    document.getElementById('detail-bus-delay').textContent = bus.delayMinutes > 0 ? `${bus.delayMinutes} mins` : "None (On Time)";

    const container = document.getElementById('intermediate-stops-list');
    if (!container) return;

    container.innerHTML = '';
    bus.intermediateStops.forEach(st => {
      const isTarget = st.isCurrentTarget;
      const displayName = getStopDisplayName(st);
      const targetLabel = isTarget ? (state.currentLanguage === 'mr' ? '📍 (लक्षित थांबा)' : (state.currentLanguage === 'hi' ? '📍 (लक्षित स्टॉप)' : '📍 (Target Stop)')) : '';
      const html = `
        <div class="stop-timeline-row ${isTarget ? 'active' : ''}">
          <div class="stop-dot"></div>
          <div class="stop-info">
            <div class="name">${displayName} ${targetLabel}</div>
            <div class="time">Time: <strong>${st.time}</strong> | Status: <span class="badge ${isTarget ? 'badge-green' : 'badge-grey'}">${st.status}</span></div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', html);
    });
  }

  // --------------------------------------------------------------------------
  // SCREEN 6: BUS STOP INFO & FACILITIES
  // --------------------------------------------------------------------------

  function renderStopInfoScreen() {
    const stop = state.activeStop;
    document.getElementById('stop-info-title').textContent = getStopDisplayName(stop);
    document.getElementById('stop-info-landmark').textContent = `Landmark: ${stop.landmark}`;

    // Facilities
    const facContainer = document.getElementById('stop-facilities-grid');
    if (facContainer) {
      facContainer.innerHTML = '';
      stop.facilities.forEach(fac => {
        const facName = (state.currentLanguage === 'mr' && fac.nameMr) ? fac.nameMr : fac.name;
        const html = `
          <div class="amenity-card">
            <div class="amenity-icon">${fac.icon}</div>
            <div>
              <div style="font-weight:700; font-size:13px;">${facName}</div>
              <div style="font-size:11px; color:var(--text-secondary);">${fac.status}</div>
            </div>
          </div>
        `;
        facContainer.insertAdjacentHTML('beforeend', html);
      });
    }

    // Emergency Contacts
    const emgContainer = document.getElementById('stop-emergency-list');
    if (emgContainer) {
      emgContainer.innerHTML = '';
      stop.emergencyContacts.forEach(c => {
        const html = `
          <div class="emergency-row">
            <div>
              <div style="font-weight:700; font-size:14px;">${c.icon} ${c.role}</div>
              <div style="font-size:12px; color:var(--primary-blue); font-weight:700;">${c.number}</div>
            </div>
            <a href="tel:${c.number}" class="btn btn-sm btn-primary">Call Now</a>
          </div>
        `;
        emgContainer.insertAdjacentHTML('beforeend', html);
      });
    }
  }

  // --------------------------------------------------------------------------
  // SCREEN 7: SCHEDULE & TIMETABLE
  // --------------------------------------------------------------------------

  function renderScheduleScreen(filterType = 'ALL') {
    const tbody = document.getElementById('schedule-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    const list = SMART_ST_DATA.schedules.filter(item => {
      if (filterType === 'ALL') return true;
      return item.type.toUpperCase() === filterType.toUpperCase();
    });

    list.forEach(sch => {
      const isLive = sch.isLive;
      const html = `
        <tr class="${isLive ? 'live-row' : ''}">
          <td><strong>${sch.time}</strong></td>
          <td>${sch.destination}</td>
          <td><span class="badge badge-grey">${sch.type}</span></td>
          <td>
            ${isLive ? '<span class="badge badge-green">● LIVE NOW</span>' : `<span class="badge badge-grey">${sch.status}</span>`}
          </td>
        </tr>
      `;
      tbody.insertAdjacentHTML('beforeend', html);
    });
  }

  // --------------------------------------------------------------------------
  // SCREEN 8: JOURNEY PLANNER
  // --------------------------------------------------------------------------

  function setupJourneyPlanner() {
    const searchInput = document.getElementById('journey-dest-input');
    const searchBtn = document.getElementById('btn-search-journey');
    const resultsContainer = document.getElementById('journey-results-container');

    if (!searchBtn || !searchInput) return;

    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        showToast('Please enter a destination (e.g., Swargate Pune)');
        return;
      }

      const activeStopName = getStopDisplayName(state.activeStop);

      resultsContainer.innerHTML = `
        <div class="card mt-2">
          <div class="card-header-row">
            <span class="badge badge-green">Direct MSRTC Bus</span>
            <span class="badge badge-blue">Est. Fare: ₹285</span>
          </div>
          <h3 style="font-size:18px; font-weight:800;">${activeStopName} ➔ ${query.toUpperCase()}</h3>
          <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">
            Next Direct Bus: <strong>MH 15 EG 4021</strong> in 5 minutes.<br>
            Total Distance: ~106 km | Travel Time: ~1 hr 55 mins
          </p>
          <button class="btn btn-sm btn-primary mt-2" onclick="window.WMB.navigateTo('tracking-view', {busId:'BUS-101'})">
            Track Bus Now
          </button>
        </div>

        <div class="card mt-2">
          <div class="card-header-row">
            <span class="badge badge-orange">Connecting Option</span>
            <span class="badge badge-blue">Est. Fare: ₹120</span>
          </div>
          <h3 style="font-size:18px; font-weight:800;">Via Vinchur / Niphad Transfer</h3>
          <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">
            Leg 1: ${activeStopName} to Vinchur (Local Bus in 12 mins)<br>
            Leg 2: Vinchur to Destination (Express Bus every 15 mins)
          </p>
        </div>
      `;
    });
  }

  // --------------------------------------------------------------------------
  // SCREEN 12: COMMUNITY PASSENGER REPORTS
  // --------------------------------------------------------------------------

  function renderCommunityReportsScreen() {
    const container = document.getElementById('community-reports-list');
    if (!container) return;

    container.innerHTML = '';
    state.communityReportsList.forEach(rep => {
      const html = `
        <div class="report-feed-item">
          <div class="flex-between">
            <strong style="font-size:14px;">${rep.title}</strong>
            <span class="badge badge-orange">${rep.timestamp}</span>
          </div>
          <div style="font-size:12px; color:var(--text-secondary);">
            Reported by: ${rep.reporter} | Auto-expires in: <strong>${rep.expiresIn}</strong>
          </div>
          <div class="flex-between mt-2">
            <span class="badge badge-green">${rep.statusBadge}</span>
            <button class="btn btn-sm btn-secondary btn-upvote-report" data-id="${rep.id}">
              👍 Upvote (${rep.votes})
            </button>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', html);
    });

    // Upvote handlers
    container.querySelectorAll('.btn-upvote-report').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const target = state.communityReportsList.find(r => r.id === id);
        if (target) {
          target.votes += 1;
          showToast('Thank you! Report vote updated.');
          renderCommunityReportsScreen();
        }
      });
    });
  }

  function setupNewReportForm() {
    const submitBtn = document.getElementById('btn-submit-community-report');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', () => {
      const select = document.getElementById('report-type-select');
      const noteInput = document.getElementById('report-note-input');
      const val = select.value;
      const note = noteInput.value.trim() || "Reported by passenger at bus stop";

      const newReport = {
        id: `REP-${Date.now()}`,
        stopId: state.activeStop ? state.activeStop.id : (SMART_ST_DATA.busStops[0] ? SMART_ST_DATA.busStops[0].id : 'NPH-01'),
        type: val,
        title: note,
        reporter: "Commuter Passenger",
        timestamp: "Just now",
        expiresIn: "30 mins",
        votes: 1,
        statusBadge: "Verified by 1 commuter"
      };

      state.communityReportsList.unshift(newReport);
      showToast('Passenger report published!');
      noteInput.value = '';
      closeModal('report-modal');
      renderCommunityReportsScreen();
    });
  }

  // --------------------------------------------------------------------------
  // SCREEN 13: ADMIN DASHBOARD
  // --------------------------------------------------------------------------

  function renderAdminDashboardScreen() {
    const stats = SMART_ST_DATA.adminStats;
    document.getElementById('admin-total-buses').textContent = stats.activeBusesCount;
    document.getElementById('admin-ontime-rate').textContent = `${stats.onTimePercentage}%`;
    document.getElementById('admin-active-stops').textContent = stats.activeQrStops;
    document.getElementById('admin-daily-passengers').textContent = stats.dailyPassengers.toLocaleString();

    const delayedListContainer = document.getElementById('admin-delayed-routes-list');
    if (delayedListContainer) {
      delayedListContainer.innerHTML = '';
      stats.mostDelayedRoutes.forEach(r => {
        const html = `
          <div class="flex-between" style="padding:8px 0; border-bottom:1px solid var(--border-subtle); font-size:13px;">
            <div>
              <strong>${r.route}</strong>
              <div style="font-size:11px; color:var(--text-secondary);">${r.cause}</div>
            </div>
            <span class="badge badge-orange">Avg: ${r.delayAvg}</span>
          </div>
        `;
        delayedListContainer.insertAdjacentHTML('beforeend', html);
      });
    }
  }

  // --------------------------------------------------------------------------
  // SCREEN 10: VOICE VIEW & ASSISTANT
  // --------------------------------------------------------------------------

  function renderVoiceViewScreen() {
    const speakerBtn = document.getElementById('voice-speaker-hero-btn');
    if (speakerBtn) {
      speakerBtn.onclick = () => {
        announceBusArrival(state.selectedBus);
      };
    }
  }

  // --------------------------------------------------------------------------
  // UI Helpers (Toast & Modal)
  // --------------------------------------------------------------------------

  function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  function openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.add('active');
  }

  function closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove('active');
  }

  // --------------------------------------------------------------------------
  // Global Event Listeners Setup
  // --------------------------------------------------------------------------

  function setupEventListeners() {
    // Navigation items click
    document.querySelectorAll('[data-screen-target]').forEach(el => {
      el.addEventListener('click', (e) => {
        const target = e.currentTarget.dataset.screenTarget;
        navigateTo(target);
      });
    });

    // Language Selector Buttons
    document.querySelectorAll('.lang-selector-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.dataset.lang;
        updateAppLanguage(lang);
      });
    });

    // Top Header Language Dropdown Pill (Replaces accessibility button)
    const headerLangBtn = document.getElementById('header-lang-dropdown-btn');
    const headerLangMenu = document.getElementById('header-lang-menu');

    if (headerLangBtn && headerLangMenu) {
      headerLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        headerLangMenu.classList.toggle('open');
      });

      const langOptions = headerLangMenu.querySelectorAll('.header-lang-option');
      langOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          const selectedLang = opt.getAttribute('data-lang');
          if (selectedLang) {
            updateAppLanguage(selectedLang);
          }
          headerLangMenu.classList.remove('open');
        });
      });

      document.addEventListener('click', (e) => {
        if (!headerLangBtn.contains(e.target) && !headerLangMenu.contains(e.target)) {
          headerLangMenu.classList.remove('open');
        }
      });
    }

    // QR Sample Switcher Buttons
    document.querySelectorAll('.sample-qr-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stopId = e.currentTarget.dataset.stopId;
        simulateQRScan(stopId);
      });
    });

    // Schedule Tab Filter Buttons
    document.querySelectorAll('.schedule-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.schedule-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const filter = e.currentTarget.dataset.filter;
        renderScheduleScreen(filter);
      });
    });

    // Accessibility Toggles
    const darkToggle = document.getElementById('toggle-dark-mode');
    if (darkToggle) {
      darkToggle.addEventListener('change', (e) => {
        if (e.target.checked) document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');
      });
    }

    const highContrastToggle = document.getElementById('toggle-high-contrast');
    if (highContrastToggle) {
      highContrastToggle.addEventListener('change', (e) => {
        if (e.target.checked) document.body.classList.add('high-contrast');
        else document.body.classList.remove('high-contrast');
      });
    }

    const largeTextToggle = document.getElementById('toggle-large-text');
    if (largeTextToggle) {
      largeTextToggle.addEventListener('change', (e) => {
        if (e.target.checked) document.body.classList.add('large-text-mode');
        else document.body.classList.remove('large-text-mode');
      });
    }

    // Modal Triggers
    const openReportModalBtn = document.getElementById('btn-open-report-modal');
    if (openReportModalBtn) {
      openReportModalBtn.addEventListener('click', () => openModal('report-modal'));
    }

    // Flashlight / Torch Toggle Button
    const btnToggleTorch = document.getElementById('btn-toggle-torch');
    if (btnToggleTorch) {
      btnToggleTorch.addEventListener('click', toggleTorch);
    }

    // QR Image File Upload Scanner
    const qrFileInput = document.getElementById('qr-file-input');
    if (qrFileInput) {
      qrFileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.getElementById('qr-scan-canvas') || document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(img, 0, 0);

            // Attempt native BarcodeDetector scan first
            if (state.barcodeDetector) {
              state.barcodeDetector.detect(canvas)
                .then(barcodes => {
                  if (barcodes && barcodes.length > 0 && barcodes[0].rawValue) {
                    handleScannedQr(barcodes[0].rawValue);
                  } else {
                    scanUploadedImageWithJsQR(canvas, ctx);
                  }
                })
                .catch(() => scanUploadedImageWithJsQR(canvas, ctx));
            } else {
              scanUploadedImageWithJsQR(canvas, ctx);
            }
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
        e.target.value = ''; // reset so same file can be re-selected
      });
    }

    function scanUploadedImageWithJsQR(canvas, ctx) {
      let decoded = false;
      if (typeof jsQR !== 'undefined') {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imgData.data, imgData.width, imgData.height, {
          inversionAttempts: "dontInvert"
        });
        if (code && code.data) {
          decoded = true;
          handleScannedQr(code.data);
        }
      }
      if (!decoded) {
        showToast('No readable QR code found in this image. Please try a clearer picture.');
      }
    }

    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.currentTarget.closest('.modal-backdrop');
        if (modal) modal.classList.remove('active');
      });
    });

    setupJourneyPlanner();
    setupNewReportForm();
    setupMapInteractiveControls();
    setupNearbyStopsFeature();
    setupStopSearch();
    setupRoutesScreen();
    setupNearbyStopsScreen();
    setupNetworkStatus();
    setupHomeFeatures();
    setupAccessibilityControls();

    // Trigger initial high-accuracy GPS check
    requestUserGpsLocation(
      pos => {
        renderHomeNearbyStopCard();
        renderNearbyBusStops(pos.coords.latitude, pos.coords.longitude);
        if (state.currentScreen === 'nearby-stops-view') {
          renderNearbyStopsScreen();
        }
      },
      err => {
        // Quiet fallback
      }
    );
  }

  function setupHomeFeatures() {
    // 1. Feedback Modal Trigger & Submit
    const btnOpenFeedback = document.getElementById('btn-open-feedback-modal');
    if (btnOpenFeedback) {
      btnOpenFeedback.addEventListener('click', () => openModal('feedback-modal'));
    }

    const btnSubmitFeedback = document.getElementById('btn-submit-feedback');
    if (btnSubmitFeedback) {
      let lastFeedbackTime = 0;
      btnSubmitFeedback.addEventListener('click', () => {
        const now = Date.now();
        if (now - lastFeedbackTime < 5000) {
          showToast('Please wait a moment before submitting again.');
          return;
        }

        const catSelect = document.getElementById('feedback-category-select');
        const msgInput = document.getElementById('feedback-message-input');
        const contactInput = document.getElementById('feedback-contact-input');

        const message = msgInput ? msgInput.value.trim() : '';
        if (!message) {
          showToast('Please enter your feedback message.');
          if (msgInput) msgInput.focus();
          return;
        }

        const newFeedback = {
          id: `FB-${Date.now()}`,
          category: catSelect ? catSelect.value : 'general',
          message: message,
          contact: contactInput ? contactInput.value.trim() : '',
          submittedAt: new Date().toISOString()
        };

        state.feedbackList.unshift(newFeedback);
        try { localStorage.setItem('wmb_feedbacks', JSON.stringify(state.feedbackList)); } catch(e) {}
        lastFeedbackTime = now;

        showToast('🙏 Thank you! Your feedback has been recorded.');
        if (msgInput) msgInput.value = '';
        if (contactInput) contactInput.value = '';
        closeModal('feedback-modal');
      });
    }

    // 2. Auth Modal (Sign In / Create Account)
    const btnSignIn = document.getElementById('btn-account-signin');
    const btnSignUp = document.getElementById('btn-account-signup');
    const authModalTitle = document.getElementById('auth-modal-title');
    const authTabSignIn = document.getElementById('auth-tab-signin');
    const authTabSignUp = document.getElementById('auth-tab-signup');
    const authNameGroup = document.getElementById('auth-name-group');
    const authSubmitBtn = document.getElementById('btn-auth-submit');
    const authForm = document.getElementById('auth-form');

    function setAuthMode(signUp) {
      if (signUp) {
        if (authModalTitle) authModalTitle.textContent = 'Create Account';
        if (authTabSignUp) authTabSignUp.className = 'btn btn-sm btn-primary active';
        if (authTabSignIn) authTabSignIn.className = 'btn btn-sm btn-secondary';
        if (authNameGroup) authNameGroup.style.display = 'block';
        if (authSubmitBtn) authSubmitBtn.textContent = 'Create Account';
      } else {
        if (authModalTitle) authModalTitle.textContent = 'Sign In';
        if (authTabSignIn) authTabSignIn.className = 'btn btn-sm btn-primary active';
        if (authTabSignUp) authTabSignUp.className = 'btn btn-sm btn-secondary';
        if (authNameGroup) authNameGroup.style.display = 'none';
        if (authSubmitBtn) authSubmitBtn.textContent = 'Sign In';
      }
    }

    if (btnSignIn) {
      btnSignIn.addEventListener('click', () => {
        setAuthMode(false);
        openModal('auth-modal');
      });
    }

    if (btnSignUp) {
      btnSignUp.addEventListener('click', () => {
        setAuthMode(true);
        openModal('auth-modal');
      });
    }

    if (authTabSignIn) {
      authTabSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        setAuthMode(false);
      });
    }

    if (authTabSignUp) {
      authTabSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        setAuthMode(true);
      });
    }

    if (authForm) {
      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const contactInput = document.getElementById('auth-contact-input');
        const passwordInput = document.getElementById('auth-password-input');
        const nameInput = document.getElementById('auth-name-input');

        const contactVal = contactInput ? contactInput.value.trim() : '';
        const passwordVal = passwordInput ? passwordInput.value.trim() : '';
        const nameVal = nameInput ? nameInput.value.trim() : '';

        if (!contactVal || !passwordVal) {
          showToast('Please enter your contact number and password.');
          return;
        }

        const displayName = nameVal || (contactVal.includes('@') ? contactVal.split('@')[0] : 'Passenger ' + contactVal.slice(-4));
        const user = {
          name: displayName,
          contact: contactVal,
          favorites: [...state.favorites],
          createdAt: new Date().toISOString()
        };

        state.currentUser = user;
        try { localStorage.setItem('wmb_currentUser', JSON.stringify(user)); } catch(e) {}

        showToast(`🎉 Welcome, ${user.name}!`);
        closeModal('auth-modal');
        if (contactInput) contactInput.value = '';
        if (passwordInput) passwordInput.value = '';
        if (nameInput) nameInput.value = '';

        renderAccountScreen();
        renderHomeDashboard();
      });
    }

    const btnSignOut = document.getElementById('btn-account-signout');
    if (btnSignOut) {
      btnSignOut.addEventListener('click', () => {
        state.currentUser = null;
        try { localStorage.removeItem('wmb_currentUser'); } catch(e) {}
        showToast('Signed out successfully.');
        renderAccountScreen();
        renderHomeDashboard();
      });
    }

    // 3. Add Favorite Stop Modal
    const btnOpenAddFav = document.getElementById('btn-open-add-favorite');
    const menuFavorites = document.getElementById('account-menu-favorites');
    const favSearchInput = document.getElementById('favorite-search-input');
    const favResultsContainer = document.getElementById('favorite-search-results');

    function populateFavoritePicker(query = '') {
      if (!favResultsContainer) return;
      favResultsContainer.innerHTML = '';
      const q = query.toLowerCase().trim();

      const candidateMap = new Map();
      SMART_ST_DATA.busStops.forEach(s => candidateMap.set(s.id, s));

      const filtered = Array.from(candidateMap.values()).filter(s => {
        if (!q) return true;
        return (s.name && s.name.toLowerCase().includes(q)) ||
               (s.nameMr && s.nameMr.includes(q)) ||
               (s.taluka && s.taluka.toLowerCase().includes(q)) ||
               (s.village && s.village.toLowerCase().includes(q));
      }).slice(0, 15);

      if (filtered.length === 0) {
        favResultsContainer.innerHTML = '<div class="text-sm text-center p-2" style="color:var(--text-secondary);">No matching stops found.</div>';
        return;
      }

      filtered.forEach(st => {
        const isFav = state.favorites.includes(st.id);
        const item = document.createElement('div');
        item.className = 'favorite-search-item';
        item.innerHTML = `
          <div>
            <strong>${getStopDisplayName(st)}</strong>
            <div class="text-sm">${st.taluka || 'Nashik'} • ${st.qrCode || 'MSRTC'}</div>
          </div>
          <button class="btn btn-sm ${isFav ? 'btn-secondary' : 'btn-outline-primary'} btn-toggle-fav-pick" data-stop-id="${st.id}">
            ${isFav ? '⭐ Starred' : '+ Add'}
          </button>
        `;

        const btn = item.querySelector('.btn-toggle-fav-pick');
        if (btn) {
          btn.addEventListener('click', () => {
            if (state.favorites.includes(st.id)) {
              removeFavoriteStop(st.id);
              btn.className = 'btn btn-sm btn-outline-primary';
              btn.textContent = '+ Add';
            } else {
              addFavoriteStop(st.id);
              btn.className = 'btn btn-sm btn-secondary';
              btn.textContent = '⭐ Starred';
            }
          });
        }

        favResultsContainer.appendChild(item);
      });
    }

    if (btnOpenAddFav) {
      btnOpenAddFav.addEventListener('click', () => {
        if (favSearchInput) favSearchInput.value = '';
        populateFavoritePicker('');
        openModal('add-favorite-modal');
      });
    }

    if (menuFavorites) {
      menuFavorites.addEventListener('click', () => {
        if (favSearchInput) favSearchInput.value = '';
        populateFavoritePicker('');
        openModal('add-favorite-modal');
      });
    }

    if (favSearchInput) {
      favSearchInput.addEventListener('input', (e) => {
        populateFavoritePicker(e.target.value);
      });
    }

    // 4. How It Works Modal
    const btnHowItWorks = document.getElementById('btn-home-how-it-works');
    if (btnHowItWorks) {
      btnHowItWorks.addEventListener('click', () => openModal('how-it-works-modal'));
    }

    // 5. Account menu shortcuts
    const menuMyReports = document.getElementById('account-menu-my-reports');
    if (menuMyReports) {
      menuMyReports.addEventListener('click', () => navigateTo('community-view'));
    }

    // 6. Action: Find a Bus Stop on Home (fallback if button present)
    const btnFindStop = document.getElementById('home-action-find-stop');
    if (btnFindStop) {
      btnFindStop.addEventListener('click', () => {
        navigateTo('stop-view');
        setTimeout(() => {
          const inp = document.getElementById('stop-search-input');
          if (inp) inp.focus();
        }, 300);
      });
    }

    // 7. Navigation Side Drawer Handlers
    const homeMenuBtn = document.getElementById('home-menu-btn');
    const sideDrawer = document.getElementById('side-drawer');
    const sideDrawerBackdrop = document.getElementById('side-drawer-backdrop');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    function openSideDrawer() {
      if (sideDrawer) sideDrawer.classList.add('open');
      if (sideDrawerBackdrop) sideDrawerBackdrop.classList.add('open');
    }

    function closeSideDrawer() {
      if (sideDrawer) sideDrawer.classList.remove('open');
      if (sideDrawerBackdrop) sideDrawerBackdrop.classList.remove('open');
    }

    if (homeMenuBtn) homeMenuBtn.addEventListener('click', openSideDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeSideDrawer);
    if (sideDrawerBackdrop) sideDrawerBackdrop.addEventListener('click', closeSideDrawer);

    // Close drawer when clicking any nav item in drawer
    const drawerLinks = document.querySelectorAll('.drawer-link-item');
    drawerLinks.forEach(btn => {
      btn.addEventListener('click', () => {
        closeSideDrawer();
      });
    });

    const drawerBtnFeedback = document.getElementById('drawer-btn-feedback');
    if (drawerBtnFeedback) {
      drawerBtnFeedback.addEventListener('click', () => {
        closeSideDrawer();
        openModal('feedback-modal');
      });
    }

    const drawerBtnGrievance = document.getElementById('drawer-btn-grievance');
    if (drawerBtnGrievance) {
      drawerBtnGrievance.addEventListener('click', () => {
        closeSideDrawer();
        openModal('report-modal');
      });
    }

    const drawerBtnHelpline = document.getElementById('drawer-btn-helpline');
    if (drawerBtnHelpline) {
      drawerBtnHelpline.addEventListener('click', () => {
        closeSideDrawer();
        openModal('helpline-modal');
      });
    }

    // 9. Home Quick Search with Instant Suggestions
    const quickSearchInput = document.getElementById('home-quick-search-input');
    const quickSearchBtn = document.getElementById('home-quick-search-btn');
    const quickSearchDropdown = document.getElementById('home-search-dropdown');

    if (quickSearchInput && quickSearchDropdown) {
      quickSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
          quickSearchDropdown.style.display = 'none';
          quickSearchDropdown.innerHTML = '';
          return;
        }

        // Search bus stops
        const matchedStops = SMART_ST_DATA.busStops.filter(s => 
          (s.name && s.name.toLowerCase().includes(query)) ||
          (s.nameMr && s.nameMr.includes(query)) ||
          (s.village && s.village.toLowerCase().includes(query)) ||
          (s.taluka && s.taluka.toLowerCase().includes(query))
        ).slice(0, 6);

        // Search buses / routes
        const matchedBuses = SMART_ST_DATA.buses.filter(b =>
          (b.number && b.number.toLowerCase().includes(query)) ||
          (b.routeName && b.routeName.toLowerCase().includes(query)) ||
          (b.destination && b.destination.toLowerCase().includes(query)) ||
          (b.type && b.type.toLowerCase().includes(query))
        ).slice(0, 4);

        if (matchedStops.length === 0 && matchedBuses.length === 0) {
          quickSearchDropdown.innerHTML = '<div class="p-3 text-center text-sm" style="color:var(--text-secondary);">No stops or buses found for "' + query + '"</div>';
          quickSearchDropdown.style.display = 'flex';
          return;
        }

        quickSearchDropdown.innerHTML = '';

        // Render Stops
        matchedStops.forEach(stop => {
          const item = document.createElement('div');
          item.className = 'home-search-item';
          item.innerHTML = `
            <div>
              <div style="font-weight: 700; font-size: 13px;">🚏 ${getStopDisplayName(stop)}</div>
              <div class="text-xs" style="color: var(--text-secondary);">${stop.taluka || 'Nashik'} • ${stop.qrCode || 'MSRTC'}</div>
            </div>
            <span class="badge badge-blue">View Live</span>
          `;
          item.onclick = () => {
            quickSearchDropdown.style.display = 'none';
            quickSearchInput.value = '';
            openLiveMapForStop(stop);
          };
          quickSearchDropdown.appendChild(item);
        });

        // Render Buses
        matchedBuses.forEach(bus => {
          const item = document.createElement('div');
          item.className = 'home-search-item';
          item.innerHTML = `
            <div>
              <div style="font-weight: 700; font-size: 13px;">🚌 ${bus.number} (${bus.type})</div>
              <div class="text-xs" style="color: var(--text-secondary);">${bus.routeName} • ETA: ${bus.etaMinutes}m</div>
            </div>
            <span class="badge badge-green">Track GPS</span>
          `;
          item.onclick = () => {
            quickSearchDropdown.style.display = 'none';
            quickSearchInput.value = '';
            state.selectedBus = bus;
            navigateTo('tracking-view', { busId: bus.id });
          };
          quickSearchDropdown.appendChild(item);
        });

        quickSearchDropdown.style.display = 'flex';
      });

      if (quickSearchBtn) {
        quickSearchBtn.addEventListener('click', () => {
          quickSearchInput.focus();
        });
      }

      document.addEventListener('click', (e) => {
        if (!quickSearchInput.contains(e.target) && !quickSearchDropdown.contains(e.target)) {
          quickSearchDropdown.style.display = 'none';
        }
      });
    }

    // 10. Portal 12-Button Grid Direct Actions
    const btnPortalBookTicket = document.getElementById('btn-portal-book-ticket');
    if (btnPortalBookTicket) {
      btnPortalBookTicket.addEventListener('click', () => openModal('ticket-booking-modal'));
    }

    const btnPortalViewTickets = document.getElementById('btn-portal-view-tickets');
    if (btnPortalViewTickets) {
      btnPortalViewTickets.addEventListener('click', () => openModal('view-tickets-modal'));
    }

    const btnPortalMyPass = document.getElementById('btn-portal-my-pass');
    if (btnPortalMyPass) {
      btnPortalMyPass.addEventListener('click', () => openModal('my-pass-modal'));
    }

    const btnPortalNearbyStops = document.getElementById('btn-portal-nearby-stops');
    if (btnPortalNearbyStops) {
      btnPortalNearbyStops.addEventListener('click', () => {
        navigateTo('nearby-stops-view');
      });
    }

    const btnPortalLocateMe = document.getElementById('btn-portal-locate-me');
    if (btnPortalLocateMe) {
      btnPortalLocateMe.addEventListener('click', () => {
        showToast('Acquiring live GPS coordinates...');
        requestUserGpsLocation(
          pos => {
            renderPortalNearbyStopsList();
            renderHomeNearbyStopCard();
            renderNearbyBusStops(pos.coords.latitude, pos.coords.longitude);
            showToast('Updated nearby stops based on your location!');
          },
          err => {
            showToast('Could not acquire GPS position. Showing regional stops.');
          }
        );
      });
    }

    const btnPortalMyFavourites = document.getElementById('btn-portal-my-favourites');
    if (btnPortalMyFavourites) {
      btnPortalMyFavourites.addEventListener('click', () => {
        renderPortalFavoritesList();
        openModal('home-favorites-modal');
      });
    }

    const btnPortalFeedback = document.getElementById('btn-portal-feedback');
    if (btnPortalFeedback) {
      btnPortalFeedback.addEventListener('click', () => openModal('feedback-modal'));
    }

    const btnPortalGrievance = document.getElementById('btn-portal-grievance');
    if (btnPortalGrievance) {
      btnPortalGrievance.addEventListener('click', () => openModal('report-modal'));
    }

    const btnPortalApplyPass = document.getElementById('btn-portal-apply-pass');
    if (btnPortalApplyPass) {
      btnPortalApplyPass.addEventListener('click', () => openModal('offline-pass-modal'));
    }

    const btnPortalHelpline = document.getElementById('btn-portal-helpline');
    if (btnPortalHelpline) {
      btnPortalHelpline.addEventListener('click', () => openModal('helpline-modal'));
    }

    // 11. New Modal Actions
    const btnProceedBooking = document.getElementById('btn-proceed-booking');
    if (btnProceedBooking) {
      btnProceedBooking.addEventListener('click', () => {
        const fromVal = document.getElementById('booking-from-select')?.value || '';
        const toVal = document.getElementById('booking-to-select')?.value || '';
        closeModal('ticket-booking-modal');
        navigateTo('planner-view');
        setTimeout(() => {
          const originInp = document.getElementById('planner-origin');
          const destInp = document.getElementById('planner-dest');
          if (originInp && fromVal) originInp.value = fromVal;
          if (destInp && toVal) destInp.value = toVal;
          const planBtn = document.getElementById('btn-plan-journey');
          if (planBtn) planBtn.click();
        }, 200);
      });
    }

    const btnShowTicketQr = document.getElementById('btn-show-ticket-qr');
    if (btnShowTicketQr) {
      btnShowTicketQr.addEventListener('click', () => {
        showToast('📱 Conductor QR code active and verified.');
      });
    }

    const btnBookNewFromView = document.getElementById('btn-book-new-ticket-from-view');
    if (btnBookNewFromView) {
      btnBookNewFromView.addEventListener('click', () => {
        closeModal('view-tickets-modal');
        openModal('ticket-booking-modal');
      });
    }

    const btnRenewPass = document.getElementById('btn-renew-pass');
    if (btnRenewPass) {
      btnRenewPass.addEventListener('click', () => {
        showToast('🔄 Renewal request submitted to MSRTC Nashik Division.');
      });
    }

    const btnDownloadPass = document.getElementById('btn-download-pass');
    if (btnDownloadPass) {
      btnDownloadPass.addEventListener('click', () => {
        showToast('📥 Smart Pass downloaded to device storage.');
      });
    }

    const btnPortalAddFav = document.getElementById('btn-portal-add-favorite');
    if (btnPortalAddFav) {
      btnPortalAddFav.addEventListener('click', () => {
        closeModal('home-favorites-modal');
        if (favSearchInput) favSearchInput.value = '';
        populateFavoritePicker('');
        openModal('add-favorite-modal');
      });
    }
  }


  function setupAccessibilityControls() {
    const toggleDark = document.getElementById('toggle-dark-mode');
    const toggleContrast = document.getElementById('toggle-high-contrast');
    const toggleLarge = document.getElementById('toggle-large-text');

    // Restore saved preferences
    const isDark = localStorage.getItem('wmb_dark_mode') === 'true';
    const isContrast = localStorage.getItem('wmb_high_contrast') === 'true';
    const isLarge = localStorage.getItem('wmb_large_text') === 'true';

    if (toggleDark) {
      toggleDark.checked = isDark;
      document.body.classList.toggle('dark-mode', isDark);
      toggleDark.addEventListener('change', (e) => {
        const checked = e.target.checked;
        document.body.classList.toggle('dark-mode', checked);
        try { localStorage.setItem('wmb_dark_mode', checked); } catch(err) {}
        showToast(checked ? '🌙 Dark Mode activated' : '☀️ Light Mode activated');
      });
    }

    if (toggleContrast) {
      toggleContrast.checked = isContrast;
      document.body.classList.toggle('high-contrast', isContrast);
      toggleContrast.addEventListener('change', (e) => {
        const checked = e.target.checked;
        document.body.classList.toggle('high-contrast', checked);
        try { localStorage.setItem('wmb_high_contrast', checked); } catch(err) {}
        showToast(checked ? '👁️ High Contrast Mode activated' : 'Standard Contrast restored');
      });
    }

    if (toggleLarge) {
      toggleLarge.checked = isLarge;
      document.body.classList.toggle('large-text-mode', isLarge);
      toggleLarge.addEventListener('change', (e) => {
        const checked = e.target.checked;
        document.body.classList.toggle('large-text-mode', checked);
        try { localStorage.setItem('wmb_large_text', checked); } catch(err) {}
        showToast(checked ? '🔍 Large Readable Text activated' : 'Standard Text Size restored');
      });
    }
  }
  function setupNetworkStatus() {
    const banner = document.getElementById('offline-banner') || document.querySelector('.offline-banner');
    if (!banner) return;
    function updateOnlineStatus() {
      if (navigator.onLine) {
        banner.style.display = 'none';
      } else {
        banner.style.display = 'flex';
      }
    }
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  }

  // --------------------------------------------------------------------------
  // Application Bootstrap
  // --------------------------------------------------------------------------

  setupEventListeners();

  // Expose global methods for inline HTML handlers if needed
  window.WMB = {
    navigateTo,
    showToast,
    openModal,
    closeModal,
    simulateQRScan,
    renderRoutesScreen,
    renderNearbyStopsScreen,
    renderHomeDashboard,
    openLiveMapForStop,
    findBestUpcomingBusForStop
  };
  window.SmartST = window.WMB;

  // Start on Splash Screen
  navigateTo('splash-view');
});