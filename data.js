/**
 * SmartST - MSRTC Intelligent Bus Stop System
 * Database & Mock Telemetry Store for Rural Maharashtra
 */

const SMART_ST_DATA = {
  // Current active bus stop
  activeStopId: "SHV-01",

  // Multilingual Support Dictionary
  i18n: {
    en: {
      appName: "SmartST",
      tagline: "Know before you wait",
      scanQrBtn: "Scan Bus Stop QR",
      demoBtn: "Try Demo Mode",
      busStop: "Bus Stop",
      lastUpdated: "Last Updated",
      liveArrivals: "Live Arrivals",
      trackBus: "Track Bus",
      viewRoute: "View Route",
      notifyMe: "Notify Me",
      speakAnnouncement: "Voice Announcement",
      facilities: "Stop Facilities",
      emergencyContacts: "Emergency Contacts",
      schedule: "Timetable & Schedule",
      journeyPlanner: "Journey Planner",
      communityReports: "Community Live Reports",
      adminDashboard: "Admin Dashboard",
      accessibility: "Accessibility & Modes",
      speed: "Speed",
      distance: "Distance",
      eta: "ETA",
      occupancy: "Seats",
      type: "Bus Type",
      delay: "Status",
      onTime: "On Time",
      runningLate: "Running Late",
      scheduled: "Scheduled",
      searchDestination: "Where do you want to go?",
      findBuses: "Find Buses",
      reportIssue: "Report Bus Status",
      submitReport: "Submit Passenger Report",
      speechPrompt: "Click for voice announcement in your language",
      voiceModeTitle: "Voice Announcement Engine",
      languageSelect: "Language",
      marathi: "मराठी (Marathi)",
      english: "English",
      hindi: "हिंदी (Hindi)",
      lowNetNotice: "Slow Network Detected - SmartST Offline Mode Active (Lightweight view)"
    },
    mr: {
      appName: "स्मार्ट एस.टी.",
      tagline: "थांबण्यापूर्वी वेळ जाणून घ्या",
      scanQrBtn: "बस स्थानक QR स्कॅन करा",
      demoBtn: "डेमो मोड वापरा",
      busStop: "बस थांबा",
      lastUpdated: "शेवटचे अपडेट",
      liveArrivals: "थेट येणाऱ्या बसेस",
      trackBus: "लाइव्ह ट्रॅक करा",
      viewRoute: "मार्ग पहा",
      notifyMe: "सूचना मिळवा",
      speakAnnouncement: "आवाज घोषणा (ध्वनी)",
      facilities: "थांब्यावरील सुविधा",
      emergencyContacts: "आणीबाणी संपर्क",
      schedule: "वेळापत्रक",
      journeyPlanner: "प्रवास नियोजन",
      communityReports: "प्रवाशांचे थेट रिपोर्ट",
      adminDashboard: "प्रशासकीय डॅशबोर्ड",
      accessibility: "सुलभता आणि मोड्स",
      speed: "वेग",
      distance: "अंतर",
      eta: "येण्याची वेळ",
      occupancy: "बैठक क्षमता",
      type: "बस प्रकार",
      delay: "स्थिती",
      onTime: "वेळेवर",
      runningLate: "उशिरा",
      scheduled: "नियोजित",
      searchDestination: "तुम्हाला कुठे जायचे आहे?",
      findBuses: "बसेस शोधा",
      reportIssue: "बसची माहिती रिपोर्ट करा",
      submitReport: "माहिती पाठवा",
      speechPrompt: "तुमच्या भाषेत घोषणा ऐकण्यासाठी क्लिक करा",
      voiceModeTitle: "ध्वनी घोषणा प्रणाली",
      languageSelect: "भाषा",
      marathi: "मराठी (Marathi)",
      english: "English",
      hindi: "हिंदी (Hindi)",
      lowNetNotice: "धीमी इंटरनेट गती - स्मार्ट एसटी लाईट मोड चालू आहे"
    },
    hi: {
      appName: "स्मार्ट एसटी",
      tagline: "इंतजार करने से पहले जानें",
      scanQrBtn: "बस स्टॉप QR स्कैन करें",
      demoBtn: "डेमो मोड आज़माएं",
      busStop: "बस स्टॉप",
      lastUpdated: "अंतिम अपडेट",
      liveArrivals: "लाइव आगमन",
      trackBus: "लाइव ट्रैक करें",
      viewRoute: "मार्ग देखें",
      notifyMe: "अलर्ट सेट करें",
      speakAnnouncement: "आवाज घोषणा",
      facilities: "स्टॉप सुविधाएं",
      emergencyContacts: "आपातकालीन संपर्क",
      schedule: "समय सारणी",
      journeyPlanner: "यात्रा योजना",
      communityReports: "यात्री लाइव रिपोर्ट",
      adminDashboard: "एडमिन डैशबोर्ड",
      accessibility: "सुगमता और मोड",
      speed: "गति",
      distance: "दूरी",
      eta: "अनुमानित समय",
      occupancy: "सीट स्थिति",
      type: "बस प्रकार",
      delay: "स्थिति",
      onTime: "समय पर",
      runningLate: "देरी से",
      scheduled: "निर्धारित",
      searchDestination: "आप कहां जाना चाहते हैं?",
      findBuses: "बसें खोजें",
      reportIssue: "बस स्थिति रिपोर्ट करें",
      submitReport: "रिपोर्ट भेजें",
      speechPrompt: "अपनी भाषा में घोषणा सुनने के लिए क्लिक करें",
      voiceModeTitle: "आवाज घोषणा प्रणाली",
      languageSelect: "भाषा",
      marathi: "मराठी (Marathi)",
      english: "English",
      hindi: "हिंदी (Hindi)",
      lowNetNotice: "धीमी इंटरनेट गति - स्मार्ट एसटी लाइट मोड सक्रिय"
    }
  },

  // Bus Stops database
  busStops: [
    {
      id: "SHV-01",
      qrCode: "MSRTC-MH15-SHV01",
      name: "Shivare Bus Stop",
      nameMr: "शिवरे बस स्थानक",
      village: "Shivare",
      taluka: "Sinnar",
      district: "Nashik",
      pincode: "422103",
      latitude: 19.8245,
      longitude: 73.9892,
      landmark: "Near Shivare Gram Panchayat & Hanuman Temple, NH 60",
      photo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      facilities: [
        { name: "Passenger Bench", nameMr: "बैठक बाकडा", icon: "🪑", status: "Available" },
        { name: "Rain Shade", nameMr: "पक्का शेड", icon: "⛱️", status: "Available" },
        { name: "Drinking Water", nameMr: "पिण्याचे पाणी", icon: "🚰", status: "Available" },
        { name: "Solar Lighting", nameMr: "सौर पथदिवे", icon: "💡", status: "Functional" },
        { name: "Public Toilet", nameMr: "सार्वजनिक शौचालय", icon: "🚻", status: "200m distance" },
        { name: "Tea & Snacks Stall", nameMr: "चहा व फराळ दुकान", icon: "🏪", status: "Nearby (50m)" }
      ],
      emergencyContacts: [
        { role: "MSRTC Sinnar Depot Control", number: "02551-220144", icon: "📞" },
        { role: "Sinnar Police Station", number: "02551-220033", icon: "🚓" },
        { role: "Rural Hospital Sinnar", number: "02551-220455", icon: "🏥" },
        { role: "Gram Sevak Shivare", number: "+91 94227 88102", icon: "👤" }
      ]
    },
    {
      id: "SNR-02",
      qrCode: "MSRTC-MH15-SNR02",
      name: "Sinnar Phata Stop",
      nameMr: "सिन्नर फाटा थांबा",
      village: "Sinnar",
      taluka: "Sinnar",
      district: "Nashik",
      pincode: "422103",
      latitude: 19.8450,
      longitude: 74.0020,
      landmark: "Sinnar Bypass Circle",
      photo: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      facilities: [
        { name: "Passenger Bench", nameMr: "बैठक बाकडा", icon: "🪑", status: "Available" },
        { name: "Rain Shade", nameMr: "पक्का शेड", icon: "⛱️", status: "Available" }
      ],
      emergencyContacts: [
        { role: "MSRTC Sinnar Depot Control", number: "02551-220144", icon: "📞" },
        { role: "Sinnar Police Station", number: "02551-220033", icon: "🚓" }
      ]
    },
    {
      id: "TRM-03",
      qrCode: "MSRTC-MH15-TRM03",
      name: "Trimbakeshwar Depot Stop",
      nameMr: "त्र्यंबकेश्वर बस स्थानक",
      village: "Trimbak",
      taluka: "Trimbakeshwar",
      district: "Nashik",
      pincode: "422212",
      latitude: 19.9320,
      longitude: 73.5310,
      landmark: "Near Main Temple Entry Gate",
      facilities: [
        { name: "Water Cooler", nameMr: "थंड पाणी", icon: "🚰", status: "Available" },
        { name: "Passenger Waiting Hall", nameMr: "प्रतीक्षा गृह", icon: "🏢", status: "Available" }
      ],
      emergencyContacts: [
        { role: "Trimbak Police Station", number: "02594-233033", icon: "🚓" }
      ]
    },
    {
      id: "RJG-04",
      qrCode: "MSRTC-MH14-RJG04",
      name: "Rajgurunagar Stand",
      nameMr: "राजगुरुनगर स्थानक",
      village: "Rajgurunagar",
      taluka: "Khed",
      district: "Pune",
      pincode: "410505",
      latitude: 18.8570,
      longitude: 73.8820,
      landmark: "Khed Market Yard Corner",
      facilities: [
        { name: "Shade", nameMr: "शेड", icon: "⛱️", status: "Available" }
      ],
      emergencyContacts: [
        { role: "Khed Depot Control", number: "02135-222045", icon: "📞" }
      ]
    }
  ],

  // Live Buses Telemetry Data
  buses: [
    {
      id: "BUS-101",
      number: "MH 15 EG 4021",
      type: "Lal Dabba (Ordinary Express)",
      typeCode: "ORDINARY",
      badgeColor: "#D32F2F",
      routeId: "R-NSK-PUN",
      routeName: "Nashik CBS to Pune Swargate",
      routeNameMr: "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
      destination: "Pune Swargate",
      destinationMr: "पुणे स्वारगेट",
      via: "Sinnar, Sangamner, Narayangaon",
      driverName: "Sanjay D. Patil (Emp #4981)",
      conductorName: "Ramesh Pawar",
      currentLat: 19.8010,
      currentLng: 73.9720,
      speed: 52, // km/h
      status: "On Time",
      statusColor: "#10B981", // Green
      delayMinutes: 0,
      confidenceScore: 98,
      occupancy: "65% (28/45 Seats)",
      occupancyStatus: "Moderate",
      fuel: "78% (Diesel)",
      distanceFromStop: 3.4, // km
      etaMinutes: 6,
      previousStop: "Sinnar Bus Stand",
      nextStop: "Shivare Bus Stop",
      lastGpsUpdate: "10 seconds ago",
      voiceScriptEn: "The next Nashik to Pune Lal Dabba bus MH 15 EG 4021 is running on time. It is 3.4 kilometers away and will reach Shivare Bus Stop in approximately 6 minutes.",
      voiceScriptMr: "पुढील नाशिक ते पुणे लाल डबा बस क्रमांक एम.एच. १५ ई.जी. ४०२१ वेळेवर धावत आहे. ही बस ३.४ किलोमीटर अंतरावर असून सुमारे ६ मिनिटांत शिवरे थांब्यावर पोहोचेल.",
      voiceScriptHi: "अगली नासिक से पुणे लाल डिब्बा बस MH 15 EG 4021 समय पर चल रही है। यह 3.4 किलोमीटर दूर है और लगभग 6 मिनट में शिवरे बस स्टॉप पहुंचेगी।",
      intermediateStops: [
        { name: "Nashik CBS", time: "10:30 AM", status: "Departed", delay: "0 min" },
        { name: "Sinnar Stand", time: "11:05 AM", status: "Departed", delay: "0 min" },
        { name: "Shivare Bus Stop", time: "11:22 AM", status: "NEXT STOP", delay: "On Time", isCurrentTarget: true },
        { name: "Sangamner Stand", time: "12:00 PM", status: "Scheduled", delay: "0 min" },
        { name: "Narayangaon", time: "01:10 PM", status: "Scheduled", delay: "0 min" },
        { name: "Pune Swargate", time: "02:45 PM", status: "Scheduled", delay: "0 min" }
      ]
    },
    {
      id: "BUS-102",
      number: "MH 15 BJ 8890",
      type: "Shivshahi AC Express",
      typeCode: "SHIVSHAHI",
      badgeColor: "#0B63E5",
      routeId: "R-NSK-SNR",
      routeName: "Nashik to Sinnar Local",
      routeNameMr: "नाशिक ते सिन्नर लोकल",
      destination: "Sinnar Depot",
      destinationMr: "सिन्नर आगार",
      via: "Eklahare Phata, Shivare",
      driverName: "Vikas Deshmukh",
      conductorName: "Sunil Shinde",
      currentLat: 19.8620,
      currentLng: 74.0150,
      speed: 44,
      status: "Running Late",
      statusColor: "#FF6B00", // Orange
      delayMinutes: 12,
      confidenceScore: 94,
      occupancy: "85% (38/45 Seats)",
      occupancyStatus: "Crowded",
      fuel: "62% (Electric/Diesel)",
      distanceFromStop: 7.8,
      etaMinutes: 14,
      previousStop: "Eklahare Phata",
      nextStop: "Shivare Bus Stop",
      lastGpsUpdate: "25 seconds ago",
      voiceScriptEn: "Attention passengers, Shivshahi AC bus MH 15 BJ 8890 to Sinnar is running 12 minutes late due to traffic. Estimated arrival at Shivare is in 14 minutes.",
      voiceScriptMr: "प्रवाशांचे लक्ष असू द्या, सिन्नर जाणारी शिवशाही एसी बस १२ मिनिटे उशिराने धावत आहे. शिवरे थांब्यावर पोहोचण्यास सुमारे १४ मिनिटे लागतील.",
      voiceScriptHi: "यात्रियों ध्यान दें, सिन्नर जाने वाली शिवशाही एसी बस 12 मिनट देरी से चल रही है। शिवरे स्टॉप पर आगमन 14 मिनट में संभावित है।",
      intermediateStops: [
        { name: "Nashik Mahamarg", time: "10:45 AM", status: "Departed", delay: "+8 min" },
        { name: "Eklahare Phata", time: "11:10 AM", status: "Departed", delay: "+12 min" },
        { name: "Shivare Bus Stop", time: "11:30 AM", status: "NEXT STOP", delay: "+12 min", isCurrentTarget: true },
        { name: "Sinnar Depot", time: "11:50 AM", status: "Scheduled", delay: "+12 min" }
      ]
    },
    {
      id: "BUS-103",
      number: "MH 12 QG 1102",
      type: "E-Garud (Electric MSRTC)",
      typeCode: "ELECTRIC",
      badgeColor: "#059669",
      routeId: "R-PUN-NSK",
      routeName: "Pune to Nashik Direct E-Bus",
      routeNameMr: "पुणे ते नाशिक थेट ई-बस",
      destination: "Nashik CBS",
      destinationMr: "नाशिक सी.बी.एस.",
      via: "Alephata, Sangamner, Shivare",
      driverName: "Dnyaneshwar Shinde",
      conductorName: "Anil Jadhav",
      currentLat: 19.7200,
      currentLng: 73.9400,
      speed: 60,
      status: "On Time",
      statusColor: "#10B981",
      delayMinutes: 0,
      confidenceScore: 99,
      occupancy: "40% (18/45 Seats)",
      occupancyStatus: "Seats Available",
      fuel: "91% (100% Electric Battery)",
      distanceFromStop: 14.2,
      etaMinutes: 18,
      previousStop: "Sangamner Bypass",
      nextStop: "Shivare Bus Stop",
      lastGpsUpdate: "5 seconds ago",
      voiceScriptEn: "Electric E-Garud bus MH 12 QG 1102 towards Nashik CBS will arrive at Shivare Bus Stop in 18 minutes. Plenty of empty seats available.",
      voiceScriptMr: "नाशिक सी.बी.एस. कडे जाणारी ई-गरुड इलेक्ट्रिक बस १८ मिनिटांत शिवरे स्थानकावर येत आहे. पुरेशा बैठका उपलब्ध आहेत.",
      voiceScriptHi: "नासिक की ओर जाने वाली ई-गरुड़ इलेक्ट्रिक बस 18 मिनट में शिवरे स्टॉप पर आ रही है। पर्याप्त सीटें उपलब्ध हैं।",
      intermediateStops: [
        { name: "Pune Swargate", time: "08:30 AM", status: "Departed", delay: "0 min" },
        { name: "Sangamner Bypass", time: "11:00 AM", status: "Departed", delay: "0 min" },
        { name: "Shivare Bus Stop", time: "11:36 AM", status: "NEXT STOP", delay: "On Time", isCurrentTarget: true },
        { name: "Nashik CBS", time: "12:10 PM", status: "Scheduled", delay: "0 min" }
      ]
    },
    {
      id: "BUS-104",
      number: "MH 04 FK 7741",
      type: "Shivneri Volvo Multi-Axle",
      typeCode: "SHIVNERI",
      badgeColor: "#7C3AED",
      routeId: "R-MUM-NSK",
      routeName: "Dadabhai Naoroji Mumbai to Shirdi",
      routeNameMr: "मुंबई दादर ते शिर्डी देवस्थान",
      destination: "Shirdi Sai Temple",
      destinationMr: "शिर्डी देवस्थान",
      via: "Thane, Igatpuri, Nashik, Sinnar",
      driverName: "Kishor Kadam",
      conductorName: "Prakash More",
      currentLat: 19.6500,
      currentLng: 73.8200,
      speed: 68,
      status: "Scheduled",
      statusColor: "#6B7280",
      delayMinutes: 0,
      confidenceScore: 92,
      occupancy: "90% (43/48 Seats)",
      occupancyStatus: "Almost Full",
      fuel: "70%",
      distanceFromStop: 28.5,
      etaMinutes: 38,
      previousStop: "Igatpuri Phata",
      nextStop: "Shivare Bus Stop",
      lastGpsUpdate: "2 mins ago",
      voiceScriptEn: "Shivneri Luxury Bus to Shirdi is expected at Shivare Bus Stop in approximately 38 minutes.",
      voiceScriptMr: "शिर्डी जाणारी शिवनेरी लक्झरी बस सुमारे ३८ मिनिटांत शिवरे स्थानकावर अपेक्षित आहे.",
      voiceScriptHi: "शिर्डी जाने वाली शिवनेरी लक्ज़री बस लगभग 38 मिनट में शिवरे स्टॉप पर अपेक्षित है।",
      intermediateStops: [
        { name: "Mumbai Dadar", time: "07:00 AM", status: "Departed", delay: "0 min" },
        { name: "Igatpuri Phata", time: "10:45 AM", status: "Departed", delay: "0 min" },
        { name: "Shivare Bus Stop", time: "11:58 AM", status: "NEXT STOP", delay: "Scheduled", isCurrentTarget: true },
        { name: "Shirdi Temple", time: "01:30 PM", status: "Scheduled", delay: "0 min" }
      ]
    }
  ],

  // Daily Schedule & Timetable Filter
  schedules: [
    { time: "06:15 AM", busNumber: "MH 15 EG 1001", destination: "Nashik CBS", type: "Ordinary", status: "Passed" },
    { time: "07:00 AM", busNumber: "MH 14 BJ 2201", destination: "Sangamner", type: "Ordinary", status: "Passed" },
    { time: "08:30 AM", busNumber: "MH 12 QG 9900", destination: "Pune Swargate", type: "Shivshahi", status: "Passed" },
    { time: "10:00 AM", busNumber: "MH 15 EG 3310", destination: "Trimbakeshwar", type: "Ordinary", status: "Passed" },
    { time: "11:22 AM", busNumber: "MH 15 EG 4021", destination: "Pune Swargate", type: "Ordinary", status: "Live", isLive: true },
    { time: "11:30 AM", busNumber: "MH 15 BJ 8890", destination: "Sinnar Depot", type: "Shivshahi", status: "Live", isLive: true },
    { time: "11:36 AM", busNumber: "MH 12 QG 1102", destination: "Nashik CBS", type: "Electric", status: "Live", isLive: true },
    { time: "11:58 AM", busNumber: "MH 04 FK 7741", destination: "Shirdi Temple", type: "Shivneri", status: "Live", isLive: true },
    { time: "12:30 PM", busNumber: "MH 15 EG 5510", destination: "Ahmednagar CBS", type: "Ordinary", status: "Scheduled" },
    { time: "01:15 PM", busNumber: "MH 15 BJ 7712", destination: "Pune Swargate", type: "Shivshahi", status: "Scheduled" },
    { time: "02:00 PM", busNumber: "MH 14 EG 8830", destination: "Nashik CBS", type: "Ordinary", status: "Scheduled" },
    { time: "03:45 PM", busNumber: "MH 15 QG 0019", destination: "Mumbai Dadar", type: "Shivneri", status: "Scheduled" },
    { time: "05:10 PM", busNumber: "MH 12 EG 4490", destination: "Sinnar Stand", type: "Ordinary", status: "Scheduled" },
    { time: "07:30 PM", busNumber: "MH 15 BJ 6620", destination: "Pune Night Super", type: "Shivshahi", status: "Scheduled" }
  ],

  // Community Crowd Reports
  communityReports: [
    {
      id: "REP-901",
      stopId: "SHV-01",
      busNumber: "MH 15 EG 4021",
      type: "bus_passed",
      title: "Previous Pune bus passed 10 mins ago",
      titleMr: "मागील पुणे बस १० मिनिटांपूर्वी निघून गेली",
      reporter: "Farmer Dnyaneshwar",
      timestamp: "8 mins ago",
      expiresIn: "22 mins",
      votes: 14,
      statusBadge: "Verified by 14 commuters"
    },
    {
      id: "REP-902",
      stopId: "SHV-01",
      busNumber: "MH 15 BJ 8890",
      type: "overcrowded",
      title: "Shivshahi bus is heavy crowded from Sinnar side",
      titleMr: "सिन्नरकडून येणारी शिवशाही बस गच्च भरलेली आहे",
      reporter: "College Student Snehal",
      timestamp: "15 mins ago",
      expiresIn: "15 mins",
      votes: 9,
      statusBadge: "Verified by 9 commuters"
    },
    {
      id: "REP-903",
      stopId: "SHV-01",
      type: "weather",
      title: "Light rainfall near Sinnar Phata circle - drive cautious",
      titleMr: "सिन्नर फाट्या जवळ हलका पाऊस सुरु आहे",
      reporter: "Gram Panchayat Member",
      timestamp: "28 mins ago",
      expiresIn: "2 mins",
      votes: 21,
      statusBadge: "Auto-expiring soon"
    }
  ],

  // Admin Dashboard Statistics
  adminStats: {
    district: "Nashik Division (MSRTC)",
    activeBusesCount: 482,
    onTimePercentage: 91.4,
    activeQrStops: 1240,
    dailyPassengers: 184500,
    delayedRoutesCount: 18,
    mostDelayedRoutes: [
      { route: "Nashik - Sinnar - Sangamner", delayAvg: "14 mins", cause: "Road widening work NH 60" },
      { route: "Pune Swargate - Narayangaon", delayAvg: "11 mins", cause: "Market day crowd at Khed" },
      { route: "Trimbakeshwar - CBS Nashik", delayAvg: "9 mins", cause: "Pilgrim traffic" }
    ],
    mostCrowdedStops: [
      { name: "Sinnar Phata Circle", peakPassengers: "420 / hr" },
      { name: "Shivare Bus Stop", peakPassengers: "185 / hr" },
      { name: "Igatpuri Highway Phata", peakPassengers: "310 / hr" }
    ]
  }
};
