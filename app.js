/**
 * Where's My Bus? - MSRTC Live Bus Tracking System
 * Core Web Application Logic & Telemetry Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Application State
  const state = {
    currentScreen: 'splash-view',
    currentLanguage: 'mr', // Default to Marathi for rural commuters
    activeStop: SMART_ST_DATA.busStops[0],
    selectedBus: SMART_ST_DATA.buses[0],
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
      renderHomeScreen();
    } else if (screenId === 'tracking-view') {
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
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    showToast(`Language set to ${dict[langCode] || langCode.toUpperCase()}`);
    
    // Re-render active view to refresh dynamic text
    navigateTo(state.currentScreen);
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

  function startCameraScan() {
    state.isCameraScanning = true;
    const video = document.getElementById('camera-video-element');
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then(stream => {
          if (video) video.srcObject = stream;
        })
        .catch(err => {
          console.warn("[WMB] Real camera access fallback to simulated QR feed.", err);
        });
    }
  }

  function stopCameraScan() {
    state.isCameraScanning = false;
    const video = document.getElementById('camera-video-element');
    if (video && video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      video.srcObject = null;
    }
  }

  function simulateQRScan(stopId) {
    const targetStop = SMART_ST_DATA.busStops.find(s => s.id === stopId) || SMART_ST_DATA.busStops[0];
    state.activeStop = targetStop;
    showToast(`QR Scanned! Connected to ${targetStop.name}`);
    navigateTo('home-view');
  }

  // --------------------------------------------------------------------------
  // SCREEN 3: BUS STOP HOME
  // --------------------------------------------------------------------------

  function renderHomeScreen() {
    const stop = state.activeStop;
    const lang = state.currentLanguage;

    // Header updates
    const stopNameEl = document.getElementById('home-stop-name');
    if (stopNameEl) stopNameEl.textContent = lang === 'mr' ? stop.nameMr : stop.name;

    const stopLocEl = document.getElementById('home-stop-location');
    if (stopLocEl) stopLocEl.textContent = `${stop.village}, ${stop.taluka}, ${stop.district} (${stop.qrCode})`;

    // Render Arrival Cards
    const container = document.getElementById('arrivals-cards-container');
    if (!container) return;

    container.innerHTML = '';

    SMART_ST_DATA.buses.forEach(bus => {
      const isLate = bus.delayMinutes > 0;
      const statusBadgeClass = isLate ? 'badge-orange' : 'badge-green';
      const statusText = isLate ? `${bus.delayMinutes} min late (${bus.status})` : bus.status;

      const cardHtml = `
        <div class="card arrival-card ${isLate ? 'delayed' : ''}">
          <div class="card-header-row">
            <span class="badge" style="background-color:${bus.badgeColor}20; color:${bus.badgeColor}; border:1px solid ${bus.badgeColor}40;">
              🚌 ${bus.type}
            </span>
            <span class="badge ${statusBadgeClass}">● ${statusText}</span>
          </div>

          <div class="arrival-main-info">
            <div>
              <div class="bus-dest">${lang === 'mr' ? bus.destinationMr : bus.destination}</div>
              <div class="bus-via">Via: ${bus.via} | No: <strong>${bus.number}</strong></div>
            </div>
            <div class="eta-box">
              <div class="eta-mins">${bus.etaMinutes} min</div>
              <div class="eta-label">${bus.distanceFromStop} km away</div>
            </div>
          </div>

          <div class="flex-between mt-2" style="font-size:12px; color:var(--text-secondary);">
            <span>Seats: <strong>${bus.occupancy}</strong></span>
            <span>GPS Confidence: <strong style="color:var(--status-green);">${bus.confidenceScore}%</strong></span>
          </div>

          <div class="arrival-card-actions">
            <button class="card-action-btn btn-track-bus" data-bus-id="${bus.id}">
              🗺️ <span>Track Live</span>
            </button>
            <button class="card-action-btn btn-view-route" data-bus-id="${bus.id}">
              📋 <span>Stops</span>
            </button>
            <button class="card-action-btn btn-notify-bus" data-bus-id="${bus.id}">
              🔔 <span>Alert</span>
            </button>
            <button class="card-action-btn btn-announce-bus" data-bus-id="${bus.id}">
              🔊 <span>Speak</span>
            </button>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Attach Action Listeners
    container.querySelectorAll('.btn-track-bus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.busId;
        navigateTo('tracking-view', { busId: id });
      });
    });

    container.querySelectorAll('.btn-view-route').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.busId;
        navigateTo('bus-details-view', { busId: id });
      });
    });

    container.querySelectorAll('.btn-announce-bus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.busId;
        const bus = SMART_ST_DATA.buses.find(b => b.id === id);
        if (bus) announceBusArrival(bus);
      });
    });

    container.querySelectorAll('.btn-notify-bus').forEach(btn => {
      btn.addEventListener('click', () => {
        showToast('🔔 Alert set! You will be notified when bus is 2 km away');
      });
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

  // Watermark-Free High Quality Tile Layers (Esri Street, OSM Standard, OSM HOT, Esri Satellite)
  const MAP_TILE_LAYERS = [
    {
      name: 'Clean Street Map (Google Style)',
      icon: '🗺️',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      options: { maxZoom: 19, attribution: '© Esri • Where\'s My Bus?' }
    },
    {
      name: 'OpenStreetMap Standard',
      icon: '🚏',
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: { maxZoom: 19, attribution: '© OpenStreetMap contributors' }
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

    SMART_ST_DATA.buses.forEach(b => {
      const isSelected = b.id === state.selectedBus.id;
      const chip = document.createElement('button');
      chip.className = `map-bus-chip ${isSelected ? 'active' : ''}`;
      chip.textContent = `${b.number.split(' ').slice(2).join(' ')} (${b.destination.split(' ')[0]})`;
      chip.title = `${b.type} - ${b.routeName}`;
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

  function renderTrackingScreen() {
    const bus = state.selectedBus;
    const stop = state.activeStop;

    // Header updates
    document.getElementById('track-bus-number').textContent = bus.number;
    document.getElementById('track-bus-route').textContent = bus.routeName;
    document.getElementById('track-speed').textContent = `${bus.speed} km/h`;
    document.getElementById('track-dist').textContent = `${bus.distanceFromStop} km`;
    document.getElementById('track-eta').textContent = `${bus.etaMinutes} mins`;
    
    const confEl = document.getElementById('track-confidence');
    if (confEl) confEl.textContent = `${bus.confidenceScore}%`;

    const roadInfoEl = document.getElementById('track-bus-road-info');
    if (roadInfoEl) roadInfoEl.textContent = `Via ${bus.via.split(',')[0]}`;

    // Timeline Updates
    document.getElementById('timeline-prev-stop').textContent = bus.previousStop.split(' ')[0];
    document.getElementById('timeline-curr-stop').textContent = stop.name.replace(' Bus Stop', '');
    document.getElementById('timeline-next-dest').textContent = bus.destination.split(' ')[0];

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
    let roadPath = (SMART_ST_DATA.routesGeometry && SMART_ST_DATA.routesGeometry[bus.id])
      ? [...SMART_ST_DATA.routesGeometry[bus.id]]
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
    state.busTargetStopIndex = closestStopIdx;

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
      .bindPopup(`<b>Destination: ${bus.destination}</b><br>Final Terminal Stop`);
    state.intermediateMarkers.push(destMarker);

    // 3. Add Intermediate Stop Badges along the road
    if (bus.intermediateStops) {
      bus.intermediateStops.forEach(st => {
        if (st.lat && st.lng && !st.isCurrentTarget) {
          const isDeparted = st.status === 'Departed';
          const wpIcon = L.divIcon({
            className: 'custom-wp-leaflet-icon',
            html: `<div class="waypoint-dot-pin" style="background:${isDeparted ? '#94A3B8' : '#0EA5E9'}; border-color:${isDeparted ? '#64748B' : '#FFFFFF'};"></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
          });
          const m = L.marker([st.lat, st.lng], { icon: wpIcon }).addTo(state.mapInstance)
            .bindPopup(`<b>${st.name}</b><br>Scheduled: <strong>${st.time}</strong><br>Status: ${st.status}`);
          state.intermediateMarkers.push(m);
        }
      });
    }

    // 4. Commuter's Bus Stop Pin (High Visibility with Pulse Ring)
    const stopIcon = L.divIcon({
      className: 'custom-stop-leaflet-icon',
      html: `
        <div class="live-stop-pin-wrap">
          <div class="live-bus-pulse-ring" style="background: rgba(14, 165, 233, 0.4);"></div>
          <div class="live-stop-beacon">🚏</div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });

    state.stopMarker = L.marker([stop.latitude, stop.longitude], { icon: stopIcon, zIndexOffset: 500 })
      .addTo(state.mapInstance)
      .bindPopup(`<b>${stop.name}</b><br>Your Stop (${stop.village})<br>Active Live QR Station`);

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

    // Fit View to show both bus and stop with comfortable padding
    const bounds = L.latLngBounds([busPt, [stop.latitude, stop.longitude]]);
    state.mapInstance.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });

    // Start Live Simulation Loop
    startLiveBusSimulation();
  }

  // Live Bus Location Movement Engine (Real-Time Animation along Roads)
  function startLiveBusSimulation() {
    stopLiveBusSimulation();

    const bus = state.selectedBus;
    const stop = state.activeStop;
    const roadPath = state.busRoadPath;
    if (!roadPath || roadPath.length === 0) return;

    state.simulationInterval = setInterval(() => {
      // Step the bus forward along the actual road path
      if (state.busRouteIndex < roadPath.length - 1) {
        state.busRouteIndex += 1;
      } else {
        // Loop when reaching destination terminal
        state.busRouteIndex = Math.max(0, state.busTargetStopIndex - 12);
      }

      const currentPos = roadPath[state.busRouteIndex];
      bus.currentLat = currentPos[0];
      bus.currentLng = currentPos[1];

      // Update bus marker position on map smoothly
      if (state.busMarker) {
        state.busMarker.setLatLng(currentPos);
      }

      // Calculate remaining road distance to Shivare Stop
      const remainingKm = calculateRoadDistanceBetween(roadPath, state.busRouteIndex, state.busTargetStopIndex);
      
      // Dynamic realistic speed variation (48 - 58 km/h)
      const speed = Math.floor(48 + Math.sin(Date.now() / 4000) * 8 + Math.random() * 3);
      bus.speed = speed;
      
      // Calculate real ETA in minutes based on real road distance
      const etaMins = Math.max(1, Math.round((remainingKm / (speed / 60))));
      bus.etaMinutes = etaMins;
      bus.distanceFromStop = parseFloat(remainingKm.toFixed(1));

      // Telemetry DOM updates
      const speedEl = document.getElementById('track-speed');
      const distEl = document.getElementById('track-dist');
      const etaEl = document.getElementById('track-eta');
      const bannerTitle = document.getElementById('map-banner-title');
      const bannerSub = document.getElementById('map-banner-sub');
      const statusBadge = document.getElementById('track-bus-status-badge');

      if (speedEl) speedEl.textContent = `${speed} km/h`;
      if (distEl) distEl.textContent = `${remainingKm.toFixed(1)} km`;
      if (etaEl) etaEl.textContent = `${etaMins} mins`;

      // Check if bus arrived at stop
      const isAtStop = Math.abs(state.busRouteIndex - state.busTargetStopIndex) <= 1 || remainingKm < 0.2;
      if (isAtStop) {
        if (statusBadge) {
          statusBadge.className = 'badge badge-green';
          statusBadge.textContent = '● Arrived at Stop 🚏';
        }
        if (bannerTitle) bannerTitle.textContent = `Bus Arrived at ${stop.name}! 🚏`;
        if (bannerSub) bannerSub.textContent = `Boarding Now • Doors Open`;
      } else {
        if (statusBadge) {
          statusBadge.className = 'badge badge-green';
          statusBadge.textContent = '● Moving (Live GPS)';
        }
        if (bannerTitle) bannerTitle.textContent = `En Route to ${stop.name}`;
        if (bannerSub) bannerSub.textContent = `${remainingKm.toFixed(1)} km away • ~${etaMins} mins at ${speed} km/h`;
      }

      // Auto-follow bus if enabled (Google Maps Turn-by-Turn Camera)
      if (state.followBus && state.mapInstance) {
        state.mapInstance.panTo(currentPos, { animate: true, duration: 1 });
      }

      // Also update popup if open
      const pSpeed = document.getElementById('popup-bus-speed');
      const pDist = document.getElementById('popup-bus-dist');
      const pEta = document.getElementById('popup-bus-eta');
      if (pSpeed) pSpeed.textContent = `${speed} km/h`;
      if (pDist) pDist.textContent = `${remainingKm.toFixed(1)} km`;
      if (pEta) pEta.textContent = `${etaMins} mins`;

    }, 1800);
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
    document.getElementById('detail-bus-dest').textContent = bus.destination;
    document.getElementById('detail-bus-driver').textContent = `${bus.driverName} | Conductor: ${bus.conductorName}`;
    document.getElementById('detail-bus-fuel').textContent = bus.fuel;
    document.getElementById('detail-bus-delay').textContent = bus.delayMinutes > 0 ? `${bus.delayMinutes} mins` : "None (On Time)";

    const container = document.getElementById('intermediate-stops-list');
    if (!container) return;

    container.innerHTML = '';
    bus.intermediateStops.forEach(st => {
      const isTarget = st.isCurrentTarget;
      const html = `
        <div class="stop-timeline-row ${isTarget ? 'active' : ''}">
          <div class="stop-dot"></div>
          <div class="stop-info">
            <div class="name">${st.name} ${isTarget ? '📍 (Your Stop)' : ''}</div>
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
    document.getElementById('stop-info-title').textContent = stop.name;
    document.getElementById('stop-info-landmark').textContent = `Landmark: ${stop.landmark}`;

    // Facilities
    const facContainer = document.getElementById('stop-facilities-grid');
    if (facContainer) {
      facContainer.innerHTML = '';
      stop.facilities.forEach(fac => {
        const html = `
          <div class="amenity-card">
            <div class="amenity-icon">${fac.icon}</div>
            <div>
              <div style="font-weight:700; font-size:13px;">${fac.name}</div>
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

      resultsContainer.innerHTML = `
        <div class="card mt-2">
          <div class="card-header-row">
            <span class="badge badge-green">Direct MSRTC Bus</span>
            <span class="badge badge-blue">Est. Fare: ₹285</span>
          </div>
          <h3 style="font-size:18px; font-weight:800;">${state.activeStop.name} ➔ ${query.toUpperCase()}</h3>
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
            Leg 1: ${state.activeStop.name} to Vinchur (Local Bus in 12 mins)<br>
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
        stopId: state.activeStop.id,
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

    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.currentTarget.closest('.modal-backdrop');
        if (modal) modal.classList.remove('active');
      });
    });

    setupJourneyPlanner();
    setupNewReportForm();
    setupMapInteractiveControls();
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
    simulateQRScan
  };

  // Start on Splash Screen
  navigateTo('splash-view');
});
