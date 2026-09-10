/**
 * Where's My Bus? - MSRTC Live Bus Tracking System
 * Database & Mock Telemetry Store for Rural Maharashtra
 */

const SMART_ST_DATA = {
  "activeStopId": null,
  "i18n": {
    "en": {
      "appName": "Track My Bus",
      "tagline": "KNOW BEFORE YOU WAIT.",
      "scanQrBtn": "Scan Bus Stop QR",
      "exploreStopsBtn": "Explore Bus Stops & Arrivals",
      "busStop": "Bus Stop",
      "lastUpdated": "Last Updated",
      "liveArrivals": "Live Arrivals",
      "trackBus": "Track Bus",
      "viewRoute": "View Route",
      "notifyMe": "Notify Me",
      "speakAnnouncement": "Voice Announcement",
      "facilities": "Stop Facilities",
      "emergencyContacts": "Emergency Contacts",
      "schedule": "Timetable & Schedule",
      "journeyPlanner": "Journey Planner",
      "communityReports": "Community Live Reports",
      "adminDashboard": "Admin Dashboard",
      "accessibility": "Accessibility & Modes",
      "speed": "Speed",
      "distance": "Distance",
      "eta": "ETA",
      "occupancy": "Seats",
      "type": "Bus Type",
      "delay": "Status",
      "onTime": "On Time",
      "runningLate": "Running Late",
      "scheduled": "Scheduled",
      "searchDestination": "Where do you want to go?",
      "findBuses": "Find Buses",
      "reportIssue": "Report Bus Status",
      "submitReport": "Submit Passenger Report",
      "speechPrompt": "Click for voice announcement in your language",
      "voiceModeTitle": "Voice Announcement Engine",
      "languageSelect": "Language",
      "marathi": "मराठी (Marathi)",
      "english": "English",
      "hindi": "हिंदी (Hindi)",
      "lowNetNotice": "You're offline — showing saved timetable & favorites",
      "backBtn": "Back",
      "navStop": "Stop",
      "navLiveMap": "Live Map",
      "navScanner": "Scan QR",
      "navPlanner": "Planner",
      "navReports": "Reports",
      "navHome": "Home",
      "navAccount": "Account",
      "taglineHome": "Know before you wait.",
      "greetingMorning": "Good morning",
      "greetingAfternoon": "Good afternoon",
      "greetingEvening": "Good evening",
      "lastViewedStop": "Last viewed stop",
      "nearbyStop": "Nearby bus stop",
      "favoriteStop": "Favorite stop",
      "favoriteStops": "Favorite Stops",
      "addFavorite": "+ Add Favorite Stop",
      "quickActions": "Quick Actions",
      "scanQrAction": "Scan QR",
      "findBusStop": "Find a Bus Stop",
      "serviceStatus": "Service Status",
      "feedback": "Feedback",
      "giveFeedback": "Give Feedback",
      "moreAndHelp": "Help & More",
      "accountTitle": "My Account",
      "signIn": "Sign In",
      "createAccount": "Create Account",
      "signOut": "Sign Out",
      "viewLiveArrivals": "View Live Arrivals",
      "viewAllReports": "View All Reports",
      "noLiveBus": "No live bus right now",
      "searchStopsPlaceholder": "Search bus stops (e.g. Nashik, Chandori, Yeola, Niphad...)",
      "welcomeTitle": "Welcome",
      "welcomeBanner": "Welcome to Track My Bus—Your Journey, Our Commitment!",
      "quickSearchPlaceholder": "Quick Search...",
      "btnWhereAmI": "Where Am I",
      "btnBusRoutes": "Bus Routes",
      "btnJourneyPlanner": "Journey Planner",
      "btnBookTicket": "Book My Ticket",
      "btnViewTickets": "View Tickets",
      "btnMyPass": "My Pass",
      "btnMyFavourites": "My Favourites",
      "btnFeedback": "Feedback",
      "btnGrievance": "Grievance",
      "btnTimeTable": "Time Table",
      "btnApplyOfflinePass": "Apply Offline Pass",
      "btnHelpLine": "Help Line",
      "btnNearbyStops": "Nearby Bus Stops",
      "btnSettings": "Settings",
      "routesTitle": "MSRTC Bus Routes",
      "routesSubtitle": "Explore corridors, intermediate stops & live running buses",
      "searchRoutesPlaceholder": "Search routes, stops, destinations (e.g. Yeola, Shirdi, Pune...)",
      "filterAllRoutes": "All Routes",
      "filterPilgrim": "Pilgrim Special",
      "filterIntercity": "Intercity Express",
      "filterRural": "Rural Highway",
      "viewStops": "View Stops",
      "hideStops": "Hide Stops",
      "viewLiveBuses": "Live Buses",
      "hideLiveBuses": "Hide Buses",
      "trackLiveMap": "Track Route on Map"
    },
    "mr": {
      "appName": "माझी बस कुठे आहे?",
      "tagline": "थांबण्यापूर्वी जाणून घ्या.",
      "scanQrBtn": "बस स्थानक QR स्कॅन करा",
      "exploreStopsBtn": "बस स्थानके व थेट आगमन",
      "busStop": "बस थांबा",
      "lastUpdated": "शेवटचे अपडेट",
      "liveArrivals": "थेट येणाऱ्या बसेस",
      "trackBus": "लाइव्ह ट्रॅक करा",
      "viewRoute": "मार्ग पहा",
      "notifyMe": "सूचना मिळवा",
      "speakAnnouncement": "आवाज घोषणा (ध्वनी)",
      "facilities": "थांब्यावरील सुविधा",
      "emergencyContacts": "आणीबाणी संपर्क",
      "schedule": "वेळापत्रक",
      "journeyPlanner": "प्रवास नियोजन",
      "communityReports": "प्रवाशांचे थेट रिपोर्ट",
      "adminDashboard": "प्रशासकीय डॅशबोर्ड",
      "accessibility": "सुलभता आणि मोड्स",
      "speed": "वेग",
      "distance": "अंतर",
      "eta": "येण्याची वेळ",
      "occupancy": "बैठक क्षमता",
      "type": "बस प्रकार",
      "delay": "स्थिती",
      "onTime": "वेळेवर",
      "runningLate": "उशिरा",
      "scheduled": "नियोजित",
      "searchDestination": "तुम्हाला कुठे जायचे आहे?",
      "findBuses": "बसेस शोधा",
      "reportIssue": "बसची माहिती रिपोर्ट करा",
      "submitReport": "माहिती पाठवा",
      "speechPrompt": "तुमच्या भाषेत घोषणा ऐकण्यासाठी क्लिक करा",
      "voiceModeTitle": "ध्वनी घोषणा प्रणाली",
      "languageSelect": "भाषा",
      "marathi": "मराठी (Marathi)",
      "english": "English",
      "hindi": "हिंदी (Hindi)",
      "lowNetNotice": "तुम्ही ऑफलाइन आहात — सेव्ह केलेले वेळापत्रक व आवडी दाखवत आहोत",
      "backBtn": "मागे",
      "navStop": "थांबा",
      "navLiveMap": "थेट नकाशा",
      "navScanner": "स्कॅन QR",
      "navPlanner": "नियोजन",
      "navReports": "रिपोर्ट्स",
      "navHome": "मुख्यपृष्ठ",
      "navAccount": "खाते",
      "taglineHome": "थांबण्यापूर्वी जाणून घ्या.",
      "greetingMorning": "शुभ सकाळ",
      "greetingAfternoon": "शुभ दुपार",
      "greetingEvening": "शुभ संध्याकाळ",
      "lastViewedStop": "मागील पाहिलेला थांबा",
      "nearbyStop": "जवळील बस थांबा",
      "favoriteStop": "आवडता थांबा",
      "favoriteStops": "आवडते थांबे",
      "addFavorite": "+ आवडता थांबा जोडा",
      "quickActions": "जलद पर्याय",
      "scanQrAction": "QR स्कॅन करा",
      "findBusStop": "बस थांबा शोधा",
      "serviceStatus": "सेवा स्थिती",
      "feedback": "अभिप्राय",
      "giveFeedback": "अभिप्राय नोंदवा",
      "moreAndHelp": "मदत आणि इतर",
      "accountTitle": "माझे खाते",
      "signIn": "साइन इन",
      "createAccount": "नवीन खाते तयार करा",
      "signOut": "बाहेर पडा",
      "viewLiveArrivals": "थेट आगमन पहा",
      "viewAllReports": "सर्व रिपोर्ट पहा",
      "noLiveBus": "सध्या थेट बस उपलब्ध नाही",
      "searchStopsPlaceholder": "बस स्थानक शोधा (उदा. नाशिक, चांदोरी, येवला, निफाड...)",
      "welcomeTitle": "स्वागत आहे",
      "welcomeBanner": "Track My Bus मध्ये आपले स्वागत आहे—आपला प्रवास, आमची जबाबदारी!",
      "quickSearchPlaceholder": "जलद शोध...",
      "btnWhereAmI": "मी कुठे आहे",
      "btnBusRoutes": "बस मार्ग",
      "btnJourneyPlanner": "प्रवास नियोजन",
      "btnBookTicket": "तिकीट बुक करा",
      "btnViewTickets": "तिकीट पहा",
      "btnMyPass": "माझा पास",
      "btnMyFavourites": "माझे आवडते",
      "btnFeedback": "अभिप्राय",
      "btnGrievance": "तक्रार निवारण",
      "btnTimeTable": "वेळापत्रक",
      "btnApplyOfflinePass": "ऑफलाइन पास अर्ज",
      "btnHelpLine": "हेल्पलाइन",
      "btnNearbyStops": "जवळील बस थांबे",
      "btnSettings": "सेटिंग्ज",
      "routesTitle": "एस.टी. बस मार्ग नेटवर्क",
      "routesSubtitle": "सर्व मार्ग कॉरिडॉर, दरम्यानचे थांबे आणि थेट धावणाऱ्या बसेस",
      "searchRoutesPlaceholder": "मार्ग, थांबे, ठिकाणे शोधा (उदा. येवला, शिर्डी, पुणे...)",
      "filterAllRoutes": "सर्व मार्ग",
      "filterPilgrim": "तीर्थक्षेत्र विशेष",
      "filterIntercity": "आंतरशहरी जलद",
      "filterRural": "ग्रामीण मार्ग",
      "viewStops": "थांबे पहा",
      "hideStops": "थांबे लपवा",
      "viewLiveBuses": "थेट बसेस",
      "hideLiveBuses": "बसेस लपवा",
      "trackLiveMap": "नकाशावर मार्ग पहा"
    },
    "hi": {
      "appName": "मेरी बस कहाँ है?",
      "tagline": "इंतज़ार करने से पहले जानें।",
      "scanQrBtn": "बस स्टॉप QR स्कैन करें",
      "exploreStopsBtn": "बस स्टॉप और लाइव आगमन",
      "busStop": "बस स्टॉप",
      "lastUpdated": "अंतिम अपडेट",
      "liveArrivals": "लाइव आगमन",
      "trackBus": "लाइव ट्रैक करें",
      "viewRoute": "मार्ग देखें",
      "notifyMe": "अलर्ट सेट करें",
      "speakAnnouncement": "आवाज घोषणा",
      "facilities": "स्टॉप सुविधाएं",
      "emergencyContacts": "आपातकालीन संपर्क",
      "schedule": "समय सारणी",
      "journeyPlanner": "यात्रा योजना",
      "communityReports": "यात्री लाइव रिपोर्ट",
      "adminDashboard": "एडमिन डैशबोर्ड",
      "accessibility": "सुगमता और मोड",
      "speed": "गति",
      "distance": "दूरी",
      "eta": "अनुमानित समय",
      "occupancy": "सीट स्थिति",
      "type": "बस प्रकार",
      "delay": "स्थिति",
      "onTime": "समय पर",
      "runningLate": "देरी से",
      "scheduled": "निर्धारित",
      "searchDestination": "आप कहां जाना चाहते हैं?",
      "findBuses": "बसें खोजें",
      "reportIssue": "बस स्थिति रिपोर्ट करें",
      "submitReport": "रिपोर्ट भेजें",
      "speechPrompt": "अपनी भाषा में घोषणा सुनने के लिए क्लिक करें",
      "voiceModeTitle": "आवाज घोषणा प्रणाली",
      "languageSelect": "भाषा",
      "marathi": "मराठी (Marathi)",
      "english": "English",
      "hindi": "हिंदी (Hindi)",
      "lowNetNotice": "आप ऑफ़लाइन हैं — सहेजी गई समय-सारणी और पसंदीदा दिखा रहे हैं",
      "backBtn": "वापस",
      "navStop": "स्टॉप",
      "navLiveMap": "लाइव मैप",
      "navScanner": "स्कैन QR",
      "navPlanner": "योजना",
      "navReports": "रिपोर्ट्स",
      "navHome": "होम",
      "navAccount": "अकाउंट",
      "taglineHome": "इंतज़ार करने से पहले जानें।",
      "greetingMorning": "शुभ प्रभात",
      "greetingAfternoon": "शुभ दोपहर",
      "greetingEvening": "शुभ संध्या",
      "lastViewedStop": "पिछला देखा गया स्टॉप",
      "nearbyStop": "नज़दीकी बस स्टॉप",
      "favoriteStop": "पसंदीदा स्टॉप",
      "favoriteStops": "पसंदीदा स्टॉप्स",
      "addFavorite": "+ पसंदीदा स्टॉप जोड़ें",
      "quickActions": "त्वरित विकल्प",
      "scanQrAction": "QR स्कैन करें",
      "findBusStop": "बस स्टॉप खोजें",
      "serviceStatus": "सेवा स्थिति",
      "feedback": "फ़ीडबैक",
      "giveFeedback": "फ़ीडबैक दें",
      "moreAndHelp": "मदद और अन्य",
      "accountTitle": "मेरा अकाउंट",
      "signIn": "साइन इन",
      "createAccount": "नया खाता बनाएं",
      "signOut": "साइन आउट",
      "viewLiveArrivals": "लाइव आगमन देखें",
      "viewAllReports": "सभी रिपोर्ट देखें",
      "noLiveBus": "अभी कोई लाइव बस उपलब्ध नहीं",
      "searchStopsPlaceholder": "बस स्टॉप खोजें (उदा. नाशिक, चांदोरी, येवला, निफाड...)",
      "welcomeTitle": "स्वागत है",
      "welcomeBanner": "Track My Bus में आपका स्वागत है—आपकी यात्रा, हमारा संकल्प!",
      "quickSearchPlaceholder": "त्वरित खोज...",
      "btnWhereAmI": "मैं कहाँ हूँ",
      "btnBusRoutes": "बस मार्ग",
      "btnJourneyPlanner": "यात्रा योजना",
      "btnBookTicket": "टिकट बुक करें",
      "btnViewTickets": "टिकट देखें",
      "btnMyPass": "मेरा पास",
      "btnMyFavourites": "मेरे पसंदीदा",
      "btnFeedback": "प्रतिक्रिया",
      "btnGrievance": "शिकायत निवारण",
      "btnTimeTable": "समय सारणी",
      "btnApplyOfflinePass": "ऑफलाइन पास आवेदन",
      "btnHelpLine": "हेल्पलाइन",
      "btnNearbyStops": "नज़दीकी बस स्टॉप",
      "btnSettings": "सेटिंग्स",
      "routesTitle": "एस.टी. बस मार्ग नेटवर्क",
      "routesSubtitle": "सभी मार्ग, बीच के स्टॉप और लाइव चल रही बसें",
      "searchRoutesPlaceholder": "मार्ग, स्टॉप, गंतव्य खोजें (उदा. येवला, शिरडी, पुणे...)",
      "filterAllRoutes": "सभी मार्ग",
      "filterPilgrim": "तीर्थ विशेष",
      "filterIntercity": "इंटरसिटी एक्सप्रेस",
      "filterRural": "ग्रामीण मार्ग",
      "viewStops": "स्टॉप देखें",
      "hideStops": "स्टॉप छिपाएं",
      "viewLiveBuses": "लाइव बसें",
      "hideLiveBuses": "बसें छिपाएं",
      "trackLiveMap": "मैप पर ट्रैक करें"
    }
  },
  "busStops": [
    {
      "id": "NPH-01",
      "qrCode": "MSRTC-MH15-NPH01",
      "name": "Niphad Bus Stand",
      "nameMr": "निफाड बस स्थानक",
      "village": "Niphad",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422303",
      "latitude": 20.0825,
      "longitude": 74.108,
      "landmark": "Station Road, Near Sub-District Hospital & Market Yard, NH 753J",
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      "facilities": [
        {
          "name": "Passenger Bench",
          "nameMr": "बैठक बाकडा",
          "icon": "🪑",
          "status": "Available"
        },
        {
          "name": "Rain Shade",
          "nameMr": "पक्का शेड",
          "icon": "⛱️",
          "status": "Available"
        },
        {
          "name": "Drinking Water",
          "nameMr": "पिण्याचे पाणी",
          "icon": "🚰",
          "status": "Available"
        },
        {
          "name": "Solar Lighting",
          "nameMr": "सौर पथदिवे",
          "icon": "💡",
          "status": "Functional"
        },
        {
          "name": "Public Toilet",
          "nameMr": "सार्वजनिक शौचालय",
          "icon": "🚻",
          "status": "150m distance"
        },
        {
          "name": "Tea & Canteen",
          "nameMr": "एस.टी. कँटीन व फराळ",
          "icon": "🏪",
          "status": "Inside Stand"
        }
      ],
      "emergencyContacts": [
        {
          "role": "MSRTC Niphad Depot Control",
          "number": "02550-241223",
          "icon": "📞"
        },
        {
          "role": "Niphad Police Station",
          "number": "02550-241033",
          "icon": "🚓"
        },
        {
          "role": "Sub-District Hospital Niphad",
          "number": "02550-241045",
          "icon": "🏥"
        },
        {
          "role": "Station Master Niphad",
          "number": "+91 94227 65110",
          "icon": "👤"
        }
      ]
    },
    {
      "id": "SNR-02",
      "qrCode": "MSRTC-MH15-SNR02",
      "name": "Sinnar Phata Stop",
      "nameMr": "सिन्नर फाटा थांबा",
      "village": "Sinnar",
      "taluka": "Sinnar",
      "district": "Nashik",
      "pincode": "422103",
      "latitude": 19.845,
      "longitude": 74.002,
      "landmark": "Sinnar Bypass Circle",
      "photo": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      "facilities": [
        {
          "name": "Passenger Bench",
          "nameMr": "बैठक बाकडा",
          "icon": "🪑",
          "status": "Available"
        },
        {
          "name": "Rain Shade",
          "nameMr": "पक्का शेड",
          "icon": "⛱️",
          "status": "Available"
        }
      ],
      "emergencyContacts": [
        {
          "role": "MSRTC Sinnar Depot Control",
          "number": "02551-220144",
          "icon": "📞"
        },
        {
          "role": "Sinnar Police Station",
          "number": "02551-220033",
          "icon": "🚓"
        }
      ]
    },
    {
      "id": "TRM-03",
      "qrCode": "MSRTC-MH15-TRM03",
      "name": "Trimbakeshwar Depot Stop",
      "nameMr": "त्र्यंबकेश्वर बस स्थानक",
      "village": "Trimbak",
      "taluka": "Trimbakeshwar",
      "district": "Nashik",
      "pincode": "422212",
      "latitude": 19.932,
      "longitude": 73.531,
      "landmark": "Near Main Temple Entry Gate",
      "facilities": [
        {
          "name": "Water Cooler",
          "nameMr": "थंड पाणी",
          "icon": "🚰",
          "status": "Available"
        },
        {
          "name": "Passenger Waiting Hall",
          "nameMr": "प्रतीक्षा गृह",
          "icon": "🏢",
          "status": "Available"
        }
      ],
      "emergencyContacts": [
        {
          "role": "Trimbak Police Station",
          "number": "02594-233033",
          "icon": "🚓"
        }
      ]
    },
    {
      "id": "RJG-04",
      "qrCode": "MSRTC-MH14-RJG04",
      "name": "Rajgurunagar Stand",
      "nameMr": "राजगुरुनगर स्थानक",
      "village": "Rajgurunagar",
      "taluka": "Khed",
      "district": "Pune",
      "pincode": "410505",
      "latitude": 18.857,
      "longitude": 73.882,
      "landmark": "Khed Market Yard Corner",
      "facilities": [
        {
          "name": "Shade",
          "nameMr": "शेड",
          "icon": "⛱️",
          "status": "Available"
        }
      ],
      "emergencyContacts": [
        {
          "role": "Khed Depot Control",
          "number": "02135-222045",
          "icon": "📞"
        }
      ]
    },
    {
      "id": "CHN-13",
      "qrCode": "MSRTC-MH15-CHN13",
      "name": "Chandori Bus Stand",
      "nameMr": "चांदोरी बस स्थानक",
      "village": "Chandori",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422201",
      "latitude": 20.02705,
      "longitude": 74.00412,
      "landmark": "Main Highway Market, Near Godavari River Ghat, NH 753J",
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      "facilities": [
        {
          "name": "Passenger Bench",
          "nameMr": "बैठक बाकडा",
          "icon": "🪑",
          "status": "Available"
        },
        {
          "name": "Rain Shade",
          "nameMr": "पक्का शेड",
          "icon": "⛱️",
          "status": "Available"
        },
        {
          "name": "Drinking Water",
          "nameMr": "पिण्याचे पाणी",
          "icon": "🚰",
          "status": "Available"
        },
        {
          "name": "Solar Lighting",
          "nameMr": "सौर पथदिवे",
          "icon": "💡",
          "status": "Functional"
        },
        {
          "name": "Tea & Snacks",
          "nameMr": "चहा व फराळ",
          "icon": "☕",
          "status": "Nearby"
        }
      ],
      "emergencyContacts": [
        {
          "role": "MSRTC Niphad Depot Control",
          "number": "02550-241223",
          "icon": "📞"
        },
        {
          "role": "Saykheda Police Chowki",
          "number": "02550-244100",
          "icon": "🚓"
        },
        {
          "role": "Primary Health Centre Chandori",
          "number": "02550-244033",
          "icon": "🏥"
        }
      ]
    },
    {
      "id": "YEO-26",
      "qrCode": "MSRTC-MH15-YEO26",
      "name": "Yeola Bus Stand",
      "nameMr": "येवला बस स्थानक",
      "village": "Yeola",
      "taluka": "Yeola",
      "district": "Nashik",
      "pincode": "423401",
      "latitude": 20.04247,
      "longitude": 74.4891,
      "landmark": "Paithani Handloom Market Road, Yeola Central Depot",
      "photo": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
      "facilities": [
        {
          "name": "Passenger Seating Hall",
          "nameMr": "प्रतीक्षालय हॉल",
          "icon": "🪑",
          "status": "Available"
        },
        {
          "name": "Digital Indicator Board",
          "nameMr": "डिजिटल फलक",
          "icon": "📺",
          "status": "Active"
        },
        {
          "name": "Purified Cold Water",
          "nameMr": "थंड पिण्याचे पाणी",
          "icon": "🚰",
          "status": "Available"
        },
        {
          "name": "High Mast Lighting",
          "nameMr": "हायमास्ट दिवे",
          "icon": "💡",
          "status": "Functional"
        },
        {
          "name": "Clean Public Toilet",
          "nameMr": "स्वच्छ शौचालय",
          "icon": "🚻",
          "status": "Inside Depot"
        },
        {
          "name": "MSRTC Canteen & Bhojanalay",
          "nameMr": "एस.टी. उपाहारगृह",
          "icon": "🏪",
          "status": "Functional"
        }
      ],
      "emergencyContacts": [
        {
          "role": "MSRTC Yeola Depot Manager",
          "number": "02559-267123",
          "icon": "📞"
        },
        {
          "role": "Yeola City Police Station",
          "number": "02559-267033",
          "icon": "🚓"
        },
        {
          "role": "Yeola Rural Sub-District Hospital",
          "number": "02559-267045",
          "icon": "🏥"
        },
        {
          "role": "Station Master Yeola",
          "number": "+91 94227 65150",
          "icon": "👤"
        }
      ]
    }
  ],
  "routes": [
    {
        "id": "R-NSK-YEO",
        "routeNumber": "101",
        "name": "Nashik CBS to Yeola Bus Stand",
        "nameMr": "नाशिक सी.बी.एस. ते येवला बस स्थानक",
        "nameHi": "नाशिक सी.बी.एस. से येवला बस स्टैंड",
        "category": "rural",
        "categoryLabel": "Rural Highway Corridor",
        "categoryLabelMr": "ग्रामीण महामार्ग कॉरिडॉर",
        "origin": "Nashik Old CBS",
        "originMr": "नाशिक जुने सी.बी.एस.",
        "destination": "Yeola Bus Stand",
        "destinationMr": "येवला बस स्थानक",
        "via": "Aurangabad - Nashik Highway (SH 30), Sambhaji Naka, Saikheda Phata, Chandori, Pimpalas, Niphad",
        "viaMr": "औरंगाबाद - नाशिक महामार्ग (राज्य मार्ग ३०), संभाजी नाका, सायखेडा फाटा, चांदोरी, पिंपळस, निफाड",
        "totalDistanceKm": 85,
        "duration": "2 hr 15 min",
        "frequency": "Every 15-20 min",
        "fareRange": "₹40 - ₹145",
        "busTypes": [
            "Lal Dabba (Ordinary Express)",
            "Hirkani (Semi Luxury Asiad)",
            "Shivshahi (AC Seater)",
            "Parivartan (Express)"
        ],
        "stops": [
            {
                "name": "Nashik Old CBS",
                "nameMr": "नाशिक जुने सी.बी.एस.",
                "nameHi": "नाशिक जुने सी.बी.एस.",
                "time": "8:00 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Shalimar Chowk",
                "nameMr": "शालिमार चौक",
                "nameHi": "शालिमार चौक",
                "time": "8:04 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Gadge Maharaj Bridge",
                "nameMr": "गाडगे महाराज पूल",
                "nameHi": "गाडगे महाराज पूल",
                "time": "8:08 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00413,
                "lng": 73.79277,
                "roadIndex": 7
            },
            {
                "name": "Chhatrapati Sambhaji Maharaj Naka",
                "nameMr": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
                "nameHi": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
                "time": "8:13 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.01074,
                "lng": 73.81036,
                "roadIndex": 16
            },
            {
                "name": "Mirchi Hotel Phata",
                "nameMr": "मिरची हॉटेल फाटा",
                "nameHi": "मिरची हॉटेल फाटा",
                "time": "8:17 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00525,
                "lng": 73.82495,
                "roadIndex": 22
            },
            {
                "name": "Nandur Naka",
                "nameMr": "नांदूर नाका",
                "nameHi": "नांदूर नाका",
                "time": "8:21 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99714,
                "lng": 73.84065,
                "roadIndex": 28
            },
            {
                "name": "Manur Phata",
                "nameMr": "मानूर फाटा",
                "nameHi": "मानूर फाटा",
                "time": "8:25 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99946,
                "lng": 73.85972,
                "roadIndex": 34
            },
            {
                "name": "Odha Phata",
                "nameMr": "ओढा फाटा",
                "nameHi": "ओढा फाटा",
                "time": "8:30 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00173,
                "lng": 73.88137,
                "roadIndex": 41
            },
            {
                "name": "Shilapur Phata",
                "nameMr": "शिलापूर फाटा",
                "nameHi": "शिलापूर फाटा",
                "time": "8:34 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99651,
                "lng": 73.89985,
                "roadIndex": 47
            },
            {
                "name": "Madsangvi Phata",
                "nameMr": "माडसांगवी फाटा",
                "nameHi": "माडसांगवी फाटा",
                "time": "8:38 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99732,
                "lng": 73.91531,
                "roadIndex": 53
            },
            {
                "name": "Lakhalgaon Phata",
                "nameMr": "लाखलगाव फाटा",
                "nameHi": "लाखलगाव फाटा",
                "time": "8:42 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99963,
                "lng": 73.93065,
                "roadIndex": 59
            },
            {
                "name": "Tarukhedle Phata",
                "nameMr": "तारुखेडले फाटा",
                "nameHi": "तारुखेडले फाटा",
                "time": "8:47 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00528,
                "lng": 73.95723,
                "roadIndex": 65
            },
            {
                "name": "Saikheda Phata",
                "nameMr": "सायखेडा फाटा",
                "nameHi": "सायखेडा फाटा",
                "time": "8:52 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.01967,
                "lng": 73.99583,
                "roadIndex": 73
            },
            {
                "name": "Chandori Bus Stand",
                "nameMr": "चांदोरी बस स्थानक",
                "nameHi": "चांदोरी बस स्थानक",
                "time": "8:56 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.02444,
                "lng": 73.99575,
                "roadIndex": 77
            },
            {
                "name": "Pimpalas",
                "nameMr": "पिंपळस",
                "nameHi": "पिंपळस",
                "time": "9:04 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.06839,
                "lng": 74.04662,
                "roadIndex": 96
            },
            {
                "name": "Niphad Railway Phata",
                "nameMr": "निफाड रेल्वे स्टेशन फाटा",
                "nameHi": "निफाड रेल्वे स्टेशन फाटा",
                "time": "9:10 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.07274,
                "lng": 74.09561,
                "roadIndex": 110
            },
            {
                "name": "Niphad Bus Stand",
                "nameMr": "निफाड बस स्थानक",
                "nameHi": "निफाड बस स्थानक",
                "time": "9:14 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.08237,
                "lng": 74.1088,
                "roadIndex": 121
            },
            {
                "name": "Pimpalgaon Phata (Niphad)",
                "nameMr": "पिंपळगाव फाटा (निफाड)",
                "nameHi": "पिंपळगाव फाटा (निफाड)",
                "time": "9:21 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.07492,
                "lng": 74.13309,
                "roadIndex": 130
            },
            {
                "name": "Kundewadi Phata",
                "nameMr": "कुंदेवाडी फाटा",
                "nameHi": "कुंदेवाडी फाटा",
                "time": "9:27 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.07021,
                "lng": 74.1714,
                "roadIndex": 141
            },
            {
                "name": "Ranwad Phata",
                "nameMr": "रानवड फाटा",
                "nameHi": "रानवड फाटा",
                "time": "9:33 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.09889,
                "lng": 74.22234,
                "roadIndex": 161
            },
            {
                "name": "Vinchur Phata",
                "nameMr": "विंचूर फाटा",
                "nameHi": "विंचूर फाटा",
                "time": "9:38 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.1118,
                "lng": 74.22833,
                "roadIndex": 179
            },
            {
                "name": "Vinchur Bus Stand",
                "nameMr": "विंचूर बस स्थानक",
                "nameHi": "विंचूर बस स्थानक",
                "time": "9:42 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.1118,
                "lng": 74.22833,
                "roadIndex": 179
            },
            {
                "name": "Savargaon Phata",
                "nameMr": "सावरगाव फाटा",
                "nameHi": "सावरगाव फाटा",
                "time": "9:50 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.07562,
                "lng": 74.27174,
                "roadIndex": 197
            },
            {
                "name": "Kotamgaon Phata",
                "nameMr": "कोमटगाव फाटा",
                "nameHi": "कोमटगाव फाटा",
                "time": "10:00 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.05462,
                "lng": 74.36073,
                "roadIndex": 228
            },
            {
                "name": "Mukhed Phata",
                "nameMr": "मुखेड फाटा",
                "nameHi": "मुखेड फाटा",
                "time": "10:08 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.05125,
                "lng": 74.40984,
                "roadIndex": 243
            },
            {
                "name": "Babhulgaon Phata",
                "nameMr": "बाभुलगाव फाटा",
                "nameHi": "बाभुलगाव फाटा",
                "time": "10:15 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 20.04348,
                "lng": 74.44647,
                "roadIndex": 253
            },
            {
                "name": "Yeola Bus Stand",
                "nameMr": "येवला बस स्थानक",
                "nameHi": "येवला बस स्थानक",
                "time": "10:21 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.04247,
                "lng": 74.4891,
                "roadIndex": 265
            }
        ]
    },
    {
        "id": "R-NSK-TRM",
        "routeNumber": "102",
        "name": "Nashik CBS to Trimbakeshwar Depot",
        "nameMr": "नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार",
        "nameHi": "नाशिक सी.बी.एस. से त्र्यंबकेश्वर डिपो",
        "category": "pilgrim",
        "categoryLabel": "Pilgrim Special Corridor",
        "categoryLabelMr": "तीर्थक्षेत्र विशेष कॉरिडॉर",
        "origin": "Nashik Old CBS",
        "originMr": "नाशिक जुने सी.बी.एस.",
        "destination": "Trimbakeshwar Depot",
        "destinationMr": "त्र्यंबकेश्वर आगार",
        "via": "Satpur MIDC, Mahiravani, Anjaneri",
        "viaMr": "सातपूर एमआयडीसी, महिरावणी, अंजनेरी",
        "totalDistanceKm": 32,
        "duration": "50 min",
        "frequency": "Every 10-15 min",
        "fareRange": "₹25 - ₹75",
        "busTypes": [
            "Shivaee (Electric AC E-Bus)",
            "Lal Dabba (Ordinary Express)",
            "Hirkani (Semi Luxury)"
        ],
        "stops": [
            {
                "name": "Nashik Old CBS",
                "nameMr": "नाशिक जुने सी.बी.एस.",
                "nameHi": "नाशिक जुने सी.बी.एस.",
                "time": "9:30 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "MICO Circle",
                "nameMr": "मायको सर्कल",
                "nameHi": "मायको सर्कल",
                "time": "9:34 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99354,
                "lng": 73.78251,
                "roadIndex": 5
            },
            {
                "name": "ITI Signal",
                "nameMr": "आय.टी.आय. सिग्नल",
                "nameHi": "आय.टी.आय. सिग्नल",
                "time": "9:39 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99424,
                "lng": 73.77188,
                "roadIndex": 8
            },
            {
                "name": "Satpur Police Station",
                "nameMr": "सातपूर पोलीस ठाणे",
                "nameHi": "सातपूर पोलीस ठाणे",
                "time": "9:44 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99178,
                "lng": 73.74217,
                "roadIndex": 10
            },
            {
                "name": "Carbon Naka",
                "nameMr": "कार्बन नाका",
                "nameHi": "कार्बन नाका",
                "time": "9:47 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.98994,
                "lng": 73.7421,
                "roadIndex": 11
            },
            {
                "name": "Satpur Municipal Corporation",
                "nameMr": "सातपूर पालिका फाटा",
                "nameHi": "सातपूर पालिका फाटा",
                "time": "9:50 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99169,
                "lng": 73.74159,
                "roadIndex": 12
            },
            {
                "name": "Satpur MIDC",
                "nameMr": "सातपूर एम.आय.डी.सी.",
                "nameHi": "सातपूर एम.आय.डी.सी.",
                "time": "9:53 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99169,
                "lng": 73.74159,
                "roadIndex": 12
            },
            {
                "name": "Satpur Colony Phata",
                "nameMr": "सातपूर कॉलनी फाटा",
                "nameHi": "सातपूर कॉलनी फाटा",
                "time": "9:58 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.98591,
                "lng": 73.72417,
                "roadIndex": 14
            },
            {
                "name": "Shramik Nagar Phata",
                "nameMr": "श्रमिक नगर फाटा",
                "nameHi": "श्रमिक नगर फाटा",
                "time": "10:03 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.98382,
                "lng": 73.71926,
                "roadIndex": 15
            },
            {
                "name": "Belgaon Dhaga Phata",
                "nameMr": "बेलगाव ढगा फाटा",
                "nameHi": "बेलगाव ढगा फाटा",
                "time": "10:09 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.97946,
                "lng": 73.70935,
                "roadIndex": 18
            },
            {
                "name": "Pimpalgaon Bahula",
                "nameMr": "पिंपळगाव बहुला",
                "nameHi": "पिंपळगाव बहुला",
                "time": "10:14 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.97765,
                "lng": 73.69479,
                "roadIndex": 19
            },
            {
                "name": "Mahiravani Phata",
                "nameMr": "महिरावणी फाटा",
                "nameHi": "महिरावणी फाटा",
                "time": "10:18 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.97361,
                "lng": 73.68566,
                "roadIndex": 21
            },
            {
                "name": "Mahiravani Stand",
                "nameMr": "महिरावणी स्थानक",
                "nameHi": "महिरावणी स्थानक",
                "time": "10:21 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.97361,
                "lng": 73.68566,
                "roadIndex": 21
            },
            {
                "name": "Sandip Foundation",
                "nameMr": "संदीप फाउंडेशन",
                "nameHi": "संदीप फाउंडेशन",
                "time": "10:26 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.96604,
                "lng": 73.66124,
                "roadIndex": 27
            },
            {
                "name": "Pegalwadi Phata",
                "nameMr": "पेगलवाडी फाटा",
                "nameHi": "पेगलवाडी फाटा",
                "time": "10:31 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.95956,
                "lng": 73.62912,
                "roadIndex": 30
            },
            {
                "name": "Anjaneri Phata",
                "nameMr": "अंजनेरी फाटा",
                "nameHi": "अंजनेरी फाटा",
                "time": "10:36 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.9473,
                "lng": 73.61115,
                "roadIndex": 35
            },
            {
                "name": "Anjaneri Ashram",
                "nameMr": "अंजनेरी आश्रम",
                "nameHi": "अंजनेरी आश्रम",
                "time": "10:40 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.95456,
                "lng": 73.59086,
                "roadIndex": 48
            },
            {
                "name": "Bramhagiri Phata",
                "nameMr": "ब्रह्मगिरी फाटा",
                "nameHi": "ब्रह्मगिरी फाटा",
                "time": "10:46 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 19.94515,
                "lng": 73.55328,
                "roadIndex": 54
            },
            {
                "name": "Trimbakeshwar Depot",
                "nameMr": "त्र्यंबकेश्वर बस आगार",
                "nameHi": "त्र्यंबकेश्वर बस आगार",
                "time": "10:51 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.93188,
                "lng": 73.53116,
                "roadIndex": 62
            }
        ]
    },
    {
        "id": "R-NSK-SHR",
        "routeNumber": "103",
        "name": "Nashik CBS to Shirdi Sai Mandir",
        "nameMr": "नाशिक सी.बी.एस. ते शिर्डी साई मंदिर",
        "nameHi": "नाशिक सी.बी.एस. से शिरडी साई मंदिर",
        "category": "pilgrim",
        "categoryLabel": "Pilgrim Express Corridor",
        "categoryLabelMr": "तीर्थक्षेत्र जलद कॉरिडॉर",
        "origin": "Nashik CBS",
        "originMr": "नाशिक सी.बी.एस.",
        "destination": "Shirdi Sai Mandir Depot",
        "destinationMr": "शिर्डी साई मंदिर आगार",
        "via": "Dwarka, Sinnar, Wavi, Kolhar",
        "viaMr": "द्वारका, सिन्नर, वावी, कोल्हार",
        "totalDistanceKm": 88,
        "duration": "2 hr 10 min",
        "frequency": "Every 15-20 min",
        "fareRange": "₹55 - ₹195",
        "busTypes": [
            "Shivshahi (AC Seater)",
            "Hirkani (Semi Luxury)",
            "Lal Dabba (Ordinary Express)",
            "Parivartan (Express)"
        ],
        "stops": [
            {
                "name": "Nashik CBS",
                "nameMr": "नाशिक सी.बी.एस.",
                "nameHi": "नाशिक सी.बी.एस.",
                "time": "8:15 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Shalimar Chowk",
                "nameMr": "शालिमार चौक",
                "nameHi": "शालिमार चौक",
                "time": "8:19 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99659,
                "lng": 73.79062,
                "roadIndex": 2
            },
            {
                "name": "Dwarka Circle",
                "nameMr": "द्वारका सर्कल",
                "nameHi": "द्वारका सर्कल",
                "time": "8:25 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.98815,
                "lng": 73.80483,
                "roadIndex": 13
            },
            {
                "name": "Upnagar Phata",
                "nameMr": "उपनगर फाटा",
                "nameHi": "उपनगर फाटा",
                "time": "8:30 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.97395,
                "lng": 73.8128,
                "roadIndex": 20
            },
            {
                "name": "Datta Mandir Stop",
                "nameMr": "दत्त मंदिर थांबा",
                "nameHi": "दत्त मंदिर थांबा",
                "time": "8:36 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.96644,
                "lng": 73.82153,
                "roadIndex": 21
            },
            {
                "name": "Sinnar Phata (Nashik Rd)",
                "nameMr": "सिन्नर फाटा नाशिक रोड",
                "nameHi": "सिन्नर फाटा नाशिक रोड",
                "time": "8:41 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.95253,
                "lng": 73.83959,
                "roadIndex": 22
            },
            {
                "name": "Chehadi Naka / Darna Bridge",
                "nameMr": "चेहेडी नाका / दारणा पूल",
                "nameHi": "चेहेडी नाका / दारणा पूल",
                "time": "8:46 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.93841,
                "lng": 73.85581,
                "roadIndex": 25
            },
            {
                "name": "Shinde Village Phata",
                "nameMr": "शिंदे गाव फाटा",
                "nameHi": "शिंदे गाव फाटा",
                "time": "8:52 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.92174,
                "lng": 73.88164,
                "roadIndex": 29
            },
            {
                "name": "Palsi Phata",
                "nameMr": "पळसे फाटा",
                "nameHi": "पळसे फाटा",
                "time": "8:58 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.91498,
                "lng": 73.89862,
                "roadIndex": 31
            },
            {
                "name": "Naigaon Phata",
                "nameMr": "नायगाव फाटा",
                "nameHi": "नायगाव फाटा",
                "time": "9:05 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.87156,
                "lng": 73.95373,
                "roadIndex": 38
            },
            {
                "name": "Mohadari Ghat",
                "nameMr": "मोहादरी घाट",
                "nameHi": "मोहादरी घाट",
                "time": "9:09 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.86324,
                "lng": 73.96902,
                "roadIndex": 40
            },
            {
                "name": "Musalgaon MIDC Phata",
                "nameMr": "मुसळगाव एम.आय.डी.सी.",
                "nameHi": "मुसळगाव एम.आय.डी.सी.",
                "time": "9:15 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.8622,
                "lng": 73.97338,
                "roadIndex": 41
            },
            {
                "name": "Sinnar Bus Stand",
                "nameMr": "सिन्नर बस स्थानक",
                "nameHi": "सिन्नर बस स्थानक",
                "time": "9:20 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.84481,
                "lng": 74.00229,
                "roadIndex": 47
            },
            {
                "name": "Sinnar Bypass Circle",
                "nameMr": "सिन्नर बायपास",
                "nameHi": "सिन्नर बायपास",
                "time": "9:24 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.84487,
                "lng": 74.02118,
                "roadIndex": 49
            },
            {
                "name": "Gonde Phata (Sinnar)",
                "nameMr": "गोंदे फाटा",
                "nameHi": "गोंदे फाटा",
                "time": "9:30 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.83941,
                "lng": 74.08014,
                "roadIndex": 54
            },
            {
                "name": "Pangri Phata",
                "nameMr": "पांगरी फाटा",
                "nameHi": "पांगरी फाटा",
                "time": "9:37 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.83003,
                "lng": 74.14626,
                "roadIndex": 62
            },
            {
                "name": "Wavi Phata",
                "nameMr": "वावी फाटा",
                "nameHi": "वावी फाटा",
                "time": "9:43 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.82075,
                "lng": 74.18997,
                "roadIndex": 69
            },
            {
                "name": "Wavi Bus Stand",
                "nameMr": "वावी बस स्थानक",
                "nameHi": "वावी बस स्थानक",
                "time": "9:47 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.80736,
                "lng": 74.20631,
                "roadIndex": 77
            },
            {
                "name": "Pathare Phata",
                "nameMr": "पाथरे फाटा",
                "nameHi": "पाथरे फाटा",
                "time": "9:54 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.80624,
                "lng": 74.26668,
                "roadIndex": 90
            },
            {
                "name": "Nandur Shingote Stand",
                "nameMr": "नांदूर शिंगोटे स्थानक",
                "nameHi": "नांदूर शिंगोटे स्थानक",
                "time": "10:01 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.82026,
                "lng": 74.31335,
                "roadIndex": 92
            },
            {
                "name": "Dhandarphal Phata",
                "nameMr": "धांदरफळ फाटा",
                "nameHi": "धांदरफळ फाटा",
                "time": "10:07 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.81726,
                "lng": 74.36273,
                "roadIndex": 97
            },
            {
                "name": "Kolhar Bus Stand",
                "nameMr": "कोल्हार बस स्थानक",
                "nameHi": "कोल्हार बस स्थानक",
                "time": "10:13 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.79136,
                "lng": 74.40476,
                "roadIndex": 106
            },
            {
                "name": "Loni Pravara Phata",
                "nameMr": "लोणी प्रवरा फाटा",
                "nameHi": "लोणी प्रवरा फाटा",
                "time": "10:18 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.78522,
                "lng": 74.40705,
                "roadIndex": 107
            },
            {
                "name": "Babhaleshwar Stand",
                "nameMr": "बाभळेश्वर स्थानक",
                "nameHi": "बाभळेश्वर स्थानक",
                "time": "10:23 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.76039,
                "lng": 74.42819,
                "roadIndex": 110
            },
            {
                "name": "Rahata Stand",
                "nameMr": "राहाता बस स्थानक",
                "nameHi": "राहाता बस स्थानक",
                "time": "10:29 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.76932,
                "lng": 74.4743,
                "roadIndex": 123
            },
            {
                "name": "Sakuri Phata",
                "nameMr": "साकुरी फाटा",
                "nameHi": "साकुरी फाटा",
                "time": "10:32 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 19.76932,
                "lng": 74.4743,
                "roadIndex": 123
            },
            {
                "name": "Shirdi Sai Nagar",
                "nameMr": "शिर्डी साई नगर",
                "nameHi": "शिर्डी साई नगर",
                "time": "10:36 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.76932,
                "lng": 74.4743,
                "roadIndex": 123
            },
            {
                "name": "Shirdi Sai Mandir Depot",
                "nameMr": "शिर्डी साई मंदिर आगार",
                "nameHi": "शिर्डी साई मंदिर आगार",
                "time": "10:40 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.76701,
                "lng": 74.47641,
                "roadIndex": 125
            }
        ]
    },
    {
        "id": "R-NSK-PUN",
        "routeNumber": "104",
        "name": "Nashik CBS to Pune Swargate",
        "nameMr": "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
        "nameHi": "नाशिक सी.बी.एस. से पुणे स्वारगेट",
        "category": "intercity",
        "categoryLabel": "Intercity Highway Corridor",
        "categoryLabelMr": "आंतरशहरी महामार्ग कॉरिडॉर",
        "origin": "Nashik CBS",
        "originMr": "नाशिक सी.बी.एस.",
        "destination": "Pune Swargate Depot",
        "destinationMr": "पुणे स्वारगेट आगार",
        "via": "Sinnar, Sangamner, Alephata, Narayangaon, Chakan, Bhosari",
        "viaMr": "सिन्नर, संगमनेर, आळेफाटा, नारायणगाव, चाकण, भोसरी",
        "totalDistanceKm": 210,
        "duration": "4 hr 30 min",
        "frequency": "Every 20-30 min",
        "fareRange": "₹180 - ₹480",
        "busTypes": [
            "Shivshahi (AC Seater)",
            "Hirkani (Semi Luxury Asiad)",
            "Lal Dabba (Ordinary Express)",
            "Parivartan (Express)"
        ],
        "stops": [
            {
                "name": "Nashik CBS",
                "nameMr": "नाशिक सी.बी.एस.",
                "nameHi": "नाशिक सी.बी.एस.",
                "time": "6:30 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Dwarka Circle",
                "nameMr": "द्वारका सर्कल",
                "nameHi": "द्वारका सर्कल",
                "time": "6:38 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.98586,
                "lng": 73.80172,
                "roadIndex": 8
            },
            {
                "name": "Sinnar Phata",
                "nameMr": "सिन्नर फाटा",
                "nameHi": "सिन्नर फाटा",
                "time": "6:48 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.95253,
                "lng": 73.83959,
                "roadIndex": 10
            },
            {
                "name": "Shinde Village",
                "nameMr": "शिंदे गाव",
                "nameHi": "शिंदे गाव",
                "time": "6:58 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.92174,
                "lng": 73.88164,
                "roadIndex": 17
            },
            {
                "name": "Sinnar Bus Stand",
                "nameMr": "सिन्नर बस स्थानक",
                "nameHi": "सिन्नर बस स्थानक",
                "time": "7:13 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.84499,
                "lng": 74.0021,
                "roadIndex": 35
            },
            {
                "name": "Dodi Phata",
                "nameMr": "डोडी फाटा",
                "nameHi": "डोडी फाटा",
                "time": "7:27 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.76156,
                "lng": 74.09825,
                "roadIndex": 44
            },
            {
                "name": "Sangamner Phata",
                "nameMr": "संगमनेर फाटा",
                "nameHi": "संगमनेर फाटा",
                "time": "7:43 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.62902,
                "lng": 74.17258,
                "roadIndex": 63
            },
            {
                "name": "Sangamner Bypass",
                "nameMr": "संगमनेर बायपास",
                "nameHi": "संगमनेर बायपास",
                "time": "7:51 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.57736,
                "lng": 74.20735,
                "roadIndex": 69
            },
            {
                "name": "Bota Bus Stand",
                "nameMr": "बोटा बस स्थानक",
                "nameHi": "बोटा बस स्थानक",
                "time": "8:07 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.45351,
                "lng": 74.19856,
                "roadIndex": 88
            },
            {
                "name": "Ghargaon Phata",
                "nameMr": "घारगाव फाटा",
                "nameHi": "घारगाव फाटा",
                "time": "8:17 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.37817,
                "lng": 74.2062,
                "roadIndex": 108
            },
            {
                "name": "Chandnapuri Ghat",
                "nameMr": "चंदनापुरी घाट",
                "nameHi": "चंदनापुरी घाट",
                "time": "8:26 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.31666,
                "lng": 74.17474,
                "roadIndex": 122
            },
            {
                "name": "Dolasane Phata",
                "nameMr": "डोळासणे फाटा",
                "nameHi": "डोळासणे फाटा",
                "time": "8:36 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.24559,
                "lng": 74.13768,
                "roadIndex": 136
            },
            {
                "name": "Alephata Junction",
                "nameMr": "आळेफाटा जंक्शन",
                "nameHi": "आळेफाटा जंक्शन",
                "time": "8:48 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.17718,
                "lng": 74.12287,
                "roadIndex": 148
            },
            {
                "name": "Otur Phata",
                "nameMr": "ओतूर फाटा",
                "nameHi": "ओतूर फाटा",
                "time": "8:54 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.15647,
                "lng": 74.04301,
                "roadIndex": 163
            },
            {
                "name": "Narayangaon Stand",
                "nameMr": "नारायणगाव स्थानक",
                "nameHi": "नारायणगाव स्थानक",
                "time": "9:04 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.12143,
                "lng": 73.97773,
                "roadIndex": 170
            },
            {
                "name": "Manchar Stand",
                "nameMr": "मंचर बस स्थानक",
                "nameHi": "मंचर बस स्थानक",
                "time": "9:18 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.01267,
                "lng": 73.94919,
                "roadIndex": 188
            },
            {
                "name": "Kalamb Phata",
                "nameMr": "कळंब फाटा",
                "nameHi": "कळंब फाटा",
                "time": "9:27 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.93282,
                "lng": 73.93053,
                "roadIndex": 201
            },
            {
                "name": "Peth Phata",
                "nameMr": "पेठ फाटा",
                "nameHi": "पेठ फाटा",
                "time": "9:33 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.90072,
                "lng": 73.91326,
                "roadIndex": 205
            },
            {
                "name": "Rajgurunagar (Khed)",
                "nameMr": "राजगुरुनगर (खेड)",
                "nameHi": "राजगुरुनगर (खेड)",
                "time": "9:45 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.85776,
                "lng": 73.88182,
                "roadIndex": 217
            },
            {
                "name": "Chakan Chowk",
                "nameMr": "चाकण चौक",
                "nameHi": "चाकण चौक",
                "time": "9:59 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.7576,
                "lng": 73.8586,
                "roadIndex": 240
            },
            {
                "name": "Alandi Phata",
                "nameMr": "आळंदी फाटा",
                "nameHi": "आळंदी फाटा",
                "time": "10:07 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.71051,
                "lng": 73.84864,
                "roadIndex": 246
            },
            {
                "name": "Moshi Toll Phata",
                "nameMr": "मोशी टोल फाटा",
                "nameHi": "मोशी टोल फाटा",
                "time": "10:14 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.66835,
                "lng": 73.84894,
                "roadIndex": 252
            },
            {
                "name": "Bhosari Stand",
                "nameMr": "भोसरी बस स्थानक",
                "nameHi": "भोसरी बस स्थानक",
                "time": "10:22 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.62623,
                "lng": 73.85236,
                "roadIndex": 262
            },
            {
                "name": "Nashik Phata (Kasarwadi)",
                "nameMr": "नाशिक फाटा (कासारवाडी)",
                "nameHi": "नाशिक फाटा (कासारवाडी)",
                "time": "10:29 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.60189,
                "lng": 73.8263,
                "roadIndex": 271
            },
            {
                "name": "Dapodi Phata",
                "nameMr": "दापोडी फाटा",
                "nameHi": "दापोडी फाटा",
                "time": "10:35 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.57657,
                "lng": 73.83564,
                "roadIndex": 273
            },
            {
                "name": "Khadki Bazar",
                "nameMr": "खडकी बाजार",
                "nameHi": "खडकी बाजार",
                "time": "10:41 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.55986,
                "lng": 73.84375,
                "roadIndex": 275
            },
            {
                "name": "Shivajinagar Stand",
                "nameMr": "शिवाजीनगर स्थानक",
                "nameHi": "शिवाजीनगर स्थानक",
                "time": "10:49 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 18.52932,
                "lng": 73.85251,
                "roadIndex": 285
            },
            {
                "name": "Shaniwar Wada",
                "nameMr": "शनिवार वाडा",
                "nameHi": "शनिवार वाडा",
                "time": "10:55 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.52018,
                "lng": 73.85611,
                "roadIndex": 288
            },
            {
                "name": "Pune Swargate Depot",
                "nameMr": "पुणे स्वारगेट आगार",
                "nameHi": "पुणे स्वारगेट आगार",
                "time": "11:03 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 18.50179,
                "lng": 73.85865,
                "roadIndex": 293
            }
        ]
    },
    {
        "id": "R-NSK-MUM",
        "routeNumber": "105",
        "name": "Nashik Mahamarg to Mumbai Dadar",
        "nameMr": "नाशिक महामार्ग ते मुंबई दादर",
        "nameHi": "नाशिक महामार्ग से मुंबई दादर",
        "category": "intercity",
        "categoryLabel": "Intercity Superfast Corridor",
        "categoryLabelMr": "आंतरशहरी सुपरफास्ट कॉरिडॉर",
        "origin": "Nashik Mahamarg",
        "originMr": "नाशिक महामार्ग स्थानक",
        "destination": "Dadar Asiad Terminal",
        "destinationMr": "दादर एशियाड टर्मिनल",
        "via": "Vilholi, Ghoti, Igatpuri, Kasara Ghat, Shahapur, Kalyan Phata, Thane, Sion",
        "viaMr": "विल्होळी, घोटी, इगतपुरी, कसारा घाट, शहापूर, कल्याण फाटा, ठाणे, शीव",
        "totalDistanceKm": 168,
        "duration": "3 hr 45 min",
        "frequency": "Every 15-20 min",
        "fareRange": "₹160 - ₹450",
        "busTypes": [
            "Shivshahi (AC Sleeper/Seater)",
            "Hirkani (Semi Luxury)",
            "Lal Dabba (Ordinary Express)",
            "Parivartan (Express)"
        ],
        "stops": [
            {
                "name": "Nashik Mahamarg",
                "nameMr": "नाशिक महामार्ग स्थानक",
                "nameHi": "नाशिक महामार्ग स्थानक",
                "time": "6:00 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99201,
                "lng": 73.78499,
                "roadIndex": 0
            },
            {
                "name": "Mumbai Naka",
                "nameMr": "मुंबई नाका",
                "nameHi": "मुंबई नाका",
                "time": "6:05 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.98732,
                "lng": 73.78383,
                "roadIndex": 2
            },
            {
                "name": "Pathardi Phata",
                "nameMr": "पाथर्डी फाटा",
                "nameHi": "पाथर्डी फाटा",
                "time": "6:09 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.98732,
                "lng": 73.78383,
                "roadIndex": 2
            },
            {
                "name": "Garware Point (Ambad)",
                "nameMr": "गरवारे पॉईंट (अंबड)",
                "nameHi": "गरवारे पॉईंट (अंबड)",
                "time": "6:17 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.9025,
                "lng": 73.75356,
                "roadIndex": 25
            },
            {
                "name": "Vilholi Phata",
                "nameMr": "विल्होळी फाटा",
                "nameHi": "विल्होळी फाटा",
                "time": "6:27 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.88489,
                "lng": 73.69349,
                "roadIndex": 40
            },
            {
                "name": "Gonde MIDC",
                "nameMr": "गोंदे एम.आय.डी.सी.",
                "nameHi": "गोंदे एम.आय.डी.सी.",
                "time": "6:37 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.85254,
                "lng": 73.65988,
                "roadIndex": 52
            },
            {
                "name": "Wadivarhe Phata",
                "nameMr": "वाडीवऱ्हे फाटा",
                "nameHi": "वाडीवऱ्हे फाटा",
                "time": "6:44 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.83456,
                "lng": 73.63075,
                "roadIndex": 61
            },
            {
                "name": "Rayambe Phata",
                "nameMr": "रायंबे फाटा",
                "nameHi": "रायंबे फाटा",
                "time": "6:50 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.78384,
                "lng": 73.61611,
                "roadIndex": 106
            },
            {
                "name": "Ghoti Phata",
                "nameMr": "घोटी फाटा",
                "nameHi": "घोटी फाटा",
                "time": "6:56 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.78384,
                "lng": 73.61611,
                "roadIndex": 106
            },
            {
                "name": "Ghoti Stand",
                "nameMr": "घोटी बस स्थानक",
                "nameHi": "घोटी बस स्थानक",
                "time": "7:01 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.77076,
                "lng": 73.61391,
                "roadIndex": 111
            },
            {
                "name": "Igatpuri Highway Phata",
                "nameMr": "इगतपुरी हायवे फाटा",
                "nameHi": "इगतपुरी हायवे फाटा",
                "time": "7:11 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.69731,
                "lng": 73.56098,
                "roadIndex": 143
            },
            {
                "name": "Igatpuri Stand",
                "nameMr": "इगतपुरी बस स्थानक",
                "nameHi": "इगतपुरी बस स्थानक",
                "time": "7:17 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.69767,
                "lng": 73.55997,
                "roadIndex": 144
            },
            {
                "name": "Thal Ghat / Kasara Ghat",
                "nameMr": "थळ घाट / कसारा घाट",
                "nameHi": "थळ घाट / कसारा घाट",
                "time": "7:29 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.66266,
                "lng": 73.5,
                "roadIndex": 176
            },
            {
                "name": "Kasara Phata",
                "nameMr": "कसारा फाटा",
                "nameHi": "कसारा फाटा",
                "time": "7:39 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.63729,
                "lng": 73.48288,
                "roadIndex": 188
            },
            {
                "name": "Khardi Phata",
                "nameMr": "खर्डी फाटा",
                "nameHi": "खर्डी फाटा",
                "time": "7:51 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.58151,
                "lng": 73.38403,
                "roadIndex": 213
            },
            {
                "name": "Asangaon Station Phata",
                "nameMr": "आसनगाव स्टेशन फाटा",
                "nameHi": "आसनगाव स्टेशन फाटा",
                "time": "8:09 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.52097,
                "lng": 73.33812,
                "roadIndex": 225
            },
            {
                "name": "Shahapur Stand",
                "nameMr": "शहापूर बस स्थानक",
                "nameHi": "शहापूर बस स्थानक",
                "time": "8:19 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.46132,
                "lng": 73.28548,
                "roadIndex": 258
            },
            {
                "name": "Vashind Phata",
                "nameMr": "वाशिंद फाटा",
                "nameHi": "वाशिंद फाटा",
                "time": "8:27 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.39402,
                "lng": 73.23482,
                "roadIndex": 283
            },
            {
                "name": "Padgha Toll Naka",
                "nameMr": "पडघा टोल नाका",
                "nameHi": "पडघा टोल नाका",
                "time": "8:41 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.36781,
                "lng": 73.18217,
                "roadIndex": 288
            },
            {
                "name": "Bhiwandi Bypass",
                "nameMr": "भिवंडी बायपास",
                "nameHi": "भिवंडी बायपास",
                "time": "8:56 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.28138,
                "lng": 73.10276,
                "roadIndex": 312
            },
            {
                "name": "Majiwada Junction (Thane)",
                "nameMr": "माजीवडा जंक्शन (ठाणे)",
                "nameHi": "माजीवडा जंक्शन (ठाणे)",
                "time": "9:08 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.21726,
                "lng": 72.97839,
                "roadIndex": 327
            },
            {
                "name": "Thane Teen Hath Naka",
                "nameMr": "ठाणे तीन हात नाका",
                "nameHi": "ठाणे तीन हात नाका",
                "time": "9:16 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.21726,
                "lng": 72.97839,
                "roadIndex": 327
            },
            {
                "name": "Mulund Check Naka",
                "nameMr": "मुलुंड चेक नाका",
                "nameHi": "मुलुंड चेक नाका",
                "time": "9:24 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.17486,
                "lng": 72.96863,
                "roadIndex": 332
            },
            {
                "name": "Bhandup Pumping",
                "nameMr": "भांडुप पंपिंग",
                "nameHi": "भांडुप पंपिंग",
                "time": "9:30 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.12753,
                "lng": 72.94022,
                "roadIndex": 335
            },
            {
                "name": "Vikhroli Godrej",
                "nameMr": "विक्रोळी गोदरेज",
                "nameHi": "विक्रोळी गोदरेज",
                "time": "9:36 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.12753,
                "lng": 72.94022,
                "roadIndex": 335
            },
            {
                "name": "Ghatkopar Stand",
                "nameMr": "घाटकोपर स्थानक",
                "nameHi": "घाटकोपर स्थानक",
                "time": "9:43 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.08709,
                "lng": 72.9234,
                "roadIndex": 336
            },
            {
                "name": "Kurla Nehrunagar Depot",
                "nameMr": "कुर्ला नेहरूनगर आगार",
                "nameHi": "कुर्ला नेहरूनगर आगार",
                "time": "9:51 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 19.05482,
                "lng": 72.88507,
                "roadIndex": 338
            },
            {
                "name": "Sion Circle",
                "nameMr": "शीव (सायन) सर्कल",
                "nameHi": "शीव (सायन) सर्कल",
                "time": "9:59 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.03922,
                "lng": 72.86174,
                "roadIndex": 344
            },
            {
                "name": "Dadar Asiad Terminal",
                "nameMr": "दादर आशियाड बस टर्मिनस",
                "nameHi": "दादर आशियाड बस टर्मिनस",
                "time": "10:09 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.01778,
                "lng": 72.84782,
                "roadIndex": 349
            }
        ]
    },
    {
        "id": "R-NSK-CSN",
        "routeNumber": "106",
        "name": "Nashik CBS to Chh. Sambhaji Nagar",
        "nameMr": "नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर",
        "nameHi": "नाशिक सी.बी.एस. से छत्रपति संभाजी नगर",
        "category": "intercity",
        "categoryLabel": "Intercity Highway Corridor",
        "categoryLabelMr": "आंतरशहरी महामार्ग कॉरिडॉर",
        "origin": "Nashik CBS",
        "originMr": "नाशिक सी.बी.एस.",
        "destination": "Chh. Sambhaji Nagar CBS",
        "destinationMr": "छत्रपती संभाजी नगर सी.बी.एस.",
        "via": "Niphad, Yeola, Rotegaon, Vaijapur, Waluj",
        "viaMr": "निफाड, येवला, रोटेगाव, वैजापूर, वाळूज",
        "totalDistanceKm": 185,
        "duration": "4 hr 00 min",
        "frequency": "Every 30 min",
        "fareRange": "₹140 - ₹380",
        "busTypes": [
            "Shivshahi (AC Seater)",
            "Hirkani (Semi Luxury)",
            "Lal Dabba (Ordinary Express)",
            "Parivartan (Express)"
        ],
        "stops": [
            {
                "name": "Nashik CBS",
                "nameMr": "नाशिक सी.बी.एस.",
                "nameHi": "नाशिक सी.बी.एस.",
                "time": "7:00 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Dwarka Circle",
                "nameMr": "द्वारका सर्कल",
                "nameHi": "द्वारका सर्कल",
                "time": "7:08 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99783,
                "lng": 73.79026,
                "roadIndex": 1
            },
            {
                "name": "Chandori Phata",
                "nameMr": "चांदोरी फाटा",
                "nameHi": "चांदोरी फाटा",
                "time": "7:33 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.02444,
                "lng": 73.99575,
                "roadIndex": 29
            },
            {
                "name": "Niphad Bus Stand",
                "nameMr": "निफाड बस स्थानक",
                "nameHi": "निफाड बस स्थानक",
                "time": "7:53 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.08288,
                "lng": 74.10733,
                "roadIndex": 48
            },
            {
                "name": "Ranwad Phata",
                "nameMr": "रानवड फाटा",
                "nameHi": "रानवड फाटा",
                "time": "8:05 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.09908,
                "lng": 74.22244,
                "roadIndex": 68
            },
            {
                "name": "Vinchur Bus Stand",
                "nameMr": "विंचूर बस स्थानक",
                "nameHi": "विंचूर बस स्थानक",
                "time": "8:13 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.10321,
                "lng": 74.22618,
                "roadIndex": 70
            },
            {
                "name": "Yeola Bus Stand",
                "nameMr": "येवला बस स्थानक",
                "nameHi": "येवला बस स्थानक",
                "time": "8:43 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.04225,
                "lng": 74.48904,
                "roadIndex": 101
            },
            {
                "name": "Andarsul Phata",
                "nameMr": "अंदरसूल फाटा",
                "nameHi": "अंदरसूल फाटा",
                "time": "8:53 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.01687,
                "lng": 74.56484,
                "roadIndex": 110
            },
            {
                "name": "Nagarsul Railway Phata",
                "nameMr": "नगरसूल रेल्वे फाटा",
                "nameHi": "नगरसूल रेल्वे फाटा",
                "time": "9:01 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00036,
                "lng": 74.6031,
                "roadIndex": 117
            },
            {
                "name": "Tarapur Phata",
                "nameMr": "तारापूर फाटा",
                "nameHi": "तारापूर फाटा",
                "time": "9:09 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.96806,
                "lng": 74.64304,
                "roadIndex": 122
            },
            {
                "name": "Rotegaon Phata",
                "nameMr": "रोटेगाव फाटा",
                "nameHi": "रोटेगाव फाटा",
                "time": "9:18 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.94982,
                "lng": 74.6926,
                "roadIndex": 127
            },
            {
                "name": "Vaijapur Stand",
                "nameMr": "वैजापूर बस स्थानक",
                "nameHi": "वैजापूर बस स्थानक",
                "time": "9:26 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.92526,
                "lng": 74.7291,
                "roadIndex": 133
            },
            {
                "name": "Ladgaon Phata",
                "nameMr": "लाडगाव फाटा",
                "nameHi": "लाडगाव फाटा",
                "time": "9:36 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.92273,
                "lng": 74.81319,
                "roadIndex": 138
            },
            {
                "name": "Shivoor Phata",
                "nameMr": "शिवूर फाटा",
                "nameHi": "शिवूर फाटा",
                "time": "9:48 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.92677,
                "lng": 74.89528,
                "roadIndex": 148
            },
            {
                "name": "Khandala Phata",
                "nameMr": "खंडाळा फाटा",
                "nameHi": "खंडाळा फाटा",
                "time": "9:58 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.92945,
                "lng": 74.95492,
                "roadIndex": 158
            },
            {
                "name": "Lasur Station Phata",
                "nameMr": "लासूर स्टेशन फाटा",
                "nameHi": "लासूर स्टेशन फाटा",
                "time": "10:08 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.90665,
                "lng": 75.03898,
                "roadIndex": 167
            },
            {
                "name": "Maliwada Phata",
                "nameMr": "माळीवाडा फाटा",
                "nameHi": "माळीवाडा फाटा",
                "time": "10:18 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.89794,
                "lng": 75.11965,
                "roadIndex": 174
            },
            {
                "name": "Daulatabad T-Point",
                "nameMr": "दौलताबाद टी-पॉइंट",
                "nameHi": "दौलताबाद टी-पॉइंट",
                "time": "10:30 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.88198,
                "lng": 75.20575,
                "roadIndex": 180
            },
            {
                "name": "Waluj MIDC Gate",
                "nameMr": "वाळूज एम.आय.डी.सी. गेट",
                "nameHi": "वाळूज एम.आय.डी.सी. गेट",
                "time": "10:40 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.8554,
                "lng": 75.24448,
                "roadIndex": 190
            },
            {
                "name": "CIDCO Waluj Mahanagar",
                "nameMr": "सिडको वाळूज महानगर",
                "nameHi": "सिडको वाळूज महानगर",
                "time": "10:45 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.86008,
                "lng": 75.25651,
                "roadIndex": 194
            },
            {
                "name": "Pandharpur Phata (Waluj)",
                "nameMr": "पंढरपूर फाटा",
                "nameHi": "पंढरपूर फाटा",
                "time": "10:50 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.86757,
                "lng": 75.28633,
                "roadIndex": 199
            },
            {
                "name": "Railway Station Phata",
                "nameMr": "रेल्वे स्टेशन फाटा",
                "nameHi": "रेल्वे स्टेशन फाटा",
                "time": "10:56 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 19.8772,
                "lng": 75.30409,
                "roadIndex": 202
            },
            {
                "name": "Kranti Chowk",
                "nameMr": "क्रांती चौक",
                "nameHi": "क्रांती चौक",
                "time": "11:01 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.87217,
                "lng": 75.32252,
                "roadIndex": 204
            },
            {
                "name": "Chh. Sambhaji Nagar CBS",
                "nameMr": "छ. संभाजी नगर मध्यवर्ती स्थानक",
                "nameHi": "छ. संभाजी नगर मध्यवर्ती स्थानक",
                "time": "11:07 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.87813,
                "lng": 75.32797,
                "roadIndex": 208
            }
        ]
    },
    {
        "id": "R-NSK-DHL",
        "routeNumber": "107",
        "name": "Nashik CBS to Dhule CBS",
        "nameMr": "नाशिक सी.बी.एस. ते धुळे सी.बी.एस.",
        "nameHi": "नाशिक सी.बी.एस. से धुले सी.बी.एस.",
        "category": "intercity",
        "categoryLabel": "North Maharashtra Highway",
        "categoryLabelMr": "उत्तर महाराष्ट्र महामार्ग",
        "origin": "Nashik CBS",
        "originMr": "नाशिक सी.बी.एस.",
        "destination": "Dhule CBS Stand",
        "destinationMr": "धुळे सी.बी.एस. स्थानक",
        "via": "Ozar, Pimpalgaon Baswant, Chandwad Ghat, Malegaon, Arvi",
        "viaMr": "ओझर, पिंपळगाव बसवंत, चांदवड घाट, मालेगाव, आर्वी",
        "totalDistanceKm": 160,
        "duration": "3 hr 30 min",
        "frequency": "Every 20-25 min",
        "fareRange": "₹130 - ₹360",
        "busTypes": [
            "Hirkani (Semi Luxury Asiad)",
            "Lal Dabba (Ordinary Express)",
            "Shivshahi (AC Seater)",
            "Parivartan (Express)"
        ],
        "stops": [
            {
                "name": "Nashik CBS",
                "nameMr": "नाशिक सी.बी.एस.",
                "nameHi": "नाशिक सी.बी.एस.",
                "time": "7:00 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Shalimar",
                "nameMr": "शालिमार",
                "nameHi": "शालिमार",
                "time": "7:04 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Panchavati Karanja",
                "nameMr": "पंचवटी कारंजा",
                "nameHi": "पंचवटी कारंजा",
                "time": "7:10 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00457,
                "lng": 73.79439,
                "roadIndex": 4
            },
            {
                "name": "Nimani Stand",
                "nameMr": "निमाणी बस स्थानक",
                "nameHi": "निमाणी बस स्थानक",
                "time": "7:14 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00871,
                "lng": 73.80195,
                "roadIndex": 6
            },
            {
                "name": "Meri Phata",
                "nameMr": "मेरी फाटा",
                "nameHi": "मेरी फाटा",
                "time": "7:19 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.01395,
                "lng": 73.81742,
                "roadIndex": 8
            },
            {
                "name": "Adgaon Naka",
                "nameMr": "आडगाव नाका",
                "nameHi": "आडगाव नाका",
                "time": "7:26 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.03092,
                "lng": 73.85651,
                "roadIndex": 12
            },
            {
                "name": "Jatra Hotel Phata",
                "nameMr": "जत्रा हॉटेल फाटा",
                "nameHi": "जत्रा हॉटेल फाटा",
                "time": "7:31 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.04008,
                "lng": 73.86994,
                "roadIndex": 13
            },
            {
                "name": "Kokangaon Phata",
                "nameMr": "कोकणगाव फाटा",
                "nameHi": "कोकणगाव फाटा",
                "time": "7:35 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.06331,
                "lng": 73.90961,
                "roadIndex": 21
            },
            {
                "name": "Ozar Stand",
                "nameMr": "ओझर बस स्थानक",
                "nameHi": "ओझर बस स्थानक",
                "time": "7:44 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.06676,
                "lng": 73.93038,
                "roadIndex": 31
            },
            {
                "name": "HAL Airport Phata",
                "nameMr": "एच.ए.एल. विमानतळ फाटा",
                "nameHi": "एच.ए.एल. विमानतळ फाटा",
                "time": "7:50 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.10686,
                "lng": 73.94359,
                "roadIndex": 40
            },
            {
                "name": "Mohadi Phata",
                "nameMr": "मोहाडी फाटा",
                "nameHi": "मोहाडी फाटा",
                "time": "7:57 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.14294,
                "lng": 73.97746,
                "roadIndex": 44
            },
            {
                "name": "Pimpalgaon Baswant",
                "nameMr": "पिंपळगाव बसवंत स्थानक",
                "nameHi": "पिंपळगाव बसवंत स्थानक",
                "time": "8:05 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.17553,
                "lng": 74.024,
                "roadIndex": 62
            },
            {
                "name": "Jalgaon Phata",
                "nameMr": "जळगाव फाटा",
                "nameHi": "जळगाव फाटा",
                "time": "8:10 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.21491,
                "lng": 74.04128,
                "roadIndex": 69
            },
            {
                "name": "Shirwade Vani Phata",
                "nameMr": "शिरवाडे वणी फाटा",
                "nameHi": "शिरवाडे वणी फाटा",
                "time": "8:19 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.23623,
                "lng": 74.06825,
                "roadIndex": 72
            },
            {
                "name": "Vadner Bhairav Phata",
                "nameMr": "वडनेर भैरव फाटा",
                "nameHi": "वडनेर भैरव फाटा",
                "time": "8:28 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.30359,
                "lng": 74.13831,
                "roadIndex": 82
            },
            {
                "name": "Chandwad Bus Stand",
                "nameMr": "चांदवड बस स्थानक",
                "nameHi": "चांदवड बस स्थानक",
                "time": "8:40 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.32808,
                "lng": 74.24127,
                "roadIndex": 91
            },
            {
                "name": "Rahud Ghat Top",
                "nameMr": "राहुड घाट माथा",
                "nameHi": "राहुड घाट माथा",
                "time": "8:50 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.36637,
                "lng": 74.30841,
                "roadIndex": 113
            },
            {
                "name": "Mangrul Phata",
                "nameMr": "मंगरूळ फाटा",
                "nameHi": "मंगरूळ फाटा",
                "time": "8:58 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.42299,
                "lng": 74.35541,
                "roadIndex": 121
            },
            {
                "name": "Umrane Bus Stand",
                "nameMr": "उमराणे बस स्थानक",
                "nameHi": "उमराणे बस स्थानक",
                "time": "9:06 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.46704,
                "lng": 74.41175,
                "roadIndex": 129
            },
            {
                "name": "Deola Phata",
                "nameMr": "देवळा फाटा",
                "nameHi": "देवळा फाटा",
                "time": "9:13 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.50265,
                "lng": 74.46454,
                "roadIndex": 136
            },
            {
                "name": "Malegaon Naka",
                "nameMr": "मालेगाव नाका",
                "nameHi": "मालेगाव नाका",
                "time": "9:19 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.53066,
                "lng": 74.49223,
                "roadIndex": 137
            },
            {
                "name": "Malegaon Central",
                "nameMr": "मालेगाव मध्यवर्ती आगार",
                "nameHi": "मालेगाव मध्यवर्ती आगार",
                "time": "9:26 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.55489,
                "lng": 74.52817,
                "roadIndex": 144
            },
            {
                "name": "Camp Malegaon",
                "nameMr": "कॅम्प मालेगाव",
                "nameHi": "कॅम्प मालेगाव",
                "time": "9:32 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.57573,
                "lng": 74.56539,
                "roadIndex": 150
            },
            {
                "name": "Saundane Phata",
                "nameMr": "सौंदाणे फाटा",
                "nameHi": "सौंदाणे फाटा",
                "time": "9:41 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.61545,
                "lng": 74.62589,
                "roadIndex": 156
            },
            {
                "name": "Zodga Bus Stand",
                "nameMr": "झोडगे बस स्थानक",
                "nameHi": "झोडगे बस स्थानक",
                "time": "9:50 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.71243,
                "lng": 74.69532,
                "roadIndex": 167
            },
            {
                "name": "Arvi Phata",
                "nameMr": "आरवी फाटा",
                "nameHi": "आरवी फाटा",
                "time": "9:58 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.77865,
                "lng": 74.73043,
                "roadIndex": 178
            },
            {
                "name": "Songir Toll Phata",
                "nameMr": "सोंगीर टोल फाटा",
                "nameHi": "सोंगीर टोल फाटा",
                "time": "10:05 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 20.84928,
                "lng": 74.763,
                "roadIndex": 188
            },
            {
                "name": "Mohadi Phata (Dhule)",
                "nameMr": "मोहाडी फाटा (धुळे)",
                "nameHi": "मोहाडी फाटा (धुळे)",
                "time": "10:11 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.88198,
                "lng": 74.77131,
                "roadIndex": 193
            },
            {
                "name": "Dhule CBS Stand",
                "nameMr": "धुळे सी.बी.एस. स्थानक",
                "nameHi": "धुळे सी.बी.एस. स्थानक",
                "time": "10:17 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.90204,
                "lng": 74.77486,
                "roadIndex": 196
            }
        ]
    },
    {
        "id": "R-NSK-SPT",
        "routeNumber": "108",
        "name": "Nashik CBS to Saptashrungi Gad",
        "nameMr": "नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी)",
        "nameHi": "नाशिक सी.बी.एस. से सप्तशृंगी गढ़ (वणी)",
        "category": "pilgrim",
        "categoryLabel": "Ghat Pilgrim Special",
        "categoryLabelMr": "घाट तीर्थक्षेत्र विशेष",
        "origin": "Nashik CBS",
        "originMr": "नाशिक सी.बी.एस.",
        "destination": "Saptashrungi Gad Top",
        "destinationMr": "सप्तशृंगी गड माथा",
        "via": "Panchavati, Dindori, Vani Stand, Nanduri, Gad Ghat Road",
        "viaMr": "पंचवटी, दिंडोरी, वणी स्थानक, नांदुरी, गड घाट रस्ता",
        "totalDistanceKm": 65,
        "duration": "1 hr 50 min",
        "frequency": "Every 25-30 min",
        "fareRange": "₹45 - ₹120",
        "busTypes": [
            "Lal Dabba (Ghat Special)",
            "Shivaee (Electric AC E-Bus)",
            "Hirkani (Semi Luxury)"
        ],
        "stops": [
            {
                "name": "Nashik CBS",
                "nameMr": "नाशिक सी.बी.एस.",
                "nameHi": "नाशिक सी.बी.एस.",
                "time": "8:00 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 19.99745,
                "lng": 73.78981,
                "roadIndex": 0
            },
            {
                "name": "Raviwar Karanja",
                "nameMr": "रविवार कारंजा",
                "nameHi": "रविवार कारंजा",
                "time": "8:04 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00401,
                "lng": 73.79023,
                "roadIndex": 3
            },
            {
                "name": "Panchavati Karanja",
                "nameMr": "पंचवटी कारंजा",
                "nameHi": "पंचवटी कारंजा",
                "time": "8:09 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00457,
                "lng": 73.79439,
                "roadIndex": 4
            },
            {
                "name": "Nimani Stand",
                "nameMr": "निमाणी बस स्थानक",
                "nameHi": "निमाणी बस स्थानक",
                "time": "8:13 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.00871,
                "lng": 73.80195,
                "roadIndex": 6
            },
            {
                "name": "Meri Stop (Amrutdham)",
                "nameMr": "मेरी थांबा (अमृतधाम)",
                "nameHi": "मेरी थांबा (अमृतधाम)",
                "time": "8:18 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.02661,
                "lng": 73.80082,
                "roadIndex": 16
            },
            {
                "name": "Mhasrul Phata",
                "nameMr": "म्हसरूळ फाटा",
                "nameHi": "म्हसरूळ फाटा",
                "time": "8:24 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.04817,
                "lng": 73.80616,
                "roadIndex": 18
            },
            {
                "name": "Ramsej Fort Phata",
                "nameMr": "रामशेज किल्ला फाटा",
                "nameHi": "रामशेज किल्ला फाटा",
                "time": "8:32 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.09857,
                "lng": 73.80689,
                "roadIndex": 25
            },
            {
                "name": "Janori Phata",
                "nameMr": "जानोरी फाटा",
                "nameHi": "जानोरी फाटा",
                "time": "8:39 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.14298,
                "lng": 73.8188,
                "roadIndex": 29
            },
            {
                "name": "Dindori Bus Stand",
                "nameMr": "दिंडोरी बस स्थानक",
                "nameHi": "दिंडोरी बस स्थानक",
                "time": "8:48 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.20551,
                "lng": 73.83499,
                "roadIndex": 43
            },
            {
                "name": "Dindori Town Phata",
                "nameMr": "दिंडोरी नगर फाटा",
                "nameHi": "दिंडोरी नगर फाटा",
                "time": "8:53 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.24009,
                "lng": 73.84804,
                "roadIndex": 52
            },
            {
                "name": "Ozar Khed Phata",
                "nameMr": "ओझरखेड फाटा",
                "nameHi": "ओझरखेड फाटा",
                "time": "9:01 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.2756,
                "lng": 73.86908,
                "roadIndex": 60
            },
            {
                "name": "Vani Stand",
                "nameMr": "वणी बस स्थानक",
                "nameHi": "वणी बस स्थानक",
                "time": "9:19 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.33529,
                "lng": 73.88645,
                "roadIndex": 78
            },
            {
                "name": "Khedgaon Phata",
                "nameMr": "खेडगाव फाटा",
                "nameHi": "खेडगाव फाटा",
                "time": "9:24 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.36042,
                "lng": 73.89374,
                "roadIndex": 79
            },
            {
                "name": "Kalwan Phata",
                "nameMr": "कळवण फाटा",
                "nameHi": "कळवण फाटा",
                "time": "9:28 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.36042,
                "lng": 73.89374,
                "roadIndex": 79
            },
            {
                "name": "Kasbe Vani",
                "nameMr": "कसबे वणी",
                "nameHi": "कसबे वणी",
                "time": "9:32 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.37401,
                "lng": 73.89141,
                "roadIndex": 81
            },
            {
                "name": "Nanduri Phata",
                "nameMr": "नांदुरी फाटा",
                "nameHi": "नांदुरी फाटा",
                "time": "9:37 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.3864,
                "lng": 73.91061,
                "roadIndex": 128
            },
            {
                "name": "Nanduri Foothill Stand",
                "nameMr": "नांदुरी पायथा स्थानक",
                "nameHi": "नांदुरी पायथा स्थानक",
                "time": "9:41 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.3864,
                "lng": 73.91061,
                "roadIndex": 128
            },
            {
                "name": "Saptashrungi Ghat Gate",
                "nameMr": "सप्तशृंगी घाट प्रवेशद्वार",
                "nameHi": "सप्तशृंगी घाट प्रवेशद्वार",
                "time": "9:46 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.39172,
                "lng": 73.90874,
                "roadIndex": 130
            },
            {
                "name": "First Hairpin Turn",
                "nameMr": "पहिला घाट वळण",
                "nameHi": "पहिला घाट वळण",
                "time": "9:51 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.39172,
                "lng": 73.90874,
                "roadIndex": 130
            },
            {
                "name": "Ganpati Tappa",
                "nameMr": "गणपती टप्पा",
                "nameHi": "गणपती टप्पा",
                "time": "9:57 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.40044,
                "lng": 73.89937,
                "roadIndex": 135
            },
            {
                "name": "Upper Valley View",
                "nameMr": "दऱ्या दर्शन पॉईंट",
                "nameHi": "दऱ्या दर्शन पॉईंट",
                "time": "10:02 AM",
                "status": "Departed",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.40044,
                "lng": 73.89937,
                "roadIndex": 135
            },
            {
                "name": "Temple Funicular Base",
                "nameMr": "रोपवे / पायऱ्या तळ",
                "nameHi": "रोपवे / पायऱ्या तळ",
                "time": "10:07 AM",
                "status": "NEXT STOP",
                "delay": "On Time",
                "isCurrentTarget": true,
                "lat": 20.40044,
                "lng": 73.89937,
                "roadIndex": 135
            },
            {
                "name": "Saptashrungi Gad Top",
                "nameMr": "सप्तशृंगी गड माथा आगार",
                "nameHi": "सप्तशृंगी गड माथा आगार",
                "time": "10:12 AM",
                "status": "Scheduled",
                "delay": "On Time",
                "isCurrentTarget": false,
                "lat": 20.40044,
                "lng": 73.89937,
                "roadIndex": 135
            }
        ]
    }
],
  "buses": [
    {
      "id": "BUS-101-1",
      "number": "MH 15 EG 4021",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-YEO",
      "routeName": "Nashik CBS to Yeola Bus Stand",
      "routeNameMr": "नाशिक सी.बी.एस. ते येवला बस स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Aurangabad - Nashik Highway (SH 30), Sambhaji Naka, Saikheda Phata, Chandori, Pimpalas, Niphad",
      "driverName": "Sanjay D. Patil (Emp #4981)",
      "conductorName": "Ramesh Pawar",
      "scheduledTime": "08:00 AM",
      "currentLat": 20.04728,
      "currentLng": 74.42891,
      "roadIndex": 248,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "85% (Diesel)",
      "distanceFromStop": 1.9,
      "etaMinutes": 2,
      "previousStop": "Mukhed Phata",
      "nextStop": "Babhulgaon Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4021 from Nashik CBS to Yeola Bus Stand is en route. Approaching Babhulgaon Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4021 नाशिक सी.बी.एस. ते येवला बस स्थानक मार्गावर धावत आहे. पुढील स्थानक बाभुलगाव फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4021 मार्गस्थ है। अगला स्टॉप बाभुलगाव फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "8:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "8:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Gadge Maharaj Bridge",
          "nameMr": "गाडगे महाराज पूल",
          "nameHi": "गाडगे महाराज पूल",
          "time": "8:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00413,
          "lng": 73.79277,
          "roadIndex": 7
        },
        {
          "name": "Chhatrapati Sambhaji Maharaj Naka",
          "nameMr": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "nameHi": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "time": "8:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01074,
          "lng": 73.81036,
          "roadIndex": 16
        },
        {
          "name": "Mirchi Hotel Phata",
          "nameMr": "मिरची हॉटेल फाटा",
          "nameHi": "मिरची हॉटेल फाटा",
          "time": "8:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00525,
          "lng": 73.82495,
          "roadIndex": 22
        },
        {
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "8:21 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99714,
          "lng": 73.84065,
          "roadIndex": 28
        },
        {
          "name": "Manur Phata",
          "nameMr": "मानूर फाटा",
          "nameHi": "मानूर फाटा",
          "time": "8:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99946,
          "lng": 73.85972,
          "roadIndex": 34
        },
        {
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "8:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00173,
          "lng": 73.88137,
          "roadIndex": 41
        },
        {
          "name": "Shilapur Phata",
          "nameMr": "शिलापूर फाटा",
          "nameHi": "शिलापूर फाटा",
          "time": "8:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99651,
          "lng": 73.89985,
          "roadIndex": 47
        },
        {
          "name": "Madsangvi Phata",
          "nameMr": "माडसांगवी फाटा",
          "nameHi": "माडसांगवी फाटा",
          "time": "8:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99732,
          "lng": 73.91531,
          "roadIndex": 53
        },
        {
          "name": "Lakhalgaon Phata",
          "nameMr": "लाखलगाव फाटा",
          "nameHi": "लाखलगाव फाटा",
          "time": "8:42 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99963,
          "lng": 73.93065,
          "roadIndex": 59
        },
        {
          "name": "Tarukhedle Phata",
          "nameMr": "तारुखेडले फाटा",
          "nameHi": "तारुखेडले फाटा",
          "time": "8:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00528,
          "lng": 73.95723,
          "roadIndex": 65
        },
        {
          "name": "Saikheda Phata",
          "nameMr": "सायखेडा फाटा",
          "nameHi": "सायखेडा फाटा",
          "time": "8:52 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01967,
          "lng": 73.99583,
          "roadIndex": 73
        },
        {
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्थानक",
          "time": "8:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 77
        },
        {
          "name": "Pimpalas",
          "nameMr": "पिंपळस",
          "nameHi": "पिंपळस",
          "time": "9:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06839,
          "lng": 74.04662,
          "roadIndex": 96
        },
        {
          "name": "Niphad Railway Phata",
          "nameMr": "निफाड रेल्वे स्टेशन फाटा",
          "nameHi": "निफाड रेल्वे स्टेशन फाटा",
          "time": "9:10 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07274,
          "lng": 74.09561,
          "roadIndex": 110
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "9:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08237,
          "lng": 74.1088,
          "roadIndex": 121
        },
        {
          "name": "Pimpalgaon Phata (Niphad)",
          "nameMr": "पिंपळगाव फाटा (निफाड)",
          "nameHi": "पिंपळगाव फाटा (निफाड)",
          "time": "9:21 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07492,
          "lng": 74.13309,
          "roadIndex": 130
        },
        {
          "name": "Kundewadi Phata",
          "nameMr": "कुंदेवाडी फाटा",
          "nameHi": "कुंदेवाडी फाटा",
          "time": "9:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07021,
          "lng": 74.1714,
          "roadIndex": 141
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "9:33 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09889,
          "lng": 74.22234,
          "roadIndex": 161
        },
        {
          "name": "Vinchur Phata",
          "nameMr": "विंचूर फाटा",
          "nameHi": "विंचूर फाटा",
          "time": "9:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "9:42 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Savargaon Phata",
          "nameMr": "सावरगाव फाटा",
          "nameHi": "सावरगाव फाटा",
          "time": "9:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07562,
          "lng": 74.27174,
          "roadIndex": 197
        },
        {
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "10:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05462,
          "lng": 74.36073,
          "roadIndex": 228
        },
        {
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "10:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05125,
          "lng": 74.40984,
          "roadIndex": 243
        },
        {
          "name": "Babhulgaon Phata",
          "nameMr": "बाभुलगाव फाटा",
          "nameHi": "बाभुलगाव फाटा",
          "time": "10:15 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.04348,
          "lng": 74.44647,
          "roadIndex": 253
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "10:21 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04247,
          "lng": 74.4891,
          "roadIndex": 265
        }
      ]
    },
    {
      "id": "BUS-101-2",
      "number": "MH 15 AK 3210",
      "type": "Hirkani (Semi Luxury Asiad)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-YEO",
      "routeName": "Nashik CBS to Yeola Bus Stand",
      "routeNameMr": "नाशिक सी.बी.एस. ते येवला बस स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Aurangabad - Nashik Highway (SH 30), Sambhaji Naka, Saikheda Phata, Chandori, Pimpalas, Niphad",
      "driverName": "Prakash R. Shinde (Emp #5120)",
      "conductorName": "Ramesh Pawar",
      "scheduledTime": "09:15 AM",
      "currentLat": 20.11105,
      "currentLng": 74.22864,
      "roadIndex": 169,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "78% (Diesel)",
      "distanceFromStop": 6.4,
      "etaMinutes": 8,
      "previousStop": "Ranwad Phata",
      "nextStop": "Vinchur Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 3210 from Nashik CBS to Yeola Bus Stand is en route. Approaching Vinchur Phata in approximately 8 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 3210 नाशिक सी.बी.एस. ते येवला बस स्थानक मार्गावर धावत आहे. पुढील स्थानक विंचूर फाटा सुमारे 8 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 3210 मार्गस्थ है। अगला स्टॉप विंचूर फाटा लगभग 8 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "9:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "9:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Gadge Maharaj Bridge",
          "nameMr": "गाडगे महाराज पूल",
          "nameHi": "गाडगे महाराज पूल",
          "time": "9:23 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00413,
          "lng": 73.79277,
          "roadIndex": 7
        },
        {
          "name": "Chhatrapati Sambhaji Maharaj Naka",
          "nameMr": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "nameHi": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "time": "9:28 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01074,
          "lng": 73.81036,
          "roadIndex": 16
        },
        {
          "name": "Mirchi Hotel Phata",
          "nameMr": "मिरची हॉटेल फाटा",
          "nameHi": "मिरची हॉटेल फाटा",
          "time": "9:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00525,
          "lng": 73.82495,
          "roadIndex": 22
        },
        {
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "9:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99714,
          "lng": 73.84065,
          "roadIndex": 28
        },
        {
          "name": "Manur Phata",
          "nameMr": "मानूर फाटा",
          "nameHi": "मानूर फाटा",
          "time": "9:40 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99946,
          "lng": 73.85972,
          "roadIndex": 34
        },
        {
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "9:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00173,
          "lng": 73.88137,
          "roadIndex": 41
        },
        {
          "name": "Shilapur Phata",
          "nameMr": "शिलापूर फाटा",
          "nameHi": "शिलापूर फाटा",
          "time": "9:49 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99651,
          "lng": 73.89985,
          "roadIndex": 47
        },
        {
          "name": "Madsangvi Phata",
          "nameMr": "माडसांगवी फाटा",
          "nameHi": "माडसांगवी फाटा",
          "time": "9:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99732,
          "lng": 73.91531,
          "roadIndex": 53
        },
        {
          "name": "Lakhalgaon Phata",
          "nameMr": "लाखलगाव फाटा",
          "nameHi": "लाखलगाव फाटा",
          "time": "9:57 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99963,
          "lng": 73.93065,
          "roadIndex": 59
        },
        {
          "name": "Tarukhedle Phata",
          "nameMr": "तारुखेडले फाटा",
          "nameHi": "तारुखेडले फाटा",
          "time": "10:02 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00528,
          "lng": 73.95723,
          "roadIndex": 65
        },
        {
          "name": "Saikheda Phata",
          "nameMr": "सायखेडा फाटा",
          "nameHi": "सायखेडा फाटा",
          "time": "10:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01967,
          "lng": 73.99583,
          "roadIndex": 73
        },
        {
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्थानक",
          "time": "10:11 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 77
        },
        {
          "name": "Pimpalas",
          "nameMr": "पिंपळस",
          "nameHi": "पिंपळस",
          "time": "10:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06839,
          "lng": 74.04662,
          "roadIndex": 96
        },
        {
          "name": "Niphad Railway Phata",
          "nameMr": "निफाड रेल्वे स्टेशन फाटा",
          "nameHi": "निफाड रेल्वे स्टेशन फाटा",
          "time": "10:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07274,
          "lng": 74.09561,
          "roadIndex": 110
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "10:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08237,
          "lng": 74.1088,
          "roadIndex": 121
        },
        {
          "name": "Pimpalgaon Phata (Niphad)",
          "nameMr": "पिंपळगाव फाटा (निफाड)",
          "nameHi": "पिंपळगाव फाटा (निफाड)",
          "time": "10:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07492,
          "lng": 74.13309,
          "roadIndex": 130
        },
        {
          "name": "Kundewadi Phata",
          "nameMr": "कुंदेवाडी फाटा",
          "nameHi": "कुंदेवाडी फाटा",
          "time": "10:42 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07021,
          "lng": 74.1714,
          "roadIndex": 141
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "10:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09889,
          "lng": 74.22234,
          "roadIndex": 161
        },
        {
          "name": "Vinchur Phata",
          "nameMr": "विंचूर फाटा",
          "nameHi": "विंचूर फाटा",
          "time": "10:53 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "10:57 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Savargaon Phata",
          "nameMr": "सावरगाव फाटा",
          "nameHi": "सावरगाव फाटा",
          "time": "11:05 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07562,
          "lng": 74.27174,
          "roadIndex": 197
        },
        {
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "11:15 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05462,
          "lng": 74.36073,
          "roadIndex": 228
        },
        {
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "11:23 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05125,
          "lng": 74.40984,
          "roadIndex": 243
        },
        {
          "name": "Babhulgaon Phata",
          "nameMr": "बाभुलगाव फाटा",
          "nameHi": "बाभुलगाव फाटा",
          "time": "11:30 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04348,
          "lng": 74.44647,
          "roadIndex": 253
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "11:36 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04247,
          "lng": 74.4891,
          "roadIndex": 265
        }
      ]
    },
    {
      "id": "BUS-101",
      "number": "MH 15 EG 4155",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-YEO",
      "routeName": "Nashik CBS to Yeola Bus Stand",
      "routeNameMr": "नाशिक सी.बी.एस. ते येवला बस स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Aurangabad - Nashik Highway (SH 30), Sambhaji Naka, Saikheda Phata, Chandori, Pimpalas, Niphad",
      "driverName": "Ramesh G. Pawar (Emp #4402)",
      "conductorName": "Ramesh Pawar",
      "scheduledTime": "10:30 AM",
      "currentLat": 20.07662,
      "currentLng": 74.11068,
      "roadIndex": 115,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 1.1,
      "etaMinutes": 2,
      "previousStop": "Niphad Railway Phata",
      "nextStop": "Niphad Bus Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4155 from Nashik CBS to Yeola Bus Stand is en route. Approaching Niphad Bus Stand in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4155 नाशिक सी.बी.एस. ते येवला बस स्थानक मार्गावर धावत आहे. पुढील स्थानक निफाड बस स्थानक सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4155 मार्गस्थ है। अगला स्टॉप निफाड बस स्थानक लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "10:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "10:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Gadge Maharaj Bridge",
          "nameMr": "गाडगे महाराज पूल",
          "nameHi": "गाडगे महाराज पूल",
          "time": "10:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00413,
          "lng": 73.79277,
          "roadIndex": 7
        },
        {
          "name": "Chhatrapati Sambhaji Maharaj Naka",
          "nameMr": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "nameHi": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "time": "10:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01074,
          "lng": 73.81036,
          "roadIndex": 16
        },
        {
          "name": "Mirchi Hotel Phata",
          "nameMr": "मिरची हॉटेल फाटा",
          "nameHi": "मिरची हॉटेल फाटा",
          "time": "10:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00525,
          "lng": 73.82495,
          "roadIndex": 22
        },
        {
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "10:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99714,
          "lng": 73.84065,
          "roadIndex": 28
        },
        {
          "name": "Manur Phata",
          "nameMr": "मानूर फाटा",
          "nameHi": "मानूर फाटा",
          "time": "10:55 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99946,
          "lng": 73.85972,
          "roadIndex": 34
        },
        {
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "11:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00173,
          "lng": 73.88137,
          "roadIndex": 41
        },
        {
          "name": "Shilapur Phata",
          "nameMr": "शिलापूर फाटा",
          "nameHi": "शिलापूर फाटा",
          "time": "11:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99651,
          "lng": 73.89985,
          "roadIndex": 47
        },
        {
          "name": "Madsangvi Phata",
          "nameMr": "माडसांगवी फाटा",
          "nameHi": "माडसांगवी फाटा",
          "time": "11:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99732,
          "lng": 73.91531,
          "roadIndex": 53
        },
        {
          "name": "Lakhalgaon Phata",
          "nameMr": "लाखलगाव फाटा",
          "nameHi": "लाखलगाव फाटा",
          "time": "11:12 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99963,
          "lng": 73.93065,
          "roadIndex": 59
        },
        {
          "name": "Tarukhedle Phata",
          "nameMr": "तारुखेडले फाटा",
          "nameHi": "तारुखेडले फाटा",
          "time": "11:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00528,
          "lng": 73.95723,
          "roadIndex": 65
        },
        {
          "name": "Saikheda Phata",
          "nameMr": "सायखेडा फाटा",
          "nameHi": "सायखेडा फाटा",
          "time": "11:22 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01967,
          "lng": 73.99583,
          "roadIndex": 73
        },
        {
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्थानक",
          "time": "11:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 77
        },
        {
          "name": "Pimpalas",
          "nameMr": "पिंपळस",
          "nameHi": "पिंपळस",
          "time": "11:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06839,
          "lng": 74.04662,
          "roadIndex": 96
        },
        {
          "name": "Niphad Railway Phata",
          "nameMr": "निफाड रेल्वे स्टेशन फाटा",
          "nameHi": "निफाड रेल्वे स्टेशन फाटा",
          "time": "11:40 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07274,
          "lng": 74.09561,
          "roadIndex": 110
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "11:44 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.08237,
          "lng": 74.1088,
          "roadIndex": 121
        },
        {
          "name": "Pimpalgaon Phata (Niphad)",
          "nameMr": "पिंपळगाव फाटा (निफाड)",
          "nameHi": "पिंपळगाव फाटा (निफाड)",
          "time": "11:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07492,
          "lng": 74.13309,
          "roadIndex": 130
        },
        {
          "name": "Kundewadi Phata",
          "nameMr": "कुंदेवाडी फाटा",
          "nameHi": "कुंदेवाडी फाटा",
          "time": "11:57 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07021,
          "lng": 74.1714,
          "roadIndex": 141
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "12:03 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09889,
          "lng": 74.22234,
          "roadIndex": 161
        },
        {
          "name": "Vinchur Phata",
          "nameMr": "विंचूर फाटा",
          "nameHi": "विंचूर फाटा",
          "time": "12:08 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "12:12 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Savargaon Phata",
          "nameMr": "सावरगाव फाटा",
          "nameHi": "सावरगाव फाटा",
          "time": "12:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07562,
          "lng": 74.27174,
          "roadIndex": 197
        },
        {
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "12:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05462,
          "lng": 74.36073,
          "roadIndex": 228
        },
        {
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "12:38 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05125,
          "lng": 74.40984,
          "roadIndex": 243
        },
        {
          "name": "Babhulgaon Phata",
          "nameMr": "बाभुलगाव फाटा",
          "nameHi": "बाभुलगाव फाटा",
          "time": "12:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04348,
          "lng": 74.44647,
          "roadIndex": 253
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "12:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04247,
          "lng": 74.4891,
          "roadIndex": 265
        }
      ]
    },
    {
      "id": "BUS-101-4",
      "number": "MH 15 TR 5522",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-YEO",
      "routeName": "Nashik CBS to Yeola Bus Stand",
      "routeNameMr": "नाशिक सी.बी.एस. ते येवला बस स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Aurangabad - Nashik Highway (SH 30), Sambhaji Naka, Saikheda Phata, Chandori, Pimpalas, Niphad",
      "driverName": "Vitthal K. Jadhav (Emp #6012)",
      "conductorName": "Ramesh Pawar",
      "scheduledTime": "11:45 AM",
      "currentLat": 20.00939,
      "currentLng": 73.97787,
      "roadIndex": 69,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "64% (Diesel)",
      "distanceFromStop": 2.2,
      "etaMinutes": 3,
      "previousStop": "Tarukhedle Phata",
      "nextStop": "Saikheda Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 5522 from Nashik CBS to Yeola Bus Stand is en route. Approaching Saikheda Phata in approximately 3 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 5522 नाशिक सी.बी.एस. ते येवला बस स्थानक मार्गावर धावत आहे. पुढील स्थानक सायखेडा फाटा सुमारे 3 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 5522 मार्गस्थ है। अगला स्टॉप सायखेडा फाटा लगभग 3 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "11:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "11:49 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Gadge Maharaj Bridge",
          "nameMr": "गाडगे महाराज पूल",
          "nameHi": "गाडगे महाराज पूल",
          "time": "11:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00413,
          "lng": 73.79277,
          "roadIndex": 7
        },
        {
          "name": "Chhatrapati Sambhaji Maharaj Naka",
          "nameMr": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "nameHi": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "time": "11:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01074,
          "lng": 73.81036,
          "roadIndex": 16
        },
        {
          "name": "Mirchi Hotel Phata",
          "nameMr": "मिरची हॉटेल फाटा",
          "nameHi": "मिरची हॉटेल फाटा",
          "time": "12:02 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00525,
          "lng": 73.82495,
          "roadIndex": 22
        },
        {
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "12:06 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99714,
          "lng": 73.84065,
          "roadIndex": 28
        },
        {
          "name": "Manur Phata",
          "nameMr": "मानूर फाटा",
          "nameHi": "मानूर फाटा",
          "time": "12:10 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99946,
          "lng": 73.85972,
          "roadIndex": 34
        },
        {
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "12:15 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00173,
          "lng": 73.88137,
          "roadIndex": 41
        },
        {
          "name": "Shilapur Phata",
          "nameMr": "शिलापूर फाटा",
          "nameHi": "शिलापूर फाटा",
          "time": "12:19 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99651,
          "lng": 73.89985,
          "roadIndex": 47
        },
        {
          "name": "Madsangvi Phata",
          "nameMr": "माडसांगवी फाटा",
          "nameHi": "माडसांगवी फाटा",
          "time": "12:23 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99732,
          "lng": 73.91531,
          "roadIndex": 53
        },
        {
          "name": "Lakhalgaon Phata",
          "nameMr": "लाखलगाव फाटा",
          "nameHi": "लाखलगाव फाटा",
          "time": "12:27 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99963,
          "lng": 73.93065,
          "roadIndex": 59
        },
        {
          "name": "Tarukhedle Phata",
          "nameMr": "तारुखेडले फाटा",
          "nameHi": "तारुखेडले फाटा",
          "time": "12:32 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00528,
          "lng": 73.95723,
          "roadIndex": 65
        },
        {
          "name": "Saikheda Phata",
          "nameMr": "सायखेडा फाटा",
          "nameHi": "सायखेडा फाटा",
          "time": "12:37 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.01967,
          "lng": 73.99583,
          "roadIndex": 73
        },
        {
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्थानक",
          "time": "12:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 77
        },
        {
          "name": "Pimpalas",
          "nameMr": "पिंपळस",
          "nameHi": "पिंपळस",
          "time": "12:49 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06839,
          "lng": 74.04662,
          "roadIndex": 96
        },
        {
          "name": "Niphad Railway Phata",
          "nameMr": "निफाड रेल्वे स्टेशन फाटा",
          "nameHi": "निफाड रेल्वे स्टेशन फाटा",
          "time": "12:55 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07274,
          "lng": 74.09561,
          "roadIndex": 110
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "12:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08237,
          "lng": 74.1088,
          "roadIndex": 121
        },
        {
          "name": "Pimpalgaon Phata (Niphad)",
          "nameMr": "पिंपळगाव फाटा (निफाड)",
          "nameHi": "पिंपळगाव फाटा (निफाड)",
          "time": "1:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07492,
          "lng": 74.13309,
          "roadIndex": 130
        },
        {
          "name": "Kundewadi Phata",
          "nameMr": "कुंदेवाडी फाटा",
          "nameHi": "कुंदेवाडी फाटा",
          "time": "1:12 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07021,
          "lng": 74.1714,
          "roadIndex": 141
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "1:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09889,
          "lng": 74.22234,
          "roadIndex": 161
        },
        {
          "name": "Vinchur Phata",
          "nameMr": "विंचूर फाटा",
          "nameHi": "विंचूर फाटा",
          "time": "1:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "1:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Savargaon Phata",
          "nameMr": "सावरगाव फाटा",
          "nameHi": "सावरगाव फाटा",
          "time": "1:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07562,
          "lng": 74.27174,
          "roadIndex": 197
        },
        {
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "1:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05462,
          "lng": 74.36073,
          "roadIndex": 228
        },
        {
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "1:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05125,
          "lng": 74.40984,
          "roadIndex": 243
        },
        {
          "name": "Babhulgaon Phata",
          "nameMr": "बाभुलगाव फाटा",
          "nameHi": "बाभुलगाव फाटा",
          "time": "2:00 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04348,
          "lng": 74.44647,
          "roadIndex": 253
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "2:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04247,
          "lng": 74.4891,
          "roadIndex": 265
        }
      ]
    },
    {
      "id": "BUS-101-5",
      "number": "MH 15 EF 1842",
      "type": "Parivartan (Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#C2185B",
      "routeId": "R-NSK-YEO",
      "routeName": "Nashik CBS to Yeola Bus Stand",
      "routeNameMr": "नाशिक सी.बी.एस. ते येवला बस स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Aurangabad - Nashik Highway (SH 30), Sambhaji Naka, Saikheda Phata, Chandori, Pimpalas, Niphad",
      "driverName": "Ganesh S. More (Emp #3891)",
      "conductorName": "Ramesh Pawar",
      "scheduledTime": "01:00 PM",
      "currentLat": 20.00174,
      "currentLng": 73.83234,
      "roadIndex": 25,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 1,
      "etaMinutes": 2,
      "previousStop": "Mirchi Hotel Phata",
      "nextStop": "Nandur Naka",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EF 1842 from Nashik CBS to Yeola Bus Stand is en route. Approaching Nandur Naka in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EF 1842 नाशिक सी.बी.एस. ते येवला बस स्थानक मार्गावर धावत आहे. पुढील स्थानक नांदूर नाका सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EF 1842 मार्गस्थ है। अगला स्टॉप नांदूर नाका लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "1:00 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "1:04 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Gadge Maharaj Bridge",
          "nameMr": "गाडगे महाराज पूल",
          "nameHi": "गाडगे महाराज पूल",
          "time": "1:08 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00413,
          "lng": 73.79277,
          "roadIndex": 7
        },
        {
          "name": "Chhatrapati Sambhaji Maharaj Naka",
          "nameMr": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "nameHi": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "time": "1:13 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01074,
          "lng": 73.81036,
          "roadIndex": 16
        },
        {
          "name": "Mirchi Hotel Phata",
          "nameMr": "मिरची हॉटेल फाटा",
          "nameHi": "मिरची हॉटेल फाटा",
          "time": "1:17 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00525,
          "lng": 73.82495,
          "roadIndex": 22
        },
        {
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "1:21 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.99714,
          "lng": 73.84065,
          "roadIndex": 28
        },
        {
          "name": "Manur Phata",
          "nameMr": "मानूर फाटा",
          "nameHi": "मानूर फाटा",
          "time": "1:25 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99946,
          "lng": 73.85972,
          "roadIndex": 34
        },
        {
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "1:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00173,
          "lng": 73.88137,
          "roadIndex": 41
        },
        {
          "name": "Shilapur Phata",
          "nameMr": "शिलापूर फाटा",
          "nameHi": "शिलापूर फाटा",
          "time": "1:34 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99651,
          "lng": 73.89985,
          "roadIndex": 47
        },
        {
          "name": "Madsangvi Phata",
          "nameMr": "माडसांगवी फाटा",
          "nameHi": "माडसांगवी फाटा",
          "time": "1:38 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99732,
          "lng": 73.91531,
          "roadIndex": 53
        },
        {
          "name": "Lakhalgaon Phata",
          "nameMr": "लाखलगाव फाटा",
          "nameHi": "लाखलगाव फाटा",
          "time": "1:42 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99963,
          "lng": 73.93065,
          "roadIndex": 59
        },
        {
          "name": "Tarukhedle Phata",
          "nameMr": "तारुखेडले फाटा",
          "nameHi": "तारुखेडले फाटा",
          "time": "1:47 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00528,
          "lng": 73.95723,
          "roadIndex": 65
        },
        {
          "name": "Saikheda Phata",
          "nameMr": "सायखेडा फाटा",
          "nameHi": "सायखेडा फाटा",
          "time": "1:52 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01967,
          "lng": 73.99583,
          "roadIndex": 73
        },
        {
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्थानक",
          "time": "1:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 77
        },
        {
          "name": "Pimpalas",
          "nameMr": "पिंपळस",
          "nameHi": "पिंपळस",
          "time": "2:04 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06839,
          "lng": 74.04662,
          "roadIndex": 96
        },
        {
          "name": "Niphad Railway Phata",
          "nameMr": "निफाड रेल्वे स्टेशन फाटा",
          "nameHi": "निफाड रेल्वे स्टेशन फाटा",
          "time": "2:10 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07274,
          "lng": 74.09561,
          "roadIndex": 110
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "2:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08237,
          "lng": 74.1088,
          "roadIndex": 121
        },
        {
          "name": "Pimpalgaon Phata (Niphad)",
          "nameMr": "पिंपळगाव फाटा (निफाड)",
          "nameHi": "पिंपळगाव फाटा (निफाड)",
          "time": "2:21 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07492,
          "lng": 74.13309,
          "roadIndex": 130
        },
        {
          "name": "Kundewadi Phata",
          "nameMr": "कुंदेवाडी फाटा",
          "nameHi": "कुंदेवाडी फाटा",
          "time": "2:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07021,
          "lng": 74.1714,
          "roadIndex": 141
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "2:33 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09889,
          "lng": 74.22234,
          "roadIndex": 161
        },
        {
          "name": "Vinchur Phata",
          "nameMr": "विंचूर फाटा",
          "nameHi": "विंचूर फाटा",
          "time": "2:38 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "2:42 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Savargaon Phata",
          "nameMr": "सावरगाव फाटा",
          "nameHi": "सावरगाव फाटा",
          "time": "2:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07562,
          "lng": 74.27174,
          "roadIndex": 197
        },
        {
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "3:00 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05462,
          "lng": 74.36073,
          "roadIndex": 228
        },
        {
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "3:08 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05125,
          "lng": 74.40984,
          "roadIndex": 243
        },
        {
          "name": "Babhulgaon Phata",
          "nameMr": "बाभुलगाव फाटा",
          "nameHi": "बाभुलगाव फाटा",
          "time": "3:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04348,
          "lng": 74.44647,
          "roadIndex": 253
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "3:21 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04247,
          "lng": 74.4891,
          "roadIndex": 265
        }
      ]
    },
    {
      "id": "BUS-101-6",
      "number": "MH 15 EG 4890",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-YEO",
      "routeName": "Nashik CBS to Yeola Bus Stand",
      "routeNameMr": "नाशिक सी.बी.एस. ते येवला बस स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Aurangabad - Nashik Highway (SH 30), Sambhaji Naka, Saikheda Phata, Chandori, Pimpalas, Niphad",
      "driverName": "Dattatray B. Jagtap (Emp #5514)",
      "conductorName": "Ramesh Pawar",
      "scheduledTime": "02:15 PM",
      "currentLat": 20.00201,
      "currentLng": 73.78986,
      "roadIndex": 3,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "80% (38/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "50% (Diesel)",
      "distanceFromStop": 0.5,
      "etaMinutes": 2,
      "previousStop": "Shalimar Chowk",
      "nextStop": "Gadge Maharaj Bridge",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4890 from Nashik CBS to Yeola Bus Stand is en route. Approaching Gadge Maharaj Bridge in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4890 नाशिक सी.बी.एस. ते येवला बस स्थानक मार्गावर धावत आहे. पुढील स्थानक गाडगे महाराज पूल सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4890 मार्गस्थ है। अगला स्टॉप गाडगे महाराज पूल लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "2:15 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "2:19 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Gadge Maharaj Bridge",
          "nameMr": "गाडगे महाराज पूल",
          "nameHi": "गाडगे महाराज पूल",
          "time": "2:23 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.00413,
          "lng": 73.79277,
          "roadIndex": 7
        },
        {
          "name": "Chhatrapati Sambhaji Maharaj Naka",
          "nameMr": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "nameHi": "छत्रपती संभाजी महाराज नाका (औरंगाबाद नाका)",
          "time": "2:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01074,
          "lng": 73.81036,
          "roadIndex": 16
        },
        {
          "name": "Mirchi Hotel Phata",
          "nameMr": "मिरची हॉटेल फाटा",
          "nameHi": "मिरची हॉटेल फाटा",
          "time": "2:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00525,
          "lng": 73.82495,
          "roadIndex": 22
        },
        {
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "2:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99714,
          "lng": 73.84065,
          "roadIndex": 28
        },
        {
          "name": "Manur Phata",
          "nameMr": "मानूर फाटा",
          "nameHi": "मानूर फाटा",
          "time": "2:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99946,
          "lng": 73.85972,
          "roadIndex": 34
        },
        {
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "2:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00173,
          "lng": 73.88137,
          "roadIndex": 41
        },
        {
          "name": "Shilapur Phata",
          "nameMr": "शिलापूर फाटा",
          "nameHi": "शिलापूर फाटा",
          "time": "2:49 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99651,
          "lng": 73.89985,
          "roadIndex": 47
        },
        {
          "name": "Madsangvi Phata",
          "nameMr": "माडसांगवी फाटा",
          "nameHi": "माडसांगवी फाटा",
          "time": "2:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99732,
          "lng": 73.91531,
          "roadIndex": 53
        },
        {
          "name": "Lakhalgaon Phata",
          "nameMr": "लाखलगाव फाटा",
          "nameHi": "लाखलगाव फाटा",
          "time": "2:57 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99963,
          "lng": 73.93065,
          "roadIndex": 59
        },
        {
          "name": "Tarukhedle Phata",
          "nameMr": "तारुखेडले फाटा",
          "nameHi": "तारुखेडले फाटा",
          "time": "3:02 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00528,
          "lng": 73.95723,
          "roadIndex": 65
        },
        {
          "name": "Saikheda Phata",
          "nameMr": "सायखेडा फाटा",
          "nameHi": "सायखेडा फाटा",
          "time": "3:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01967,
          "lng": 73.99583,
          "roadIndex": 73
        },
        {
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्थानक",
          "time": "3:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 77
        },
        {
          "name": "Pimpalas",
          "nameMr": "पिंपळस",
          "nameHi": "पिंपळस",
          "time": "3:19 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06839,
          "lng": 74.04662,
          "roadIndex": 96
        },
        {
          "name": "Niphad Railway Phata",
          "nameMr": "निफाड रेल्वे स्टेशन फाटा",
          "nameHi": "निफाड रेल्वे स्टेशन फाटा",
          "time": "3:25 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07274,
          "lng": 74.09561,
          "roadIndex": 110
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "3:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08237,
          "lng": 74.1088,
          "roadIndex": 121
        },
        {
          "name": "Pimpalgaon Phata (Niphad)",
          "nameMr": "पिंपळगाव फाटा (निफाड)",
          "nameHi": "पिंपळगाव फाटा (निफाड)",
          "time": "3:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07492,
          "lng": 74.13309,
          "roadIndex": 130
        },
        {
          "name": "Kundewadi Phata",
          "nameMr": "कुंदेवाडी फाटा",
          "nameHi": "कुंदेवाडी फाटा",
          "time": "3:42 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07021,
          "lng": 74.1714,
          "roadIndex": 141
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "3:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09889,
          "lng": 74.22234,
          "roadIndex": 161
        },
        {
          "name": "Vinchur Phata",
          "nameMr": "विंचूर फाटा",
          "nameHi": "विंचूर फाटा",
          "time": "3:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "3:57 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.22833,
          "roadIndex": 179
        },
        {
          "name": "Savargaon Phata",
          "nameMr": "सावरगाव फाटा",
          "nameHi": "सावरगाव फाटा",
          "time": "4:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.07562,
          "lng": 74.27174,
          "roadIndex": 197
        },
        {
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "4:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05462,
          "lng": 74.36073,
          "roadIndex": 228
        },
        {
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "4:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.05125,
          "lng": 74.40984,
          "roadIndex": 243
        },
        {
          "name": "Babhulgaon Phata",
          "nameMr": "बाभुलगाव फाटा",
          "nameHi": "बाभुलगाव फाटा",
          "time": "4:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04348,
          "lng": 74.44647,
          "roadIndex": 253
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "4:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04247,
          "lng": 74.4891,
          "roadIndex": 265
        }
      ]
    },
    {
      "id": "BUS-102-1",
      "number": "MH 15 TR 3102",
      "type": "Shivaee (Electric AC E-Bus)",
      "typeCode": "ELECTRIC",
      "badgeColor": "#00897B",
      "routeId": "R-NSK-TRM",
      "routeName": "Nashik CBS to Trimbakeshwar Depot",
      "routeNameMr": "नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार",
      "destination": "Trimbakeshwar Depot",
      "destinationMr": "त्र्यंबकेश्वर आगार",
      "via": "Satpur MIDC, Mahiravani, Anjaneri",
      "driverName": "Sunil M. Gaikwad (Emp #5190)",
      "conductorName": "Deepak Jadhav",
      "scheduledTime": "09:30 AM",
      "currentLat": 19.95198,
      "currentLng": 73.56881,
      "roadIndex": 51,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "88% (Battery)",
      "distanceFromStop": 1.8,
      "etaMinutes": 2,
      "previousStop": "Anjaneri Ashram",
      "nextStop": "Bramhagiri Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 3102 from Nashik CBS to Trimbakeshwar Depot is en route. Approaching Bramhagiri Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 3102 नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार मार्गावर धावत आहे. पुढील स्थानक ब्रह्मगिरी फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 3102 मार्गस्थ है। अगला स्टॉप ब्रह्मगिरी फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "9:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "MICO Circle",
          "nameMr": "मायको सर्कल",
          "nameHi": "मायको सर्कल",
          "time": "9:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99354,
          "lng": 73.78251,
          "roadIndex": 5
        },
        {
          "name": "ITI Signal",
          "nameMr": "आय.टी.आय. सिग्नल",
          "nameHi": "आय.टी.आय. सिग्नल",
          "time": "9:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99424,
          "lng": 73.77188,
          "roadIndex": 8
        },
        {
          "name": "Satpur Police Station",
          "nameMr": "सातपूर पोलीस ठाणे",
          "nameHi": "सातपूर पोलीस ठाणे",
          "time": "9:44 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99178,
          "lng": 73.74217,
          "roadIndex": 10
        },
        {
          "name": "Carbon Naka",
          "nameMr": "कार्बन नाका",
          "nameHi": "कार्बन नाका",
          "time": "9:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98994,
          "lng": 73.7421,
          "roadIndex": 11
        },
        {
          "name": "Satpur Municipal Corporation",
          "nameMr": "सातपूर पालिका फाटा",
          "nameHi": "सातपूर पालिका फाटा",
          "time": "9:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur MIDC",
          "nameMr": "सातपूर एम.आय.डी.सी.",
          "nameHi": "सातपूर एम.आय.डी.सी.",
          "time": "9:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur Colony Phata",
          "nameMr": "सातपूर कॉलनी फाटा",
          "nameHi": "सातपूर कॉलनी फाटा",
          "time": "9:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98591,
          "lng": 73.72417,
          "roadIndex": 14
        },
        {
          "name": "Shramik Nagar Phata",
          "nameMr": "श्रमिक नगर फाटा",
          "nameHi": "श्रमिक नगर फाटा",
          "time": "10:03 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98382,
          "lng": 73.71926,
          "roadIndex": 15
        },
        {
          "name": "Belgaon Dhaga Phata",
          "nameMr": "बेलगाव ढगा फाटा",
          "nameHi": "बेलगाव ढगा फाटा",
          "time": "10:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97946,
          "lng": 73.70935,
          "roadIndex": 18
        },
        {
          "name": "Pimpalgaon Bahula",
          "nameMr": "पिंपळगाव बहुला",
          "nameHi": "पिंपळगाव बहुला",
          "time": "10:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97765,
          "lng": 73.69479,
          "roadIndex": 19
        },
        {
          "name": "Mahiravani Phata",
          "nameMr": "महिरावणी फाटा",
          "nameHi": "महिरावणी फाटा",
          "time": "10:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Mahiravani Stand",
          "nameMr": "महिरावणी स्थानक",
          "nameHi": "महिरावणी स्थानक",
          "time": "10:21 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Sandip Foundation",
          "nameMr": "संदीप फाउंडेशन",
          "nameHi": "संदीप फाउंडेशन",
          "time": "10:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96604,
          "lng": 73.66124,
          "roadIndex": 27
        },
        {
          "name": "Pegalwadi Phata",
          "nameMr": "पेगलवाडी फाटा",
          "nameHi": "पेगलवाडी फाटा",
          "time": "10:31 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95956,
          "lng": 73.62912,
          "roadIndex": 30
        },
        {
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "time": "10:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9473,
          "lng": 73.61115,
          "roadIndex": 35
        },
        {
          "name": "Anjaneri Ashram",
          "nameMr": "अंजनेरी आश्रम",
          "nameHi": "अंजनेरी आश्रम",
          "time": "10:40 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95456,
          "lng": 73.59086,
          "roadIndex": 48
        },
        {
          "name": "Bramhagiri Phata",
          "nameMr": "ब्रह्मगिरी फाटा",
          "nameHi": "ब्रह्मगिरी फाटा",
          "time": "10:46 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.94515,
          "lng": 73.55328,
          "roadIndex": 54
        },
        {
          "name": "Trimbakeshwar Depot",
          "nameMr": "त्र्यंबकेश्वर बस आगार",
          "nameHi": "त्र्यंबकेश्वर बस आगार",
          "time": "10:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93188,
          "lng": 73.53116,
          "roadIndex": 62
        }
      ]
    },
    {
      "id": "BUS-102-2",
      "number": "MH 15 EG 3820",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-TRM",
      "routeName": "Nashik CBS to Trimbakeshwar Depot",
      "routeNameMr": "नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार",
      "destination": "Trimbakeshwar Depot",
      "destinationMr": "त्र्यंबकेश्वर आगार",
      "via": "Satpur MIDC, Mahiravani, Anjaneri",
      "driverName": "Kailas N. Bhalerao (Emp #4801)",
      "conductorName": "Deepak Jadhav",
      "scheduledTime": "10:15 AM",
      "currentLat": 19.96474,
      "currentLng": 73.64932,
      "roadIndex": 28,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "78% (Diesel)",
      "distanceFromStop": 2.2,
      "etaMinutes": 3,
      "previousStop": "Sandip Foundation",
      "nextStop": "Pegalwadi Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 3820 from Nashik CBS to Trimbakeshwar Depot is en route. Approaching Pegalwadi Phata in approximately 3 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 3820 नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार मार्गावर धावत आहे. पुढील स्थानक पेगलवाडी फाटा सुमारे 3 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 3820 मार्गस्थ है। अगला स्टॉप पेगलवाडी फाटा लगभग 3 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "10:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "MICO Circle",
          "nameMr": "मायको सर्कल",
          "nameHi": "मायको सर्कल",
          "time": "10:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99354,
          "lng": 73.78251,
          "roadIndex": 5
        },
        {
          "name": "ITI Signal",
          "nameMr": "आय.टी.आय. सिग्नल",
          "nameHi": "आय.टी.आय. सिग्नल",
          "time": "10:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99424,
          "lng": 73.77188,
          "roadIndex": 8
        },
        {
          "name": "Satpur Police Station",
          "nameMr": "सातपूर पोलीस ठाणे",
          "nameHi": "सातपूर पोलीस ठाणे",
          "time": "10:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99178,
          "lng": 73.74217,
          "roadIndex": 10
        },
        {
          "name": "Carbon Naka",
          "nameMr": "कार्बन नाका",
          "nameHi": "कार्बन नाका",
          "time": "10:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98994,
          "lng": 73.7421,
          "roadIndex": 11
        },
        {
          "name": "Satpur Municipal Corporation",
          "nameMr": "सातपूर पालिका फाटा",
          "nameHi": "सातपूर पालिका फाटा",
          "time": "10:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur MIDC",
          "nameMr": "सातपूर एम.आय.डी.सी.",
          "nameHi": "सातपूर एम.आय.डी.सी.",
          "time": "10:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur Colony Phata",
          "nameMr": "सातपूर कॉलनी फाटा",
          "nameHi": "सातपूर कॉलनी फाटा",
          "time": "10:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98591,
          "lng": 73.72417,
          "roadIndex": 14
        },
        {
          "name": "Shramik Nagar Phata",
          "nameMr": "श्रमिक नगर फाटा",
          "nameHi": "श्रमिक नगर फाटा",
          "time": "10:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98382,
          "lng": 73.71926,
          "roadIndex": 15
        },
        {
          "name": "Belgaon Dhaga Phata",
          "nameMr": "बेलगाव ढगा फाटा",
          "nameHi": "बेलगाव ढगा फाटा",
          "time": "10:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97946,
          "lng": 73.70935,
          "roadIndex": 18
        },
        {
          "name": "Pimpalgaon Bahula",
          "nameMr": "पिंपळगाव बहुला",
          "nameHi": "पिंपळगाव बहुला",
          "time": "10:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97765,
          "lng": 73.69479,
          "roadIndex": 19
        },
        {
          "name": "Mahiravani Phata",
          "nameMr": "महिरावणी फाटा",
          "nameHi": "महिरावणी फाटा",
          "time": "11:03 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Mahiravani Stand",
          "nameMr": "महिरावणी स्थानक",
          "nameHi": "महिरावणी स्थानक",
          "time": "11:06 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Sandip Foundation",
          "nameMr": "संदीप फाउंडेशन",
          "nameHi": "संदीप फाउंडेशन",
          "time": "11:11 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96604,
          "lng": 73.66124,
          "roadIndex": 27
        },
        {
          "name": "Pegalwadi Phata",
          "nameMr": "पेगलवाडी फाटा",
          "nameHi": "पेगलवाडी फाटा",
          "time": "11:16 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.95956,
          "lng": 73.62912,
          "roadIndex": 30
        },
        {
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "time": "11:21 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9473,
          "lng": 73.61115,
          "roadIndex": 35
        },
        {
          "name": "Anjaneri Ashram",
          "nameMr": "अंजनेरी आश्रम",
          "nameHi": "अंजनेरी आश्रम",
          "time": "11:25 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95456,
          "lng": 73.59086,
          "roadIndex": 48
        },
        {
          "name": "Bramhagiri Phata",
          "nameMr": "ब्रह्मगिरी फाटा",
          "nameHi": "ब्रह्मगिरी फाटा",
          "time": "11:31 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94515,
          "lng": 73.55328,
          "roadIndex": 54
        },
        {
          "name": "Trimbakeshwar Depot",
          "nameMr": "त्र्यंबकेश्वर बस आगार",
          "nameHi": "त्र्यंबकेश्वर बस आगार",
          "time": "11:36 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93188,
          "lng": 73.53116,
          "roadIndex": 62
        }
      ]
    },
    {
      "id": "BUS-102",
      "number": "MH 15 AK 2901",
      "type": "Hirkani (Semi Luxury)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-TRM",
      "routeName": "Nashik CBS to Trimbakeshwar Depot",
      "routeNameMr": "नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार",
      "destination": "Trimbakeshwar Depot",
      "destinationMr": "त्र्यंबकेश्वर आगार",
      "via": "Satpur MIDC, Mahiravani, Anjaneri",
      "driverName": "Sachin V. Thorat (Emp #5543)",
      "conductorName": "Deepak Jadhav",
      "scheduledTime": "11:00 AM",
      "currentLat": 19.97946,
      "currentLng": 73.70935,
      "roadIndex": 18,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 1.5,
      "etaMinutes": 2,
      "previousStop": "Belgaon Dhaga Phata",
      "nextStop": "Pimpalgaon Bahula",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 2901 from Nashik CBS to Trimbakeshwar Depot is en route. Approaching Pimpalgaon Bahula in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 2901 नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार मार्गावर धावत आहे. पुढील स्थानक पिंपळगाव बहुला सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 2901 मार्गस्थ है। अगला स्टॉप पिंपळगाव बहुला लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "11:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "MICO Circle",
          "nameMr": "मायको सर्कल",
          "nameHi": "मायको सर्कल",
          "time": "11:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99354,
          "lng": 73.78251,
          "roadIndex": 5
        },
        {
          "name": "ITI Signal",
          "nameMr": "आय.टी.आय. सिग्नल",
          "nameHi": "आय.टी.आय. सिग्नल",
          "time": "11:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99424,
          "lng": 73.77188,
          "roadIndex": 8
        },
        {
          "name": "Satpur Police Station",
          "nameMr": "सातपूर पोलीस ठाणे",
          "nameHi": "सातपूर पोलीस ठाणे",
          "time": "11:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99178,
          "lng": 73.74217,
          "roadIndex": 10
        },
        {
          "name": "Carbon Naka",
          "nameMr": "कार्बन नाका",
          "nameHi": "कार्बन नाका",
          "time": "11:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98994,
          "lng": 73.7421,
          "roadIndex": 11
        },
        {
          "name": "Satpur Municipal Corporation",
          "nameMr": "सातपूर पालिका फाटा",
          "nameHi": "सातपूर पालिका फाटा",
          "time": "11:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur MIDC",
          "nameMr": "सातपूर एम.आय.डी.सी.",
          "nameHi": "सातपूर एम.आय.डी.सी.",
          "time": "11:23 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur Colony Phata",
          "nameMr": "सातपूर कॉलनी फाटा",
          "nameHi": "सातपूर कॉलनी फाटा",
          "time": "11:28 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98591,
          "lng": 73.72417,
          "roadIndex": 14
        },
        {
          "name": "Shramik Nagar Phata",
          "nameMr": "श्रमिक नगर फाटा",
          "nameHi": "श्रमिक नगर फाटा",
          "time": "11:33 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98382,
          "lng": 73.71926,
          "roadIndex": 15
        },
        {
          "name": "Belgaon Dhaga Phata",
          "nameMr": "बेलगाव ढगा फाटा",
          "nameHi": "बेलगाव ढगा फाटा",
          "time": "11:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97946,
          "lng": 73.70935,
          "roadIndex": 18
        },
        {
          "name": "Pimpalgaon Bahula",
          "nameMr": "पिंपळगाव बहुला",
          "nameHi": "पिंपळगाव बहुला",
          "time": "11:44 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.97765,
          "lng": 73.69479,
          "roadIndex": 19
        },
        {
          "name": "Mahiravani Phata",
          "nameMr": "महिरावणी फाटा",
          "nameHi": "महिरावणी फाटा",
          "time": "11:48 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Mahiravani Stand",
          "nameMr": "महिरावणी स्थानक",
          "nameHi": "महिरावणी स्थानक",
          "time": "11:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Sandip Foundation",
          "nameMr": "संदीप फाउंडेशन",
          "nameHi": "संदीप फाउंडेशन",
          "time": "11:56 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96604,
          "lng": 73.66124,
          "roadIndex": 27
        },
        {
          "name": "Pegalwadi Phata",
          "nameMr": "पेगलवाडी फाटा",
          "nameHi": "पेगलवाडी फाटा",
          "time": "12:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95956,
          "lng": 73.62912,
          "roadIndex": 30
        },
        {
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "time": "12:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9473,
          "lng": 73.61115,
          "roadIndex": 35
        },
        {
          "name": "Anjaneri Ashram",
          "nameMr": "अंजनेरी आश्रम",
          "nameHi": "अंजनेरी आश्रम",
          "time": "12:10 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95456,
          "lng": 73.59086,
          "roadIndex": 48
        },
        {
          "name": "Bramhagiri Phata",
          "nameMr": "ब्रह्मगिरी फाटा",
          "nameHi": "ब्रह्मगिरी फाटा",
          "time": "12:16 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94515,
          "lng": 73.55328,
          "roadIndex": 54
        },
        {
          "name": "Trimbakeshwar Depot",
          "nameMr": "त्र्यंबकेश्वर बस आगार",
          "nameHi": "त्र्यंबकेश्वर बस आगार",
          "time": "12:21 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93188,
          "lng": 73.53116,
          "roadIndex": 62
        }
      ]
    },
    {
      "id": "BUS-102-4",
      "number": "MH 15 TR 3110",
      "type": "Shivaee (Electric AC E-Bus)",
      "typeCode": "ELECTRIC",
      "badgeColor": "#00897B",
      "routeId": "R-NSK-TRM",
      "routeName": "Nashik CBS to Trimbakeshwar Depot",
      "routeNameMr": "नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार",
      "destination": "Trimbakeshwar Depot",
      "destinationMr": "त्र्यंबकेश्वर आगार",
      "via": "Satpur MIDC, Mahiravani, Anjaneri",
      "driverName": "Nilesh R. Wagh (Emp #6122)",
      "conductorName": "Deepak Jadhav",
      "scheduledTime": "11:45 AM",
      "currentLat": 19.99169,
      "currentLng": 73.74159,
      "roadIndex": 12,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "61% (Battery)",
      "distanceFromStop": 0,
      "etaMinutes": 2,
      "previousStop": "Satpur Municipal Corporation",
      "nextStop": "Satpur MIDC",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 3110 from Nashik CBS to Trimbakeshwar Depot is en route. Approaching Satpur MIDC in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 3110 नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार मार्गावर धावत आहे. पुढील स्थानक सातपूर एम.आय.डी.सी. सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 3110 मार्गस्थ है। अगला स्टॉप सातपूर एम.आय.डी.सी. लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "11:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "MICO Circle",
          "nameMr": "मायको सर्कल",
          "nameHi": "मायको सर्कल",
          "time": "11:49 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99354,
          "lng": 73.78251,
          "roadIndex": 5
        },
        {
          "name": "ITI Signal",
          "nameMr": "आय.टी.आय. सिग्नल",
          "nameHi": "आय.टी.आय. सिग्नल",
          "time": "11:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99424,
          "lng": 73.77188,
          "roadIndex": 8
        },
        {
          "name": "Satpur Police Station",
          "nameMr": "सातपूर पोलीस ठाणे",
          "nameHi": "सातपूर पोलीस ठाणे",
          "time": "11:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99178,
          "lng": 73.74217,
          "roadIndex": 10
        },
        {
          "name": "Carbon Naka",
          "nameMr": "कार्बन नाका",
          "nameHi": "कार्बन नाका",
          "time": "12:02 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98994,
          "lng": 73.7421,
          "roadIndex": 11
        },
        {
          "name": "Satpur Municipal Corporation",
          "nameMr": "सातपूर पालिका फाटा",
          "nameHi": "सातपूर पालिका फाटा",
          "time": "12:05 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur MIDC",
          "nameMr": "सातपूर एम.आय.डी.सी.",
          "nameHi": "सातपूर एम.आय.डी.सी.",
          "time": "12:08 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur Colony Phata",
          "nameMr": "सातपूर कॉलनी फाटा",
          "nameHi": "सातपूर कॉलनी फाटा",
          "time": "12:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98591,
          "lng": 73.72417,
          "roadIndex": 14
        },
        {
          "name": "Shramik Nagar Phata",
          "nameMr": "श्रमिक नगर फाटा",
          "nameHi": "श्रमिक नगर फाटा",
          "time": "12:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98382,
          "lng": 73.71926,
          "roadIndex": 15
        },
        {
          "name": "Belgaon Dhaga Phata",
          "nameMr": "बेलगाव ढगा फाटा",
          "nameHi": "बेलगाव ढगा फाटा",
          "time": "12:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97946,
          "lng": 73.70935,
          "roadIndex": 18
        },
        {
          "name": "Pimpalgaon Bahula",
          "nameMr": "पिंपळगाव बहुला",
          "nameHi": "पिंपळगाव बहुला",
          "time": "12:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97765,
          "lng": 73.69479,
          "roadIndex": 19
        },
        {
          "name": "Mahiravani Phata",
          "nameMr": "महिरावणी फाटा",
          "nameHi": "महिरावणी फाटा",
          "time": "12:33 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Mahiravani Stand",
          "nameMr": "महिरावणी स्थानक",
          "nameHi": "महिरावणी स्थानक",
          "time": "12:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Sandip Foundation",
          "nameMr": "संदीप फाउंडेशन",
          "nameHi": "संदीप फाउंडेशन",
          "time": "12:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96604,
          "lng": 73.66124,
          "roadIndex": 27
        },
        {
          "name": "Pegalwadi Phata",
          "nameMr": "पेगलवाडी फाटा",
          "nameHi": "पेगलवाडी फाटा",
          "time": "12:46 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95956,
          "lng": 73.62912,
          "roadIndex": 30
        },
        {
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "time": "12:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9473,
          "lng": 73.61115,
          "roadIndex": 35
        },
        {
          "name": "Anjaneri Ashram",
          "nameMr": "अंजनेरी आश्रम",
          "nameHi": "अंजनेरी आश्रम",
          "time": "12:55 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95456,
          "lng": 73.59086,
          "roadIndex": 48
        },
        {
          "name": "Bramhagiri Phata",
          "nameMr": "ब्रह्मगिरी फाटा",
          "nameHi": "ब्रह्मगिरी फाटा",
          "time": "1:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94515,
          "lng": 73.55328,
          "roadIndex": 54
        },
        {
          "name": "Trimbakeshwar Depot",
          "nameMr": "त्र्यंबकेश्वर बस आगार",
          "nameHi": "त्र्यंबकेश्वर बस आगार",
          "time": "1:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93188,
          "lng": 73.53116,
          "roadIndex": 62
        }
      ]
    },
    {
      "id": "BUS-102-5",
      "number": "MH 15 EG 3995",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-TRM",
      "routeName": "Nashik CBS to Trimbakeshwar Depot",
      "routeNameMr": "नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार",
      "destination": "Trimbakeshwar Depot",
      "destinationMr": "त्र्यंबकेश्वर आगार",
      "via": "Satpur MIDC, Mahiravani, Anjaneri",
      "driverName": "Deepak T. Sonawane (Emp #4933)",
      "conductorName": "Deepak Jadhav",
      "scheduledTime": "12:30 PM",
      "currentLat": 19.99564,
      "currentLng": 73.78207,
      "roadIndex": 6,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 1.2,
      "etaMinutes": 2,
      "previousStop": "MICO Circle",
      "nextStop": "ITI Signal",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 3995 from Nashik CBS to Trimbakeshwar Depot is en route. Approaching ITI Signal in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 3995 नाशिक सी.बी.एस. ते त्र्यंबकेश्वर आगार मार्गावर धावत आहे. पुढील स्थानक आय.टी.आय. सिग्नल सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 3995 मार्गस्थ है। अगला स्टॉप आय.टी.आय. सिग्नल लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Old CBS",
          "nameMr": "नाशिक जुने सी.बी.एस.",
          "nameHi": "नाशिक जुने सी.बी.एस.",
          "time": "12:30 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "MICO Circle",
          "nameMr": "मायको सर्कल",
          "nameHi": "मायको सर्कल",
          "time": "12:34 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99354,
          "lng": 73.78251,
          "roadIndex": 5
        },
        {
          "name": "ITI Signal",
          "nameMr": "आय.टी.आय. सिग्नल",
          "nameHi": "आय.टी.आय. सिग्नल",
          "time": "12:39 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.99424,
          "lng": 73.77188,
          "roadIndex": 8
        },
        {
          "name": "Satpur Police Station",
          "nameMr": "सातपूर पोलीस ठाणे",
          "nameHi": "सातपूर पोलीस ठाणे",
          "time": "12:44 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99178,
          "lng": 73.74217,
          "roadIndex": 10
        },
        {
          "name": "Carbon Naka",
          "nameMr": "कार्बन नाका",
          "nameHi": "कार्बन नाका",
          "time": "12:47 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98994,
          "lng": 73.7421,
          "roadIndex": 11
        },
        {
          "name": "Satpur Municipal Corporation",
          "nameMr": "सातपूर पालिका फाटा",
          "nameHi": "सातपूर पालिका फाटा",
          "time": "12:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur MIDC",
          "nameMr": "सातपूर एम.आय.डी.सी.",
          "nameHi": "सातपूर एम.आय.डी.सी.",
          "time": "12:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99169,
          "lng": 73.74159,
          "roadIndex": 12
        },
        {
          "name": "Satpur Colony Phata",
          "nameMr": "सातपूर कॉलनी फाटा",
          "nameHi": "सातपूर कॉलनी फाटा",
          "time": "12:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98591,
          "lng": 73.72417,
          "roadIndex": 14
        },
        {
          "name": "Shramik Nagar Phata",
          "nameMr": "श्रमिक नगर फाटा",
          "nameHi": "श्रमिक नगर फाटा",
          "time": "1:03 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98382,
          "lng": 73.71926,
          "roadIndex": 15
        },
        {
          "name": "Belgaon Dhaga Phata",
          "nameMr": "बेलगाव ढगा फाटा",
          "nameHi": "बेलगाव ढगा फाटा",
          "time": "1:09 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97946,
          "lng": 73.70935,
          "roadIndex": 18
        },
        {
          "name": "Pimpalgaon Bahula",
          "nameMr": "पिंपळगाव बहुला",
          "nameHi": "पिंपळगाव बहुला",
          "time": "1:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97765,
          "lng": 73.69479,
          "roadIndex": 19
        },
        {
          "name": "Mahiravani Phata",
          "nameMr": "महिरावणी फाटा",
          "nameHi": "महिरावणी फाटा",
          "time": "1:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Mahiravani Stand",
          "nameMr": "महिरावणी स्थानक",
          "nameHi": "महिरावणी स्थानक",
          "time": "1:21 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97361,
          "lng": 73.68566,
          "roadIndex": 21
        },
        {
          "name": "Sandip Foundation",
          "nameMr": "संदीप फाउंडेशन",
          "nameHi": "संदीप फाउंडेशन",
          "time": "1:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96604,
          "lng": 73.66124,
          "roadIndex": 27
        },
        {
          "name": "Pegalwadi Phata",
          "nameMr": "पेगलवाडी फाटा",
          "nameHi": "पेगलवाडी फाटा",
          "time": "1:31 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95956,
          "lng": 73.62912,
          "roadIndex": 30
        },
        {
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "time": "1:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9473,
          "lng": 73.61115,
          "roadIndex": 35
        },
        {
          "name": "Anjaneri Ashram",
          "nameMr": "अंजनेरी आश्रम",
          "nameHi": "अंजनेरी आश्रम",
          "time": "1:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95456,
          "lng": 73.59086,
          "roadIndex": 48
        },
        {
          "name": "Bramhagiri Phata",
          "nameMr": "ब्रह्मगिरी फाटा",
          "nameHi": "ब्रह्मगिरी फाटा",
          "time": "1:46 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94515,
          "lng": 73.55328,
          "roadIndex": 54
        },
        {
          "name": "Trimbakeshwar Depot",
          "nameMr": "त्र्यंबकेश्वर बस आगार",
          "nameHi": "त्र्यंबकेश्वर बस आगार",
          "time": "1:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93188,
          "lng": 73.53116,
          "roadIndex": 62
        }
      ]
    },
    {
      "id": "BUS-103-1",
      "number": "MH 15 TR 6109",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-SHR",
      "routeName": "Nashik CBS to Shirdi Sai Mandir",
      "routeNameMr": "नाशिक सी.बी.एस. ते शिर्डी साई मंदिर",
      "destination": "Shirdi Sai Mandir",
      "destinationMr": "शिर्डी साई मंदिर",
      "via": "Dwarka, Sinnar, Wavi, Kolhar",
      "driverName": "Anil S. Deshmukh (Emp #5871)",
      "conductorName": "Vilas Thorat",
      "scheduledTime": "08:15 AM",
      "currentLat": 19.76932,
      "currentLng": 74.4743,
      "roadIndex": 123,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "85% (Diesel)",
      "distanceFromStop": 0,
      "etaMinutes": 2,
      "previousStop": "Rahata Stand",
      "nextStop": "Sakuri Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 6109 from Nashik CBS to Shirdi Sai Mandir is en route. Approaching Sakuri Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 6109 नाशिक सी.बी.एस. ते शिर्डी साई मंदिर मार्गावर धावत आहे. पुढील स्थानक साकुरी फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 6109 मार्गस्थ है। अगला स्टॉप साकुरी फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "8:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "8:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99659,
          "lng": 73.79062,
          "roadIndex": 2
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "8:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98815,
          "lng": 73.80483,
          "roadIndex": 13
        },
        {
          "name": "Upnagar Phata",
          "nameMr": "उपनगर फाटा",
          "nameHi": "उपनगर फाटा",
          "time": "8:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97395,
          "lng": 73.8128,
          "roadIndex": 20
        },
        {
          "name": "Datta Mandir Stop",
          "nameMr": "दत्त मंदिर थांबा",
          "nameHi": "दत्त मंदिर थांबा",
          "time": "8:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96644,
          "lng": 73.82153,
          "roadIndex": 21
        },
        {
          "name": "Sinnar Phata (Nashik Rd)",
          "nameMr": "सिन्नर फाटा नाशिक रोड",
          "nameHi": "सिन्नर फाटा नाशिक रोड",
          "time": "8:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 22
        },
        {
          "name": "Chehadi Naka / Darna Bridge",
          "nameMr": "चेहेडी नाका / दारणा पूल",
          "nameHi": "चेहेडी नाका / दारणा पूल",
          "time": "8:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93841,
          "lng": 73.85581,
          "roadIndex": 25
        },
        {
          "name": "Shinde Village Phata",
          "nameMr": "शिंदे गाव फाटा",
          "nameHi": "शिंदे गाव फाटा",
          "time": "8:52 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 29
        },
        {
          "name": "Palsi Phata",
          "nameMr": "पळसे फाटा",
          "nameHi": "पळसे फाटा",
          "time": "8:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.91498,
          "lng": 73.89862,
          "roadIndex": 31
        },
        {
          "name": "Naigaon Phata",
          "nameMr": "नायगाव फाटा",
          "nameHi": "नायगाव फाटा",
          "time": "9:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87156,
          "lng": 73.95373,
          "roadIndex": 38
        },
        {
          "name": "Mohadari Ghat",
          "nameMr": "मोहादरी घाट",
          "nameHi": "मोहादरी घाट",
          "time": "9:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86324,
          "lng": 73.96902,
          "roadIndex": 40
        },
        {
          "name": "Musalgaon MIDC Phata",
          "nameMr": "मुसळगाव एम.आय.डी.सी.",
          "nameHi": "मुसळगाव एम.आय.डी.सी.",
          "time": "9:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8622,
          "lng": 73.97338,
          "roadIndex": 41
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "9:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84481,
          "lng": 74.00229,
          "roadIndex": 47
        },
        {
          "name": "Sinnar Bypass Circle",
          "nameMr": "सिन्नर बायपास",
          "nameHi": "सिन्नर बायपास",
          "time": "9:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84487,
          "lng": 74.02118,
          "roadIndex": 49
        },
        {
          "name": "Gonde Phata (Sinnar)",
          "nameMr": "गोंदे फाटा",
          "nameHi": "गोंदे फाटा",
          "time": "9:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83941,
          "lng": 74.08014,
          "roadIndex": 54
        },
        {
          "name": "Pangri Phata",
          "nameMr": "पांगरी फाटा",
          "nameHi": "पांगरी फाटा",
          "time": "9:37 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83003,
          "lng": 74.14626,
          "roadIndex": 62
        },
        {
          "name": "Wavi Phata",
          "nameMr": "वावी फाटा",
          "nameHi": "वावी फाटा",
          "time": "9:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82075,
          "lng": 74.18997,
          "roadIndex": 69
        },
        {
          "name": "Wavi Bus Stand",
          "nameMr": "वावी बस स्थानक",
          "nameHi": "वावी बस स्थानक",
          "time": "9:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80736,
          "lng": 74.20631,
          "roadIndex": 77
        },
        {
          "name": "Pathare Phata",
          "nameMr": "पाथरे फाटा",
          "nameHi": "पाथरे फाटा",
          "time": "9:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80624,
          "lng": 74.26668,
          "roadIndex": 90
        },
        {
          "name": "Nandur Shingote Stand",
          "nameMr": "नांदूर शिंगोटे स्थानक",
          "nameHi": "नांदूर शिंगोटे स्थानक",
          "time": "10:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82026,
          "lng": 74.31335,
          "roadIndex": 92
        },
        {
          "name": "Dhandarphal Phata",
          "nameMr": "धांदरफळ फाटा",
          "nameHi": "धांदरफळ फाटा",
          "time": "10:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.81726,
          "lng": 74.36273,
          "roadIndex": 97
        },
        {
          "name": "Kolhar Bus Stand",
          "nameMr": "कोल्हार बस स्थानक",
          "nameHi": "कोल्हार बस स्थानक",
          "time": "10:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.79136,
          "lng": 74.40476,
          "roadIndex": 106
        },
        {
          "name": "Loni Pravara Phata",
          "nameMr": "लोणी प्रवरा फाटा",
          "nameHi": "लोणी प्रवरा फाटा",
          "time": "10:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78522,
          "lng": 74.40705,
          "roadIndex": 107
        },
        {
          "name": "Babhaleshwar Stand",
          "nameMr": "बाभळेश्वर स्थानक",
          "nameHi": "बाभळेश्वर स्थानक",
          "time": "10:23 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76039,
          "lng": 74.42819,
          "roadIndex": 110
        },
        {
          "name": "Rahata Stand",
          "nameMr": "राहाता बस स्थानक",
          "nameHi": "राहाता बस स्थानक",
          "time": "10:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Sakuri Phata",
          "nameMr": "साकुरी फाटा",
          "nameHi": "साकुरी फाटा",
          "time": "10:32 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Nagar",
          "nameMr": "शिर्डी साई नगर",
          "nameHi": "शिर्डी साई नगर",
          "time": "10:36 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Mandir Depot",
          "nameMr": "शिर्डी साई मंदिर आगार",
          "nameHi": "शिर्डी साई मंदिर आगार",
          "time": "10:40 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76701,
          "lng": 74.47641,
          "roadIndex": 125
        }
      ]
    },
    {
      "id": "BUS-103-2",
      "number": "MH 15 AK 4102",
      "type": "Hirkani (Semi Luxury)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-SHR",
      "routeName": "Nashik CBS to Shirdi Sai Mandir",
      "routeNameMr": "नाशिक सी.बी.एस. ते शिर्डी साई मंदिर",
      "destination": "Shirdi Sai Mandir",
      "destinationMr": "शिर्डी साई मंदिर",
      "via": "Dwarka, Sinnar, Wavi, Kolhar",
      "driverName": "Bhagwan K. Kadam (Emp #4920)",
      "conductorName": "Vilas Thorat",
      "scheduledTime": "09:15 AM",
      "currentLat": 19.82748,
      "currentLng": 74.33129,
      "roadIndex": 94,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "78% (Diesel)",
      "distanceFromStop": 3.5,
      "etaMinutes": 4,
      "previousStop": "Nandur Shingote Stand",
      "nextStop": "Dhandarphal Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 4102 from Nashik CBS to Shirdi Sai Mandir is en route. Approaching Dhandarphal Phata in approximately 4 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 4102 नाशिक सी.बी.एस. ते शिर्डी साई मंदिर मार्गावर धावत आहे. पुढील स्थानक धांदरफळ फाटा सुमारे 4 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 4102 मार्गस्थ है। अगला स्टॉप धांदरफळ फाटा लगभग 4 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "9:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "9:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99659,
          "lng": 73.79062,
          "roadIndex": 2
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "9:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98815,
          "lng": 73.80483,
          "roadIndex": 13
        },
        {
          "name": "Upnagar Phata",
          "nameMr": "उपनगर फाटा",
          "nameHi": "उपनगर फाटा",
          "time": "9:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97395,
          "lng": 73.8128,
          "roadIndex": 20
        },
        {
          "name": "Datta Mandir Stop",
          "nameMr": "दत्त मंदिर थांबा",
          "nameHi": "दत्त मंदिर थांबा",
          "time": "9:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96644,
          "lng": 73.82153,
          "roadIndex": 21
        },
        {
          "name": "Sinnar Phata (Nashik Rd)",
          "nameMr": "सिन्नर फाटा नाशिक रोड",
          "nameHi": "सिन्नर फाटा नाशिक रोड",
          "time": "9:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 22
        },
        {
          "name": "Chehadi Naka / Darna Bridge",
          "nameMr": "चेहेडी नाका / दारणा पूल",
          "nameHi": "चेहेडी नाका / दारणा पूल",
          "time": "9:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93841,
          "lng": 73.85581,
          "roadIndex": 25
        },
        {
          "name": "Shinde Village Phata",
          "nameMr": "शिंदे गाव फाटा",
          "nameHi": "शिंदे गाव फाटा",
          "time": "9:52 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 29
        },
        {
          "name": "Palsi Phata",
          "nameMr": "पळसे फाटा",
          "nameHi": "पळसे फाटा",
          "time": "9:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.91498,
          "lng": 73.89862,
          "roadIndex": 31
        },
        {
          "name": "Naigaon Phata",
          "nameMr": "नायगाव फाटा",
          "nameHi": "नायगाव फाटा",
          "time": "10:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87156,
          "lng": 73.95373,
          "roadIndex": 38
        },
        {
          "name": "Mohadari Ghat",
          "nameMr": "मोहादरी घाट",
          "nameHi": "मोहादरी घाट",
          "time": "10:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86324,
          "lng": 73.96902,
          "roadIndex": 40
        },
        {
          "name": "Musalgaon MIDC Phata",
          "nameMr": "मुसळगाव एम.आय.डी.सी.",
          "nameHi": "मुसळगाव एम.आय.डी.सी.",
          "time": "10:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8622,
          "lng": 73.97338,
          "roadIndex": 41
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "10:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84481,
          "lng": 74.00229,
          "roadIndex": 47
        },
        {
          "name": "Sinnar Bypass Circle",
          "nameMr": "सिन्नर बायपास",
          "nameHi": "सिन्नर बायपास",
          "time": "10:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84487,
          "lng": 74.02118,
          "roadIndex": 49
        },
        {
          "name": "Gonde Phata (Sinnar)",
          "nameMr": "गोंदे फाटा",
          "nameHi": "गोंदे फाटा",
          "time": "10:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83941,
          "lng": 74.08014,
          "roadIndex": 54
        },
        {
          "name": "Pangri Phata",
          "nameMr": "पांगरी फाटा",
          "nameHi": "पांगरी फाटा",
          "time": "10:37 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83003,
          "lng": 74.14626,
          "roadIndex": 62
        },
        {
          "name": "Wavi Phata",
          "nameMr": "वावी फाटा",
          "nameHi": "वावी फाटा",
          "time": "10:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82075,
          "lng": 74.18997,
          "roadIndex": 69
        },
        {
          "name": "Wavi Bus Stand",
          "nameMr": "वावी बस स्थानक",
          "nameHi": "वावी बस स्थानक",
          "time": "10:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80736,
          "lng": 74.20631,
          "roadIndex": 77
        },
        {
          "name": "Pathare Phata",
          "nameMr": "पाथरे फाटा",
          "nameHi": "पाथरे फाटा",
          "time": "10:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80624,
          "lng": 74.26668,
          "roadIndex": 90
        },
        {
          "name": "Nandur Shingote Stand",
          "nameMr": "नांदूर शिंगोटे स्थानक",
          "nameHi": "नांदूर शिंगोटे स्थानक",
          "time": "11:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82026,
          "lng": 74.31335,
          "roadIndex": 92
        },
        {
          "name": "Dhandarphal Phata",
          "nameMr": "धांदरफळ फाटा",
          "nameHi": "धांदरफळ फाटा",
          "time": "11:07 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.81726,
          "lng": 74.36273,
          "roadIndex": 97
        },
        {
          "name": "Kolhar Bus Stand",
          "nameMr": "कोल्हार बस स्थानक",
          "nameHi": "कोल्हार बस स्थानक",
          "time": "11:13 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.79136,
          "lng": 74.40476,
          "roadIndex": 106
        },
        {
          "name": "Loni Pravara Phata",
          "nameMr": "लोणी प्रवरा फाटा",
          "nameHi": "लोणी प्रवरा फाटा",
          "time": "11:18 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78522,
          "lng": 74.40705,
          "roadIndex": 107
        },
        {
          "name": "Babhaleshwar Stand",
          "nameMr": "बाभळेश्वर स्थानक",
          "nameHi": "बाभळेश्वर स्थानक",
          "time": "11:23 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76039,
          "lng": 74.42819,
          "roadIndex": 110
        },
        {
          "name": "Rahata Stand",
          "nameMr": "राहाता बस स्थानक",
          "nameHi": "राहाता बस स्थानक",
          "time": "11:29 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Sakuri Phata",
          "nameMr": "साकुरी फाटा",
          "nameHi": "साकुरी फाटा",
          "time": "11:32 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Nagar",
          "nameMr": "शिर्डी साई नगर",
          "nameHi": "शिर्डी साई नगर",
          "time": "11:36 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Mandir Depot",
          "nameMr": "शिर्डी साई मंदिर आगार",
          "nameHi": "शिर्डी साई मंदिर आगार",
          "time": "11:40 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76701,
          "lng": 74.47641,
          "roadIndex": 125
        }
      ]
    },
    {
      "id": "BUS-103",
      "number": "MH 15 EG 4200",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-SHR",
      "routeName": "Nashik CBS to Shirdi Sai Mandir",
      "routeNameMr": "नाशिक सी.बी.एस. ते शिर्डी साई मंदिर",
      "destination": "Shirdi Sai Mandir",
      "destinationMr": "शिर्डी साई मंदिर",
      "via": "Dwarka, Sinnar, Wavi, Kolhar",
      "driverName": "Vilas D. Borse (Emp #4519)",
      "conductorName": "Vilas Thorat",
      "scheduledTime": "10:15 AM",
      "currentLat": 19.83992,
      "currentLng": 74.10201,
      "roadIndex": 58,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 4.8,
      "etaMinutes": 6,
      "previousStop": "Gonde Phata (Sinnar)",
      "nextStop": "Pangri Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4200 from Nashik CBS to Shirdi Sai Mandir is en route. Approaching Pangri Phata in approximately 6 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4200 नाशिक सी.बी.एस. ते शिर्डी साई मंदिर मार्गावर धावत आहे. पुढील स्थानक पांगरी फाटा सुमारे 6 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4200 मार्गस्थ है। अगला स्टॉप पांगरी फाटा लगभग 6 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "10:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "10:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99659,
          "lng": 73.79062,
          "roadIndex": 2
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "10:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98815,
          "lng": 73.80483,
          "roadIndex": 13
        },
        {
          "name": "Upnagar Phata",
          "nameMr": "उपनगर फाटा",
          "nameHi": "उपनगर फाटा",
          "time": "10:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97395,
          "lng": 73.8128,
          "roadIndex": 20
        },
        {
          "name": "Datta Mandir Stop",
          "nameMr": "दत्त मंदिर थांबा",
          "nameHi": "दत्त मंदिर थांबा",
          "time": "10:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96644,
          "lng": 73.82153,
          "roadIndex": 21
        },
        {
          "name": "Sinnar Phata (Nashik Rd)",
          "nameMr": "सिन्नर फाटा नाशिक रोड",
          "nameHi": "सिन्नर फाटा नाशिक रोड",
          "time": "10:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 22
        },
        {
          "name": "Chehadi Naka / Darna Bridge",
          "nameMr": "चेहेडी नाका / दारणा पूल",
          "nameHi": "चेहेडी नाका / दारणा पूल",
          "time": "10:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93841,
          "lng": 73.85581,
          "roadIndex": 25
        },
        {
          "name": "Shinde Village Phata",
          "nameMr": "शिंदे गाव फाटा",
          "nameHi": "शिंदे गाव फाटा",
          "time": "10:52 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 29
        },
        {
          "name": "Palsi Phata",
          "nameMr": "पळसे फाटा",
          "nameHi": "पळसे फाटा",
          "time": "10:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.91498,
          "lng": 73.89862,
          "roadIndex": 31
        },
        {
          "name": "Naigaon Phata",
          "nameMr": "नायगाव फाटा",
          "nameHi": "नायगाव फाटा",
          "time": "11:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87156,
          "lng": 73.95373,
          "roadIndex": 38
        },
        {
          "name": "Mohadari Ghat",
          "nameMr": "मोहादरी घाट",
          "nameHi": "मोहादरी घाट",
          "time": "11:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86324,
          "lng": 73.96902,
          "roadIndex": 40
        },
        {
          "name": "Musalgaon MIDC Phata",
          "nameMr": "मुसळगाव एम.आय.डी.सी.",
          "nameHi": "मुसळगाव एम.आय.डी.सी.",
          "time": "11:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8622,
          "lng": 73.97338,
          "roadIndex": 41
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "11:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84481,
          "lng": 74.00229,
          "roadIndex": 47
        },
        {
          "name": "Sinnar Bypass Circle",
          "nameMr": "सिन्नर बायपास",
          "nameHi": "सिन्नर बायपास",
          "time": "11:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84487,
          "lng": 74.02118,
          "roadIndex": 49
        },
        {
          "name": "Gonde Phata (Sinnar)",
          "nameMr": "गोंदे फाटा",
          "nameHi": "गोंदे फाटा",
          "time": "11:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83941,
          "lng": 74.08014,
          "roadIndex": 54
        },
        {
          "name": "Pangri Phata",
          "nameMr": "पांगरी फाटा",
          "nameHi": "पांगरी फाटा",
          "time": "11:37 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.83003,
          "lng": 74.14626,
          "roadIndex": 62
        },
        {
          "name": "Wavi Phata",
          "nameMr": "वावी फाटा",
          "nameHi": "वावी फाटा",
          "time": "11:43 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82075,
          "lng": 74.18997,
          "roadIndex": 69
        },
        {
          "name": "Wavi Bus Stand",
          "nameMr": "वावी बस स्थानक",
          "nameHi": "वावी बस स्थानक",
          "time": "11:47 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80736,
          "lng": 74.20631,
          "roadIndex": 77
        },
        {
          "name": "Pathare Phata",
          "nameMr": "पाथरे फाटा",
          "nameHi": "पाथरे फाटा",
          "time": "11:54 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80624,
          "lng": 74.26668,
          "roadIndex": 90
        },
        {
          "name": "Nandur Shingote Stand",
          "nameMr": "नांदूर शिंगोटे स्थानक",
          "nameHi": "नांदूर शिंगोटे स्थानक",
          "time": "12:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82026,
          "lng": 74.31335,
          "roadIndex": 92
        },
        {
          "name": "Dhandarphal Phata",
          "nameMr": "धांदरफळ फाटा",
          "nameHi": "धांदरफळ फाटा",
          "time": "12:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.81726,
          "lng": 74.36273,
          "roadIndex": 97
        },
        {
          "name": "Kolhar Bus Stand",
          "nameMr": "कोल्हार बस स्थानक",
          "nameHi": "कोल्हार बस स्थानक",
          "time": "12:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.79136,
          "lng": 74.40476,
          "roadIndex": 106
        },
        {
          "name": "Loni Pravara Phata",
          "nameMr": "लोणी प्रवरा फाटा",
          "nameHi": "लोणी प्रवरा फाटा",
          "time": "12:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78522,
          "lng": 74.40705,
          "roadIndex": 107
        },
        {
          "name": "Babhaleshwar Stand",
          "nameMr": "बाभळेश्वर स्थानक",
          "nameHi": "बाभळेश्वर स्थानक",
          "time": "12:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76039,
          "lng": 74.42819,
          "roadIndex": 110
        },
        {
          "name": "Rahata Stand",
          "nameMr": "राहाता बस स्थानक",
          "nameHi": "राहाता बस स्थानक",
          "time": "12:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Sakuri Phata",
          "nameMr": "साकुरी फाटा",
          "nameHi": "साकुरी फाटा",
          "time": "12:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Nagar",
          "nameMr": "शिर्डी साई नगर",
          "nameHi": "शिर्डी साई नगर",
          "time": "12:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Mandir Depot",
          "nameMr": "शिर्डी साई मंदिर आगार",
          "nameHi": "शिर्डी साई मंदिर आगार",
          "time": "12:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76701,
          "lng": 74.47641,
          "roadIndex": 125
        }
      ]
    },
    {
      "id": "BUS-103-4",
      "number": "MH 15 TR 6120",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-SHR",
      "routeName": "Nashik CBS to Shirdi Sai Mandir",
      "routeNameMr": "नाशिक सी.बी.एस. ते शिर्डी साई मंदिर",
      "destination": "Shirdi Sai Mandir",
      "destinationMr": "शिर्डी साई मंदिर",
      "via": "Dwarka, Sinnar, Wavi, Kolhar",
      "driverName": "Mahesh P. Chavan (Emp #5934)",
      "conductorName": "Vilas Thorat",
      "scheduledTime": "11:15 AM",
      "currentLat": 19.87024,
      "currentLng": 73.95448,
      "roadIndex": 39,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "64% (Diesel)",
      "distanceFromStop": 1.7,
      "etaMinutes": 2,
      "previousStop": "Naigaon Phata",
      "nextStop": "Mohadari Ghat",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 6120 from Nashik CBS to Shirdi Sai Mandir is en route. Approaching Mohadari Ghat in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 6120 नाशिक सी.बी.एस. ते शिर्डी साई मंदिर मार्गावर धावत आहे. पुढील स्थानक मोहादरी घाट सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 6120 मार्गस्थ है। अगला स्टॉप मोहादरी घाट लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "11:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "11:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99659,
          "lng": 73.79062,
          "roadIndex": 2
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "11:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98815,
          "lng": 73.80483,
          "roadIndex": 13
        },
        {
          "name": "Upnagar Phata",
          "nameMr": "उपनगर फाटा",
          "nameHi": "उपनगर फाटा",
          "time": "11:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97395,
          "lng": 73.8128,
          "roadIndex": 20
        },
        {
          "name": "Datta Mandir Stop",
          "nameMr": "दत्त मंदिर थांबा",
          "nameHi": "दत्त मंदिर थांबा",
          "time": "11:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96644,
          "lng": 73.82153,
          "roadIndex": 21
        },
        {
          "name": "Sinnar Phata (Nashik Rd)",
          "nameMr": "सिन्नर फाटा नाशिक रोड",
          "nameHi": "सिन्नर फाटा नाशिक रोड",
          "time": "11:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 22
        },
        {
          "name": "Chehadi Naka / Darna Bridge",
          "nameMr": "चेहेडी नाका / दारणा पूल",
          "nameHi": "चेहेडी नाका / दारणा पूल",
          "time": "11:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93841,
          "lng": 73.85581,
          "roadIndex": 25
        },
        {
          "name": "Shinde Village Phata",
          "nameMr": "शिंदे गाव फाटा",
          "nameHi": "शिंदे गाव फाटा",
          "time": "11:52 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 29
        },
        {
          "name": "Palsi Phata",
          "nameMr": "पळसे फाटा",
          "nameHi": "पळसे फाटा",
          "time": "11:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.91498,
          "lng": 73.89862,
          "roadIndex": 31
        },
        {
          "name": "Naigaon Phata",
          "nameMr": "नायगाव फाटा",
          "nameHi": "नायगाव फाटा",
          "time": "12:05 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87156,
          "lng": 73.95373,
          "roadIndex": 38
        },
        {
          "name": "Mohadari Ghat",
          "nameMr": "मोहादरी घाट",
          "nameHi": "मोहादरी घाट",
          "time": "12:09 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.86324,
          "lng": 73.96902,
          "roadIndex": 40
        },
        {
          "name": "Musalgaon MIDC Phata",
          "nameMr": "मुसळगाव एम.आय.डी.सी.",
          "nameHi": "मुसळगाव एम.आय.डी.सी.",
          "time": "12:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8622,
          "lng": 73.97338,
          "roadIndex": 41
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "12:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84481,
          "lng": 74.00229,
          "roadIndex": 47
        },
        {
          "name": "Sinnar Bypass Circle",
          "nameMr": "सिन्नर बायपास",
          "nameHi": "सिन्नर बायपास",
          "time": "12:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84487,
          "lng": 74.02118,
          "roadIndex": 49
        },
        {
          "name": "Gonde Phata (Sinnar)",
          "nameMr": "गोंदे फाटा",
          "nameHi": "गोंदे फाटा",
          "time": "12:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83941,
          "lng": 74.08014,
          "roadIndex": 54
        },
        {
          "name": "Pangri Phata",
          "nameMr": "पांगरी फाटा",
          "nameHi": "पांगरी फाटा",
          "time": "12:37 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83003,
          "lng": 74.14626,
          "roadIndex": 62
        },
        {
          "name": "Wavi Phata",
          "nameMr": "वावी फाटा",
          "nameHi": "वावी फाटा",
          "time": "12:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82075,
          "lng": 74.18997,
          "roadIndex": 69
        },
        {
          "name": "Wavi Bus Stand",
          "nameMr": "वावी बस स्थानक",
          "nameHi": "वावी बस स्थानक",
          "time": "12:47 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80736,
          "lng": 74.20631,
          "roadIndex": 77
        },
        {
          "name": "Pathare Phata",
          "nameMr": "पाथरे फाटा",
          "nameHi": "पाथरे फाटा",
          "time": "12:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80624,
          "lng": 74.26668,
          "roadIndex": 90
        },
        {
          "name": "Nandur Shingote Stand",
          "nameMr": "नांदूर शिंगोटे स्थानक",
          "nameHi": "नांदूर शिंगोटे स्थानक",
          "time": "1:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82026,
          "lng": 74.31335,
          "roadIndex": 92
        },
        {
          "name": "Dhandarphal Phata",
          "nameMr": "धांदरफळ फाटा",
          "nameHi": "धांदरफळ फाटा",
          "time": "1:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.81726,
          "lng": 74.36273,
          "roadIndex": 97
        },
        {
          "name": "Kolhar Bus Stand",
          "nameMr": "कोल्हार बस स्थानक",
          "nameHi": "कोल्हार बस स्थानक",
          "time": "1:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.79136,
          "lng": 74.40476,
          "roadIndex": 106
        },
        {
          "name": "Loni Pravara Phata",
          "nameMr": "लोणी प्रवरा फाटा",
          "nameHi": "लोणी प्रवरा फाटा",
          "time": "1:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78522,
          "lng": 74.40705,
          "roadIndex": 107
        },
        {
          "name": "Babhaleshwar Stand",
          "nameMr": "बाभळेश्वर स्थानक",
          "nameHi": "बाभळेश्वर स्थानक",
          "time": "1:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76039,
          "lng": 74.42819,
          "roadIndex": 110
        },
        {
          "name": "Rahata Stand",
          "nameMr": "राहाता बस स्थानक",
          "nameHi": "राहाता बस स्थानक",
          "time": "1:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Sakuri Phata",
          "nameMr": "साकुरी फाटा",
          "nameHi": "साकुरी फाटा",
          "time": "1:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Nagar",
          "nameMr": "शिर्डी साई नगर",
          "nameHi": "शिर्डी साई नगर",
          "time": "1:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Mandir Depot",
          "nameMr": "शिर्डी साई मंदिर आगार",
          "nameHi": "शिर्डी साई मंदिर आगार",
          "time": "1:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76701,
          "lng": 74.47641,
          "roadIndex": 125
        }
      ]
    },
    {
      "id": "BUS-103-5",
      "number": "MH 15 EF 2011",
      "type": "Parivartan (Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#C2185B",
      "routeId": "R-NSK-SHR",
      "routeName": "Nashik CBS to Shirdi Sai Mandir",
      "routeNameMr": "नाशिक सी.बी.एस. ते शिर्डी साई मंदिर",
      "destination": "Shirdi Sai Mandir",
      "destinationMr": "शिर्डी साई मंदिर",
      "via": "Dwarka, Sinnar, Wavi, Kolhar",
      "driverName": "Ravindra S. Joshi (Emp #5108)",
      "conductorName": "Vilas Thorat",
      "scheduledTime": "12:15 PM",
      "currentLat": 19.96644,
      "currentLng": 73.82153,
      "roadIndex": 21,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 2.4,
      "etaMinutes": 3,
      "previousStop": "Datta Mandir Stop",
      "nextStop": "Sinnar Phata (Nashik Rd)",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EF 2011 from Nashik CBS to Shirdi Sai Mandir is en route. Approaching Sinnar Phata (Nashik Rd) in approximately 3 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EF 2011 नाशिक सी.बी.एस. ते शिर्डी साई मंदिर मार्गावर धावत आहे. पुढील स्थानक सिन्नर फाटा नाशिक रोड सुमारे 3 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EF 2011 मार्गस्थ है। अगला स्टॉप सिन्नर फाटा नाशिक रोड लगभग 3 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "12:15 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "12:19 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99659,
          "lng": 73.79062,
          "roadIndex": 2
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "12:25 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98815,
          "lng": 73.80483,
          "roadIndex": 13
        },
        {
          "name": "Upnagar Phata",
          "nameMr": "उपनगर फाटा",
          "nameHi": "उपनगर फाटा",
          "time": "12:30 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97395,
          "lng": 73.8128,
          "roadIndex": 20
        },
        {
          "name": "Datta Mandir Stop",
          "nameMr": "दत्त मंदिर थांबा",
          "nameHi": "दत्त मंदिर थांबा",
          "time": "12:36 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96644,
          "lng": 73.82153,
          "roadIndex": 21
        },
        {
          "name": "Sinnar Phata (Nashik Rd)",
          "nameMr": "सिन्नर फाटा नाशिक रोड",
          "nameHi": "सिन्नर फाटा नाशिक रोड",
          "time": "12:41 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 22
        },
        {
          "name": "Chehadi Naka / Darna Bridge",
          "nameMr": "चेहेडी नाका / दारणा पूल",
          "nameHi": "चेहेडी नाका / दारणा पूल",
          "time": "12:46 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93841,
          "lng": 73.85581,
          "roadIndex": 25
        },
        {
          "name": "Shinde Village Phata",
          "nameMr": "शिंदे गाव फाटा",
          "nameHi": "शिंदे गाव फाटा",
          "time": "12:52 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 29
        },
        {
          "name": "Palsi Phata",
          "nameMr": "पळसे फाटा",
          "nameHi": "पळसे फाटा",
          "time": "12:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.91498,
          "lng": 73.89862,
          "roadIndex": 31
        },
        {
          "name": "Naigaon Phata",
          "nameMr": "नायगाव फाटा",
          "nameHi": "नायगाव फाटा",
          "time": "1:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87156,
          "lng": 73.95373,
          "roadIndex": 38
        },
        {
          "name": "Mohadari Ghat",
          "nameMr": "मोहादरी घाट",
          "nameHi": "मोहादरी घाट",
          "time": "1:09 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86324,
          "lng": 73.96902,
          "roadIndex": 40
        },
        {
          "name": "Musalgaon MIDC Phata",
          "nameMr": "मुसळगाव एम.आय.डी.सी.",
          "nameHi": "मुसळगाव एम.आय.डी.सी.",
          "time": "1:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8622,
          "lng": 73.97338,
          "roadIndex": 41
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "1:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84481,
          "lng": 74.00229,
          "roadIndex": 47
        },
        {
          "name": "Sinnar Bypass Circle",
          "nameMr": "सिन्नर बायपास",
          "nameHi": "सिन्नर बायपास",
          "time": "1:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84487,
          "lng": 74.02118,
          "roadIndex": 49
        },
        {
          "name": "Gonde Phata (Sinnar)",
          "nameMr": "गोंदे फाटा",
          "nameHi": "गोंदे फाटा",
          "time": "1:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83941,
          "lng": 74.08014,
          "roadIndex": 54
        },
        {
          "name": "Pangri Phata",
          "nameMr": "पांगरी फाटा",
          "nameHi": "पांगरी फाटा",
          "time": "1:37 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83003,
          "lng": 74.14626,
          "roadIndex": 62
        },
        {
          "name": "Wavi Phata",
          "nameMr": "वावी फाटा",
          "nameHi": "वावी फाटा",
          "time": "1:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82075,
          "lng": 74.18997,
          "roadIndex": 69
        },
        {
          "name": "Wavi Bus Stand",
          "nameMr": "वावी बस स्थानक",
          "nameHi": "वावी बस स्थानक",
          "time": "1:47 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80736,
          "lng": 74.20631,
          "roadIndex": 77
        },
        {
          "name": "Pathare Phata",
          "nameMr": "पाथरे फाटा",
          "nameHi": "पाथरे फाटा",
          "time": "1:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80624,
          "lng": 74.26668,
          "roadIndex": 90
        },
        {
          "name": "Nandur Shingote Stand",
          "nameMr": "नांदूर शिंगोटे स्थानक",
          "nameHi": "नांदूर शिंगोटे स्थानक",
          "time": "2:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82026,
          "lng": 74.31335,
          "roadIndex": 92
        },
        {
          "name": "Dhandarphal Phata",
          "nameMr": "धांदरफळ फाटा",
          "nameHi": "धांदरफळ फाटा",
          "time": "2:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.81726,
          "lng": 74.36273,
          "roadIndex": 97
        },
        {
          "name": "Kolhar Bus Stand",
          "nameMr": "कोल्हार बस स्थानक",
          "nameHi": "कोल्हार बस स्थानक",
          "time": "2:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.79136,
          "lng": 74.40476,
          "roadIndex": 106
        },
        {
          "name": "Loni Pravara Phata",
          "nameMr": "लोणी प्रवरा फाटा",
          "nameHi": "लोणी प्रवरा फाटा",
          "time": "2:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78522,
          "lng": 74.40705,
          "roadIndex": 107
        },
        {
          "name": "Babhaleshwar Stand",
          "nameMr": "बाभळेश्वर स्थानक",
          "nameHi": "बाभळेश्वर स्थानक",
          "time": "2:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76039,
          "lng": 74.42819,
          "roadIndex": 110
        },
        {
          "name": "Rahata Stand",
          "nameMr": "राहाता बस स्थानक",
          "nameHi": "राहाता बस स्थानक",
          "time": "2:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Sakuri Phata",
          "nameMr": "साकुरी फाटा",
          "nameHi": "साकुरी फाटा",
          "time": "2:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Nagar",
          "nameMr": "शिर्डी साई नगर",
          "nameHi": "शिर्डी साई नगर",
          "time": "2:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Mandir Depot",
          "nameMr": "शिर्डी साई मंदिर आगार",
          "nameHi": "शिर्डी साई मंदिर आगार",
          "time": "2:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76701,
          "lng": 74.47641,
          "roadIndex": 125
        }
      ]
    },
    {
      "id": "BUS-103-6",
      "number": "MH 15 EG 4330",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-SHR",
      "routeName": "Nashik CBS to Shirdi Sai Mandir",
      "routeNameMr": "नाशिक सी.बी.एस. ते शिर्डी साई मंदिर",
      "destination": "Shirdi Sai Mandir",
      "destinationMr": "शिर्डी साई मंदिर",
      "via": "Dwarka, Sinnar, Wavi, Kolhar",
      "driverName": "Pandurang M. Kale (Emp #4782)",
      "conductorName": "Vilas Thorat",
      "scheduledTime": "01:15 PM",
      "currentLat": 19.99079,
      "currentLng": 73.79924,
      "roadIndex": 7,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "80% (38/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "50% (Diesel)",
      "distanceFromStop": 1,
      "etaMinutes": 2,
      "previousStop": "Shalimar Chowk",
      "nextStop": "Dwarka Circle",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4330 from Nashik CBS to Shirdi Sai Mandir is en route. Approaching Dwarka Circle in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4330 नाशिक सी.बी.एस. ते शिर्डी साई मंदिर मार्गावर धावत आहे. पुढील स्थानक द्वारका सर्कल सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4330 मार्गस्थ है। अगला स्टॉप द्वारका सर्कल लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "1:15 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar Chowk",
          "nameMr": "शालिमार चौक",
          "nameHi": "शालिमार चौक",
          "time": "1:19 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99659,
          "lng": 73.79062,
          "roadIndex": 2
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "1:25 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.98815,
          "lng": 73.80483,
          "roadIndex": 13
        },
        {
          "name": "Upnagar Phata",
          "nameMr": "उपनगर फाटा",
          "nameHi": "उपनगर फाटा",
          "time": "1:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.97395,
          "lng": 73.8128,
          "roadIndex": 20
        },
        {
          "name": "Datta Mandir Stop",
          "nameMr": "दत्त मंदिर थांबा",
          "nameHi": "दत्त मंदिर थांबा",
          "time": "1:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96644,
          "lng": 73.82153,
          "roadIndex": 21
        },
        {
          "name": "Sinnar Phata (Nashik Rd)",
          "nameMr": "सिन्नर फाटा नाशिक रोड",
          "nameHi": "सिन्नर फाटा नाशिक रोड",
          "time": "1:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 22
        },
        {
          "name": "Chehadi Naka / Darna Bridge",
          "nameMr": "चेहेडी नाका / दारणा पूल",
          "nameHi": "चेहेडी नाका / दारणा पूल",
          "time": "1:46 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.93841,
          "lng": 73.85581,
          "roadIndex": 25
        },
        {
          "name": "Shinde Village Phata",
          "nameMr": "शिंदे गाव फाटा",
          "nameHi": "शिंदे गाव फाटा",
          "time": "1:52 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 29
        },
        {
          "name": "Palsi Phata",
          "nameMr": "पळसे फाटा",
          "nameHi": "पळसे फाटा",
          "time": "1:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.91498,
          "lng": 73.89862,
          "roadIndex": 31
        },
        {
          "name": "Naigaon Phata",
          "nameMr": "नायगाव फाटा",
          "nameHi": "नायगाव फाटा",
          "time": "2:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87156,
          "lng": 73.95373,
          "roadIndex": 38
        },
        {
          "name": "Mohadari Ghat",
          "nameMr": "मोहादरी घाट",
          "nameHi": "मोहादरी घाट",
          "time": "2:09 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86324,
          "lng": 73.96902,
          "roadIndex": 40
        },
        {
          "name": "Musalgaon MIDC Phata",
          "nameMr": "मुसळगाव एम.आय.डी.सी.",
          "nameHi": "मुसळगाव एम.आय.डी.सी.",
          "time": "2:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8622,
          "lng": 73.97338,
          "roadIndex": 41
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "2:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84481,
          "lng": 74.00229,
          "roadIndex": 47
        },
        {
          "name": "Sinnar Bypass Circle",
          "nameMr": "सिन्नर बायपास",
          "nameHi": "सिन्नर बायपास",
          "time": "2:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84487,
          "lng": 74.02118,
          "roadIndex": 49
        },
        {
          "name": "Gonde Phata (Sinnar)",
          "nameMr": "गोंदे फाटा",
          "nameHi": "गोंदे फाटा",
          "time": "2:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83941,
          "lng": 74.08014,
          "roadIndex": 54
        },
        {
          "name": "Pangri Phata",
          "nameMr": "पांगरी फाटा",
          "nameHi": "पांगरी फाटा",
          "time": "2:37 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83003,
          "lng": 74.14626,
          "roadIndex": 62
        },
        {
          "name": "Wavi Phata",
          "nameMr": "वावी फाटा",
          "nameHi": "वावी फाटा",
          "time": "2:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82075,
          "lng": 74.18997,
          "roadIndex": 69
        },
        {
          "name": "Wavi Bus Stand",
          "nameMr": "वावी बस स्थानक",
          "nameHi": "वावी बस स्थानक",
          "time": "2:47 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80736,
          "lng": 74.20631,
          "roadIndex": 77
        },
        {
          "name": "Pathare Phata",
          "nameMr": "पाथरे फाटा",
          "nameHi": "पाथरे फाटा",
          "time": "2:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.80624,
          "lng": 74.26668,
          "roadIndex": 90
        },
        {
          "name": "Nandur Shingote Stand",
          "nameMr": "नांदूर शिंगोटे स्थानक",
          "nameHi": "नांदूर शिंगोटे स्थानक",
          "time": "3:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.82026,
          "lng": 74.31335,
          "roadIndex": 92
        },
        {
          "name": "Dhandarphal Phata",
          "nameMr": "धांदरफळ फाटा",
          "nameHi": "धांदरफळ फाटा",
          "time": "3:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.81726,
          "lng": 74.36273,
          "roadIndex": 97
        },
        {
          "name": "Kolhar Bus Stand",
          "nameMr": "कोल्हार बस स्थानक",
          "nameHi": "कोल्हार बस स्थानक",
          "time": "3:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.79136,
          "lng": 74.40476,
          "roadIndex": 106
        },
        {
          "name": "Loni Pravara Phata",
          "nameMr": "लोणी प्रवरा फाटा",
          "nameHi": "लोणी प्रवरा फाटा",
          "time": "3:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78522,
          "lng": 74.40705,
          "roadIndex": 107
        },
        {
          "name": "Babhaleshwar Stand",
          "nameMr": "बाभळेश्वर स्थानक",
          "nameHi": "बाभळेश्वर स्थानक",
          "time": "3:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76039,
          "lng": 74.42819,
          "roadIndex": 110
        },
        {
          "name": "Rahata Stand",
          "nameMr": "राहाता बस स्थानक",
          "nameHi": "राहाता बस स्थानक",
          "time": "3:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Sakuri Phata",
          "nameMr": "साकुरी फाटा",
          "nameHi": "साकुरी फाटा",
          "time": "3:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Nagar",
          "nameMr": "शिर्डी साई नगर",
          "nameHi": "शिर्डी साई नगर",
          "time": "3:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76932,
          "lng": 74.4743,
          "roadIndex": 123
        },
        {
          "name": "Shirdi Sai Mandir Depot",
          "nameMr": "शिर्डी साई मंदिर आगार",
          "nameHi": "शिर्डी साई मंदिर आगार",
          "time": "3:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76701,
          "lng": 74.47641,
          "roadIndex": 125
        }
      ]
    },
    {
      "id": "BUS-104-1",
      "number": "MH 15 TR 7201",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-PUN",
      "routeName": "Nashik CBS to Pune Swargate",
      "routeNameMr": "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
      "destination": "Pune Swargate",
      "destinationMr": "पुणे स्वारगेट",
      "via": "Sinnar, Sangamner, Alephata, Narayangaon",
      "driverName": "Vijay R. Kulkarni (Emp #6140)",
      "conductorName": "Mahesh More",
      "scheduledTime": "06:30 AM",
      "currentLat": 18.54481,
      "currentLng": 73.84554,
      "roadIndex": 280,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "85% (Diesel)",
      "distanceFromStop": 2.1,
      "etaMinutes": 3,
      "previousStop": "Khadki Bazar",
      "nextStop": "Shivajinagar Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 7201 from Nashik CBS to Pune Swargate is en route. Approaching Shivajinagar Stand in approximately 3 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 7201 नाशिक सी.बी.एस. ते पुणे स्वारगेट मार्गावर धावत आहे. पुढील स्थानक शिवाजीनगर स्थानक सुमारे 3 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 7201 मार्गस्थ है। अगला स्टॉप शिवाजीनगर स्थानक लगभग 3 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "6:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "6:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98586,
          "lng": 73.80172,
          "roadIndex": 8
        },
        {
          "name": "Sinnar Phata",
          "nameMr": "सिन्नर फाटा",
          "nameHi": "सिन्नर फाटा",
          "time": "6:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 10
        },
        {
          "name": "Shinde Village",
          "nameMr": "शिंदे गाव",
          "nameHi": "शिंदे गाव",
          "time": "6:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 17
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "7:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84499,
          "lng": 74.0021,
          "roadIndex": 35
        },
        {
          "name": "Dodi Phata",
          "nameMr": "डोडी फाटा",
          "nameHi": "डोडी फाटा",
          "time": "7:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76156,
          "lng": 74.09825,
          "roadIndex": 44
        },
        {
          "name": "Sangamner Phata",
          "nameMr": "संगमनेर फाटा",
          "nameHi": "संगमनेर फाटा",
          "time": "7:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.62902,
          "lng": 74.17258,
          "roadIndex": 63
        },
        {
          "name": "Sangamner Bypass",
          "nameMr": "संगमनेर बायपास",
          "nameHi": "संगमनेर बायपास",
          "time": "7:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.57736,
          "lng": 74.20735,
          "roadIndex": 69
        },
        {
          "name": "Bota Bus Stand",
          "nameMr": "बोटा बस स्थानक",
          "nameHi": "बोटा बस स्थानक",
          "time": "8:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.45351,
          "lng": 74.19856,
          "roadIndex": 88
        },
        {
          "name": "Ghargaon Phata",
          "nameMr": "घारगाव फाटा",
          "nameHi": "घारगाव फाटा",
          "time": "8:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.37817,
          "lng": 74.2062,
          "roadIndex": 108
        },
        {
          "name": "Chandnapuri Ghat",
          "nameMr": "चंदनापुरी घाट",
          "nameHi": "चंदनापुरी घाट",
          "time": "8:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.31666,
          "lng": 74.17474,
          "roadIndex": 122
        },
        {
          "name": "Dolasane Phata",
          "nameMr": "डोळासणे फाटा",
          "nameHi": "डोळासणे फाटा",
          "time": "8:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.24559,
          "lng": 74.13768,
          "roadIndex": 136
        },
        {
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा जंक्शन",
          "nameHi": "आळेफाटा जंक्शन",
          "time": "8:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17718,
          "lng": 74.12287,
          "roadIndex": 148
        },
        {
          "name": "Otur Phata",
          "nameMr": "ओतूर फाटा",
          "nameHi": "ओतूर फाटा",
          "time": "8:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.15647,
          "lng": 74.04301,
          "roadIndex": 163
        },
        {
          "name": "Narayangaon Stand",
          "nameMr": "नारायणगाव स्थानक",
          "nameHi": "नारायणगाव स्थानक",
          "time": "9:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12143,
          "lng": 73.97773,
          "roadIndex": 170
        },
        {
          "name": "Manchar Stand",
          "nameMr": "मंचर बस स्थानक",
          "nameHi": "मंचर बस स्थानक",
          "time": "9:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01267,
          "lng": 73.94919,
          "roadIndex": 188
        },
        {
          "name": "Kalamb Phata",
          "nameMr": "कळंब फाटा",
          "nameHi": "कळंब फाटा",
          "time": "9:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.93282,
          "lng": 73.93053,
          "roadIndex": 201
        },
        {
          "name": "Peth Phata",
          "nameMr": "पेठ फाटा",
          "nameHi": "पेठ फाटा",
          "time": "9:33 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.90072,
          "lng": 73.91326,
          "roadIndex": 205
        },
        {
          "name": "Rajgurunagar (Khed)",
          "nameMr": "राजगुरुनगर (खेड)",
          "nameHi": "राजगुरुनगर (खेड)",
          "time": "9:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.85776,
          "lng": 73.88182,
          "roadIndex": 217
        },
        {
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "9:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7576,
          "lng": 73.8586,
          "roadIndex": 240
        },
        {
          "name": "Alandi Phata",
          "nameMr": "आळंदी फाटा",
          "nameHi": "आळंदी फाटा",
          "time": "10:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.71051,
          "lng": 73.84864,
          "roadIndex": 246
        },
        {
          "name": "Moshi Toll Phata",
          "nameMr": "मोशी टोल फाटा",
          "nameHi": "मोशी टोल फाटा",
          "time": "10:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.66835,
          "lng": 73.84894,
          "roadIndex": 252
        },
        {
          "name": "Bhosari Stand",
          "nameMr": "भोसरी बस स्थानक",
          "nameHi": "भोसरी बस स्थानक",
          "time": "10:22 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.62623,
          "lng": 73.85236,
          "roadIndex": 262
        },
        {
          "name": "Nashik Phata (Kasarwadi)",
          "nameMr": "नाशिक फाटा (कासारवाडी)",
          "nameHi": "नाशिक फाटा (कासारवाडी)",
          "time": "10:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.60189,
          "lng": 73.8263,
          "roadIndex": 271
        },
        {
          "name": "Dapodi Phata",
          "nameMr": "दापोडी फाटा",
          "nameHi": "दापोडी फाटा",
          "time": "10:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.57657,
          "lng": 73.83564,
          "roadIndex": 273
        },
        {
          "name": "Khadki Bazar",
          "nameMr": "खडकी बाजार",
          "nameHi": "खडकी बाजार",
          "time": "10:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.55986,
          "lng": 73.84375,
          "roadIndex": 275
        },
        {
          "name": "Shivajinagar Stand",
          "nameMr": "शिवाजीनगर स्थानक",
          "nameHi": "शिवाजीनगर स्थानक",
          "time": "10:49 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 18.52932,
          "lng": 73.85251,
          "roadIndex": 285
        },
        {
          "name": "Shaniwar Wada",
          "nameMr": "शनिवार वाडा",
          "nameHi": "शनिवार वाडा",
          "time": "10:55 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52018,
          "lng": 73.85611,
          "roadIndex": 288
        },
        {
          "name": "Pune Swargate Depot",
          "nameMr": "पुणे स्वारगेट आगार",
          "nameHi": "पुणे स्वारगेट आगार",
          "time": "11:03 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.50179,
          "lng": 73.85865,
          "roadIndex": 293
        }
      ]
    },
    {
      "id": "BUS-104-2",
      "number": "MH 15 AK 5502",
      "type": "Hirkani (Semi Luxury Asiad)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-PUN",
      "routeName": "Nashik CBS to Pune Swargate",
      "routeNameMr": "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
      "destination": "Pune Swargate",
      "destinationMr": "पुणे स्वारगेट",
      "via": "Sinnar, Sangamner, Alephata, Narayangaon",
      "driverName": "Dnyaneshwar T. Gite (Emp #5290)",
      "conductorName": "Mahesh More",
      "scheduledTime": "07:30 AM",
      "currentLat": 18.68345,
      "currentLng": 73.84717,
      "roadIndex": 249,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "78% (Diesel)",
      "distanceFromStop": 1.8,
      "etaMinutes": 2,
      "previousStop": "Alandi Phata",
      "nextStop": "Moshi Toll Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 5502 from Nashik CBS to Pune Swargate is en route. Approaching Moshi Toll Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 5502 नाशिक सी.बी.एस. ते पुणे स्वारगेट मार्गावर धावत आहे. पुढील स्थानक मोशी टोल फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 5502 मार्गस्थ है। अगला स्टॉप मोशी टोल फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "7:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "7:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98586,
          "lng": 73.80172,
          "roadIndex": 8
        },
        {
          "name": "Sinnar Phata",
          "nameMr": "सिन्नर फाटा",
          "nameHi": "सिन्नर फाटा",
          "time": "7:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 10
        },
        {
          "name": "Shinde Village",
          "nameMr": "शिंदे गाव",
          "nameHi": "शिंदे गाव",
          "time": "7:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 17
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "8:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84499,
          "lng": 74.0021,
          "roadIndex": 35
        },
        {
          "name": "Dodi Phata",
          "nameMr": "डोडी फाटा",
          "nameHi": "डोडी फाटा",
          "time": "8:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76156,
          "lng": 74.09825,
          "roadIndex": 44
        },
        {
          "name": "Sangamner Phata",
          "nameMr": "संगमनेर फाटा",
          "nameHi": "संगमनेर फाटा",
          "time": "8:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.62902,
          "lng": 74.17258,
          "roadIndex": 63
        },
        {
          "name": "Sangamner Bypass",
          "nameMr": "संगमनेर बायपास",
          "nameHi": "संगमनेर बायपास",
          "time": "8:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.57736,
          "lng": 74.20735,
          "roadIndex": 69
        },
        {
          "name": "Bota Bus Stand",
          "nameMr": "बोटा बस स्थानक",
          "nameHi": "बोटा बस स्थानक",
          "time": "9:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.45351,
          "lng": 74.19856,
          "roadIndex": 88
        },
        {
          "name": "Ghargaon Phata",
          "nameMr": "घारगाव फाटा",
          "nameHi": "घारगाव फाटा",
          "time": "9:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.37817,
          "lng": 74.2062,
          "roadIndex": 108
        },
        {
          "name": "Chandnapuri Ghat",
          "nameMr": "चंदनापुरी घाट",
          "nameHi": "चंदनापुरी घाट",
          "time": "9:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.31666,
          "lng": 74.17474,
          "roadIndex": 122
        },
        {
          "name": "Dolasane Phata",
          "nameMr": "डोळासणे फाटा",
          "nameHi": "डोळासणे फाटा",
          "time": "9:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.24559,
          "lng": 74.13768,
          "roadIndex": 136
        },
        {
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा जंक्शन",
          "nameHi": "आळेफाटा जंक्शन",
          "time": "9:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17718,
          "lng": 74.12287,
          "roadIndex": 148
        },
        {
          "name": "Otur Phata",
          "nameMr": "ओतूर फाटा",
          "nameHi": "ओतूर फाटा",
          "time": "9:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.15647,
          "lng": 74.04301,
          "roadIndex": 163
        },
        {
          "name": "Narayangaon Stand",
          "nameMr": "नारायणगाव स्थानक",
          "nameHi": "नारायणगाव स्थानक",
          "time": "10:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12143,
          "lng": 73.97773,
          "roadIndex": 170
        },
        {
          "name": "Manchar Stand",
          "nameMr": "मंचर बस स्थानक",
          "nameHi": "मंचर बस स्थानक",
          "time": "10:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01267,
          "lng": 73.94919,
          "roadIndex": 188
        },
        {
          "name": "Kalamb Phata",
          "nameMr": "कळंब फाटा",
          "nameHi": "कळंब फाटा",
          "time": "10:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.93282,
          "lng": 73.93053,
          "roadIndex": 201
        },
        {
          "name": "Peth Phata",
          "nameMr": "पेठ फाटा",
          "nameHi": "पेठ फाटा",
          "time": "10:33 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.90072,
          "lng": 73.91326,
          "roadIndex": 205
        },
        {
          "name": "Rajgurunagar (Khed)",
          "nameMr": "राजगुरुनगर (खेड)",
          "nameHi": "राजगुरुनगर (खेड)",
          "time": "10:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.85776,
          "lng": 73.88182,
          "roadIndex": 217
        },
        {
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "10:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7576,
          "lng": 73.8586,
          "roadIndex": 240
        },
        {
          "name": "Alandi Phata",
          "nameMr": "आळंदी फाटा",
          "nameHi": "आळंदी फाटा",
          "time": "11:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.71051,
          "lng": 73.84864,
          "roadIndex": 246
        },
        {
          "name": "Moshi Toll Phata",
          "nameMr": "मोशी टोल फाटा",
          "nameHi": "मोशी टोल फाटा",
          "time": "11:14 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 18.66835,
          "lng": 73.84894,
          "roadIndex": 252
        },
        {
          "name": "Bhosari Stand",
          "nameMr": "भोसरी बस स्थानक",
          "nameHi": "भोसरी बस स्थानक",
          "time": "11:22 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.62623,
          "lng": 73.85236,
          "roadIndex": 262
        },
        {
          "name": "Nashik Phata (Kasarwadi)",
          "nameMr": "नाशिक फाटा (कासारवाडी)",
          "nameHi": "नाशिक फाटा (कासारवाडी)",
          "time": "11:29 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.60189,
          "lng": 73.8263,
          "roadIndex": 271
        },
        {
          "name": "Dapodi Phata",
          "nameMr": "दापोडी फाटा",
          "nameHi": "दापोडी फाटा",
          "time": "11:35 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.57657,
          "lng": 73.83564,
          "roadIndex": 273
        },
        {
          "name": "Khadki Bazar",
          "nameMr": "खडकी बाजार",
          "nameHi": "खडकी बाजार",
          "time": "11:41 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.55986,
          "lng": 73.84375,
          "roadIndex": 275
        },
        {
          "name": "Shivajinagar Stand",
          "nameMr": "शिवाजीनगर स्थानक",
          "nameHi": "शिवाजीनगर स्थानक",
          "time": "11:49 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52932,
          "lng": 73.85251,
          "roadIndex": 285
        },
        {
          "name": "Shaniwar Wada",
          "nameMr": "शनिवार वाडा",
          "nameHi": "शनिवार वाडा",
          "time": "11:55 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52018,
          "lng": 73.85611,
          "roadIndex": 288
        },
        {
          "name": "Pune Swargate Depot",
          "nameMr": "पुणे स्वारगेट आगार",
          "nameHi": "पुणे स्वारगेट आगार",
          "time": "12:03 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.50179,
          "lng": 73.85865,
          "roadIndex": 293
        }
      ]
    },
    {
      "id": "BUS-104",
      "number": "MH 15 EG 4500",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-PUN",
      "routeName": "Nashik CBS to Pune Swargate",
      "routeNameMr": "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
      "destination": "Pune Swargate",
      "destinationMr": "पुणे स्वारगेट",
      "via": "Sinnar, Sangamner, Alephata, Narayangaon",
      "driverName": "Ashok N. Sanap (Emp #4671)",
      "conductorName": "Mahesh More",
      "scheduledTime": "08:30 AM",
      "currentLat": 18.96774,
      "currentLng": 73.94513,
      "roadIndex": 194,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 4.5,
      "etaMinutes": 6,
      "previousStop": "Manchar Stand",
      "nextStop": "Kalamb Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4500 from Nashik CBS to Pune Swargate is en route. Approaching Kalamb Phata in approximately 6 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4500 नाशिक सी.बी.एस. ते पुणे स्वारगेट मार्गावर धावत आहे. पुढील स्थानक कळंब फाटा सुमारे 6 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4500 मार्गस्थ है। अगला स्टॉप कळंब फाटा लगभग 6 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "8:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "8:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98586,
          "lng": 73.80172,
          "roadIndex": 8
        },
        {
          "name": "Sinnar Phata",
          "nameMr": "सिन्नर फाटा",
          "nameHi": "सिन्नर फाटा",
          "time": "8:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 10
        },
        {
          "name": "Shinde Village",
          "nameMr": "शिंदे गाव",
          "nameHi": "शिंदे गाव",
          "time": "8:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 17
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "9:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84499,
          "lng": 74.0021,
          "roadIndex": 35
        },
        {
          "name": "Dodi Phata",
          "nameMr": "डोडी फाटा",
          "nameHi": "डोडी फाटा",
          "time": "9:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76156,
          "lng": 74.09825,
          "roadIndex": 44
        },
        {
          "name": "Sangamner Phata",
          "nameMr": "संगमनेर फाटा",
          "nameHi": "संगमनेर फाटा",
          "time": "9:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.62902,
          "lng": 74.17258,
          "roadIndex": 63
        },
        {
          "name": "Sangamner Bypass",
          "nameMr": "संगमनेर बायपास",
          "nameHi": "संगमनेर बायपास",
          "time": "9:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.57736,
          "lng": 74.20735,
          "roadIndex": 69
        },
        {
          "name": "Bota Bus Stand",
          "nameMr": "बोटा बस स्थानक",
          "nameHi": "बोटा बस स्थानक",
          "time": "10:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.45351,
          "lng": 74.19856,
          "roadIndex": 88
        },
        {
          "name": "Ghargaon Phata",
          "nameMr": "घारगाव फाटा",
          "nameHi": "घारगाव फाटा",
          "time": "10:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.37817,
          "lng": 74.2062,
          "roadIndex": 108
        },
        {
          "name": "Chandnapuri Ghat",
          "nameMr": "चंदनापुरी घाट",
          "nameHi": "चंदनापुरी घाट",
          "time": "10:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.31666,
          "lng": 74.17474,
          "roadIndex": 122
        },
        {
          "name": "Dolasane Phata",
          "nameMr": "डोळासणे फाटा",
          "nameHi": "डोळासणे फाटा",
          "time": "10:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.24559,
          "lng": 74.13768,
          "roadIndex": 136
        },
        {
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा जंक्शन",
          "nameHi": "आळेफाटा जंक्शन",
          "time": "10:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17718,
          "lng": 74.12287,
          "roadIndex": 148
        },
        {
          "name": "Otur Phata",
          "nameMr": "ओतूर फाटा",
          "nameHi": "ओतूर फाटा",
          "time": "10:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.15647,
          "lng": 74.04301,
          "roadIndex": 163
        },
        {
          "name": "Narayangaon Stand",
          "nameMr": "नारायणगाव स्थानक",
          "nameHi": "नारायणगाव स्थानक",
          "time": "11:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12143,
          "lng": 73.97773,
          "roadIndex": 170
        },
        {
          "name": "Manchar Stand",
          "nameMr": "मंचर बस स्थानक",
          "nameHi": "मंचर बस स्थानक",
          "time": "11:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01267,
          "lng": 73.94919,
          "roadIndex": 188
        },
        {
          "name": "Kalamb Phata",
          "nameMr": "कळंब फाटा",
          "nameHi": "कळंब फाटा",
          "time": "11:27 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 18.93282,
          "lng": 73.93053,
          "roadIndex": 201
        },
        {
          "name": "Peth Phata",
          "nameMr": "पेठ फाटा",
          "nameHi": "पेठ फाटा",
          "time": "11:33 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.90072,
          "lng": 73.91326,
          "roadIndex": 205
        },
        {
          "name": "Rajgurunagar (Khed)",
          "nameMr": "राजगुरुनगर (खेड)",
          "nameHi": "राजगुरुनगर (खेड)",
          "time": "11:45 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.85776,
          "lng": 73.88182,
          "roadIndex": 217
        },
        {
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "11:59 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7576,
          "lng": 73.8586,
          "roadIndex": 240
        },
        {
          "name": "Alandi Phata",
          "nameMr": "आळंदी फाटा",
          "nameHi": "आळंदी फाटा",
          "time": "12:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.71051,
          "lng": 73.84864,
          "roadIndex": 246
        },
        {
          "name": "Moshi Toll Phata",
          "nameMr": "मोशी टोल फाटा",
          "nameHi": "मोशी टोल फाटा",
          "time": "12:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.66835,
          "lng": 73.84894,
          "roadIndex": 252
        },
        {
          "name": "Bhosari Stand",
          "nameMr": "भोसरी बस स्थानक",
          "nameHi": "भोसरी बस स्थानक",
          "time": "12:22 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.62623,
          "lng": 73.85236,
          "roadIndex": 262
        },
        {
          "name": "Nashik Phata (Kasarwadi)",
          "nameMr": "नाशिक फाटा (कासारवाडी)",
          "nameHi": "नाशिक फाटा (कासारवाडी)",
          "time": "12:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.60189,
          "lng": 73.8263,
          "roadIndex": 271
        },
        {
          "name": "Dapodi Phata",
          "nameMr": "दापोडी फाटा",
          "nameHi": "दापोडी फाटा",
          "time": "12:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.57657,
          "lng": 73.83564,
          "roadIndex": 273
        },
        {
          "name": "Khadki Bazar",
          "nameMr": "खडकी बाजार",
          "nameHi": "खडकी बाजार",
          "time": "12:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.55986,
          "lng": 73.84375,
          "roadIndex": 275
        },
        {
          "name": "Shivajinagar Stand",
          "nameMr": "शिवाजीनगर स्थानक",
          "nameHi": "शिवाजीनगर स्थानक",
          "time": "12:49 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52932,
          "lng": 73.85251,
          "roadIndex": 285
        },
        {
          "name": "Shaniwar Wada",
          "nameMr": "शनिवार वाडा",
          "nameHi": "शनिवार वाडा",
          "time": "12:55 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52018,
          "lng": 73.85611,
          "roadIndex": 288
        },
        {
          "name": "Pune Swargate Depot",
          "nameMr": "पुणे स्वारगेट आगार",
          "nameHi": "पुणे स्वारगेट आगार",
          "time": "1:03 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.50179,
          "lng": 73.85865,
          "roadIndex": 293
        }
      ]
    },
    {
      "id": "BUS-104-4",
      "number": "MH 15 TR 7215",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-PUN",
      "routeName": "Nashik CBS to Pune Swargate",
      "routeNameMr": "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
      "destination": "Pune Swargate",
      "destinationMr": "पुणे स्वारगेट",
      "via": "Sinnar, Sangamner, Alephata, Narayangaon",
      "driverName": "Rajendra K. Darekar (Emp #6204)",
      "conductorName": "Mahesh More",
      "scheduledTime": "09:30 AM",
      "currentLat": 19.27862,
      "currentLng": 74.15376,
      "roadIndex": 128,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "64% (Diesel)",
      "distanceFromStop": 4.2,
      "etaMinutes": 5,
      "previousStop": "Chandnapuri Ghat",
      "nextStop": "Dolasane Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 7215 from Nashik CBS to Pune Swargate is en route. Approaching Dolasane Phata in approximately 5 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 7215 नाशिक सी.बी.एस. ते पुणे स्वारगेट मार्गावर धावत आहे. पुढील स्थानक डोळासणे फाटा सुमारे 5 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 7215 मार्गस्थ है। अगला स्टॉप डोळासणे फाटा लगभग 5 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "9:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "9:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98586,
          "lng": 73.80172,
          "roadIndex": 8
        },
        {
          "name": "Sinnar Phata",
          "nameMr": "सिन्नर फाटा",
          "nameHi": "सिन्नर फाटा",
          "time": "9:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 10
        },
        {
          "name": "Shinde Village",
          "nameMr": "शिंदे गाव",
          "nameHi": "शिंदे गाव",
          "time": "9:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 17
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "10:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84499,
          "lng": 74.0021,
          "roadIndex": 35
        },
        {
          "name": "Dodi Phata",
          "nameMr": "डोडी फाटा",
          "nameHi": "डोडी फाटा",
          "time": "10:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76156,
          "lng": 74.09825,
          "roadIndex": 44
        },
        {
          "name": "Sangamner Phata",
          "nameMr": "संगमनेर फाटा",
          "nameHi": "संगमनेर फाटा",
          "time": "10:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.62902,
          "lng": 74.17258,
          "roadIndex": 63
        },
        {
          "name": "Sangamner Bypass",
          "nameMr": "संगमनेर बायपास",
          "nameHi": "संगमनेर बायपास",
          "time": "10:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.57736,
          "lng": 74.20735,
          "roadIndex": 69
        },
        {
          "name": "Bota Bus Stand",
          "nameMr": "बोटा बस स्थानक",
          "nameHi": "बोटा बस स्थानक",
          "time": "11:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.45351,
          "lng": 74.19856,
          "roadIndex": 88
        },
        {
          "name": "Ghargaon Phata",
          "nameMr": "घारगाव फाटा",
          "nameHi": "घारगाव फाटा",
          "time": "11:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.37817,
          "lng": 74.2062,
          "roadIndex": 108
        },
        {
          "name": "Chandnapuri Ghat",
          "nameMr": "चंदनापुरी घाट",
          "nameHi": "चंदनापुरी घाट",
          "time": "11:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.31666,
          "lng": 74.17474,
          "roadIndex": 122
        },
        {
          "name": "Dolasane Phata",
          "nameMr": "डोळासणे फाटा",
          "nameHi": "डोळासणे फाटा",
          "time": "11:36 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.24559,
          "lng": 74.13768,
          "roadIndex": 136
        },
        {
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा जंक्शन",
          "nameHi": "आळेफाटा जंक्शन",
          "time": "11:48 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17718,
          "lng": 74.12287,
          "roadIndex": 148
        },
        {
          "name": "Otur Phata",
          "nameMr": "ओतूर फाटा",
          "nameHi": "ओतूर फाटा",
          "time": "11:54 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.15647,
          "lng": 74.04301,
          "roadIndex": 163
        },
        {
          "name": "Narayangaon Stand",
          "nameMr": "नारायणगाव स्थानक",
          "nameHi": "नारायणगाव स्थानक",
          "time": "12:04 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12143,
          "lng": 73.97773,
          "roadIndex": 170
        },
        {
          "name": "Manchar Stand",
          "nameMr": "मंचर बस स्थानक",
          "nameHi": "मंचर बस स्थानक",
          "time": "12:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01267,
          "lng": 73.94919,
          "roadIndex": 188
        },
        {
          "name": "Kalamb Phata",
          "nameMr": "कळंब फाटा",
          "nameHi": "कळंब फाटा",
          "time": "12:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.93282,
          "lng": 73.93053,
          "roadIndex": 201
        },
        {
          "name": "Peth Phata",
          "nameMr": "पेठ फाटा",
          "nameHi": "पेठ फाटा",
          "time": "12:33 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.90072,
          "lng": 73.91326,
          "roadIndex": 205
        },
        {
          "name": "Rajgurunagar (Khed)",
          "nameMr": "राजगुरुनगर (खेड)",
          "nameHi": "राजगुरुनगर (खेड)",
          "time": "12:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.85776,
          "lng": 73.88182,
          "roadIndex": 217
        },
        {
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "12:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7576,
          "lng": 73.8586,
          "roadIndex": 240
        },
        {
          "name": "Alandi Phata",
          "nameMr": "आळंदी फाटा",
          "nameHi": "आळंदी फाटा",
          "time": "1:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.71051,
          "lng": 73.84864,
          "roadIndex": 246
        },
        {
          "name": "Moshi Toll Phata",
          "nameMr": "मोशी टोल फाटा",
          "nameHi": "मोशी टोल फाटा",
          "time": "1:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.66835,
          "lng": 73.84894,
          "roadIndex": 252
        },
        {
          "name": "Bhosari Stand",
          "nameMr": "भोसरी बस स्थानक",
          "nameHi": "भोसरी बस स्थानक",
          "time": "1:22 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.62623,
          "lng": 73.85236,
          "roadIndex": 262
        },
        {
          "name": "Nashik Phata (Kasarwadi)",
          "nameMr": "नाशिक फाटा (कासारवाडी)",
          "nameHi": "नाशिक फाटा (कासारवाडी)",
          "time": "1:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.60189,
          "lng": 73.8263,
          "roadIndex": 271
        },
        {
          "name": "Dapodi Phata",
          "nameMr": "दापोडी फाटा",
          "nameHi": "दापोडी फाटा",
          "time": "1:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.57657,
          "lng": 73.83564,
          "roadIndex": 273
        },
        {
          "name": "Khadki Bazar",
          "nameMr": "खडकी बाजार",
          "nameHi": "खडकी बाजार",
          "time": "1:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.55986,
          "lng": 73.84375,
          "roadIndex": 275
        },
        {
          "name": "Shivajinagar Stand",
          "nameMr": "शिवाजीनगर स्थानक",
          "nameHi": "शिवाजीनगर स्थानक",
          "time": "1:49 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52932,
          "lng": 73.85251,
          "roadIndex": 285
        },
        {
          "name": "Shaniwar Wada",
          "nameMr": "शनिवार वाडा",
          "nameHi": "शनिवार वाडा",
          "time": "1:55 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52018,
          "lng": 73.85611,
          "roadIndex": 288
        },
        {
          "name": "Pune Swargate Depot",
          "nameMr": "पुणे स्वारगेट आगार",
          "nameHi": "पुणे स्वारगेट आगार",
          "time": "2:03 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.50179,
          "lng": 73.85865,
          "roadIndex": 293
        }
      ]
    },
    {
      "id": "BUS-104-5",
      "number": "MH 15 EF 2890",
      "type": "Parivartan (Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#C2185B",
      "routeId": "R-NSK-PUN",
      "routeName": "Nashik CBS to Pune Swargate",
      "routeNameMr": "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
      "destination": "Pune Swargate",
      "destinationMr": "पुणे स्वारगेट",
      "via": "Sinnar, Sangamner, Alephata, Narayangaon",
      "driverName": "Sudam B. Avhad (Emp #5019)",
      "conductorName": "Mahesh More",
      "scheduledTime": "10:30 AM",
      "currentLat": 19.69786,
      "currentLng": 74.15027,
      "roadIndex": 53,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 8.2,
      "etaMinutes": 10,
      "previousStop": "Dodi Phata",
      "nextStop": "Sangamner Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EF 2890 from Nashik CBS to Pune Swargate is en route. Approaching Sangamner Phata in approximately 10 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EF 2890 नाशिक सी.बी.एस. ते पुणे स्वारगेट मार्गावर धावत आहे. पुढील स्थानक संगमनेर फाटा सुमारे 10 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EF 2890 मार्गस्थ है। अगला स्टॉप संगमनेर फाटा लगभग 10 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "10:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "10:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98586,
          "lng": 73.80172,
          "roadIndex": 8
        },
        {
          "name": "Sinnar Phata",
          "nameMr": "सिन्नर फाटा",
          "nameHi": "सिन्नर फाटा",
          "time": "10:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 10
        },
        {
          "name": "Shinde Village",
          "nameMr": "शिंदे गाव",
          "nameHi": "शिंदे गाव",
          "time": "10:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 17
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "11:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84499,
          "lng": 74.0021,
          "roadIndex": 35
        },
        {
          "name": "Dodi Phata",
          "nameMr": "डोडी फाटा",
          "nameHi": "डोडी फाटा",
          "time": "11:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76156,
          "lng": 74.09825,
          "roadIndex": 44
        },
        {
          "name": "Sangamner Phata",
          "nameMr": "संगमनेर फाटा",
          "nameHi": "संगमनेर फाटा",
          "time": "11:43 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.62902,
          "lng": 74.17258,
          "roadIndex": 63
        },
        {
          "name": "Sangamner Bypass",
          "nameMr": "संगमनेर बायपास",
          "nameHi": "संगमनेर बायपास",
          "time": "11:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.57736,
          "lng": 74.20735,
          "roadIndex": 69
        },
        {
          "name": "Bota Bus Stand",
          "nameMr": "बोटा बस स्थानक",
          "nameHi": "बोटा बस स्थानक",
          "time": "12:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.45351,
          "lng": 74.19856,
          "roadIndex": 88
        },
        {
          "name": "Ghargaon Phata",
          "nameMr": "घारगाव फाटा",
          "nameHi": "घारगाव फाटा",
          "time": "12:17 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.37817,
          "lng": 74.2062,
          "roadIndex": 108
        },
        {
          "name": "Chandnapuri Ghat",
          "nameMr": "चंदनापुरी घाट",
          "nameHi": "चंदनापुरी घाट",
          "time": "12:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.31666,
          "lng": 74.17474,
          "roadIndex": 122
        },
        {
          "name": "Dolasane Phata",
          "nameMr": "डोळासणे फाटा",
          "nameHi": "डोळासणे फाटा",
          "time": "12:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.24559,
          "lng": 74.13768,
          "roadIndex": 136
        },
        {
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा जंक्शन",
          "nameHi": "आळेफाटा जंक्शन",
          "time": "12:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17718,
          "lng": 74.12287,
          "roadIndex": 148
        },
        {
          "name": "Otur Phata",
          "nameMr": "ओतूर फाटा",
          "nameHi": "ओतूर फाटा",
          "time": "12:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.15647,
          "lng": 74.04301,
          "roadIndex": 163
        },
        {
          "name": "Narayangaon Stand",
          "nameMr": "नारायणगाव स्थानक",
          "nameHi": "नारायणगाव स्थानक",
          "time": "1:04 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12143,
          "lng": 73.97773,
          "roadIndex": 170
        },
        {
          "name": "Manchar Stand",
          "nameMr": "मंचर बस स्थानक",
          "nameHi": "मंचर बस स्थानक",
          "time": "1:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01267,
          "lng": 73.94919,
          "roadIndex": 188
        },
        {
          "name": "Kalamb Phata",
          "nameMr": "कळंब फाटा",
          "nameHi": "कळंब फाटा",
          "time": "1:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.93282,
          "lng": 73.93053,
          "roadIndex": 201
        },
        {
          "name": "Peth Phata",
          "nameMr": "पेठ फाटा",
          "nameHi": "पेठ फाटा",
          "time": "1:33 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.90072,
          "lng": 73.91326,
          "roadIndex": 205
        },
        {
          "name": "Rajgurunagar (Khed)",
          "nameMr": "राजगुरुनगर (खेड)",
          "nameHi": "राजगुरुनगर (खेड)",
          "time": "1:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.85776,
          "lng": 73.88182,
          "roadIndex": 217
        },
        {
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "1:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7576,
          "lng": 73.8586,
          "roadIndex": 240
        },
        {
          "name": "Alandi Phata",
          "nameMr": "आळंदी फाटा",
          "nameHi": "आळंदी फाटा",
          "time": "2:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.71051,
          "lng": 73.84864,
          "roadIndex": 246
        },
        {
          "name": "Moshi Toll Phata",
          "nameMr": "मोशी टोल फाटा",
          "nameHi": "मोशी टोल फाटा",
          "time": "2:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.66835,
          "lng": 73.84894,
          "roadIndex": 252
        },
        {
          "name": "Bhosari Stand",
          "nameMr": "भोसरी बस स्थानक",
          "nameHi": "भोसरी बस स्थानक",
          "time": "2:22 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.62623,
          "lng": 73.85236,
          "roadIndex": 262
        },
        {
          "name": "Nashik Phata (Kasarwadi)",
          "nameMr": "नाशिक फाटा (कासारवाडी)",
          "nameHi": "नाशिक फाटा (कासारवाडी)",
          "time": "2:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.60189,
          "lng": 73.8263,
          "roadIndex": 271
        },
        {
          "name": "Dapodi Phata",
          "nameMr": "दापोडी फाटा",
          "nameHi": "दापोडी फाटा",
          "time": "2:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.57657,
          "lng": 73.83564,
          "roadIndex": 273
        },
        {
          "name": "Khadki Bazar",
          "nameMr": "खडकी बाजार",
          "nameHi": "खडकी बाजार",
          "time": "2:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.55986,
          "lng": 73.84375,
          "roadIndex": 275
        },
        {
          "name": "Shivajinagar Stand",
          "nameMr": "शिवाजीनगर स्थानक",
          "nameHi": "शिवाजीनगर स्थानक",
          "time": "2:49 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52932,
          "lng": 73.85251,
          "roadIndex": 285
        },
        {
          "name": "Shaniwar Wada",
          "nameMr": "शनिवार वाडा",
          "nameHi": "शनिवार वाडा",
          "time": "2:55 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52018,
          "lng": 73.85611,
          "roadIndex": 288
        },
        {
          "name": "Pune Swargate Depot",
          "nameMr": "पुणे स्वारगेट आगार",
          "nameHi": "पुणे स्वारगेट आगार",
          "time": "3:03 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.50179,
          "lng": 73.85865,
          "roadIndex": 293
        }
      ]
    },
    {
      "id": "BUS-104-6",
      "number": "MH 15 TR 7230",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-PUN",
      "routeName": "Nashik CBS to Pune Swargate",
      "routeNameMr": "नाशिक सी.बी.एस. ते पुणे स्वारगेट",
      "destination": "Pune Swargate",
      "destinationMr": "पुणे स्वारगेट",
      "via": "Sinnar, Sangamner, Alephata, Narayangaon",
      "driverName": "Balu S. Darade (Emp #6311)",
      "conductorName": "Mahesh More",
      "scheduledTime": "11:30 AM",
      "currentLat": 19.97287,
      "currentLng": 73.81388,
      "roadIndex": 9,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "80% (38/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "50% (Diesel)",
      "distanceFromStop": 3.5,
      "etaMinutes": 4,
      "previousStop": "Dwarka Circle",
      "nextStop": "Sinnar Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 7230 from Nashik CBS to Pune Swargate is en route. Approaching Sinnar Phata in approximately 4 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 7230 नाशिक सी.बी.एस. ते पुणे स्वारगेट मार्गावर धावत आहे. पुढील स्थानक सिन्नर फाटा सुमारे 4 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 7230 मार्गस्थ है। अगला स्टॉप सिन्नर फाटा लगभग 4 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "11:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "11:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98586,
          "lng": 73.80172,
          "roadIndex": 8
        },
        {
          "name": "Sinnar Phata",
          "nameMr": "सिन्नर फाटा",
          "nameHi": "सिन्नर फाटा",
          "time": "11:48 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.95253,
          "lng": 73.83959,
          "roadIndex": 10
        },
        {
          "name": "Shinde Village",
          "nameMr": "शिंदे गाव",
          "nameHi": "शिंदे गाव",
          "time": "11:58 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92174,
          "lng": 73.88164,
          "roadIndex": 17
        },
        {
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्थानक",
          "time": "12:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.84499,
          "lng": 74.0021,
          "roadIndex": 35
        },
        {
          "name": "Dodi Phata",
          "nameMr": "डोडी फाटा",
          "nameHi": "डोडी फाटा",
          "time": "12:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.76156,
          "lng": 74.09825,
          "roadIndex": 44
        },
        {
          "name": "Sangamner Phata",
          "nameMr": "संगमनेर फाटा",
          "nameHi": "संगमनेर फाटा",
          "time": "12:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.62902,
          "lng": 74.17258,
          "roadIndex": 63
        },
        {
          "name": "Sangamner Bypass",
          "nameMr": "संगमनेर बायपास",
          "nameHi": "संगमनेर बायपास",
          "time": "12:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.57736,
          "lng": 74.20735,
          "roadIndex": 69
        },
        {
          "name": "Bota Bus Stand",
          "nameMr": "बोटा बस स्थानक",
          "nameHi": "बोटा बस स्थानक",
          "time": "1:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.45351,
          "lng": 74.19856,
          "roadIndex": 88
        },
        {
          "name": "Ghargaon Phata",
          "nameMr": "घारगाव फाटा",
          "nameHi": "घारगाव फाटा",
          "time": "1:17 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.37817,
          "lng": 74.2062,
          "roadIndex": 108
        },
        {
          "name": "Chandnapuri Ghat",
          "nameMr": "चंदनापुरी घाट",
          "nameHi": "चंदनापुरी घाट",
          "time": "1:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.31666,
          "lng": 74.17474,
          "roadIndex": 122
        },
        {
          "name": "Dolasane Phata",
          "nameMr": "डोळासणे फाटा",
          "nameHi": "डोळासणे फाटा",
          "time": "1:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.24559,
          "lng": 74.13768,
          "roadIndex": 136
        },
        {
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा जंक्शन",
          "nameHi": "आळेफाटा जंक्शन",
          "time": "1:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17718,
          "lng": 74.12287,
          "roadIndex": 148
        },
        {
          "name": "Otur Phata",
          "nameMr": "ओतूर फाटा",
          "nameHi": "ओतूर फाटा",
          "time": "1:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.15647,
          "lng": 74.04301,
          "roadIndex": 163
        },
        {
          "name": "Narayangaon Stand",
          "nameMr": "नारायणगाव स्थानक",
          "nameHi": "नारायणगाव स्थानक",
          "time": "2:04 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12143,
          "lng": 73.97773,
          "roadIndex": 170
        },
        {
          "name": "Manchar Stand",
          "nameMr": "मंचर बस स्थानक",
          "nameHi": "मंचर बस स्थानक",
          "time": "2:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01267,
          "lng": 73.94919,
          "roadIndex": 188
        },
        {
          "name": "Kalamb Phata",
          "nameMr": "कळंब फाटा",
          "nameHi": "कळंब फाटा",
          "time": "2:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.93282,
          "lng": 73.93053,
          "roadIndex": 201
        },
        {
          "name": "Peth Phata",
          "nameMr": "पेठ फाटा",
          "nameHi": "पेठ फाटा",
          "time": "2:33 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.90072,
          "lng": 73.91326,
          "roadIndex": 205
        },
        {
          "name": "Rajgurunagar (Khed)",
          "nameMr": "राजगुरुनगर (खेड)",
          "nameHi": "राजगुरुनगर (खेड)",
          "time": "2:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.85776,
          "lng": 73.88182,
          "roadIndex": 217
        },
        {
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "2:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7576,
          "lng": 73.8586,
          "roadIndex": 240
        },
        {
          "name": "Alandi Phata",
          "nameMr": "आळंदी फाटा",
          "nameHi": "आळंदी फाटा",
          "time": "3:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.71051,
          "lng": 73.84864,
          "roadIndex": 246
        },
        {
          "name": "Moshi Toll Phata",
          "nameMr": "मोशी टोल फाटा",
          "nameHi": "मोशी टोल फाटा",
          "time": "3:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.66835,
          "lng": 73.84894,
          "roadIndex": 252
        },
        {
          "name": "Bhosari Stand",
          "nameMr": "भोसरी बस स्थानक",
          "nameHi": "भोसरी बस स्थानक",
          "time": "3:22 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.62623,
          "lng": 73.85236,
          "roadIndex": 262
        },
        {
          "name": "Nashik Phata (Kasarwadi)",
          "nameMr": "नाशिक फाटा (कासारवाडी)",
          "nameHi": "नाशिक फाटा (कासारवाडी)",
          "time": "3:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.60189,
          "lng": 73.8263,
          "roadIndex": 271
        },
        {
          "name": "Dapodi Phata",
          "nameMr": "दापोडी फाटा",
          "nameHi": "दापोडी फाटा",
          "time": "3:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.57657,
          "lng": 73.83564,
          "roadIndex": 273
        },
        {
          "name": "Khadki Bazar",
          "nameMr": "खडकी बाजार",
          "nameHi": "खडकी बाजार",
          "time": "3:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.55986,
          "lng": 73.84375,
          "roadIndex": 275
        },
        {
          "name": "Shivajinagar Stand",
          "nameMr": "शिवाजीनगर स्थानक",
          "nameHi": "शिवाजीनगर स्थानक",
          "time": "3:49 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52932,
          "lng": 73.85251,
          "roadIndex": 285
        },
        {
          "name": "Shaniwar Wada",
          "nameMr": "शनिवार वाडा",
          "nameHi": "शनिवार वाडा",
          "time": "3:55 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.52018,
          "lng": 73.85611,
          "roadIndex": 288
        },
        {
          "name": "Pune Swargate Depot",
          "nameMr": "पुणे स्वारगेट आगार",
          "nameHi": "पुणे स्वारगेट आगार",
          "time": "4:03 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.50179,
          "lng": 73.85865,
          "roadIndex": 293
        }
      ]
    },
    {
      "id": "BUS-105-1",
      "number": "MH 15 TR 8100",
      "type": "Shivshahi (AC Sleeper/Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-MUM",
      "routeName": "Nashik Mahamarg to Mumbai Dadar",
      "routeNameMr": "नाशिक महामार्ग ते मुंबई दादर",
      "destination": "Mumbai Dadar (Asiad)",
      "destinationMr": "मुंबई दादर (आशियाड)",
      "via": "Vilholi, Ghoti, Igatpuri, Kasara, Thane",
      "driverName": "Chandrakant S. Salve (Emp #6088)",
      "conductorName": "Raju Nikam",
      "scheduledTime": "06:00 AM",
      "currentLat": 19.07455,
      "currentLng": 72.91262,
      "roadIndex": 337,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "85% (Diesel)",
      "distanceFromStop": 3.6,
      "etaMinutes": 5,
      "previousStop": "Ghatkopar Stand",
      "nextStop": "Kurla Nehrunagar Depot",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 8100 from Nashik Mahamarg to Mumbai Dadar is en route. Approaching Kurla Nehrunagar Depot in approximately 5 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 8100 नाशिक महामार्ग ते मुंबई दादर मार्गावर धावत आहे. पुढील स्थानक कुर्ला नेहरूनगर आगार सुमारे 5 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 8100 मार्गस्थ है। अगला स्टॉप कुर्ला नेहरूनगर आगार लगभग 5 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Mahamarg",
          "nameMr": "नाशिक महामार्ग स्थानक",
          "nameHi": "नाशिक महामार्ग स्थानक",
          "time": "6:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99201,
          "lng": 73.78499,
          "roadIndex": 0
        },
        {
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "6:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Pathardi Phata",
          "nameMr": "पाथर्डी फाटा",
          "nameHi": "पाथर्डी फाटा",
          "time": "6:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Garware Point (Ambad)",
          "nameMr": "गरवारे पॉईंट (अंबड)",
          "nameHi": "गरवारे पॉईंट (अंबड)",
          "time": "6:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9025,
          "lng": 73.75356,
          "roadIndex": 25
        },
        {
          "name": "Vilholi Phata",
          "nameMr": "विल्होळी फाटा",
          "nameHi": "विल्होळी फाटा",
          "time": "6:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88489,
          "lng": 73.69349,
          "roadIndex": 40
        },
        {
          "name": "Gonde MIDC",
          "nameMr": "गोंदे एम.आय.डी.सी.",
          "nameHi": "गोंदे एम.आय.डी.सी.",
          "time": "6:37 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.85254,
          "lng": 73.65988,
          "roadIndex": 52
        },
        {
          "name": "Wadivarhe Phata",
          "nameMr": "वाडीवऱ्हे फाटा",
          "nameHi": "वाडीवऱ्हे फाटा",
          "time": "6:44 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83456,
          "lng": 73.63075,
          "roadIndex": 61
        },
        {
          "name": "Rayambe Phata",
          "nameMr": "रायंबे फाटा",
          "nameHi": "रायंबे फाटा",
          "time": "6:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Phata",
          "nameMr": "घोटी फाटा",
          "nameHi": "घोटी फाटा",
          "time": "6:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Stand",
          "nameMr": "घोटी बस स्थानक",
          "nameHi": "घोटी बस स्थानक",
          "time": "7:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.77076,
          "lng": 73.61391,
          "roadIndex": 111
        },
        {
          "name": "Igatpuri Highway Phata",
          "nameMr": "इगतपुरी हायवे फाटा",
          "nameHi": "इगतपुरी हायवे फाटा",
          "time": "7:11 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69731,
          "lng": 73.56098,
          "roadIndex": 143
        },
        {
          "name": "Igatpuri Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्थानक",
          "time": "7:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69767,
          "lng": 73.55997,
          "roadIndex": 144
        },
        {
          "name": "Thal Ghat / Kasara Ghat",
          "nameMr": "थळ घाट / कसारा घाट",
          "nameHi": "थळ घाट / कसारा घाट",
          "time": "7:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.66266,
          "lng": 73.5,
          "roadIndex": 176
        },
        {
          "name": "Kasara Phata",
          "nameMr": "कसारा फाटा",
          "nameHi": "कसारा फाटा",
          "time": "7:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.63729,
          "lng": 73.48288,
          "roadIndex": 188
        },
        {
          "name": "Khardi Phata",
          "nameMr": "खर्डी फाटा",
          "nameHi": "खर्डी फाटा",
          "time": "7:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.58151,
          "lng": 73.38403,
          "roadIndex": 213
        },
        {
          "name": "Asangaon Station Phata",
          "nameMr": "आसनगाव स्टेशन फाटा",
          "nameHi": "आसनगाव स्टेशन फाटा",
          "time": "8:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.52097,
          "lng": 73.33812,
          "roadIndex": 225
        },
        {
          "name": "Shahapur Stand",
          "nameMr": "शहापूर बस स्थानक",
          "nameHi": "शहापूर बस स्थानक",
          "time": "8:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.46132,
          "lng": 73.28548,
          "roadIndex": 258
        },
        {
          "name": "Vashind Phata",
          "nameMr": "वाशिंद फाटा",
          "nameHi": "वाशिंद फाटा",
          "time": "8:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.39402,
          "lng": 73.23482,
          "roadIndex": 283
        },
        {
          "name": "Padgha Toll Naka",
          "nameMr": "पडघा टोल नाका",
          "nameHi": "पडघा टोल नाका",
          "time": "8:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.36781,
          "lng": 73.18217,
          "roadIndex": 288
        },
        {
          "name": "Bhiwandi Bypass",
          "nameMr": "भिवंडी बायपास",
          "nameHi": "भिवंडी बायपास",
          "time": "8:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.28138,
          "lng": 73.10276,
          "roadIndex": 312
        },
        {
          "name": "Majiwada Junction (Thane)",
          "nameMr": "माजीवडा जंक्शन (ठाणे)",
          "nameHi": "माजीवडा जंक्शन (ठाणे)",
          "time": "9:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हात नाका",
          "time": "9:16 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Mulund Check Naka",
          "nameMr": "मुलुंड चेक नाका",
          "nameHi": "मुलुंड चेक नाका",
          "time": "9:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17486,
          "lng": 72.96863,
          "roadIndex": 332
        },
        {
          "name": "Bhandup Pumping",
          "nameMr": "भांडुप पंपिंग",
          "nameHi": "भांडुप पंपिंग",
          "time": "9:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Vikhroli Godrej",
          "nameMr": "विक्रोळी गोदरेज",
          "nameHi": "विक्रोळी गोदरेज",
          "time": "9:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Ghatkopar Stand",
          "nameMr": "घाटकोपर स्थानक",
          "nameHi": "घाटकोपर स्थानक",
          "time": "9:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.08709,
          "lng": 72.9234,
          "roadIndex": 336
        },
        {
          "name": "Kurla Nehrunagar Depot",
          "nameMr": "कुर्ला नेहरूनगर आगार",
          "nameHi": "कुर्ला नेहरूनगर आगार",
          "time": "9:51 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.05482,
          "lng": 72.88507,
          "roadIndex": 338
        },
        {
          "name": "Sion Circle",
          "nameMr": "शीव (सायन) सर्कल",
          "nameHi": "शीव (सायन) सर्कल",
          "time": "9:59 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.03922,
          "lng": 72.86174,
          "roadIndex": 344
        },
        {
          "name": "Dadar Asiad Terminal",
          "nameMr": "दादर आशियाड बस टर्मिनस",
          "nameHi": "दादर आशियाड बस टर्मिनस",
          "time": "10:09 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01778,
          "lng": 72.84782,
          "roadIndex": 349
        }
      ]
    },
    {
      "id": "BUS-105-2",
      "number": "MH 15 AK 6120",
      "type": "Hirkani (Semi Luxury)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-MUM",
      "routeName": "Nashik Mahamarg to Mumbai Dadar",
      "routeNameMr": "नाशिक महामार्ग ते मुंबई दादर",
      "destination": "Mumbai Dadar (Asiad)",
      "destinationMr": "मुंबई दादर (आशियाड)",
      "via": "Vilholi, Ghoti, Igatpuri, Kasara, Thane",
      "driverName": "Sambhaji D. Kapse (Emp #5344)",
      "conductorName": "Raju Nikam",
      "scheduledTime": "07:15 AM",
      "currentLat": 19.21726,
      "currentLng": 72.97839,
      "roadIndex": 327,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "78% (Diesel)",
      "distanceFromStop": 0,
      "etaMinutes": 2,
      "previousStop": "Majiwada Junction (Thane)",
      "nextStop": "Thane Teen Hath Naka",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 6120 from Nashik Mahamarg to Mumbai Dadar is en route. Approaching Thane Teen Hath Naka in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 6120 नाशिक महामार्ग ते मुंबई दादर मार्गावर धावत आहे. पुढील स्थानक ठाणे तीन हात नाका सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 6120 मार्गस्थ है। अगला स्टॉप ठाणे तीन हात नाका लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Mahamarg",
          "nameMr": "नाशिक महामार्ग स्थानक",
          "nameHi": "नाशिक महामार्ग स्थानक",
          "time": "7:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99201,
          "lng": 73.78499,
          "roadIndex": 0
        },
        {
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "7:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Pathardi Phata",
          "nameMr": "पाथर्डी फाटा",
          "nameHi": "पाथर्डी फाटा",
          "time": "7:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Garware Point (Ambad)",
          "nameMr": "गरवारे पॉईंट (अंबड)",
          "nameHi": "गरवारे पॉईंट (अंबड)",
          "time": "7:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9025,
          "lng": 73.75356,
          "roadIndex": 25
        },
        {
          "name": "Vilholi Phata",
          "nameMr": "विल्होळी फाटा",
          "nameHi": "विल्होळी फाटा",
          "time": "7:42 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88489,
          "lng": 73.69349,
          "roadIndex": 40
        },
        {
          "name": "Gonde MIDC",
          "nameMr": "गोंदे एम.आय.डी.सी.",
          "nameHi": "गोंदे एम.आय.डी.सी.",
          "time": "7:52 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.85254,
          "lng": 73.65988,
          "roadIndex": 52
        },
        {
          "name": "Wadivarhe Phata",
          "nameMr": "वाडीवऱ्हे फाटा",
          "nameHi": "वाडीवऱ्हे फाटा",
          "time": "7:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83456,
          "lng": 73.63075,
          "roadIndex": 61
        },
        {
          "name": "Rayambe Phata",
          "nameMr": "रायंबे फाटा",
          "nameHi": "रायंबे फाटा",
          "time": "8:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Phata",
          "nameMr": "घोटी फाटा",
          "nameHi": "घोटी फाटा",
          "time": "8:11 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Stand",
          "nameMr": "घोटी बस स्थानक",
          "nameHi": "घोटी बस स्थानक",
          "time": "8:16 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.77076,
          "lng": 73.61391,
          "roadIndex": 111
        },
        {
          "name": "Igatpuri Highway Phata",
          "nameMr": "इगतपुरी हायवे फाटा",
          "nameHi": "इगतपुरी हायवे फाटा",
          "time": "8:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69731,
          "lng": 73.56098,
          "roadIndex": 143
        },
        {
          "name": "Igatpuri Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्थानक",
          "time": "8:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69767,
          "lng": 73.55997,
          "roadIndex": 144
        },
        {
          "name": "Thal Ghat / Kasara Ghat",
          "nameMr": "थळ घाट / कसारा घाट",
          "nameHi": "थळ घाट / कसारा घाट",
          "time": "8:44 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.66266,
          "lng": 73.5,
          "roadIndex": 176
        },
        {
          "name": "Kasara Phata",
          "nameMr": "कसारा फाटा",
          "nameHi": "कसारा फाटा",
          "time": "8:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.63729,
          "lng": 73.48288,
          "roadIndex": 188
        },
        {
          "name": "Khardi Phata",
          "nameMr": "खर्डी फाटा",
          "nameHi": "खर्डी फाटा",
          "time": "9:06 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.58151,
          "lng": 73.38403,
          "roadIndex": 213
        },
        {
          "name": "Asangaon Station Phata",
          "nameMr": "आसनगाव स्टेशन फाटा",
          "nameHi": "आसनगाव स्टेशन फाटा",
          "time": "9:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.52097,
          "lng": 73.33812,
          "roadIndex": 225
        },
        {
          "name": "Shahapur Stand",
          "nameMr": "शहापूर बस स्थानक",
          "nameHi": "शहापूर बस स्थानक",
          "time": "9:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.46132,
          "lng": 73.28548,
          "roadIndex": 258
        },
        {
          "name": "Vashind Phata",
          "nameMr": "वाशिंद फाटा",
          "nameHi": "वाशिंद फाटा",
          "time": "9:42 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.39402,
          "lng": 73.23482,
          "roadIndex": 283
        },
        {
          "name": "Padgha Toll Naka",
          "nameMr": "पडघा टोल नाका",
          "nameHi": "पडघा टोल नाका",
          "time": "9:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.36781,
          "lng": 73.18217,
          "roadIndex": 288
        },
        {
          "name": "Bhiwandi Bypass",
          "nameMr": "भिवंडी बायपास",
          "nameHi": "भिवंडी बायपास",
          "time": "10:11 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.28138,
          "lng": 73.10276,
          "roadIndex": 312
        },
        {
          "name": "Majiwada Junction (Thane)",
          "nameMr": "माजीवडा जंक्शन (ठाणे)",
          "nameHi": "माजीवडा जंक्शन (ठाणे)",
          "time": "10:23 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हात नाका",
          "time": "10:31 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Mulund Check Naka",
          "nameMr": "मुलुंड चेक नाका",
          "nameHi": "मुलुंड चेक नाका",
          "time": "10:39 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17486,
          "lng": 72.96863,
          "roadIndex": 332
        },
        {
          "name": "Bhandup Pumping",
          "nameMr": "भांडुप पंपिंग",
          "nameHi": "भांडुप पंपिंग",
          "time": "10:45 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Vikhroli Godrej",
          "nameMr": "विक्रोळी गोदरेज",
          "nameHi": "विक्रोळी गोदरेज",
          "time": "10:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Ghatkopar Stand",
          "nameMr": "घाटकोपर स्थानक",
          "nameHi": "घाटकोपर स्थानक",
          "time": "10:58 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.08709,
          "lng": 72.9234,
          "roadIndex": 336
        },
        {
          "name": "Kurla Nehrunagar Depot",
          "nameMr": "कुर्ला नेहरूनगर आगार",
          "nameHi": "कुर्ला नेहरूनगर आगार",
          "time": "11:06 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.05482,
          "lng": 72.88507,
          "roadIndex": 338
        },
        {
          "name": "Sion Circle",
          "nameMr": "शीव (सायन) सर्कल",
          "nameHi": "शीव (सायन) सर्कल",
          "time": "11:14 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.03922,
          "lng": 72.86174,
          "roadIndex": 344
        },
        {
          "name": "Dadar Asiad Terminal",
          "nameMr": "दादर आशियाड बस टर्मिनस",
          "nameHi": "दादर आशियाड बस टर्मिनस",
          "time": "11:24 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01778,
          "lng": 72.84782,
          "roadIndex": 349
        }
      ]
    },
    {
      "id": "BUS-105",
      "number": "MH 15 EG 4600",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-MUM",
      "routeName": "Nashik Mahamarg to Mumbai Dadar",
      "routeNameMr": "नाशिक महामार्ग ते मुंबई दादर",
      "destination": "Mumbai Dadar (Asiad)",
      "destinationMr": "मुंबई दादर (आशियाड)",
      "via": "Vilholi, Ghoti, Igatpuri, Kasara, Thane",
      "driverName": "Nandkumar G. Bodke (Emp #4892)",
      "conductorName": "Raju Nikam",
      "scheduledTime": "08:30 AM",
      "currentLat": 19.45691,
      "currentLng": 73.33086,
      "roadIndex": 240,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 5.7,
      "etaMinutes": 7,
      "previousStop": "Asangaon Station Phata",
      "nextStop": "Shahapur Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4600 from Nashik Mahamarg to Mumbai Dadar is en route. Approaching Shahapur Stand in approximately 7 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4600 नाशिक महामार्ग ते मुंबई दादर मार्गावर धावत आहे. पुढील स्थानक शहापूर बस स्थानक सुमारे 7 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4600 मार्गस्थ है। अगला स्टॉप शहापूर बस स्थानक लगभग 7 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Mahamarg",
          "nameMr": "नाशिक महामार्ग स्थानक",
          "nameHi": "नाशिक महामार्ग स्थानक",
          "time": "8:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99201,
          "lng": 73.78499,
          "roadIndex": 0
        },
        {
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "8:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Pathardi Phata",
          "nameMr": "पाथर्डी फाटा",
          "nameHi": "पाथर्डी फाटा",
          "time": "8:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Garware Point (Ambad)",
          "nameMr": "गरवारे पॉईंट (अंबड)",
          "nameHi": "गरवारे पॉईंट (अंबड)",
          "time": "8:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9025,
          "lng": 73.75356,
          "roadIndex": 25
        },
        {
          "name": "Vilholi Phata",
          "nameMr": "विल्होळी फाटा",
          "nameHi": "विल्होळी फाटा",
          "time": "8:57 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88489,
          "lng": 73.69349,
          "roadIndex": 40
        },
        {
          "name": "Gonde MIDC",
          "nameMr": "गोंदे एम.आय.डी.सी.",
          "nameHi": "गोंदे एम.आय.डी.सी.",
          "time": "9:07 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.85254,
          "lng": 73.65988,
          "roadIndex": 52
        },
        {
          "name": "Wadivarhe Phata",
          "nameMr": "वाडीवऱ्हे फाटा",
          "nameHi": "वाडीवऱ्हे फाटा",
          "time": "9:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83456,
          "lng": 73.63075,
          "roadIndex": 61
        },
        {
          "name": "Rayambe Phata",
          "nameMr": "रायंबे फाटा",
          "nameHi": "रायंबे फाटा",
          "time": "9:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Phata",
          "nameMr": "घोटी फाटा",
          "nameHi": "घोटी फाटा",
          "time": "9:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Stand",
          "nameMr": "घोटी बस स्थानक",
          "nameHi": "घोटी बस स्थानक",
          "time": "9:31 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.77076,
          "lng": 73.61391,
          "roadIndex": 111
        },
        {
          "name": "Igatpuri Highway Phata",
          "nameMr": "इगतपुरी हायवे फाटा",
          "nameHi": "इगतपुरी हायवे फाटा",
          "time": "9:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69731,
          "lng": 73.56098,
          "roadIndex": 143
        },
        {
          "name": "Igatpuri Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्थानक",
          "time": "9:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69767,
          "lng": 73.55997,
          "roadIndex": 144
        },
        {
          "name": "Thal Ghat / Kasara Ghat",
          "nameMr": "थळ घाट / कसारा घाट",
          "nameHi": "थळ घाट / कसारा घाट",
          "time": "9:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.66266,
          "lng": 73.5,
          "roadIndex": 176
        },
        {
          "name": "Kasara Phata",
          "nameMr": "कसारा फाटा",
          "nameHi": "कसारा फाटा",
          "time": "10:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.63729,
          "lng": 73.48288,
          "roadIndex": 188
        },
        {
          "name": "Khardi Phata",
          "nameMr": "खर्डी फाटा",
          "nameHi": "खर्डी फाटा",
          "time": "10:21 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.58151,
          "lng": 73.38403,
          "roadIndex": 213
        },
        {
          "name": "Asangaon Station Phata",
          "nameMr": "आसनगाव स्टेशन फाटा",
          "nameHi": "आसनगाव स्टेशन फाटा",
          "time": "10:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.52097,
          "lng": 73.33812,
          "roadIndex": 225
        },
        {
          "name": "Shahapur Stand",
          "nameMr": "शहापूर बस स्थानक",
          "nameHi": "शहापूर बस स्थानक",
          "time": "10:49 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.46132,
          "lng": 73.28548,
          "roadIndex": 258
        },
        {
          "name": "Vashind Phata",
          "nameMr": "वाशिंद फाटा",
          "nameHi": "वाशिंद फाटा",
          "time": "10:57 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.39402,
          "lng": 73.23482,
          "roadIndex": 283
        },
        {
          "name": "Padgha Toll Naka",
          "nameMr": "पडघा टोल नाका",
          "nameHi": "पडघा टोल नाका",
          "time": "11:11 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.36781,
          "lng": 73.18217,
          "roadIndex": 288
        },
        {
          "name": "Bhiwandi Bypass",
          "nameMr": "भिवंडी बायपास",
          "nameHi": "भिवंडी बायपास",
          "time": "11:26 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.28138,
          "lng": 73.10276,
          "roadIndex": 312
        },
        {
          "name": "Majiwada Junction (Thane)",
          "nameMr": "माजीवडा जंक्शन (ठाणे)",
          "nameHi": "माजीवडा जंक्शन (ठाणे)",
          "time": "11:38 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हात नाका",
          "time": "11:46 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Mulund Check Naka",
          "nameMr": "मुलुंड चेक नाका",
          "nameHi": "मुलुंड चेक नाका",
          "time": "11:54 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17486,
          "lng": 72.96863,
          "roadIndex": 332
        },
        {
          "name": "Bhandup Pumping",
          "nameMr": "भांडुप पंपिंग",
          "nameHi": "भांडुप पंपिंग",
          "time": "12:00 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Vikhroli Godrej",
          "nameMr": "विक्रोळी गोदरेज",
          "nameHi": "विक्रोळी गोदरेज",
          "time": "12:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Ghatkopar Stand",
          "nameMr": "घाटकोपर स्थानक",
          "nameHi": "घाटकोपर स्थानक",
          "time": "12:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.08709,
          "lng": 72.9234,
          "roadIndex": 336
        },
        {
          "name": "Kurla Nehrunagar Depot",
          "nameMr": "कुर्ला नेहरूनगर आगार",
          "nameHi": "कुर्ला नेहरूनगर आगार",
          "time": "12:21 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.05482,
          "lng": 72.88507,
          "roadIndex": 338
        },
        {
          "name": "Sion Circle",
          "nameMr": "शीव (सायन) सर्कल",
          "nameHi": "शीव (सायन) सर्कल",
          "time": "12:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.03922,
          "lng": 72.86174,
          "roadIndex": 344
        },
        {
          "name": "Dadar Asiad Terminal",
          "nameMr": "दादर आशियाड बस टर्मिनस",
          "nameHi": "दादर आशियाड बस टर्मिनस",
          "time": "12:39 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01778,
          "lng": 72.84782,
          "roadIndex": 349
        }
      ]
    },
    {
      "id": "BUS-105-4",
      "number": "MH 15 TR 8125",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-MUM",
      "routeName": "Nashik Mahamarg to Mumbai Dadar",
      "routeNameMr": "नाशिक महामार्ग ते मुंबई दादर",
      "destination": "Mumbai Dadar (Asiad)",
      "destinationMr": "मुंबई दादर (आशियाड)",
      "via": "Vilholi, Ghoti, Igatpuri, Kasara, Thane",
      "driverName": "Kiran R. Khairnar (Emp #6177)",
      "conductorName": "Raju Nikam",
      "scheduledTime": "09:45 AM",
      "currentLat": 19.69731,
      "currentLng": 73.56098,
      "roadIndex": 143,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "64% (Diesel)",
      "distanceFromStop": 0.1,
      "etaMinutes": 2,
      "previousStop": "Igatpuri Highway Phata",
      "nextStop": "Igatpuri Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 8125 from Nashik Mahamarg to Mumbai Dadar is en route. Approaching Igatpuri Stand in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 8125 नाशिक महामार्ग ते मुंबई दादर मार्गावर धावत आहे. पुढील स्थानक इगतपुरी बस स्थानक सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 8125 मार्गस्थ है। अगला स्टॉप इगतपुरी बस स्थानक लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Mahamarg",
          "nameMr": "नाशिक महामार्ग स्थानक",
          "nameHi": "नाशिक महामार्ग स्थानक",
          "time": "9:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99201,
          "lng": 73.78499,
          "roadIndex": 0
        },
        {
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "9:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Pathardi Phata",
          "nameMr": "पाथर्डी फाटा",
          "nameHi": "पाथर्डी फाटा",
          "time": "9:54 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Garware Point (Ambad)",
          "nameMr": "गरवारे पॉईंट (अंबड)",
          "nameHi": "गरवारे पॉईंट (अंबड)",
          "time": "10:02 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9025,
          "lng": 73.75356,
          "roadIndex": 25
        },
        {
          "name": "Vilholi Phata",
          "nameMr": "विल्होळी फाटा",
          "nameHi": "विल्होळी फाटा",
          "time": "10:12 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88489,
          "lng": 73.69349,
          "roadIndex": 40
        },
        {
          "name": "Gonde MIDC",
          "nameMr": "गोंदे एम.आय.डी.सी.",
          "nameHi": "गोंदे एम.आय.डी.सी.",
          "time": "10:22 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.85254,
          "lng": 73.65988,
          "roadIndex": 52
        },
        {
          "name": "Wadivarhe Phata",
          "nameMr": "वाडीवऱ्हे फाटा",
          "nameHi": "वाडीवऱ्हे फाटा",
          "time": "10:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83456,
          "lng": 73.63075,
          "roadIndex": 61
        },
        {
          "name": "Rayambe Phata",
          "nameMr": "रायंबे फाटा",
          "nameHi": "रायंबे फाटा",
          "time": "10:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Phata",
          "nameMr": "घोटी फाटा",
          "nameHi": "घोटी फाटा",
          "time": "10:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Stand",
          "nameMr": "घोटी बस स्थानक",
          "nameHi": "घोटी बस स्थानक",
          "time": "10:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.77076,
          "lng": 73.61391,
          "roadIndex": 111
        },
        {
          "name": "Igatpuri Highway Phata",
          "nameMr": "इगतपुरी हायवे फाटा",
          "nameHi": "इगतपुरी हायवे फाटा",
          "time": "10:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69731,
          "lng": 73.56098,
          "roadIndex": 143
        },
        {
          "name": "Igatpuri Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्थानक",
          "time": "11:02 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.69767,
          "lng": 73.55997,
          "roadIndex": 144
        },
        {
          "name": "Thal Ghat / Kasara Ghat",
          "nameMr": "थळ घाट / कसारा घाट",
          "nameHi": "थळ घाट / कसारा घाट",
          "time": "11:14 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.66266,
          "lng": 73.5,
          "roadIndex": 176
        },
        {
          "name": "Kasara Phata",
          "nameMr": "कसारा फाटा",
          "nameHi": "कसारा फाटा",
          "time": "11:24 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.63729,
          "lng": 73.48288,
          "roadIndex": 188
        },
        {
          "name": "Khardi Phata",
          "nameMr": "खर्डी फाटा",
          "nameHi": "खर्डी फाटा",
          "time": "11:36 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.58151,
          "lng": 73.38403,
          "roadIndex": 213
        },
        {
          "name": "Asangaon Station Phata",
          "nameMr": "आसनगाव स्टेशन फाटा",
          "nameHi": "आसनगाव स्टेशन फाटा",
          "time": "11:54 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.52097,
          "lng": 73.33812,
          "roadIndex": 225
        },
        {
          "name": "Shahapur Stand",
          "nameMr": "शहापूर बस स्थानक",
          "nameHi": "शहापूर बस स्थानक",
          "time": "12:04 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.46132,
          "lng": 73.28548,
          "roadIndex": 258
        },
        {
          "name": "Vashind Phata",
          "nameMr": "वाशिंद फाटा",
          "nameHi": "वाशिंद फाटा",
          "time": "12:12 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.39402,
          "lng": 73.23482,
          "roadIndex": 283
        },
        {
          "name": "Padgha Toll Naka",
          "nameMr": "पडघा टोल नाका",
          "nameHi": "पडघा टोल नाका",
          "time": "12:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.36781,
          "lng": 73.18217,
          "roadIndex": 288
        },
        {
          "name": "Bhiwandi Bypass",
          "nameMr": "भिवंडी बायपास",
          "nameHi": "भिवंडी बायपास",
          "time": "12:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.28138,
          "lng": 73.10276,
          "roadIndex": 312
        },
        {
          "name": "Majiwada Junction (Thane)",
          "nameMr": "माजीवडा जंक्शन (ठाणे)",
          "nameHi": "माजीवडा जंक्शन (ठाणे)",
          "time": "12:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हात नाका",
          "time": "1:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Mulund Check Naka",
          "nameMr": "मुलुंड चेक नाका",
          "nameHi": "मुलुंड चेक नाका",
          "time": "1:09 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17486,
          "lng": 72.96863,
          "roadIndex": 332
        },
        {
          "name": "Bhandup Pumping",
          "nameMr": "भांडुप पंपिंग",
          "nameHi": "भांडुप पंपिंग",
          "time": "1:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Vikhroli Godrej",
          "nameMr": "विक्रोळी गोदरेज",
          "nameHi": "विक्रोळी गोदरेज",
          "time": "1:21 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Ghatkopar Stand",
          "nameMr": "घाटकोपर स्थानक",
          "nameHi": "घाटकोपर स्थानक",
          "time": "1:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.08709,
          "lng": 72.9234,
          "roadIndex": 336
        },
        {
          "name": "Kurla Nehrunagar Depot",
          "nameMr": "कुर्ला नेहरूनगर आगार",
          "nameHi": "कुर्ला नेहरूनगर आगार",
          "time": "1:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.05482,
          "lng": 72.88507,
          "roadIndex": 338
        },
        {
          "name": "Sion Circle",
          "nameMr": "शीव (सायन) सर्कल",
          "nameHi": "शीव (सायन) सर्कल",
          "time": "1:44 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.03922,
          "lng": 72.86174,
          "roadIndex": 344
        },
        {
          "name": "Dadar Asiad Terminal",
          "nameMr": "दादर आशियाड बस टर्मिनस",
          "nameHi": "दादर आशियाड बस टर्मिनस",
          "time": "1:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01778,
          "lng": 72.84782,
          "roadIndex": 349
        }
      ]
    },
    {
      "id": "BUS-105-5",
      "number": "MH 15 EF 3100",
      "type": "Parivartan (Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#C2185B",
      "routeId": "R-NSK-MUM",
      "routeName": "Nashik Mahamarg to Mumbai Dadar",
      "routeNameMr": "नाशिक महामार्ग ते मुंबई दादर",
      "destination": "Mumbai Dadar (Asiad)",
      "destinationMr": "मुंबई दादर (आशियाड)",
      "via": "Vilholi, Ghoti, Igatpuri, Kasara, Thane",
      "driverName": "Arun P. Matsagar (Emp #5112)",
      "conductorName": "Raju Nikam",
      "scheduledTime": "11:00 AM",
      "currentLat": 19.84318,
      "currentLng": 73.64148,
      "roadIndex": 56,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 1.6,
      "etaMinutes": 2,
      "previousStop": "Gonde MIDC",
      "nextStop": "Wadivarhe Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EF 3100 from Nashik Mahamarg to Mumbai Dadar is en route. Approaching Wadivarhe Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EF 3100 नाशिक महामार्ग ते मुंबई दादर मार्गावर धावत आहे. पुढील स्थानक वाडीवऱ्हे फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EF 3100 मार्गस्थ है। अगला स्टॉप वाडीवऱ्हे फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Mahamarg",
          "nameMr": "नाशिक महामार्ग स्थानक",
          "nameHi": "नाशिक महामार्ग स्थानक",
          "time": "11:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99201,
          "lng": 73.78499,
          "roadIndex": 0
        },
        {
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "11:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Pathardi Phata",
          "nameMr": "पाथर्डी फाटा",
          "nameHi": "पाथर्डी फाटा",
          "time": "11:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Garware Point (Ambad)",
          "nameMr": "गरवारे पॉईंट (अंबड)",
          "nameHi": "गरवारे पॉईंट (अंबड)",
          "time": "11:17 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9025,
          "lng": 73.75356,
          "roadIndex": 25
        },
        {
          "name": "Vilholi Phata",
          "nameMr": "विल्होळी फाटा",
          "nameHi": "विल्होळी फाटा",
          "time": "11:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88489,
          "lng": 73.69349,
          "roadIndex": 40
        },
        {
          "name": "Gonde MIDC",
          "nameMr": "गोंदे एम.आय.डी.सी.",
          "nameHi": "गोंदे एम.आय.डी.सी.",
          "time": "11:37 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.85254,
          "lng": 73.65988,
          "roadIndex": 52
        },
        {
          "name": "Wadivarhe Phata",
          "nameMr": "वाडीवऱ्हे फाटा",
          "nameHi": "वाडीवऱ्हे फाटा",
          "time": "11:44 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.83456,
          "lng": 73.63075,
          "roadIndex": 61
        },
        {
          "name": "Rayambe Phata",
          "nameMr": "रायंबे फाटा",
          "nameHi": "रायंबे फाटा",
          "time": "11:50 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Phata",
          "nameMr": "घोटी फाटा",
          "nameHi": "घोटी फाटा",
          "time": "11:56 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Stand",
          "nameMr": "घोटी बस स्थानक",
          "nameHi": "घोटी बस स्थानक",
          "time": "12:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.77076,
          "lng": 73.61391,
          "roadIndex": 111
        },
        {
          "name": "Igatpuri Highway Phata",
          "nameMr": "इगतपुरी हायवे फाटा",
          "nameHi": "इगतपुरी हायवे फाटा",
          "time": "12:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69731,
          "lng": 73.56098,
          "roadIndex": 143
        },
        {
          "name": "Igatpuri Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्थानक",
          "time": "12:17 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69767,
          "lng": 73.55997,
          "roadIndex": 144
        },
        {
          "name": "Thal Ghat / Kasara Ghat",
          "nameMr": "थळ घाट / कसारा घाट",
          "nameHi": "थळ घाट / कसारा घाट",
          "time": "12:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.66266,
          "lng": 73.5,
          "roadIndex": 176
        },
        {
          "name": "Kasara Phata",
          "nameMr": "कसारा फाटा",
          "nameHi": "कसारा फाटा",
          "time": "12:39 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.63729,
          "lng": 73.48288,
          "roadIndex": 188
        },
        {
          "name": "Khardi Phata",
          "nameMr": "खर्डी फाटा",
          "nameHi": "खर्डी फाटा",
          "time": "12:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.58151,
          "lng": 73.38403,
          "roadIndex": 213
        },
        {
          "name": "Asangaon Station Phata",
          "nameMr": "आसनगाव स्टेशन फाटा",
          "nameHi": "आसनगाव स्टेशन फाटा",
          "time": "1:09 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.52097,
          "lng": 73.33812,
          "roadIndex": 225
        },
        {
          "name": "Shahapur Stand",
          "nameMr": "शहापूर बस स्थानक",
          "nameHi": "शहापूर बस स्थानक",
          "time": "1:19 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.46132,
          "lng": 73.28548,
          "roadIndex": 258
        },
        {
          "name": "Vashind Phata",
          "nameMr": "वाशिंद फाटा",
          "nameHi": "वाशिंद फाटा",
          "time": "1:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.39402,
          "lng": 73.23482,
          "roadIndex": 283
        },
        {
          "name": "Padgha Toll Naka",
          "nameMr": "पडघा टोल नाका",
          "nameHi": "पडघा टोल नाका",
          "time": "1:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.36781,
          "lng": 73.18217,
          "roadIndex": 288
        },
        {
          "name": "Bhiwandi Bypass",
          "nameMr": "भिवंडी बायपास",
          "nameHi": "भिवंडी बायपास",
          "time": "1:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.28138,
          "lng": 73.10276,
          "roadIndex": 312
        },
        {
          "name": "Majiwada Junction (Thane)",
          "nameMr": "माजीवडा जंक्शन (ठाणे)",
          "nameHi": "माजीवडा जंक्शन (ठाणे)",
          "time": "2:08 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हात नाका",
          "time": "2:16 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Mulund Check Naka",
          "nameMr": "मुलुंड चेक नाका",
          "nameHi": "मुलुंड चेक नाका",
          "time": "2:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17486,
          "lng": 72.96863,
          "roadIndex": 332
        },
        {
          "name": "Bhandup Pumping",
          "nameMr": "भांडुप पंपिंग",
          "nameHi": "भांडुप पंपिंग",
          "time": "2:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Vikhroli Godrej",
          "nameMr": "विक्रोळी गोदरेज",
          "nameHi": "विक्रोळी गोदरेज",
          "time": "2:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Ghatkopar Stand",
          "nameMr": "घाटकोपर स्थानक",
          "nameHi": "घाटकोपर स्थानक",
          "time": "2:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.08709,
          "lng": 72.9234,
          "roadIndex": 336
        },
        {
          "name": "Kurla Nehrunagar Depot",
          "nameMr": "कुर्ला नेहरूनगर आगार",
          "nameHi": "कुर्ला नेहरूनगर आगार",
          "time": "2:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.05482,
          "lng": 72.88507,
          "roadIndex": 338
        },
        {
          "name": "Sion Circle",
          "nameMr": "शीव (सायन) सर्कल",
          "nameHi": "शीव (सायन) सर्कल",
          "time": "2:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.03922,
          "lng": 72.86174,
          "roadIndex": 344
        },
        {
          "name": "Dadar Asiad Terminal",
          "nameMr": "दादर आशियाड बस टर्मिनस",
          "nameHi": "दादर आशियाड बस टर्मिनस",
          "time": "3:09 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01778,
          "lng": 72.84782,
          "roadIndex": 349
        }
      ]
    },
    {
      "id": "BUS-105-6",
      "number": "MH 15 TR 8140",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-MUM",
      "routeName": "Nashik Mahamarg to Mumbai Dadar",
      "routeNameMr": "नाशिक महामार्ग ते मुंबई दादर",
      "destination": "Mumbai Dadar (Asiad)",
      "destinationMr": "मुंबई दादर (आशियाड)",
      "via": "Vilholi, Ghoti, Igatpuri, Kasara, Thane",
      "driverName": "Sharad V. Bagul (Emp #6290)",
      "conductorName": "Raju Nikam",
      "scheduledTime": "12:15 PM",
      "currentLat": 19.98732,
      "currentLng": 73.78383,
      "roadIndex": 2,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "80% (38/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "50% (Diesel)",
      "distanceFromStop": 0,
      "etaMinutes": 2,
      "previousStop": "Mumbai Naka",
      "nextStop": "Pathardi Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 8140 from Nashik Mahamarg to Mumbai Dadar is en route. Approaching Pathardi Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 8140 नाशिक महामार्ग ते मुंबई दादर मार्गावर धावत आहे. पुढील स्थानक पाथर्डी फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 8140 मार्गस्थ है। अगला स्टॉप पाथर्डी फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik Mahamarg",
          "nameMr": "नाशिक महामार्ग स्थानक",
          "nameHi": "नाशिक महामार्ग स्थानक",
          "time": "12:15 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99201,
          "lng": 73.78499,
          "roadIndex": 0
        },
        {
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "12:20 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Pathardi Phata",
          "nameMr": "पाथर्डी फाटा",
          "nameHi": "पाथर्डी फाटा",
          "time": "12:24 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.98732,
          "lng": 73.78383,
          "roadIndex": 2
        },
        {
          "name": "Garware Point (Ambad)",
          "nameMr": "गरवारे पॉईंट (अंबड)",
          "nameHi": "गरवारे पॉईंट (अंबड)",
          "time": "12:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9025,
          "lng": 73.75356,
          "roadIndex": 25
        },
        {
          "name": "Vilholi Phata",
          "nameMr": "विल्होळी फाटा",
          "nameHi": "विल्होळी फाटा",
          "time": "12:42 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88489,
          "lng": 73.69349,
          "roadIndex": 40
        },
        {
          "name": "Gonde MIDC",
          "nameMr": "गोंदे एम.आय.डी.सी.",
          "nameHi": "गोंदे एम.आय.डी.सी.",
          "time": "12:52 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.85254,
          "lng": 73.65988,
          "roadIndex": 52
        },
        {
          "name": "Wadivarhe Phata",
          "nameMr": "वाडीवऱ्हे फाटा",
          "nameHi": "वाडीवऱ्हे फाटा",
          "time": "12:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.83456,
          "lng": 73.63075,
          "roadIndex": 61
        },
        {
          "name": "Rayambe Phata",
          "nameMr": "रायंबे फाटा",
          "nameHi": "रायंबे फाटा",
          "time": "1:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Phata",
          "nameMr": "घोटी फाटा",
          "nameHi": "घोटी फाटा",
          "time": "1:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.78384,
          "lng": 73.61611,
          "roadIndex": 106
        },
        {
          "name": "Ghoti Stand",
          "nameMr": "घोटी बस स्थानक",
          "nameHi": "घोटी बस स्थानक",
          "time": "1:16 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.77076,
          "lng": 73.61391,
          "roadIndex": 111
        },
        {
          "name": "Igatpuri Highway Phata",
          "nameMr": "इगतपुरी हायवे फाटा",
          "nameHi": "इगतपुरी हायवे फाटा",
          "time": "1:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69731,
          "lng": 73.56098,
          "roadIndex": 143
        },
        {
          "name": "Igatpuri Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्थानक",
          "time": "1:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.69767,
          "lng": 73.55997,
          "roadIndex": 144
        },
        {
          "name": "Thal Ghat / Kasara Ghat",
          "nameMr": "थळ घाट / कसारा घाट",
          "nameHi": "थळ घाट / कसारा घाट",
          "time": "1:44 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.66266,
          "lng": 73.5,
          "roadIndex": 176
        },
        {
          "name": "Kasara Phata",
          "nameMr": "कसारा फाटा",
          "nameHi": "कसारा फाटा",
          "time": "1:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.63729,
          "lng": 73.48288,
          "roadIndex": 188
        },
        {
          "name": "Khardi Phata",
          "nameMr": "खर्डी फाटा",
          "nameHi": "खर्डी फाटा",
          "time": "2:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.58151,
          "lng": 73.38403,
          "roadIndex": 213
        },
        {
          "name": "Asangaon Station Phata",
          "nameMr": "आसनगाव स्टेशन फाटा",
          "nameHi": "आसनगाव स्टेशन फाटा",
          "time": "2:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.52097,
          "lng": 73.33812,
          "roadIndex": 225
        },
        {
          "name": "Shahapur Stand",
          "nameMr": "शहापूर बस स्थानक",
          "nameHi": "शहापूर बस स्थानक",
          "time": "2:34 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.46132,
          "lng": 73.28548,
          "roadIndex": 258
        },
        {
          "name": "Vashind Phata",
          "nameMr": "वाशिंद फाटा",
          "nameHi": "वाशिंद फाटा",
          "time": "2:42 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.39402,
          "lng": 73.23482,
          "roadIndex": 283
        },
        {
          "name": "Padgha Toll Naka",
          "nameMr": "पडघा टोल नाका",
          "nameHi": "पडघा टोल नाका",
          "time": "2:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.36781,
          "lng": 73.18217,
          "roadIndex": 288
        },
        {
          "name": "Bhiwandi Bypass",
          "nameMr": "भिवंडी बायपास",
          "nameHi": "भिवंडी बायपास",
          "time": "3:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.28138,
          "lng": 73.10276,
          "roadIndex": 312
        },
        {
          "name": "Majiwada Junction (Thane)",
          "nameMr": "माजीवडा जंक्शन (ठाणे)",
          "nameHi": "माजीवडा जंक्शन (ठाणे)",
          "time": "3:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हात नाका",
          "time": "3:31 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.21726,
          "lng": 72.97839,
          "roadIndex": 327
        },
        {
          "name": "Mulund Check Naka",
          "nameMr": "मुलुंड चेक नाका",
          "nameHi": "मुलुंड चेक नाका",
          "time": "3:39 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.17486,
          "lng": 72.96863,
          "roadIndex": 332
        },
        {
          "name": "Bhandup Pumping",
          "nameMr": "भांडुप पंपिंग",
          "nameHi": "भांडुप पंपिंग",
          "time": "3:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Vikhroli Godrej",
          "nameMr": "विक्रोळी गोदरेज",
          "nameHi": "विक्रोळी गोदरेज",
          "time": "3:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.12753,
          "lng": 72.94022,
          "roadIndex": 335
        },
        {
          "name": "Ghatkopar Stand",
          "nameMr": "घाटकोपर स्थानक",
          "nameHi": "घाटकोपर स्थानक",
          "time": "3:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.08709,
          "lng": 72.9234,
          "roadIndex": 336
        },
        {
          "name": "Kurla Nehrunagar Depot",
          "nameMr": "कुर्ला नेहरूनगर आगार",
          "nameHi": "कुर्ला नेहरूनगर आगार",
          "time": "4:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.05482,
          "lng": 72.88507,
          "roadIndex": 338
        },
        {
          "name": "Sion Circle",
          "nameMr": "शीव (सायन) सर्कल",
          "nameHi": "शीव (सायन) सर्कल",
          "time": "4:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.03922,
          "lng": 72.86174,
          "roadIndex": 344
        },
        {
          "name": "Dadar Asiad Terminal",
          "nameMr": "दादर आशियाड बस टर्मिनस",
          "nameHi": "दादर आशियाड बस टर्मिनस",
          "time": "4:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.01778,
          "lng": 72.84782,
          "roadIndex": 349
        }
      ]
    },
    {
      "id": "BUS-106-1",
      "number": "MH 15 TR 9011",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-CSN",
      "routeName": "Nashik CBS to Chh. Sambhaji Nagar",
      "routeNameMr": "नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर",
      "destination": "Chh. Sambhaji Nagar Central",
      "destinationMr": "छत्रपती संभाजी नगर मध्यवर्ती",
      "via": "Niphad, Yeola, Vaijapur, Waluj",
      "driverName": "Santosh K. Pardeshi (Emp #6022)",
      "conductorName": "Arun Gaikwad",
      "scheduledTime": "07:00 AM",
      "currentLat": 19.87031,
      "currentLng": 75.2902,
      "roadIndex": 200,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "85% (Diesel)",
      "distanceFromStop": 1.6,
      "etaMinutes": 2,
      "previousStop": "Pandharpur Phata (Waluj)",
      "nextStop": "Railway Station Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 9011 from Nashik CBS to Chh. Sambhaji Nagar is en route. Approaching Railway Station Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 9011 नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर मार्गावर धावत आहे. पुढील स्थानक रेल्वे स्टेशन फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 9011 मार्गस्थ है। अगला स्टॉप रेल्वे स्टेशन फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "7:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "7:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99783,
          "lng": 73.79026,
          "roadIndex": 1
        },
        {
          "name": "Chandori Phata",
          "nameMr": "चांदोरी फाटा",
          "nameHi": "चांदोरी फाटा",
          "time": "7:33 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 29
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "7:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08288,
          "lng": 74.10733,
          "roadIndex": 48
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "8:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09908,
          "lng": 74.22244,
          "roadIndex": 68
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "8:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10321,
          "lng": 74.22618,
          "roadIndex": 70
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "8:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04225,
          "lng": 74.48904,
          "roadIndex": 101
        },
        {
          "name": "Andarsul Phata",
          "nameMr": "अंदरसूल फाटा",
          "nameHi": "अंदरसूल फाटा",
          "time": "8:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01687,
          "lng": 74.56484,
          "roadIndex": 110
        },
        {
          "name": "Nagarsul Railway Phata",
          "nameMr": "नगरसूल रेल्वे फाटा",
          "nameHi": "नगरसूल रेल्वे फाटा",
          "time": "9:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00036,
          "lng": 74.6031,
          "roadIndex": 117
        },
        {
          "name": "Tarapur Phata",
          "nameMr": "तारापूर फाटा",
          "nameHi": "तारापूर फाटा",
          "time": "9:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96806,
          "lng": 74.64304,
          "roadIndex": 122
        },
        {
          "name": "Rotegaon Phata",
          "nameMr": "रोटेगाव फाटा",
          "nameHi": "रोटेगाव फाटा",
          "time": "9:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94982,
          "lng": 74.6926,
          "roadIndex": 127
        },
        {
          "name": "Vaijapur Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापूर बस स्थानक",
          "time": "9:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92526,
          "lng": 74.7291,
          "roadIndex": 133
        },
        {
          "name": "Ladgaon Phata",
          "nameMr": "लाडगाव फाटा",
          "nameHi": "लाडगाव फाटा",
          "time": "9:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92273,
          "lng": 74.81319,
          "roadIndex": 138
        },
        {
          "name": "Shivoor Phata",
          "nameMr": "शिवूर फाटा",
          "nameHi": "शिवूर फाटा",
          "time": "9:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92677,
          "lng": 74.89528,
          "roadIndex": 148
        },
        {
          "name": "Khandala Phata",
          "nameMr": "खंडाळा फाटा",
          "nameHi": "खंडाळा फाटा",
          "time": "9:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92945,
          "lng": 74.95492,
          "roadIndex": 158
        },
        {
          "name": "Lasur Station Phata",
          "nameMr": "लासूर स्टेशन फाटा",
          "nameHi": "लासूर स्टेशन फाटा",
          "time": "10:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.90665,
          "lng": 75.03898,
          "roadIndex": 167
        },
        {
          "name": "Maliwada Phata",
          "nameMr": "माळीवाडा फाटा",
          "nameHi": "माळीवाडा फाटा",
          "time": "10:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.89794,
          "lng": 75.11965,
          "roadIndex": 174
        },
        {
          "name": "Daulatabad T-Point",
          "nameMr": "दौलताबाद टी-पॉइंट",
          "nameHi": "दौलताबाद टी-पॉइंट",
          "time": "10:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88198,
          "lng": 75.20575,
          "roadIndex": 180
        },
        {
          "name": "Waluj MIDC Gate",
          "nameMr": "वाळूज एम.आय.डी.सी. गेट",
          "nameHi": "वाळूज एम.आय.डी.सी. गेट",
          "time": "10:40 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8554,
          "lng": 75.24448,
          "roadIndex": 190
        },
        {
          "name": "CIDCO Waluj Mahanagar",
          "nameMr": "सिडको वाळूज महानगर",
          "nameHi": "सिडको वाळूज महानगर",
          "time": "10:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86008,
          "lng": 75.25651,
          "roadIndex": 194
        },
        {
          "name": "Pandharpur Phata (Waluj)",
          "nameMr": "पंढरपूर फाटा",
          "nameHi": "पंढरपूर फाटा",
          "time": "10:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86757,
          "lng": 75.28633,
          "roadIndex": 199
        },
        {
          "name": "Railway Station Phata",
          "nameMr": "रेल्वे स्टेशन फाटा",
          "nameHi": "रेल्वे स्टेशन फाटा",
          "time": "10:56 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.8772,
          "lng": 75.30409,
          "roadIndex": 202
        },
        {
          "name": "Kranti Chowk",
          "nameMr": "क्रांती चौक",
          "nameHi": "क्रांती चौक",
          "time": "11:01 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87217,
          "lng": 75.32252,
          "roadIndex": 204
        },
        {
          "name": "Chh. Sambhaji Nagar CBS",
          "nameMr": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "nameHi": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "time": "11:07 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87813,
          "lng": 75.32797,
          "roadIndex": 208
        }
      ]
    },
    {
      "id": "BUS-106-2",
      "number": "MH 15 AK 7020",
      "type": "Hirkani (Semi Luxury)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-CSN",
      "routeName": "Nashik CBS to Chh. Sambhaji Nagar",
      "routeNameMr": "नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर",
      "destination": "Chh. Sambhaji Nagar Central",
      "destinationMr": "छत्रपती संभाजी नगर मध्यवर्ती",
      "via": "Niphad, Yeola, Vaijapur, Waluj",
      "driverName": "Manohar S. Pagare (Emp #5421)",
      "conductorName": "Arun Gaikwad",
      "scheduledTime": "08:30 AM",
      "currentLat": 19.90855,
      "currentLng": 75.06924,
      "roadIndex": 170,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "78% (Diesel)",
      "distanceFromStop": 5.5,
      "etaMinutes": 7,
      "previousStop": "Lasur Station Phata",
      "nextStop": "Maliwada Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 7020 from Nashik CBS to Chh. Sambhaji Nagar is en route. Approaching Maliwada Phata in approximately 7 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 7020 नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर मार्गावर धावत आहे. पुढील स्थानक माळीवाडा फाटा सुमारे 7 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 7020 मार्गस्थ है। अगला स्टॉप माळीवाडा फाटा लगभग 7 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "8:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "8:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99783,
          "lng": 73.79026,
          "roadIndex": 1
        },
        {
          "name": "Chandori Phata",
          "nameMr": "चांदोरी फाटा",
          "nameHi": "चांदोरी फाटा",
          "time": "9:03 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 29
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "9:23 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08288,
          "lng": 74.10733,
          "roadIndex": 48
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "9:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09908,
          "lng": 74.22244,
          "roadIndex": 68
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "9:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10321,
          "lng": 74.22618,
          "roadIndex": 70
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "10:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04225,
          "lng": 74.48904,
          "roadIndex": 101
        },
        {
          "name": "Andarsul Phata",
          "nameMr": "अंदरसूल फाटा",
          "nameHi": "अंदरसूल फाटा",
          "time": "10:23 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01687,
          "lng": 74.56484,
          "roadIndex": 110
        },
        {
          "name": "Nagarsul Railway Phata",
          "nameMr": "नगरसूल रेल्वे फाटा",
          "nameHi": "नगरसूल रेल्वे फाटा",
          "time": "10:31 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00036,
          "lng": 74.6031,
          "roadIndex": 117
        },
        {
          "name": "Tarapur Phata",
          "nameMr": "तारापूर फाटा",
          "nameHi": "तारापूर फाटा",
          "time": "10:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96806,
          "lng": 74.64304,
          "roadIndex": 122
        },
        {
          "name": "Rotegaon Phata",
          "nameMr": "रोटेगाव फाटा",
          "nameHi": "रोटेगाव फाटा",
          "time": "10:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94982,
          "lng": 74.6926,
          "roadIndex": 127
        },
        {
          "name": "Vaijapur Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापूर बस स्थानक",
          "time": "10:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92526,
          "lng": 74.7291,
          "roadIndex": 133
        },
        {
          "name": "Ladgaon Phata",
          "nameMr": "लाडगाव फाटा",
          "nameHi": "लाडगाव फाटा",
          "time": "11:06 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92273,
          "lng": 74.81319,
          "roadIndex": 138
        },
        {
          "name": "Shivoor Phata",
          "nameMr": "शिवूर फाटा",
          "nameHi": "शिवूर फाटा",
          "time": "11:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92677,
          "lng": 74.89528,
          "roadIndex": 148
        },
        {
          "name": "Khandala Phata",
          "nameMr": "खंडाळा फाटा",
          "nameHi": "खंडाळा फाटा",
          "time": "11:28 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92945,
          "lng": 74.95492,
          "roadIndex": 158
        },
        {
          "name": "Lasur Station Phata",
          "nameMr": "लासूर स्टेशन फाटा",
          "nameHi": "लासूर स्टेशन फाटा",
          "time": "11:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.90665,
          "lng": 75.03898,
          "roadIndex": 167
        },
        {
          "name": "Maliwada Phata",
          "nameMr": "माळीवाडा फाटा",
          "nameHi": "माळीवाडा फाटा",
          "time": "11:48 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.89794,
          "lng": 75.11965,
          "roadIndex": 174
        },
        {
          "name": "Daulatabad T-Point",
          "nameMr": "दौलताबाद टी-पॉइंट",
          "nameHi": "दौलताबाद टी-पॉइंट",
          "time": "12:00 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88198,
          "lng": 75.20575,
          "roadIndex": 180
        },
        {
          "name": "Waluj MIDC Gate",
          "nameMr": "वाळूज एम.आय.डी.सी. गेट",
          "nameHi": "वाळूज एम.आय.डी.सी. गेट",
          "time": "12:10 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8554,
          "lng": 75.24448,
          "roadIndex": 190
        },
        {
          "name": "CIDCO Waluj Mahanagar",
          "nameMr": "सिडको वाळूज महानगर",
          "nameHi": "सिडको वाळूज महानगर",
          "time": "12:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86008,
          "lng": 75.25651,
          "roadIndex": 194
        },
        {
          "name": "Pandharpur Phata (Waluj)",
          "nameMr": "पंढरपूर फाटा",
          "nameHi": "पंढरपूर फाटा",
          "time": "12:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86757,
          "lng": 75.28633,
          "roadIndex": 199
        },
        {
          "name": "Railway Station Phata",
          "nameMr": "रेल्वे स्टेशन फाटा",
          "nameHi": "रेल्वे स्टेशन फाटा",
          "time": "12:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8772,
          "lng": 75.30409,
          "roadIndex": 202
        },
        {
          "name": "Kranti Chowk",
          "nameMr": "क्रांती चौक",
          "nameHi": "क्रांती चौक",
          "time": "12:31 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87217,
          "lng": 75.32252,
          "roadIndex": 204
        },
        {
          "name": "Chh. Sambhaji Nagar CBS",
          "nameMr": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "nameHi": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "time": "12:37 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87813,
          "lng": 75.32797,
          "roadIndex": 208
        }
      ]
    },
    {
      "id": "BUS-106",
      "number": "MH 15 EG 4700",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-CSN",
      "routeName": "Nashik CBS to Chh. Sambhaji Nagar",
      "routeNameMr": "नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर",
      "destination": "Chh. Sambhaji Nagar Central",
      "destinationMr": "छत्रपती संभाजी नगर मध्यवर्ती",
      "via": "Niphad, Yeola, Vaijapur, Waluj",
      "driverName": "Jagannath D. Shinde (Emp #4788)",
      "conductorName": "Arun Gaikwad",
      "scheduledTime": "10:00 AM",
      "currentLat": 19.93406,
      "currentLng": 74.71014,
      "roadIndex": 130,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 2.3,
      "etaMinutes": 3,
      "previousStop": "Rotegaon Phata",
      "nextStop": "Vaijapur Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4700 from Nashik CBS to Chh. Sambhaji Nagar is en route. Approaching Vaijapur Stand in approximately 3 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4700 नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर मार्गावर धावत आहे. पुढील स्थानक वैजापूर बस स्थानक सुमारे 3 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4700 मार्गस्थ है। अगला स्टॉप वैजापूर बस स्थानक लगभग 3 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "10:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "10:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99783,
          "lng": 73.79026,
          "roadIndex": 1
        },
        {
          "name": "Chandori Phata",
          "nameMr": "चांदोरी फाटा",
          "nameHi": "चांदोरी फाटा",
          "time": "10:33 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 29
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "10:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08288,
          "lng": 74.10733,
          "roadIndex": 48
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "11:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09908,
          "lng": 74.22244,
          "roadIndex": 68
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "11:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10321,
          "lng": 74.22618,
          "roadIndex": 70
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "11:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04225,
          "lng": 74.48904,
          "roadIndex": 101
        },
        {
          "name": "Andarsul Phata",
          "nameMr": "अंदरसूल फाटा",
          "nameHi": "अंदरसूल फाटा",
          "time": "11:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01687,
          "lng": 74.56484,
          "roadIndex": 110
        },
        {
          "name": "Nagarsul Railway Phata",
          "nameMr": "नगरसूल रेल्वे फाटा",
          "nameHi": "नगरसूल रेल्वे फाटा",
          "time": "12:01 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00036,
          "lng": 74.6031,
          "roadIndex": 117
        },
        {
          "name": "Tarapur Phata",
          "nameMr": "तारापूर फाटा",
          "nameHi": "तारापूर फाटा",
          "time": "12:09 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96806,
          "lng": 74.64304,
          "roadIndex": 122
        },
        {
          "name": "Rotegaon Phata",
          "nameMr": "रोटेगाव फाटा",
          "nameHi": "रोटेगाव फाटा",
          "time": "12:18 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94982,
          "lng": 74.6926,
          "roadIndex": 127
        },
        {
          "name": "Vaijapur Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापूर बस स्थानक",
          "time": "12:26 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.92526,
          "lng": 74.7291,
          "roadIndex": 133
        },
        {
          "name": "Ladgaon Phata",
          "nameMr": "लाडगाव फाटा",
          "nameHi": "लाडगाव फाटा",
          "time": "12:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92273,
          "lng": 74.81319,
          "roadIndex": 138
        },
        {
          "name": "Shivoor Phata",
          "nameMr": "शिवूर फाटा",
          "nameHi": "शिवूर फाटा",
          "time": "12:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92677,
          "lng": 74.89528,
          "roadIndex": 148
        },
        {
          "name": "Khandala Phata",
          "nameMr": "खंडाळा फाटा",
          "nameHi": "खंडाळा फाटा",
          "time": "12:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92945,
          "lng": 74.95492,
          "roadIndex": 158
        },
        {
          "name": "Lasur Station Phata",
          "nameMr": "लासूर स्टेशन फाटा",
          "nameHi": "लासूर स्टेशन फाटा",
          "time": "1:08 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.90665,
          "lng": 75.03898,
          "roadIndex": 167
        },
        {
          "name": "Maliwada Phata",
          "nameMr": "माळीवाडा फाटा",
          "nameHi": "माळीवाडा फाटा",
          "time": "1:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.89794,
          "lng": 75.11965,
          "roadIndex": 174
        },
        {
          "name": "Daulatabad T-Point",
          "nameMr": "दौलताबाद टी-पॉइंट",
          "nameHi": "दौलताबाद टी-पॉइंट",
          "time": "1:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88198,
          "lng": 75.20575,
          "roadIndex": 180
        },
        {
          "name": "Waluj MIDC Gate",
          "nameMr": "वाळूज एम.आय.डी.सी. गेट",
          "nameHi": "वाळूज एम.आय.डी.सी. गेट",
          "time": "1:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8554,
          "lng": 75.24448,
          "roadIndex": 190
        },
        {
          "name": "CIDCO Waluj Mahanagar",
          "nameMr": "सिडको वाळूज महानगर",
          "nameHi": "सिडको वाळूज महानगर",
          "time": "1:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86008,
          "lng": 75.25651,
          "roadIndex": 194
        },
        {
          "name": "Pandharpur Phata (Waluj)",
          "nameMr": "पंढरपूर फाटा",
          "nameHi": "पंढरपूर फाटा",
          "time": "1:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86757,
          "lng": 75.28633,
          "roadIndex": 199
        },
        {
          "name": "Railway Station Phata",
          "nameMr": "रेल्वे स्टेशन फाटा",
          "nameHi": "रेल्वे स्टेशन फाटा",
          "time": "1:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8772,
          "lng": 75.30409,
          "roadIndex": 202
        },
        {
          "name": "Kranti Chowk",
          "nameMr": "क्रांती चौक",
          "nameHi": "क्रांती चौक",
          "time": "2:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87217,
          "lng": 75.32252,
          "roadIndex": 204
        },
        {
          "name": "Chh. Sambhaji Nagar CBS",
          "nameMr": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "nameHi": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "time": "2:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87813,
          "lng": 75.32797,
          "roadIndex": 208
        }
      ]
    },
    {
      "id": "BUS-106-4",
      "number": "MH 15 EF 3410",
      "type": "Parivartan (Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#C2185B",
      "routeId": "R-NSK-CSN",
      "routeName": "Nashik CBS to Chh. Sambhaji Nagar",
      "routeNameMr": "नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर",
      "destination": "Chh. Sambhaji Nagar Central",
      "destinationMr": "छत्रपती संभाजी नगर मध्यवर्ती",
      "via": "Niphad, Yeola, Vaijapur, Waluj",
      "driverName": "Bhausaheb R. Nikam (Emp #5234)",
      "conductorName": "Arun Gaikwad",
      "scheduledTime": "11:30 AM",
      "currentLat": 20.05775,
      "currentLng": 74.32886,
      "roadIndex": 84,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "64% (Diesel)",
      "distanceFromStop": 17,
      "etaMinutes": 21,
      "previousStop": "Vinchur Bus Stand",
      "nextStop": "Yeola Bus Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EF 3410 from Nashik CBS to Chh. Sambhaji Nagar is en route. Approaching Yeola Bus Stand in approximately 21 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EF 3410 नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर मार्गावर धावत आहे. पुढील स्थानक येवला बस स्थानक सुमारे 21 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EF 3410 मार्गस्थ है। अगला स्टॉप येवला बस स्थानक लगभग 21 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "11:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "11:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99783,
          "lng": 73.79026,
          "roadIndex": 1
        },
        {
          "name": "Chandori Phata",
          "nameMr": "चांदोरी फाटा",
          "nameHi": "चांदोरी फाटा",
          "time": "12:03 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 29
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "12:23 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08288,
          "lng": 74.10733,
          "roadIndex": 48
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "12:35 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09908,
          "lng": 74.22244,
          "roadIndex": 68
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "12:43 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10321,
          "lng": 74.22618,
          "roadIndex": 70
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "1:13 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.04225,
          "lng": 74.48904,
          "roadIndex": 101
        },
        {
          "name": "Andarsul Phata",
          "nameMr": "अंदरसूल फाटा",
          "nameHi": "अंदरसूल फाटा",
          "time": "1:23 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01687,
          "lng": 74.56484,
          "roadIndex": 110
        },
        {
          "name": "Nagarsul Railway Phata",
          "nameMr": "नगरसूल रेल्वे फाटा",
          "nameHi": "नगरसूल रेल्वे फाटा",
          "time": "1:31 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00036,
          "lng": 74.6031,
          "roadIndex": 117
        },
        {
          "name": "Tarapur Phata",
          "nameMr": "तारापूर फाटा",
          "nameHi": "तारापूर फाटा",
          "time": "1:39 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96806,
          "lng": 74.64304,
          "roadIndex": 122
        },
        {
          "name": "Rotegaon Phata",
          "nameMr": "रोटेगाव फाटा",
          "nameHi": "रोटेगाव फाटा",
          "time": "1:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94982,
          "lng": 74.6926,
          "roadIndex": 127
        },
        {
          "name": "Vaijapur Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापूर बस स्थानक",
          "time": "1:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92526,
          "lng": 74.7291,
          "roadIndex": 133
        },
        {
          "name": "Ladgaon Phata",
          "nameMr": "लाडगाव फाटा",
          "nameHi": "लाडगाव फाटा",
          "time": "2:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92273,
          "lng": 74.81319,
          "roadIndex": 138
        },
        {
          "name": "Shivoor Phata",
          "nameMr": "शिवूर फाटा",
          "nameHi": "शिवूर फाटा",
          "time": "2:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92677,
          "lng": 74.89528,
          "roadIndex": 148
        },
        {
          "name": "Khandala Phata",
          "nameMr": "खंडाळा फाटा",
          "nameHi": "खंडाळा फाटा",
          "time": "2:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92945,
          "lng": 74.95492,
          "roadIndex": 158
        },
        {
          "name": "Lasur Station Phata",
          "nameMr": "लासूर स्टेशन फाटा",
          "nameHi": "लासूर स्टेशन फाटा",
          "time": "2:38 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.90665,
          "lng": 75.03898,
          "roadIndex": 167
        },
        {
          "name": "Maliwada Phata",
          "nameMr": "माळीवाडा फाटा",
          "nameHi": "माळीवाडा फाटा",
          "time": "2:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.89794,
          "lng": 75.11965,
          "roadIndex": 174
        },
        {
          "name": "Daulatabad T-Point",
          "nameMr": "दौलताबाद टी-पॉइंट",
          "nameHi": "दौलताबाद टी-पॉइंट",
          "time": "3:00 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88198,
          "lng": 75.20575,
          "roadIndex": 180
        },
        {
          "name": "Waluj MIDC Gate",
          "nameMr": "वाळूज एम.आय.डी.सी. गेट",
          "nameHi": "वाळूज एम.आय.डी.सी. गेट",
          "time": "3:10 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8554,
          "lng": 75.24448,
          "roadIndex": 190
        },
        {
          "name": "CIDCO Waluj Mahanagar",
          "nameMr": "सिडको वाळूज महानगर",
          "nameHi": "सिडको वाळूज महानगर",
          "time": "3:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86008,
          "lng": 75.25651,
          "roadIndex": 194
        },
        {
          "name": "Pandharpur Phata (Waluj)",
          "nameMr": "पंढरपूर फाटा",
          "nameHi": "पंढरपूर फाटा",
          "time": "3:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86757,
          "lng": 75.28633,
          "roadIndex": 199
        },
        {
          "name": "Railway Station Phata",
          "nameMr": "रेल्वे स्टेशन फाटा",
          "nameHi": "रेल्वे स्टेशन फाटा",
          "time": "3:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8772,
          "lng": 75.30409,
          "roadIndex": 202
        },
        {
          "name": "Kranti Chowk",
          "nameMr": "क्रांती चौक",
          "nameHi": "क्रांती चौक",
          "time": "3:31 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87217,
          "lng": 75.32252,
          "roadIndex": 204
        },
        {
          "name": "Chh. Sambhaji Nagar CBS",
          "nameMr": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "nameHi": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "time": "3:37 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87813,
          "lng": 75.32797,
          "roadIndex": 208
        }
      ]
    },
    {
      "id": "BUS-106-5",
      "number": "MH 15 TR 9050",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-CSN",
      "routeName": "Nashik CBS to Chh. Sambhaji Nagar",
      "routeNameMr": "नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर",
      "destination": "Chh. Sambhaji Nagar Central",
      "destinationMr": "छत्रपती संभाजी नगर मध्यवर्ती",
      "via": "Niphad, Yeola, Vaijapur, Waluj",
      "driverName": "Gopinath M. Ghuge (Emp #6199)",
      "conductorName": "Arun Gaikwad",
      "scheduledTime": "01:00 PM",
      "currentLat": 20.00086,
      "currentLng": 73.86956,
      "roadIndex": 14,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 14.4,
      "etaMinutes": 18,
      "previousStop": "Dwarka Circle",
      "nextStop": "Chandori Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 9050 from Nashik CBS to Chh. Sambhaji Nagar is en route. Approaching Chandori Phata in approximately 18 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 9050 नाशिक सी.बी.एस. ते छत्रपती संभाजी नगर मार्गावर धावत आहे. पुढील स्थानक चांदोरी फाटा सुमारे 18 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 9050 मार्गस्थ है। अगला स्टॉप चांदोरी फाटा लगभग 18 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "1:00 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Dwarka Circle",
          "nameMr": "द्वारका सर्कल",
          "nameHi": "द्वारका सर्कल",
          "time": "1:08 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99783,
          "lng": 73.79026,
          "roadIndex": 1
        },
        {
          "name": "Chandori Phata",
          "nameMr": "चांदोरी फाटा",
          "nameHi": "चांदोरी फाटा",
          "time": "1:33 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.02444,
          "lng": 73.99575,
          "roadIndex": 29
        },
        {
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्थानक",
          "time": "1:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.08288,
          "lng": 74.10733,
          "roadIndex": 48
        },
        {
          "name": "Ranwad Phata",
          "nameMr": "रानवड फाटा",
          "nameHi": "रानवड फाटा",
          "time": "2:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09908,
          "lng": 74.22244,
          "roadIndex": 68
        },
        {
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्थानक",
          "time": "2:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10321,
          "lng": 74.22618,
          "roadIndex": 70
        },
        {
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्थानक",
          "time": "2:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04225,
          "lng": 74.48904,
          "roadIndex": 101
        },
        {
          "name": "Andarsul Phata",
          "nameMr": "अंदरसूल फाटा",
          "nameHi": "अंदरसूल फाटा",
          "time": "2:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01687,
          "lng": 74.56484,
          "roadIndex": 110
        },
        {
          "name": "Nagarsul Railway Phata",
          "nameMr": "नगरसूल रेल्वे फाटा",
          "nameHi": "नगरसूल रेल्वे फाटा",
          "time": "3:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00036,
          "lng": 74.6031,
          "roadIndex": 117
        },
        {
          "name": "Tarapur Phata",
          "nameMr": "तारापूर फाटा",
          "nameHi": "तारापूर फाटा",
          "time": "3:09 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.96806,
          "lng": 74.64304,
          "roadIndex": 122
        },
        {
          "name": "Rotegaon Phata",
          "nameMr": "रोटेगाव फाटा",
          "nameHi": "रोटेगाव फाटा",
          "time": "3:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.94982,
          "lng": 74.6926,
          "roadIndex": 127
        },
        {
          "name": "Vaijapur Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापूर बस स्थानक",
          "time": "3:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92526,
          "lng": 74.7291,
          "roadIndex": 133
        },
        {
          "name": "Ladgaon Phata",
          "nameMr": "लाडगाव फाटा",
          "nameHi": "लाडगाव फाटा",
          "time": "3:36 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92273,
          "lng": 74.81319,
          "roadIndex": 138
        },
        {
          "name": "Shivoor Phata",
          "nameMr": "शिवूर फाटा",
          "nameHi": "शिवूर फाटा",
          "time": "3:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92677,
          "lng": 74.89528,
          "roadIndex": 148
        },
        {
          "name": "Khandala Phata",
          "nameMr": "खंडाळा फाटा",
          "nameHi": "खंडाळा फाटा",
          "time": "3:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.92945,
          "lng": 74.95492,
          "roadIndex": 158
        },
        {
          "name": "Lasur Station Phata",
          "nameMr": "लासूर स्टेशन फाटा",
          "nameHi": "लासूर स्टेशन फाटा",
          "time": "4:08 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.90665,
          "lng": 75.03898,
          "roadIndex": 167
        },
        {
          "name": "Maliwada Phata",
          "nameMr": "माळीवाडा फाटा",
          "nameHi": "माळीवाडा फाटा",
          "time": "4:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.89794,
          "lng": 75.11965,
          "roadIndex": 174
        },
        {
          "name": "Daulatabad T-Point",
          "nameMr": "दौलताबाद टी-पॉइंट",
          "nameHi": "दौलताबाद टी-पॉइंट",
          "time": "4:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.88198,
          "lng": 75.20575,
          "roadIndex": 180
        },
        {
          "name": "Waluj MIDC Gate",
          "nameMr": "वाळूज एम.आय.डी.सी. गेट",
          "nameHi": "वाळूज एम.आय.डी.सी. गेट",
          "time": "4:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8554,
          "lng": 75.24448,
          "roadIndex": 190
        },
        {
          "name": "CIDCO Waluj Mahanagar",
          "nameMr": "सिडको वाळूज महानगर",
          "nameHi": "सिडको वाळूज महानगर",
          "time": "4:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86008,
          "lng": 75.25651,
          "roadIndex": 194
        },
        {
          "name": "Pandharpur Phata (Waluj)",
          "nameMr": "पंढरपूर फाटा",
          "nameHi": "पंढरपूर फाटा",
          "time": "4:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.86757,
          "lng": 75.28633,
          "roadIndex": 199
        },
        {
          "name": "Railway Station Phata",
          "nameMr": "रेल्वे स्टेशन फाटा",
          "nameHi": "रेल्वे स्टेशन फाटा",
          "time": "4:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8772,
          "lng": 75.30409,
          "roadIndex": 202
        },
        {
          "name": "Kranti Chowk",
          "nameMr": "क्रांती चौक",
          "nameHi": "क्रांती चौक",
          "time": "5:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87217,
          "lng": 75.32252,
          "roadIndex": 204
        },
        {
          "name": "Chh. Sambhaji Nagar CBS",
          "nameMr": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "nameHi": "छ. संभाजी नगर मध्यवर्ती स्थानक",
          "time": "5:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.87813,
          "lng": 75.32797,
          "roadIndex": 208
        }
      ]
    },
    {
      "id": "BUS-107-1",
      "number": "MH 15 AK 8100",
      "type": "Hirkani (Semi Luxury Asiad)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-DHL",
      "routeName": "Nashik CBS to Dhule CBS",
      "routeNameMr": "नाशिक सी.बी.एस. ते धुळे सी.बी.एस.",
      "destination": "Dhule CBS Stand",
      "destinationMr": "धुळे सी.बी.एस. स्थानक",
      "via": "Ozar, Pimpalgaon, Chandwad, Malegaon",
      "driverName": "Devidas N. Patil (Emp #5380)",
      "conductorName": "Suresh Khairnar",
      "scheduledTime": "07:00 AM",
      "currentLat": 20.79174,
      "currentLng": 74.74404,
      "roadIndex": 183,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "85% (Diesel)",
      "distanceFromStop": 6.9,
      "etaMinutes": 9,
      "previousStop": "Arvi Phata",
      "nextStop": "Songir Toll Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 8100 from Nashik CBS to Dhule CBS is en route. Approaching Songir Toll Phata in approximately 9 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 8100 नाशिक सी.बी.एस. ते धुळे सी.बी.एस. मार्गावर धावत आहे. पुढील स्थानक सोंगीर टोल फाटा सुमारे 9 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 8100 मार्गस्थ है। अगला स्टॉप सोंगीर टोल फाटा लगभग 9 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "7:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar",
          "nameMr": "शालिमार",
          "nameHi": "शालिमार",
          "time": "7:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "7:10 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "7:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Phata",
          "nameMr": "मेरी फाटा",
          "nameHi": "मेरी फाटा",
          "time": "7:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01395,
          "lng": 73.81742,
          "roadIndex": 8
        },
        {
          "name": "Adgaon Naka",
          "nameMr": "आडगाव नाका",
          "nameHi": "आडगाव नाका",
          "time": "7:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.03092,
          "lng": 73.85651,
          "roadIndex": 12
        },
        {
          "name": "Jatra Hotel Phata",
          "nameMr": "जत्रा हॉटेल फाटा",
          "nameHi": "जत्रा हॉटेल फाटा",
          "time": "7:31 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04008,
          "lng": 73.86994,
          "roadIndex": 13
        },
        {
          "name": "Kokangaon Phata",
          "nameMr": "कोकणगाव फाटा",
          "nameHi": "कोकणगाव फाटा",
          "time": "7:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06331,
          "lng": 73.90961,
          "roadIndex": 21
        },
        {
          "name": "Ozar Stand",
          "nameMr": "ओझर बस स्थानक",
          "nameHi": "ओझर बस स्थानक",
          "time": "7:44 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06676,
          "lng": 73.93038,
          "roadIndex": 31
        },
        {
          "name": "HAL Airport Phata",
          "nameMr": "एच.ए.एल. विमानतळ फाटा",
          "nameHi": "एच.ए.एल. विमानतळ फाटा",
          "time": "7:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10686,
          "lng": 73.94359,
          "roadIndex": 40
        },
        {
          "name": "Mohadi Phata",
          "nameMr": "मोहाडी फाटा",
          "nameHi": "मोहाडी फाटा",
          "time": "7:57 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14294,
          "lng": 73.97746,
          "roadIndex": 44
        },
        {
          "name": "Pimpalgaon Baswant",
          "nameMr": "पिंपळगाव बसवंत स्थानक",
          "nameHi": "पिंपळगाव बसवंत स्थानक",
          "time": "8:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.17553,
          "lng": 74.024,
          "roadIndex": 62
        },
        {
          "name": "Jalgaon Phata",
          "nameMr": "जळगाव फाटा",
          "nameHi": "जळगाव फाटा",
          "time": "8:10 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.21491,
          "lng": 74.04128,
          "roadIndex": 69
        },
        {
          "name": "Shirwade Vani Phata",
          "nameMr": "शिरवाडे वणी फाटा",
          "nameHi": "शिरवाडे वणी फाटा",
          "time": "8:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.23623,
          "lng": 74.06825,
          "roadIndex": 72
        },
        {
          "name": "Vadner Bhairav Phata",
          "nameMr": "वडनेर भैरव फाटा",
          "nameHi": "वडनेर भैरव फाटा",
          "time": "8:28 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.30359,
          "lng": 74.13831,
          "roadIndex": 82
        },
        {
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्थानक",
          "time": "8:40 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.32808,
          "lng": 74.24127,
          "roadIndex": 91
        },
        {
          "name": "Rahud Ghat Top",
          "nameMr": "राहुड घाट माथा",
          "nameHi": "राहुड घाट माथा",
          "time": "8:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36637,
          "lng": 74.30841,
          "roadIndex": 113
        },
        {
          "name": "Mangrul Phata",
          "nameMr": "मंगरूळ फाटा",
          "nameHi": "मंगरूळ फाटा",
          "time": "8:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.42299,
          "lng": 74.35541,
          "roadIndex": 121
        },
        {
          "name": "Umrane Bus Stand",
          "nameMr": "उमराणे बस स्थानक",
          "nameHi": "उमराणे बस स्थानक",
          "time": "9:06 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.46704,
          "lng": 74.41175,
          "roadIndex": 129
        },
        {
          "name": "Deola Phata",
          "nameMr": "देवळा फाटा",
          "nameHi": "देवळा फाटा",
          "time": "9:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.50265,
          "lng": 74.46454,
          "roadIndex": 136
        },
        {
          "name": "Malegaon Naka",
          "nameMr": "मालेगाव नाका",
          "nameHi": "मालेगाव नाका",
          "time": "9:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.53066,
          "lng": 74.49223,
          "roadIndex": 137
        },
        {
          "name": "Malegaon Central",
          "nameMr": "मालेगाव मध्यवर्ती आगार",
          "nameHi": "मालेगाव मध्यवर्ती आगार",
          "time": "9:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.55489,
          "lng": 74.52817,
          "roadIndex": 144
        },
        {
          "name": "Camp Malegaon",
          "nameMr": "कॅम्प मालेगाव",
          "nameHi": "कॅम्प मालेगाव",
          "time": "9:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.57573,
          "lng": 74.56539,
          "roadIndex": 150
        },
        {
          "name": "Saundane Phata",
          "nameMr": "सौंदाणे फाटा",
          "nameHi": "सौंदाणे फाटा",
          "time": "9:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.61545,
          "lng": 74.62589,
          "roadIndex": 156
        },
        {
          "name": "Zodga Bus Stand",
          "nameMr": "झोडगे बस स्थानक",
          "nameHi": "झोडगे बस स्थानक",
          "time": "9:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.71243,
          "lng": 74.69532,
          "roadIndex": 167
        },
        {
          "name": "Arvi Phata",
          "nameMr": "आरवी फाटा",
          "nameHi": "आरवी फाटा",
          "time": "9:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.77865,
          "lng": 74.73043,
          "roadIndex": 178
        },
        {
          "name": "Songir Toll Phata",
          "nameMr": "सोंगीर टोल फाटा",
          "nameHi": "सोंगीर टोल फाटा",
          "time": "10:05 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.84928,
          "lng": 74.763,
          "roadIndex": 188
        },
        {
          "name": "Mohadi Phata (Dhule)",
          "nameMr": "मोहाडी फाटा (धुळे)",
          "nameHi": "मोहाडी फाटा (धुळे)",
          "time": "10:11 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.88198,
          "lng": 74.77131,
          "roadIndex": 193
        },
        {
          "name": "Dhule CBS Stand",
          "nameMr": "धुळे सी.बी.एस. स्थानक",
          "nameHi": "धुळे सी.बी.एस. स्थानक",
          "time": "10:17 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.90204,
          "lng": 74.77486,
          "roadIndex": 196
        }
      ]
    },
    {
      "id": "BUS-107-2",
      "number": "MH 15 EG 4800",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-DHL",
      "routeName": "Nashik CBS to Dhule CBS",
      "routeNameMr": "नाशिक सी.बी.एस. ते धुळे सी.बी.एस.",
      "destination": "Dhule CBS Stand",
      "destinationMr": "धुळे सी.बी.एस. स्थानक",
      "via": "Ozar, Pimpalgaon, Chandwad, Malegaon",
      "driverName": "Hemant S. Chaudhari (Emp #4912)",
      "conductorName": "Suresh Khairnar",
      "scheduledTime": "08:15 AM",
      "currentLat": 20.50265,
      "currentLng": 74.46454,
      "roadIndex": 136,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "78% (Diesel)",
      "distanceFromStop": 4.2,
      "etaMinutes": 5,
      "previousStop": "Deola Phata",
      "nextStop": "Malegaon Naka",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4800 from Nashik CBS to Dhule CBS is en route. Approaching Malegaon Naka in approximately 5 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4800 नाशिक सी.बी.एस. ते धुळे सी.बी.एस. मार्गावर धावत आहे. पुढील स्थानक मालेगाव नाका सुमारे 5 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4800 मार्गस्थ है। अगला स्टॉप मालेगाव नाका लगभग 5 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "8:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar",
          "nameMr": "शालिमार",
          "nameHi": "शालिमार",
          "time": "8:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "8:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "8:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Phata",
          "nameMr": "मेरी फाटा",
          "nameHi": "मेरी फाटा",
          "time": "8:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01395,
          "lng": 73.81742,
          "roadIndex": 8
        },
        {
          "name": "Adgaon Naka",
          "nameMr": "आडगाव नाका",
          "nameHi": "आडगाव नाका",
          "time": "8:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.03092,
          "lng": 73.85651,
          "roadIndex": 12
        },
        {
          "name": "Jatra Hotel Phata",
          "nameMr": "जत्रा हॉटेल फाटा",
          "nameHi": "जत्रा हॉटेल फाटा",
          "time": "8:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04008,
          "lng": 73.86994,
          "roadIndex": 13
        },
        {
          "name": "Kokangaon Phata",
          "nameMr": "कोकणगाव फाटा",
          "nameHi": "कोकणगाव फाटा",
          "time": "8:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06331,
          "lng": 73.90961,
          "roadIndex": 21
        },
        {
          "name": "Ozar Stand",
          "nameMr": "ओझर बस स्थानक",
          "nameHi": "ओझर बस स्थानक",
          "time": "8:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06676,
          "lng": 73.93038,
          "roadIndex": 31
        },
        {
          "name": "HAL Airport Phata",
          "nameMr": "एच.ए.एल. विमानतळ फाटा",
          "nameHi": "एच.ए.एल. विमानतळ फाटा",
          "time": "9:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10686,
          "lng": 73.94359,
          "roadIndex": 40
        },
        {
          "name": "Mohadi Phata",
          "nameMr": "मोहाडी फाटा",
          "nameHi": "मोहाडी फाटा",
          "time": "9:12 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14294,
          "lng": 73.97746,
          "roadIndex": 44
        },
        {
          "name": "Pimpalgaon Baswant",
          "nameMr": "पिंपळगाव बसवंत स्थानक",
          "nameHi": "पिंपळगाव बसवंत स्थानक",
          "time": "9:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.17553,
          "lng": 74.024,
          "roadIndex": 62
        },
        {
          "name": "Jalgaon Phata",
          "nameMr": "जळगाव फाटा",
          "nameHi": "जळगाव फाटा",
          "time": "9:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.21491,
          "lng": 74.04128,
          "roadIndex": 69
        },
        {
          "name": "Shirwade Vani Phata",
          "nameMr": "शिरवाडे वणी फाटा",
          "nameHi": "शिरवाडे वणी फाटा",
          "time": "9:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.23623,
          "lng": 74.06825,
          "roadIndex": 72
        },
        {
          "name": "Vadner Bhairav Phata",
          "nameMr": "वडनेर भैरव फाटा",
          "nameHi": "वडनेर भैरव फाटा",
          "time": "9:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.30359,
          "lng": 74.13831,
          "roadIndex": 82
        },
        {
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्थानक",
          "time": "9:55 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.32808,
          "lng": 74.24127,
          "roadIndex": 91
        },
        {
          "name": "Rahud Ghat Top",
          "nameMr": "राहुड घाट माथा",
          "nameHi": "राहुड घाट माथा",
          "time": "10:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36637,
          "lng": 74.30841,
          "roadIndex": 113
        },
        {
          "name": "Mangrul Phata",
          "nameMr": "मंगरूळ फाटा",
          "nameHi": "मंगरूळ फाटा",
          "time": "10:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.42299,
          "lng": 74.35541,
          "roadIndex": 121
        },
        {
          "name": "Umrane Bus Stand",
          "nameMr": "उमराणे बस स्थानक",
          "nameHi": "उमराणे बस स्थानक",
          "time": "10:21 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.46704,
          "lng": 74.41175,
          "roadIndex": 129
        },
        {
          "name": "Deola Phata",
          "nameMr": "देवळा फाटा",
          "nameHi": "देवळा फाटा",
          "time": "10:28 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.50265,
          "lng": 74.46454,
          "roadIndex": 136
        },
        {
          "name": "Malegaon Naka",
          "nameMr": "मालेगाव नाका",
          "nameHi": "मालेगाव नाका",
          "time": "10:34 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.53066,
          "lng": 74.49223,
          "roadIndex": 137
        },
        {
          "name": "Malegaon Central",
          "nameMr": "मालेगाव मध्यवर्ती आगार",
          "nameHi": "मालेगाव मध्यवर्ती आगार",
          "time": "10:41 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.55489,
          "lng": 74.52817,
          "roadIndex": 144
        },
        {
          "name": "Camp Malegaon",
          "nameMr": "कॅम्प मालेगाव",
          "nameHi": "कॅम्प मालेगाव",
          "time": "10:47 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.57573,
          "lng": 74.56539,
          "roadIndex": 150
        },
        {
          "name": "Saundane Phata",
          "nameMr": "सौंदाणे फाटा",
          "nameHi": "सौंदाणे फाटा",
          "time": "10:56 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.61545,
          "lng": 74.62589,
          "roadIndex": 156
        },
        {
          "name": "Zodga Bus Stand",
          "nameMr": "झोडगे बस स्थानक",
          "nameHi": "झोडगे बस स्थानक",
          "time": "11:05 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.71243,
          "lng": 74.69532,
          "roadIndex": 167
        },
        {
          "name": "Arvi Phata",
          "nameMr": "आरवी फाटा",
          "nameHi": "आरवी फाटा",
          "time": "11:13 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.77865,
          "lng": 74.73043,
          "roadIndex": 178
        },
        {
          "name": "Songir Toll Phata",
          "nameMr": "सोंगीर टोल फाटा",
          "nameHi": "सोंगीर टोल फाटा",
          "time": "11:20 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.84928,
          "lng": 74.763,
          "roadIndex": 188
        },
        {
          "name": "Mohadi Phata (Dhule)",
          "nameMr": "मोहाडी फाटा (धुळे)",
          "nameHi": "मोहाडी फाटा (धुळे)",
          "time": "11:26 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.88198,
          "lng": 74.77131,
          "roadIndex": 193
        },
        {
          "name": "Dhule CBS Stand",
          "nameMr": "धुळे सी.बी.एस. स्थानक",
          "nameHi": "धुळे सी.बी.एस. स्थानक",
          "time": "11:32 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.90204,
          "lng": 74.77486,
          "roadIndex": 196
        }
      ]
    },
    {
      "id": "BUS-107",
      "number": "MH 15 TR 9510",
      "type": "Shivshahi (AC Seater)",
      "typeCode": "SHIVSHAHI",
      "badgeColor": "#1565C0",
      "routeId": "R-NSK-DHL",
      "routeName": "Nashik CBS to Dhule CBS",
      "routeNameMr": "नाशिक सी.बी.एस. ते धुळे सी.बी.एस.",
      "destination": "Dhule CBS Stand",
      "destinationMr": "धुळे सी.बी.एस. स्थानक",
      "via": "Ozar, Pimpalgaon, Chandwad, Malegaon",
      "driverName": "Popat R. Suryavanshi (Emp #6188)",
      "conductorName": "Suresh Khairnar",
      "scheduledTime": "09:30 AM",
      "currentLat": 20.32608,
      "currentLng": 74.21411,
      "roadIndex": 86,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 3,
      "etaMinutes": 4,
      "previousStop": "Vadner Bhairav Phata",
      "nextStop": "Chandwad Bus Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 9510 from Nashik CBS to Dhule CBS is en route. Approaching Chandwad Bus Stand in approximately 4 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 9510 नाशिक सी.बी.एस. ते धुळे सी.बी.एस. मार्गावर धावत आहे. पुढील स्थानक चांदवड बस स्थानक सुमारे 4 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 9510 मार्गस्थ है। अगला स्टॉप चांदवड बस स्थानक लगभग 4 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "9:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar",
          "nameMr": "शालिमार",
          "nameHi": "शालिमार",
          "time": "9:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "9:40 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "9:44 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Phata",
          "nameMr": "मेरी फाटा",
          "nameHi": "मेरी फाटा",
          "time": "9:49 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01395,
          "lng": 73.81742,
          "roadIndex": 8
        },
        {
          "name": "Adgaon Naka",
          "nameMr": "आडगाव नाका",
          "nameHi": "आडगाव नाका",
          "time": "9:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.03092,
          "lng": 73.85651,
          "roadIndex": 12
        },
        {
          "name": "Jatra Hotel Phata",
          "nameMr": "जत्रा हॉटेल फाटा",
          "nameHi": "जत्रा हॉटेल फाटा",
          "time": "10:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04008,
          "lng": 73.86994,
          "roadIndex": 13
        },
        {
          "name": "Kokangaon Phata",
          "nameMr": "कोकणगाव फाटा",
          "nameHi": "कोकणगाव फाटा",
          "time": "10:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06331,
          "lng": 73.90961,
          "roadIndex": 21
        },
        {
          "name": "Ozar Stand",
          "nameMr": "ओझर बस स्थानक",
          "nameHi": "ओझर बस स्थानक",
          "time": "10:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06676,
          "lng": 73.93038,
          "roadIndex": 31
        },
        {
          "name": "HAL Airport Phata",
          "nameMr": "एच.ए.एल. विमानतळ फाटा",
          "nameHi": "एच.ए.एल. विमानतळ फाटा",
          "time": "10:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10686,
          "lng": 73.94359,
          "roadIndex": 40
        },
        {
          "name": "Mohadi Phata",
          "nameMr": "मोहाडी फाटा",
          "nameHi": "मोहाडी फाटा",
          "time": "10:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14294,
          "lng": 73.97746,
          "roadIndex": 44
        },
        {
          "name": "Pimpalgaon Baswant",
          "nameMr": "पिंपळगाव बसवंत स्थानक",
          "nameHi": "पिंपळगाव बसवंत स्थानक",
          "time": "10:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.17553,
          "lng": 74.024,
          "roadIndex": 62
        },
        {
          "name": "Jalgaon Phata",
          "nameMr": "जळगाव फाटा",
          "nameHi": "जळगाव फाटा",
          "time": "10:40 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.21491,
          "lng": 74.04128,
          "roadIndex": 69
        },
        {
          "name": "Shirwade Vani Phata",
          "nameMr": "शिरवाडे वणी फाटा",
          "nameHi": "शिरवाडे वणी फाटा",
          "time": "10:49 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.23623,
          "lng": 74.06825,
          "roadIndex": 72
        },
        {
          "name": "Vadner Bhairav Phata",
          "nameMr": "वडनेर भैरव फाटा",
          "nameHi": "वडनेर भैरव फाटा",
          "time": "10:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.30359,
          "lng": 74.13831,
          "roadIndex": 82
        },
        {
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्थानक",
          "time": "11:10 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.32808,
          "lng": 74.24127,
          "roadIndex": 91
        },
        {
          "name": "Rahud Ghat Top",
          "nameMr": "राहुड घाट माथा",
          "nameHi": "राहुड घाट माथा",
          "time": "11:20 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36637,
          "lng": 74.30841,
          "roadIndex": 113
        },
        {
          "name": "Mangrul Phata",
          "nameMr": "मंगरूळ फाटा",
          "nameHi": "मंगरूळ फाटा",
          "time": "11:28 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.42299,
          "lng": 74.35541,
          "roadIndex": 121
        },
        {
          "name": "Umrane Bus Stand",
          "nameMr": "उमराणे बस स्थानक",
          "nameHi": "उमराणे बस स्थानक",
          "time": "11:36 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.46704,
          "lng": 74.41175,
          "roadIndex": 129
        },
        {
          "name": "Deola Phata",
          "nameMr": "देवळा फाटा",
          "nameHi": "देवळा फाटा",
          "time": "11:43 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.50265,
          "lng": 74.46454,
          "roadIndex": 136
        },
        {
          "name": "Malegaon Naka",
          "nameMr": "मालेगाव नाका",
          "nameHi": "मालेगाव नाका",
          "time": "11:49 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.53066,
          "lng": 74.49223,
          "roadIndex": 137
        },
        {
          "name": "Malegaon Central",
          "nameMr": "मालेगाव मध्यवर्ती आगार",
          "nameHi": "मालेगाव मध्यवर्ती आगार",
          "time": "11:56 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.55489,
          "lng": 74.52817,
          "roadIndex": 144
        },
        {
          "name": "Camp Malegaon",
          "nameMr": "कॅम्प मालेगाव",
          "nameHi": "कॅम्प मालेगाव",
          "time": "12:02 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.57573,
          "lng": 74.56539,
          "roadIndex": 150
        },
        {
          "name": "Saundane Phata",
          "nameMr": "सौंदाणे फाटा",
          "nameHi": "सौंदाणे फाटा",
          "time": "12:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.61545,
          "lng": 74.62589,
          "roadIndex": 156
        },
        {
          "name": "Zodga Bus Stand",
          "nameMr": "झोडगे बस स्थानक",
          "nameHi": "झोडगे बस स्थानक",
          "time": "12:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.71243,
          "lng": 74.69532,
          "roadIndex": 167
        },
        {
          "name": "Arvi Phata",
          "nameMr": "आरवी फाटा",
          "nameHi": "आरवी फाटा",
          "time": "12:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.77865,
          "lng": 74.73043,
          "roadIndex": 178
        },
        {
          "name": "Songir Toll Phata",
          "nameMr": "सोंगीर टोल फाटा",
          "nameHi": "सोंगीर टोल फाटा",
          "time": "12:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.84928,
          "lng": 74.763,
          "roadIndex": 188
        },
        {
          "name": "Mohadi Phata (Dhule)",
          "nameMr": "मोहाडी फाटा (धुळे)",
          "nameHi": "मोहाडी फाटा (धुळे)",
          "time": "12:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.88198,
          "lng": 74.77131,
          "roadIndex": 193
        },
        {
          "name": "Dhule CBS Stand",
          "nameMr": "धुळे सी.बी.एस. स्थानक",
          "nameHi": "धुळे सी.बी.एस. स्थानक",
          "time": "12:47 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.90204,
          "lng": 74.77486,
          "roadIndex": 196
        }
      ]
    },
    {
      "id": "BUS-107-4",
      "number": "MH 15 EF 3890",
      "type": "Parivartan (Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#C2185B",
      "routeId": "R-NSK-DHL",
      "routeName": "Nashik CBS to Dhule CBS",
      "routeNameMr": "नाशिक सी.बी.एस. ते धुळे सी.बी.एस.",
      "destination": "Dhule CBS Stand",
      "destinationMr": "धुळे सी.बी.एस. स्थानक",
      "via": "Ozar, Pimpalgaon, Chandwad, Malegaon",
      "driverName": "Balasaheb K. Deore (Emp #5099)",
      "conductorName": "Suresh Khairnar",
      "scheduledTime": "10:45 AM",
      "currentLat": 20.13943,
      "currentLng": 73.9707,
      "roadIndex": 42,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "64% (Diesel)",
      "distanceFromStop": 0.8,
      "etaMinutes": 2,
      "previousStop": "HAL Airport Phata",
      "nextStop": "Mohadi Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EF 3890 from Nashik CBS to Dhule CBS is en route. Approaching Mohadi Phata in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EF 3890 नाशिक सी.बी.एस. ते धुळे सी.बी.एस. मार्गावर धावत आहे. पुढील स्थानक मोहाडी फाटा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EF 3890 मार्गस्थ है। अगला स्टॉप मोहाडी फाटा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "10:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar",
          "nameMr": "शालिमार",
          "nameHi": "शालिमार",
          "time": "10:49 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "10:55 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "10:59 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Phata",
          "nameMr": "मेरी फाटा",
          "nameHi": "मेरी फाटा",
          "time": "11:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01395,
          "lng": 73.81742,
          "roadIndex": 8
        },
        {
          "name": "Adgaon Naka",
          "nameMr": "आडगाव नाका",
          "nameHi": "आडगाव नाका",
          "time": "11:11 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.03092,
          "lng": 73.85651,
          "roadIndex": 12
        },
        {
          "name": "Jatra Hotel Phata",
          "nameMr": "जत्रा हॉटेल फाटा",
          "nameHi": "जत्रा हॉटेल फाटा",
          "time": "11:16 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04008,
          "lng": 73.86994,
          "roadIndex": 13
        },
        {
          "name": "Kokangaon Phata",
          "nameMr": "कोकणगाव फाटा",
          "nameHi": "कोकणगाव फाटा",
          "time": "11:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06331,
          "lng": 73.90961,
          "roadIndex": 21
        },
        {
          "name": "Ozar Stand",
          "nameMr": "ओझर बस स्थानक",
          "nameHi": "ओझर बस स्थानक",
          "time": "11:29 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06676,
          "lng": 73.93038,
          "roadIndex": 31
        },
        {
          "name": "HAL Airport Phata",
          "nameMr": "एच.ए.एल. विमानतळ फाटा",
          "nameHi": "एच.ए.एल. विमानतळ फाटा",
          "time": "11:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10686,
          "lng": 73.94359,
          "roadIndex": 40
        },
        {
          "name": "Mohadi Phata",
          "nameMr": "मोहाडी फाटा",
          "nameHi": "मोहाडी फाटा",
          "time": "11:42 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.14294,
          "lng": 73.97746,
          "roadIndex": 44
        },
        {
          "name": "Pimpalgaon Baswant",
          "nameMr": "पिंपळगाव बसवंत स्थानक",
          "nameHi": "पिंपळगाव बसवंत स्थानक",
          "time": "11:50 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.17553,
          "lng": 74.024,
          "roadIndex": 62
        },
        {
          "name": "Jalgaon Phata",
          "nameMr": "जळगाव फाटा",
          "nameHi": "जळगाव फाटा",
          "time": "11:55 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.21491,
          "lng": 74.04128,
          "roadIndex": 69
        },
        {
          "name": "Shirwade Vani Phata",
          "nameMr": "शिरवाडे वणी फाटा",
          "nameHi": "शिरवाडे वणी फाटा",
          "time": "12:04 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.23623,
          "lng": 74.06825,
          "roadIndex": 72
        },
        {
          "name": "Vadner Bhairav Phata",
          "nameMr": "वडनेर भैरव फाटा",
          "nameHi": "वडनेर भैरव फाटा",
          "time": "12:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.30359,
          "lng": 74.13831,
          "roadIndex": 82
        },
        {
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्थानक",
          "time": "12:25 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.32808,
          "lng": 74.24127,
          "roadIndex": 91
        },
        {
          "name": "Rahud Ghat Top",
          "nameMr": "राहुड घाट माथा",
          "nameHi": "राहुड घाट माथा",
          "time": "12:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36637,
          "lng": 74.30841,
          "roadIndex": 113
        },
        {
          "name": "Mangrul Phata",
          "nameMr": "मंगरूळ फाटा",
          "nameHi": "मंगरूळ फाटा",
          "time": "12:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.42299,
          "lng": 74.35541,
          "roadIndex": 121
        },
        {
          "name": "Umrane Bus Stand",
          "nameMr": "उमराणे बस स्थानक",
          "nameHi": "उमराणे बस स्थानक",
          "time": "12:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.46704,
          "lng": 74.41175,
          "roadIndex": 129
        },
        {
          "name": "Deola Phata",
          "nameMr": "देवळा फाटा",
          "nameHi": "देवळा फाटा",
          "time": "12:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.50265,
          "lng": 74.46454,
          "roadIndex": 136
        },
        {
          "name": "Malegaon Naka",
          "nameMr": "मालेगाव नाका",
          "nameHi": "मालेगाव नाका",
          "time": "1:04 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.53066,
          "lng": 74.49223,
          "roadIndex": 137
        },
        {
          "name": "Malegaon Central",
          "nameMr": "मालेगाव मध्यवर्ती आगार",
          "nameHi": "मालेगाव मध्यवर्ती आगार",
          "time": "1:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.55489,
          "lng": 74.52817,
          "roadIndex": 144
        },
        {
          "name": "Camp Malegaon",
          "nameMr": "कॅम्प मालेगाव",
          "nameHi": "कॅम्प मालेगाव",
          "time": "1:17 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.57573,
          "lng": 74.56539,
          "roadIndex": 150
        },
        {
          "name": "Saundane Phata",
          "nameMr": "सौंदाणे फाटा",
          "nameHi": "सौंदाणे फाटा",
          "time": "1:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.61545,
          "lng": 74.62589,
          "roadIndex": 156
        },
        {
          "name": "Zodga Bus Stand",
          "nameMr": "झोडगे बस स्थानक",
          "nameHi": "झोडगे बस स्थानक",
          "time": "1:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.71243,
          "lng": 74.69532,
          "roadIndex": 167
        },
        {
          "name": "Arvi Phata",
          "nameMr": "आरवी फाटा",
          "nameHi": "आरवी फाटा",
          "time": "1:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.77865,
          "lng": 74.73043,
          "roadIndex": 178
        },
        {
          "name": "Songir Toll Phata",
          "nameMr": "सोंगीर टोल फाटा",
          "nameHi": "सोंगीर टोल फाटा",
          "time": "1:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.84928,
          "lng": 74.763,
          "roadIndex": 188
        },
        {
          "name": "Mohadi Phata (Dhule)",
          "nameMr": "मोहाडी फाटा (धुळे)",
          "nameHi": "मोहाडी फाटा (धुळे)",
          "time": "1:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.88198,
          "lng": 74.77131,
          "roadIndex": 193
        },
        {
          "name": "Dhule CBS Stand",
          "nameMr": "धुळे सी.बी.एस. स्थानक",
          "nameHi": "धुळे सी.बी.एस. स्थानक",
          "time": "2:02 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.90204,
          "lng": 74.77486,
          "roadIndex": 196
        }
      ]
    },
    {
      "id": "BUS-107-5",
      "number": "MH 15 EG 4850",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-DHL",
      "routeName": "Nashik CBS to Dhule CBS",
      "routeNameMr": "नाशिक सी.बी.एस. ते धुळे सी.बी.एस.",
      "destination": "Dhule CBS Stand",
      "destinationMr": "धुळे सी.बी.एस. स्थानक",
      "via": "Ozar, Pimpalgaon, Chandwad, Malegaon",
      "driverName": "Subhash M. Ahire (Emp #4823)",
      "conductorName": "Suresh Khairnar",
      "scheduledTime": "12:00 PM",
      "currentLat": 20.01889,
      "currentLng": 73.83049,
      "roadIndex": 10,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 3,
      "etaMinutes": 4,
      "previousStop": "Meri Phata",
      "nextStop": "Adgaon Naka",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4850 from Nashik CBS to Dhule CBS is en route. Approaching Adgaon Naka in approximately 4 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4850 नाशिक सी.बी.एस. ते धुळे सी.बी.एस. मार्गावर धावत आहे. पुढील स्थानक आडगाव नाका सुमारे 4 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4850 मार्गस्थ है। अगला स्टॉप आडगाव नाका लगभग 4 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "12:00 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar",
          "nameMr": "शालिमार",
          "nameHi": "शालिमार",
          "time": "12:04 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "12:10 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "12:14 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Phata",
          "nameMr": "मेरी फाटा",
          "nameHi": "मेरी फाटा",
          "time": "12:19 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01395,
          "lng": 73.81742,
          "roadIndex": 8
        },
        {
          "name": "Adgaon Naka",
          "nameMr": "आडगाव नाका",
          "nameHi": "आडगाव नाका",
          "time": "12:26 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.03092,
          "lng": 73.85651,
          "roadIndex": 12
        },
        {
          "name": "Jatra Hotel Phata",
          "nameMr": "जत्रा हॉटेल फाटा",
          "nameHi": "जत्रा हॉटेल फाटा",
          "time": "12:31 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04008,
          "lng": 73.86994,
          "roadIndex": 13
        },
        {
          "name": "Kokangaon Phata",
          "nameMr": "कोकणगाव फाटा",
          "nameHi": "कोकणगाव फाटा",
          "time": "12:35 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06331,
          "lng": 73.90961,
          "roadIndex": 21
        },
        {
          "name": "Ozar Stand",
          "nameMr": "ओझर बस स्थानक",
          "nameHi": "ओझर बस स्थानक",
          "time": "12:44 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06676,
          "lng": 73.93038,
          "roadIndex": 31
        },
        {
          "name": "HAL Airport Phata",
          "nameMr": "एच.ए.एल. विमानतळ फाटा",
          "nameHi": "एच.ए.एल. विमानतळ फाटा",
          "time": "12:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10686,
          "lng": 73.94359,
          "roadIndex": 40
        },
        {
          "name": "Mohadi Phata",
          "nameMr": "मोहाडी फाटा",
          "nameHi": "मोहाडी फाटा",
          "time": "12:57 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14294,
          "lng": 73.97746,
          "roadIndex": 44
        },
        {
          "name": "Pimpalgaon Baswant",
          "nameMr": "पिंपळगाव बसवंत स्थानक",
          "nameHi": "पिंपळगाव बसवंत स्थानक",
          "time": "1:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.17553,
          "lng": 74.024,
          "roadIndex": 62
        },
        {
          "name": "Jalgaon Phata",
          "nameMr": "जळगाव फाटा",
          "nameHi": "जळगाव फाटा",
          "time": "1:10 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.21491,
          "lng": 74.04128,
          "roadIndex": 69
        },
        {
          "name": "Shirwade Vani Phata",
          "nameMr": "शिरवाडे वणी फाटा",
          "nameHi": "शिरवाडे वणी फाटा",
          "time": "1:19 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.23623,
          "lng": 74.06825,
          "roadIndex": 72
        },
        {
          "name": "Vadner Bhairav Phata",
          "nameMr": "वडनेर भैरव फाटा",
          "nameHi": "वडनेर भैरव फाटा",
          "time": "1:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.30359,
          "lng": 74.13831,
          "roadIndex": 82
        },
        {
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्थानक",
          "time": "1:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.32808,
          "lng": 74.24127,
          "roadIndex": 91
        },
        {
          "name": "Rahud Ghat Top",
          "nameMr": "राहुड घाट माथा",
          "nameHi": "राहुड घाट माथा",
          "time": "1:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36637,
          "lng": 74.30841,
          "roadIndex": 113
        },
        {
          "name": "Mangrul Phata",
          "nameMr": "मंगरूळ फाटा",
          "nameHi": "मंगरूळ फाटा",
          "time": "1:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.42299,
          "lng": 74.35541,
          "roadIndex": 121
        },
        {
          "name": "Umrane Bus Stand",
          "nameMr": "उमराणे बस स्थानक",
          "nameHi": "उमराणे बस स्थानक",
          "time": "2:06 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.46704,
          "lng": 74.41175,
          "roadIndex": 129
        },
        {
          "name": "Deola Phata",
          "nameMr": "देवळा फाटा",
          "nameHi": "देवळा फाटा",
          "time": "2:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.50265,
          "lng": 74.46454,
          "roadIndex": 136
        },
        {
          "name": "Malegaon Naka",
          "nameMr": "मालेगाव नाका",
          "nameHi": "मालेगाव नाका",
          "time": "2:19 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.53066,
          "lng": 74.49223,
          "roadIndex": 137
        },
        {
          "name": "Malegaon Central",
          "nameMr": "मालेगाव मध्यवर्ती आगार",
          "nameHi": "मालेगाव मध्यवर्ती आगार",
          "time": "2:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.55489,
          "lng": 74.52817,
          "roadIndex": 144
        },
        {
          "name": "Camp Malegaon",
          "nameMr": "कॅम्प मालेगाव",
          "nameHi": "कॅम्प मालेगाव",
          "time": "2:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.57573,
          "lng": 74.56539,
          "roadIndex": 150
        },
        {
          "name": "Saundane Phata",
          "nameMr": "सौंदाणे फाटा",
          "nameHi": "सौंदाणे फाटा",
          "time": "2:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.61545,
          "lng": 74.62589,
          "roadIndex": 156
        },
        {
          "name": "Zodga Bus Stand",
          "nameMr": "झोडगे बस स्थानक",
          "nameHi": "झोडगे बस स्थानक",
          "time": "2:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.71243,
          "lng": 74.69532,
          "roadIndex": 167
        },
        {
          "name": "Arvi Phata",
          "nameMr": "आरवी फाटा",
          "nameHi": "आरवी फाटा",
          "time": "2:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.77865,
          "lng": 74.73043,
          "roadIndex": 178
        },
        {
          "name": "Songir Toll Phata",
          "nameMr": "सोंगीर टोल फाटा",
          "nameHi": "सोंगीर टोल फाटा",
          "time": "3:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.84928,
          "lng": 74.763,
          "roadIndex": 188
        },
        {
          "name": "Mohadi Phata (Dhule)",
          "nameMr": "मोहाडी फाटा (धुळे)",
          "nameHi": "मोहाडी फाटा (धुळे)",
          "time": "3:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.88198,
          "lng": 74.77131,
          "roadIndex": 193
        },
        {
          "name": "Dhule CBS Stand",
          "nameMr": "धुळे सी.बी.एस. स्थानक",
          "nameHi": "धुळे सी.बी.एस. स्थानक",
          "time": "3:17 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.90204,
          "lng": 74.77486,
          "roadIndex": 196
        }
      ]
    },
    {
      "id": "BUS-107-6",
      "number": "MH 15 AK 8150",
      "type": "Hirkani (Semi Luxury)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-DHL",
      "routeName": "Nashik CBS to Dhule CBS",
      "routeNameMr": "नाशिक सी.बी.एस. ते धुळे सी.बी.एस.",
      "destination": "Dhule CBS Stand",
      "destinationMr": "धुळे सी.बी.एस. स्थानक",
      "via": "Ozar, Pimpalgaon, Chandwad, Malegaon",
      "driverName": "Rohidas G. Bhamare (Emp #5510)",
      "conductorName": "Suresh Khairnar",
      "scheduledTime": "01:15 PM",
      "currentLat": 20.00274,
      "currentLng": 73.7898,
      "roadIndex": 2,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "80% (38/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "50% (Diesel)",
      "distanceFromStop": 0.6,
      "etaMinutes": 2,
      "previousStop": "Shalimar",
      "nextStop": "Panchavati Karanja",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 8150 from Nashik CBS to Dhule CBS is en route. Approaching Panchavati Karanja in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 8150 नाशिक सी.बी.एस. ते धुळे सी.बी.एस. मार्गावर धावत आहे. पुढील स्थानक पंचवटी कारंजा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 8150 मार्गस्थ है। अगला स्टॉप पंचवटी कारंजा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "1:15 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Shalimar",
          "nameMr": "शालिमार",
          "nameHi": "शालिमार",
          "time": "1:19 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "1:25 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "1:29 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Phata",
          "nameMr": "मेरी फाटा",
          "nameHi": "मेरी फाटा",
          "time": "1:34 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.01395,
          "lng": 73.81742,
          "roadIndex": 8
        },
        {
          "name": "Adgaon Naka",
          "nameMr": "आडगाव नाका",
          "nameHi": "आडगाव नाका",
          "time": "1:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.03092,
          "lng": 73.85651,
          "roadIndex": 12
        },
        {
          "name": "Jatra Hotel Phata",
          "nameMr": "जत्रा हॉटेल फाटा",
          "nameHi": "जत्रा हॉटेल फाटा",
          "time": "1:46 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04008,
          "lng": 73.86994,
          "roadIndex": 13
        },
        {
          "name": "Kokangaon Phata",
          "nameMr": "कोकणगाव फाटा",
          "nameHi": "कोकणगाव फाटा",
          "time": "1:50 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06331,
          "lng": 73.90961,
          "roadIndex": 21
        },
        {
          "name": "Ozar Stand",
          "nameMr": "ओझर बस स्थानक",
          "nameHi": "ओझर बस स्थानक",
          "time": "1:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.06676,
          "lng": 73.93038,
          "roadIndex": 31
        },
        {
          "name": "HAL Airport Phata",
          "nameMr": "एच.ए.एल. विमानतळ फाटा",
          "nameHi": "एच.ए.एल. विमानतळ फाटा",
          "time": "2:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.10686,
          "lng": 73.94359,
          "roadIndex": 40
        },
        {
          "name": "Mohadi Phata",
          "nameMr": "मोहाडी फाटा",
          "nameHi": "मोहाडी फाटा",
          "time": "2:12 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14294,
          "lng": 73.97746,
          "roadIndex": 44
        },
        {
          "name": "Pimpalgaon Baswant",
          "nameMr": "पिंपळगाव बसवंत स्थानक",
          "nameHi": "पिंपळगाव बसवंत स्थानक",
          "time": "2:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.17553,
          "lng": 74.024,
          "roadIndex": 62
        },
        {
          "name": "Jalgaon Phata",
          "nameMr": "जळगाव फाटा",
          "nameHi": "जळगाव फाटा",
          "time": "2:25 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.21491,
          "lng": 74.04128,
          "roadIndex": 69
        },
        {
          "name": "Shirwade Vani Phata",
          "nameMr": "शिरवाडे वणी फाटा",
          "nameHi": "शिरवाडे वणी फाटा",
          "time": "2:34 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.23623,
          "lng": 74.06825,
          "roadIndex": 72
        },
        {
          "name": "Vadner Bhairav Phata",
          "nameMr": "वडनेर भैरव फाटा",
          "nameHi": "वडनेर भैरव फाटा",
          "time": "2:43 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.30359,
          "lng": 74.13831,
          "roadIndex": 82
        },
        {
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्थानक",
          "time": "2:55 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.32808,
          "lng": 74.24127,
          "roadIndex": 91
        },
        {
          "name": "Rahud Ghat Top",
          "nameMr": "राहुड घाट माथा",
          "nameHi": "राहुड घाट माथा",
          "time": "3:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36637,
          "lng": 74.30841,
          "roadIndex": 113
        },
        {
          "name": "Mangrul Phata",
          "nameMr": "मंगरूळ फाटा",
          "nameHi": "मंगरूळ फाटा",
          "time": "3:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.42299,
          "lng": 74.35541,
          "roadIndex": 121
        },
        {
          "name": "Umrane Bus Stand",
          "nameMr": "उमराणे बस स्थानक",
          "nameHi": "उमराणे बस स्थानक",
          "time": "3:21 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.46704,
          "lng": 74.41175,
          "roadIndex": 129
        },
        {
          "name": "Deola Phata",
          "nameMr": "देवळा फाटा",
          "nameHi": "देवळा फाटा",
          "time": "3:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.50265,
          "lng": 74.46454,
          "roadIndex": 136
        },
        {
          "name": "Malegaon Naka",
          "nameMr": "मालेगाव नाका",
          "nameHi": "मालेगाव नाका",
          "time": "3:34 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.53066,
          "lng": 74.49223,
          "roadIndex": 137
        },
        {
          "name": "Malegaon Central",
          "nameMr": "मालेगाव मध्यवर्ती आगार",
          "nameHi": "मालेगाव मध्यवर्ती आगार",
          "time": "3:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.55489,
          "lng": 74.52817,
          "roadIndex": 144
        },
        {
          "name": "Camp Malegaon",
          "nameMr": "कॅम्प मालेगाव",
          "nameHi": "कॅम्प मालेगाव",
          "time": "3:47 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.57573,
          "lng": 74.56539,
          "roadIndex": 150
        },
        {
          "name": "Saundane Phata",
          "nameMr": "सौंदाणे फाटा",
          "nameHi": "सौंदाणे फाटा",
          "time": "3:56 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.61545,
          "lng": 74.62589,
          "roadIndex": 156
        },
        {
          "name": "Zodga Bus Stand",
          "nameMr": "झोडगे बस स्थानक",
          "nameHi": "झोडगे बस स्थानक",
          "time": "4:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.71243,
          "lng": 74.69532,
          "roadIndex": 167
        },
        {
          "name": "Arvi Phata",
          "nameMr": "आरवी फाटा",
          "nameHi": "आरवी फाटा",
          "time": "4:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.77865,
          "lng": 74.73043,
          "roadIndex": 178
        },
        {
          "name": "Songir Toll Phata",
          "nameMr": "सोंगीर टोल फाटा",
          "nameHi": "सोंगीर टोल फाटा",
          "time": "4:20 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.84928,
          "lng": 74.763,
          "roadIndex": 188
        },
        {
          "name": "Mohadi Phata (Dhule)",
          "nameMr": "मोहाडी फाटा (धुळे)",
          "nameHi": "मोहाडी फाटा (धुळे)",
          "time": "4:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.88198,
          "lng": 74.77131,
          "roadIndex": 193
        },
        {
          "name": "Dhule CBS Stand",
          "nameMr": "धुळे सी.बी.एस. स्थानक",
          "nameHi": "धुळे सी.बी.एस. स्थानक",
          "time": "4:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.90204,
          "lng": 74.77486,
          "roadIndex": 196
        }
      ]
    },
    {
      "id": "BUS-108-1",
      "number": "MH 15 EG 4910",
      "type": "Lal Dabba (Ghat Special)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-SPT",
      "routeName": "Nashik CBS to Saptashrungi Gad",
      "routeNameMr": "नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी)",
      "destination": "Saptashrungi Gad (Vani)",
      "destinationMr": "सप्तशृंगी गड (वणी)",
      "via": "Panchavati, Dindori, Vani Stand, Nanduri",
      "driverName": "Khandu B. Gangurde (Emp #4701)",
      "conductorName": "Santosh Deore",
      "scheduledTime": "08:00 AM",
      "currentLat": 20.40044,
      "currentLng": 73.89937,
      "roadIndex": 135,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "40% (18/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "85% (Diesel)",
      "distanceFromStop": 0,
      "etaMinutes": 2,
      "previousStop": "Upper Valley View",
      "nextStop": "Temple Funicular Base",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4910 from Nashik CBS to Saptashrungi Gad is en route. Approaching Temple Funicular Base in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4910 नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी) मार्गावर धावत आहे. पुढील स्थानक रोपवे / पायऱ्या तळ सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4910 मार्गस्थ है। अगला स्टॉप रोपवे / पायऱ्या तळ लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "8:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Raviwar Karanja",
          "nameMr": "रविवार कारंजा",
          "nameHi": "रविवार कारंजा",
          "time": "8:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00401,
          "lng": 73.79023,
          "roadIndex": 3
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "8:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "8:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Stop (Amrutdham)",
          "nameMr": "मेरी थांबा (अमृतधाम)",
          "nameHi": "मेरी थांबा (अमृतधाम)",
          "time": "8:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02661,
          "lng": 73.80082,
          "roadIndex": 16
        },
        {
          "name": "Mhasrul Phata",
          "nameMr": "म्हसरूळ फाटा",
          "nameHi": "म्हसरूळ फाटा",
          "time": "8:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04817,
          "lng": 73.80616,
          "roadIndex": 18
        },
        {
          "name": "Ramsej Fort Phata",
          "nameMr": "रामशेज किल्ला फाटा",
          "nameHi": "रामशेज किल्ला फाटा",
          "time": "8:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09857,
          "lng": 73.80689,
          "roadIndex": 25
        },
        {
          "name": "Janori Phata",
          "nameMr": "जानोरी फाटा",
          "nameHi": "जानोरी फाटा",
          "time": "8:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14298,
          "lng": 73.8188,
          "roadIndex": 29
        },
        {
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्थानक",
          "time": "8:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.20551,
          "lng": 73.83499,
          "roadIndex": 43
        },
        {
          "name": "Dindori Town Phata",
          "nameMr": "दिंडोरी नगर फाटा",
          "nameHi": "दिंडोरी नगर फाटा",
          "time": "8:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.24009,
          "lng": 73.84804,
          "roadIndex": 52
        },
        {
          "name": "Ozar Khed Phata",
          "nameMr": "ओझरखेड फाटा",
          "nameHi": "ओझरखेड फाटा",
          "time": "9:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.2756,
          "lng": 73.86908,
          "roadIndex": 60
        },
        {
          "name": "Vani Stand",
          "nameMr": "वणी बस स्थानक",
          "nameHi": "वणी बस स्थानक",
          "time": "9:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.33529,
          "lng": 73.88645,
          "roadIndex": 78
        },
        {
          "name": "Khedgaon Phata",
          "nameMr": "खेडगाव फाटा",
          "nameHi": "खेडगाव फाटा",
          "time": "9:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kalwan Phata",
          "nameMr": "कळवण फाटा",
          "nameHi": "कळवण फाटा",
          "time": "9:28 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kasbe Vani",
          "nameMr": "कसबे वणी",
          "nameHi": "कसबे वणी",
          "time": "9:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.37401,
          "lng": 73.89141,
          "roadIndex": 81
        },
        {
          "name": "Nanduri Phata",
          "nameMr": "नांदुरी फाटा",
          "nameHi": "नांदुरी फाटा",
          "time": "9:37 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Nanduri Foothill Stand",
          "nameMr": "नांदुरी पायथा स्थानक",
          "nameHi": "नांदुरी पायथा स्थानक",
          "time": "9:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Saptashrungi Ghat Gate",
          "nameMr": "सप्तशृंगी घाट प्रवेशद्वार",
          "nameHi": "सप्तशृंगी घाट प्रवेशद्वार",
          "time": "9:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "First Hairpin Turn",
          "nameMr": "पहिला घाट वळण",
          "nameHi": "पहिला घाट वळण",
          "time": "9:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "Ganpati Tappa",
          "nameMr": "गणपती टप्पा",
          "nameHi": "गणपती टप्पा",
          "time": "9:57 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Upper Valley View",
          "nameMr": "दऱ्या दर्शन पॉईंट",
          "nameHi": "दऱ्या दर्शन पॉईंट",
          "time": "10:02 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Temple Funicular Base",
          "nameMr": "रोपवे / पायऱ्या तळ",
          "nameHi": "रोपवे / पायऱ्या तळ",
          "time": "10:07 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Saptashrungi Gad Top",
          "nameMr": "सप्तशृंगी गड माथा आगार",
          "nameHi": "सप्तशृंगी गड माथा आगार",
          "time": "10:12 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        }
      ]
    },
    {
      "id": "BUS-108-2",
      "number": "MH 15 TR 3305",
      "type": "Shivaee (Electric AC E-Bus)",
      "typeCode": "ELECTRIC",
      "badgeColor": "#00897B",
      "routeId": "R-NSK-SPT",
      "routeName": "Nashik CBS to Saptashrungi Gad",
      "routeNameMr": "नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी)",
      "destination": "Saptashrungi Gad (Vani)",
      "destinationMr": "सप्तशृंगी गड (वणी)",
      "via": "Panchavati, Dindori, Vani Stand, Nanduri",
      "driverName": "Somnath K. Bidgar (Emp #6055)",
      "conductorName": "Santosh Deore",
      "scheduledTime": "09:00 AM",
      "currentLat": 20.3864,
      "currentLng": 73.91061,
      "roadIndex": 128,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "48% (22/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "79% (Battery)",
      "distanceFromStop": 0,
      "etaMinutes": 2,
      "previousStop": "Nanduri Phata",
      "nextStop": "Nanduri Foothill Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 TR 3305 from Nashik CBS to Saptashrungi Gad is en route. Approaching Nanduri Foothill Stand in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 TR 3305 नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी) मार्गावर धावत आहे. पुढील स्थानक नांदुरी पायथा स्थानक सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 TR 3305 मार्गस्थ है। अगला स्टॉप नांदुरी पायथा स्थानक लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "9:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Raviwar Karanja",
          "nameMr": "रविवार कारंजा",
          "nameHi": "रविवार कारंजा",
          "time": "9:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00401,
          "lng": 73.79023,
          "roadIndex": 3
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "9:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "9:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Stop (Amrutdham)",
          "nameMr": "मेरी थांबा (अमृतधाम)",
          "nameHi": "मेरी थांबा (अमृतधाम)",
          "time": "9:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02661,
          "lng": 73.80082,
          "roadIndex": 16
        },
        {
          "name": "Mhasrul Phata",
          "nameMr": "म्हसरूळ फाटा",
          "nameHi": "म्हसरूळ फाटा",
          "time": "9:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04817,
          "lng": 73.80616,
          "roadIndex": 18
        },
        {
          "name": "Ramsej Fort Phata",
          "nameMr": "रामशेज किल्ला फाटा",
          "nameHi": "रामशेज किल्ला फाटा",
          "time": "9:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09857,
          "lng": 73.80689,
          "roadIndex": 25
        },
        {
          "name": "Janori Phata",
          "nameMr": "जानोरी फाटा",
          "nameHi": "जानोरी फाटा",
          "time": "9:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14298,
          "lng": 73.8188,
          "roadIndex": 29
        },
        {
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्थानक",
          "time": "9:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.20551,
          "lng": 73.83499,
          "roadIndex": 43
        },
        {
          "name": "Dindori Town Phata",
          "nameMr": "दिंडोरी नगर फाटा",
          "nameHi": "दिंडोरी नगर फाटा",
          "time": "9:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.24009,
          "lng": 73.84804,
          "roadIndex": 52
        },
        {
          "name": "Ozar Khed Phata",
          "nameMr": "ओझरखेड फाटा",
          "nameHi": "ओझरखेड फाटा",
          "time": "10:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.2756,
          "lng": 73.86908,
          "roadIndex": 60
        },
        {
          "name": "Vani Stand",
          "nameMr": "वणी बस स्थानक",
          "nameHi": "वणी बस स्थानक",
          "time": "10:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.33529,
          "lng": 73.88645,
          "roadIndex": 78
        },
        {
          "name": "Khedgaon Phata",
          "nameMr": "खेडगाव फाटा",
          "nameHi": "खेडगाव फाटा",
          "time": "10:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kalwan Phata",
          "nameMr": "कळवण फाटा",
          "nameHi": "कळवण फाटा",
          "time": "10:28 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kasbe Vani",
          "nameMr": "कसबे वणी",
          "nameHi": "कसबे वणी",
          "time": "10:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.37401,
          "lng": 73.89141,
          "roadIndex": 81
        },
        {
          "name": "Nanduri Phata",
          "nameMr": "नांदुरी फाटा",
          "nameHi": "नांदुरी फाटा",
          "time": "10:37 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Nanduri Foothill Stand",
          "nameMr": "नांदुरी पायथा स्थानक",
          "nameHi": "नांदुरी पायथा स्थानक",
          "time": "10:41 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Saptashrungi Ghat Gate",
          "nameMr": "सप्तशृंगी घाट प्रवेशद्वार",
          "nameHi": "सप्तशृंगी घाट प्रवेशद्वार",
          "time": "10:46 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "First Hairpin Turn",
          "nameMr": "पहिला घाट वळण",
          "nameHi": "पहिला घाट वळण",
          "time": "10:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "Ganpati Tappa",
          "nameMr": "गणपती टप्पा",
          "nameHi": "गणपती टप्पा",
          "time": "10:57 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Upper Valley View",
          "nameMr": "दऱ्या दर्शन पॉईंट",
          "nameHi": "दऱ्या दर्शन पॉईंट",
          "time": "11:02 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Temple Funicular Base",
          "nameMr": "रोपवे / पायऱ्या तळ",
          "nameHi": "रोपवे / पायऱ्या तळ",
          "time": "11:07 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Saptashrungi Gad Top",
          "nameMr": "सप्तशृंगी गड माथा आगार",
          "nameHi": "सप्तशृंगी गड माथा आगार",
          "time": "11:12 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        }
      ]
    },
    {
      "id": "BUS-108",
      "number": "MH 15 EG 4930",
      "type": "Lal Dabba (Ordinary Express)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-SPT",
      "routeName": "Nashik CBS to Saptashrungi Gad",
      "routeNameMr": "नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी)",
      "destination": "Saptashrungi Gad (Vani)",
      "destinationMr": "सप्तशृंगी गड (वणी)",
      "via": "Panchavati, Dindori, Vani Stand, Nanduri",
      "driverName": "Uttam S. Pawar (Emp #4690)",
      "conductorName": "Santosh Deore",
      "scheduledTime": "10:00 AM",
      "currentLat": 20.29642,
      "currentLng": 73.87658,
      "roadIndex": 68,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 99,
      "occupancy": "56% (26/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "71% (Diesel)",
      "distanceFromStop": 4.8,
      "etaMinutes": 6,
      "previousStop": "Ozar Khed Phata",
      "nextStop": "Vani Stand",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4930 from Nashik CBS to Saptashrungi Gad is en route. Approaching Vani Stand in approximately 6 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4930 नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी) मार्गावर धावत आहे. पुढील स्थानक वणी बस स्थानक सुमारे 6 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4930 मार्गस्थ है। अगला स्टॉप वणी बस स्थानक लगभग 6 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "10:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Raviwar Karanja",
          "nameMr": "रविवार कारंजा",
          "nameHi": "रविवार कारंजा",
          "time": "10:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00401,
          "lng": 73.79023,
          "roadIndex": 3
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "10:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "10:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Stop (Amrutdham)",
          "nameMr": "मेरी थांबा (अमृतधाम)",
          "nameHi": "मेरी थांबा (अमृतधाम)",
          "time": "10:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02661,
          "lng": 73.80082,
          "roadIndex": 16
        },
        {
          "name": "Mhasrul Phata",
          "nameMr": "म्हसरूळ फाटा",
          "nameHi": "म्हसरूळ फाटा",
          "time": "10:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04817,
          "lng": 73.80616,
          "roadIndex": 18
        },
        {
          "name": "Ramsej Fort Phata",
          "nameMr": "रामशेज किल्ला फाटा",
          "nameHi": "रामशेज किल्ला फाटा",
          "time": "10:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09857,
          "lng": 73.80689,
          "roadIndex": 25
        },
        {
          "name": "Janori Phata",
          "nameMr": "जानोरी फाटा",
          "nameHi": "जानोरी फाटा",
          "time": "10:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14298,
          "lng": 73.8188,
          "roadIndex": 29
        },
        {
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्थानक",
          "time": "10:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.20551,
          "lng": 73.83499,
          "roadIndex": 43
        },
        {
          "name": "Dindori Town Phata",
          "nameMr": "दिंडोरी नगर फाटा",
          "nameHi": "दिंडोरी नगर फाटा",
          "time": "10:53 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.24009,
          "lng": 73.84804,
          "roadIndex": 52
        },
        {
          "name": "Ozar Khed Phata",
          "nameMr": "ओझरखेड फाटा",
          "nameHi": "ओझरखेड फाटा",
          "time": "11:01 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.2756,
          "lng": 73.86908,
          "roadIndex": 60
        },
        {
          "name": "Vani Stand",
          "nameMr": "वणी बस स्थानक",
          "nameHi": "वणी बस स्थानक",
          "time": "11:19 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.33529,
          "lng": 73.88645,
          "roadIndex": 78
        },
        {
          "name": "Khedgaon Phata",
          "nameMr": "खेडगाव फाटा",
          "nameHi": "खेडगाव फाटा",
          "time": "11:24 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kalwan Phata",
          "nameMr": "कळवण फाटा",
          "nameHi": "कळवण फाटा",
          "time": "11:28 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kasbe Vani",
          "nameMr": "कसबे वणी",
          "nameHi": "कसबे वणी",
          "time": "11:32 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.37401,
          "lng": 73.89141,
          "roadIndex": 81
        },
        {
          "name": "Nanduri Phata",
          "nameMr": "नांदुरी फाटा",
          "nameHi": "नांदुरी फाटा",
          "time": "11:37 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Nanduri Foothill Stand",
          "nameMr": "नांदुरी पायथा स्थानक",
          "nameHi": "नांदुरी पायथा स्थानक",
          "time": "11:41 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Saptashrungi Ghat Gate",
          "nameMr": "सप्तशृंगी घाट प्रवेशद्वार",
          "nameHi": "सप्तशृंगी घाट प्रवेशद्वार",
          "time": "11:46 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "First Hairpin Turn",
          "nameMr": "पहिला घाट वळण",
          "nameHi": "पहिला घाट वळण",
          "time": "11:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "Ganpati Tappa",
          "nameMr": "गणपती टप्पा",
          "nameHi": "गणपती टप्पा",
          "time": "11:57 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Upper Valley View",
          "nameMr": "दऱ्या दर्शन पॉईंट",
          "nameHi": "दऱ्या दर्शन पॉईंट",
          "time": "12:02 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Temple Funicular Base",
          "nameMr": "रोपवे / पायऱ्या तळ",
          "nameHi": "रोपवे / पायऱ्या तळ",
          "time": "12:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Saptashrungi Gad Top",
          "nameMr": "सप्तशृंगी गड माथा आगार",
          "nameHi": "सप्तशृंगी गड माथा आगार",
          "time": "12:12 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        }
      ]
    },
    {
      "id": "BUS-108-4",
      "number": "MH 15 AK 2780",
      "type": "Hirkani (Semi Luxury)",
      "typeCode": "SEMI_LUXURY",
      "badgeColor": "#2E7D32",
      "routeId": "R-NSK-SPT",
      "routeName": "Nashik CBS to Saptashrungi Gad",
      "routeNameMr": "नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी)",
      "destination": "Saptashrungi Gad (Vani)",
      "destinationMr": "सप्तशृंगी गड (वणी)",
      "via": "Panchavati, Dindori, Vani Stand, Nanduri",
      "driverName": "Ambadas R. Jadhav (Emp #5311)",
      "conductorName": "Santosh Deore",
      "scheduledTime": "11:00 AM",
      "currentLat": 20.06755,
      "currentLng": 73.80555,
      "roadIndex": 21,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 97,
      "occupancy": "64% (30/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "64% (Diesel)",
      "distanceFromStop": 3.5,
      "etaMinutes": 4,
      "previousStop": "Mhasrul Phata",
      "nextStop": "Ramsej Fort Phata",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 AK 2780 from Nashik CBS to Saptashrungi Gad is en route. Approaching Ramsej Fort Phata in approximately 4 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 AK 2780 नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी) मार्गावर धावत आहे. पुढील स्थानक रामशेज किल्ला फाटा सुमारे 4 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 AK 2780 मार्गस्थ है। अगला स्टॉप रामशेज किल्ला फाटा लगभग 4 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "11:00 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Raviwar Karanja",
          "nameMr": "रविवार कारंजा",
          "nameHi": "रविवार कारंजा",
          "time": "11:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00401,
          "lng": 73.79023,
          "roadIndex": 3
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "11:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "11:13 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Stop (Amrutdham)",
          "nameMr": "मेरी थांबा (अमृतधाम)",
          "nameHi": "मेरी थांबा (अमृतधाम)",
          "time": "11:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02661,
          "lng": 73.80082,
          "roadIndex": 16
        },
        {
          "name": "Mhasrul Phata",
          "nameMr": "म्हसरूळ फाटा",
          "nameHi": "म्हसरूळ फाटा",
          "time": "11:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04817,
          "lng": 73.80616,
          "roadIndex": 18
        },
        {
          "name": "Ramsej Fort Phata",
          "nameMr": "रामशेज किल्ला फाटा",
          "nameHi": "रामशेज किल्ला फाटा",
          "time": "11:32 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.09857,
          "lng": 73.80689,
          "roadIndex": 25
        },
        {
          "name": "Janori Phata",
          "nameMr": "जानोरी फाटा",
          "nameHi": "जानोरी फाटा",
          "time": "11:39 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14298,
          "lng": 73.8188,
          "roadIndex": 29
        },
        {
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्थानक",
          "time": "11:48 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.20551,
          "lng": 73.83499,
          "roadIndex": 43
        },
        {
          "name": "Dindori Town Phata",
          "nameMr": "दिंडोरी नगर फाटा",
          "nameHi": "दिंडोरी नगर फाटा",
          "time": "11:53 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.24009,
          "lng": 73.84804,
          "roadIndex": 52
        },
        {
          "name": "Ozar Khed Phata",
          "nameMr": "ओझरखेड फाटा",
          "nameHi": "ओझरखेड फाटा",
          "time": "12:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.2756,
          "lng": 73.86908,
          "roadIndex": 60
        },
        {
          "name": "Vani Stand",
          "nameMr": "वणी बस स्थानक",
          "nameHi": "वणी बस स्थानक",
          "time": "12:19 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.33529,
          "lng": 73.88645,
          "roadIndex": 78
        },
        {
          "name": "Khedgaon Phata",
          "nameMr": "खेडगाव फाटा",
          "nameHi": "खेडगाव फाटा",
          "time": "12:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kalwan Phata",
          "nameMr": "कळवण फाटा",
          "nameHi": "कळवण फाटा",
          "time": "12:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kasbe Vani",
          "nameMr": "कसबे वणी",
          "nameHi": "कसबे वणी",
          "time": "12:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.37401,
          "lng": 73.89141,
          "roadIndex": 81
        },
        {
          "name": "Nanduri Phata",
          "nameMr": "नांदुरी फाटा",
          "nameHi": "नांदुरी फाटा",
          "time": "12:37 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Nanduri Foothill Stand",
          "nameMr": "नांदुरी पायथा स्थानक",
          "nameHi": "नांदुरी पायथा स्थानक",
          "time": "12:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Saptashrungi Ghat Gate",
          "nameMr": "सप्तशृंगी घाट प्रवेशद्वार",
          "nameHi": "सप्तशृंगी घाट प्रवेशद्वार",
          "time": "12:46 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "First Hairpin Turn",
          "nameMr": "पहिला घाट वळण",
          "nameHi": "पहिला घाट वळण",
          "time": "12:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "Ganpati Tappa",
          "nameMr": "गणपती टप्पा",
          "nameHi": "गणपती टप्पा",
          "time": "12:57 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Upper Valley View",
          "nameMr": "दऱ्या दर्शन पॉईंट",
          "nameHi": "दऱ्या दर्शन पॉईंट",
          "time": "1:02 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Temple Funicular Base",
          "nameMr": "रोपवे / पायऱ्या तळ",
          "nameHi": "रोपवे / पायऱ्या तळ",
          "time": "1:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Saptashrungi Gad Top",
          "nameMr": "सप्तशृंगी गड माथा आगार",
          "nameHi": "सप्तशृंगी गड माथा आगार",
          "time": "1:12 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        }
      ]
    },
    {
      "id": "BUS-108-5",
      "number": "MH 15 EG 4980",
      "type": "Lal Dabba (Ghat Special)",
      "typeCode": "ORDINARY",
      "badgeColor": "#D32F2F",
      "routeId": "R-NSK-SPT",
      "routeName": "Nashik CBS to Saptashrungi Gad",
      "routeNameMr": "नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी)",
      "destination": "Saptashrungi Gad (Vani)",
      "destinationMr": "सप्तशृंगी गड (वणी)",
      "via": "Panchavati, Dindori, Vani Stand, Nanduri",
      "driverName": "Baban T. Deshmukh (Emp #4812)",
      "conductorName": "Santosh Deore",
      "scheduledTime": "12:00 PM",
      "currentLat": 20.00401,
      "currentLng": 73.79023,
      "roadIndex": 3,
      "speed": 48,
      "status": "On Time",
      "statusColor": "#10B981",
      "delayMinutes": 0,
      "confidenceScore": 98,
      "occupancy": "72% (34/45 Seats)",
      "occupancyStatus": "Moderate",
      "fuel": "57% (Diesel)",
      "distanceFromStop": 0.4,
      "etaMinutes": 2,
      "previousStop": "Raviwar Karanja",
      "nextStop": "Panchavati Karanja",
      "lastGpsUpdate": "10 seconds ago",
      "voiceScriptEn": "MSRTC bus MH 15 EG 4980 from Nashik CBS to Saptashrungi Gad is en route. Approaching Panchavati Karanja in approximately 2 minutes.",
      "voiceScriptMr": "एस.टी. बस क्रमांक MH 15 EG 4980 नाशिक सी.बी.एस. ते सप्तशृंगी गड (वणी) मार्गावर धावत आहे. पुढील स्थानक पंचवटी कारंजा सुमारे 2 मिनिटांत येत आहे.",
      "voiceScriptHi": "एस.टी. बस क्रमांक MH 15 EG 4980 मार्गस्थ है। अगला स्टॉप पंचवटी कारंजा लगभग 2 मिनट में आ रहा है।",
      "intermediateStops": [
        {
          "name": "Nashik CBS",
          "nameMr": "नाशिक सी.बी.एस.",
          "nameHi": "नाशिक सी.बी.एस.",
          "time": "12:00 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.99745,
          "lng": 73.78981,
          "roadIndex": 0
        },
        {
          "name": "Raviwar Karanja",
          "nameMr": "रविवार कारंजा",
          "nameHi": "रविवार कारंजा",
          "time": "12:04 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00401,
          "lng": 73.79023,
          "roadIndex": 3
        },
        {
          "name": "Panchavati Karanja",
          "nameMr": "पंचवटी कारंजा",
          "nameHi": "पंचवटी कारंजा",
          "time": "12:09 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.00457,
          "lng": 73.79439,
          "roadIndex": 4
        },
        {
          "name": "Nimani Stand",
          "nameMr": "निमाणी बस स्थानक",
          "nameHi": "निमाणी बस स्थानक",
          "time": "12:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.00871,
          "lng": 73.80195,
          "roadIndex": 6
        },
        {
          "name": "Meri Stop (Amrutdham)",
          "nameMr": "मेरी थांबा (अमृतधाम)",
          "nameHi": "मेरी थांबा (अमृतधाम)",
          "time": "12:18 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.02661,
          "lng": 73.80082,
          "roadIndex": 16
        },
        {
          "name": "Mhasrul Phata",
          "nameMr": "म्हसरूळ फाटा",
          "nameHi": "म्हसरूळ फाटा",
          "time": "12:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.04817,
          "lng": 73.80616,
          "roadIndex": 18
        },
        {
          "name": "Ramsej Fort Phata",
          "nameMr": "रामशेज किल्ला फाटा",
          "nameHi": "रामशेज किल्ला फाटा",
          "time": "12:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.09857,
          "lng": 73.80689,
          "roadIndex": 25
        },
        {
          "name": "Janori Phata",
          "nameMr": "जानोरी फाटा",
          "nameHi": "जानोरी फाटा",
          "time": "12:39 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.14298,
          "lng": 73.8188,
          "roadIndex": 29
        },
        {
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्थानक",
          "time": "12:48 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.20551,
          "lng": 73.83499,
          "roadIndex": 43
        },
        {
          "name": "Dindori Town Phata",
          "nameMr": "दिंडोरी नगर फाटा",
          "nameHi": "दिंडोरी नगर फाटा",
          "time": "12:53 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.24009,
          "lng": 73.84804,
          "roadIndex": 52
        },
        {
          "name": "Ozar Khed Phata",
          "nameMr": "ओझरखेड फाटा",
          "nameHi": "ओझरखेड फाटा",
          "time": "1:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.2756,
          "lng": 73.86908,
          "roadIndex": 60
        },
        {
          "name": "Vani Stand",
          "nameMr": "वणी बस स्थानक",
          "nameHi": "वणी बस स्थानक",
          "time": "1:19 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.33529,
          "lng": 73.88645,
          "roadIndex": 78
        },
        {
          "name": "Khedgaon Phata",
          "nameMr": "खेडगाव फाटा",
          "nameHi": "खेडगाव फाटा",
          "time": "1:24 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kalwan Phata",
          "nameMr": "कळवण फाटा",
          "nameHi": "कळवण फाटा",
          "time": "1:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.36042,
          "lng": 73.89374,
          "roadIndex": 79
        },
        {
          "name": "Kasbe Vani",
          "nameMr": "कसबे वणी",
          "nameHi": "कसबे वणी",
          "time": "1:32 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.37401,
          "lng": 73.89141,
          "roadIndex": 81
        },
        {
          "name": "Nanduri Phata",
          "nameMr": "नांदुरी फाटा",
          "nameHi": "नांदुरी फाटा",
          "time": "1:37 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Nanduri Foothill Stand",
          "nameMr": "नांदुरी पायथा स्थानक",
          "nameHi": "नांदुरी पायथा स्थानक",
          "time": "1:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3864,
          "lng": 73.91061,
          "roadIndex": 128
        },
        {
          "name": "Saptashrungi Ghat Gate",
          "nameMr": "सप्तशृंगी घाट प्रवेशद्वार",
          "nameHi": "सप्तशृंगी घाट प्रवेशद्वार",
          "time": "1:46 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "First Hairpin Turn",
          "nameMr": "पहिला घाट वळण",
          "nameHi": "पहिला घाट वळण",
          "time": "1:51 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.39172,
          "lng": 73.90874,
          "roadIndex": 130
        },
        {
          "name": "Ganpati Tappa",
          "nameMr": "गणपती टप्पा",
          "nameHi": "गणपती टप्पा",
          "time": "1:57 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Upper Valley View",
          "nameMr": "दऱ्या दर्शन पॉईंट",
          "nameHi": "दऱ्या दर्शन पॉईंट",
          "time": "2:02 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Temple Funicular Base",
          "nameMr": "रोपवे / पायऱ्या तळ",
          "nameHi": "रोपवे / पायऱ्या तळ",
          "time": "2:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        },
        {
          "name": "Saptashrungi Gad Top",
          "nameMr": "सप्तशृंगी गड माथा आगार",
          "nameHi": "सप्तशृंगी गड माथा आगार",
          "time": "2:12 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.40044,
          "lng": 73.89937,
          "roadIndex": 135
        }
      ]
    }
  ],
  "routesGeometry": {
    "BUS-101": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99832,
        73.79014
      ],
      [
        20.00002,
        73.78995
      ],
      [
        20.00201,
        73.78986
      ],
      [
        20.00302,
        73.78986
      ],
      [
        20.00393,
        73.79061
      ],
      [
        20.00413,
        73.79186
      ],
      [
        20.00413,
        73.79277
      ],
      [
        20.00505,
        73.79538
      ],
      [
        20.0057,
        73.79714
      ],
      [
        20.00611,
        73.79837
      ],
      [
        20.00729,
        73.80023
      ],
      [
        20.00845,
        73.80151
      ],
      [
        20.00902,
        73.80303
      ],
      [
        20.00938,
        73.80563
      ],
      [
        20.01001,
        73.80745
      ],
      [
        20.01074,
        73.81036
      ],
      [
        20.00892,
        73.81392
      ],
      [
        20.00841,
        73.81646
      ],
      [
        20.00763,
        73.81938
      ],
      [
        20.00651,
        73.82215
      ],
      [
        20.00578,
        73.82386
      ],
      [
        20.00525,
        73.82495
      ],
      [
        20.00461,
        73.82672
      ],
      [
        20.00368,
        73.82868
      ],
      [
        20.00174,
        73.83234
      ],
      [
        19.99975,
        73.83557
      ],
      [
        19.99826,
        73.83846
      ],
      [
        19.99714,
        73.84065
      ],
      [
        19.99685,
        73.84311
      ],
      [
        19.99727,
        73.84503
      ],
      [
        19.99783,
        73.8492
      ],
      [
        19.99829,
        73.85119
      ],
      [
        19.99856,
        73.85455
      ],
      [
        19.99946,
        73.85972
      ],
      [
        19.9999,
        73.86501
      ],
      [
        20.00053,
        73.86816
      ],
      [
        20.00081,
        73.87032
      ],
      [
        20.00071,
        73.87301
      ],
      [
        20.00105,
        73.87506
      ],
      [
        20.00179,
        73.87961
      ],
      [
        20.00173,
        73.88137
      ],
      [
        20.00073,
        73.88616
      ],
      [
        20.00009,
        73.88922
      ],
      [
        19.99853,
        73.89341
      ],
      [
        19.99736,
        73.89512
      ],
      [
        19.99647,
        73.8983
      ],
      [
        19.99651,
        73.89985
      ],
      [
        19.99689,
        73.90353
      ],
      [
        19.99713,
        73.90574
      ],
      [
        19.99723,
        73.90823
      ],
      [
        19.99814,
        73.91061
      ],
      [
        19.9979,
        73.91223
      ],
      [
        19.99732,
        73.91531
      ],
      [
        19.99753,
        73.91766
      ],
      [
        19.99907,
        73.91998
      ],
      [
        19.99999,
        73.92192
      ],
      [
        20.00001,
        73.92335
      ],
      [
        19.99964,
        73.92522
      ],
      [
        19.99963,
        73.93065
      ],
      [
        20.00059,
        73.93427
      ],
      [
        20.00096,
        73.93639
      ],
      [
        20.00158,
        73.94096
      ],
      [
        20.00301,
        73.94798
      ],
      [
        20.00449,
        73.95372
      ],
      [
        20.00528,
        73.95723
      ],
      [
        20.00599,
        73.96097
      ],
      [
        20.00679,
        73.96547
      ],
      [
        20.00789,
        73.97153
      ],
      [
        20.00939,
        73.97787
      ],
      [
        20.01056,
        73.98108
      ],
      [
        20.01234,
        73.98543
      ],
      [
        20.01399,
        73.98865
      ],
      [
        20.01967,
        73.99583
      ],
      [
        20.02113,
        73.99582
      ],
      [
        20.02379,
        73.99552
      ],
      [
        20.02415,
        73.99553
      ],
      [
        20.02444,
        73.99575
      ],
      [
        20.02674,
        73.99796
      ],
      [
        20.02915,
        74.00058
      ],
      [
        20.03261,
        74.00441
      ],
      [
        20.03432,
        74.00704
      ],
      [
        20.03767,
        74.01322
      ],
      [
        20.03868,
        74.01478
      ],
      [
        20.04621,
        74.02234
      ],
      [
        20.05074,
        74.02677
      ],
      [
        20.05287,
        74.02794
      ],
      [
        20.05814,
        74.0297
      ],
      [
        20.05938,
        74.03061
      ],
      [
        20.06017,
        74.03272
      ],
      [
        20.06105,
        74.03563
      ],
      [
        20.06152,
        74.03944
      ],
      [
        20.0621,
        74.04312
      ],
      [
        20.06244,
        74.04387
      ],
      [
        20.06353,
        74.0445
      ],
      [
        20.06621,
        74.04551
      ],
      [
        20.06839,
        74.04662
      ],
      [
        20.07001,
        74.04763
      ],
      [
        20.0708,
        74.04886
      ],
      [
        20.07111,
        74.05087
      ],
      [
        20.07128,
        74.05285
      ],
      [
        20.07145,
        74.05534
      ],
      [
        20.07179,
        74.05917
      ],
      [
        20.07311,
        74.06898
      ],
      [
        20.07328,
        74.07235
      ],
      [
        20.07347,
        74.07575
      ],
      [
        20.07352,
        74.07901
      ],
      [
        20.07329,
        74.0812
      ],
      [
        20.07302,
        74.08448
      ],
      [
        20.07287,
        74.0888
      ],
      [
        20.07274,
        74.09561
      ],
      [
        20.0722,
        74.09909
      ],
      [
        20.07052,
        74.10501
      ],
      [
        20.07062,
        74.10676
      ],
      [
        20.07347,
        74.10885
      ],
      [
        20.07662,
        74.11068
      ],
      [
        20.07694,
        74.10774
      ],
      [
        20.07875,
        74.10787
      ],
      [
        20.0795,
        74.10752
      ],
      [
        20.08085,
        74.10763
      ],
      [
        20.08199,
        74.10709
      ],
      [
        20.08237,
        74.1088
      ],
      [
        20.08226,
        74.10967
      ],
      [
        20.08137,
        74.1102
      ],
      [
        20.07876,
        74.1097
      ],
      [
        20.0767,
        74.11072
      ],
      [
        20.07611,
        74.11235
      ],
      [
        20.07499,
        74.11787
      ],
      [
        20.07461,
        74.12153
      ],
      [
        20.07503,
        74.12744
      ],
      [
        20.07492,
        74.13309
      ],
      [
        20.07454,
        74.13802
      ],
      [
        20.07361,
        74.14207
      ],
      [
        20.07314,
        74.14723
      ],
      [
        20.07247,
        74.15171
      ],
      [
        20.07163,
        74.15563
      ],
      [
        20.07067,
        74.15925
      ],
      [
        20.07012,
        74.16184
      ],
      [
        20.06961,
        74.16641
      ],
      [
        20.06939,
        74.16878
      ],
      [
        20.06973,
        74.17013
      ],
      [
        20.07021,
        74.1714
      ],
      [
        20.0706,
        74.17473
      ],
      [
        20.07096,
        74.17981
      ],
      [
        20.0716,
        74.18473
      ],
      [
        20.07198,
        74.18926
      ],
      [
        20.07165,
        74.19148
      ],
      [
        20.07067,
        74.19524
      ],
      [
        20.07073,
        74.19778
      ],
      [
        20.0723,
        74.20006
      ],
      [
        20.0737,
        74.2014
      ],
      [
        20.07441,
        74.20393
      ],
      [
        20.07492,
        74.20746
      ],
      [
        20.07654,
        74.20922
      ],
      [
        20.07848,
        74.2109
      ],
      [
        20.08061,
        74.21283
      ],
      [
        20.08388,
        74.21444
      ],
      [
        20.08726,
        74.21647
      ],
      [
        20.08998,
        74.21849
      ],
      [
        20.09242,
        74.21939
      ],
      [
        20.0954,
        74.2209
      ],
      [
        20.09889,
        74.22234
      ],
      [
        20.10162,
        74.2246
      ],
      [
        20.10275,
        74.22527
      ],
      [
        20.10314,
        74.22603
      ],
      [
        20.10334,
        74.22622
      ],
      [
        20.1057,
        74.22741
      ],
      [
        20.10707,
        74.2282
      ],
      [
        20.10857,
        74.2288
      ],
      [
        20.11105,
        74.22864
      ],
      [
        20.11933,
        74.22904
      ],
      [
        20.12628,
        74.23127
      ],
      [
        20.12979,
        74.23642
      ],
      [
        20.1284,
        74.23916
      ],
      [
        20.12363,
        74.23794
      ],
      [
        20.12743,
        74.23889
      ],
      [
        20.1297,
        74.23737
      ],
      [
        20.12806,
        74.23235
      ],
      [
        20.11967,
        74.22908
      ],
      [
        20.1118,
        74.22833
      ],
      [
        20.10903,
        74.22886
      ],
      [
        20.10752,
        74.22862
      ],
      [
        20.10316,
        74.22624
      ],
      [
        20.10253,
        74.227
      ],
      [
        20.09817,
        74.23342
      ],
      [
        20.09713,
        74.23502
      ],
      [
        20.09554,
        74.23678
      ],
      [
        20.09421,
        74.23947
      ],
      [
        20.09177,
        74.2429
      ],
      [
        20.09065,
        74.24453
      ],
      [
        20.08914,
        74.24735
      ],
      [
        20.087,
        74.25126
      ],
      [
        20.08476,
        74.25613
      ],
      [
        20.08274,
        74.25934
      ],
      [
        20.08068,
        74.26281
      ],
      [
        20.07837,
        74.26672
      ],
      [
        20.07673,
        74.26939
      ],
      [
        20.07562,
        74.27174
      ],
      [
        20.07247,
        74.2762
      ],
      [
        20.07055,
        74.27913
      ],
      [
        20.06984,
        74.2806
      ],
      [
        20.06686,
        74.2833
      ],
      [
        20.06594,
        74.28434
      ],
      [
        20.06575,
        74.28615
      ],
      [
        20.0652,
        74.28861
      ],
      [
        20.06454,
        74.29053
      ],
      [
        20.06091,
        74.29399
      ],
      [
        20.05941,
        74.29566
      ],
      [
        20.05838,
        74.29784
      ],
      [
        20.05729,
        74.30285
      ],
      [
        20.05736,
        74.30392
      ],
      [
        20.05789,
        74.30629
      ],
      [
        20.05792,
        74.30817
      ],
      [
        20.05771,
        74.31051
      ],
      [
        20.05746,
        74.31505
      ],
      [
        20.05723,
        74.31796
      ],
      [
        20.05641,
        74.32003
      ],
      [
        20.0563,
        74.32149
      ],
      [
        20.05707,
        74.32474
      ],
      [
        20.05775,
        74.32886
      ],
      [
        20.05783,
        74.33115
      ],
      [
        20.0576,
        74.33513
      ],
      [
        20.05716,
        74.33939
      ],
      [
        20.05663,
        74.34375
      ],
      [
        20.05578,
        74.3481
      ],
      [
        20.05555,
        74.35173
      ],
      [
        20.05538,
        74.3538
      ],
      [
        20.05506,
        74.35747
      ],
      [
        20.05462,
        74.36073
      ],
      [
        20.05416,
        74.36272
      ],
      [
        20.05405,
        74.36443
      ],
      [
        20.05332,
        74.36812
      ],
      [
        20.05286,
        74.36934
      ],
      [
        20.0522,
        74.37243
      ],
      [
        20.05156,
        74.37696
      ],
      [
        20.05136,
        74.38135
      ],
      [
        20.05132,
        74.38647
      ],
      [
        20.05129,
        74.39254
      ],
      [
        20.0508,
        74.39912
      ],
      [
        20.05109,
        74.40234
      ],
      [
        20.05158,
        74.4037
      ],
      [
        20.05168,
        74.40461
      ],
      [
        20.05161,
        74.40643
      ],
      [
        20.05125,
        74.40984
      ],
      [
        20.05072,
        74.41318
      ],
      [
        20.04951,
        74.41867
      ],
      [
        20.0486,
        74.42189
      ],
      [
        20.04751,
        74.42521
      ],
      [
        20.04728,
        74.42891
      ],
      [
        20.04583,
        74.43367
      ],
      [
        20.0454,
        74.43683
      ],
      [
        20.04523,
        74.43899
      ],
      [
        20.04488,
        74.44099
      ],
      [
        20.04348,
        74.44647
      ],
      [
        20.04173,
        74.45233
      ],
      [
        20.04142,
        74.45634
      ],
      [
        20.04107,
        74.46623
      ],
      [
        20.04099,
        74.46944
      ],
      [
        20.04118,
        74.4731
      ],
      [
        20.04139,
        74.47535
      ],
      [
        20.04184,
        74.47706
      ],
      [
        20.04243,
        74.47925
      ],
      [
        20.04325,
        74.4833
      ],
      [
        20.0429,
        74.48518
      ],
      [
        20.04234,
        74.48774
      ],
      [
        20.04247,
        74.4891
      ]
    ],
    "BUS-102": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        19.99659,
        73.79062
      ],
      [
        19.99427,
        73.7904
      ],
      [
        19.99325,
        73.78606
      ],
      [
        19.99354,
        73.78251
      ],
      [
        19.99564,
        73.78207
      ],
      [
        19.99709,
        73.78104
      ],
      [
        19.99424,
        73.77188
      ],
      [
        19.99436,
        73.75959
      ],
      [
        19.99178,
        73.74217
      ],
      [
        19.98994,
        73.7421
      ],
      [
        19.99169,
        73.74159
      ],
      [
        19.99025,
        73.73092
      ],
      [
        19.98591,
        73.72417
      ],
      [
        19.98382,
        73.71926
      ],
      [
        19.98182,
        73.71637
      ],
      [
        19.98156,
        73.71259
      ],
      [
        19.97946,
        73.70935
      ],
      [
        19.97765,
        73.69479
      ],
      [
        19.97551,
        73.69101
      ],
      [
        19.97361,
        73.68566
      ],
      [
        19.97027,
        73.68697
      ],
      [
        19.96803,
        73.68947
      ],
      [
        19.96739,
        73.6895
      ],
      [
        19.97027,
        73.68697
      ],
      [
        19.97361,
        73.68566
      ],
      [
        19.96604,
        73.66124
      ],
      [
        19.96474,
        73.64932
      ],
      [
        19.96026,
        73.64126
      ],
      [
        19.95956,
        73.62912
      ],
      [
        19.95736,
        73.62531
      ],
      [
        19.95916,
        73.61857
      ],
      [
        19.95862,
        73.61335
      ],
      [
        19.95015,
        73.61291
      ],
      [
        19.9473,
        73.61115
      ],
      [
        19.9436,
        73.60991
      ],
      [
        19.94096,
        73.60949
      ],
      [
        19.93957,
        73.61004
      ],
      [
        19.938,
        73.60935
      ],
      [
        19.93957,
        73.61004
      ],
      [
        19.94096,
        73.60949
      ],
      [
        19.9436,
        73.60991
      ],
      [
        19.9473,
        73.61115
      ],
      [
        19.95015,
        73.61291
      ],
      [
        19.95862,
        73.61335
      ],
      [
        19.95695,
        73.60392
      ],
      [
        19.95545,
        73.60067
      ],
      [
        19.95456,
        73.59086
      ],
      [
        19.95322,
        73.58512
      ],
      [
        19.95201,
        73.5749
      ],
      [
        19.95198,
        73.56881
      ],
      [
        19.95149,
        73.56676
      ],
      [
        19.94823,
        73.55882
      ],
      [
        19.94515,
        73.55328
      ],
      [
        19.9444,
        73.54877
      ],
      [
        19.94102,
        73.54171
      ],
      [
        19.93831,
        73.53736
      ],
      [
        19.93297,
        73.53134
      ],
      [
        19.9326,
        73.52984
      ],
      [
        19.9314,
        73.53049
      ],
      [
        19.93118,
        73.53093
      ],
      [
        19.93188,
        73.53116
      ]
    ],
    "BUS-103": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        19.99659,
        73.79062
      ],
      [
        19.99442,
        73.79039
      ],
      [
        19.99429,
        73.7957
      ],
      [
        19.99404,
        73.794
      ],
      [
        19.98856,
        73.79284
      ],
      [
        19.99079,
        73.79924
      ],
      [
        19.98753,
        73.80111
      ],
      [
        19.98664,
        73.80309
      ],
      [
        19.98668,
        73.80372
      ],
      [
        19.98738,
        73.80395
      ],
      [
        19.98736,
        73.80486
      ],
      [
        19.98815,
        73.80483
      ],
      [
        19.98836,
        73.80631
      ],
      [
        19.98929,
        73.80638
      ],
      [
        19.98915,
        73.80907
      ],
      [
        19.98663,
        73.81002
      ],
      [
        19.98122,
        73.81037
      ],
      [
        19.97941,
        73.80777
      ],
      [
        19.97395,
        73.8128
      ],
      [
        19.96644,
        73.82153
      ],
      [
        19.95253,
        73.83959
      ],
      [
        19.95049,
        73.84511
      ],
      [
        19.94701,
        73.8471
      ],
      [
        19.93841,
        73.85581
      ],
      [
        19.93575,
        73.86035
      ],
      [
        19.93199,
        73.86385
      ],
      [
        19.92662,
        73.87563
      ],
      [
        19.92174,
        73.88164
      ],
      [
        19.92028,
        73.88431
      ],
      [
        19.91498,
        73.89862
      ],
      [
        19.88525,
        73.94184
      ],
      [
        19.87996,
        73.94503
      ],
      [
        19.87763,
        73.9488
      ],
      [
        19.8756,
        73.94922
      ],
      [
        19.87625,
        73.95172
      ],
      [
        19.87555,
        73.95312
      ],
      [
        19.87156,
        73.95373
      ],
      [
        19.87024,
        73.95448
      ],
      [
        19.86324,
        73.96902
      ],
      [
        19.8622,
        73.97338
      ],
      [
        19.84263,
        73.99489
      ],
      [
        19.84017,
        74.00025
      ],
      [
        19.83987,
        74.00141
      ],
      [
        19.84244,
        74.003
      ],
      [
        19.84554,
        74.00236
      ],
      [
        19.84481,
        74.00229
      ],
      [
        19.84627,
        74.00999
      ],
      [
        19.84487,
        74.02118
      ],
      [
        19.84444,
        74.03018
      ],
      [
        19.84308,
        74.03428
      ],
      [
        19.84056,
        74.05611
      ],
      [
        19.84052,
        74.07561
      ],
      [
        19.83941,
        74.08014
      ],
      [
        19.83967,
        74.08247
      ],
      [
        19.8391,
        74.08623
      ],
      [
        19.8406,
        74.09582
      ],
      [
        19.83992,
        74.10201
      ],
      [
        19.84049,
        74.10479
      ],
      [
        19.83598,
        74.11595
      ],
      [
        19.83426,
        74.12218
      ],
      [
        19.83003,
        74.14626
      ],
      [
        19.82851,
        74.16299
      ],
      [
        19.82798,
        74.16699
      ],
      [
        19.82641,
        74.17228
      ],
      [
        19.82659,
        74.17495
      ],
      [
        19.82597,
        74.17863
      ],
      [
        19.82346,
        74.18307
      ],
      [
        19.82075,
        74.18997
      ],
      [
        19.81849,
        74.20184
      ],
      [
        19.80967,
        74.20065
      ],
      [
        19.80288,
        74.19557
      ],
      [
        19.79746,
        74.19332
      ],
      [
        19.7959,
        74.19025
      ],
      [
        19.79354,
        74.20727
      ],
      [
        19.80255,
        74.20574
      ],
      [
        19.80736,
        74.20631
      ],
      [
        19.8159,
        74.204
      ],
      [
        19.81727,
        74.2075
      ],
      [
        19.81813,
        74.20576
      ],
      [
        19.81837,
        74.20352
      ],
      [
        19.81816,
        74.20589
      ],
      [
        19.81421,
        74.21512
      ],
      [
        19.81205,
        74.22526
      ],
      [
        19.80986,
        74.22986
      ],
      [
        19.8071,
        74.23403
      ],
      [
        19.80335,
        74.24255
      ],
      [
        19.80403,
        74.25026
      ],
      [
        19.8038,
        74.25796
      ],
      [
        19.80624,
        74.26668
      ],
      [
        19.81253,
        74.28156
      ],
      [
        19.82026,
        74.31335
      ],
      [
        19.8271,
        74.32928
      ],
      [
        19.82748,
        74.33129
      ],
      [
        19.82563,
        74.33573
      ],
      [
        19.82383,
        74.34535
      ],
      [
        19.81726,
        74.36273
      ],
      [
        19.81552,
        74.36943
      ],
      [
        19.81661,
        74.38385
      ],
      [
        19.81615,
        74.39107
      ],
      [
        19.81666,
        74.3979
      ],
      [
        19.81538,
        74.39774
      ],
      [
        19.80342,
        74.40102
      ],
      [
        19.80088,
        74.40329
      ],
      [
        19.79937,
        74.40291
      ],
      [
        19.79136,
        74.40476
      ],
      [
        19.78522,
        74.40705
      ],
      [
        19.77668,
        74.40911
      ],
      [
        19.76148,
        74.42628
      ],
      [
        19.76039,
        74.42819
      ],
      [
        19.75691,
        74.43119
      ],
      [
        19.74913,
        74.43984
      ],
      [
        19.74432,
        74.44298
      ],
      [
        19.74145,
        74.44832
      ],
      [
        19.74468,
        74.4507
      ],
      [
        19.75048,
        74.45852
      ],
      [
        19.75204,
        74.46206
      ],
      [
        19.75391,
        74.46445
      ],
      [
        19.75452,
        74.46711
      ],
      [
        19.75714,
        74.46811
      ],
      [
        19.76402,
        74.47479
      ],
      [
        19.7645,
        74.47615
      ],
      [
        19.76932,
        74.4743
      ],
      [
        19.76702,
        74.47533
      ],
      [
        19.76701,
        74.47641
      ]
    ],
    "BUS-104": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        19.99659,
        73.79062
      ],
      [
        19.99442,
        73.79039
      ],
      [
        19.99429,
        73.7957
      ],
      [
        19.99404,
        73.794
      ],
      [
        19.98856,
        73.79284
      ],
      [
        19.99079,
        73.79924
      ],
      [
        19.98586,
        73.80172
      ],
      [
        19.97287,
        73.81388
      ],
      [
        19.95253,
        73.83959
      ],
      [
        19.95049,
        73.84511
      ],
      [
        19.94701,
        73.8471
      ],
      [
        19.93841,
        73.85581
      ],
      [
        19.93575,
        73.86035
      ],
      [
        19.93199,
        73.86385
      ],
      [
        19.92662,
        73.87563
      ],
      [
        19.92174,
        73.88164
      ],
      [
        19.92028,
        73.88431
      ],
      [
        19.91498,
        73.89862
      ],
      [
        19.88525,
        73.94184
      ],
      [
        19.87996,
        73.94503
      ],
      [
        19.87763,
        73.9488
      ],
      [
        19.8756,
        73.94922
      ],
      [
        19.87625,
        73.95172
      ],
      [
        19.87555,
        73.95312
      ],
      [
        19.87156,
        73.95373
      ],
      [
        19.87024,
        73.95448
      ],
      [
        19.86571,
        73.96328
      ],
      [
        19.86164,
        73.97421
      ],
      [
        19.84263,
        73.99489
      ],
      [
        19.83987,
        74.00141
      ],
      [
        19.84244,
        74.003
      ],
      [
        19.84468,
        74.00226
      ],
      [
        19.84542,
        74.00274
      ],
      [
        19.84499,
        74.0021
      ],
      [
        19.84242,
        74.0031
      ],
      [
        19.83982,
        74.00155
      ],
      [
        19.83884,
        74.00361
      ],
      [
        19.83275,
        74.00681
      ],
      [
        19.82242,
        74.02312
      ],
      [
        19.8135,
        74.03485
      ],
      [
        19.80447,
        74.04856
      ],
      [
        19.7794,
        74.07948
      ],
      [
        19.76156,
        74.09825
      ],
      [
        19.73122,
        74.12705
      ],
      [
        19.72972,
        74.12973
      ],
      [
        19.72594,
        74.14038
      ],
      [
        19.72487,
        74.14174
      ],
      [
        19.71877,
        74.14397
      ],
      [
        19.71298,
        74.1422
      ],
      [
        19.71126,
        74.14226
      ],
      [
        19.70228,
        74.14993
      ],
      [
        19.69786,
        74.15027
      ],
      [
        19.69334,
        74.15203
      ],
      [
        19.67716,
        74.15527
      ],
      [
        19.66748,
        74.1588
      ],
      [
        19.66326,
        74.15861
      ],
      [
        19.66,
        74.16066
      ],
      [
        19.65689,
        74.15992
      ],
      [
        19.648,
        74.16102
      ],
      [
        19.63567,
        74.16786
      ],
      [
        19.63238,
        74.17132
      ],
      [
        19.62902,
        74.17258
      ],
      [
        19.61576,
        74.18128
      ],
      [
        19.61274,
        74.18239
      ],
      [
        19.60982,
        74.18504
      ],
      [
        19.57788,
        74.20588
      ],
      [
        19.57837,
        74.20726
      ],
      [
        19.57736,
        74.20735
      ],
      [
        19.57725,
        74.20947
      ],
      [
        19.57597,
        74.20937
      ],
      [
        19.57606,
        74.20705
      ],
      [
        19.5714,
        74.20788
      ],
      [
        19.56988,
        74.20853
      ],
      [
        19.5694,
        74.21185
      ],
      [
        19.56621,
        74.21264
      ],
      [
        19.55872,
        74.21164
      ],
      [
        19.55758,
        74.20835
      ],
      [
        19.54606,
        74.20559
      ],
      [
        19.49214,
        74.19807
      ],
      [
        19.48758,
        74.1983
      ],
      [
        19.47876,
        74.20044
      ],
      [
        19.47271,
        74.20504
      ],
      [
        19.46846,
        74.20687
      ],
      [
        19.46453,
        74.20756
      ],
      [
        19.45903,
        74.20415
      ],
      [
        19.45547,
        74.1992
      ],
      [
        19.45351,
        74.19856
      ],
      [
        19.4506,
        74.19897
      ],
      [
        19.44891,
        74.1973
      ],
      [
        19.44593,
        74.19579
      ],
      [
        19.44513,
        74.19468
      ],
      [
        19.44467,
        74.19152
      ],
      [
        19.44294,
        74.18677
      ],
      [
        19.44192,
        74.18588
      ],
      [
        19.44041,
        74.18681
      ],
      [
        19.44029,
        74.19122
      ],
      [
        19.43925,
        74.19353
      ],
      [
        19.43509,
        74.19766
      ],
      [
        19.43109,
        74.19999
      ],
      [
        19.42774,
        74.20332
      ],
      [
        19.42318,
        74.2065
      ],
      [
        19.40858,
        74.20939
      ],
      [
        19.39943,
        74.21246
      ],
      [
        19.39299,
        74.21268
      ],
      [
        19.39117,
        74.21232
      ],
      [
        19.38486,
        74.20891
      ],
      [
        19.37817,
        74.2062
      ],
      [
        19.36724,
        74.2039
      ],
      [
        19.36423,
        74.20563
      ],
      [
        19.35886,
        74.2106
      ],
      [
        19.35442,
        74.21342
      ],
      [
        19.35334,
        74.21341
      ],
      [
        19.35102,
        74.20976
      ],
      [
        19.34821,
        74.20842
      ],
      [
        19.34667,
        74.20504
      ],
      [
        19.34362,
        74.20441
      ],
      [
        19.33911,
        74.20234
      ],
      [
        19.32852,
        74.19351
      ],
      [
        19.32609,
        74.18742
      ],
      [
        19.32207,
        74.1804
      ],
      [
        19.31666,
        74.17474
      ],
      [
        19.31287,
        74.17327
      ],
      [
        19.29385,
        74.16938
      ],
      [
        19.29267,
        74.16828
      ],
      [
        19.2872,
        74.15926
      ],
      [
        19.28196,
        74.1569
      ],
      [
        19.27862,
        74.15376
      ],
      [
        19.27304,
        74.15079
      ],
      [
        19.265,
        74.14834
      ],
      [
        19.26099,
        74.14334
      ],
      [
        19.25905,
        74.14178
      ],
      [
        19.25638,
        74.14112
      ],
      [
        19.25118,
        74.14162
      ],
      [
        19.24959,
        74.14128
      ],
      [
        19.24559,
        74.13768
      ],
      [
        19.23598,
        74.13305
      ],
      [
        19.22999,
        74.12837
      ],
      [
        19.21895,
        74.12493
      ],
      [
        19.21346,
        74.12447
      ],
      [
        19.20357,
        74.11729
      ],
      [
        19.19882,
        74.11243
      ],
      [
        19.19131,
        74.11256
      ],
      [
        19.18204,
        74.11365
      ],
      [
        19.17994,
        74.12141
      ],
      [
        19.17838,
        74.12476
      ],
      [
        19.1768,
        74.1256
      ],
      [
        19.17718,
        74.12287
      ],
      [
        19.17832,
        74.12267
      ],
      [
        19.17957,
        74.11805
      ],
      [
        19.17909,
        74.11675
      ],
      [
        19.17955,
        74.11572
      ],
      [
        19.17831,
        74.11411
      ],
      [
        19.17939,
        74.1092
      ],
      [
        19.18058,
        74.10756
      ],
      [
        19.18116,
        74.1016
      ],
      [
        19.18289,
        74.09591
      ],
      [
        19.17414,
        74.07969
      ],
      [
        19.16787,
        74.0719
      ],
      [
        19.16373,
        74.06537
      ],
      [
        19.16152,
        74.0594
      ],
      [
        19.16119,
        74.0552
      ],
      [
        19.15647,
        74.04301
      ],
      [
        19.13943,
        74.01988
      ],
      [
        19.13539,
        74.00562
      ],
      [
        19.12901,
        73.98733
      ],
      [
        19.12476,
        73.9797
      ],
      [
        19.12458,
        73.9806
      ],
      [
        19.12299,
        73.97795
      ],
      [
        19.12143,
        73.97773
      ],
      [
        19.1198,
        73.98117
      ],
      [
        19.12143,
        73.97773
      ],
      [
        19.1173,
        73.97605
      ],
      [
        19.11779,
        73.97408
      ],
      [
        19.11411,
        73.97293
      ],
      [
        19.0942,
        73.97007
      ],
      [
        19.0933,
        73.97066
      ],
      [
        19.09148,
        73.96947
      ],
      [
        19.0577,
        73.95881
      ],
      [
        19.05579,
        73.95914
      ],
      [
        19.05093,
        73.96272
      ],
      [
        19.04874,
        73.96352
      ],
      [
        19.03867,
        73.96281
      ],
      [
        19.03649,
        73.96115
      ],
      [
        19.0335,
        73.95515
      ],
      [
        19.03245,
        73.95425
      ],
      [
        19.01693,
        73.94884
      ],
      [
        19.01267,
        73.94919
      ],
      [
        19.00695,
        73.948
      ],
      [
        18.99771,
        73.94298
      ],
      [
        18.98935,
        73.94278
      ],
      [
        18.97761,
        73.94648
      ],
      [
        18.97163,
        73.94515
      ],
      [
        18.96774,
        73.94513
      ],
      [
        18.96213,
        73.94217
      ],
      [
        18.95762,
        73.94135
      ],
      [
        18.95384,
        73.93999
      ],
      [
        18.94615,
        73.94131
      ],
      [
        18.94268,
        73.94096
      ],
      [
        18.93691,
        73.93581
      ],
      [
        18.93282,
        73.93053
      ],
      [
        18.9289,
        73.92771
      ],
      [
        18.92286,
        73.92093
      ],
      [
        18.90312,
        73.9148
      ],
      [
        18.90072,
        73.91326
      ],
      [
        18.89635,
        73.91342
      ],
      [
        18.88915,
        73.91552
      ],
      [
        18.88418,
        73.91308
      ],
      [
        18.88125,
        73.90954
      ],
      [
        18.87815,
        73.90007
      ],
      [
        18.86987,
        73.89688
      ],
      [
        18.85665,
        73.88775
      ],
      [
        18.855,
        73.88751
      ],
      [
        18.85397,
        73.88564
      ],
      [
        18.85417,
        73.88441
      ],
      [
        18.85691,
        73.88046
      ],
      [
        18.85776,
        73.88182
      ],
      [
        18.85642,
        73.88125
      ],
      [
        18.85417,
        73.88441
      ],
      [
        18.85397,
        73.88564
      ],
      [
        18.855,
        73.88751
      ],
      [
        18.85125,
        73.88771
      ],
      [
        18.84963,
        73.88684
      ],
      [
        18.84581,
        73.88259
      ],
      [
        18.83824,
        73.88029
      ],
      [
        18.83248,
        73.87747
      ],
      [
        18.81963,
        73.87493
      ],
      [
        18.81102,
        73.87425
      ],
      [
        18.80805,
        73.87354
      ],
      [
        18.80282,
        73.87209
      ],
      [
        18.79991,
        73.86987
      ],
      [
        18.79314,
        73.86749
      ],
      [
        18.78964,
        73.86825
      ],
      [
        18.78395,
        73.87246
      ],
      [
        18.78075,
        73.87233
      ],
      [
        18.77482,
        73.86986
      ],
      [
        18.76849,
        73.86641
      ],
      [
        18.76558,
        73.86291
      ],
      [
        18.75942,
        73.85872
      ],
      [
        18.7576,
        73.8586
      ],
      [
        18.75066,
        73.86015
      ],
      [
        18.73997,
        73.85894
      ],
      [
        18.73755,
        73.85777
      ],
      [
        18.73087,
        73.85606
      ],
      [
        18.71483,
        73.84835
      ],
      [
        18.71051,
        73.84864
      ],
      [
        18.69468,
        73.84758
      ],
      [
        18.69114,
        73.84622
      ],
      [
        18.68345,
        73.84717
      ],
      [
        18.67802,
        73.84986
      ],
      [
        18.67199,
        73.84849
      ],
      [
        18.66835,
        73.84894
      ],
      [
        18.65999,
        73.84844
      ],
      [
        18.65784,
        73.84917
      ],
      [
        18.65459,
        73.84899
      ],
      [
        18.64848,
        73.85075
      ],
      [
        18.64533,
        73.85037
      ],
      [
        18.64229,
        73.85079
      ],
      [
        18.63403,
        73.84978
      ],
      [
        18.63044,
        73.85063
      ],
      [
        18.62805,
        73.85219
      ],
      [
        18.62623,
        73.85236
      ],
      [
        18.6171,
        73.84969
      ],
      [
        18.6158,
        73.84758
      ],
      [
        18.61571,
        73.84515
      ],
      [
        18.61636,
        73.84188
      ],
      [
        18.61801,
        73.83785
      ],
      [
        18.61898,
        73.83034
      ],
      [
        18.6177,
        73.82614
      ],
      [
        18.60695,
        73.82243
      ],
      [
        18.60189,
        73.8263
      ],
      [
        18.5879,
        73.83269
      ],
      [
        18.57657,
        73.83564
      ],
      [
        18.56584,
        73.83966
      ],
      [
        18.55986,
        73.84375
      ],
      [
        18.5573,
        73.84674
      ],
      [
        18.54908,
        73.85116
      ],
      [
        18.54675,
        73.84725
      ],
      [
        18.54504,
        73.84706
      ],
      [
        18.54481,
        73.84554
      ],
      [
        18.54409,
        73.84735
      ],
      [
        18.536,
        73.84792
      ],
      [
        18.5353,
        73.84874
      ],
      [
        18.53025,
        73.84979
      ],
      [
        18.52932,
        73.85251
      ],
      [
        18.52742,
        73.85127
      ],
      [
        18.52579,
        73.85328
      ],
      [
        18.52018,
        73.85611
      ],
      [
        18.51533,
        73.85632
      ],
      [
        18.51186,
        73.85787
      ],
      [
        18.50667,
        73.85806
      ],
      [
        18.50439,
        73.85904
      ],
      [
        18.50179,
        73.85865
      ]
    ],
    "BUS-105": [
      [
        19.99201,
        73.78499
      ],
      [
        19.9902,
        73.78301
      ],
      [
        19.98732,
        73.78383
      ],
      [
        19.98682,
        73.78462
      ],
      [
        19.98714,
        73.7886
      ],
      [
        19.99079,
        73.79924
      ],
      [
        19.98586,
        73.80172
      ],
      [
        19.97287,
        73.81388
      ],
      [
        19.95401,
        73.83776
      ],
      [
        19.9476,
        73.83696
      ],
      [
        19.94412,
        73.83556
      ],
      [
        19.9422,
        73.83577
      ],
      [
        19.93732,
        73.83451
      ],
      [
        19.93743,
        73.83006
      ],
      [
        19.93652,
        73.8222
      ],
      [
        19.935,
        73.81649
      ],
      [
        19.93335,
        73.81466
      ],
      [
        19.93397,
        73.81099
      ],
      [
        19.93123,
        73.8113
      ],
      [
        19.92452,
        73.8032
      ],
      [
        19.91808,
        73.79747
      ],
      [
        19.91623,
        73.79362
      ],
      [
        19.91642,
        73.79048
      ],
      [
        19.91416,
        73.7818
      ],
      [
        19.90218,
        73.76894
      ],
      [
        19.9025,
        73.75356
      ],
      [
        19.90012,
        73.74384
      ],
      [
        19.89853,
        73.74236
      ],
      [
        19.8975,
        73.73894
      ],
      [
        19.89801,
        73.73761
      ],
      [
        19.89778,
        73.73603
      ],
      [
        19.89697,
        73.73478
      ],
      [
        19.8942,
        73.73394
      ],
      [
        19.8933,
        73.73265
      ],
      [
        19.89303,
        73.72865
      ],
      [
        19.89419,
        73.72596
      ],
      [
        19.89453,
        73.72075
      ],
      [
        19.89309,
        73.7173
      ],
      [
        19.89036,
        73.70286
      ],
      [
        19.88636,
        73.69693
      ],
      [
        19.88489,
        73.69349
      ],
      [
        19.8675,
        73.68811
      ],
      [
        19.86204,
        73.68453
      ],
      [
        19.86174,
        73.67914
      ],
      [
        19.86241,
        73.67777
      ],
      [
        19.86234,
        73.67647
      ],
      [
        19.8602,
        73.67579
      ],
      [
        19.85894,
        73.67466
      ],
      [
        19.85809,
        73.67001
      ],
      [
        19.85571,
        73.66578
      ],
      [
        19.85537,
        73.6639
      ],
      [
        19.85348,
        73.6606
      ],
      [
        19.85254,
        73.65988
      ],
      [
        19.85101,
        73.65367
      ],
      [
        19.84777,
        73.64645
      ],
      [
        19.84433,
        73.6419
      ],
      [
        19.84318,
        73.64148
      ],
      [
        19.84282,
        73.6397
      ],
      [
        19.8411,
        73.63871
      ],
      [
        19.8378,
        73.63465
      ],
      [
        19.83705,
        73.63166
      ],
      [
        19.83456,
        73.63075
      ],
      [
        19.82753,
        73.62334
      ],
      [
        19.82529,
        73.61921
      ],
      [
        19.82405,
        73.61428
      ],
      [
        19.82287,
        73.61435
      ],
      [
        19.82279,
        73.61274
      ],
      [
        19.82145,
        73.61252
      ],
      [
        19.82275,
        73.60952
      ],
      [
        19.82256,
        73.60679
      ],
      [
        19.82356,
        73.60508
      ],
      [
        19.82295,
        73.60449
      ],
      [
        19.81885,
        73.60468
      ],
      [
        19.81833,
        73.60299
      ],
      [
        19.81915,
        73.59832
      ],
      [
        19.81839,
        73.58933
      ],
      [
        19.82035,
        73.58425
      ],
      [
        19.82017,
        73.58166
      ],
      [
        19.81705,
        73.58199
      ],
      [
        19.81402,
        73.5814
      ],
      [
        19.80913,
        73.57352
      ],
      [
        19.80874,
        73.57112
      ],
      [
        19.80331,
        73.57002
      ],
      [
        19.804,
        73.57266
      ],
      [
        19.80098,
        73.57162
      ],
      [
        19.79864,
        73.57182
      ],
      [
        19.79773,
        73.57244
      ],
      [
        19.79669,
        73.57512
      ],
      [
        19.7982,
        73.58276
      ],
      [
        19.80114,
        73.5835
      ],
      [
        19.80024,
        73.58458
      ],
      [
        19.80009,
        73.58605
      ],
      [
        19.79747,
        73.58655
      ],
      [
        19.79698,
        73.58779
      ],
      [
        19.79713,
        73.58992
      ],
      [
        19.79944,
        73.59242
      ],
      [
        19.79844,
        73.59399
      ],
      [
        19.79687,
        73.59319
      ],
      [
        19.7943,
        73.59368
      ],
      [
        19.78962,
        73.59949
      ],
      [
        19.78904,
        73.60266
      ],
      [
        19.78933,
        73.60608
      ],
      [
        19.78672,
        73.60599
      ],
      [
        19.78577,
        73.60744
      ],
      [
        19.78545,
        73.60957
      ],
      [
        19.78583,
        73.61103
      ],
      [
        19.78384,
        73.61611
      ],
      [
        19.78124,
        73.61695
      ],
      [
        19.77938,
        73.6169
      ],
      [
        19.77624,
        73.61469
      ],
      [
        19.77321,
        73.61504
      ],
      [
        19.77076,
        73.61391
      ],
      [
        19.76846,
        73.61378
      ],
      [
        19.7673,
        73.61431
      ],
      [
        19.76728,
        73.61551
      ],
      [
        19.76588,
        73.61494
      ],
      [
        19.76553,
        73.61598
      ],
      [
        19.7605,
        73.61811
      ],
      [
        19.75624,
        73.61696
      ],
      [
        19.75137,
        73.61478
      ],
      [
        19.7461,
        73.61457
      ],
      [
        19.74276,
        73.61197
      ],
      [
        19.73967,
        73.61598
      ],
      [
        19.73625,
        73.61859
      ],
      [
        19.73504,
        73.62354
      ],
      [
        19.73226,
        73.63051
      ],
      [
        19.72781,
        73.63223
      ],
      [
        19.73221,
        73.63439
      ],
      [
        19.73519,
        73.63509
      ],
      [
        19.73164,
        73.63429
      ],
      [
        19.72584,
        73.6316
      ],
      [
        19.71841,
        73.62503
      ],
      [
        19.71081,
        73.61737
      ],
      [
        19.70576,
        73.61012
      ],
      [
        19.70151,
        73.60646
      ],
      [
        19.69641,
        73.59617
      ],
      [
        19.69445,
        73.59081
      ],
      [
        19.69506,
        73.58995
      ],
      [
        19.69548,
        73.58406
      ],
      [
        19.69375,
        73.58016
      ],
      [
        19.69377,
        73.56749
      ],
      [
        19.69489,
        73.56498
      ],
      [
        19.69518,
        73.56118
      ],
      [
        19.69731,
        73.56098
      ],
      [
        19.69767,
        73.55997
      ],
      [
        19.69533,
        73.55914
      ],
      [
        19.69603,
        73.55677
      ],
      [
        19.69461,
        73.55601
      ],
      [
        19.69359,
        73.55025
      ],
      [
        19.69369,
        73.54665
      ],
      [
        19.69336,
        73.54485
      ],
      [
        19.69253,
        73.54392
      ],
      [
        19.69744,
        73.53079
      ],
      [
        19.69611,
        73.52366
      ],
      [
        19.69751,
        73.51914
      ],
      [
        19.69854,
        73.51259
      ],
      [
        19.6961,
        73.51226
      ],
      [
        19.69514,
        73.5103
      ],
      [
        19.69447,
        73.51012
      ],
      [
        19.69302,
        73.51311
      ],
      [
        19.69134,
        73.51311
      ],
      [
        19.68976,
        73.51534
      ],
      [
        19.68637,
        73.51525
      ],
      [
        19.68284,
        73.51597
      ],
      [
        19.68212,
        73.51419
      ],
      [
        19.68291,
        73.51326
      ],
      [
        19.68498,
        73.5126
      ],
      [
        19.68453,
        73.51065
      ],
      [
        19.68566,
        73.50853
      ],
      [
        19.68491,
        73.50614
      ],
      [
        19.68682,
        73.50434
      ],
      [
        19.68657,
        73.50324
      ],
      [
        19.68224,
        73.50267
      ],
      [
        19.6784,
        73.50345
      ],
      [
        19.6762,
        73.50234
      ],
      [
        19.67419,
        73.50288
      ],
      [
        19.66266,
        73.5
      ],
      [
        19.65667,
        73.49776
      ],
      [
        19.6525,
        73.4977
      ],
      [
        19.65142,
        73.49633
      ],
      [
        19.65207,
        73.49118
      ],
      [
        19.65092,
        73.4879
      ],
      [
        19.64865,
        73.48668
      ],
      [
        19.64747,
        73.48472
      ],
      [
        19.64535,
        73.48402
      ],
      [
        19.64439,
        73.48243
      ],
      [
        19.64153,
        73.48347
      ],
      [
        19.63871,
        73.48357
      ],
      [
        19.63729,
        73.48288
      ],
      [
        19.62668,
        73.46562
      ],
      [
        19.62589,
        73.46317
      ],
      [
        19.6281,
        73.45364
      ],
      [
        19.62804,
        73.44683
      ],
      [
        19.62855,
        73.44394
      ],
      [
        19.62684,
        73.4393
      ],
      [
        19.62811,
        73.43623
      ],
      [
        19.6297,
        73.43404
      ],
      [
        19.63108,
        73.4283
      ],
      [
        19.63162,
        73.42458
      ],
      [
        19.63063,
        73.42237
      ],
      [
        19.6285,
        73.42087
      ],
      [
        19.62165,
        73.41968
      ],
      [
        19.62001,
        73.41861
      ],
      [
        19.61353,
        73.40925
      ],
      [
        19.61019,
        73.40628
      ],
      [
        19.60972,
        73.40449
      ],
      [
        19.61005,
        73.40109
      ],
      [
        19.60857,
        73.39864
      ],
      [
        19.60278,
        73.39701
      ],
      [
        19.59898,
        73.39334
      ],
      [
        19.59672,
        73.39192
      ],
      [
        19.59235,
        73.3923
      ],
      [
        19.58782,
        73.39034
      ],
      [
        19.58151,
        73.38403
      ],
      [
        19.57641,
        73.38156
      ],
      [
        19.57467,
        73.37743
      ],
      [
        19.57196,
        73.37488
      ],
      [
        19.56794,
        73.37483
      ],
      [
        19.56428,
        73.37569
      ],
      [
        19.55841,
        73.37387
      ],
      [
        19.54826,
        73.36307
      ],
      [
        19.54438,
        73.35591
      ],
      [
        19.54284,
        73.35024
      ],
      [
        19.53972,
        73.34852
      ],
      [
        19.53095,
        73.34124
      ],
      [
        19.52097,
        73.33812
      ],
      [
        19.51644,
        73.33425
      ],
      [
        19.51336,
        73.33033
      ],
      [
        19.50841,
        73.32839
      ],
      [
        19.5058,
        73.32878
      ],
      [
        19.4974,
        73.33346
      ],
      [
        19.49507,
        73.33403
      ],
      [
        19.49181,
        73.3336
      ],
      [
        19.4874,
        73.33105
      ],
      [
        19.48157,
        73.33216
      ],
      [
        19.47746,
        73.33201
      ],
      [
        19.47125,
        73.33431
      ],
      [
        19.4683,
        73.33474
      ],
      [
        19.46216,
        73.33453
      ],
      [
        19.45603,
        73.33352
      ],
      [
        19.45691,
        73.33086
      ],
      [
        19.4526,
        73.32673
      ],
      [
        19.45359,
        73.32519
      ],
      [
        19.45354,
        73.32352
      ],
      [
        19.45419,
        73.32221
      ],
      [
        19.45529,
        73.32133
      ],
      [
        19.45622,
        73.31878
      ],
      [
        19.45582,
        73.31772
      ],
      [
        19.45654,
        73.31701
      ],
      [
        19.45662,
        73.31478
      ],
      [
        19.45798,
        73.31228
      ],
      [
        19.45699,
        73.30481
      ],
      [
        19.45605,
        73.30408
      ],
      [
        19.45655,
        73.29854
      ],
      [
        19.45802,
        73.29651
      ],
      [
        19.45748,
        73.29598
      ],
      [
        19.46259,
        73.29068
      ],
      [
        19.46352,
        73.28643
      ],
      [
        19.46132,
        73.28548
      ],
      [
        19.46146,
        73.28661
      ],
      [
        19.46132,
        73.28548
      ],
      [
        19.46352,
        73.28643
      ],
      [
        19.46259,
        73.29068
      ],
      [
        19.45655,
        73.29703
      ],
      [
        19.45479,
        73.29816
      ],
      [
        19.44802,
        73.30616
      ],
      [
        19.44736,
        73.30639
      ],
      [
        19.44625,
        73.30543
      ],
      [
        19.44478,
        73.30606
      ],
      [
        19.44413,
        73.30521
      ],
      [
        19.44512,
        73.30869
      ],
      [
        19.44542,
        73.31709
      ],
      [
        19.44488,
        73.30803
      ],
      [
        19.44347,
        73.30431
      ],
      [
        19.43389,
        73.29476
      ],
      [
        19.42874,
        73.29151
      ],
      [
        19.42557,
        73.28858
      ],
      [
        19.42292,
        73.28314
      ],
      [
        19.41525,
        73.27574
      ],
      [
        19.41438,
        73.27337
      ],
      [
        19.41352,
        73.26621
      ],
      [
        19.41171,
        73.26165
      ],
      [
        19.39854,
        73.24358
      ],
      [
        19.39402,
        73.23482
      ],
      [
        19.3873,
        73.22709
      ],
      [
        19.38209,
        73.21757
      ],
      [
        19.38043,
        73.21305
      ],
      [
        19.37351,
        73.20147
      ],
      [
        19.36781,
        73.18217
      ],
      [
        19.36472,
        73.17491
      ],
      [
        19.36283,
        73.16836
      ],
      [
        19.35739,
        73.16029
      ],
      [
        19.35481,
        73.15341
      ],
      [
        19.34652,
        73.13842
      ],
      [
        19.34507,
        73.13425
      ],
      [
        19.3449,
        73.13151
      ],
      [
        19.34434,
        73.13137
      ],
      [
        19.34096,
        73.13441
      ],
      [
        19.34039,
        73.13427
      ],
      [
        19.34414,
        73.13071
      ],
      [
        19.34483,
        73.12944
      ],
      [
        19.34418,
        73.12214
      ],
      [
        19.34158,
        73.11709
      ],
      [
        19.33877,
        73.1142
      ],
      [
        19.33513,
        73.11217
      ],
      [
        19.32653,
        73.10937
      ],
      [
        19.31658,
        73.10729
      ],
      [
        19.31367,
        73.10688
      ],
      [
        19.30845,
        73.10797
      ],
      [
        19.29331,
        73.10926
      ],
      [
        19.28837,
        73.10822
      ],
      [
        19.28402,
        73.1056
      ],
      [
        19.28138,
        73.10276
      ],
      [
        19.25649,
        73.06358
      ],
      [
        19.25375,
        73.06069
      ],
      [
        19.247,
        73.04915
      ],
      [
        19.2324,
        73.03176
      ],
      [
        19.22471,
        73.02007
      ],
      [
        19.20902,
        73.004
      ],
      [
        19.20832,
        72.99992
      ],
      [
        19.21185,
        72.97734
      ],
      [
        19.21121,
        72.97588
      ],
      [
        19.20453,
        72.96861
      ],
      [
        19.21254,
        72.97705
      ],
      [
        19.21408,
        72.97771
      ],
      [
        19.2174,
        72.97819
      ],
      [
        19.23532,
        72.976
      ],
      [
        19.21726,
        72.97839
      ],
      [
        19.21283,
        72.97743
      ],
      [
        19.19954,
        72.96368
      ],
      [
        19.1971,
        72.96256
      ],
      [
        19.18839,
        72.96371
      ],
      [
        19.17486,
        72.96863
      ],
      [
        19.1708,
        72.96793
      ],
      [
        19.15108,
        72.9546
      ],
      [
        19.12753,
        72.94022
      ],
      [
        19.08709,
        72.9234
      ],
      [
        19.07455,
        72.91262
      ],
      [
        19.05482,
        72.88507
      ],
      [
        19.0529,
        72.88138
      ],
      [
        19.04841,
        72.86865
      ],
      [
        19.04706,
        72.86661
      ],
      [
        19.04532,
        72.86508
      ],
      [
        19.04233,
        72.86426
      ],
      [
        19.03922,
        72.86174
      ],
      [
        19.02916,
        72.85752
      ],
      [
        19.0266,
        72.85593
      ],
      [
        19.02637,
        72.8551
      ],
      [
        19.02386,
        72.85267
      ],
      [
        19.01778,
        72.84782
      ]
    ],
    "BUS-106": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        20.00274,
        73.7898
      ],
      [
        20.00401,
        73.79023
      ],
      [
        20.00457,
        73.79439
      ],
      [
        20.00638,
        73.79915
      ],
      [
        20.00871,
        73.80195
      ],
      [
        20.00928,
        73.80613
      ],
      [
        20.01092,
        73.81002
      ],
      [
        20.0089,
        73.81396
      ],
      [
        20.00821,
        73.81778
      ],
      [
        20.00461,
        73.82672
      ],
      [
        19.99752,
        73.83965
      ],
      [
        19.99676,
        73.84209
      ],
      [
        20.00086,
        73.86956
      ],
      [
        20.00062,
        73.87222
      ],
      [
        20.00179,
        73.87961
      ],
      [
        20.00009,
        73.88922
      ],
      [
        19.99853,
        73.89341
      ],
      [
        19.99711,
        73.89559
      ],
      [
        19.99647,
        73.8983
      ],
      [
        19.99711,
        73.90783
      ],
      [
        19.99819,
        73.9109
      ],
      [
        19.99727,
        73.91669
      ],
      [
        20.00006,
        73.92223
      ],
      [
        19.99968,
        73.93114
      ],
      [
        20.0095,
        73.97835
      ],
      [
        20.01372,
        73.9882
      ],
      [
        20.01952,
        73.99566
      ],
      [
        20.02444,
        73.99575
      ],
      [
        20.03338,
        74.00529
      ],
      [
        20.03845,
        74.01454
      ],
      [
        20.04674,
        74.02289
      ],
      [
        20.05119,
        74.02713
      ],
      [
        20.05905,
        74.03023
      ],
      [
        20.06105,
        74.03563
      ],
      [
        20.06221,
        74.04358
      ],
      [
        20.06954,
        74.04727
      ],
      [
        20.0708,
        74.04886
      ],
      [
        20.07329,
        74.07035
      ],
      [
        20.07352,
        74.07901
      ],
      [
        20.0727,
        74.09738
      ],
      [
        20.07039,
        74.10617
      ],
      [
        20.07129,
        74.10753
      ],
      [
        20.07662,
        74.11068
      ],
      [
        20.07694,
        74.10774
      ],
      [
        20.08115,
        74.10766
      ],
      [
        20.08137,
        74.10684
      ],
      [
        20.08288,
        74.10733
      ],
      [
        20.08216,
        74.11033
      ],
      [
        20.07716,
        74.10939
      ],
      [
        20.07513,
        74.11672
      ],
      [
        20.07462,
        74.12096
      ],
      [
        20.07503,
        74.12744
      ],
      [
        20.07467,
        74.13726
      ],
      [
        20.07343,
        74.14294
      ],
      [
        20.07222,
        74.15345
      ],
      [
        20.07023,
        74.16072
      ],
      [
        20.06936,
        74.16904
      ],
      [
        20.07046,
        74.17276
      ],
      [
        20.07198,
        74.18926
      ],
      [
        20.0705,
        74.19678
      ],
      [
        20.07158,
        74.19928
      ],
      [
        20.07383,
        74.20164
      ],
      [
        20.07504,
        74.20769
      ],
      [
        20.07988,
        74.21239
      ],
      [
        20.08538,
        74.2152
      ],
      [
        20.09027,
        74.21866
      ],
      [
        20.09908,
        74.22244
      ],
      [
        20.10275,
        74.22528
      ],
      [
        20.10321,
        74.22618
      ],
      [
        20.09091,
        74.24405
      ],
      [
        20.08428,
        74.25703
      ],
      [
        20.08145,
        74.26113
      ],
      [
        20.07548,
        74.272
      ],
      [
        20.06979,
        74.28067
      ],
      [
        20.06603,
        74.28418
      ],
      [
        20.06466,
        74.29033
      ],
      [
        20.05928,
        74.29585
      ],
      [
        20.05747,
        74.30137
      ],
      [
        20.05728,
        74.30358
      ],
      [
        20.05801,
        74.30733
      ],
      [
        20.05729,
        74.31755
      ],
      [
        20.05626,
        74.32108
      ],
      [
        20.05775,
        74.32886
      ],
      [
        20.05776,
        74.33357
      ],
      [
        20.05478,
        74.35992
      ],
      [
        20.05156,
        74.37696
      ],
      [
        20.0508,
        74.39912
      ],
      [
        20.05168,
        74.40411
      ],
      [
        20.05153,
        74.40749
      ],
      [
        20.04951,
        74.41867
      ],
      [
        20.04754,
        74.42502
      ],
      [
        20.04732,
        74.42871
      ],
      [
        20.04584,
        74.4336
      ],
      [
        20.04483,
        74.44123
      ],
      [
        20.04169,
        74.45268
      ],
      [
        20.04101,
        74.4704
      ],
      [
        20.04139,
        74.47535
      ],
      [
        20.04326,
        74.48286
      ],
      [
        20.0424,
        74.48653
      ],
      [
        20.04225,
        74.48904
      ],
      [
        20.04285,
        74.4894
      ],
      [
        20.04277,
        74.49015
      ],
      [
        20.03837,
        74.48976
      ],
      [
        20.03763,
        74.49354
      ],
      [
        20.02927,
        74.51749
      ],
      [
        20.02891,
        74.52455
      ],
      [
        20.0257,
        74.5394
      ],
      [
        20.01991,
        74.55357
      ],
      [
        20.01687,
        74.56484
      ],
      [
        20.01163,
        74.56958
      ],
      [
        20.01036,
        74.57215
      ],
      [
        20.00918,
        74.57623
      ],
      [
        20.0104,
        74.58101
      ],
      [
        20.00944,
        74.58497
      ],
      [
        20.00537,
        74.59432
      ],
      [
        20.00036,
        74.6031
      ],
      [
        19.99206,
        74.61422
      ],
      [
        19.9841,
        74.62224
      ],
      [
        19.98127,
        74.62817
      ],
      [
        19.97202,
        74.63694
      ],
      [
        19.96806,
        74.64304
      ],
      [
        19.96343,
        74.65675
      ],
      [
        19.96014,
        74.66859
      ],
      [
        19.9558,
        74.6788
      ],
      [
        19.95059,
        74.68875
      ],
      [
        19.94982,
        74.6926
      ],
      [
        19.94307,
        74.69834
      ],
      [
        19.93812,
        74.70357
      ],
      [
        19.93406,
        74.71014
      ],
      [
        19.92612,
        74.7192
      ],
      [
        19.92483,
        74.72675
      ],
      [
        19.92526,
        74.7291
      ],
      [
        19.91567,
        74.74342
      ],
      [
        19.92015,
        74.75763
      ],
      [
        19.92091,
        74.76261
      ],
      [
        19.9212,
        74.79321
      ],
      [
        19.92273,
        74.81319
      ],
      [
        19.92161,
        74.82905
      ],
      [
        19.92209,
        74.83726
      ],
      [
        19.9268,
        74.84615
      ],
      [
        19.92739,
        74.85706
      ],
      [
        19.92677,
        74.86058
      ],
      [
        19.92782,
        74.86403
      ],
      [
        19.9292,
        74.87866
      ],
      [
        19.92803,
        74.88625
      ],
      [
        19.92691,
        74.88905
      ],
      [
        19.92677,
        74.89528
      ],
      [
        19.92991,
        74.90055
      ],
      [
        19.92982,
        74.90373
      ],
      [
        19.93101,
        74.90915
      ],
      [
        19.93724,
        74.91099
      ],
      [
        19.93778,
        74.91187
      ],
      [
        19.93775,
        74.91787
      ],
      [
        19.93683,
        74.92254
      ],
      [
        19.93345,
        74.93284
      ],
      [
        19.92921,
        74.95138
      ],
      [
        19.92945,
        74.95492
      ],
      [
        19.931,
        74.9601
      ],
      [
        19.93139,
        74.96635
      ],
      [
        19.93349,
        74.97811
      ],
      [
        19.93306,
        74.98032
      ],
      [
        19.92381,
        75.0015
      ],
      [
        19.91971,
        75.01478
      ],
      [
        19.9166,
        75.02092
      ],
      [
        19.90853,
        75.03263
      ],
      [
        19.90665,
        75.03898
      ],
      [
        19.90718,
        75.04519
      ],
      [
        19.90806,
        75.04744
      ],
      [
        19.90855,
        75.06924
      ],
      [
        19.90567,
        75.07884
      ],
      [
        19.90089,
        75.09
      ],
      [
        19.90035,
        75.101
      ],
      [
        19.89794,
        75.11965
      ],
      [
        19.90097,
        75.13474
      ],
      [
        19.90132,
        75.15101
      ],
      [
        19.89687,
        75.15616
      ],
      [
        19.89494,
        75.16712
      ],
      [
        19.89083,
        75.18255
      ],
      [
        19.88198,
        75.20575
      ],
      [
        19.88284,
        75.20725
      ],
      [
        19.88087,
        75.20973
      ],
      [
        19.868,
        75.24371
      ],
      [
        19.86818,
        75.24288
      ],
      [
        19.86533,
        75.24226
      ],
      [
        19.86525,
        75.24294
      ],
      [
        19.86133,
        75.24342
      ],
      [
        19.85795,
        75.24526
      ],
      [
        19.85561,
        75.24577
      ],
      [
        19.8554,
        75.24448
      ],
      [
        19.85561,
        75.24577
      ],
      [
        19.85461,
        75.24599
      ],
      [
        19.85823,
        75.2521
      ],
      [
        19.86008,
        75.25651
      ],
      [
        19.85277,
        75.26133
      ],
      [
        19.84721,
        75.26593
      ],
      [
        19.85196,
        75.27245
      ],
      [
        19.86051,
        75.27918
      ],
      [
        19.86757,
        75.28633
      ],
      [
        19.87031,
        75.2902
      ],
      [
        19.87619,
        75.30079
      ],
      [
        19.8772,
        75.30409
      ],
      [
        19.87461,
        75.31131
      ],
      [
        19.87217,
        75.32252
      ],
      [
        19.8722,
        75.32501
      ],
      [
        19.87352,
        75.32851
      ],
      [
        19.87827,
        75.32853
      ],
      [
        19.87813,
        75.32797
      ]
    ],
    "BUS-107": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        20.00274,
        73.7898
      ],
      [
        20.00401,
        73.79023
      ],
      [
        20.00457,
        73.79439
      ],
      [
        20.00638,
        73.79915
      ],
      [
        20.00871,
        73.80195
      ],
      [
        20.00928,
        73.80613
      ],
      [
        20.01395,
        73.81742
      ],
      [
        20.01648,
        73.82523
      ],
      [
        20.01889,
        73.83049
      ],
      [
        20.02564,
        73.84203
      ],
      [
        20.03092,
        73.85651
      ],
      [
        20.04008,
        73.86994
      ],
      [
        20.06169,
        73.89021
      ],
      [
        20.06562,
        73.8945
      ],
      [
        20.07237,
        73.90404
      ],
      [
        20.07107,
        73.90257
      ],
      [
        20.0702,
        73.9038
      ],
      [
        20.07065,
        73.90595
      ],
      [
        20.0663,
        73.909
      ],
      [
        20.06331,
        73.90961
      ],
      [
        20.06009,
        73.91118
      ],
      [
        20.05715,
        73.91557
      ],
      [
        20.05329,
        73.91957
      ],
      [
        20.05232,
        73.9225
      ],
      [
        20.05079,
        73.92285
      ],
      [
        20.04954,
        73.92556
      ],
      [
        20.0452,
        73.92728
      ],
      [
        20.04487,
        73.93108
      ],
      [
        20.0617,
        73.93133
      ],
      [
        20.06676,
        73.93038
      ],
      [
        20.07898,
        73.92955
      ],
      [
        20.08577,
        73.92809
      ],
      [
        20.08631,
        73.9265
      ],
      [
        20.08802,
        73.92554
      ],
      [
        20.08944,
        73.92291
      ],
      [
        20.09386,
        73.92374
      ],
      [
        20.09551,
        73.92459
      ],
      [
        20.10038,
        73.92902
      ],
      [
        20.10686,
        73.94359
      ],
      [
        20.12946,
        73.96479
      ],
      [
        20.13943,
        73.9707
      ],
      [
        20.14153,
        73.97574
      ],
      [
        20.14294,
        73.97746
      ],
      [
        20.14825,
        73.97994
      ],
      [
        20.1582,
        73.98637
      ],
      [
        20.16131,
        73.98757
      ],
      [
        20.16574,
        73.98795
      ],
      [
        20.17296,
        73.98666
      ],
      [
        20.17058,
        73.99295
      ],
      [
        20.17002,
        73.99296
      ],
      [
        20.16509,
        73.99808
      ],
      [
        20.16637,
        74.00038
      ],
      [
        20.16643,
        74.00174
      ],
      [
        20.16612,
        74.00846
      ],
      [
        20.16512,
        74.01489
      ],
      [
        20.1648,
        74.02474
      ],
      [
        20.16406,
        74.02721
      ],
      [
        20.16694,
        74.02711
      ],
      [
        20.16845,
        74.02605
      ],
      [
        20.17291,
        74.02526
      ],
      [
        20.17553,
        74.024
      ],
      [
        20.17771,
        74.02405
      ],
      [
        20.17928,
        74.02093
      ],
      [
        20.18058,
        74.02016
      ],
      [
        20.18223,
        74.02027
      ],
      [
        20.18771,
        74.0189
      ],
      [
        20.196,
        74.01588
      ],
      [
        20.21491,
        74.04128
      ],
      [
        20.21833,
        74.04678
      ],
      [
        20.22101,
        74.05242
      ],
      [
        20.23623,
        74.06825
      ],
      [
        20.24892,
        74.0766
      ],
      [
        20.252,
        74.07987
      ],
      [
        20.2558,
        74.08278
      ],
      [
        20.26321,
        74.08772
      ],
      [
        20.27037,
        74.09166
      ],
      [
        20.28018,
        74.10038
      ],
      [
        20.28151,
        74.10227
      ],
      [
        20.28765,
        74.11601
      ],
      [
        20.29644,
        74.12734
      ],
      [
        20.30359,
        74.13831
      ],
      [
        20.3115,
        74.16529
      ],
      [
        20.31787,
        74.19297
      ],
      [
        20.32394,
        74.20642
      ],
      [
        20.32608,
        74.21411
      ],
      [
        20.32769,
        74.22374
      ],
      [
        20.32989,
        74.22911
      ],
      [
        20.33096,
        74.2352
      ],
      [
        20.32798,
        74.23864
      ],
      [
        20.32808,
        74.24127
      ],
      [
        20.3286,
        74.24136
      ],
      [
        20.32782,
        74.24428
      ],
      [
        20.32833,
        74.24034
      ],
      [
        20.32798,
        74.23864
      ],
      [
        20.33096,
        74.2352
      ],
      [
        20.33181,
        74.23803
      ],
      [
        20.33506,
        74.24336
      ],
      [
        20.33649,
        74.2469
      ],
      [
        20.33781,
        74.24748
      ],
      [
        20.34511,
        74.24822
      ],
      [
        20.34673,
        74.24969
      ],
      [
        20.34757,
        74.25523
      ],
      [
        20.34903,
        74.25964
      ],
      [
        20.34909,
        74.26365
      ],
      [
        20.34818,
        74.26705
      ],
      [
        20.34778,
        74.27685
      ],
      [
        20.35287,
        74.29354
      ],
      [
        20.3568,
        74.30095
      ],
      [
        20.35986,
        74.30485
      ],
      [
        20.3628,
        74.30579
      ],
      [
        20.36447,
        74.30779
      ],
      [
        20.36637,
        74.30841
      ],
      [
        20.36628,
        74.31331
      ],
      [
        20.37083,
        74.31323
      ],
      [
        20.37245,
        74.31391
      ],
      [
        20.37758,
        74.3203
      ],
      [
        20.38991,
        74.32897
      ],
      [
        20.39462,
        74.33485
      ],
      [
        20.39962,
        74.33785
      ],
      [
        20.42299,
        74.35541
      ],
      [
        20.44488,
        74.37903
      ],
      [
        20.44693,
        74.38282
      ],
      [
        20.45002,
        74.3915
      ],
      [
        20.45692,
        74.39699
      ],
      [
        20.45739,
        74.39896
      ],
      [
        20.45691,
        74.40189
      ],
      [
        20.45761,
        74.40374
      ],
      [
        20.46704,
        74.41175
      ],
      [
        20.47042,
        74.41352
      ],
      [
        20.4735,
        74.41594
      ],
      [
        20.48068,
        74.42319
      ],
      [
        20.49509,
        74.44202
      ],
      [
        20.49836,
        74.44719
      ],
      [
        20.50128,
        74.46182
      ],
      [
        20.50265,
        74.46454
      ],
      [
        20.53066,
        74.49223
      ],
      [
        20.53413,
        74.52017
      ],
      [
        20.53758,
        74.52216
      ],
      [
        20.55469,
        74.52592
      ],
      [
        20.55472,
        74.52881
      ],
      [
        20.55529,
        74.5292
      ],
      [
        20.5553,
        74.52809
      ],
      [
        20.55489,
        74.52817
      ],
      [
        20.55493,
        74.53134
      ],
      [
        20.55401,
        74.53504
      ],
      [
        20.55516,
        74.54139
      ],
      [
        20.57171,
        74.55985
      ],
      [
        20.57314,
        74.56326
      ],
      [
        20.57573,
        74.56539
      ],
      [
        20.58302,
        74.58511
      ],
      [
        20.58636,
        74.59053
      ],
      [
        20.5905,
        74.59553
      ],
      [
        20.59373,
        74.59841
      ],
      [
        20.59771,
        74.60421
      ],
      [
        20.61545,
        74.62589
      ],
      [
        20.62786,
        74.6438
      ],
      [
        20.6417,
        74.65964
      ],
      [
        20.64507,
        74.66201
      ],
      [
        20.65406,
        74.67046
      ],
      [
        20.66127,
        74.67457
      ],
      [
        20.66914,
        74.67685
      ],
      [
        20.68043,
        74.68212
      ],
      [
        20.68403,
        74.68435
      ],
      [
        20.69853,
        74.68975
      ],
      [
        20.70325,
        74.6923
      ],
      [
        20.71243,
        74.69532
      ],
      [
        20.72384,
        74.70055
      ],
      [
        20.72979,
        74.7003
      ],
      [
        20.73414,
        74.70239
      ],
      [
        20.74822,
        74.71369
      ],
      [
        20.75138,
        74.71863
      ],
      [
        20.7595,
        74.72377
      ],
      [
        20.7629,
        74.72487
      ],
      [
        20.76595,
        74.72802
      ],
      [
        20.77276,
        74.73037
      ],
      [
        20.77674,
        74.72975
      ],
      [
        20.77865,
        74.73043
      ],
      [
        20.78214,
        74.73412
      ],
      [
        20.78594,
        74.73658
      ],
      [
        20.78839,
        74.73956
      ],
      [
        20.78992,
        74.74245
      ],
      [
        20.79174,
        74.74404
      ],
      [
        20.80302,
        74.74469
      ],
      [
        20.81371,
        74.74445
      ],
      [
        20.81667,
        74.74627
      ],
      [
        20.81995,
        74.74654
      ],
      [
        20.84928,
        74.763
      ],
      [
        20.85601,
        74.76568
      ],
      [
        20.86312,
        74.76747
      ],
      [
        20.87362,
        74.77289
      ],
      [
        20.87614,
        74.77312
      ],
      [
        20.88198,
        74.77131
      ],
      [
        20.89486,
        74.77473
      ],
      [
        20.8993,
        74.77422
      ],
      [
        20.90204,
        74.77486
      ]
    ],
    "BUS-108": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        20.00274,
        73.7898
      ],
      [
        20.00401,
        73.79023
      ],
      [
        20.00457,
        73.79439
      ],
      [
        20.0066,
        73.79953
      ],
      [
        20.00871,
        73.80195
      ],
      [
        20.01297,
        73.80531
      ],
      [
        20.01347,
        73.80323
      ],
      [
        20.01392,
        73.80331
      ],
      [
        20.01364,
        73.80452
      ],
      [
        20.01434,
        73.80473
      ],
      [
        20.014,
        73.80616
      ],
      [
        20.01773,
        73.81011
      ],
      [
        20.01893,
        73.81061
      ],
      [
        20.02382,
        73.81128
      ],
      [
        20.02661,
        73.80082
      ],
      [
        20.03359,
        73.8032
      ],
      [
        20.04817,
        73.80616
      ],
      [
        20.05255,
        73.80478
      ],
      [
        20.05609,
        73.80571
      ],
      [
        20.06755,
        73.80555
      ],
      [
        20.06907,
        73.80619
      ],
      [
        20.07787,
        73.80533
      ],
      [
        20.08162,
        73.804
      ],
      [
        20.09857,
        73.80689
      ],
      [
        20.10734,
        73.80691
      ],
      [
        20.1321,
        73.81428
      ],
      [
        20.13831,
        73.81535
      ],
      [
        20.14298,
        73.8188
      ],
      [
        20.1533,
        73.82175
      ],
      [
        20.15655,
        73.82227
      ],
      [
        20.15981,
        73.82108
      ],
      [
        20.16171,
        73.82149
      ],
      [
        20.16444,
        73.82405
      ],
      [
        20.16635,
        73.82469
      ],
      [
        20.17918,
        73.82705
      ],
      [
        20.18226,
        73.82674
      ],
      [
        20.19438,
        73.8299
      ],
      [
        20.19727,
        73.83144
      ],
      [
        20.20299,
        73.83024
      ],
      [
        20.20541,
        73.83147
      ],
      [
        20.20451,
        73.83472
      ],
      [
        20.20551,
        73.83499
      ],
      [
        20.2054,
        73.83556
      ],
      [
        20.20415,
        73.83531
      ],
      [
        20.20541,
        73.83147
      ],
      [
        20.21612,
        73.83237
      ],
      [
        20.21936,
        73.83448
      ],
      [
        20.221,
        73.83654
      ],
      [
        20.22278,
        73.83739
      ],
      [
        20.22437,
        73.83915
      ],
      [
        20.24009,
        73.84804
      ],
      [
        20.24303,
        73.8486
      ],
      [
        20.24549,
        73.84785
      ],
      [
        20.25336,
        73.85095
      ],
      [
        20.27051,
        73.85326
      ],
      [
        20.2725,
        73.8561
      ],
      [
        20.27463,
        73.86088
      ],
      [
        20.27416,
        73.86483
      ],
      [
        20.2756,
        73.86908
      ],
      [
        20.27439,
        73.87321
      ],
      [
        20.27543,
        73.87503
      ],
      [
        20.27755,
        73.87543
      ],
      [
        20.28161,
        73.87746
      ],
      [
        20.28685,
        73.87734
      ],
      [
        20.29165,
        73.87944
      ],
      [
        20.29293,
        73.87914
      ],
      [
        20.29642,
        73.87658
      ],
      [
        20.29811,
        73.87634
      ],
      [
        20.30549,
        73.88086
      ],
      [
        20.30938,
        73.8817
      ],
      [
        20.31494,
        73.88176
      ],
      [
        20.3196,
        73.88365
      ],
      [
        20.32393,
        73.88713
      ],
      [
        20.33098,
        73.88937
      ],
      [
        20.33192,
        73.88903
      ],
      [
        20.334,
        73.88643
      ],
      [
        20.33529,
        73.88645
      ],
      [
        20.36042,
        73.89374
      ],
      [
        20.36784,
        73.89184
      ],
      [
        20.37401,
        73.89141
      ],
      [
        20.38056,
        73.88918
      ],
      [
        20.38394,
        73.88903
      ],
      [
        20.388,
        73.88792
      ],
      [
        20.39328,
        73.88288
      ],
      [
        20.39746,
        73.88169
      ],
      [
        20.40193,
        73.88264
      ],
      [
        20.40407,
        73.88401
      ],
      [
        20.40803,
        73.88227
      ],
      [
        20.40964,
        73.8806
      ],
      [
        20.41135,
        73.88009
      ],
      [
        20.41211,
        73.88107
      ],
      [
        20.41375,
        73.88668
      ],
      [
        20.41669,
        73.89084
      ],
      [
        20.41865,
        73.89596
      ],
      [
        20.42092,
        73.90885
      ],
      [
        20.41833,
        73.91123
      ],
      [
        20.41967,
        73.91488
      ],
      [
        20.41906,
        73.91701
      ],
      [
        20.4212,
        73.92061
      ],
      [
        20.42618,
        73.92321
      ],
      [
        20.42131,
        73.92207
      ],
      [
        20.41875,
        73.92018
      ],
      [
        20.41809,
        73.91876
      ],
      [
        20.4161,
        73.91715
      ],
      [
        20.417,
        73.91537
      ],
      [
        20.40996,
        73.91207
      ],
      [
        20.40693,
        73.91163
      ],
      [
        20.40653,
        73.91004
      ],
      [
        20.40692,
        73.90881
      ],
      [
        20.40631,
        73.90751
      ],
      [
        20.40509,
        73.90614
      ],
      [
        20.40355,
        73.90602
      ],
      [
        20.4032,
        73.90443
      ],
      [
        20.40348,
        73.9027
      ],
      [
        20.40487,
        73.90273
      ],
      [
        20.40548,
        73.90102
      ],
      [
        20.40647,
        73.90093
      ],
      [
        20.40811,
        73.89934
      ],
      [
        20.40636,
        73.89797
      ],
      [
        20.40063,
        73.89854
      ],
      [
        20.4002,
        73.90485
      ],
      [
        20.39847,
        73.90813
      ],
      [
        20.39779,
        73.90856
      ],
      [
        20.39564,
        73.90811
      ],
      [
        20.39172,
        73.90874
      ],
      [
        20.39045,
        73.90963
      ],
      [
        20.3864,
        73.91061
      ],
      [
        20.39045,
        73.90963
      ],
      [
        20.39172,
        73.90874
      ],
      [
        20.39564,
        73.90811
      ],
      [
        20.39779,
        73.90856
      ],
      [
        20.39847,
        73.90813
      ],
      [
        20.4002,
        73.90485
      ],
      [
        20.40044,
        73.89937
      ]
    ],
    "R-NSK-YEO": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99832,
        73.79014
      ],
      [
        20.00002,
        73.78995
      ],
      [
        20.00201,
        73.78986
      ],
      [
        20.00302,
        73.78986
      ],
      [
        20.00393,
        73.79061
      ],
      [
        20.00413,
        73.79186
      ],
      [
        20.00413,
        73.79277
      ],
      [
        20.00505,
        73.79538
      ],
      [
        20.0057,
        73.79714
      ],
      [
        20.00611,
        73.79837
      ],
      [
        20.00729,
        73.80023
      ],
      [
        20.00845,
        73.80151
      ],
      [
        20.00902,
        73.80303
      ],
      [
        20.00938,
        73.80563
      ],
      [
        20.01001,
        73.80745
      ],
      [
        20.01074,
        73.81036
      ],
      [
        20.00892,
        73.81392
      ],
      [
        20.00841,
        73.81646
      ],
      [
        20.00763,
        73.81938
      ],
      [
        20.00651,
        73.82215
      ],
      [
        20.00578,
        73.82386
      ],
      [
        20.00525,
        73.82495
      ],
      [
        20.00461,
        73.82672
      ],
      [
        20.00368,
        73.82868
      ],
      [
        20.00174,
        73.83234
      ],
      [
        19.99975,
        73.83557
      ],
      [
        19.99826,
        73.83846
      ],
      [
        19.99714,
        73.84065
      ],
      [
        19.99685,
        73.84311
      ],
      [
        19.99727,
        73.84503
      ],
      [
        19.99783,
        73.8492
      ],
      [
        19.99829,
        73.85119
      ],
      [
        19.99856,
        73.85455
      ],
      [
        19.99946,
        73.85972
      ],
      [
        19.9999,
        73.86501
      ],
      [
        20.00053,
        73.86816
      ],
      [
        20.00081,
        73.87032
      ],
      [
        20.00071,
        73.87301
      ],
      [
        20.00105,
        73.87506
      ],
      [
        20.00179,
        73.87961
      ],
      [
        20.00173,
        73.88137
      ],
      [
        20.00073,
        73.88616
      ],
      [
        20.00009,
        73.88922
      ],
      [
        19.99853,
        73.89341
      ],
      [
        19.99736,
        73.89512
      ],
      [
        19.99647,
        73.8983
      ],
      [
        19.99651,
        73.89985
      ],
      [
        19.99689,
        73.90353
      ],
      [
        19.99713,
        73.90574
      ],
      [
        19.99723,
        73.90823
      ],
      [
        19.99814,
        73.91061
      ],
      [
        19.9979,
        73.91223
      ],
      [
        19.99732,
        73.91531
      ],
      [
        19.99753,
        73.91766
      ],
      [
        19.99907,
        73.91998
      ],
      [
        19.99999,
        73.92192
      ],
      [
        20.00001,
        73.92335
      ],
      [
        19.99964,
        73.92522
      ],
      [
        19.99963,
        73.93065
      ],
      [
        20.00059,
        73.93427
      ],
      [
        20.00096,
        73.93639
      ],
      [
        20.00158,
        73.94096
      ],
      [
        20.00301,
        73.94798
      ],
      [
        20.00449,
        73.95372
      ],
      [
        20.00528,
        73.95723
      ],
      [
        20.00599,
        73.96097
      ],
      [
        20.00679,
        73.96547
      ],
      [
        20.00789,
        73.97153
      ],
      [
        20.00939,
        73.97787
      ],
      [
        20.01056,
        73.98108
      ],
      [
        20.01234,
        73.98543
      ],
      [
        20.01399,
        73.98865
      ],
      [
        20.01967,
        73.99583
      ],
      [
        20.02113,
        73.99582
      ],
      [
        20.02379,
        73.99552
      ],
      [
        20.02415,
        73.99553
      ],
      [
        20.02444,
        73.99575
      ],
      [
        20.02674,
        73.99796
      ],
      [
        20.02915,
        74.00058
      ],
      [
        20.03261,
        74.00441
      ],
      [
        20.03432,
        74.00704
      ],
      [
        20.03767,
        74.01322
      ],
      [
        20.03868,
        74.01478
      ],
      [
        20.04621,
        74.02234
      ],
      [
        20.05074,
        74.02677
      ],
      [
        20.05287,
        74.02794
      ],
      [
        20.05814,
        74.0297
      ],
      [
        20.05938,
        74.03061
      ],
      [
        20.06017,
        74.03272
      ],
      [
        20.06105,
        74.03563
      ],
      [
        20.06152,
        74.03944
      ],
      [
        20.0621,
        74.04312
      ],
      [
        20.06244,
        74.04387
      ],
      [
        20.06353,
        74.0445
      ],
      [
        20.06621,
        74.04551
      ],
      [
        20.06839,
        74.04662
      ],
      [
        20.07001,
        74.04763
      ],
      [
        20.0708,
        74.04886
      ],
      [
        20.07111,
        74.05087
      ],
      [
        20.07128,
        74.05285
      ],
      [
        20.07145,
        74.05534
      ],
      [
        20.07179,
        74.05917
      ],
      [
        20.07311,
        74.06898
      ],
      [
        20.07328,
        74.07235
      ],
      [
        20.07347,
        74.07575
      ],
      [
        20.07352,
        74.07901
      ],
      [
        20.07329,
        74.0812
      ],
      [
        20.07302,
        74.08448
      ],
      [
        20.07287,
        74.0888
      ],
      [
        20.07274,
        74.09561
      ],
      [
        20.0722,
        74.09909
      ],
      [
        20.07052,
        74.10501
      ],
      [
        20.07062,
        74.10676
      ],
      [
        20.07347,
        74.10885
      ],
      [
        20.07662,
        74.11068
      ],
      [
        20.07694,
        74.10774
      ],
      [
        20.07875,
        74.10787
      ],
      [
        20.0795,
        74.10752
      ],
      [
        20.08085,
        74.10763
      ],
      [
        20.08199,
        74.10709
      ],
      [
        20.08237,
        74.1088
      ],
      [
        20.08226,
        74.10967
      ],
      [
        20.08137,
        74.1102
      ],
      [
        20.07876,
        74.1097
      ],
      [
        20.0767,
        74.11072
      ],
      [
        20.07611,
        74.11235
      ],
      [
        20.07499,
        74.11787
      ],
      [
        20.07461,
        74.12153
      ],
      [
        20.07503,
        74.12744
      ],
      [
        20.07492,
        74.13309
      ],
      [
        20.07454,
        74.13802
      ],
      [
        20.07361,
        74.14207
      ],
      [
        20.07314,
        74.14723
      ],
      [
        20.07247,
        74.15171
      ],
      [
        20.07163,
        74.15563
      ],
      [
        20.07067,
        74.15925
      ],
      [
        20.07012,
        74.16184
      ],
      [
        20.06961,
        74.16641
      ],
      [
        20.06939,
        74.16878
      ],
      [
        20.06973,
        74.17013
      ],
      [
        20.07021,
        74.1714
      ],
      [
        20.0706,
        74.17473
      ],
      [
        20.07096,
        74.17981
      ],
      [
        20.0716,
        74.18473
      ],
      [
        20.07198,
        74.18926
      ],
      [
        20.07165,
        74.19148
      ],
      [
        20.07067,
        74.19524
      ],
      [
        20.07073,
        74.19778
      ],
      [
        20.0723,
        74.20006
      ],
      [
        20.0737,
        74.2014
      ],
      [
        20.07441,
        74.20393
      ],
      [
        20.07492,
        74.20746
      ],
      [
        20.07654,
        74.20922
      ],
      [
        20.07848,
        74.2109
      ],
      [
        20.08061,
        74.21283
      ],
      [
        20.08388,
        74.21444
      ],
      [
        20.08726,
        74.21647
      ],
      [
        20.08998,
        74.21849
      ],
      [
        20.09242,
        74.21939
      ],
      [
        20.0954,
        74.2209
      ],
      [
        20.09889,
        74.22234
      ],
      [
        20.10162,
        74.2246
      ],
      [
        20.10275,
        74.22527
      ],
      [
        20.10314,
        74.22603
      ],
      [
        20.10334,
        74.22622
      ],
      [
        20.1057,
        74.22741
      ],
      [
        20.10707,
        74.2282
      ],
      [
        20.10857,
        74.2288
      ],
      [
        20.11105,
        74.22864
      ],
      [
        20.11933,
        74.22904
      ],
      [
        20.12628,
        74.23127
      ],
      [
        20.12979,
        74.23642
      ],
      [
        20.1284,
        74.23916
      ],
      [
        20.12363,
        74.23794
      ],
      [
        20.12743,
        74.23889
      ],
      [
        20.1297,
        74.23737
      ],
      [
        20.12806,
        74.23235
      ],
      [
        20.11967,
        74.22908
      ],
      [
        20.1118,
        74.22833
      ],
      [
        20.10903,
        74.22886
      ],
      [
        20.10752,
        74.22862
      ],
      [
        20.10316,
        74.22624
      ],
      [
        20.10253,
        74.227
      ],
      [
        20.09817,
        74.23342
      ],
      [
        20.09713,
        74.23502
      ],
      [
        20.09554,
        74.23678
      ],
      [
        20.09421,
        74.23947
      ],
      [
        20.09177,
        74.2429
      ],
      [
        20.09065,
        74.24453
      ],
      [
        20.08914,
        74.24735
      ],
      [
        20.087,
        74.25126
      ],
      [
        20.08476,
        74.25613
      ],
      [
        20.08274,
        74.25934
      ],
      [
        20.08068,
        74.26281
      ],
      [
        20.07837,
        74.26672
      ],
      [
        20.07673,
        74.26939
      ],
      [
        20.07562,
        74.27174
      ],
      [
        20.07247,
        74.2762
      ],
      [
        20.07055,
        74.27913
      ],
      [
        20.06984,
        74.2806
      ],
      [
        20.06686,
        74.2833
      ],
      [
        20.06594,
        74.28434
      ],
      [
        20.06575,
        74.28615
      ],
      [
        20.0652,
        74.28861
      ],
      [
        20.06454,
        74.29053
      ],
      [
        20.06091,
        74.29399
      ],
      [
        20.05941,
        74.29566
      ],
      [
        20.05838,
        74.29784
      ],
      [
        20.05729,
        74.30285
      ],
      [
        20.05736,
        74.30392
      ],
      [
        20.05789,
        74.30629
      ],
      [
        20.05792,
        74.30817
      ],
      [
        20.05771,
        74.31051
      ],
      [
        20.05746,
        74.31505
      ],
      [
        20.05723,
        74.31796
      ],
      [
        20.05641,
        74.32003
      ],
      [
        20.0563,
        74.32149
      ],
      [
        20.05707,
        74.32474
      ],
      [
        20.05775,
        74.32886
      ],
      [
        20.05783,
        74.33115
      ],
      [
        20.0576,
        74.33513
      ],
      [
        20.05716,
        74.33939
      ],
      [
        20.05663,
        74.34375
      ],
      [
        20.05578,
        74.3481
      ],
      [
        20.05555,
        74.35173
      ],
      [
        20.05538,
        74.3538
      ],
      [
        20.05506,
        74.35747
      ],
      [
        20.05462,
        74.36073
      ],
      [
        20.05416,
        74.36272
      ],
      [
        20.05405,
        74.36443
      ],
      [
        20.05332,
        74.36812
      ],
      [
        20.05286,
        74.36934
      ],
      [
        20.0522,
        74.37243
      ],
      [
        20.05156,
        74.37696
      ],
      [
        20.05136,
        74.38135
      ],
      [
        20.05132,
        74.38647
      ],
      [
        20.05129,
        74.39254
      ],
      [
        20.0508,
        74.39912
      ],
      [
        20.05109,
        74.40234
      ],
      [
        20.05158,
        74.4037
      ],
      [
        20.05168,
        74.40461
      ],
      [
        20.05161,
        74.40643
      ],
      [
        20.05125,
        74.40984
      ],
      [
        20.05072,
        74.41318
      ],
      [
        20.04951,
        74.41867
      ],
      [
        20.0486,
        74.42189
      ],
      [
        20.04751,
        74.42521
      ],
      [
        20.04728,
        74.42891
      ],
      [
        20.04583,
        74.43367
      ],
      [
        20.0454,
        74.43683
      ],
      [
        20.04523,
        74.43899
      ],
      [
        20.04488,
        74.44099
      ],
      [
        20.04348,
        74.44647
      ],
      [
        20.04173,
        74.45233
      ],
      [
        20.04142,
        74.45634
      ],
      [
        20.04107,
        74.46623
      ],
      [
        20.04099,
        74.46944
      ],
      [
        20.04118,
        74.4731
      ],
      [
        20.04139,
        74.47535
      ],
      [
        20.04184,
        74.47706
      ],
      [
        20.04243,
        74.47925
      ],
      [
        20.04325,
        74.4833
      ],
      [
        20.0429,
        74.48518
      ],
      [
        20.04234,
        74.48774
      ],
      [
        20.04247,
        74.4891
      ]
    ],
    "R-NSK-TRM": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        19.99659,
        73.79062
      ],
      [
        19.99427,
        73.7904
      ],
      [
        19.99325,
        73.78606
      ],
      [
        19.99354,
        73.78251
      ],
      [
        19.99564,
        73.78207
      ],
      [
        19.99709,
        73.78104
      ],
      [
        19.99424,
        73.77188
      ],
      [
        19.99436,
        73.75959
      ],
      [
        19.99178,
        73.74217
      ],
      [
        19.98994,
        73.7421
      ],
      [
        19.99169,
        73.74159
      ],
      [
        19.99025,
        73.73092
      ],
      [
        19.98591,
        73.72417
      ],
      [
        19.98382,
        73.71926
      ],
      [
        19.98182,
        73.71637
      ],
      [
        19.98156,
        73.71259
      ],
      [
        19.97946,
        73.70935
      ],
      [
        19.97765,
        73.69479
      ],
      [
        19.97551,
        73.69101
      ],
      [
        19.97361,
        73.68566
      ],
      [
        19.97027,
        73.68697
      ],
      [
        19.96803,
        73.68947
      ],
      [
        19.96739,
        73.6895
      ],
      [
        19.97027,
        73.68697
      ],
      [
        19.97361,
        73.68566
      ],
      [
        19.96604,
        73.66124
      ],
      [
        19.96474,
        73.64932
      ],
      [
        19.96026,
        73.64126
      ],
      [
        19.95956,
        73.62912
      ],
      [
        19.95736,
        73.62531
      ],
      [
        19.95916,
        73.61857
      ],
      [
        19.95862,
        73.61335
      ],
      [
        19.95015,
        73.61291
      ],
      [
        19.9473,
        73.61115
      ],
      [
        19.9436,
        73.60991
      ],
      [
        19.94096,
        73.60949
      ],
      [
        19.93957,
        73.61004
      ],
      [
        19.938,
        73.60935
      ],
      [
        19.93957,
        73.61004
      ],
      [
        19.94096,
        73.60949
      ],
      [
        19.9436,
        73.60991
      ],
      [
        19.9473,
        73.61115
      ],
      [
        19.95015,
        73.61291
      ],
      [
        19.95862,
        73.61335
      ],
      [
        19.95695,
        73.60392
      ],
      [
        19.95545,
        73.60067
      ],
      [
        19.95456,
        73.59086
      ],
      [
        19.95322,
        73.58512
      ],
      [
        19.95201,
        73.5749
      ],
      [
        19.95198,
        73.56881
      ],
      [
        19.95149,
        73.56676
      ],
      [
        19.94823,
        73.55882
      ],
      [
        19.94515,
        73.55328
      ],
      [
        19.9444,
        73.54877
      ],
      [
        19.94102,
        73.54171
      ],
      [
        19.93831,
        73.53736
      ],
      [
        19.93297,
        73.53134
      ],
      [
        19.9326,
        73.52984
      ],
      [
        19.9314,
        73.53049
      ],
      [
        19.93118,
        73.53093
      ],
      [
        19.93188,
        73.53116
      ]
    ],
    "R-NSK-SHR": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        19.99659,
        73.79062
      ],
      [
        19.99442,
        73.79039
      ],
      [
        19.99429,
        73.7957
      ],
      [
        19.99404,
        73.794
      ],
      [
        19.98856,
        73.79284
      ],
      [
        19.99079,
        73.79924
      ],
      [
        19.98753,
        73.80111
      ],
      [
        19.98664,
        73.80309
      ],
      [
        19.98668,
        73.80372
      ],
      [
        19.98738,
        73.80395
      ],
      [
        19.98736,
        73.80486
      ],
      [
        19.98815,
        73.80483
      ],
      [
        19.98836,
        73.80631
      ],
      [
        19.98929,
        73.80638
      ],
      [
        19.98915,
        73.80907
      ],
      [
        19.98663,
        73.81002
      ],
      [
        19.98122,
        73.81037
      ],
      [
        19.97941,
        73.80777
      ],
      [
        19.97395,
        73.8128
      ],
      [
        19.96644,
        73.82153
      ],
      [
        19.95253,
        73.83959
      ],
      [
        19.95049,
        73.84511
      ],
      [
        19.94701,
        73.8471
      ],
      [
        19.93841,
        73.85581
      ],
      [
        19.93575,
        73.86035
      ],
      [
        19.93199,
        73.86385
      ],
      [
        19.92662,
        73.87563
      ],
      [
        19.92174,
        73.88164
      ],
      [
        19.92028,
        73.88431
      ],
      [
        19.91498,
        73.89862
      ],
      [
        19.88525,
        73.94184
      ],
      [
        19.87996,
        73.94503
      ],
      [
        19.87763,
        73.9488
      ],
      [
        19.8756,
        73.94922
      ],
      [
        19.87625,
        73.95172
      ],
      [
        19.87555,
        73.95312
      ],
      [
        19.87156,
        73.95373
      ],
      [
        19.87024,
        73.95448
      ],
      [
        19.86324,
        73.96902
      ],
      [
        19.8622,
        73.97338
      ],
      [
        19.84263,
        73.99489
      ],
      [
        19.84017,
        74.00025
      ],
      [
        19.83987,
        74.00141
      ],
      [
        19.84244,
        74.003
      ],
      [
        19.84554,
        74.00236
      ],
      [
        19.84481,
        74.00229
      ],
      [
        19.84627,
        74.00999
      ],
      [
        19.84487,
        74.02118
      ],
      [
        19.84444,
        74.03018
      ],
      [
        19.84308,
        74.03428
      ],
      [
        19.84056,
        74.05611
      ],
      [
        19.84052,
        74.07561
      ],
      [
        19.83941,
        74.08014
      ],
      [
        19.83967,
        74.08247
      ],
      [
        19.8391,
        74.08623
      ],
      [
        19.8406,
        74.09582
      ],
      [
        19.83992,
        74.10201
      ],
      [
        19.84049,
        74.10479
      ],
      [
        19.83598,
        74.11595
      ],
      [
        19.83426,
        74.12218
      ],
      [
        19.83003,
        74.14626
      ],
      [
        19.82851,
        74.16299
      ],
      [
        19.82798,
        74.16699
      ],
      [
        19.82641,
        74.17228
      ],
      [
        19.82659,
        74.17495
      ],
      [
        19.82597,
        74.17863
      ],
      [
        19.82346,
        74.18307
      ],
      [
        19.82075,
        74.18997
      ],
      [
        19.81849,
        74.20184
      ],
      [
        19.80967,
        74.20065
      ],
      [
        19.80288,
        74.19557
      ],
      [
        19.79746,
        74.19332
      ],
      [
        19.7959,
        74.19025
      ],
      [
        19.79354,
        74.20727
      ],
      [
        19.80255,
        74.20574
      ],
      [
        19.80736,
        74.20631
      ],
      [
        19.8159,
        74.204
      ],
      [
        19.81727,
        74.2075
      ],
      [
        19.81813,
        74.20576
      ],
      [
        19.81837,
        74.20352
      ],
      [
        19.81816,
        74.20589
      ],
      [
        19.81421,
        74.21512
      ],
      [
        19.81205,
        74.22526
      ],
      [
        19.80986,
        74.22986
      ],
      [
        19.8071,
        74.23403
      ],
      [
        19.80335,
        74.24255
      ],
      [
        19.80403,
        74.25026
      ],
      [
        19.8038,
        74.25796
      ],
      [
        19.80624,
        74.26668
      ],
      [
        19.81253,
        74.28156
      ],
      [
        19.82026,
        74.31335
      ],
      [
        19.8271,
        74.32928
      ],
      [
        19.82748,
        74.33129
      ],
      [
        19.82563,
        74.33573
      ],
      [
        19.82383,
        74.34535
      ],
      [
        19.81726,
        74.36273
      ],
      [
        19.81552,
        74.36943
      ],
      [
        19.81661,
        74.38385
      ],
      [
        19.81615,
        74.39107
      ],
      [
        19.81666,
        74.3979
      ],
      [
        19.81538,
        74.39774
      ],
      [
        19.80342,
        74.40102
      ],
      [
        19.80088,
        74.40329
      ],
      [
        19.79937,
        74.40291
      ],
      [
        19.79136,
        74.40476
      ],
      [
        19.78522,
        74.40705
      ],
      [
        19.77668,
        74.40911
      ],
      [
        19.76148,
        74.42628
      ],
      [
        19.76039,
        74.42819
      ],
      [
        19.75691,
        74.43119
      ],
      [
        19.74913,
        74.43984
      ],
      [
        19.74432,
        74.44298
      ],
      [
        19.74145,
        74.44832
      ],
      [
        19.74468,
        74.4507
      ],
      [
        19.75048,
        74.45852
      ],
      [
        19.75204,
        74.46206
      ],
      [
        19.75391,
        74.46445
      ],
      [
        19.75452,
        74.46711
      ],
      [
        19.75714,
        74.46811
      ],
      [
        19.76402,
        74.47479
      ],
      [
        19.7645,
        74.47615
      ],
      [
        19.76932,
        74.4743
      ],
      [
        19.76702,
        74.47533
      ],
      [
        19.76701,
        74.47641
      ]
    ],
    "R-NSK-PUN": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        19.99659,
        73.79062
      ],
      [
        19.99442,
        73.79039
      ],
      [
        19.99429,
        73.7957
      ],
      [
        19.99404,
        73.794
      ],
      [
        19.98856,
        73.79284
      ],
      [
        19.99079,
        73.79924
      ],
      [
        19.98586,
        73.80172
      ],
      [
        19.97287,
        73.81388
      ],
      [
        19.95253,
        73.83959
      ],
      [
        19.95049,
        73.84511
      ],
      [
        19.94701,
        73.8471
      ],
      [
        19.93841,
        73.85581
      ],
      [
        19.93575,
        73.86035
      ],
      [
        19.93199,
        73.86385
      ],
      [
        19.92662,
        73.87563
      ],
      [
        19.92174,
        73.88164
      ],
      [
        19.92028,
        73.88431
      ],
      [
        19.91498,
        73.89862
      ],
      [
        19.88525,
        73.94184
      ],
      [
        19.87996,
        73.94503
      ],
      [
        19.87763,
        73.9488
      ],
      [
        19.8756,
        73.94922
      ],
      [
        19.87625,
        73.95172
      ],
      [
        19.87555,
        73.95312
      ],
      [
        19.87156,
        73.95373
      ],
      [
        19.87024,
        73.95448
      ],
      [
        19.86571,
        73.96328
      ],
      [
        19.86164,
        73.97421
      ],
      [
        19.84263,
        73.99489
      ],
      [
        19.83987,
        74.00141
      ],
      [
        19.84244,
        74.003
      ],
      [
        19.84468,
        74.00226
      ],
      [
        19.84542,
        74.00274
      ],
      [
        19.84499,
        74.0021
      ],
      [
        19.84242,
        74.0031
      ],
      [
        19.83982,
        74.00155
      ],
      [
        19.83884,
        74.00361
      ],
      [
        19.83275,
        74.00681
      ],
      [
        19.82242,
        74.02312
      ],
      [
        19.8135,
        74.03485
      ],
      [
        19.80447,
        74.04856
      ],
      [
        19.7794,
        74.07948
      ],
      [
        19.76156,
        74.09825
      ],
      [
        19.73122,
        74.12705
      ],
      [
        19.72972,
        74.12973
      ],
      [
        19.72594,
        74.14038
      ],
      [
        19.72487,
        74.14174
      ],
      [
        19.71877,
        74.14397
      ],
      [
        19.71298,
        74.1422
      ],
      [
        19.71126,
        74.14226
      ],
      [
        19.70228,
        74.14993
      ],
      [
        19.69786,
        74.15027
      ],
      [
        19.69334,
        74.15203
      ],
      [
        19.67716,
        74.15527
      ],
      [
        19.66748,
        74.1588
      ],
      [
        19.66326,
        74.15861
      ],
      [
        19.66,
        74.16066
      ],
      [
        19.65689,
        74.15992
      ],
      [
        19.648,
        74.16102
      ],
      [
        19.63567,
        74.16786
      ],
      [
        19.63238,
        74.17132
      ],
      [
        19.62902,
        74.17258
      ],
      [
        19.61576,
        74.18128
      ],
      [
        19.61274,
        74.18239
      ],
      [
        19.60982,
        74.18504
      ],
      [
        19.57788,
        74.20588
      ],
      [
        19.57837,
        74.20726
      ],
      [
        19.57736,
        74.20735
      ],
      [
        19.57725,
        74.20947
      ],
      [
        19.57597,
        74.20937
      ],
      [
        19.57606,
        74.20705
      ],
      [
        19.5714,
        74.20788
      ],
      [
        19.56988,
        74.20853
      ],
      [
        19.5694,
        74.21185
      ],
      [
        19.56621,
        74.21264
      ],
      [
        19.55872,
        74.21164
      ],
      [
        19.55758,
        74.20835
      ],
      [
        19.54606,
        74.20559
      ],
      [
        19.49214,
        74.19807
      ],
      [
        19.48758,
        74.1983
      ],
      [
        19.47876,
        74.20044
      ],
      [
        19.47271,
        74.20504
      ],
      [
        19.46846,
        74.20687
      ],
      [
        19.46453,
        74.20756
      ],
      [
        19.45903,
        74.20415
      ],
      [
        19.45547,
        74.1992
      ],
      [
        19.45351,
        74.19856
      ],
      [
        19.4506,
        74.19897
      ],
      [
        19.44891,
        74.1973
      ],
      [
        19.44593,
        74.19579
      ],
      [
        19.44513,
        74.19468
      ],
      [
        19.44467,
        74.19152
      ],
      [
        19.44294,
        74.18677
      ],
      [
        19.44192,
        74.18588
      ],
      [
        19.44041,
        74.18681
      ],
      [
        19.44029,
        74.19122
      ],
      [
        19.43925,
        74.19353
      ],
      [
        19.43509,
        74.19766
      ],
      [
        19.43109,
        74.19999
      ],
      [
        19.42774,
        74.20332
      ],
      [
        19.42318,
        74.2065
      ],
      [
        19.40858,
        74.20939
      ],
      [
        19.39943,
        74.21246
      ],
      [
        19.39299,
        74.21268
      ],
      [
        19.39117,
        74.21232
      ],
      [
        19.38486,
        74.20891
      ],
      [
        19.37817,
        74.2062
      ],
      [
        19.36724,
        74.2039
      ],
      [
        19.36423,
        74.20563
      ],
      [
        19.35886,
        74.2106
      ],
      [
        19.35442,
        74.21342
      ],
      [
        19.35334,
        74.21341
      ],
      [
        19.35102,
        74.20976
      ],
      [
        19.34821,
        74.20842
      ],
      [
        19.34667,
        74.20504
      ],
      [
        19.34362,
        74.20441
      ],
      [
        19.33911,
        74.20234
      ],
      [
        19.32852,
        74.19351
      ],
      [
        19.32609,
        74.18742
      ],
      [
        19.32207,
        74.1804
      ],
      [
        19.31666,
        74.17474
      ],
      [
        19.31287,
        74.17327
      ],
      [
        19.29385,
        74.16938
      ],
      [
        19.29267,
        74.16828
      ],
      [
        19.2872,
        74.15926
      ],
      [
        19.28196,
        74.1569
      ],
      [
        19.27862,
        74.15376
      ],
      [
        19.27304,
        74.15079
      ],
      [
        19.265,
        74.14834
      ],
      [
        19.26099,
        74.14334
      ],
      [
        19.25905,
        74.14178
      ],
      [
        19.25638,
        74.14112
      ],
      [
        19.25118,
        74.14162
      ],
      [
        19.24959,
        74.14128
      ],
      [
        19.24559,
        74.13768
      ],
      [
        19.23598,
        74.13305
      ],
      [
        19.22999,
        74.12837
      ],
      [
        19.21895,
        74.12493
      ],
      [
        19.21346,
        74.12447
      ],
      [
        19.20357,
        74.11729
      ],
      [
        19.19882,
        74.11243
      ],
      [
        19.19131,
        74.11256
      ],
      [
        19.18204,
        74.11365
      ],
      [
        19.17994,
        74.12141
      ],
      [
        19.17838,
        74.12476
      ],
      [
        19.1768,
        74.1256
      ],
      [
        19.17718,
        74.12287
      ],
      [
        19.17832,
        74.12267
      ],
      [
        19.17957,
        74.11805
      ],
      [
        19.17909,
        74.11675
      ],
      [
        19.17955,
        74.11572
      ],
      [
        19.17831,
        74.11411
      ],
      [
        19.17939,
        74.1092
      ],
      [
        19.18058,
        74.10756
      ],
      [
        19.18116,
        74.1016
      ],
      [
        19.18289,
        74.09591
      ],
      [
        19.17414,
        74.07969
      ],
      [
        19.16787,
        74.0719
      ],
      [
        19.16373,
        74.06537
      ],
      [
        19.16152,
        74.0594
      ],
      [
        19.16119,
        74.0552
      ],
      [
        19.15647,
        74.04301
      ],
      [
        19.13943,
        74.01988
      ],
      [
        19.13539,
        74.00562
      ],
      [
        19.12901,
        73.98733
      ],
      [
        19.12476,
        73.9797
      ],
      [
        19.12458,
        73.9806
      ],
      [
        19.12299,
        73.97795
      ],
      [
        19.12143,
        73.97773
      ],
      [
        19.1198,
        73.98117
      ],
      [
        19.12143,
        73.97773
      ],
      [
        19.1173,
        73.97605
      ],
      [
        19.11779,
        73.97408
      ],
      [
        19.11411,
        73.97293
      ],
      [
        19.0942,
        73.97007
      ],
      [
        19.0933,
        73.97066
      ],
      [
        19.09148,
        73.96947
      ],
      [
        19.0577,
        73.95881
      ],
      [
        19.05579,
        73.95914
      ],
      [
        19.05093,
        73.96272
      ],
      [
        19.04874,
        73.96352
      ],
      [
        19.03867,
        73.96281
      ],
      [
        19.03649,
        73.96115
      ],
      [
        19.0335,
        73.95515
      ],
      [
        19.03245,
        73.95425
      ],
      [
        19.01693,
        73.94884
      ],
      [
        19.01267,
        73.94919
      ],
      [
        19.00695,
        73.948
      ],
      [
        18.99771,
        73.94298
      ],
      [
        18.98935,
        73.94278
      ],
      [
        18.97761,
        73.94648
      ],
      [
        18.97163,
        73.94515
      ],
      [
        18.96774,
        73.94513
      ],
      [
        18.96213,
        73.94217
      ],
      [
        18.95762,
        73.94135
      ],
      [
        18.95384,
        73.93999
      ],
      [
        18.94615,
        73.94131
      ],
      [
        18.94268,
        73.94096
      ],
      [
        18.93691,
        73.93581
      ],
      [
        18.93282,
        73.93053
      ],
      [
        18.9289,
        73.92771
      ],
      [
        18.92286,
        73.92093
      ],
      [
        18.90312,
        73.9148
      ],
      [
        18.90072,
        73.91326
      ],
      [
        18.89635,
        73.91342
      ],
      [
        18.88915,
        73.91552
      ],
      [
        18.88418,
        73.91308
      ],
      [
        18.88125,
        73.90954
      ],
      [
        18.87815,
        73.90007
      ],
      [
        18.86987,
        73.89688
      ],
      [
        18.85665,
        73.88775
      ],
      [
        18.855,
        73.88751
      ],
      [
        18.85397,
        73.88564
      ],
      [
        18.85417,
        73.88441
      ],
      [
        18.85691,
        73.88046
      ],
      [
        18.85776,
        73.88182
      ],
      [
        18.85642,
        73.88125
      ],
      [
        18.85417,
        73.88441
      ],
      [
        18.85397,
        73.88564
      ],
      [
        18.855,
        73.88751
      ],
      [
        18.85125,
        73.88771
      ],
      [
        18.84963,
        73.88684
      ],
      [
        18.84581,
        73.88259
      ],
      [
        18.83824,
        73.88029
      ],
      [
        18.83248,
        73.87747
      ],
      [
        18.81963,
        73.87493
      ],
      [
        18.81102,
        73.87425
      ],
      [
        18.80805,
        73.87354
      ],
      [
        18.80282,
        73.87209
      ],
      [
        18.79991,
        73.86987
      ],
      [
        18.79314,
        73.86749
      ],
      [
        18.78964,
        73.86825
      ],
      [
        18.78395,
        73.87246
      ],
      [
        18.78075,
        73.87233
      ],
      [
        18.77482,
        73.86986
      ],
      [
        18.76849,
        73.86641
      ],
      [
        18.76558,
        73.86291
      ],
      [
        18.75942,
        73.85872
      ],
      [
        18.7576,
        73.8586
      ],
      [
        18.75066,
        73.86015
      ],
      [
        18.73997,
        73.85894
      ],
      [
        18.73755,
        73.85777
      ],
      [
        18.73087,
        73.85606
      ],
      [
        18.71483,
        73.84835
      ],
      [
        18.71051,
        73.84864
      ],
      [
        18.69468,
        73.84758
      ],
      [
        18.69114,
        73.84622
      ],
      [
        18.68345,
        73.84717
      ],
      [
        18.67802,
        73.84986
      ],
      [
        18.67199,
        73.84849
      ],
      [
        18.66835,
        73.84894
      ],
      [
        18.65999,
        73.84844
      ],
      [
        18.65784,
        73.84917
      ],
      [
        18.65459,
        73.84899
      ],
      [
        18.64848,
        73.85075
      ],
      [
        18.64533,
        73.85037
      ],
      [
        18.64229,
        73.85079
      ],
      [
        18.63403,
        73.84978
      ],
      [
        18.63044,
        73.85063
      ],
      [
        18.62805,
        73.85219
      ],
      [
        18.62623,
        73.85236
      ],
      [
        18.6171,
        73.84969
      ],
      [
        18.6158,
        73.84758
      ],
      [
        18.61571,
        73.84515
      ],
      [
        18.61636,
        73.84188
      ],
      [
        18.61801,
        73.83785
      ],
      [
        18.61898,
        73.83034
      ],
      [
        18.6177,
        73.82614
      ],
      [
        18.60695,
        73.82243
      ],
      [
        18.60189,
        73.8263
      ],
      [
        18.5879,
        73.83269
      ],
      [
        18.57657,
        73.83564
      ],
      [
        18.56584,
        73.83966
      ],
      [
        18.55986,
        73.84375
      ],
      [
        18.5573,
        73.84674
      ],
      [
        18.54908,
        73.85116
      ],
      [
        18.54675,
        73.84725
      ],
      [
        18.54504,
        73.84706
      ],
      [
        18.54481,
        73.84554
      ],
      [
        18.54409,
        73.84735
      ],
      [
        18.536,
        73.84792
      ],
      [
        18.5353,
        73.84874
      ],
      [
        18.53025,
        73.84979
      ],
      [
        18.52932,
        73.85251
      ],
      [
        18.52742,
        73.85127
      ],
      [
        18.52579,
        73.85328
      ],
      [
        18.52018,
        73.85611
      ],
      [
        18.51533,
        73.85632
      ],
      [
        18.51186,
        73.85787
      ],
      [
        18.50667,
        73.85806
      ],
      [
        18.50439,
        73.85904
      ],
      [
        18.50179,
        73.85865
      ]
    ],
    "R-NSK-MUM": [
      [
        19.99201,
        73.78499
      ],
      [
        19.9902,
        73.78301
      ],
      [
        19.98732,
        73.78383
      ],
      [
        19.98682,
        73.78462
      ],
      [
        19.98714,
        73.7886
      ],
      [
        19.99079,
        73.79924
      ],
      [
        19.98586,
        73.80172
      ],
      [
        19.97287,
        73.81388
      ],
      [
        19.95401,
        73.83776
      ],
      [
        19.9476,
        73.83696
      ],
      [
        19.94412,
        73.83556
      ],
      [
        19.9422,
        73.83577
      ],
      [
        19.93732,
        73.83451
      ],
      [
        19.93743,
        73.83006
      ],
      [
        19.93652,
        73.8222
      ],
      [
        19.935,
        73.81649
      ],
      [
        19.93335,
        73.81466
      ],
      [
        19.93397,
        73.81099
      ],
      [
        19.93123,
        73.8113
      ],
      [
        19.92452,
        73.8032
      ],
      [
        19.91808,
        73.79747
      ],
      [
        19.91623,
        73.79362
      ],
      [
        19.91642,
        73.79048
      ],
      [
        19.91416,
        73.7818
      ],
      [
        19.90218,
        73.76894
      ],
      [
        19.9025,
        73.75356
      ],
      [
        19.90012,
        73.74384
      ],
      [
        19.89853,
        73.74236
      ],
      [
        19.8975,
        73.73894
      ],
      [
        19.89801,
        73.73761
      ],
      [
        19.89778,
        73.73603
      ],
      [
        19.89697,
        73.73478
      ],
      [
        19.8942,
        73.73394
      ],
      [
        19.8933,
        73.73265
      ],
      [
        19.89303,
        73.72865
      ],
      [
        19.89419,
        73.72596
      ],
      [
        19.89453,
        73.72075
      ],
      [
        19.89309,
        73.7173
      ],
      [
        19.89036,
        73.70286
      ],
      [
        19.88636,
        73.69693
      ],
      [
        19.88489,
        73.69349
      ],
      [
        19.8675,
        73.68811
      ],
      [
        19.86204,
        73.68453
      ],
      [
        19.86174,
        73.67914
      ],
      [
        19.86241,
        73.67777
      ],
      [
        19.86234,
        73.67647
      ],
      [
        19.8602,
        73.67579
      ],
      [
        19.85894,
        73.67466
      ],
      [
        19.85809,
        73.67001
      ],
      [
        19.85571,
        73.66578
      ],
      [
        19.85537,
        73.6639
      ],
      [
        19.85348,
        73.6606
      ],
      [
        19.85254,
        73.65988
      ],
      [
        19.85101,
        73.65367
      ],
      [
        19.84777,
        73.64645
      ],
      [
        19.84433,
        73.6419
      ],
      [
        19.84318,
        73.64148
      ],
      [
        19.84282,
        73.6397
      ],
      [
        19.8411,
        73.63871
      ],
      [
        19.8378,
        73.63465
      ],
      [
        19.83705,
        73.63166
      ],
      [
        19.83456,
        73.63075
      ],
      [
        19.82753,
        73.62334
      ],
      [
        19.82529,
        73.61921
      ],
      [
        19.82405,
        73.61428
      ],
      [
        19.82287,
        73.61435
      ],
      [
        19.82279,
        73.61274
      ],
      [
        19.82145,
        73.61252
      ],
      [
        19.82275,
        73.60952
      ],
      [
        19.82256,
        73.60679
      ],
      [
        19.82356,
        73.60508
      ],
      [
        19.82295,
        73.60449
      ],
      [
        19.81885,
        73.60468
      ],
      [
        19.81833,
        73.60299
      ],
      [
        19.81915,
        73.59832
      ],
      [
        19.81839,
        73.58933
      ],
      [
        19.82035,
        73.58425
      ],
      [
        19.82017,
        73.58166
      ],
      [
        19.81705,
        73.58199
      ],
      [
        19.81402,
        73.5814
      ],
      [
        19.80913,
        73.57352
      ],
      [
        19.80874,
        73.57112
      ],
      [
        19.80331,
        73.57002
      ],
      [
        19.804,
        73.57266
      ],
      [
        19.80098,
        73.57162
      ],
      [
        19.79864,
        73.57182
      ],
      [
        19.79773,
        73.57244
      ],
      [
        19.79669,
        73.57512
      ],
      [
        19.7982,
        73.58276
      ],
      [
        19.80114,
        73.5835
      ],
      [
        19.80024,
        73.58458
      ],
      [
        19.80009,
        73.58605
      ],
      [
        19.79747,
        73.58655
      ],
      [
        19.79698,
        73.58779
      ],
      [
        19.79713,
        73.58992
      ],
      [
        19.79944,
        73.59242
      ],
      [
        19.79844,
        73.59399
      ],
      [
        19.79687,
        73.59319
      ],
      [
        19.7943,
        73.59368
      ],
      [
        19.78962,
        73.59949
      ],
      [
        19.78904,
        73.60266
      ],
      [
        19.78933,
        73.60608
      ],
      [
        19.78672,
        73.60599
      ],
      [
        19.78577,
        73.60744
      ],
      [
        19.78545,
        73.60957
      ],
      [
        19.78583,
        73.61103
      ],
      [
        19.78384,
        73.61611
      ],
      [
        19.78124,
        73.61695
      ],
      [
        19.77938,
        73.6169
      ],
      [
        19.77624,
        73.61469
      ],
      [
        19.77321,
        73.61504
      ],
      [
        19.77076,
        73.61391
      ],
      [
        19.76846,
        73.61378
      ],
      [
        19.7673,
        73.61431
      ],
      [
        19.76728,
        73.61551
      ],
      [
        19.76588,
        73.61494
      ],
      [
        19.76553,
        73.61598
      ],
      [
        19.7605,
        73.61811
      ],
      [
        19.75624,
        73.61696
      ],
      [
        19.75137,
        73.61478
      ],
      [
        19.7461,
        73.61457
      ],
      [
        19.74276,
        73.61197
      ],
      [
        19.73967,
        73.61598
      ],
      [
        19.73625,
        73.61859
      ],
      [
        19.73504,
        73.62354
      ],
      [
        19.73226,
        73.63051
      ],
      [
        19.72781,
        73.63223
      ],
      [
        19.73221,
        73.63439
      ],
      [
        19.73519,
        73.63509
      ],
      [
        19.73164,
        73.63429
      ],
      [
        19.72584,
        73.6316
      ],
      [
        19.71841,
        73.62503
      ],
      [
        19.71081,
        73.61737
      ],
      [
        19.70576,
        73.61012
      ],
      [
        19.70151,
        73.60646
      ],
      [
        19.69641,
        73.59617
      ],
      [
        19.69445,
        73.59081
      ],
      [
        19.69506,
        73.58995
      ],
      [
        19.69548,
        73.58406
      ],
      [
        19.69375,
        73.58016
      ],
      [
        19.69377,
        73.56749
      ],
      [
        19.69489,
        73.56498
      ],
      [
        19.69518,
        73.56118
      ],
      [
        19.69731,
        73.56098
      ],
      [
        19.69767,
        73.55997
      ],
      [
        19.69533,
        73.55914
      ],
      [
        19.69603,
        73.55677
      ],
      [
        19.69461,
        73.55601
      ],
      [
        19.69359,
        73.55025
      ],
      [
        19.69369,
        73.54665
      ],
      [
        19.69336,
        73.54485
      ],
      [
        19.69253,
        73.54392
      ],
      [
        19.69744,
        73.53079
      ],
      [
        19.69611,
        73.52366
      ],
      [
        19.69751,
        73.51914
      ],
      [
        19.69854,
        73.51259
      ],
      [
        19.6961,
        73.51226
      ],
      [
        19.69514,
        73.5103
      ],
      [
        19.69447,
        73.51012
      ],
      [
        19.69302,
        73.51311
      ],
      [
        19.69134,
        73.51311
      ],
      [
        19.68976,
        73.51534
      ],
      [
        19.68637,
        73.51525
      ],
      [
        19.68284,
        73.51597
      ],
      [
        19.68212,
        73.51419
      ],
      [
        19.68291,
        73.51326
      ],
      [
        19.68498,
        73.5126
      ],
      [
        19.68453,
        73.51065
      ],
      [
        19.68566,
        73.50853
      ],
      [
        19.68491,
        73.50614
      ],
      [
        19.68682,
        73.50434
      ],
      [
        19.68657,
        73.50324
      ],
      [
        19.68224,
        73.50267
      ],
      [
        19.6784,
        73.50345
      ],
      [
        19.6762,
        73.50234
      ],
      [
        19.67419,
        73.50288
      ],
      [
        19.66266,
        73.5
      ],
      [
        19.65667,
        73.49776
      ],
      [
        19.6525,
        73.4977
      ],
      [
        19.65142,
        73.49633
      ],
      [
        19.65207,
        73.49118
      ],
      [
        19.65092,
        73.4879
      ],
      [
        19.64865,
        73.48668
      ],
      [
        19.64747,
        73.48472
      ],
      [
        19.64535,
        73.48402
      ],
      [
        19.64439,
        73.48243
      ],
      [
        19.64153,
        73.48347
      ],
      [
        19.63871,
        73.48357
      ],
      [
        19.63729,
        73.48288
      ],
      [
        19.62668,
        73.46562
      ],
      [
        19.62589,
        73.46317
      ],
      [
        19.6281,
        73.45364
      ],
      [
        19.62804,
        73.44683
      ],
      [
        19.62855,
        73.44394
      ],
      [
        19.62684,
        73.4393
      ],
      [
        19.62811,
        73.43623
      ],
      [
        19.6297,
        73.43404
      ],
      [
        19.63108,
        73.4283
      ],
      [
        19.63162,
        73.42458
      ],
      [
        19.63063,
        73.42237
      ],
      [
        19.6285,
        73.42087
      ],
      [
        19.62165,
        73.41968
      ],
      [
        19.62001,
        73.41861
      ],
      [
        19.61353,
        73.40925
      ],
      [
        19.61019,
        73.40628
      ],
      [
        19.60972,
        73.40449
      ],
      [
        19.61005,
        73.40109
      ],
      [
        19.60857,
        73.39864
      ],
      [
        19.60278,
        73.39701
      ],
      [
        19.59898,
        73.39334
      ],
      [
        19.59672,
        73.39192
      ],
      [
        19.59235,
        73.3923
      ],
      [
        19.58782,
        73.39034
      ],
      [
        19.58151,
        73.38403
      ],
      [
        19.57641,
        73.38156
      ],
      [
        19.57467,
        73.37743
      ],
      [
        19.57196,
        73.37488
      ],
      [
        19.56794,
        73.37483
      ],
      [
        19.56428,
        73.37569
      ],
      [
        19.55841,
        73.37387
      ],
      [
        19.54826,
        73.36307
      ],
      [
        19.54438,
        73.35591
      ],
      [
        19.54284,
        73.35024
      ],
      [
        19.53972,
        73.34852
      ],
      [
        19.53095,
        73.34124
      ],
      [
        19.52097,
        73.33812
      ],
      [
        19.51644,
        73.33425
      ],
      [
        19.51336,
        73.33033
      ],
      [
        19.50841,
        73.32839
      ],
      [
        19.5058,
        73.32878
      ],
      [
        19.4974,
        73.33346
      ],
      [
        19.49507,
        73.33403
      ],
      [
        19.49181,
        73.3336
      ],
      [
        19.4874,
        73.33105
      ],
      [
        19.48157,
        73.33216
      ],
      [
        19.47746,
        73.33201
      ],
      [
        19.47125,
        73.33431
      ],
      [
        19.4683,
        73.33474
      ],
      [
        19.46216,
        73.33453
      ],
      [
        19.45603,
        73.33352
      ],
      [
        19.45691,
        73.33086
      ],
      [
        19.4526,
        73.32673
      ],
      [
        19.45359,
        73.32519
      ],
      [
        19.45354,
        73.32352
      ],
      [
        19.45419,
        73.32221
      ],
      [
        19.45529,
        73.32133
      ],
      [
        19.45622,
        73.31878
      ],
      [
        19.45582,
        73.31772
      ],
      [
        19.45654,
        73.31701
      ],
      [
        19.45662,
        73.31478
      ],
      [
        19.45798,
        73.31228
      ],
      [
        19.45699,
        73.30481
      ],
      [
        19.45605,
        73.30408
      ],
      [
        19.45655,
        73.29854
      ],
      [
        19.45802,
        73.29651
      ],
      [
        19.45748,
        73.29598
      ],
      [
        19.46259,
        73.29068
      ],
      [
        19.46352,
        73.28643
      ],
      [
        19.46132,
        73.28548
      ],
      [
        19.46146,
        73.28661
      ],
      [
        19.46132,
        73.28548
      ],
      [
        19.46352,
        73.28643
      ],
      [
        19.46259,
        73.29068
      ],
      [
        19.45655,
        73.29703
      ],
      [
        19.45479,
        73.29816
      ],
      [
        19.44802,
        73.30616
      ],
      [
        19.44736,
        73.30639
      ],
      [
        19.44625,
        73.30543
      ],
      [
        19.44478,
        73.30606
      ],
      [
        19.44413,
        73.30521
      ],
      [
        19.44512,
        73.30869
      ],
      [
        19.44542,
        73.31709
      ],
      [
        19.44488,
        73.30803
      ],
      [
        19.44347,
        73.30431
      ],
      [
        19.43389,
        73.29476
      ],
      [
        19.42874,
        73.29151
      ],
      [
        19.42557,
        73.28858
      ],
      [
        19.42292,
        73.28314
      ],
      [
        19.41525,
        73.27574
      ],
      [
        19.41438,
        73.27337
      ],
      [
        19.41352,
        73.26621
      ],
      [
        19.41171,
        73.26165
      ],
      [
        19.39854,
        73.24358
      ],
      [
        19.39402,
        73.23482
      ],
      [
        19.3873,
        73.22709
      ],
      [
        19.38209,
        73.21757
      ],
      [
        19.38043,
        73.21305
      ],
      [
        19.37351,
        73.20147
      ],
      [
        19.36781,
        73.18217
      ],
      [
        19.36472,
        73.17491
      ],
      [
        19.36283,
        73.16836
      ],
      [
        19.35739,
        73.16029
      ],
      [
        19.35481,
        73.15341
      ],
      [
        19.34652,
        73.13842
      ],
      [
        19.34507,
        73.13425
      ],
      [
        19.3449,
        73.13151
      ],
      [
        19.34434,
        73.13137
      ],
      [
        19.34096,
        73.13441
      ],
      [
        19.34039,
        73.13427
      ],
      [
        19.34414,
        73.13071
      ],
      [
        19.34483,
        73.12944
      ],
      [
        19.34418,
        73.12214
      ],
      [
        19.34158,
        73.11709
      ],
      [
        19.33877,
        73.1142
      ],
      [
        19.33513,
        73.11217
      ],
      [
        19.32653,
        73.10937
      ],
      [
        19.31658,
        73.10729
      ],
      [
        19.31367,
        73.10688
      ],
      [
        19.30845,
        73.10797
      ],
      [
        19.29331,
        73.10926
      ],
      [
        19.28837,
        73.10822
      ],
      [
        19.28402,
        73.1056
      ],
      [
        19.28138,
        73.10276
      ],
      [
        19.25649,
        73.06358
      ],
      [
        19.25375,
        73.06069
      ],
      [
        19.247,
        73.04915
      ],
      [
        19.2324,
        73.03176
      ],
      [
        19.22471,
        73.02007
      ],
      [
        19.20902,
        73.004
      ],
      [
        19.20832,
        72.99992
      ],
      [
        19.21185,
        72.97734
      ],
      [
        19.21121,
        72.97588
      ],
      [
        19.20453,
        72.96861
      ],
      [
        19.21254,
        72.97705
      ],
      [
        19.21408,
        72.97771
      ],
      [
        19.2174,
        72.97819
      ],
      [
        19.23532,
        72.976
      ],
      [
        19.21726,
        72.97839
      ],
      [
        19.21283,
        72.97743
      ],
      [
        19.19954,
        72.96368
      ],
      [
        19.1971,
        72.96256
      ],
      [
        19.18839,
        72.96371
      ],
      [
        19.17486,
        72.96863
      ],
      [
        19.1708,
        72.96793
      ],
      [
        19.15108,
        72.9546
      ],
      [
        19.12753,
        72.94022
      ],
      [
        19.08709,
        72.9234
      ],
      [
        19.07455,
        72.91262
      ],
      [
        19.05482,
        72.88507
      ],
      [
        19.0529,
        72.88138
      ],
      [
        19.04841,
        72.86865
      ],
      [
        19.04706,
        72.86661
      ],
      [
        19.04532,
        72.86508
      ],
      [
        19.04233,
        72.86426
      ],
      [
        19.03922,
        72.86174
      ],
      [
        19.02916,
        72.85752
      ],
      [
        19.0266,
        72.85593
      ],
      [
        19.02637,
        72.8551
      ],
      [
        19.02386,
        72.85267
      ],
      [
        19.01778,
        72.84782
      ]
    ],
    "R-NSK-CSN": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        20.00274,
        73.7898
      ],
      [
        20.00401,
        73.79023
      ],
      [
        20.00457,
        73.79439
      ],
      [
        20.00638,
        73.79915
      ],
      [
        20.00871,
        73.80195
      ],
      [
        20.00928,
        73.80613
      ],
      [
        20.01092,
        73.81002
      ],
      [
        20.0089,
        73.81396
      ],
      [
        20.00821,
        73.81778
      ],
      [
        20.00461,
        73.82672
      ],
      [
        19.99752,
        73.83965
      ],
      [
        19.99676,
        73.84209
      ],
      [
        20.00086,
        73.86956
      ],
      [
        20.00062,
        73.87222
      ],
      [
        20.00179,
        73.87961
      ],
      [
        20.00009,
        73.88922
      ],
      [
        19.99853,
        73.89341
      ],
      [
        19.99711,
        73.89559
      ],
      [
        19.99647,
        73.8983
      ],
      [
        19.99711,
        73.90783
      ],
      [
        19.99819,
        73.9109
      ],
      [
        19.99727,
        73.91669
      ],
      [
        20.00006,
        73.92223
      ],
      [
        19.99968,
        73.93114
      ],
      [
        20.0095,
        73.97835
      ],
      [
        20.01372,
        73.9882
      ],
      [
        20.01952,
        73.99566
      ],
      [
        20.02444,
        73.99575
      ],
      [
        20.03338,
        74.00529
      ],
      [
        20.03845,
        74.01454
      ],
      [
        20.04674,
        74.02289
      ],
      [
        20.05119,
        74.02713
      ],
      [
        20.05905,
        74.03023
      ],
      [
        20.06105,
        74.03563
      ],
      [
        20.06221,
        74.04358
      ],
      [
        20.06954,
        74.04727
      ],
      [
        20.0708,
        74.04886
      ],
      [
        20.07329,
        74.07035
      ],
      [
        20.07352,
        74.07901
      ],
      [
        20.0727,
        74.09738
      ],
      [
        20.07039,
        74.10617
      ],
      [
        20.07129,
        74.10753
      ],
      [
        20.07662,
        74.11068
      ],
      [
        20.07694,
        74.10774
      ],
      [
        20.08115,
        74.10766
      ],
      [
        20.08137,
        74.10684
      ],
      [
        20.08288,
        74.10733
      ],
      [
        20.08216,
        74.11033
      ],
      [
        20.07716,
        74.10939
      ],
      [
        20.07513,
        74.11672
      ],
      [
        20.07462,
        74.12096
      ],
      [
        20.07503,
        74.12744
      ],
      [
        20.07467,
        74.13726
      ],
      [
        20.07343,
        74.14294
      ],
      [
        20.07222,
        74.15345
      ],
      [
        20.07023,
        74.16072
      ],
      [
        20.06936,
        74.16904
      ],
      [
        20.07046,
        74.17276
      ],
      [
        20.07198,
        74.18926
      ],
      [
        20.0705,
        74.19678
      ],
      [
        20.07158,
        74.19928
      ],
      [
        20.07383,
        74.20164
      ],
      [
        20.07504,
        74.20769
      ],
      [
        20.07988,
        74.21239
      ],
      [
        20.08538,
        74.2152
      ],
      [
        20.09027,
        74.21866
      ],
      [
        20.09908,
        74.22244
      ],
      [
        20.10275,
        74.22528
      ],
      [
        20.10321,
        74.22618
      ],
      [
        20.09091,
        74.24405
      ],
      [
        20.08428,
        74.25703
      ],
      [
        20.08145,
        74.26113
      ],
      [
        20.07548,
        74.272
      ],
      [
        20.06979,
        74.28067
      ],
      [
        20.06603,
        74.28418
      ],
      [
        20.06466,
        74.29033
      ],
      [
        20.05928,
        74.29585
      ],
      [
        20.05747,
        74.30137
      ],
      [
        20.05728,
        74.30358
      ],
      [
        20.05801,
        74.30733
      ],
      [
        20.05729,
        74.31755
      ],
      [
        20.05626,
        74.32108
      ],
      [
        20.05775,
        74.32886
      ],
      [
        20.05776,
        74.33357
      ],
      [
        20.05478,
        74.35992
      ],
      [
        20.05156,
        74.37696
      ],
      [
        20.0508,
        74.39912
      ],
      [
        20.05168,
        74.40411
      ],
      [
        20.05153,
        74.40749
      ],
      [
        20.04951,
        74.41867
      ],
      [
        20.04754,
        74.42502
      ],
      [
        20.04732,
        74.42871
      ],
      [
        20.04584,
        74.4336
      ],
      [
        20.04483,
        74.44123
      ],
      [
        20.04169,
        74.45268
      ],
      [
        20.04101,
        74.4704
      ],
      [
        20.04139,
        74.47535
      ],
      [
        20.04326,
        74.48286
      ],
      [
        20.0424,
        74.48653
      ],
      [
        20.04225,
        74.48904
      ],
      [
        20.04285,
        74.4894
      ],
      [
        20.04277,
        74.49015
      ],
      [
        20.03837,
        74.48976
      ],
      [
        20.03763,
        74.49354
      ],
      [
        20.02927,
        74.51749
      ],
      [
        20.02891,
        74.52455
      ],
      [
        20.0257,
        74.5394
      ],
      [
        20.01991,
        74.55357
      ],
      [
        20.01687,
        74.56484
      ],
      [
        20.01163,
        74.56958
      ],
      [
        20.01036,
        74.57215
      ],
      [
        20.00918,
        74.57623
      ],
      [
        20.0104,
        74.58101
      ],
      [
        20.00944,
        74.58497
      ],
      [
        20.00537,
        74.59432
      ],
      [
        20.00036,
        74.6031
      ],
      [
        19.99206,
        74.61422
      ],
      [
        19.9841,
        74.62224
      ],
      [
        19.98127,
        74.62817
      ],
      [
        19.97202,
        74.63694
      ],
      [
        19.96806,
        74.64304
      ],
      [
        19.96343,
        74.65675
      ],
      [
        19.96014,
        74.66859
      ],
      [
        19.9558,
        74.6788
      ],
      [
        19.95059,
        74.68875
      ],
      [
        19.94982,
        74.6926
      ],
      [
        19.94307,
        74.69834
      ],
      [
        19.93812,
        74.70357
      ],
      [
        19.93406,
        74.71014
      ],
      [
        19.92612,
        74.7192
      ],
      [
        19.92483,
        74.72675
      ],
      [
        19.92526,
        74.7291
      ],
      [
        19.91567,
        74.74342
      ],
      [
        19.92015,
        74.75763
      ],
      [
        19.92091,
        74.76261
      ],
      [
        19.9212,
        74.79321
      ],
      [
        19.92273,
        74.81319
      ],
      [
        19.92161,
        74.82905
      ],
      [
        19.92209,
        74.83726
      ],
      [
        19.9268,
        74.84615
      ],
      [
        19.92739,
        74.85706
      ],
      [
        19.92677,
        74.86058
      ],
      [
        19.92782,
        74.86403
      ],
      [
        19.9292,
        74.87866
      ],
      [
        19.92803,
        74.88625
      ],
      [
        19.92691,
        74.88905
      ],
      [
        19.92677,
        74.89528
      ],
      [
        19.92991,
        74.90055
      ],
      [
        19.92982,
        74.90373
      ],
      [
        19.93101,
        74.90915
      ],
      [
        19.93724,
        74.91099
      ],
      [
        19.93778,
        74.91187
      ],
      [
        19.93775,
        74.91787
      ],
      [
        19.93683,
        74.92254
      ],
      [
        19.93345,
        74.93284
      ],
      [
        19.92921,
        74.95138
      ],
      [
        19.92945,
        74.95492
      ],
      [
        19.931,
        74.9601
      ],
      [
        19.93139,
        74.96635
      ],
      [
        19.93349,
        74.97811
      ],
      [
        19.93306,
        74.98032
      ],
      [
        19.92381,
        75.0015
      ],
      [
        19.91971,
        75.01478
      ],
      [
        19.9166,
        75.02092
      ],
      [
        19.90853,
        75.03263
      ],
      [
        19.90665,
        75.03898
      ],
      [
        19.90718,
        75.04519
      ],
      [
        19.90806,
        75.04744
      ],
      [
        19.90855,
        75.06924
      ],
      [
        19.90567,
        75.07884
      ],
      [
        19.90089,
        75.09
      ],
      [
        19.90035,
        75.101
      ],
      [
        19.89794,
        75.11965
      ],
      [
        19.90097,
        75.13474
      ],
      [
        19.90132,
        75.15101
      ],
      [
        19.89687,
        75.15616
      ],
      [
        19.89494,
        75.16712
      ],
      [
        19.89083,
        75.18255
      ],
      [
        19.88198,
        75.20575
      ],
      [
        19.88284,
        75.20725
      ],
      [
        19.88087,
        75.20973
      ],
      [
        19.868,
        75.24371
      ],
      [
        19.86818,
        75.24288
      ],
      [
        19.86533,
        75.24226
      ],
      [
        19.86525,
        75.24294
      ],
      [
        19.86133,
        75.24342
      ],
      [
        19.85795,
        75.24526
      ],
      [
        19.85561,
        75.24577
      ],
      [
        19.8554,
        75.24448
      ],
      [
        19.85561,
        75.24577
      ],
      [
        19.85461,
        75.24599
      ],
      [
        19.85823,
        75.2521
      ],
      [
        19.86008,
        75.25651
      ],
      [
        19.85277,
        75.26133
      ],
      [
        19.84721,
        75.26593
      ],
      [
        19.85196,
        75.27245
      ],
      [
        19.86051,
        75.27918
      ],
      [
        19.86757,
        75.28633
      ],
      [
        19.87031,
        75.2902
      ],
      [
        19.87619,
        75.30079
      ],
      [
        19.8772,
        75.30409
      ],
      [
        19.87461,
        75.31131
      ],
      [
        19.87217,
        75.32252
      ],
      [
        19.8722,
        75.32501
      ],
      [
        19.87352,
        75.32851
      ],
      [
        19.87827,
        75.32853
      ],
      [
        19.87813,
        75.32797
      ]
    ],
    "R-NSK-DHL": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        20.00274,
        73.7898
      ],
      [
        20.00401,
        73.79023
      ],
      [
        20.00457,
        73.79439
      ],
      [
        20.00638,
        73.79915
      ],
      [
        20.00871,
        73.80195
      ],
      [
        20.00928,
        73.80613
      ],
      [
        20.01395,
        73.81742
      ],
      [
        20.01648,
        73.82523
      ],
      [
        20.01889,
        73.83049
      ],
      [
        20.02564,
        73.84203
      ],
      [
        20.03092,
        73.85651
      ],
      [
        20.04008,
        73.86994
      ],
      [
        20.06169,
        73.89021
      ],
      [
        20.06562,
        73.8945
      ],
      [
        20.07237,
        73.90404
      ],
      [
        20.07107,
        73.90257
      ],
      [
        20.0702,
        73.9038
      ],
      [
        20.07065,
        73.90595
      ],
      [
        20.0663,
        73.909
      ],
      [
        20.06331,
        73.90961
      ],
      [
        20.06009,
        73.91118
      ],
      [
        20.05715,
        73.91557
      ],
      [
        20.05329,
        73.91957
      ],
      [
        20.05232,
        73.9225
      ],
      [
        20.05079,
        73.92285
      ],
      [
        20.04954,
        73.92556
      ],
      [
        20.0452,
        73.92728
      ],
      [
        20.04487,
        73.93108
      ],
      [
        20.0617,
        73.93133
      ],
      [
        20.06676,
        73.93038
      ],
      [
        20.07898,
        73.92955
      ],
      [
        20.08577,
        73.92809
      ],
      [
        20.08631,
        73.9265
      ],
      [
        20.08802,
        73.92554
      ],
      [
        20.08944,
        73.92291
      ],
      [
        20.09386,
        73.92374
      ],
      [
        20.09551,
        73.92459
      ],
      [
        20.10038,
        73.92902
      ],
      [
        20.10686,
        73.94359
      ],
      [
        20.12946,
        73.96479
      ],
      [
        20.13943,
        73.9707
      ],
      [
        20.14153,
        73.97574
      ],
      [
        20.14294,
        73.97746
      ],
      [
        20.14825,
        73.97994
      ],
      [
        20.1582,
        73.98637
      ],
      [
        20.16131,
        73.98757
      ],
      [
        20.16574,
        73.98795
      ],
      [
        20.17296,
        73.98666
      ],
      [
        20.17058,
        73.99295
      ],
      [
        20.17002,
        73.99296
      ],
      [
        20.16509,
        73.99808
      ],
      [
        20.16637,
        74.00038
      ],
      [
        20.16643,
        74.00174
      ],
      [
        20.16612,
        74.00846
      ],
      [
        20.16512,
        74.01489
      ],
      [
        20.1648,
        74.02474
      ],
      [
        20.16406,
        74.02721
      ],
      [
        20.16694,
        74.02711
      ],
      [
        20.16845,
        74.02605
      ],
      [
        20.17291,
        74.02526
      ],
      [
        20.17553,
        74.024
      ],
      [
        20.17771,
        74.02405
      ],
      [
        20.17928,
        74.02093
      ],
      [
        20.18058,
        74.02016
      ],
      [
        20.18223,
        74.02027
      ],
      [
        20.18771,
        74.0189
      ],
      [
        20.196,
        74.01588
      ],
      [
        20.21491,
        74.04128
      ],
      [
        20.21833,
        74.04678
      ],
      [
        20.22101,
        74.05242
      ],
      [
        20.23623,
        74.06825
      ],
      [
        20.24892,
        74.0766
      ],
      [
        20.252,
        74.07987
      ],
      [
        20.2558,
        74.08278
      ],
      [
        20.26321,
        74.08772
      ],
      [
        20.27037,
        74.09166
      ],
      [
        20.28018,
        74.10038
      ],
      [
        20.28151,
        74.10227
      ],
      [
        20.28765,
        74.11601
      ],
      [
        20.29644,
        74.12734
      ],
      [
        20.30359,
        74.13831
      ],
      [
        20.3115,
        74.16529
      ],
      [
        20.31787,
        74.19297
      ],
      [
        20.32394,
        74.20642
      ],
      [
        20.32608,
        74.21411
      ],
      [
        20.32769,
        74.22374
      ],
      [
        20.32989,
        74.22911
      ],
      [
        20.33096,
        74.2352
      ],
      [
        20.32798,
        74.23864
      ],
      [
        20.32808,
        74.24127
      ],
      [
        20.3286,
        74.24136
      ],
      [
        20.32782,
        74.24428
      ],
      [
        20.32833,
        74.24034
      ],
      [
        20.32798,
        74.23864
      ],
      [
        20.33096,
        74.2352
      ],
      [
        20.33181,
        74.23803
      ],
      [
        20.33506,
        74.24336
      ],
      [
        20.33649,
        74.2469
      ],
      [
        20.33781,
        74.24748
      ],
      [
        20.34511,
        74.24822
      ],
      [
        20.34673,
        74.24969
      ],
      [
        20.34757,
        74.25523
      ],
      [
        20.34903,
        74.25964
      ],
      [
        20.34909,
        74.26365
      ],
      [
        20.34818,
        74.26705
      ],
      [
        20.34778,
        74.27685
      ],
      [
        20.35287,
        74.29354
      ],
      [
        20.3568,
        74.30095
      ],
      [
        20.35986,
        74.30485
      ],
      [
        20.3628,
        74.30579
      ],
      [
        20.36447,
        74.30779
      ],
      [
        20.36637,
        74.30841
      ],
      [
        20.36628,
        74.31331
      ],
      [
        20.37083,
        74.31323
      ],
      [
        20.37245,
        74.31391
      ],
      [
        20.37758,
        74.3203
      ],
      [
        20.38991,
        74.32897
      ],
      [
        20.39462,
        74.33485
      ],
      [
        20.39962,
        74.33785
      ],
      [
        20.42299,
        74.35541
      ],
      [
        20.44488,
        74.37903
      ],
      [
        20.44693,
        74.38282
      ],
      [
        20.45002,
        74.3915
      ],
      [
        20.45692,
        74.39699
      ],
      [
        20.45739,
        74.39896
      ],
      [
        20.45691,
        74.40189
      ],
      [
        20.45761,
        74.40374
      ],
      [
        20.46704,
        74.41175
      ],
      [
        20.47042,
        74.41352
      ],
      [
        20.4735,
        74.41594
      ],
      [
        20.48068,
        74.42319
      ],
      [
        20.49509,
        74.44202
      ],
      [
        20.49836,
        74.44719
      ],
      [
        20.50128,
        74.46182
      ],
      [
        20.50265,
        74.46454
      ],
      [
        20.53066,
        74.49223
      ],
      [
        20.53413,
        74.52017
      ],
      [
        20.53758,
        74.52216
      ],
      [
        20.55469,
        74.52592
      ],
      [
        20.55472,
        74.52881
      ],
      [
        20.55529,
        74.5292
      ],
      [
        20.5553,
        74.52809
      ],
      [
        20.55489,
        74.52817
      ],
      [
        20.55493,
        74.53134
      ],
      [
        20.55401,
        74.53504
      ],
      [
        20.55516,
        74.54139
      ],
      [
        20.57171,
        74.55985
      ],
      [
        20.57314,
        74.56326
      ],
      [
        20.57573,
        74.56539
      ],
      [
        20.58302,
        74.58511
      ],
      [
        20.58636,
        74.59053
      ],
      [
        20.5905,
        74.59553
      ],
      [
        20.59373,
        74.59841
      ],
      [
        20.59771,
        74.60421
      ],
      [
        20.61545,
        74.62589
      ],
      [
        20.62786,
        74.6438
      ],
      [
        20.6417,
        74.65964
      ],
      [
        20.64507,
        74.66201
      ],
      [
        20.65406,
        74.67046
      ],
      [
        20.66127,
        74.67457
      ],
      [
        20.66914,
        74.67685
      ],
      [
        20.68043,
        74.68212
      ],
      [
        20.68403,
        74.68435
      ],
      [
        20.69853,
        74.68975
      ],
      [
        20.70325,
        74.6923
      ],
      [
        20.71243,
        74.69532
      ],
      [
        20.72384,
        74.70055
      ],
      [
        20.72979,
        74.7003
      ],
      [
        20.73414,
        74.70239
      ],
      [
        20.74822,
        74.71369
      ],
      [
        20.75138,
        74.71863
      ],
      [
        20.7595,
        74.72377
      ],
      [
        20.7629,
        74.72487
      ],
      [
        20.76595,
        74.72802
      ],
      [
        20.77276,
        74.73037
      ],
      [
        20.77674,
        74.72975
      ],
      [
        20.77865,
        74.73043
      ],
      [
        20.78214,
        74.73412
      ],
      [
        20.78594,
        74.73658
      ],
      [
        20.78839,
        74.73956
      ],
      [
        20.78992,
        74.74245
      ],
      [
        20.79174,
        74.74404
      ],
      [
        20.80302,
        74.74469
      ],
      [
        20.81371,
        74.74445
      ],
      [
        20.81667,
        74.74627
      ],
      [
        20.81995,
        74.74654
      ],
      [
        20.84928,
        74.763
      ],
      [
        20.85601,
        74.76568
      ],
      [
        20.86312,
        74.76747
      ],
      [
        20.87362,
        74.77289
      ],
      [
        20.87614,
        74.77312
      ],
      [
        20.88198,
        74.77131
      ],
      [
        20.89486,
        74.77473
      ],
      [
        20.8993,
        74.77422
      ],
      [
        20.90204,
        74.77486
      ]
    ],
    "R-NSK-SPT": [
      [
        19.99745,
        73.78981
      ],
      [
        19.99783,
        73.79026
      ],
      [
        20.00274,
        73.7898
      ],
      [
        20.00401,
        73.79023
      ],
      [
        20.00457,
        73.79439
      ],
      [
        20.0066,
        73.79953
      ],
      [
        20.00871,
        73.80195
      ],
      [
        20.01297,
        73.80531
      ],
      [
        20.01347,
        73.80323
      ],
      [
        20.01392,
        73.80331
      ],
      [
        20.01364,
        73.80452
      ],
      [
        20.01434,
        73.80473
      ],
      [
        20.014,
        73.80616
      ],
      [
        20.01773,
        73.81011
      ],
      [
        20.01893,
        73.81061
      ],
      [
        20.02382,
        73.81128
      ],
      [
        20.02661,
        73.80082
      ],
      [
        20.03359,
        73.8032
      ],
      [
        20.04817,
        73.80616
      ],
      [
        20.05255,
        73.80478
      ],
      [
        20.05609,
        73.80571
      ],
      [
        20.06755,
        73.80555
      ],
      [
        20.06907,
        73.80619
      ],
      [
        20.07787,
        73.80533
      ],
      [
        20.08162,
        73.804
      ],
      [
        20.09857,
        73.80689
      ],
      [
        20.10734,
        73.80691
      ],
      [
        20.1321,
        73.81428
      ],
      [
        20.13831,
        73.81535
      ],
      [
        20.14298,
        73.8188
      ],
      [
        20.1533,
        73.82175
      ],
      [
        20.15655,
        73.82227
      ],
      [
        20.15981,
        73.82108
      ],
      [
        20.16171,
        73.82149
      ],
      [
        20.16444,
        73.82405
      ],
      [
        20.16635,
        73.82469
      ],
      [
        20.17918,
        73.82705
      ],
      [
        20.18226,
        73.82674
      ],
      [
        20.19438,
        73.8299
      ],
      [
        20.19727,
        73.83144
      ],
      [
        20.20299,
        73.83024
      ],
      [
        20.20541,
        73.83147
      ],
      [
        20.20451,
        73.83472
      ],
      [
        20.20551,
        73.83499
      ],
      [
        20.2054,
        73.83556
      ],
      [
        20.20415,
        73.83531
      ],
      [
        20.20541,
        73.83147
      ],
      [
        20.21612,
        73.83237
      ],
      [
        20.21936,
        73.83448
      ],
      [
        20.221,
        73.83654
      ],
      [
        20.22278,
        73.83739
      ],
      [
        20.22437,
        73.83915
      ],
      [
        20.24009,
        73.84804
      ],
      [
        20.24303,
        73.8486
      ],
      [
        20.24549,
        73.84785
      ],
      [
        20.25336,
        73.85095
      ],
      [
        20.27051,
        73.85326
      ],
      [
        20.2725,
        73.8561
      ],
      [
        20.27463,
        73.86088
      ],
      [
        20.27416,
        73.86483
      ],
      [
        20.2756,
        73.86908
      ],
      [
        20.27439,
        73.87321
      ],
      [
        20.27543,
        73.87503
      ],
      [
        20.27755,
        73.87543
      ],
      [
        20.28161,
        73.87746
      ],
      [
        20.28685,
        73.87734
      ],
      [
        20.29165,
        73.87944
      ],
      [
        20.29293,
        73.87914
      ],
      [
        20.29642,
        73.87658
      ],
      [
        20.29811,
        73.87634
      ],
      [
        20.30549,
        73.88086
      ],
      [
        20.30938,
        73.8817
      ],
      [
        20.31494,
        73.88176
      ],
      [
        20.3196,
        73.88365
      ],
      [
        20.32393,
        73.88713
      ],
      [
        20.33098,
        73.88937
      ],
      [
        20.33192,
        73.88903
      ],
      [
        20.334,
        73.88643
      ],
      [
        20.33529,
        73.88645
      ],
      [
        20.36042,
        73.89374
      ],
      [
        20.36784,
        73.89184
      ],
      [
        20.37401,
        73.89141
      ],
      [
        20.38056,
        73.88918
      ],
      [
        20.38394,
        73.88903
      ],
      [
        20.388,
        73.88792
      ],
      [
        20.39328,
        73.88288
      ],
      [
        20.39746,
        73.88169
      ],
      [
        20.40193,
        73.88264
      ],
      [
        20.40407,
        73.88401
      ],
      [
        20.40803,
        73.88227
      ],
      [
        20.40964,
        73.8806
      ],
      [
        20.41135,
        73.88009
      ],
      [
        20.41211,
        73.88107
      ],
      [
        20.41375,
        73.88668
      ],
      [
        20.41669,
        73.89084
      ],
      [
        20.41865,
        73.89596
      ],
      [
        20.42092,
        73.90885
      ],
      [
        20.41833,
        73.91123
      ],
      [
        20.41967,
        73.91488
      ],
      [
        20.41906,
        73.91701
      ],
      [
        20.4212,
        73.92061
      ],
      [
        20.42618,
        73.92321
      ],
      [
        20.42131,
        73.92207
      ],
      [
        20.41875,
        73.92018
      ],
      [
        20.41809,
        73.91876
      ],
      [
        20.4161,
        73.91715
      ],
      [
        20.417,
        73.91537
      ],
      [
        20.40996,
        73.91207
      ],
      [
        20.40693,
        73.91163
      ],
      [
        20.40653,
        73.91004
      ],
      [
        20.40692,
        73.90881
      ],
      [
        20.40631,
        73.90751
      ],
      [
        20.40509,
        73.90614
      ],
      [
        20.40355,
        73.90602
      ],
      [
        20.4032,
        73.90443
      ],
      [
        20.40348,
        73.9027
      ],
      [
        20.40487,
        73.90273
      ],
      [
        20.40548,
        73.90102
      ],
      [
        20.40647,
        73.90093
      ],
      [
        20.40811,
        73.89934
      ],
      [
        20.40636,
        73.89797
      ],
      [
        20.40063,
        73.89854
      ],
      [
        20.4002,
        73.90485
      ],
      [
        20.39847,
        73.90813
      ],
      [
        20.39779,
        73.90856
      ],
      [
        20.39564,
        73.90811
      ],
      [
        20.39172,
        73.90874
      ],
      [
        20.39045,
        73.90963
      ],
      [
        20.3864,
        73.91061
      ],
      [
        20.39045,
        73.90963
      ],
      [
        20.39172,
        73.90874
      ],
      [
        20.39564,
        73.90811
      ],
      [
        20.39779,
        73.90856
      ],
      [
        20.39847,
        73.90813
      ],
      [
        20.4002,
        73.90485
      ],
      [
        20.40044,
        73.89937
      ]
    ]
  },
  "schedules": [
    {
      "time": "06:15 AM",
      "busNumber": "MH 15 EG 1001",
      "destination": "Nashik CBS",
      "type": "Ordinary",
      "status": "Passed"
    },
    {
      "time": "07:00 AM",
      "busNumber": "MH 14 BJ 2201",
      "destination": "Sangamner",
      "type": "Ordinary",
      "status": "Passed"
    },
    {
      "time": "08:30 AM",
      "busNumber": "MH 14 BT 3349",
      "destination": "Pune Swargate",
      "type": "Asiad",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "09:00 AM",
      "busNumber": "MH 04 FK 8810",
      "destination": "Mumbai Dadar",
      "type": "Shivneri",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "09:10 AM",
      "busNumber": "MH 20 DJ 4519",
      "destination": "Chh. Sambhaji Nagar",
      "type": "Ordinary",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "09:30 AM",
      "busNumber": "MH 18 M 6023",
      "destination": "Dhule CBS",
      "type": "Ordinary",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "10:00 AM",
      "busNumber": "MH 15 EM 7725",
      "destination": "Saptashrungi Gad",
      "type": "Electric",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "10:15 AM",
      "busNumber": "MH 15 BJ 9812",
      "destination": "Shirdi Sai Mandir",
      "type": "Shivshahi",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "11:00 AM",
      "busNumber": "MH 15 EG 2204",
      "destination": "Trimbakeshwar Depot",
      "type": "Electric",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "11:42 AM",
      "busNumber": "MH 15 EG 4021",
      "destination": "Yeola Bus Stand",
      "type": "Ordinary",
      "status": "Live",
      "isLive": true
    },
    {
      "time": "01:15 PM",
      "busNumber": "MH 15 BJ 7712",
      "destination": "Yeola Paithani City",
      "type": "Shivshahi",
      "status": "Scheduled"
    },
    {
      "time": "02:00 PM",
      "busNumber": "MH 14 EG 8830",
      "destination": "Nashik CBS",
      "type": "Ordinary",
      "status": "Scheduled"
    },
    {
      "time": "03:45 PM",
      "busNumber": "MH 15 QG 0019",
      "destination": "Mumbai Dadar",
      "type": "Shivneri",
      "status": "Scheduled"
    },
    {
      "time": "05:10 PM",
      "busNumber": "MH 12 EG 4490",
      "destination": "Sinnar Stand",
      "type": "Ordinary",
      "status": "Scheduled"
    },
    {
      "time": "07:30 PM",
      "busNumber": "MH 15 BJ 6620",
      "destination": "Pune Night Super",
      "type": "Shivshahi",
      "status": "Scheduled"
    }
  ],
  "communityReports": [
    {
      "id": "REP-901",
      "stopId": "NPH-01",
      "busNumber": "MH 15 EG 4021",
      "type": "bus_passed",
      "title": "Previous Yeola bus passed 10 mins ago",
      "titleMr": "मागील येवला बस १० मिनिटांपूर्वी निघून गेली",
      "reporter": "Farmer Dnyaneshwar",
      "timestamp": "8 mins ago",
      "expiresIn": "22 mins",
      "votes": 14,
      "statusBadge": "Verified by 14 commuters"
    },
    {
      "id": "REP-902",
      "stopId": "NPH-01",
      "busNumber": "MH 15 BJ 8890",
      "type": "overcrowded",
      "title": "Shivshahi bus is heavy crowded from Sinnar side",
      "titleMr": "सिन्नरकडून येणारी शिवशाही बस गच्च भरलेली आहे",
      "reporter": "College Student Snehal",
      "timestamp": "15 mins ago",
      "expiresIn": "15 mins",
      "votes": 9,
      "statusBadge": "Verified by 9 commuters"
    },
    {
      "id": "REP-903",
      "stopId": "NPH-01",
      "type": "weather",
      "title": "Light rainfall near Sinnar Phata circle - drive cautious",
      "titleMr": "सिन्नर फाट्या जवळ हलका पाऊस सुरु आहे",
      "reporter": "Gram Panchayat Member",
      "timestamp": "28 mins ago",
      "expiresIn": "2 mins",
      "votes": 21,
      "statusBadge": "Auto-expiring soon"
    }
  ],
  "adminStats": {
    "district": "Nashik Division (MSRTC)",
    "activeBusesCount": 482,
    "onTimePercentage": 91.4,
    "activeQrStops": 1240,
    "dailyPassengers": 184500,
    "delayedRoutesCount": 18,
    "mostDelayedRoutes": [
      {
        "route": "Nashik - Sinnar - Sangamner",
        "delayAvg": "14 mins",
        "cause": "Road widening work NH 60"
      },
      {
        "route": "Pune Swargate - Narayangaon",
        "delayAvg": "11 mins",
        "cause": "Market day crowd at Khed"
      },
      {
        "route": "Trimbakeshwar - CBS Nashik",
        "delayAvg": "9 mins",
        "cause": "Pilgrim traffic"
      }
    ],
    "mostCrowdedStops": [
      {
        "name": "Sinnar Phata Circle",
        "peakPassengers": "420 / hr"
      },
      {
        "name": "Shivare Bus Stop",
        "peakPassengers": "185 / hr",
        "lat": 19.8245,
        "lng": 73.9892
      },
      {
        "name": "Igatpuri Highway Phata",
        "peakPassengers": "310 / hr"
      }
    ]
  }
};

// Support CommonJS export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SMART_ST_DATA;
}
