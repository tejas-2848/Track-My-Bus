/**
 * SmartST - MSRTC Intelligent Bus Stop System
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
    busMarker: null,
    routePolyline: null,
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
    console.log(`[SmartST] Navigating to screen: ${screenId}`);
    
    // Stop camera if leaving scanner
    if (state.currentScreen === 'scanner-view' && screenId !== 'scanner-view') {
      stopCameraScan();
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
      if (nav.dataset.screen === screenId) {
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
          console.warn("[SmartST] Real camera access fallback to simulated QR feed.", err);
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

  function renderTrackingScreen() {
    const bus = state.selectedBus;
    const stop = state.activeStop;

    // Telemetry text updates
    document.getElementById('track-bus-number').textContent = bus.number;
    document.getElementById('track-bus-route').textContent = bus.routeName;
    document.getElementById('track-speed').textContent = `${bus.speed} km/h`;
    document.getElementById('track-dist').textContent = `${bus.distanceFromStop} km`;
    document.getElementById('track-eta').textContent = `${bus.etaMinutes} mins`;

    // Timeline Updates
    document.getElementById('timeline-prev-stop').textContent = bus.previousStop;
    document.getElementById('timeline-curr-stop').textContent = stop.name;
    document.getElementById('timeline-next-dest').textContent = bus.destination;

    // Leaflet Map Initialization
    const mapContainer = document.getElementById('leaflet-map');
    if (!mapContainer) return;

    if (!state.mapInstance) {
      // Create Leaflet Map instance
      state.mapInstance = L.map('leaflet-map').setView([stop.latitude, stop.longitude], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap | MSRTC SmartST'
      }).addTo(state.mapInstance);
    } else {
      state.mapInstance.setView([bus.currentLat, bus.currentLng], 12);
    }

    // Clear existing markers
    if (state.busMarker) state.mapInstance.removeLayer(state.busMarker);
    if (state.routePolyline) state.mapInstance.removeLayer(state.routePolyline);

    // Custom Bus Icon
    const busIcon = L.divIcon({
      className: 'custom-bus-leaflet-icon',
      html: `<div style="background:${bus.badgeColor}; color:white; padding:8px 12px; border-radius:20px; font-weight:800; font-size:12px; box-shadow:0 4px 14px rgba(0,0,0,0.3); border:2px solid white; display:flex; align-items:center; gap:4px;">🚌 ${bus.number}</div>`,
      iconSize: [120, 36],
      iconAnchor: [60, 18]
    });

    // Custom Bus Stop Icon
    const stopIcon = L.divIcon({
      className: 'custom-stop-leaflet-icon',
      html: `<div style="background:#0B63E5; color:white; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:18px; border:3px solid white; box-shadow:0 4px 10px rgba(0,0,0,0.3);">🚏</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    // Add Bus Marker
    state.busMarker = L.marker([bus.currentLat, bus.currentLng], { icon: busIcon })
      .addTo(state.mapInstance)
      .bindPopup(`<b>${bus.number} (${bus.type})</b><br>Speed: ${bus.speed} km/h<br>ETA: ${bus.etaMinutes} mins`);

    // Add Bus Stop Marker
    L.marker([stop.latitude, stop.longitude], { icon: stopIcon })
      .addTo(state.mapInstance)
      .bindPopup(`<b>${stop.name}</b><br>Your location`);

    // Polyline Route Path
    const routeCoords = [
      [19.9975, 73.7898], // Nashik CBS
      [19.8620, 74.0150], // Sinnar
      [bus.currentLat, bus.currentLng], // Bus Position
      [stop.latitude, stop.longitude], // Shivare Stop
      [18.5204, 73.8567]  // Swargate Pune
    ];

    state.routePolyline = L.polyline(routeCoords, { color: '#0B63E5', weight: 5, opacity: 0.8, dashArray: '8, 8' }).addTo(state.mapInstance);
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
          <h3 style="font-size:18px; font-weight:800;">Shivare Stop ➔ ${query.toUpperCase()}</h3>
          <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">
            Next Direct Bus: <strong>MH 15 EG 4021</strong> in 6 minutes.<br>
            Total Distance: 184 km | Travel Time: ~3 hrs 40 mins
          </p>
          <button class="btn btn-sm btn-primary mt-2" onclick="window.SmartST.navigateTo('tracking-view', {busId:'BUS-101'})">
            Track Bus Now
          </button>
        </div>

        <div class="card mt-2">
          <div class="card-header-row">
            <span class="badge badge-orange">Connecting Option</span>
            <span class="badge badge-blue">Est. Fare: ₹240</span>
          </div>
          <h3 style="font-size:18px; font-weight:800;">Via Sinnar Bus Stand Transfer</h3>
          <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">
            Leg 1: Shivare to Sinnar (Local Bus in 14 mins)<br>
            Leg 2: Sinnar to Destination (Express Bus every 20 mins)
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
  }

  // --------------------------------------------------------------------------
  // Application Bootstrap
  // --------------------------------------------------------------------------

  setupEventListeners();

  // Expose global methods for inline HTML handlers if needed
  window.SmartST = {
    navigateTo,
    showToast,
    openModal,
    closeModal,
    simulateQRScan
  };

  // Start on Splash Screen
  navigateTo('splash-view');
});
