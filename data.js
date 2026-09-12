/**
 * Where's My Bus? - MSRTC Live Bus Tracking System
 * Regional Maharashtra Inter-City Network Telemetry Store
 */

const SMART_ST_DATA = {
  "activeStopId": "NSK-CBS",
  "i18n": {
    "en": {
      "appName": "Track My Bus",
      "tagline": "KNOW BEFORE YOU WAIT.",
      "splashMsrtc": "MSRTC Digital Bus Stop System",
      "featLiveBusLoc": "Live Bus Location",
      "featEstimatedArrival": "Estimated Arrival",
      "featVoiceAlerts": "Voice Alerts",
      "scanQrBtn": "Scan Bus Stop QR",
      "exploreStopsBtn": "Explore Bus Stops & Arrivals",
      "howToUseBtn": "How To Use?",
      "exploreDashboardBtn": "Explore Dashboard",
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
      "geminiTtsBadge": "Gemini 3.1 Flash TTS",
      "geminiConfigBtn": "Gemini API Key",
      "currentAnnouncement": "Current Announcement Script",
      "playingTtsAnnouncement": "Playing Gemini Voice Announcement...",
      "generatingTtsAnnouncement": "Generating Gemini 3.1 Flash Audio...",
      "voiceAlertBtn": "Voice Alert",
      "voiceAlertPlaying": "Announcing...",
      "voiceAlertOffline": "You are offline. Voice alerts require an internet connection.",
      "voiceAlertError": "Voice alert is currently unavailable.",
      "voiceAlertServerKeyNeeded": "Server requires GEMINI_API_KEY to generate audio.",
      "usingDeviceSpeech": "Playing Device Voice (Add Gemini Key for Studio Audio)",
      "selectBus": "Select Bus",
      "geminiModalTitle": "Gemini 3.1 Flash TTS Settings",
      "saveApiKey": "Save API Key",
      "clearApiKey": "Clear Key",
      "apiKeyPlaceholder": "Enter Google Gemini API key (AIza...)",
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
      "navRoutes": "Routes",
      "navNearby": "Nearby",
      "navAccount": "Account",
      "reportModalTitle": "Report Bus Status",
      "feedbackModalTitle": "Passenger Feedback",
      "signInModalTitle": "Sign In",
      "addFavoriteModalTitle": "Add Favorite Bus Stop",
      "howItWorksModalTitle": "How Track My Bus Works",
      "bookTicketModalTitle": "Book Bus Ticket",
      "viewTicketsModalTitle": "View Tickets",
      "myPassModalTitle": "My Pass",
      "offlinePassModalTitle": "Apply Offline Bus Pass",
      "helplineModalTitle": "Emergency & Help Line",
      "favoritesModalTitle": "My Favourites",
      "nearbyStopsModalTitle": "Nearby Bus Stops",
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
      "trackLiveMap": "Track Route on Map",
      "trackYourBus": "Track your bus",
      "searchSubtitle": "Search routes, stops or places across Maharashtra",
      "filterAll": "All",
      "recentSearches": "Recent Searches",
      "clearRecent": "Clear",
      "popularStops": "Popular Stops",
      "noResultsFound": "No stops or buses found for",
      "tryDifferentSearch": "Try searching by route name, stop code, or Marathi name."
    },
    "mr": {
      "appName": "माझी बस कुठे आहे?",
      "tagline": "थांबण्यापूर्वी जाणून घ्या.",
      "splashMsrtc": "MSRTC डिजिटल बस थांबा प्रणाली",
      "featLiveBusLoc": "थेट बस स्थान",
      "featEstimatedArrival": "अंदाजित आगमन",
      "featVoiceAlerts": "आवाज सूचना",
      "scanQrBtn": "बस स्थानक QR स्कॅन करा",
      "exploreStopsBtn": "बस स्थानके व थेट आगमन",
      "howToUseBtn": "वापर कसा करावा?",
      "exploreDashboardBtn": "डॅशबोर्ड पहा",
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
      "geminiTtsBadge": "जेमिनी ३.१ फ्लॅश टीटीएस",
      "geminiConfigBtn": "जेमिनी API की",
      "currentAnnouncement": "सध्याची घोषणा संहिता",
      "playingTtsAnnouncement": "जेमिनी व्हॉईस घोषणा सुरू आहे...",
      "generatingTtsAnnouncement": "जेमिनी ३.१ फ्लॅश ऑडिओ तयार होत आहे...",
      "voiceAlertBtn": "व्हॉईस अलर्ट",
      "voiceAlertPlaying": "घोषणा सुरू आहे...",
      "voiceAlertOffline": "तुम्ही ऑफलाइन आहात. व्हॉईस अलर्टसाठी इंटरनेट कनेक्शन आवश्यक आहे.",
      "voiceAlertError": "व्हॉईस घोषणा सध्या उपलब्ध नाही.",
      "voiceAlertServerKeyNeeded": "व्हॉईस अलर्टसाठी सर्व्हरवर GEMINI_API_KEY आवश्यक आहे.",
      "usingDeviceSpeech": "डिव्हाइस व्हॉईस सुरू आहे (स्टुडिओ ऑडिओसाठी जेमिनी की जोडा)",
      "selectBus": "बस निवडा",
      "geminiModalTitle": "जेमिनी ३.१ फ्लॅश टीटीएस सेटिंग्ज",
      "saveApiKey": "API की जतन करा",
      "clearApiKey": "की हटवा",
      "apiKeyPlaceholder": "आपली जेमिनी API की प्रविष्ट करा (AIza...)",
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
      "navRoutes": "मार्ग",
      "navNearby": "जवळचे",
      "navAccount": "खाते",
      "reportModalTitle": "बस स्थिती रिपोर्ट करा",
      "feedbackModalTitle": "प्रवासी प्रतिक्रिया",
      "signInModalTitle": "साइन इन",
      "addFavoriteModalTitle": "आवडता थांबा जोडा",
      "howItWorksModalTitle": "ट्रॅक माय बस कसे कार्य करते",
      "bookTicketModalTitle": "बस तिकीट बुक करा",
      "viewTicketsModalTitle": "तिकीट पहा",
      "myPassModalTitle": "माझे पास",
      "offlinePassModalTitle": "ऑफलाइन बस पास अर्ज",
      "helplineModalTitle": "आपत्कालीन व मदत केंद्र",
      "favoritesModalTitle": "माझ्या आवडी",
      "nearbyStopsModalTitle": "जवळचे बस थांबे",
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
      "trackLiveMap": "नकाशावर मार्ग पहा",
      "trackYourBus": "तुमची बस ट्रॅक करा",
      "searchSubtitle": "महाराष्ट्रातील मार्ग, थांबे किंवा ठिकाणे शोधा",
      "filterAll": "सर्व",
      "recentSearches": "अलीकडील शोध",
      "clearRecent": "साफ करा",
      "popularStops": "लोकप्रिय थांबे",
      "noResultsFound": "खालील शोधासाठी काहीही आढळले नाही",
      "tryDifferentSearch": "मार्गाचे नाव, थांबा कोड किंवा मराठी नावाने शोधून पहा."
    },
    "hi": {
      "appName": "मेरी बस कहाँ है?",
      "tagline": "इंतज़ार करने से पहले जानें।",
      "splashMsrtc": "MSRTC डिजिटल बस स्टॉप प्रणाली",
      "featLiveBusLoc": "लाइव बस स्थान",
      "featEstimatedArrival": "अनुमानित आगमन",
      "featVoiceAlerts": "ध्वनि अलर्ट",
      "scanQrBtn": "बस स्टॉप QR स्कैन करें",
      "exploreStopsBtn": "बस स्टॉप और लाइव आगमन",
      "howToUseBtn": "उपयोग कैसे करें?",
      "exploreDashboardBtn": "डैशबोर्ड देखें",
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
      "geminiTtsBadge": "जेमिनी ३.१ फ्लैश टीटीएस",
      "geminiConfigBtn": "जेमिनी API कुंजी",
      "currentAnnouncement": "वर्तमान घोषणा स्क्रिप्ट",
      "playingTtsAnnouncement": "जेमिनी वॉइस घोषणा चल रही है...",
      "generatingTtsAnnouncement": "जेमिनी ३.१ फ्लैश ऑडियो तैयार हो रहा है...",
      "voiceAlertBtn": "वॉइस अलर्ट",
      "voiceAlertPlaying": "घोषणा चल रही है...",
      "voiceAlertOffline": "आप ऑफ़लाइन हैं। वॉइस अलर्ट के लिए इंटरनेट कनेक्शन आवश्यक है।",
      "voiceAlertError": "वॉइस घोषणा अभी उपलब्ध नहीं है।",
      "voiceAlertServerKeyNeeded": "वॉइस अलर्ट के लिए सर्वर पर GEMINI_API_KEY आवश्यक है।",
      "usingDeviceSpeech": "डिवाइस वॉइस चल रहा है (स्टूडियो ऑडियो के लिए जेमिनी कुंजी जोड़ें)",
      "selectBus": "बस चुनें",
      "geminiModalTitle": "जेमिनी ३.१ फ्लैश टीटीएस सेटिंग्स",
      "saveApiKey": "API कुंजी सहेजें",
      "clearApiKey": "कुंजी हटाएं",
      "apiKeyPlaceholder": "अपनी जेमिनी API कुंजी दर्ज करें (AIza...)",
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
      "navRoutes": "रूट्स",
      "navNearby": "आसपास",
      "navAccount": "अकाउंट",
      "reportModalTitle": "बस स्थिति रिपोर्ट करें",
      "feedbackModalTitle": "यात्री फीडबैक",
      "signInModalTitle": "साइन इन",
      "addFavoriteModalTitle": "पसंदीदा बस स्टॉप जोड़ें",
      "howItWorksModalTitle": "ट्रैक माय बस कैसे काम करता है",
      "bookTicketModalTitle": "बस टिकट बुक करें",
      "viewTicketsModalTitle": "टिकट देखें",
      "myPassModalTitle": "मेरा पास",
      "offlinePassModalTitle": "ऑफलाइन बस पास आवेदन",
      "helplineModalTitle": "आपातकालीन और हेल्पलाइन",
      "favoritesModalTitle": "मेरी पसंद",
      "nearbyStopsModalTitle": "आसपास के बस स्टॉप",
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
      "trackLiveMap": "मैप पर ट्रैक करें",
      "trackYourBus": "अपनी बस ट्रैक करें",
      "searchSubtitle": "महाराष्ट्र भर के मार्ग, स्टॉप या स्थान खोजें",
      "filterAll": "सभी",
      "recentSearches": "हाल की खोजें",
      "clearRecent": "हटाएं",
      "popularStops": "लोकप्रिय स्टॉप",
      "noResultsFound": "इसके लिए कोई स्टॉप या बस नहीं मिली",
      "tryDifferentSearch": "मार्ग नाम, स्टॉप कोड या हिंदी नाम से खोजें।"
    }
  },
  "busStops": [
    {
      "id": "NSK-CBS",
      "qrCode": "MSRTC-MH15-NSKCBS",
      "name": "Nashik CBS (Thakkar Bazar)",
      "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
      "village": "Nashik",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9984,
      "longitude": 73.7865,
      "landmark": "Near Old CBS Circle & Trimbak Road",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NSK-DWK",
      "qrCode": "MSRTC-MH15-NSKDWK",
      "name": "Dwarka Circle",
      "nameMr": "द्वारका चौक",
      "nameHi": "द्वारका चौक",
      "village": "Dwarka",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9898,
      "longitude": 73.8055,
      "landmark": "NH-48 & NH-60 Flyover Junction",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NSK-RD",
      "qrCode": "MSRTC-MH15-NSKRD",
      "name": "Nashik Road Station",
      "nameMr": "नाशिक रोड रेल्वे स्थानक",
      "nameHi": "नाशिक रोड रेलवे स्टेशन",
      "village": "Nashik",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9542,
      "longitude": 73.8344,
      "landmark": "Opposite Railway Station Main Entrance",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NSK-BYT",
      "qrCode": "MSRTC-MH15-NSKBYT",
      "name": "Bytco Point",
      "nameMr": "बिटको पॉईंट",
      "nameHi": "बिटको पॉइंट",
      "village": "Bytco",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9575,
      "longitude": 73.8318,
      "landmark": "Bytco Hospital Circle",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NSK-MMN",
      "qrCode": "MSRTC-MH15-NSKMMN",
      "name": "Mumbai Naka",
      "nameMr": "मुंबई नाका",
      "nameHi": "मुंबई नाका",
      "village": "Mumbai",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9875,
      "longitude": 73.7852,
      "landmark": "NH-48 Intercity Boarding Terminal",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NSK-TRN",
      "qrCode": "MSRTC-MH15-NSKTRN",
      "name": "Trimbak Naka",
      "nameMr": "त्र्यंबक नाका",
      "nameHi": "त्र्यंबक नाका",
      "village": "Trimbak",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9942,
      "longitude": 73.7818,
      "landmark": "District Court & Police Commissionerate",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NSK-STP",
      "qrCode": "MSRTC-MH15-NSKSTP",
      "name": "Satpur MIDC Bus Stand",
      "nameMr": "सातपूर एमआयडीसी बस स्थानक",
      "nameHi": "सातपुर एमआईडीसी बस स्टैंड",
      "village": "Satpur",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0022,
      "longitude": 73.7374,
      "landmark": "Satpur Industrial Nice Area",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "TRB-BS",
      "qrCode": "MSRTC-MH15-TRBBS",
      "name": "Trimbakeshwar Bus Stand",
      "nameMr": "त्र्यंबकेश्वर बस स्थानक",
      "nameHi": "त्र्यंबकेश्वर बस स्टैंड",
      "village": "Trimbakeshwar",
      "taluka": "Trimbakeshwar",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9365,
      "longitude": 73.5325,
      "landmark": "Near Shri Trimbakeshwar Jyotirlinga Temple",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "ANJ-PH",
      "qrCode": "MSRTC-MH15-ANJPH",
      "name": "Anjaneri Phata",
      "nameMr": "अंजनेरी फाटा",
      "nameHi": "अंजनेरी फाटा",
      "village": "Anjaneri",
      "taluka": "Trimbakeshwar",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9482,
      "longitude": 73.5785,
      "landmark": "Anjaneri Hill Fort & Engineering Campus",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NDR-NK",
      "qrCode": "MSRTC-MH15-NDRNK",
      "name": "Nandur Naka",
      "nameMr": "नांदूर नाका",
      "nameHi": "नांदूर नाका",
      "village": "Nandur",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.9971,
      "longitude": 73.8406,
      "landmark": "Nandur Naka Signal",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "ODH-PH",
      "qrCode": "MSRTC-MH15-ODHPH",
      "name": "Odha Phata",
      "nameMr": "ओढा फाटा",
      "nameHi": "ओढा फाटा",
      "village": "Odha",
      "taluka": "Nashik",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0017,
      "longitude": 73.8813,
      "landmark": "Odha Railway Phata",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "CND-BS",
      "qrCode": "MSRTC-MH15-CNDBS",
      "name": "Chandori Bus Stand",
      "nameMr": "चांदोरी बस स्थानक",
      "nameHi": "चांदोरी बस स्टैंड",
      "village": "Chandori",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0244,
      "longitude": 73.9957,
      "landmark": "Godavari Ghat Road",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NPH-BS",
      "qrCode": "MSRTC-MH15-NPHBS",
      "name": "Niphad Bus Stand",
      "nameMr": "निफाड बस स्थानक",
      "nameHi": "निफाड बस स्टैंड",
      "village": "Niphad",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0823,
      "longitude": 74.1088,
      "landmark": "Niphad Tehsil Court",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "VNC-PH",
      "qrCode": "MSRTC-MH15-VNCPH",
      "name": "Vinchur Phata Junction",
      "nameMr": "विंचूर फाटा चौक",
      "nameHi": "विंचूर फाटा चौक",
      "village": "Vinchur",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.1085,
      "longitude": 74.2215,
      "landmark": "Key Junction for Lasalgaon & Yeola Split",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "VNC-BS",
      "qrCode": "MSRTC-MH15-VNCBS",
      "name": "Vinchur Bus Stand",
      "nameMr": "विंचूर बस स्थानक",
      "nameHi": "विंचूर बस स्टैंड",
      "village": "Vinchur",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.1118,
      "longitude": 74.2283,
      "landmark": "Vinchur Town Market",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "LSG-BS",
      "qrCode": "MSRTC-MH15-LSGBS",
      "name": "Lasalgaon Bus Stand",
      "nameMr": "लासलगाव बस स्थानक",
      "nameHi": "लासलगांव बस स्टैंड",
      "village": "Lasalgaon",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.1482,
      "longitude": 74.2285,
      "landmark": "Asia's Largest Onion Market APMC",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "KOT-PH",
      "qrCode": "MSRTC-MH15-KOTPH",
      "name": "Kotamgaon Phata",
      "nameMr": "कोमटगाव फाटा",
      "nameHi": "कोमटगाव फाटा",
      "village": "Kotamgaon",
      "taluka": "Yeola",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0546,
      "longitude": 74.3607,
      "landmark": "Jagdamba Temple Highway Phata",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "MKH-PH",
      "qrCode": "MSRTC-MH15-MKHPH",
      "name": "Mukhed Phata",
      "nameMr": "मुखेड फाटा",
      "nameHi": "मुखेड फाटा",
      "village": "Mukhed",
      "taluka": "Yeola",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0512,
      "longitude": 74.4098,
      "landmark": "Mukhed Village Junction",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "YEO-BS",
      "qrCode": "MSRTC-MH15-YEOBS",
      "name": "Yeola Bus Stand",
      "nameMr": "येवला बस स्थानक",
      "nameHi": "येवला बस स्टैंड",
      "village": "Yeola",
      "taluka": "Yeola",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0424,
      "longitude": 74.4891,
      "landmark": "Paithani Saree Capital Depot",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "MNM-BS",
      "qrCode": "MSRTC-MH15-MNMBS",
      "name": "Manmad Bus Stand",
      "nameMr": "मनमाड बस स्थानक",
      "nameHi": "मनमाड बस स्टैंड",
      "village": "Manmad",
      "taluka": "Nandgaon",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.2525,
      "longitude": 74.4385,
      "landmark": "Manmad Central Railway Junction",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "MLG-BS",
      "qrCode": "MSRTC-MH15-MLGBS",
      "name": "Malegaon Central Bus Stand",
      "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
      "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
      "village": "Malegaon",
      "taluka": "Malegaon",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.5535,
      "longitude": 74.5285,
      "landmark": "Mausam Bridge & NH-53 Junction",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "KPG-BS",
      "qrCode": "MSRTC-MH15-KPGBS",
      "name": "Kopargaon Bus Stand",
      "nameMr": "कोपरगाव बस स्थानक",
      "nameHi": "कोपरगांव बस स्टैंड",
      "village": "Kopargaon",
      "taluka": "Kopargaon",
      "district": "Ahmednagar",
      "pincode": "422001",
      "latitude": 19.8925,
      "longitude": 74.4785,
      "landmark": "Godavari Bridge Kopargaon",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "SHR-BS",
      "qrCode": "MSRTC-MH15-SHRBS",
      "name": "Shirdi Saibaba Bus Stand",
      "nameMr": "शिर्डी साईबाबा बस स्थानक",
      "nameHi": "शिरडी साईं बाबा बस स्टैंड",
      "village": "Shirdi",
      "taluka": "Rahata",
      "district": "Ahmednagar",
      "pincode": "422001",
      "latitude": 19.7682,
      "longitude": 74.4765,
      "landmark": "Shri Saibaba Samadhi Temple Gate 2",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "SNR-BS",
      "qrCode": "MSRTC-MH15-SNRBS",
      "name": "Sinnar Bus Stand",
      "nameMr": "सिन्नर बस स्थानक",
      "nameHi": "सिन्नर बस स्टैंड",
      "village": "Sinnar",
      "taluka": "Sinnar",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.8495,
      "longitude": 74.0042,
      "landmark": "Gondeshwar Temple Road Sinnar",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "SNG-BS",
      "qrCode": "MSRTC-MH15-SNGBS",
      "name": "Sangamner Bus Stand",
      "nameMr": "संगमनेर बस स्थानक",
      "nameHi": "संगमनेर बस स्टैंड",
      "village": "Sangamner",
      "taluka": "Sangamner",
      "district": "Ahmednagar",
      "pincode": "422001",
      "latitude": 19.5742,
      "longitude": 74.2115,
      "landmark": "Pravara River Bridge & NH-60 Depot",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "ALE-BS",
      "qrCode": "MSRTC-MH15-ALEBS",
      "name": "Alephata Junction",
      "nameMr": "आळेफाटा चौक",
      "nameHi": "आलेफाटा चौक",
      "village": "Alephata",
      "taluka": "Junnar",
      "district": "Pune",
      "pincode": "422001",
      "latitude": 19.1845,
      "longitude": 74.1085,
      "landmark": "Kalyan-Ahmednagar & Nashik-Pune Highway Crossing",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "NRY-BS",
      "qrCode": "MSRTC-MH15-NRYBS",
      "name": "Narayangaon Bus Stand",
      "nameMr": "नारायणगाव बस स्थानक",
      "nameHi": "नारायणगांव बस स्टैंड",
      "village": "Narayangaon",
      "taluka": "Junnar",
      "district": "Pune",
      "pincode": "422001",
      "latitude": 19.1215,
      "longitude": 73.9785,
      "landmark": "Tomato Market & GMRT Giant Telescope Road",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "CHK-BS",
      "qrCode": "MSRTC-MH15-CHKBS",
      "name": "Chakan Chowk",
      "nameMr": "चाकण चौक",
      "nameHi": "चाकण चौक",
      "village": "Chakan",
      "taluka": "Khed",
      "district": "Pune",
      "pincode": "422001",
      "latitude": 18.7585,
      "longitude": 73.8542,
      "landmark": "Chakan Auto MIDC Hub",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "PUN-SHV",
      "qrCode": "MSRTC-MH15-PUNSHV",
      "name": "Pune Shivajinagar Bus Stand",
      "nameMr": "पुणे शिवाजीनगर बस स्थानक",
      "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
      "village": "Pune",
      "taluka": "Haveli",
      "district": "Pune",
      "pincode": "422001",
      "latitude": 18.5315,
      "longitude": 73.8512,
      "landmark": "Shivajinagar Metro & Railway Hub",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "PUN-SWG",
      "qrCode": "MSRTC-MH15-PUNSWG",
      "name": "Pune Swargate Bus Stand",
      "nameMr": "पुणे स्वारगेट बस स्थानक",
      "nameHi": "पुणे स्वारगेट बस स्टैंड",
      "village": "Pune",
      "taluka": "Haveli",
      "district": "Pune",
      "pincode": "422001",
      "latitude": 18.5015,
      "longitude": 73.8585,
      "landmark": "Swargate Multi-Modal Transit Terminal",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "OZR-BS",
      "qrCode": "MSRTC-MH15-OZRBS",
      "name": "Ojhar HAL Mig Bus Stand",
      "nameMr": "ओझर मिग बस स्थानक",
      "nameHi": "ओझर मिग बस स्टैंड",
      "village": "Ojhar",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.0955,
      "longitude": 73.9525,
      "landmark": "HAL Aircraft Division & Airport Road",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "PMP-BS",
      "qrCode": "MSRTC-MH15-PMPBS",
      "name": "Pimpalgaon Baswant Bus Stand",
      "nameMr": "पिंपळगाव बसवंत बस स्थानक",
      "nameHi": "पिंपलगांव बसवंत बस स्टैंड",
      "village": "Pimpalgaon",
      "taluka": "Niphad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.1742,
      "longitude": 74.0415,
      "landmark": "NH-60 Agro Toll Plaza",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "CHW-BS",
      "qrCode": "MSRTC-MH15-CHWBS",
      "name": "Chandwad Bus Stand",
      "nameMr": "चांदवड बस स्थानक",
      "nameHi": "चांदवड बस स्टैंड",
      "village": "Chandwad",
      "taluka": "Chandwad",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.3285,
      "longitude": 74.2415,
      "landmark": "Ahilyabai Holkar Fort & NH-60 Ghat",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "DHL-BS",
      "qrCode": "MSRTC-MH15-DHLBS",
      "name": "Dhule Central Bus Stand",
      "nameMr": "धुळे मध्यवर्ती बस स्थानक",
      "nameHi": "धुले सेंट्रल बस स्टैंड",
      "village": "Dhule",
      "taluka": "Dhule",
      "district": "Dhule",
      "pincode": "422001",
      "latitude": 20.9042,
      "longitude": 74.7745,
      "landmark": "Khandesh Gateway Central Depot",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "IGT-BS",
      "qrCode": "MSRTC-MH15-IGTBS",
      "name": "Igatpuri Bus Stand",
      "nameMr": "इगतपुरी बस स्थानक",
      "nameHi": "इगतपुरी बस स्टैंड",
      "village": "Igatpuri",
      "taluka": "Igatpuri",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 19.6985,
      "longitude": 73.5625,
      "landmark": "Thal Ghat Mountain Pass Gateway",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "KSR-BS",
      "qrCode": "MSRTC-MH15-KSRBS",
      "name": "Kasara Railway Phata",
      "nameMr": "कसारा रेल्वे फाटा",
      "nameHi": "कसारा रेलवे फाटा",
      "village": "Kasara",
      "taluka": "Shahapur",
      "district": "Thane",
      "pincode": "422001",
      "latitude": 19.6452,
      "longitude": 73.4815,
      "landmark": "Base of Thal Ghat",
      "isMajor": false,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "KYN-BP",
      "qrCode": "MSRTC-MH15-KYNBP",
      "name": "Kalyan Bypass Junction",
      "nameMr": "कल्याण बायपास चौक",
      "nameHi": "कल्याण बायपास चौक",
      "village": "Kalyan",
      "taluka": "Kalyan",
      "district": "Thane",
      "pincode": "422001",
      "latitude": 19.2452,
      "longitude": 73.1352,
      "landmark": "Bhiwandi-Kalyan Highway Interchange",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "THN-BS",
      "qrCode": "MSRTC-MH15-THNBS",
      "name": "Thane Teen Hath Naka",
      "nameMr": "ठाणे तीन हात नाका",
      "nameHi": "ठाणे तीन हाथ नाका",
      "village": "Thane",
      "taluka": "Thane",
      "district": "Thane",
      "pincode": "422001",
      "latitude": 19.1885,
      "longitude": 72.9642,
      "landmark": "Eastern Express Highway Entry",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "MUM-DDR",
      "qrCode": "MSRTC-MH15-MUMDDR",
      "name": "Mumbai Dadar Asiad Stand",
      "nameMr": "मुंबई दादर एशियाड स्थानक",
      "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
      "village": "Mumbai",
      "taluka": "Mumbai",
      "district": "Mumbai City",
      "pincode": "422001",
      "latitude": 19.0178,
      "longitude": 72.8478,
      "landmark": "Near Swami Narayan Temple & Dadar TT",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "LNV-BS",
      "qrCode": "MSRTC-MH15-LNVBS",
      "name": "Lonavala Bus Stand",
      "nameMr": "लोणावळा बस स्थानक",
      "nameHi": "लोनावला बस स्टैंड",
      "village": "Lonavala",
      "taluka": "Maval",
      "district": "Pune",
      "pincode": "422001",
      "latitude": 18.7552,
      "longitude": 73.4085,
      "landmark": "Western Ghats Hill Station",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "PNV-BS",
      "qrCode": "MSRTC-MH15-PNVBS",
      "name": "Panvel Bus Stand",
      "nameMr": "पनवेल बस स्थानक",
      "nameHi": "पनवेल बस स्टैंड",
      "village": "Panvel",
      "taluka": "Panvel",
      "district": "Raigad",
      "pincode": "422001",
      "latitude": 18.9895,
      "longitude": 73.1185,
      "landmark": "Navi Mumbai Express Gateway",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "VJP-BS",
      "qrCode": "MSRTC-MH15-VJPBS",
      "name": "Vaijapur Bus Stand",
      "nameMr": "वैजापूर बस स्थानक",
      "nameHi": "वैजापुर बस स्टैंड",
      "village": "Vaijapur",
      "taluka": "Vaijapur",
      "district": "Chhatrapati Sambhajinagar",
      "pincode": "422001",
      "latitude": 19.9285,
      "longitude": 74.7315,
      "landmark": "Marathwada Highway Border",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "CSN-BS",
      "qrCode": "MSRTC-MH15-CSNBS",
      "name": "Chhatrapati Sambhajinagar Central",
      "nameMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
      "nameHi": "छत्रपती संभाजीनगर सेंट्रल",
      "village": "Chhatrapati",
      "taluka": "Aurangabad",
      "district": "Chhatrapati Sambhajinagar",
      "pincode": "422001",
      "latitude": 19.8762,
      "longitude": 75.3245,
      "landmark": "Central Bus Stand (CBS Aurangabad)",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "DND-BS",
      "qrCode": "MSRTC-MH15-DNDBS",
      "name": "Dindori Bus Stand",
      "nameMr": "दिंडोरी बस स्थानक",
      "nameHi": "दिंडोरी बस स्टैंड",
      "village": "Dindori",
      "taluka": "Dindori",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.2075,
      "longitude": 73.8348,
      "landmark": "Dindori Market Yard",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    },
    {
      "id": "SPT-GD",
      "qrCode": "MSRTC-MH15-SPTGD",
      "name": "Saptashrungi Gad (Vani)",
      "nameMr": "सप्तशृंगी गड (वणी)",
      "nameHi": "सप्तश्रृंगी गढ़ (वणी)",
      "village": "Saptashrungi",
      "taluka": "Kalwan",
      "district": "Nashik",
      "pincode": "422001",
      "latitude": 20.3915,
      "longitude": 73.9052,
      "landmark": "Shri Saptashrungi Nivasini Devi Temple",
      "isMajor": true,
      "photo": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80",
      "facilities": [
        {
          "name": "MSRTC PIS Display & Announcement",
          "available": true
        },
        {
          "name": "Covered Passenger Shed",
          "available": true
        },
        {
          "name": "Drinking Water (RO)",
          "available": true
        },
        {
          "name": "Restrooms & Canteen",
          "available": true
        },
        {
          "name": "Ticket & Pass Counters",
          "available": true
        }
      ],
      "emergencyContacts": [
        {
          "label": "Depot Manager",
          "number": "0253-2578241"
        },
        {
          "label": "MSRTC Helpline",
          "number": "1800-22-1250"
        },
        {
          "label": "Police Control",
          "number": "112"
        }
      ]
    }
  ],
  "routes": [
    {
      "id": "R-NSK-YEO",
      "routeNumber": "120",
      "name": "Nashik CBS - Yeola Paithani City",
      "nameMr": "नाशिक सीबीएस - येवला पैठणी शहर",
      "nameHi": "नाशिक सीबीएस - येवला पैठनी शहर",
      "category": "rural",
      "categoryLabel": "MSRTC Eastern Silk Corridor",
      "categoryLabelMr": "पूर्व रेशीम महामार्ग",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Dwarka Circle, Nandur Naka, Odha Phata, Chandori Bus Stand",
      "viaMr": "द्वारका चौक, नांदूर नाका, ओढा फाटा, चांदोरी बस स्थानक",
      "totalDistanceKm": 84.5,
      "duration": "2 hrs",
      "frequency": "Every 20 mins",
      "fareRange": "₹95 - ₹160",
      "busTypes": [
        "MSRTC Lal Pari Ordinary",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 16
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 24
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 32
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 40
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 48
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 56
        },
        {
          "id": "KOT-PH",
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "lat": 20.0546,
          "lng": 74.3607,
          "roadIndex": 64
        },
        {
          "id": "MKH-PH",
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "lat": 20.0512,
          "lng": 74.4098,
          "roadIndex": 72
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "R-NSK-YEO-R",
      "routeNumber": "120R",
      "name": "Yeola Bus Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "येवला बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "येवला बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "rural",
      "categoryLabel": "MSRTC Eastern Silk Corridor",
      "categoryLabelMr": "पूर्व रेशीम महामार्ग",
      "origin": "Yeola Bus Stand",
      "originMr": "येवला बस स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Mukhed Phata, Kotamgaon Phata, Vinchur Bus Stand, Vinchur Phata Junction",
      "viaMr": "मुखेड फाटा, कोमटगाव फाटा, विंचूर बस स्थानक, विंचूर फाटा चौक",
      "totalDistanceKm": 84.5,
      "duration": "2 hrs",
      "frequency": "Every 20 mins",
      "fareRange": "₹95 - ₹160",
      "busTypes": [
        "MSRTC Lal Pari Ordinary",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 0
        },
        {
          "id": "MKH-PH",
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "lat": 20.0512,
          "lng": 74.4098,
          "roadIndex": 8
        },
        {
          "id": "KOT-PH",
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "lat": 20.0546,
          "lng": 74.3607,
          "roadIndex": 16
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 24
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 32
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 40
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 48
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 56
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 64
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 72
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "R-NSK-LSG",
      "routeNumber": "122",
      "name": "Nashik CBS - Lasalgaon Onion Capital",
      "nameMr": "नाशिक सीबीएस - लासलगाव कांदा नगरी",
      "nameHi": "नाशिक सीबीएस - लासलगांव प्याज मंडी",
      "category": "rural",
      "categoryLabel": "MSRTC Agro Market Line",
      "categoryLabelMr": "कृषी बाजार महामार्ग",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Lasalgaon Bus Stand",
      "destinationMr": "लासलगाव बस स्थानक",
      "via": "Dwarka Circle, Nandur Naka, Odha Phata, Chandori Bus Stand",
      "viaMr": "द्वारका चौक, नांदूर नाका, ओढा फाटा, चांदोरी बस स्थानक",
      "totalDistanceKm": 62.0,
      "duration": "1 hr 30 mins",
      "frequency": "Every 20 mins",
      "fareRange": "₹75 - ₹130",
      "busTypes": [
        "MSRTC Ordinary",
        "Semi-Luxury"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 16
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 24
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 32
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 40
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 48
        },
        {
          "id": "LSG-BS",
          "name": "Lasalgaon Bus Stand",
          "nameMr": "लासलगाव बस स्थानक",
          "nameHi": "लासलगांव बस स्टैंड",
          "lat": 20.1482,
          "lng": 74.2285,
          "roadIndex": 56
        }
      ]
    },
    {
      "id": "R-NSK-LSG-R",
      "routeNumber": "122R",
      "name": "Lasalgaon Bus Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "लासलगाव बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "लासलगांव बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "rural",
      "categoryLabel": "MSRTC Agro Market Line",
      "categoryLabelMr": "कृषी बाजार महामार्ग",
      "origin": "Lasalgaon Bus Stand",
      "originMr": "लासलगाव बस स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Vinchur Phata Junction, Niphad Bus Stand, Chandori Bus Stand, Odha Phata",
      "viaMr": "विंचूर फाटा चौक, निफाड बस स्थानक, चांदोरी बस स्थानक, ओढा फाटा",
      "totalDistanceKm": 62.0,
      "duration": "1 hr 30 mins",
      "frequency": "Every 20 mins",
      "fareRange": "₹75 - ₹130",
      "busTypes": [
        "MSRTC Ordinary",
        "Semi-Luxury"
      ],
      "stops": [
        {
          "id": "LSG-BS",
          "name": "Lasalgaon Bus Stand",
          "nameMr": "लासलगाव बस स्थानक",
          "nameHi": "लासलगांव बस स्टैंड",
          "lat": 20.1482,
          "lng": 74.2285,
          "roadIndex": 0
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 8
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 16
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 24
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 32
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 40
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 48
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 56
        }
      ]
    },
    {
      "id": "R-MLG-KPG",
      "routeNumber": "124",
      "name": "Malegaon Central - Kopargaon via Yeola",
      "nameMr": "मालेगाव मध्यवर्ती - कोपरगाव (येवला मार्गे)",
      "nameHi": "मालेगांव सेंट्रल - कोपरगांव (येवला द्वारा)",
      "category": "rural",
      "categoryLabel": "North-South Inter-District Highway",
      "categoryLabelMr": "उत्तर-दक्षिण जिल्हा महामार्ग",
      "origin": "Malegaon Central Bus Stand",
      "originMr": "मालेगाव मध्यवर्ती बस स्थानक",
      "destination": "Kopargaon Bus Stand",
      "destinationMr": "कोपरगाव बस स्थानक",
      "via": "Manmad Bus Stand, Yeola Bus Stand",
      "viaMr": "मनमाड बस स्थानक, येवला बस स्थानक",
      "totalDistanceKm": 78.0,
      "duration": "1 hr 50 mins",
      "frequency": "Every 30 mins",
      "fareRange": "₹85 - ₹150",
      "busTypes": [
        "MSRTC Lal Pari",
        "Ordinary"
      ],
      "stops": [
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 0
        },
        {
          "id": "MNM-BS",
          "name": "Manmad Bus Stand",
          "nameMr": "मनमाड बस स्थानक",
          "nameHi": "मनमाड बस स्टैंड",
          "lat": 20.2525,
          "lng": 74.4385,
          "roadIndex": 8
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 16
        },
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 24
        }
      ]
    },
    {
      "id": "R-MLG-KPG-R",
      "routeNumber": "124R",
      "name": "Kopargaon Bus Stand - Malegaon Central Bus Stand",
      "nameMr": "कोपरगाव बस स्थानक - मालेगाव मध्यवर्ती बस स्थानक",
      "nameHi": "कोपरगांव बस स्टैंड - मालेगांव सेंट्रल बस स्टैंड",
      "category": "rural",
      "categoryLabel": "North-South Inter-District Highway",
      "categoryLabelMr": "उत्तर-दक्षिण जिल्हा महामार्ग",
      "origin": "Kopargaon Bus Stand",
      "originMr": "कोपरगाव बस स्थानक",
      "destination": "Malegaon Central Bus Stand",
      "destinationMr": "मालेगाव मध्यवर्ती बस स्थानक",
      "via": "Yeola Bus Stand, Manmad Bus Stand",
      "viaMr": "येवला बस स्थानक, मनमाड बस स्थानक",
      "totalDistanceKm": 78.0,
      "duration": "1 hr 50 mins",
      "frequency": "Every 30 mins",
      "fareRange": "₹85 - ₹150",
      "busTypes": [
        "MSRTC Lal Pari",
        "Ordinary"
      ],
      "stops": [
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 0
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 8
        },
        {
          "id": "MNM-BS",
          "name": "Manmad Bus Stand",
          "nameMr": "मनमाड बस स्थानक",
          "nameHi": "मनमाड बस स्टैंड",
          "lat": 20.2525,
          "lng": 74.4385,
          "roadIndex": 16
        },
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 24
        }
      ]
    },
    {
      "id": "R-YEO-BOM",
      "routeNumber": "126",
      "name": "Yeola - Mumbai Dadar via Nashik",
      "nameMr": "येवला - मुंबई दादर (नाशिक मार्गे)",
      "nameHi": "येवला - मुंबई दादर (नाशिक द्वारा)",
      "category": "intercity",
      "categoryLabel": "Super-Express Long Distance",
      "categoryLabelMr": "सुपर एक्सप्रेस लांब पल्ला",
      "origin": "Yeola Bus Stand",
      "originMr": "येवला बस स्थानक",
      "destination": "Mumbai Dadar Asiad Stand",
      "destinationMr": "मुंबई दादर एशियाड स्थानक",
      "via": "Vinchur Bus Stand, Niphad Bus Stand, Dwarka Circle, Nashik CBS (Thakkar Bazar)",
      "viaMr": "विंचूर बस स्थानक, निफाड बस स्थानक, द्वारका चौक, नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "totalDistanceKm": 245.0,
      "duration": "5 hrs 30 mins",
      "frequency": "Every 45 mins",
      "fareRange": "₹310 - ₹540",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 0
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 8
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 16
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 40
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 48
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 56
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 64
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 72
        },
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "R-YEO-BOM-R",
      "routeNumber": "126R",
      "name": "Mumbai Dadar Asiad Stand - Yeola Bus Stand",
      "nameMr": "मुंबई दादर एशियाड स्थानक - येवला बस स्थानक",
      "nameHi": "मुंबई दादर एशियाड बस स्टैंड - येवला बस स्टैंड",
      "category": "intercity",
      "categoryLabel": "Super-Express Long Distance",
      "categoryLabelMr": "सुपर एक्सप्रेस लांब पल्ला",
      "origin": "Mumbai Dadar Asiad Stand",
      "originMr": "मुंबई दादर एशियाड स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "via": "Thane Teen Hath Naka, Kalyan Bypass Junction, Kasara Railway Phata, Igatpuri Bus Stand",
      "viaMr": "ठाणे तीन हात नाका, कल्याण बायपास चौक, कसारा रेल्वे फाटा, इगतपुरी बस स्थानक",
      "totalDistanceKm": 245.0,
      "duration": "5 hrs 30 mins",
      "frequency": "Every 45 mins",
      "fareRange": "₹310 - ₹540",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 0
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 8
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 16
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 24
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 32
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 40
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 48
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 56
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 64
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 72
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "R-NSK-PUN",
      "routeNumber": "128",
      "name": "Nashik CBS - Pune Shivajinagar",
      "nameMr": "नाशिक सीबीएस - पुणे शिवाजीनगर",
      "nameHi": "नाशिक सीबीएस - पुणे शिवाजीनगर",
      "category": "intercity",
      "categoryLabel": "NH-60 Intercity Highway",
      "categoryLabelMr": "राष्ट्रीय महामार्ग ६० इंटरसिटी",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Pune Shivajinagar Bus Stand",
      "destinationMr": "पुणे शिवाजीनगर बस स्थानक",
      "via": "Dwarka Circle, Nashik Road Station, Sinnar Bus Stand, Sangamner Bus Stand",
      "viaMr": "द्वारका चौक, नाशिक रोड रेल्वे स्थानक, सिन्नर बस स्थानक, संगमनेर बस स्थानक",
      "totalDistanceKm": 210.0,
      "duration": "4 hrs 30 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹280 - ₹490",
      "busTypes": [
        "Shivshahi AC",
        "MSRTC Ordinary Express"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 24
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 32
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 40
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 48
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 56
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 64
        }
      ]
    },
    {
      "id": "R-NSK-PUN-R",
      "routeNumber": "128R",
      "name": "Pune Shivajinagar Bus Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "पुणे शिवाजीनगर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "पुणे शिवाजीनगर बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "intercity",
      "categoryLabel": "NH-60 Intercity Highway",
      "categoryLabelMr": "राष्ट्रीय महामार्ग ६० इंटरसिटी",
      "origin": "Pune Shivajinagar Bus Stand",
      "originMr": "पुणे शिवाजीनगर बस स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Chakan Chowk, Narayangaon Bus Stand, Alephata Junction, Sangamner Bus Stand",
      "viaMr": "चाकण चौक, नारायणगाव बस स्थानक, आळेफाटा चौक, संगमनेर बस स्थानक",
      "totalDistanceKm": 210.0,
      "duration": "4 hrs 30 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹280 - ₹490",
      "busTypes": [
        "Shivshahi AC",
        "MSRTC Ordinary Express"
      ],
      "stops": [
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 0
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 8
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 16
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 24
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 32
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 40
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 48
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 56
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 64
        }
      ]
    },
    {
      "id": "R-NSK-DHL",
      "routeNumber": "130",
      "name": "Nashik CBS - Dhule Central",
      "nameMr": "नाशिक सीबीएस - धुळे मध्यवर्ती",
      "nameHi": "नाशिक सीबीएस - धुले सेंट्रल",
      "category": "intercity",
      "categoryLabel": "Khandesh Expressway",
      "categoryLabelMr": "खानदेश एक्सप्रेसवे",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Dhule Central Bus Stand",
      "destinationMr": "धुळे मध्यवर्ती बस स्थानक",
      "via": "Ojhar HAL Mig Bus Stand, Pimpalgaon Baswant Bus Stand, Chandwad Bus Stand, Malegaon Central Bus Stand",
      "viaMr": "ओझर मिग बस स्थानक, पिंपळगाव बसवंत बस स्थानक, चांदवड बस स्थानक, मालेगाव मध्यवर्ती बस स्थानक",
      "totalDistanceKm": 155.0,
      "duration": "3 hrs 15 mins",
      "frequency": "Every 20 mins",
      "fareRange": "₹185 - ₹340",
      "busTypes": [
        "Shivshahi AC",
        "MSRTC Lal Pari"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "OZR-BS",
          "name": "Ojhar HAL Mig Bus Stand",
          "nameMr": "ओझर मिग बस स्थानक",
          "nameHi": "ओझर मिग बस स्टैंड",
          "lat": 20.0955,
          "lng": 73.9525,
          "roadIndex": 8
        },
        {
          "id": "PMP-BS",
          "name": "Pimpalgaon Baswant Bus Stand",
          "nameMr": "पिंपळगाव बसवंत बस स्थानक",
          "nameHi": "पिंपलगांव बसवंत बस स्टैंड",
          "lat": 20.1742,
          "lng": 74.0415,
          "roadIndex": 16
        },
        {
          "id": "CHW-BS",
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्टैंड",
          "lat": 20.3285,
          "lng": 74.2415,
          "roadIndex": 24
        },
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 32
        },
        {
          "id": "DHL-BS",
          "name": "Dhule Central Bus Stand",
          "nameMr": "धुळे मध्यवर्ती बस स्थानक",
          "nameHi": "धुले सेंट्रल बस स्टैंड",
          "lat": 20.9042,
          "lng": 74.7745,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "R-NSK-DHL-R",
      "routeNumber": "130R",
      "name": "Dhule Central Bus Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "धुळे मध्यवर्ती बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "धुले सेंट्रल बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "intercity",
      "categoryLabel": "Khandesh Expressway",
      "categoryLabelMr": "खानदेश एक्सप्रेसवे",
      "origin": "Dhule Central Bus Stand",
      "originMr": "धुळे मध्यवर्ती बस स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Malegaon Central Bus Stand, Chandwad Bus Stand, Pimpalgaon Baswant Bus Stand, Ojhar HAL Mig Bus Stand",
      "viaMr": "मालेगाव मध्यवर्ती बस स्थानक, चांदवड बस स्थानक, पिंपळगाव बसवंत बस स्थानक, ओझर मिग बस स्थानक",
      "totalDistanceKm": 155.0,
      "duration": "3 hrs 15 mins",
      "frequency": "Every 20 mins",
      "fareRange": "₹185 - ₹340",
      "busTypes": [
        "Shivshahi AC",
        "MSRTC Lal Pari"
      ],
      "stops": [
        {
          "id": "DHL-BS",
          "name": "Dhule Central Bus Stand",
          "nameMr": "धुळे मध्यवर्ती बस स्थानक",
          "nameHi": "धुले सेंट्रल बस स्टैंड",
          "lat": 20.9042,
          "lng": 74.7745,
          "roadIndex": 0
        },
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 8
        },
        {
          "id": "CHW-BS",
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्टैंड",
          "lat": 20.3285,
          "lng": 74.2415,
          "roadIndex": 16
        },
        {
          "id": "PMP-BS",
          "name": "Pimpalgaon Baswant Bus Stand",
          "nameMr": "पिंपळगाव बसवंत बस स्थानक",
          "nameHi": "पिंपलगांव बसवंत बस स्टैंड",
          "lat": 20.1742,
          "lng": 74.0415,
          "roadIndex": 24
        },
        {
          "id": "OZR-BS",
          "name": "Ojhar HAL Mig Bus Stand",
          "nameMr": "ओझर मिग बस स्थानक",
          "nameHi": "ओझर मिग बस स्टैंड",
          "lat": 20.0955,
          "lng": 73.9525,
          "roadIndex": 32
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "R-PUN-BOM",
      "routeNumber": "132",
      "name": "Pune Swargate - Mumbai Dadar",
      "nameMr": "पुणे स्वारगेट - मुंबई दादर",
      "nameHi": "पुणे स्वारगेट - मुंबई दादर",
      "category": "intercity",
      "categoryLabel": "Mumbai-Pune Expressway Line",
      "categoryLabelMr": "द्रुतगती महामार्ग सेवा",
      "origin": "Pune Swargate Bus Stand",
      "originMr": "पुणे स्वारगेट बस स्थानक",
      "destination": "Mumbai Dadar Asiad Stand",
      "destinationMr": "मुंबई दादर एशियाड स्थानक",
      "via": "Pune Shivajinagar Bus Stand, Chakan Chowk, Lonavala Bus Stand, Panvel Bus Stand",
      "viaMr": "पुणे शिवाजीनगर बस स्थानक, चाकण चौक, लोणावळा बस स्थानक, पनवेल बस स्थानक",
      "totalDistanceKm": 152.0,
      "duration": "3 hrs 30 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹260 - ₹480",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Semi-Luxury"
      ],
      "stops": [
        {
          "id": "PUN-SWG",
          "name": "Pune Swargate Bus Stand",
          "nameMr": "पुणे स्वारगेट बस स्थानक",
          "nameHi": "पुणे स्वारगेट बस स्टैंड",
          "lat": 18.5015,
          "lng": 73.8585,
          "roadIndex": 0
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 8
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 16
        },
        {
          "id": "LNV-BS",
          "name": "Lonavala Bus Stand",
          "nameMr": "लोणावळा बस स्थानक",
          "nameHi": "लोनावला बस स्टैंड",
          "lat": 18.7552,
          "lng": 73.4085,
          "roadIndex": 24
        },
        {
          "id": "PNV-BS",
          "name": "Panvel Bus Stand",
          "nameMr": "पनवेल बस स्थानक",
          "nameHi": "पनवेल बस स्टैंड",
          "lat": 18.9895,
          "lng": 73.1185,
          "roadIndex": 32
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 40
        },
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "R-PUN-BOM-R",
      "routeNumber": "132R",
      "name": "Mumbai Dadar Asiad Stand - Pune Swargate Bus Stand",
      "nameMr": "मुंबई दादर एशियाड स्थानक - पुणे स्वारगेट बस स्थानक",
      "nameHi": "मुंबई दादर एशियाड बस स्टैंड - पुणे स्वारगेट बस स्टैंड",
      "category": "intercity",
      "categoryLabel": "Mumbai-Pune Expressway Line",
      "categoryLabelMr": "द्रुतगती महामार्ग सेवा",
      "origin": "Mumbai Dadar Asiad Stand",
      "originMr": "मुंबई दादर एशियाड स्थानक",
      "destination": "Pune Swargate Bus Stand",
      "destinationMr": "पुणे स्वारगेट बस स्थानक",
      "via": "Thane Teen Hath Naka, Panvel Bus Stand, Lonavala Bus Stand, Chakan Chowk",
      "viaMr": "ठाणे तीन हात नाका, पनवेल बस स्थानक, लोणावळा बस स्थानक, चाकण चौक",
      "totalDistanceKm": 152.0,
      "duration": "3 hrs 30 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹260 - ₹480",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Semi-Luxury"
      ],
      "stops": [
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 0
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 8
        },
        {
          "id": "PNV-BS",
          "name": "Panvel Bus Stand",
          "nameMr": "पनवेल बस स्थानक",
          "nameHi": "पनवेल बस स्टैंड",
          "lat": 18.9895,
          "lng": 73.1185,
          "roadIndex": 16
        },
        {
          "id": "LNV-BS",
          "name": "Lonavala Bus Stand",
          "nameMr": "लोणावळा बस स्थानक",
          "nameHi": "लोनावला बस स्टैंड",
          "lat": 18.7552,
          "lng": 73.4085,
          "roadIndex": 24
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 32
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 40
        },
        {
          "id": "PUN-SWG",
          "name": "Pune Swargate Bus Stand",
          "nameMr": "पुणे स्वारगेट बस स्थानक",
          "nameHi": "पुणे स्वारगेट बस स्टैंड",
          "lat": 18.5015,
          "lng": 73.8585,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "R-NSK-SHR",
      "routeNumber": "134",
      "name": "Nashik CBS - Shirdi Saibaba Temple",
      "nameMr": "नाशिक सीबीएस - शिर्डी साईबाबा मंदिर",
      "nameHi": "नाशिक सीबीएस - शिरडी साईं बाबा मंदिर",
      "category": "pilgrim",
      "categoryLabel": "Holy Shrine Pilgrimage Line",
      "categoryLabelMr": "पवित्र तीर्थक्षेत्र मार्ग",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Shirdi Saibaba Bus Stand",
      "destinationMr": "शिर्डी साईबाबा बस स्थानक",
      "via": "Dwarka Circle, Nashik Road Station, Sinnar Bus Stand",
      "viaMr": "द्वारका चौक, नाशिक रोड रेल्वे स्थानक, सिन्नर बस स्थानक",
      "totalDistanceKm": 88.0,
      "duration": "2 hrs 10 mins",
      "frequency": "Every 20 mins",
      "fareRange": "₹110 - ₹210",
      "busTypes": [
        "Shivshahi AC",
        "Ordinary Express"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 24
        },
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "R-NSK-SHR-R",
      "routeNumber": "134R",
      "name": "Shirdi Saibaba Bus Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "शिर्डी साईबाबा बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "शिरडी साईं बाबा बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "pilgrim",
      "categoryLabel": "Holy Shrine Pilgrimage Line",
      "categoryLabelMr": "पवित्र तीर्थक्षेत्र मार्ग",
      "origin": "Shirdi Saibaba Bus Stand",
      "originMr": "शिर्डी साईबाबा बस स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Sinnar Bus Stand, Nashik Road Station, Dwarka Circle",
      "viaMr": "सिन्नर बस स्थानक, नाशिक रोड रेल्वे स्थानक, द्वारका चौक",
      "totalDistanceKm": 88.0,
      "duration": "2 hrs 10 mins",
      "frequency": "Every 20 mins",
      "fareRange": "₹110 - ₹210",
      "busTypes": [
        "Shivshahi AC",
        "Ordinary Express"
      ],
      "stops": [
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 0
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "R-SHR-PUN",
      "routeNumber": "136",
      "name": "Shirdi Saibaba - Pune Shivajinagar",
      "nameMr": "शिर्डी साईबाबा - पुणे शिवाजीनगर",
      "nameHi": "शिरडी साईं बाबा - पुणे शिवाजीनगर",
      "category": "pilgrim",
      "categoryLabel": "Pilgrim Intercity Connector",
      "categoryLabelMr": "तीर्थक्षेत्र इंटरसिटी कनेक्टर",
      "origin": "Shirdi Saibaba Bus Stand",
      "originMr": "शिर्डी साईबाबा बस स्थानक",
      "destination": "Pune Shivajinagar Bus Stand",
      "destinationMr": "पुणे शिवाजीनगर बस स्थानक",
      "via": "Sangamner Bus Stand, Alephata Junction, Narayangaon Bus Stand, Chakan Chowk",
      "viaMr": "संगमनेर बस स्थानक, आळेफाटा चौक, नारायणगाव बस स्थानक, चाकण चौक",
      "totalDistanceKm": 195.0,
      "duration": "4 hrs 15 mins",
      "frequency": "Every 30 mins",
      "fareRange": "₹260 - ₹460",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 0
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 8
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 16
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 24
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 32
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "R-SHR-PUN-R",
      "routeNumber": "136R",
      "name": "Pune Shivajinagar Bus Stand - Shirdi Saibaba Bus Stand",
      "nameMr": "पुणे शिवाजीनगर बस स्थानक - शिर्डी साईबाबा बस स्थानक",
      "nameHi": "पुणे शिवाजीनगर बस स्टैंड - शिरडी साईं बाबा बस स्टैंड",
      "category": "pilgrim",
      "categoryLabel": "Pilgrim Intercity Connector",
      "categoryLabelMr": "तीर्थक्षेत्र इंटरसिटी कनेक्टर",
      "origin": "Pune Shivajinagar Bus Stand",
      "originMr": "पुणे शिवाजीनगर बस स्थानक",
      "destination": "Shirdi Saibaba Bus Stand",
      "destinationMr": "शिर्डी साईबाबा बस स्थानक",
      "via": "Chakan Chowk, Narayangaon Bus Stand, Alephata Junction, Sangamner Bus Stand",
      "viaMr": "चाकण चौक, नारायणगाव बस स्थानक, आळेफाटा चौक, संगमनेर बस स्थानक",
      "totalDistanceKm": 195.0,
      "duration": "4 hrs 15 mins",
      "frequency": "Every 30 mins",
      "fareRange": "₹260 - ₹460",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 0
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 8
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 16
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 24
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 32
        },
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "R-NSK-BOM",
      "routeNumber": "138",
      "name": "Nashik CBS - Mumbai Dadar Asiad",
      "nameMr": "नाशिक सीबीएस - मुंबई दादर एशियाड",
      "nameHi": "नाशिक सीबीएस - मुंबई दादर एशियाड",
      "category": "intercity",
      "categoryLabel": "NH-48 Western Ghats Trunk",
      "categoryLabelMr": "राष्ट्रीय महामार्ग ४८ ट्रंक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Mumbai Dadar Asiad Stand",
      "destinationMr": "मुंबई दादर एशियाड स्थानक",
      "via": "Mumbai Naka, Igatpuri Bus Stand, Kasara Railway Phata, Kalyan Bypass Junction",
      "viaMr": "मुंबई नाका, इगतपुरी बस स्थानक, कसारा रेल्वे फाटा, कल्याण बायपास चौक",
      "totalDistanceKm": 168.0,
      "duration": "3 hrs 45 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹240 - ₹420",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 8
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 16
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 24
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 32
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 40
        },
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "R-NSK-BOM-R",
      "routeNumber": "138R",
      "name": "Mumbai Dadar Asiad Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "मुंबई दादर एशियाड स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "मुंबई दादर एशियाड बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "intercity",
      "categoryLabel": "NH-48 Western Ghats Trunk",
      "categoryLabelMr": "राष्ट्रीय महामार्ग ४८ ट्रंक",
      "origin": "Mumbai Dadar Asiad Stand",
      "originMr": "मुंबई दादर एशियाड स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Thane Teen Hath Naka, Kalyan Bypass Junction, Kasara Railway Phata, Igatpuri Bus Stand",
      "viaMr": "ठाणे तीन हात नाका, कल्याण बायपास चौक, कसारा रेल्वे फाटा, इगतपुरी बस स्थानक",
      "totalDistanceKm": 168.0,
      "duration": "3 hrs 45 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹240 - ₹420",
      "busTypes": [
        "Shivshahi AC",
        "Asiad Express"
      ],
      "stops": [
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 0
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 8
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 16
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 24
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 32
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 40
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "R-NSK-CSN",
      "routeNumber": "140",
      "name": "Nashik CBS - Chhatrapati Sambhajinagar",
      "nameMr": "नाशिक सीबीएस - छत्रपती संभाजीनगर",
      "nameHi": "नाशिक सीबीएस - छत्रपती संभाजीनगर",
      "category": "intercity",
      "categoryLabel": "Marathwada Highway Express",
      "categoryLabelMr": "मराठवाडा महामार्ग एक्सप्रेस",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Chhatrapati Sambhajinagar Central",
      "destinationMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
      "via": "Dwarka Circle, Niphad Bus Stand, Vinchur Bus Stand, Yeola Bus Stand",
      "viaMr": "द्वारका चौक, निफाड बस स्थानक, विंचूर बस स्थानक, येवला बस स्थानक",
      "totalDistanceKm": 185.0,
      "duration": "4 hrs",
      "frequency": "Every 30 mins",
      "fareRange": "₹230 - ₹410",
      "busTypes": [
        "Shivshahi AC",
        "Ordinary Express"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 16
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 24
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 32
        },
        {
          "id": "VJP-BS",
          "name": "Vaijapur Bus Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापुर बस स्टैंड",
          "lat": 19.9285,
          "lng": 74.7315,
          "roadIndex": 40
        },
        {
          "id": "CSN-BS",
          "name": "Chhatrapati Sambhajinagar Central",
          "nameMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
          "nameHi": "छत्रपती संभाजीनगर सेंट्रल",
          "lat": 19.8762,
          "lng": 75.3245,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "R-NSK-CSN-R",
      "routeNumber": "140R",
      "name": "Chhatrapati Sambhajinagar Central - Nashik CBS (Thakkar Bazar)",
      "nameMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "छत्रपती संभाजीनगर सेंट्रल - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "intercity",
      "categoryLabel": "Marathwada Highway Express",
      "categoryLabelMr": "मराठवाडा महामार्ग एक्सप्रेस",
      "origin": "Chhatrapati Sambhajinagar Central",
      "originMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Vaijapur Bus Stand, Yeola Bus Stand, Vinchur Bus Stand, Niphad Bus Stand",
      "viaMr": "वैजापूर बस स्थानक, येवला बस स्थानक, विंचूर बस स्थानक, निफाड बस स्थानक",
      "totalDistanceKm": 185.0,
      "duration": "4 hrs",
      "frequency": "Every 30 mins",
      "fareRange": "₹230 - ₹410",
      "busTypes": [
        "Shivshahi AC",
        "Ordinary Express"
      ],
      "stops": [
        {
          "id": "CSN-BS",
          "name": "Chhatrapati Sambhajinagar Central",
          "nameMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
          "nameHi": "छत्रपती संभाजीनगर सेंट्रल",
          "lat": 19.8762,
          "lng": 75.3245,
          "roadIndex": 0
        },
        {
          "id": "VJP-BS",
          "name": "Vaijapur Bus Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापुर बस स्टैंड",
          "lat": 19.9285,
          "lng": 74.7315,
          "roadIndex": 8
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 16
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 24
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 32
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 40
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "R-NSK-TRB",
      "routeNumber": "142",
      "name": "Nashik CBS - Trimbakeshwar Jyotirlinga",
      "nameMr": "नाशिक सीबीएस - त्र्यंबकेश्वर ज्योतिर्लिंग",
      "nameHi": "नाशिक सीबीएस - त्र्यंबकेश्वर ज्योतिर्लिंग",
      "category": "pilgrim",
      "categoryLabel": "Pilgrim Heritage Link",
      "categoryLabelMr": "तीर्थक्षेत्र हेरिटेज सेवा",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Trimbakeshwar Bus Stand",
      "destinationMr": "त्र्यंबकेश्वर बस स्थानक",
      "via": "Trimbak Naka, Satpur MIDC Bus Stand, Anjaneri Phata",
      "viaMr": "त्र्यंबक नाका, सातपूर एमआयडीसी बस स्थानक, अंजनेरी फाटा",
      "totalDistanceKm": 29.4,
      "duration": "50 mins",
      "frequency": "Every 12 mins",
      "fareRange": "₹35 - ₹55",
      "busTypes": [
        "Shivshahi",
        "Ordinary"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-TRN",
          "name": "Trimbak Naka",
          "nameMr": "त्र्यंबक नाका",
          "nameHi": "त्र्यंबक नाका",
          "lat": 19.9942,
          "lng": 73.7818,
          "roadIndex": 8
        },
        {
          "id": "NSK-STP",
          "name": "Satpur MIDC Bus Stand",
          "nameMr": "सातपूर एमआयडीसी बस स्थानक",
          "nameHi": "सातपुर एमआईडीसी बस स्टैंड",
          "lat": 20.0022,
          "lng": 73.7374,
          "roadIndex": 16
        },
        {
          "id": "ANJ-PH",
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "lat": 19.9482,
          "lng": 73.5785,
          "roadIndex": 24
        },
        {
          "id": "TRB-BS",
          "name": "Trimbakeshwar Bus Stand",
          "nameMr": "त्र्यंबकेश्वर बस स्थानक",
          "nameHi": "त्र्यंबकेश्वर बस स्टैंड",
          "lat": 19.9365,
          "lng": 73.5325,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "R-NSK-TRB-R",
      "routeNumber": "142R",
      "name": "Trimbakeshwar Bus Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "त्र्यंबकेश्वर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "त्र्यंबकेश्वर बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "pilgrim",
      "categoryLabel": "Pilgrim Heritage Link",
      "categoryLabelMr": "तीर्थक्षेत्र हेरिटेज सेवा",
      "origin": "Trimbakeshwar Bus Stand",
      "originMr": "त्र्यंबकेश्वर बस स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Anjaneri Phata, Satpur MIDC Bus Stand, Trimbak Naka",
      "viaMr": "अंजनेरी फाटा, सातपूर एमआयडीसी बस स्थानक, त्र्यंबक नाका",
      "totalDistanceKm": 29.4,
      "duration": "50 mins",
      "frequency": "Every 12 mins",
      "fareRange": "₹35 - ₹55",
      "busTypes": [
        "Shivshahi",
        "Ordinary"
      ],
      "stops": [
        {
          "id": "TRB-BS",
          "name": "Trimbakeshwar Bus Stand",
          "nameMr": "त्र्यंबकेश्वर बस स्थानक",
          "nameHi": "त्र्यंबकेश्वर बस स्टैंड",
          "lat": 19.9365,
          "lng": 73.5325,
          "roadIndex": 0
        },
        {
          "id": "ANJ-PH",
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "lat": 19.9482,
          "lng": 73.5785,
          "roadIndex": 8
        },
        {
          "id": "NSK-STP",
          "name": "Satpur MIDC Bus Stand",
          "nameMr": "सातपूर एमआयडीसी बस स्थानक",
          "nameHi": "सातपुर एमआईडीसी बस स्टैंड",
          "lat": 20.0022,
          "lng": 73.7374,
          "roadIndex": 16
        },
        {
          "id": "NSK-TRN",
          "name": "Trimbak Naka",
          "nameMr": "त्र्यंबक नाका",
          "nameHi": "त्र्यंबक नाका",
          "lat": 19.9942,
          "lng": 73.7818,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "R-KPG-SHR",
      "routeNumber": "144",
      "name": "Kopargaon Bus Stand - Shirdi Saibaba",
      "nameMr": "कोपरगाव बस स्थानक - शिर्डी साईबाबा",
      "nameHi": "कोपरगांव बस स्टैंड - शिरडी साईं बाबा",
      "category": "pilgrim",
      "categoryLabel": "Pilgrim Rail Shuttle Feeder",
      "categoryLabelMr": "तीर्थक्षेत्र शटल सेवा",
      "origin": "Kopargaon Bus Stand",
      "originMr": "कोपरगाव बस स्थानक",
      "destination": "Shirdi Saibaba Bus Stand",
      "destinationMr": "शिर्डी साईबाबा बस स्थानक",
      "via": "Direct Highway",
      "viaMr": "थेट महामार्ग",
      "totalDistanceKm": 18.5,
      "duration": "30 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹25 - ₹40",
      "busTypes": [
        "Ordinary",
        "Midi Bus"
      ],
      "stops": [
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 0
        },
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 8
        }
      ]
    },
    {
      "id": "R-KPG-SHR-R",
      "routeNumber": "144R",
      "name": "Shirdi Saibaba Bus Stand - Kopargaon Bus Stand",
      "nameMr": "शिर्डी साईबाबा बस स्थानक - कोपरगाव बस स्थानक",
      "nameHi": "शिरडी साईं बाबा बस स्टैंड - कोपरगांव बस स्टैंड",
      "category": "pilgrim",
      "categoryLabel": "Pilgrim Rail Shuttle Feeder",
      "categoryLabelMr": "तीर्थक्षेत्र शटल सेवा",
      "origin": "Shirdi Saibaba Bus Stand",
      "originMr": "शिर्डी साईबाबा बस स्थानक",
      "destination": "Kopargaon Bus Stand",
      "destinationMr": "कोपरगाव बस स्थानक",
      "via": "Direct Highway",
      "viaMr": "थेट महामार्ग",
      "totalDistanceKm": 18.5,
      "duration": "30 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹25 - ₹40",
      "busTypes": [
        "Ordinary",
        "Midi Bus"
      ],
      "stops": [
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 0
        },
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 8
        }
      ]
    },
    {
      "id": "R-NSK-SPT",
      "routeNumber": "146",
      "name": "Nashik CBS - Saptashrungi Gad (Vani)",
      "nameMr": "नाशिक सीबीएस - सप्तशृंगी गड (वणी)",
      "nameHi": "नाशिक सीबीएस - सप्तश्रृंगी गढ़ (वणी)",
      "category": "pilgrim",
      "categoryLabel": "Shaktipeeth Hill Shrine Line",
      "categoryLabelMr": "शक्तीपीठ तीर्थक्षेत्र मार्ग",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Saptashrungi Gad (Vani)",
      "destinationMr": "सप्तशृंगी गड (वणी)",
      "via": "Dindori Bus Stand",
      "viaMr": "दिंडोरी बस स्थानक",
      "totalDistanceKm": 68.0,
      "duration": "1 hr 45 mins",
      "frequency": "Every 30 mins",
      "fareRange": "₹85 - ₹145",
      "busTypes": [
        "MSRTC Lal Pari",
        "Ordinary"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "DND-BS",
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्टैंड",
          "lat": 20.2075,
          "lng": 73.8348,
          "roadIndex": 8
        },
        {
          "id": "SPT-GD",
          "name": "Saptashrungi Gad (Vani)",
          "nameMr": "सप्तशृंगी गड (वणी)",
          "nameHi": "सप्तश्रृंगी गढ़ (वणी)",
          "lat": 20.3915,
          "lng": 73.9052,
          "roadIndex": 16
        }
      ]
    },
    {
      "id": "R-NSK-SPT-R",
      "routeNumber": "146R",
      "name": "Saptashrungi Gad (Vani) - Nashik CBS (Thakkar Bazar)",
      "nameMr": "सप्तशृंगी गड (वणी) - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "सप्तश्रृंगी गढ़ (वणी) - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "pilgrim",
      "categoryLabel": "Shaktipeeth Hill Shrine Line",
      "categoryLabelMr": "शक्तीपीठ तीर्थक्षेत्र मार्ग",
      "origin": "Saptashrungi Gad (Vani)",
      "originMr": "सप्तशृंगी गड (वणी)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dindori Bus Stand",
      "viaMr": "दिंडोरी बस स्थानक",
      "totalDistanceKm": 68.0,
      "duration": "1 hr 45 mins",
      "frequency": "Every 30 mins",
      "fareRange": "₹85 - ₹145",
      "busTypes": [
        "MSRTC Lal Pari",
        "Ordinary"
      ],
      "stops": [
        {
          "id": "SPT-GD",
          "name": "Saptashrungi Gad (Vani)",
          "nameMr": "सप्तशृंगी गड (वणी)",
          "nameHi": "सप्तश्रृंगी गढ़ (वणी)",
          "lat": 20.3915,
          "lng": 73.9052,
          "roadIndex": 0
        },
        {
          "id": "DND-BS",
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्टैंड",
          "lat": 20.2075,
          "lng": 73.8348,
          "roadIndex": 8
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 16
        }
      ]
    },
    {
      "id": "R-NSK-SNR",
      "routeNumber": "148",
      "name": "Nashik CBS - Sinnar Industrial Stand",
      "nameMr": "नाशिक सीबीएस - सिन्नर बस स्थानक",
      "nameHi": "नाशिक सीबीएस - सिन्नर बस स्टैंड",
      "category": "rural",
      "categoryLabel": "Industrial Trunk Feeder",
      "categoryLabelMr": "औद्योगिक मुख्य मार्ग",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Sinnar Bus Stand",
      "destinationMr": "सिन्नर बस स्थानक",
      "via": "Dwarka Circle, Nashik Road Station, Bytco Point",
      "viaMr": "द्वारका चौक, नाशिक रोड रेल्वे स्थानक, बिटको पॉईंट",
      "totalDistanceKm": 31.5,
      "duration": "50 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹35 - ₹60",
      "busTypes": [
        "MSRTC Ordinary",
        "Shivshahi"
      ],
      "stops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "NSK-BYT",
          "name": "Bytco Point",
          "nameMr": "बिटको पॉईंट",
          "nameHi": "बिटको पॉइंट",
          "lat": 19.9575,
          "lng": 73.8318,
          "roadIndex": 24
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "R-NSK-SNR-R",
      "routeNumber": "148R",
      "name": "Sinnar Bus Stand - Nashik CBS (Thakkar Bazar)",
      "nameMr": "सिन्नर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "nameHi": "सिन्नर बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार)",
      "category": "rural",
      "categoryLabel": "Industrial Trunk Feeder",
      "categoryLabelMr": "औद्योगिक मुख्य मार्ग",
      "origin": "Sinnar Bus Stand",
      "originMr": "सिन्नर बस स्थानक",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Bytco Point, Nashik Road Station, Dwarka Circle",
      "viaMr": "बिटको पॉईंट, नाशिक रोड रेल्वे स्थानक, द्वारका चौक",
      "totalDistanceKm": 31.5,
      "duration": "50 mins",
      "frequency": "Every 15 mins",
      "fareRange": "₹35 - ₹60",
      "busTypes": [
        "MSRTC Ordinary",
        "Shivshahi"
      ],
      "stops": [
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 0
        },
        {
          "id": "NSK-BYT",
          "name": "Bytco Point",
          "nameMr": "बिटको पॉईंट",
          "nameHi": "बिटको पॉइंट",
          "lat": 19.9575,
          "lng": 73.8318,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        }
      ]
    }
  ],
  "buses": [
    {
      "id": "BUS-201",
      "number": "MH 15 BT 2001",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-YEO",
      "routeName": "Nashik CBS - Yeola Paithani City",
      "routeNameMr": "नाशिक सीबीएस - येवला पैठणी शहर",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dwarka Circle, Nandur Naka, Odha Phata, Chandori Bus Stand",
      "driverName": "Eknath Shinde",
      "conductorName": "Santosh Jagtap",
      "scheduledTime": "8:11 AM",
      "currentLat": 19.99767,
      "currentLng": 73.85084,
      "roadIndex": 18,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "84%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Nandur Naka",
      "nextStop": "Odha Phata",
      "targetStopId": "ODH-PH",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2001, on route Nashik CBS - Yeola Paithani City, is approaching Odha Phata. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2001, मार्ग नाशिक सीबीएस - येवला पैठणी शहर, लवकरच ओढा फाटा येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2001, मार्ग नाशिक सीबीएस - येवला पैठनी शहर, शीघ्र ही ओढा फाटा पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "8:11 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "8:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "8:39 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 16
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "8:53 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 24
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "time": "9:07 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 32
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "9:21 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 40
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "time": "9:35 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 48
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "time": "9:49 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 56
        },
        {
          "id": "KOT-PH",
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "10:03 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0546,
          "lng": 74.3607,
          "roadIndex": 64
        },
        {
          "id": "MKH-PH",
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "10:17 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0512,
          "lng": 74.4098,
          "roadIndex": 72
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "10:31 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "BUS-202",
      "number": "MH 15 BT 2002",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-YEO-R",
      "routeName": "Yeola Bus Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "येवला बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Yeola Bus Stand",
      "originMr": "येवला बस स्थानक",
      "via": "Mukhed Phata, Kotamgaon Phata, Vinchur Bus Stand, Vinchur Phata Junction",
      "driverName": "Dilip Pawar",
      "conductorName": "Sachin Deshmukh",
      "scheduledTime": "9:22 AM",
      "currentLat": 20.07077,
      "currentLng": 74.32841,
      "roadIndex": 18,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "83%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Kotamgaon Phata",
      "nextStop": "Vinchur Bus Stand",
      "targetStopId": "VNC-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2002, on route Yeola Bus Stand - Nashik CBS (Thakkar Bazar), is approaching Vinchur Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2002, मार्ग येवला बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच विंचूर बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2002, मार्ग येवला बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही विंचूर बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "9:22 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 0
        },
        {
          "id": "MKH-PH",
          "name": "Mukhed Phata",
          "nameMr": "मुखेड फाटा",
          "nameHi": "मुखेड फाटा",
          "time": "9:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0512,
          "lng": 74.4098,
          "roadIndex": 8
        },
        {
          "id": "KOT-PH",
          "name": "Kotamgaon Phata",
          "nameMr": "कोमटगाव फाटा",
          "nameHi": "कोमटगाव फाटा",
          "time": "9:50 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0546,
          "lng": 74.3607,
          "roadIndex": 16
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "time": "10:04 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 24
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "time": "10:18 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 32
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "10:32 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 40
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "time": "10:46 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 48
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "11:00 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 56
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "11:14 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 64
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "11:28 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 72
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "11:42 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "BUS-203",
      "number": "MH 15 BT 2003",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-LSG",
      "routeName": "Nashik CBS - Lasalgaon Onion Capital",
      "routeNameMr": "नाशिक सीबीएस - लासलगाव कांदा नगरी",
      "destination": "Lasalgaon Bus Stand",
      "destinationMr": "लासलगाव बस स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dwarka Circle, Nandur Naka, Odha Phata, Chandori Bus Stand",
      "driverName": "Kailas Sonawane",
      "conductorName": "Raju Bhalerao",
      "scheduledTime": "10:33 AM",
      "currentLat": 19.99212,
      "currentLng": 73.81417,
      "roadIndex": 10,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "82%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Dwarka Circle",
      "nextStop": "Nandur Naka",
      "targetStopId": "NDR-NK",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2003, on route Nashik CBS - Lasalgaon Onion Capital, is approaching Nandur Naka. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2003, मार्ग नाशिक सीबीएस - लासलगाव कांदा नगरी, लवकरच नांदूर नाका येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2003, मार्ग नाशिक सीबीएस - लासलगांव प्याज मंडी, शीघ्र ही नांदूर नाका पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "10:33 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "10:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "11:01 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 16
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "11:15 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 24
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "time": "11:29 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 32
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "11:43 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 40
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "time": "11:57 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 48
        },
        {
          "id": "LSG-BS",
          "name": "Lasalgaon Bus Stand",
          "nameMr": "लासलगाव बस स्थानक",
          "nameHi": "लासलगांव बस स्टैंड",
          "time": "12:11 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1482,
          "lng": 74.2285,
          "roadIndex": 56
        }
      ]
    },
    {
      "id": "BUS-204",
      "number": "MH 15 BT 2004",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-LSG-R",
      "routeName": "Lasalgaon Bus Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "लासलगाव बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Lasalgaon Bus Stand",
      "originMr": "लासलगाव बस स्थानक",
      "via": "Vinchur Phata Junction, Niphad Bus Stand, Chandori Bus Stand, Odha Phata",
      "driverName": "Vijay Gavit",
      "conductorName": "Nitin Jadhav",
      "scheduledTime": "11:44 AM",
      "currentLat": 20.10036,
      "currentLng": 74.1937,
      "roadIndex": 10,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "81%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Vinchur Phata Junction",
      "nextStop": "Niphad Bus Stand",
      "targetStopId": "NPH-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2004, on route Lasalgaon Bus Stand - Nashik CBS (Thakkar Bazar), is approaching Niphad Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2004, मार्ग लासलगाव बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच निफाड बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2004, मार्ग लासलगांव बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही निफाड बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "LSG-BS",
          "name": "Lasalgaon Bus Stand",
          "nameMr": "लासलगाव बस स्थानक",
          "nameHi": "लासलगांव बस स्टैंड",
          "time": "11:44 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1482,
          "lng": 74.2285,
          "roadIndex": 0
        },
        {
          "id": "VNC-PH",
          "name": "Vinchur Phata Junction",
          "nameMr": "विंचूर फाटा चौक",
          "nameHi": "विंचूर फाटा चौक",
          "time": "11:58 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1085,
          "lng": 74.2215,
          "roadIndex": 8
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "12:12 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 16
        },
        {
          "id": "CND-BS",
          "name": "Chandori Bus Stand",
          "nameMr": "चांदोरी बस स्थानक",
          "nameHi": "चांदोरी बस स्टैंड",
          "time": "12:26 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0244,
          "lng": 73.9957,
          "roadIndex": 24
        },
        {
          "id": "ODH-PH",
          "name": "Odha Phata",
          "nameMr": "ओढा फाटा",
          "nameHi": "ओढा फाटा",
          "time": "12:40 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0017,
          "lng": 73.8813,
          "roadIndex": 32
        },
        {
          "id": "NDR-NK",
          "name": "Nandur Naka",
          "nameMr": "नांदूर नाका",
          "nameHi": "नांदूर नाका",
          "time": "12:54 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9971,
          "lng": 73.8406,
          "roadIndex": 40
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "1:08 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 48
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "1:22 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 56
        }
      ]
    },
    {
      "id": "BUS-205",
      "number": "MH 15 BT 2005",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-MLG-KPG",
      "routeName": "Malegaon Central - Kopargaon via Yeola",
      "routeNameMr": "मालेगाव मध्यवर्ती - कोपरगाव (येवला मार्गे)",
      "destination": "Kopargaon Bus Stand",
      "destinationMr": "कोपरगाव बस स्थानक",
      "origin": "Malegaon Central Bus Stand",
      "originMr": "मालेगाव मध्यवर्ती बस स्थानक",
      "via": "Manmad Bus Stand, Yeola Bus Stand",
      "driverName": "Anil Khairnar",
      "conductorName": "Mahesh Gaikwad",
      "scheduledTime": "7:05 AM",
      "currentLat": 20.47952,
      "currentLng": 74.50174,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "80%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Malegaon Central Bus Stand",
      "nextStop": "Manmad Bus Stand",
      "targetStopId": "MNM-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2005, on route Malegaon Central - Kopargaon via Yeola, is approaching Manmad Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2005, मार्ग मालेगाव मध्यवर्ती - कोपरगाव (येवला मार्गे), लवकरच मनमाड बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2005, मार्ग मालेगांव सेंट्रल - कोपरगांव (येवला द्वारा), शीघ्र ही मनमाड बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "time": "7:05 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 0
        },
        {
          "id": "MNM-BS",
          "name": "Manmad Bus Stand",
          "nameMr": "मनमाड बस स्थानक",
          "nameHi": "मनमाड बस स्टैंड",
          "time": "7:19 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.2525,
          "lng": 74.4385,
          "roadIndex": 8
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "7:33 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 16
        },
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "time": "7:47 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 24
        }
      ]
    },
    {
      "id": "BUS-206",
      "number": "MH 15 BT 2006",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-MLG-KPG-R",
      "routeName": "Kopargaon Bus Stand - Malegaon Central Bus Stand",
      "routeNameMr": "कोपरगाव बस स्थानक - मालेगाव मध्यवर्ती बस स्थानक",
      "destination": "Malegaon Central Bus Stand",
      "destinationMr": "मालेगाव मध्यवर्ती बस स्थानक",
      "origin": "Kopargaon Bus Stand",
      "originMr": "कोपरगाव बस स्थानक",
      "via": "Yeola Bus Stand, Manmad Bus Stand",
      "driverName": "Sunil Chavan",
      "conductorName": "Pravin Shinde",
      "scheduledTime": "8:16 AM",
      "currentLat": 19.92983,
      "currentLng": 74.48327,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "79%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Kopargaon Bus Stand",
      "nextStop": "Yeola Bus Stand",
      "targetStopId": "YEO-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2006, on route Kopargaon Bus Stand - Malegaon Central Bus Stand, is approaching Yeola Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2006, मार्ग कोपरगाव बस स्थानक - मालेगाव मध्यवर्ती बस स्थानक, लवकरच येवला बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2006, मार्ग कोपरगांव बस स्टैंड - मालेगांव सेंट्रल बस स्टैंड, शीघ्र ही येवला बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "time": "8:16 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 0
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "8:30 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 8
        },
        {
          "id": "MNM-BS",
          "name": "Manmad Bus Stand",
          "nameMr": "मनमाड बस स्थानक",
          "nameHi": "मनमाड बस स्टैंड",
          "time": "8:44 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.2525,
          "lng": 74.4385,
          "roadIndex": 16
        },
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "time": "8:58 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 24
        }
      ]
    },
    {
      "id": "BUS-207",
      "number": "MH 15 BT 2007",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-YEO-BOM",
      "routeName": "Yeola - Mumbai Dadar via Nashik",
      "routeNameMr": "येवला - मुंबई दादर (नाशिक मार्गे)",
      "destination": "Mumbai Dadar Asiad Stand",
      "destinationMr": "मुंबई दादर एशियाड स्थानक",
      "origin": "Yeola Bus Stand",
      "originMr": "येवला बस स्थानक",
      "via": "Vinchur Bus Stand, Niphad Bus Stand, Dwarka Circle, Nashik CBS (Thakkar Bazar)",
      "driverName": "Rajendra Borse",
      "conductorName": "Amol Kute",
      "scheduledTime": "9:27 AM",
      "currentLat": 20.06346,
      "currentLng": 74.03167,
      "roadIndex": 18,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "78%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Niphad Bus Stand",
      "nextStop": "Dwarka Circle",
      "targetStopId": "NSK-DWK",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2007, on route Yeola - Mumbai Dadar via Nashik, is approaching Dwarka Circle. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2007, मार्ग येवला - मुंबई दादर (नाशिक मार्गे), लवकरच द्वारका चौक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2007, मार्ग येवला - मुंबई दादर (नाशिक द्वारा), शीघ्र ही द्वारका चौक पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "9:27 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 0
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "time": "9:41 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 8
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "9:55 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 16
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "10:09 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "10:23 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "10:37 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 40
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "time": "10:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 48
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "time": "11:05 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 56
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "time": "11:19 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 64
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "time": "11:33 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 72
        },
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "time": "11:47 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "BUS-208",
      "number": "MH 15 BT 2008",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-YEO-BOM-R",
      "routeName": "Mumbai Dadar Asiad Stand - Yeola Bus Stand",
      "routeNameMr": "मुंबई दादर एशियाड स्थानक - येवला बस स्थानक",
      "destination": "Yeola Bus Stand",
      "destinationMr": "येवला बस स्थानक",
      "origin": "Mumbai Dadar Asiad Stand",
      "originMr": "मुंबई दादर एशियाड स्थानक",
      "via": "Thane Teen Hath Naka, Kalyan Bypass Junction, Kasara Railway Phata, Igatpuri Bus Stand",
      "driverName": "Dattatray Wagh",
      "conductorName": "Yogesh Aher",
      "scheduledTime": "10:38 AM",
      "currentLat": 19.3403,
      "currentLng": 73.22743,
      "roadIndex": 18,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "77%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Kalyan Bypass Junction",
      "nextStop": "Kasara Railway Phata",
      "targetStopId": "KSR-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2008, on route Mumbai Dadar Asiad Stand - Yeola Bus Stand, is approaching Kasara Railway Phata. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2008, मार्ग मुंबई दादर एशियाड स्थानक - येवला बस स्थानक, लवकरच कसारा रेल्वे फाटा येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2008, मार्ग मुंबई दादर एशियाड बस स्टैंड - येवला बस स्टैंड, शीघ्र ही कसारा रेलवे फाटा पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "time": "10:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 0
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "time": "10:52 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 8
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "time": "11:06 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 16
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "time": "11:20 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 24
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "time": "11:34 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 32
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "11:48 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 40
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "12:02 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 48
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "12:16 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 56
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "12:30 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 64
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "time": "12:44 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 72
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "12:58 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 80
        }
      ]
    },
    {
      "id": "BUS-209",
      "number": "MH 15 BT 2009",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-PUN",
      "routeName": "Nashik CBS - Pune Shivajinagar",
      "routeNameMr": "नाशिक सीबीएस - पुणे शिवाजीनगर",
      "destination": "Pune Shivajinagar Bus Stand",
      "destinationMr": "पुणे शिवाजीनगर बस स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dwarka Circle, Nashik Road Station, Sinnar Bus Stand, Sangamner Bus Stand",
      "driverName": "Bapu Pund",
      "conductorName": "Rameshwar Gite",
      "scheduledTime": "11:49 AM",
      "currentLat": 19.92562,
      "currentLng": 73.87537,
      "roadIndex": 18,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "76%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Nashik Road Station",
      "nextStop": "Sinnar Bus Stand",
      "targetStopId": "SNR-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2009, on route Nashik CBS - Pune Shivajinagar, is approaching Sinnar Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2009, मार्ग नाशिक सीबीएस - पुणे शिवाजीनगर, लवकरच सिन्नर बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2009, मार्ग नाशिक सीबीएस - पुणे शिवाजीनगर, शीघ्र ही सिन्नर बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "11:49 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "12:03 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "time": "12:17 PM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "time": "12:31 PM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 24
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "time": "12:45 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 32
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "time": "12:59 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 40
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "time": "1:13 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 48
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "1:27 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 56
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "time": "1:41 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 64
        }
      ]
    },
    {
      "id": "BUS-210",
      "number": "MH 15 BT 2010",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-PUN-R",
      "routeName": "Pune Shivajinagar Bus Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "पुणे शिवाजीनगर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Pune Shivajinagar Bus Stand",
      "originMr": "पुणे शिवाजीनगर बस स्थानक",
      "via": "Chakan Chowk, Narayangaon Bus Stand, Alephata Junction, Sangamner Bus Stand",
      "driverName": "Sanjay Kadam",
      "conductorName": "Dnyaneshwar Sanap",
      "scheduledTime": "7:10 AM",
      "currentLat": 19.13541,
      "currentLng": 74.01189,
      "roadIndex": 18,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "75%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Narayangaon Bus Stand",
      "nextStop": "Alephata Junction",
      "targetStopId": "ALE-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2010, on route Pune Shivajinagar Bus Stand - Nashik CBS (Thakkar Bazar), is approaching Alephata Junction. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2010, मार्ग पुणे शिवाजीनगर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच आळेफाटा चौक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2010, मार्ग पुणे शिवाजीनगर बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही आलेफाटा चौक पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "time": "7:10 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 0
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "7:24 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 8
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "time": "7:38 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 16
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "time": "7:52 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 24
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "time": "8:06 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 32
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "time": "8:20 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 40
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "time": "8:34 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 48
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "8:48 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 56
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "9:02 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 64
        }
      ]
    },
    {
      "id": "BUS-211",
      "number": "MH 15 BT 2011",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-DHL",
      "routeName": "Nashik CBS - Dhule Central",
      "routeNameMr": "नाशिक सीबीएस - धुळे मध्यवर्ती",
      "destination": "Dhule Central Bus Stand",
      "destinationMr": "धुळे मध्यवर्ती बस स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Ojhar HAL Mig Bus Stand, Pimpalgaon Baswant Bus Stand, Chandwad Bus Stand, Malegaon Central Bus Stand",
      "driverName": "Balasaheb Thete",
      "conductorName": "Vikas Bodke",
      "scheduledTime": "8:21 AM",
      "currentLat": 20.11643,
      "currentLng": 73.97364,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "74%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Ojhar HAL Mig Bus Stand",
      "nextStop": "Pimpalgaon Baswant Bus Stand",
      "targetStopId": "PMP-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2011, on route Nashik CBS - Dhule Central, is approaching Pimpalgaon Baswant Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2011, मार्ग नाशिक सीबीएस - धुळे मध्यवर्ती, लवकरच पिंपळगाव बसवंत बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2011, मार्ग नाशिक सीबीएस - धुले सेंट्रल, शीघ्र ही पिंपलगांव बसवंत बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "8:21 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "OZR-BS",
          "name": "Ojhar HAL Mig Bus Stand",
          "nameMr": "ओझर मिग बस स्थानक",
          "nameHi": "ओझर मिग बस स्टैंड",
          "time": "8:35 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0955,
          "lng": 73.9525,
          "roadIndex": 8
        },
        {
          "id": "PMP-BS",
          "name": "Pimpalgaon Baswant Bus Stand",
          "nameMr": "पिंपळगाव बसवंत बस स्थानक",
          "nameHi": "पिंपलगांव बसवंत बस स्टैंड",
          "time": "8:49 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.1742,
          "lng": 74.0415,
          "roadIndex": 16
        },
        {
          "id": "CHW-BS",
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्टैंड",
          "time": "9:03 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3285,
          "lng": 74.2415,
          "roadIndex": 24
        },
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "time": "9:17 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 32
        },
        {
          "id": "DHL-BS",
          "name": "Dhule Central Bus Stand",
          "nameMr": "धुळे मध्यवर्ती बस स्थानक",
          "nameHi": "धुले सेंट्रल बस स्टैंड",
          "time": "9:31 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.9042,
          "lng": 74.7745,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "BUS-212",
      "number": "MH 15 BT 2012",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-DHL-R",
      "routeName": "Dhule Central Bus Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "धुळे मध्यवर्ती बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Dhule Central Bus Stand",
      "originMr": "धुळे मध्यवर्ती बस स्थानक",
      "via": "Malegaon Central Bus Stand, Chandwad Bus Stand, Pimpalgaon Baswant Bus Stand, Ojhar HAL Mig Bus Stand",
      "driverName": "Vilas Gangurde",
      "conductorName": "Hemant Bagul",
      "scheduledTime": "9:32 AM",
      "currentLat": 20.49319,
      "currentLng": 74.45993,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "73%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Malegaon Central Bus Stand",
      "nextStop": "Chandwad Bus Stand",
      "targetStopId": "CHW-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2012, on route Dhule Central Bus Stand - Nashik CBS (Thakkar Bazar), is approaching Chandwad Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2012, मार्ग धुळे मध्यवर्ती बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच चांदवड बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2012, मार्ग धुले सेंट्रल बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही चांदवड बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "DHL-BS",
          "name": "Dhule Central Bus Stand",
          "nameMr": "धुळे मध्यवर्ती बस स्थानक",
          "nameHi": "धुले सेंट्रल बस स्टैंड",
          "time": "9:32 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.9042,
          "lng": 74.7745,
          "roadIndex": 0
        },
        {
          "id": "MLG-BS",
          "name": "Malegaon Central Bus Stand",
          "nameMr": "मालेगाव मध्यवर्ती बस स्थानक",
          "nameHi": "मालेगांव सेंट्रल बस स्टैंड",
          "time": "9:46 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.5535,
          "lng": 74.5285,
          "roadIndex": 8
        },
        {
          "id": "CHW-BS",
          "name": "Chandwad Bus Stand",
          "nameMr": "चांदवड बस स्थानक",
          "nameHi": "चांदवड बस स्टैंड",
          "time": "10:00 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.3285,
          "lng": 74.2415,
          "roadIndex": 16
        },
        {
          "id": "PMP-BS",
          "name": "Pimpalgaon Baswant Bus Stand",
          "nameMr": "पिंपळगाव बसवंत बस स्थानक",
          "nameHi": "पिंपलगांव बसवंत बस स्टैंड",
          "time": "10:14 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1742,
          "lng": 74.0415,
          "roadIndex": 24
        },
        {
          "id": "OZR-BS",
          "name": "Ojhar HAL Mig Bus Stand",
          "nameMr": "ओझर मिग बस स्थानक",
          "nameHi": "ओझर मिग बस स्टैंड",
          "time": "10:28 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0955,
          "lng": 73.9525,
          "roadIndex": 32
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "10:42 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "BUS-213",
      "number": "MH 15 BT 2013",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-PUN-BOM",
      "routeName": "Pune Swargate - Mumbai Dadar",
      "routeNameMr": "पुणे स्वारगेट - मुंबई दादर",
      "destination": "Mumbai Dadar Asiad Stand",
      "destinationMr": "मुंबई दादर एशियाड स्थानक",
      "origin": "Pune Swargate Bus Stand",
      "originMr": "पुणे स्वारगेट बस स्थानक",
      "via": "Pune Shivajinagar Bus Stand, Chakan Chowk, Lonavala Bus Stand, Panvel Bus Stand",
      "driverName": "Prakash Darekar",
      "conductorName": "Tushar Shelke",
      "scheduledTime": "10:43 AM",
      "currentLat": 18.58829,
      "currentLng": 73.84874,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "72%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Pune Shivajinagar Bus Stand",
      "nextStop": "Chakan Chowk",
      "targetStopId": "CHK-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2013, on route Pune Swargate - Mumbai Dadar, is approaching Chakan Chowk. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2013, मार्ग पुणे स्वारगेट - मुंबई दादर, लवकरच चाकण चौक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2013, मार्ग पुणे स्वारगेट - मुंबई दादर, शीघ्र ही चाकण चौक पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "PUN-SWG",
          "name": "Pune Swargate Bus Stand",
          "nameMr": "पुणे स्वारगेट बस स्थानक",
          "nameHi": "पुणे स्वारगेट बस स्टैंड",
          "time": "10:43 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5015,
          "lng": 73.8585,
          "roadIndex": 0
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "time": "10:57 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 8
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "11:11 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 16
        },
        {
          "id": "LNV-BS",
          "name": "Lonavala Bus Stand",
          "nameMr": "लोणावळा बस स्थानक",
          "nameHi": "लोनावला बस स्टैंड",
          "time": "11:25 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7552,
          "lng": 73.4085,
          "roadIndex": 24
        },
        {
          "id": "PNV-BS",
          "name": "Panvel Bus Stand",
          "nameMr": "पनवेल बस स्थानक",
          "nameHi": "पनवेल बस स्टैंड",
          "time": "11:39 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.9895,
          "lng": 73.1185,
          "roadIndex": 32
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "time": "11:53 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 40
        },
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "time": "12:07 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "BUS-214",
      "number": "MH 15 BT 2014",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-PUN-BOM-R",
      "routeName": "Mumbai Dadar Asiad Stand - Pune Swargate Bus Stand",
      "routeNameMr": "मुंबई दादर एशियाड स्थानक - पुणे स्वारगेट बस स्थानक",
      "destination": "Pune Swargate Bus Stand",
      "destinationMr": "पुणे स्वारगेट बस स्थानक",
      "origin": "Mumbai Dadar Asiad Stand",
      "originMr": "मुंबई दादर एशियाड स्थानक",
      "via": "Thane Teen Hath Naka, Panvel Bus Stand, Lonavala Bus Stand, Chakan Chowk",
      "driverName": "Pandurang Avhad",
      "conductorName": "Kishor Hire",
      "scheduledTime": "11:04 AM",
      "currentLat": 19.14093,
      "currentLng": 73.00559,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "71%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Thane Teen Hath Naka",
      "nextStop": "Panvel Bus Stand",
      "targetStopId": "PNV-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2014, on route Mumbai Dadar Asiad Stand - Pune Swargate Bus Stand, is approaching Panvel Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2014, मार्ग मुंबई दादर एशियाड स्थानक - पुणे स्वारगेट बस स्थानक, लवकरच पनवेल बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2014, मार्ग मुंबई दादर एशियाड बस स्टैंड - पुणे स्वारगेट बस स्टैंड, शीघ्र ही पनवेल बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "time": "11:04 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 0
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "time": "11:18 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 8
        },
        {
          "id": "PNV-BS",
          "name": "Panvel Bus Stand",
          "nameMr": "पनवेल बस स्थानक",
          "nameHi": "पनवेल बस स्टैंड",
          "time": "11:32 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 18.9895,
          "lng": 73.1185,
          "roadIndex": 16
        },
        {
          "id": "LNV-BS",
          "name": "Lonavala Bus Stand",
          "nameMr": "लोणावळा बस स्थानक",
          "nameHi": "लोनावला बस स्टैंड",
          "time": "11:46 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7552,
          "lng": 73.4085,
          "roadIndex": 24
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "12:00 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 32
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "time": "12:14 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 40
        },
        {
          "id": "PUN-SWG",
          "name": "Pune Swargate Bus Stand",
          "nameMr": "पुणे स्वारगेट बस स्थानक",
          "nameHi": "पुणे स्वारगेट बस स्टैंड",
          "time": "12:28 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5015,
          "lng": 73.8585,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "BUS-215",
      "number": "MH 15 BT 2015",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-SHR",
      "routeName": "Nashik CBS - Shirdi Saibaba Temple",
      "routeNameMr": "नाशिक सीबीएस - शिर्डी साईबाबा मंदिर",
      "destination": "Shirdi Saibaba Bus Stand",
      "destinationMr": "शिर्डी साईबाबा बस स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dwarka Circle, Nashik Road Station, Sinnar Bus Stand",
      "driverName": "Chandrakant Shirore",
      "conductorName": "Ashok Shinde",
      "scheduledTime": "7:15 AM",
      "currentLat": 19.99598,
      "currentLng": 73.79113,
      "roadIndex": 2,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "85%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Nashik CBS (Thakkar Bazar)",
      "nextStop": "Dwarka Circle",
      "targetStopId": "NSK-DWK",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2015, on route Nashik CBS - Shirdi Saibaba Temple, is approaching Dwarka Circle. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2015, मार्ग नाशिक सीबीएस - शिर्डी साईबाबा मंदिर, लवकरच द्वारका चौक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2015, मार्ग नाशिक सीबीएस - शिरडी साईं बाबा मंदिर, शीघ्र ही द्वारका चौक पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "7:15 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "7:29 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "time": "7:43 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "time": "7:57 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 24
        },
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "time": "8:11 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "BUS-216",
      "number": "MH 15 BT 2016",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-SHR-R",
      "routeName": "Shirdi Saibaba Bus Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "शिर्डी साईबाबा बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Shirdi Saibaba Bus Stand",
      "originMr": "शिर्डी साईबाबा बस स्थानक",
      "via": "Sinnar Bus Stand, Nashik Road Station, Dwarka Circle",
      "driverName": "Manoj Gaikwad",
      "conductorName": "Navnath Khairnar",
      "scheduledTime": "8:26 AM",
      "currentLat": 19.7952,
      "currentLng": 74.35957,
      "roadIndex": 2,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "84%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Shirdi Saibaba Bus Stand",
      "nextStop": "Sinnar Bus Stand",
      "targetStopId": "SNR-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2016, on route Shirdi Saibaba Bus Stand - Nashik CBS (Thakkar Bazar), is approaching Sinnar Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2016, मार्ग शिर्डी साईबाबा बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच सिन्नर बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2016, मार्ग शिरडी साईं बाबा बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही सिन्नर बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "time": "8:26 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 0
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "time": "8:40 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "time": "8:54 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "9:08 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "9:22 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "BUS-217",
      "number": "MH 15 BT 2017",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-SHR-PUN",
      "routeName": "Shirdi Saibaba - Pune Shivajinagar",
      "routeNameMr": "शिर्डी साईबाबा - पुणे शिवाजीनगर",
      "destination": "Pune Shivajinagar Bus Stand",
      "destinationMr": "पुणे शिवाजीनगर बस स्थानक",
      "origin": "Shirdi Saibaba Bus Stand",
      "originMr": "शिर्डी साईबाबा बस स्थानक",
      "via": "Sangamner Bus Stand, Alephata Junction, Narayangaon Bus Stand, Chakan Chowk",
      "driverName": "Gorakh Barde",
      "conductorName": "Sandip Kadam",
      "scheduledTime": "9:37 AM",
      "currentLat": 19.47532,
      "currentLng": 74.19126,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "83%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Sangamner Bus Stand",
      "nextStop": "Alephata Junction",
      "targetStopId": "ALE-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2017, on route Shirdi Saibaba - Pune Shivajinagar, is approaching Alephata Junction. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2017, मार्ग शिर्डी साईबाबा - पुणे शिवाजीनगर, लवकरच आळेफाटा चौक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2017, मार्ग शिरडी साईं बाबा - पुणे शिवाजीनगर, शीघ्र ही आलेफाटा चौक पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "time": "9:37 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 0
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "time": "9:51 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 8
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "time": "10:05 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 16
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "time": "10:19 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 24
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "10:33 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 32
        },
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "time": "10:47 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "BUS-218",
      "number": "MH 15 BT 2018",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-SHR-PUN-R",
      "routeName": "Pune Shivajinagar Bus Stand - Shirdi Saibaba Bus Stand",
      "routeNameMr": "पुणे शिवाजीनगर बस स्थानक - शिर्डी साईबाबा बस स्थानक",
      "destination": "Shirdi Saibaba Bus Stand",
      "destinationMr": "शिर्डी साईबाबा बस स्थानक",
      "origin": "Pune Shivajinagar Bus Stand",
      "originMr": "पुणे शिवाजीनगर बस स्थानक",
      "via": "Chakan Chowk, Narayangaon Bus Stand, Alephata Junction, Sangamner Bus Stand",
      "driverName": "Kishor Aher",
      "conductorName": "Popat Jadhav",
      "scheduledTime": "10:48 AM",
      "currentLat": 18.85101,
      "currentLng": 73.88014,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "82%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Chakan Chowk",
      "nextStop": "Narayangaon Bus Stand",
      "targetStopId": "NRY-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2018, on route Pune Shivajinagar Bus Stand - Shirdi Saibaba Bus Stand, is approaching Narayangaon Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2018, मार्ग पुणे शिवाजीनगर बस स्थानक - शिर्डी साईबाबा बस स्थानक, लवकरच नारायणगाव बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2018, मार्ग पुणे शिवाजीनगर बस स्टैंड - शिरडी साईं बाबा बस स्टैंड, शीघ्र ही नारायणगांव बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "PUN-SHV",
          "name": "Pune Shivajinagar Bus Stand",
          "nameMr": "पुणे शिवाजीनगर बस स्थानक",
          "nameHi": "पुणे शिवाजीनगर बस स्टैंड",
          "time": "10:48 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.5315,
          "lng": 73.8512,
          "roadIndex": 0
        },
        {
          "id": "CHK-BS",
          "name": "Chakan Chowk",
          "nameMr": "चाकण चौक",
          "nameHi": "चाकण चौक",
          "time": "11:02 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 18.7585,
          "lng": 73.8542,
          "roadIndex": 8
        },
        {
          "id": "NRY-BS",
          "name": "Narayangaon Bus Stand",
          "nameMr": "नारायणगाव बस स्थानक",
          "nameHi": "नारायणगांव बस स्टैंड",
          "time": "11:16 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.1215,
          "lng": 73.9785,
          "roadIndex": 16
        },
        {
          "id": "ALE-BS",
          "name": "Alephata Junction",
          "nameMr": "आळेफाटा चौक",
          "nameHi": "आलेफाटा चौक",
          "time": "11:30 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1845,
          "lng": 74.1085,
          "roadIndex": 24
        },
        {
          "id": "SNG-BS",
          "name": "Sangamner Bus Stand",
          "nameMr": "संगमनेर बस स्थानक",
          "nameHi": "संगमनेर बस स्टैंड",
          "time": "11:44 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.5742,
          "lng": 74.2115,
          "roadIndex": 32
        },
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "time": "11:58 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 40
        }
      ]
    },
    {
      "id": "BUS-219",
      "number": "MH 15 BT 2019",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-BOM",
      "routeName": "Nashik CBS - Mumbai Dadar Asiad",
      "routeNameMr": "नाशिक सीबीएस - मुंबई दादर एशियाड",
      "destination": "Mumbai Dadar Asiad Stand",
      "destinationMr": "मुंबई दादर एशियाड स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Mumbai Naka, Igatpuri Bus Stand, Kasara Railway Phata, Kalyan Bypass Junction",
      "driverName": "Namdev Wagh",
      "conductorName": "Bhausaheb Dhatrak",
      "scheduledTime": "11:09 AM",
      "currentLat": 19.9121,
      "currentLng": 73.73361,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "81%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Mumbai Naka",
      "nextStop": "Igatpuri Bus Stand",
      "targetStopId": "IGT-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2019, on route Nashik CBS - Mumbai Dadar Asiad, is approaching Igatpuri Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2019, मार्ग नाशिक सीबीएस - मुंबई दादर एशियाड, लवकरच इगतपुरी बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2019, मार्ग नाशिक सीबीएस - मुंबई दादर एशियाड, शीघ्र ही इगतपुरी बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "11:09 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "11:23 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 8
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "time": "11:37 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 16
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "time": "11:51 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 24
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "time": "12:05 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 32
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "time": "12:19 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 40
        },
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "time": "12:33 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "BUS-220",
      "number": "MH 15 BT 2020",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-BOM-R",
      "routeName": "Mumbai Dadar Asiad Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "मुंबई दादर एशियाड स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Mumbai Dadar Asiad Stand",
      "originMr": "मुंबई दादर एशियाड स्थानक",
      "via": "Thane Teen Hath Naka, Kalyan Bypass Junction, Kasara Railway Phata, Igatpuri Bus Stand",
      "driverName": "Suresh Patil",
      "conductorName": "Ganesh More",
      "scheduledTime": "7:20 AM",
      "currentLat": 19.20509,
      "currentLng": 73.00615,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "80%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Thane Teen Hath Naka",
      "nextStop": "Kalyan Bypass Junction",
      "targetStopId": "KYN-BP",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2020, on route Mumbai Dadar Asiad Stand - Nashik CBS (Thakkar Bazar), is approaching Kalyan Bypass Junction. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2020, मार्ग मुंबई दादर एशियाड स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच कल्याण बायपास चौक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2020, मार्ग मुंबई दादर एशियाड बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही कल्याण बायपास चौक पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "MUM-DDR",
          "name": "Mumbai Dadar Asiad Stand",
          "nameMr": "मुंबई दादर एशियाड स्थानक",
          "nameHi": "मुंबई दादर एशियाड बस स्टैंड",
          "time": "7:20 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.0178,
          "lng": 72.8478,
          "roadIndex": 0
        },
        {
          "id": "THN-BS",
          "name": "Thane Teen Hath Naka",
          "nameMr": "ठाणे तीन हात नाका",
          "nameHi": "ठाणे तीन हाथ नाका",
          "time": "7:34 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.1885,
          "lng": 72.9642,
          "roadIndex": 8
        },
        {
          "id": "KYN-BP",
          "name": "Kalyan Bypass Junction",
          "nameMr": "कल्याण बायपास चौक",
          "nameHi": "कल्याण बायपास चौक",
          "time": "7:48 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.2452,
          "lng": 73.1352,
          "roadIndex": 16
        },
        {
          "id": "KSR-BS",
          "name": "Kasara Railway Phata",
          "nameMr": "कसारा रेल्वे फाटा",
          "nameHi": "कसारा रेलवे फाटा",
          "time": "8:02 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.6452,
          "lng": 73.4815,
          "roadIndex": 24
        },
        {
          "id": "IGT-BS",
          "name": "Igatpuri Bus Stand",
          "nameMr": "इगतपुरी बस स्थानक",
          "nameHi": "इगतपुरी बस स्टैंड",
          "time": "8:16 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.6985,
          "lng": 73.5625,
          "roadIndex": 32
        },
        {
          "id": "NSK-MMN",
          "name": "Mumbai Naka",
          "nameMr": "मुंबई नाका",
          "nameHi": "मुंबई नाका",
          "time": "8:30 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9875,
          "lng": 73.7852,
          "roadIndex": 40
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "8:44 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "BUS-221",
      "number": "MH 15 BT 2021",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-CSN",
      "routeName": "Nashik CBS - Chhatrapati Sambhajinagar",
      "routeNameMr": "नाशिक सीबीएस - छत्रपती संभाजीनगर",
      "destination": "Chhatrapati Sambhajinagar Central",
      "destinationMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dwarka Circle, Niphad Bus Stand, Vinchur Bus Stand, Yeola Bus Stand",
      "driverName": "Eknath Shinde",
      "conductorName": "Santosh Jagtap",
      "scheduledTime": "8:31 AM",
      "currentLat": 20.01721,
      "currentLng": 73.88002,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "79%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Dwarka Circle",
      "nextStop": "Niphad Bus Stand",
      "targetStopId": "NPH-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2021, on route Nashik CBS - Chhatrapati Sambhajinagar, is approaching Niphad Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2021, मार्ग नाशिक सीबीएस - छत्रपती संभाजीनगर, लवकरच निफाड बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2021, मार्ग नाशिक सीबीएस - छत्रपती संभाजीनगर, शीघ्र ही निफाड बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "8:31 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "8:45 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "8:59 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 16
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "time": "9:13 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 24
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "9:27 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 32
        },
        {
          "id": "VJP-BS",
          "name": "Vaijapur Bus Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापुर बस स्टैंड",
          "time": "9:41 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9285,
          "lng": 74.7315,
          "roadIndex": 40
        },
        {
          "id": "CSN-BS",
          "name": "Chhatrapati Sambhajinagar Central",
          "nameMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
          "nameHi": "छत्रपती संभाजीनगर सेंट्रल",
          "time": "9:55 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8762,
          "lng": 75.3245,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "BUS-222",
      "number": "MH 15 BT 2022",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-CSN-R",
      "routeName": "Chhatrapati Sambhajinagar Central - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Chhatrapati Sambhajinagar Central",
      "originMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
      "via": "Vaijapur Bus Stand, Yeola Bus Stand, Vinchur Bus Stand, Niphad Bus Stand",
      "driverName": "Dilip Pawar",
      "conductorName": "Sachin Deshmukh",
      "scheduledTime": "9:42 AM",
      "currentLat": 19.95355,
      "currentLng": 74.66929,
      "roadIndex": 10,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "78%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Vaijapur Bus Stand",
      "nextStop": "Yeola Bus Stand",
      "targetStopId": "YEO-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2022, on route Chhatrapati Sambhajinagar Central - Nashik CBS (Thakkar Bazar), is approaching Yeola Bus Stand. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2022, मार्ग छत्रपती संभाजीनगर मध्यवर्ती स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच येवला बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2022, मार्ग छत्रपती संभाजीनगर सेंट्रल - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही येवला बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "CSN-BS",
          "name": "Chhatrapati Sambhajinagar Central",
          "nameMr": "छत्रपती संभाजीनगर मध्यवर्ती स्थानक",
          "nameHi": "छत्रपती संभाजीनगर सेंट्रल",
          "time": "9:42 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8762,
          "lng": 75.3245,
          "roadIndex": 0
        },
        {
          "id": "VJP-BS",
          "name": "Vaijapur Bus Stand",
          "nameMr": "वैजापूर बस स्थानक",
          "nameHi": "वैजापुर बस स्टैंड",
          "time": "9:56 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9285,
          "lng": 74.7315,
          "roadIndex": 8
        },
        {
          "id": "YEO-BS",
          "name": "Yeola Bus Stand",
          "nameMr": "येवला बस स्थानक",
          "nameHi": "येवला बस स्टैंड",
          "time": "10:10 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.0424,
          "lng": 74.4891,
          "roadIndex": 16
        },
        {
          "id": "VNC-BS",
          "name": "Vinchur Bus Stand",
          "nameMr": "विंचूर बस स्थानक",
          "nameHi": "विंचूर बस स्टैंड",
          "time": "10:24 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.1118,
          "lng": 74.2283,
          "roadIndex": 24
        },
        {
          "id": "NPH-BS",
          "name": "Niphad Bus Stand",
          "nameMr": "निफाड बस स्थानक",
          "nameHi": "निफाड बस स्टैंड",
          "time": "10:38 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0823,
          "lng": 74.1088,
          "roadIndex": 32
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "10:52 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 40
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "11:06 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 48
        }
      ]
    },
    {
      "id": "BUS-223",
      "number": "MH 15 BT 2023",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-TRB",
      "routeName": "Nashik CBS - Trimbakeshwar Jyotirlinga",
      "routeNameMr": "नाशिक सीबीएस - त्र्यंबकेश्वर ज्योतिर्लिंग",
      "destination": "Trimbakeshwar Bus Stand",
      "destinationMr": "त्र्यंबकेश्वर बस स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Trimbak Naka, Satpur MIDC Bus Stand, Anjaneri Phata",
      "driverName": "Kailas Sonawane",
      "conductorName": "Raju Bhalerao",
      "scheduledTime": "10:03 AM",
      "currentLat": 19.99742,
      "currentLng": 73.78527,
      "roadIndex": 2,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "77%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Nashik CBS (Thakkar Bazar)",
      "nextStop": "Trimbak Naka",
      "targetStopId": "NSK-TRN",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2023, on route Nashik CBS - Trimbakeshwar Jyotirlinga, is approaching Trimbak Naka. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2023, मार्ग नाशिक सीबीएस - त्र्यंबकेश्वर ज्योतिर्लिंग, लवकरच त्र्यंबक नाका येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2023, मार्ग नाशिक सीबीएस - त्र्यंबकेश्वर ज्योतिर्लिंग, शीघ्र ही त्र्यंबक नाका पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "10:03 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-TRN",
          "name": "Trimbak Naka",
          "nameMr": "त्र्यंबक नाका",
          "nameHi": "त्र्यंबक नाका",
          "time": "10:17 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.9942,
          "lng": 73.7818,
          "roadIndex": 8
        },
        {
          "id": "NSK-STP",
          "name": "Satpur MIDC Bus Stand",
          "nameMr": "सातपूर एमआयडीसी बस स्थानक",
          "nameHi": "सातपुर एमआईडीसी बस स्टैंड",
          "time": "10:31 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0022,
          "lng": 73.7374,
          "roadIndex": 16
        },
        {
          "id": "ANJ-PH",
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "time": "10:45 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9482,
          "lng": 73.5785,
          "roadIndex": 24
        },
        {
          "id": "TRB-BS",
          "name": "Trimbakeshwar Bus Stand",
          "nameMr": "त्र्यंबकेश्वर बस स्थानक",
          "nameHi": "त्र्यंबकेश्वर बस स्टैंड",
          "time": "10:59 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9365,
          "lng": 73.5325,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "BUS-224",
      "number": "MH 15 BT 2024",
      "type": "Shivshahi AC",
      "typeCode": "SHV",
      "badgeColor": "#8b5cf6",
      "routeId": "R-NSK-TRB-R",
      "routeName": "Trimbakeshwar Bus Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "त्र्यंबकेश्वर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Trimbakeshwar Bus Stand",
      "originMr": "त्र्यंबकेश्वर बस स्थानक",
      "via": "Anjaneri Phata, Satpur MIDC Bus Stand, Trimbak Naka",
      "driverName": "Vijay Gavit",
      "conductorName": "Nitin Jadhav",
      "scheduledTime": "11:14 AM",
      "currentLat": 19.93877,
      "currentLng": 73.54417,
      "roadIndex": 2,
      "speed": 52,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "76%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Trimbakeshwar Bus Stand",
      "nextStop": "Anjaneri Phata",
      "targetStopId": "ANJ-PH",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2024, on route Trimbakeshwar Bus Stand - Nashik CBS (Thakkar Bazar), is approaching Anjaneri Phata. Estimated arrival is 12 minutes. Current speed is 52 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2024, मार्ग त्र्यंबकेश्वर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच अंजनेरी फाटा येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2024, मार्ग त्र्यंबकेश्वर बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही अंजनेरी फाटा पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "TRB-BS",
          "name": "Trimbakeshwar Bus Stand",
          "nameMr": "त्र्यंबकेश्वर बस स्थानक",
          "nameHi": "त्र्यंबकेश्वर बस स्टैंड",
          "time": "11:14 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9365,
          "lng": 73.5325,
          "roadIndex": 0
        },
        {
          "id": "ANJ-PH",
          "name": "Anjaneri Phata",
          "nameMr": "अंजनेरी फाटा",
          "nameHi": "अंजनेरी फाटा",
          "time": "11:28 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.9482,
          "lng": 73.5785,
          "roadIndex": 8
        },
        {
          "id": "NSK-STP",
          "name": "Satpur MIDC Bus Stand",
          "nameMr": "सातपूर एमआयडीसी बस स्थानक",
          "nameHi": "सातपुर एमआईडीसी बस स्टैंड",
          "time": "11:42 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.0022,
          "lng": 73.7374,
          "roadIndex": 16
        },
        {
          "id": "NSK-TRN",
          "name": "Trimbak Naka",
          "nameMr": "त्र्यंबक नाका",
          "nameHi": "त्र्यंबक नाका",
          "time": "11:56 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9942,
          "lng": 73.7818,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "12:10 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "BUS-225",
      "number": "MH 15 BT 2025",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-KPG-SHR",
      "routeName": "Kopargaon Bus Stand - Shirdi Saibaba",
      "routeNameMr": "कोपरगाव बस स्थानक - शिर्डी साईबाबा",
      "destination": "Shirdi Saibaba Bus Stand",
      "destinationMr": "शिर्डी साईबाबा बस स्थानक",
      "origin": "Kopargaon Bus Stand",
      "originMr": "कोपरगाव बस स्थानक",
      "via": "Direct Highway",
      "driverName": "Anil Khairnar",
      "conductorName": "Mahesh Gaikwad",
      "scheduledTime": "7:25 AM",
      "currentLat": 19.86145,
      "currentLng": 74.47624,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "75%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Kopargaon Bus Stand",
      "nextStop": "Shirdi Saibaba Bus Stand",
      "targetStopId": "SHR-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2025, on route Kopargaon Bus Stand - Shirdi Saibaba, is approaching Shirdi Saibaba Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2025, मार्ग कोपरगाव बस स्थानक - शिर्डी साईबाबा, लवकरच शिर्डी साईबाबा बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2025, मार्ग कोपरगांव बस स्टैंड - शिरडी साईं बाबा, शीघ्र ही शिरडी साईं बाबा बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "time": "7:25 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 0
        },
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "time": "7:39 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 8
        }
      ]
    },
    {
      "id": "BUS-226",
      "number": "MH 15 BT 2026",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-KPG-SHR-R",
      "routeName": "Shirdi Saibaba Bus Stand - Kopargaon Bus Stand",
      "routeNameMr": "शिर्डी साईबाबा बस स्थानक - कोपरगाव बस स्थानक",
      "destination": "Kopargaon Bus Stand",
      "destinationMr": "कोपरगाव बस स्थानक",
      "origin": "Shirdi Saibaba Bus Stand",
      "originMr": "शिर्डी साईबाबा बस स्थानक",
      "via": "Direct Highway",
      "driverName": "Sunil Chavan",
      "conductorName": "Pravin Shinde",
      "scheduledTime": "8:36 AM",
      "currentLat": 19.79925,
      "currentLng": 74.47876,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "74%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Shirdi Saibaba Bus Stand",
      "nextStop": "Kopargaon Bus Stand",
      "targetStopId": "KPG-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2026, on route Shirdi Saibaba Bus Stand - Kopargaon Bus Stand, is approaching Kopargaon Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2026, मार्ग शिर्डी साईबाबा बस स्थानक - कोपरगाव बस स्थानक, लवकरच कोपरगाव बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2026, मार्ग शिरडी साईं बाबा बस स्टैंड - कोपरगांव बस स्टैंड, शीघ्र ही कोपरगांव बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "SHR-BS",
          "name": "Shirdi Saibaba Bus Stand",
          "nameMr": "शिर्डी साईबाबा बस स्थानक",
          "nameHi": "शिरडी साईं बाबा बस स्टैंड",
          "time": "8:36 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.7682,
          "lng": 74.4765,
          "roadIndex": 0
        },
        {
          "id": "KPG-BS",
          "name": "Kopargaon Bus Stand",
          "nameMr": "कोपरगाव बस स्थानक",
          "nameHi": "कोपरगांव बस स्टैंड",
          "time": "8:50 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.8925,
          "lng": 74.4785,
          "roadIndex": 8
        }
      ]
    },
    {
      "id": "BUS-227",
      "number": "MH 15 BT 2027",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-SPT",
      "routeName": "Nashik CBS - Saptashrungi Gad (Vani)",
      "routeNameMr": "नाशिक सीबीएस - सप्तशृंगी गड (वणी)",
      "destination": "Saptashrungi Gad (Vani)",
      "destinationMr": "सप्तशृंगी गड (वणी)",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dindori Bus Stand",
      "driverName": "Rajendra Borse",
      "conductorName": "Amol Kute",
      "scheduledTime": "9:47 AM",
      "currentLat": 20.04999,
      "currentLng": 73.80153,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "73%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Nashik CBS (Thakkar Bazar)",
      "nextStop": "Dindori Bus Stand",
      "targetStopId": "DND-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2027, on route Nashik CBS - Saptashrungi Gad (Vani), is approaching Dindori Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2027, मार्ग नाशिक सीबीएस - सप्तशृंगी गड (वणी), लवकरच दिंडोरी बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2027, मार्ग नाशिक सीबीएस - सप्तश्रृंगी गढ़ (वणी), शीघ्र ही दिंडोरी बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "9:47 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "DND-BS",
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्टैंड",
          "time": "10:01 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.2075,
          "lng": 73.8348,
          "roadIndex": 8
        },
        {
          "id": "SPT-GD",
          "name": "Saptashrungi Gad (Vani)",
          "nameMr": "सप्तशृंगी गड (वणी)",
          "nameHi": "सप्तश्रृंगी गढ़ (वणी)",
          "time": "10:15 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3915,
          "lng": 73.9052,
          "roadIndex": 16
        }
      ]
    },
    {
      "id": "BUS-228",
      "number": "MH 15 BT 2028",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-SPT-R",
      "routeName": "Saptashrungi Gad (Vani) - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "सप्तशृंगी गड (वणी) - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Saptashrungi Gad (Vani)",
      "originMr": "सप्तशृंगी गड (वणी)",
      "via": "Dindori Bus Stand",
      "driverName": "Dattatray Wagh",
      "conductorName": "Yogesh Aher",
      "scheduledTime": "10:08 AM",
      "currentLat": 20.3465,
      "currentLng": 73.885,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "72%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Saptashrungi Gad (Vani)",
      "nextStop": "Dindori Bus Stand",
      "targetStopId": "DND-BS",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2028, on route Saptashrungi Gad (Vani) - Nashik CBS (Thakkar Bazar), is approaching Dindori Bus Stand. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2028, मार्ग सप्तशृंगी गड (वणी) - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच दिंडोरी बस स्थानक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2028, मार्ग सप्तश्रृंगी गढ़ (वणी) - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही दिंडोरी बस स्टैंड पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "SPT-GD",
          "name": "Saptashrungi Gad (Vani)",
          "nameMr": "सप्तशृंगी गड (वणी)",
          "nameHi": "सप्तश्रृंगी गढ़ (वणी)",
          "time": "10:08 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 20.3915,
          "lng": 73.9052,
          "roadIndex": 0
        },
        {
          "id": "DND-BS",
          "name": "Dindori Bus Stand",
          "nameMr": "दिंडोरी बस स्थानक",
          "nameHi": "दिंडोरी बस स्टैंड",
          "time": "10:22 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 20.2075,
          "lng": 73.8348,
          "roadIndex": 8
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "10:36 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 16
        }
      ]
    },
    {
      "id": "BUS-229",
      "number": "MH 15 BT 2029",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-SNR",
      "routeName": "Nashik CBS - Sinnar Industrial Stand",
      "routeNameMr": "नाशिक सीबीएस - सिन्नर बस स्थानक",
      "destination": "Sinnar Bus Stand",
      "destinationMr": "सिन्नर बस स्थानक",
      "origin": "Nashik CBS (Thakkar Bazar)",
      "originMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "via": "Dwarka Circle, Nashik Road Station, Bytco Point",
      "driverName": "Bapu Pund",
      "conductorName": "Rameshwar Gite",
      "scheduledTime": "11:19 AM",
      "currentLat": 19.99598,
      "currentLng": 73.79113,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "24/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 54,
      "occupancyClass": "med",
      "fuel": "71%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Nashik CBS (Thakkar Bazar)",
      "nextStop": "Dwarka Circle",
      "targetStopId": "NSK-DWK",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2029, on route Nashik CBS - Sinnar Industrial Stand, is approaching Dwarka Circle. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2029, मार्ग नाशिक सीबीएस - सिन्नर बस स्थानक, लवकरच द्वारका चौक येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2029, मार्ग नाशिक सीबीएस - सिन्नर बस स्टैंड, शीघ्र ही द्वारका चौक पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "11:19 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 0
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "11:33 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "time": "11:47 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "NSK-BYT",
          "name": "Bytco Point",
          "nameMr": "बिटको पॉईंट",
          "nameHi": "बिटको पॉइंट",
          "time": "12:01 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9575,
          "lng": 73.8318,
          "roadIndex": 24
        },
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "time": "12:15 PM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 32
        }
      ]
    },
    {
      "id": "BUS-230",
      "number": "MH 15 BT 2030",
      "type": "MSRTC Lal Pari Ordinary",
      "typeCode": "ORD",
      "badgeColor": "#ef4444",
      "routeId": "R-NSK-SNR-R",
      "routeName": "Sinnar Bus Stand - Nashik CBS (Thakkar Bazar)",
      "routeNameMr": "सिन्नर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "destination": "Nashik CBS (Thakkar Bazar)",
      "destinationMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
      "origin": "Sinnar Bus Stand",
      "originMr": "सिन्नर बस स्थानक",
      "via": "Bytco Point, Nashik Road Station, Dwarka Circle",
      "driverName": "Sanjay Kadam",
      "conductorName": "Dnyaneshwar Sanap",
      "scheduledTime": "7:30 AM",
      "currentLat": 19.87894,
      "currentLng": 73.96263,
      "roadIndex": 2,
      "speed": 46,
      "status": "Running",
      "statusColor": "#10b981",
      "delayMinutes": 0,
      "confidenceScore": 95,
      "occupancy": "32/44 seats",
      "occupancyStatus": "Seats Available",
      "occupancyPercent": 72,
      "occupancyClass": "med",
      "fuel": "85%",
      "distanceFromStop": 6.8,
      "etaMinutes": 12,
      "previousStop": "Sinnar Bus Stand",
      "nextStop": "Bytco Point",
      "targetStopId": "NSK-BYT",
      "lastGpsUpdate": "Just now (Live)",
      "voiceScriptEn": "Attention passengers. MSRTC Bus MH 15 BT 2030, on route Sinnar Bus Stand - Nashik CBS (Thakkar Bazar), is approaching Bytco Point. Estimated arrival is 12 minutes. Current speed is 46 kilometers per hour.",
      "voiceScriptMr": "प्रवाशांचे लक्ष असू द्या. एसटी बस MH 15 BT 2030, मार्ग सिन्नर बस स्थानक - नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार), लवकरच बिटको पॉईंट येथे पोहोचत आहे. अंदाजे वेळ 12 मिनिटे आहे.",
      "voiceScriptHi": "यात्रियों कृपया ध्यान दें। एसटी बस MH 15 BT 2030, मार्ग सिन्नर बस स्टैंड - नाशिक सीबीएस (ठक्कर बाजार), शीघ्र ही बिटको पॉइंट पर आ रही है। अनुमानित समय 12 मिनट है।",
      "intermediateStops": [
        {
          "id": "SNR-BS",
          "name": "Sinnar Bus Stand",
          "nameMr": "सिन्नर बस स्थानक",
          "nameHi": "सिन्नर बस स्टैंड",
          "time": "7:30 AM",
          "status": "Departed",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.8495,
          "lng": 74.0042,
          "roadIndex": 0
        },
        {
          "id": "NSK-BYT",
          "name": "Bytco Point",
          "nameMr": "बिटको पॉईंट",
          "nameHi": "बिटको पॉइंट",
          "time": "7:44 AM",
          "status": "NEXT STOP",
          "delay": "On Time",
          "isCurrentTarget": true,
          "lat": 19.9575,
          "lng": 73.8318,
          "roadIndex": 8
        },
        {
          "id": "NSK-RD",
          "name": "Nashik Road Station",
          "nameMr": "नाशिक रोड रेल्वे स्थानक",
          "nameHi": "नाशिक रोड रेलवे स्टेशन",
          "time": "7:58 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9542,
          "lng": 73.8344,
          "roadIndex": 16
        },
        {
          "id": "NSK-DWK",
          "name": "Dwarka Circle",
          "nameMr": "द्वारका चौक",
          "nameHi": "द्वारका चौक",
          "time": "8:12 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9898,
          "lng": 73.8055,
          "roadIndex": 24
        },
        {
          "id": "NSK-CBS",
          "name": "Nashik CBS (Thakkar Bazar)",
          "nameMr": "नाशिक मध्यवर्ती बस स्थानक (ठक्कर बाजार)",
          "nameHi": "नाशिक सीबीएस (ठक्कर बाजार)",
          "time": "8:26 AM",
          "status": "Scheduled",
          "delay": "On Time",
          "isCurrentTarget": false,
          "lat": 19.9984,
          "lng": 73.7865,
          "roadIndex": 32
        }
      ]
    }
  ],
  "routesGeometry": {
    "R-NSK-YEO": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99098,
        73.80983
      ],
      [
        19.99212,
        73.81417
      ],
      [
        19.99319,
        73.81853
      ],
      [
        19.99415,
        73.8229
      ],
      [
        19.99501,
        73.8273
      ],
      [
        19.99577,
        73.83172
      ],
      [
        19.99646,
        73.83616
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99736,
        73.84572
      ],
      [
        19.99767,
        73.85084
      ],
      [
        19.99807,
        73.85595
      ],
      [
        19.99859,
        73.86104
      ],
      [
        19.99922,
        73.86612
      ],
      [
        19.99997,
        73.87119
      ],
      [
        20.00081,
        73.87625
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00541,
        73.89543
      ],
      [
        20.00899,
        73.90958
      ],
      [
        20.01233,
        73.92378
      ],
      [
        20.01534,
        73.93805
      ],
      [
        20.018,
        73.95238
      ],
      [
        20.02034,
        73.96678
      ],
      [
        20.02244,
        73.98123
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.03077,
        74.01028
      ],
      [
        20.03728,
        74.02479
      ],
      [
        20.04402,
        74.03918
      ],
      [
        20.05109,
        74.05341
      ],
      [
        20.0585,
        74.06746
      ],
      [
        20.06623,
        74.08134
      ],
      [
        20.0742,
        74.09511
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08644,
        74.12269
      ],
      [
        20.09044,
        74.1366
      ],
      [
        20.09421,
        74.15058
      ],
      [
        20.09765,
        74.16463
      ],
      [
        20.10076,
        74.17875
      ],
      [
        20.10354,
        74.19295
      ],
      [
        20.10609,
        74.20721
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.10886,
        74.22238
      ],
      [
        20.10923,
        74.22325
      ],
      [
        20.10961,
        74.22411
      ],
      [
        20.11001,
        74.22497
      ],
      [
        20.11044,
        74.22581
      ],
      [
        20.11088,
        74.22665
      ],
      [
        20.11134,
        74.22748
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.10566,
        74.24529
      ],
      [
        20.09937,
        74.26221
      ],
      [
        20.0928,
        74.27901
      ],
      [
        20.08585,
        74.29564
      ],
      [
        20.0785,
        74.31211
      ],
      [
        20.07077,
        74.32841
      ],
      [
        20.06276,
        74.34459
      ],
      [
        20.0546,
        74.3607
      ],
      [
        20.0538,
        74.36681
      ],
      [
        20.05306,
        74.37293
      ],
      [
        20.05242,
        74.37905
      ],
      [
        20.05192,
        74.38518
      ],
      [
        20.05157,
        74.39132
      ],
      [
        20.05136,
        74.39748
      ],
      [
        20.05125,
        74.40364
      ],
      [
        20.0512,
        74.4098
      ],
      [
        20.05071,
        74.41978
      ],
      [
        20.05012,
        74.42975
      ],
      [
        20.04937,
        74.4397
      ],
      [
        20.04839,
        74.44963
      ],
      [
        20.04717,
        74.45953
      ],
      [
        20.04572,
        74.4694
      ],
      [
        20.04411,
        74.47925
      ],
      [
        20.0424,
        74.4891
      ]
    ],
    "BUS-201": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99098,
        73.80983
      ],
      [
        19.99212,
        73.81417
      ],
      [
        19.99319,
        73.81853
      ],
      [
        19.99415,
        73.8229
      ],
      [
        19.99501,
        73.8273
      ],
      [
        19.99577,
        73.83172
      ],
      [
        19.99646,
        73.83616
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99736,
        73.84572
      ],
      [
        19.99767,
        73.85084
      ],
      [
        19.99807,
        73.85595
      ],
      [
        19.99859,
        73.86104
      ],
      [
        19.99922,
        73.86612
      ],
      [
        19.99997,
        73.87119
      ],
      [
        20.00081,
        73.87625
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00541,
        73.89543
      ],
      [
        20.00899,
        73.90958
      ],
      [
        20.01233,
        73.92378
      ],
      [
        20.01534,
        73.93805
      ],
      [
        20.018,
        73.95238
      ],
      [
        20.02034,
        73.96678
      ],
      [
        20.02244,
        73.98123
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.03077,
        74.01028
      ],
      [
        20.03728,
        74.02479
      ],
      [
        20.04402,
        74.03918
      ],
      [
        20.05109,
        74.05341
      ],
      [
        20.0585,
        74.06746
      ],
      [
        20.06623,
        74.08134
      ],
      [
        20.0742,
        74.09511
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08644,
        74.12269
      ],
      [
        20.09044,
        74.1366
      ],
      [
        20.09421,
        74.15058
      ],
      [
        20.09765,
        74.16463
      ],
      [
        20.10076,
        74.17875
      ],
      [
        20.10354,
        74.19295
      ],
      [
        20.10609,
        74.20721
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.10886,
        74.22238
      ],
      [
        20.10923,
        74.22325
      ],
      [
        20.10961,
        74.22411
      ],
      [
        20.11001,
        74.22497
      ],
      [
        20.11044,
        74.22581
      ],
      [
        20.11088,
        74.22665
      ],
      [
        20.11134,
        74.22748
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.10566,
        74.24529
      ],
      [
        20.09937,
        74.26221
      ],
      [
        20.0928,
        74.27901
      ],
      [
        20.08585,
        74.29564
      ],
      [
        20.0785,
        74.31211
      ],
      [
        20.07077,
        74.32841
      ],
      [
        20.06276,
        74.34459
      ],
      [
        20.0546,
        74.3607
      ],
      [
        20.0538,
        74.36681
      ],
      [
        20.05306,
        74.37293
      ],
      [
        20.05242,
        74.37905
      ],
      [
        20.05192,
        74.38518
      ],
      [
        20.05157,
        74.39132
      ],
      [
        20.05136,
        74.39748
      ],
      [
        20.05125,
        74.40364
      ],
      [
        20.0512,
        74.4098
      ],
      [
        20.05071,
        74.41978
      ],
      [
        20.05012,
        74.42975
      ],
      [
        20.04937,
        74.4397
      ],
      [
        20.04839,
        74.44963
      ],
      [
        20.04717,
        74.45953
      ],
      [
        20.04572,
        74.4694
      ],
      [
        20.04411,
        74.47925
      ],
      [
        20.0424,
        74.4891
      ]
    ],
    "R-NSK-YEO-R": [
      [
        20.0424,
        74.4891
      ],
      [
        20.04411,
        74.47925
      ],
      [
        20.04572,
        74.4694
      ],
      [
        20.04717,
        74.45953
      ],
      [
        20.04839,
        74.44963
      ],
      [
        20.04937,
        74.4397
      ],
      [
        20.05012,
        74.42975
      ],
      [
        20.05071,
        74.41978
      ],
      [
        20.0512,
        74.4098
      ],
      [
        20.05125,
        74.40364
      ],
      [
        20.05136,
        74.39748
      ],
      [
        20.05157,
        74.39132
      ],
      [
        20.05192,
        74.38518
      ],
      [
        20.05242,
        74.37905
      ],
      [
        20.05306,
        74.37293
      ],
      [
        20.0538,
        74.36681
      ],
      [
        20.0546,
        74.3607
      ],
      [
        20.06276,
        74.34459
      ],
      [
        20.07077,
        74.32841
      ],
      [
        20.0785,
        74.31211
      ],
      [
        20.08585,
        74.29564
      ],
      [
        20.0928,
        74.27901
      ],
      [
        20.09937,
        74.26221
      ],
      [
        20.10566,
        74.24529
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.11134,
        74.22748
      ],
      [
        20.11088,
        74.22665
      ],
      [
        20.11044,
        74.22581
      ],
      [
        20.11001,
        74.22497
      ],
      [
        20.10961,
        74.22411
      ],
      [
        20.10923,
        74.22325
      ],
      [
        20.10886,
        74.22238
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.10609,
        74.20721
      ],
      [
        20.10354,
        74.19295
      ],
      [
        20.10076,
        74.17875
      ],
      [
        20.09765,
        74.16463
      ],
      [
        20.09421,
        74.15058
      ],
      [
        20.09044,
        74.1366
      ],
      [
        20.08644,
        74.12269
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.0742,
        74.09511
      ],
      [
        20.06623,
        74.08134
      ],
      [
        20.0585,
        74.06746
      ],
      [
        20.05109,
        74.05341
      ],
      [
        20.04402,
        74.03918
      ],
      [
        20.03728,
        74.02479
      ],
      [
        20.03077,
        74.01028
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.02244,
        73.98123
      ],
      [
        20.02034,
        73.96678
      ],
      [
        20.018,
        73.95238
      ],
      [
        20.01534,
        73.93805
      ],
      [
        20.01233,
        73.92378
      ],
      [
        20.00899,
        73.90958
      ],
      [
        20.00541,
        73.89543
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00081,
        73.87625
      ],
      [
        19.99997,
        73.87119
      ],
      [
        19.99922,
        73.86612
      ],
      [
        19.99859,
        73.86104
      ],
      [
        19.99807,
        73.85595
      ],
      [
        19.99767,
        73.85084
      ],
      [
        19.99736,
        73.84572
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99646,
        73.83616
      ],
      [
        19.99577,
        73.83172
      ],
      [
        19.99501,
        73.8273
      ],
      [
        19.99415,
        73.8229
      ],
      [
        19.99319,
        73.81853
      ],
      [
        19.99212,
        73.81417
      ],
      [
        19.99098,
        73.80983
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-202": [
      [
        20.0424,
        74.4891
      ],
      [
        20.04411,
        74.47925
      ],
      [
        20.04572,
        74.4694
      ],
      [
        20.04717,
        74.45953
      ],
      [
        20.04839,
        74.44963
      ],
      [
        20.04937,
        74.4397
      ],
      [
        20.05012,
        74.42975
      ],
      [
        20.05071,
        74.41978
      ],
      [
        20.0512,
        74.4098
      ],
      [
        20.05125,
        74.40364
      ],
      [
        20.05136,
        74.39748
      ],
      [
        20.05157,
        74.39132
      ],
      [
        20.05192,
        74.38518
      ],
      [
        20.05242,
        74.37905
      ],
      [
        20.05306,
        74.37293
      ],
      [
        20.0538,
        74.36681
      ],
      [
        20.0546,
        74.3607
      ],
      [
        20.06276,
        74.34459
      ],
      [
        20.07077,
        74.32841
      ],
      [
        20.0785,
        74.31211
      ],
      [
        20.08585,
        74.29564
      ],
      [
        20.0928,
        74.27901
      ],
      [
        20.09937,
        74.26221
      ],
      [
        20.10566,
        74.24529
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.11134,
        74.22748
      ],
      [
        20.11088,
        74.22665
      ],
      [
        20.11044,
        74.22581
      ],
      [
        20.11001,
        74.22497
      ],
      [
        20.10961,
        74.22411
      ],
      [
        20.10923,
        74.22325
      ],
      [
        20.10886,
        74.22238
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.10609,
        74.20721
      ],
      [
        20.10354,
        74.19295
      ],
      [
        20.10076,
        74.17875
      ],
      [
        20.09765,
        74.16463
      ],
      [
        20.09421,
        74.15058
      ],
      [
        20.09044,
        74.1366
      ],
      [
        20.08644,
        74.12269
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.0742,
        74.09511
      ],
      [
        20.06623,
        74.08134
      ],
      [
        20.0585,
        74.06746
      ],
      [
        20.05109,
        74.05341
      ],
      [
        20.04402,
        74.03918
      ],
      [
        20.03728,
        74.02479
      ],
      [
        20.03077,
        74.01028
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.02244,
        73.98123
      ],
      [
        20.02034,
        73.96678
      ],
      [
        20.018,
        73.95238
      ],
      [
        20.01534,
        73.93805
      ],
      [
        20.01233,
        73.92378
      ],
      [
        20.00899,
        73.90958
      ],
      [
        20.00541,
        73.89543
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00081,
        73.87625
      ],
      [
        19.99997,
        73.87119
      ],
      [
        19.99922,
        73.86612
      ],
      [
        19.99859,
        73.86104
      ],
      [
        19.99807,
        73.85595
      ],
      [
        19.99767,
        73.85084
      ],
      [
        19.99736,
        73.84572
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99646,
        73.83616
      ],
      [
        19.99577,
        73.83172
      ],
      [
        19.99501,
        73.8273
      ],
      [
        19.99415,
        73.8229
      ],
      [
        19.99319,
        73.81853
      ],
      [
        19.99212,
        73.81417
      ],
      [
        19.99098,
        73.80983
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-NSK-LSG": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99098,
        73.80983
      ],
      [
        19.99212,
        73.81417
      ],
      [
        19.99319,
        73.81853
      ],
      [
        19.99415,
        73.8229
      ],
      [
        19.99501,
        73.8273
      ],
      [
        19.99577,
        73.83172
      ],
      [
        19.99646,
        73.83616
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99736,
        73.84572
      ],
      [
        19.99767,
        73.85084
      ],
      [
        19.99807,
        73.85595
      ],
      [
        19.99859,
        73.86104
      ],
      [
        19.99922,
        73.86612
      ],
      [
        19.99997,
        73.87119
      ],
      [
        20.00081,
        73.87625
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00541,
        73.89543
      ],
      [
        20.00899,
        73.90958
      ],
      [
        20.01233,
        73.92378
      ],
      [
        20.01534,
        73.93805
      ],
      [
        20.018,
        73.95238
      ],
      [
        20.02034,
        73.96678
      ],
      [
        20.02244,
        73.98123
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.03077,
        74.01028
      ],
      [
        20.03728,
        74.02479
      ],
      [
        20.04402,
        74.03918
      ],
      [
        20.05109,
        74.05341
      ],
      [
        20.0585,
        74.06746
      ],
      [
        20.06623,
        74.08134
      ],
      [
        20.0742,
        74.09511
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08644,
        74.12269
      ],
      [
        20.09044,
        74.1366
      ],
      [
        20.09421,
        74.15058
      ],
      [
        20.09765,
        74.16463
      ],
      [
        20.10076,
        74.17875
      ],
      [
        20.10354,
        74.19295
      ],
      [
        20.10609,
        74.20721
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.11341,
        74.22268
      ],
      [
        20.11833,
        74.22381
      ],
      [
        20.12326,
        74.22486
      ],
      [
        20.12821,
        74.22579
      ],
      [
        20.13318,
        74.22661
      ],
      [
        20.13818,
        74.22731
      ],
      [
        20.14318,
        74.22793
      ],
      [
        20.1482,
        74.2285
      ]
    ],
    "BUS-203": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99098,
        73.80983
      ],
      [
        19.99212,
        73.81417
      ],
      [
        19.99319,
        73.81853
      ],
      [
        19.99415,
        73.8229
      ],
      [
        19.99501,
        73.8273
      ],
      [
        19.99577,
        73.83172
      ],
      [
        19.99646,
        73.83616
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99736,
        73.84572
      ],
      [
        19.99767,
        73.85084
      ],
      [
        19.99807,
        73.85595
      ],
      [
        19.99859,
        73.86104
      ],
      [
        19.99922,
        73.86612
      ],
      [
        19.99997,
        73.87119
      ],
      [
        20.00081,
        73.87625
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00541,
        73.89543
      ],
      [
        20.00899,
        73.90958
      ],
      [
        20.01233,
        73.92378
      ],
      [
        20.01534,
        73.93805
      ],
      [
        20.018,
        73.95238
      ],
      [
        20.02034,
        73.96678
      ],
      [
        20.02244,
        73.98123
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.03077,
        74.01028
      ],
      [
        20.03728,
        74.02479
      ],
      [
        20.04402,
        74.03918
      ],
      [
        20.05109,
        74.05341
      ],
      [
        20.0585,
        74.06746
      ],
      [
        20.06623,
        74.08134
      ],
      [
        20.0742,
        74.09511
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08644,
        74.12269
      ],
      [
        20.09044,
        74.1366
      ],
      [
        20.09421,
        74.15058
      ],
      [
        20.09765,
        74.16463
      ],
      [
        20.10076,
        74.17875
      ],
      [
        20.10354,
        74.19295
      ],
      [
        20.10609,
        74.20721
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.11341,
        74.22268
      ],
      [
        20.11833,
        74.22381
      ],
      [
        20.12326,
        74.22486
      ],
      [
        20.12821,
        74.22579
      ],
      [
        20.13318,
        74.22661
      ],
      [
        20.13818,
        74.22731
      ],
      [
        20.14318,
        74.22793
      ],
      [
        20.1482,
        74.2285
      ]
    ],
    "R-NSK-LSG-R": [
      [
        20.1482,
        74.2285
      ],
      [
        20.14329,
        74.22732
      ],
      [
        20.13837,
        74.22619
      ],
      [
        20.13344,
        74.22514
      ],
      [
        20.12849,
        74.22421
      ],
      [
        20.12352,
        74.22339
      ],
      [
        20.11852,
        74.22269
      ],
      [
        20.11352,
        74.22207
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.10436,
        74.20761
      ],
      [
        20.10036,
        74.1937
      ],
      [
        20.09659,
        74.17972
      ],
      [
        20.09315,
        74.16567
      ],
      [
        20.09004,
        74.15155
      ],
      [
        20.08726,
        74.13735
      ],
      [
        20.08471,
        74.12309
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.07593,
        74.09422
      ],
      [
        20.06942,
        74.07971
      ],
      [
        20.06268,
        74.06532
      ],
      [
        20.05561,
        74.05109
      ],
      [
        20.0482,
        74.03704
      ],
      [
        20.04047,
        74.02316
      ],
      [
        20.0325,
        74.00939
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.02069,
        73.98157
      ],
      [
        20.01711,
        73.96742
      ],
      [
        20.01377,
        73.95322
      ],
      [
        20.01076,
        73.93895
      ],
      [
        20.0081,
        73.92462
      ],
      [
        20.00576,
        73.91022
      ],
      [
        20.00366,
        73.89577
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00144,
        73.87618
      ],
      [
        20.00113,
        73.87106
      ],
      [
        20.00073,
        73.86595
      ],
      [
        20.00021,
        73.86086
      ],
      [
        19.99958,
        73.85578
      ],
      [
        19.99883,
        73.85071
      ],
      [
        19.99799,
        73.84565
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99592,
        73.83627
      ],
      [
        19.99478,
        73.83193
      ],
      [
        19.99371,
        73.82757
      ],
      [
        19.99275,
        73.8232
      ],
      [
        19.99189,
        73.8188
      ],
      [
        19.99113,
        73.81438
      ],
      [
        19.99044,
        73.80994
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99102,
        73.80319
      ],
      [
        19.99222,
        73.80087
      ],
      [
        19.99338,
        73.79853
      ],
      [
        19.99448,
        73.79617
      ],
      [
        19.99553,
        73.79378
      ],
      [
        19.99652,
        73.79137
      ],
      [
        19.99747,
        73.78894
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-204": [
      [
        20.1482,
        74.2285
      ],
      [
        20.14329,
        74.22732
      ],
      [
        20.13837,
        74.22619
      ],
      [
        20.13344,
        74.22514
      ],
      [
        20.12849,
        74.22421
      ],
      [
        20.12352,
        74.22339
      ],
      [
        20.11852,
        74.22269
      ],
      [
        20.11352,
        74.22207
      ],
      [
        20.1085,
        74.2215
      ],
      [
        20.10436,
        74.20761
      ],
      [
        20.10036,
        74.1937
      ],
      [
        20.09659,
        74.17972
      ],
      [
        20.09315,
        74.16567
      ],
      [
        20.09004,
        74.15155
      ],
      [
        20.08726,
        74.13735
      ],
      [
        20.08471,
        74.12309
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.07593,
        74.09422
      ],
      [
        20.06942,
        74.07971
      ],
      [
        20.06268,
        74.06532
      ],
      [
        20.05561,
        74.05109
      ],
      [
        20.0482,
        74.03704
      ],
      [
        20.04047,
        74.02316
      ],
      [
        20.0325,
        74.00939
      ],
      [
        20.0244,
        73.9957
      ],
      [
        20.02069,
        73.98157
      ],
      [
        20.01711,
        73.96742
      ],
      [
        20.01377,
        73.95322
      ],
      [
        20.01076,
        73.93895
      ],
      [
        20.0081,
        73.92462
      ],
      [
        20.00576,
        73.91022
      ],
      [
        20.00366,
        73.89577
      ],
      [
        20.0017,
        73.8813
      ],
      [
        20.00144,
        73.87618
      ],
      [
        20.00113,
        73.87106
      ],
      [
        20.00073,
        73.86595
      ],
      [
        20.00021,
        73.86086
      ],
      [
        19.99958,
        73.85578
      ],
      [
        19.99883,
        73.85071
      ],
      [
        19.99799,
        73.84565
      ],
      [
        19.9971,
        73.8406
      ],
      [
        19.99592,
        73.83627
      ],
      [
        19.99478,
        73.83193
      ],
      [
        19.99371,
        73.82757
      ],
      [
        19.99275,
        73.8232
      ],
      [
        19.99189,
        73.8188
      ],
      [
        19.99113,
        73.81438
      ],
      [
        19.99044,
        73.80994
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99102,
        73.80319
      ],
      [
        19.99222,
        73.80087
      ],
      [
        19.99338,
        73.79853
      ],
      [
        19.99448,
        73.79617
      ],
      [
        19.99553,
        73.79378
      ],
      [
        19.99652,
        73.79137
      ],
      [
        19.99747,
        73.78894
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-MLG-KPG": [
      [
        20.5535,
        74.5285
      ],
      [
        20.51656,
        74.51495
      ],
      [
        20.47952,
        74.50174
      ],
      [
        20.44229,
        74.48919
      ],
      [
        20.4048,
        74.47748
      ],
      [
        20.36704,
        74.46669
      ],
      [
        20.32902,
        74.45674
      ],
      [
        20.29081,
        74.44745
      ],
      [
        20.2525,
        74.4385
      ],
      [
        20.22662,
        74.44643
      ],
      [
        20.20069,
        74.45412
      ],
      [
        20.17465,
        74.46136
      ],
      [
        20.14846,
        74.468
      ],
      [
        20.12212,
        74.47401
      ],
      [
        20.09564,
        74.47942
      ],
      [
        20.06905,
        74.48438
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.02374,
        74.48663
      ],
      [
        20.00507,
        74.48433
      ],
      [
        19.98638,
        74.48236
      ],
      [
        19.96766,
        74.4808
      ],
      [
        19.94891,
        74.47971
      ],
      [
        19.93012,
        74.47903
      ],
      [
        19.91132,
        74.47868
      ],
      [
        19.8925,
        74.4785
      ]
    ],
    "BUS-205": [
      [
        20.5535,
        74.5285
      ],
      [
        20.51656,
        74.51495
      ],
      [
        20.47952,
        74.50174
      ],
      [
        20.44229,
        74.48919
      ],
      [
        20.4048,
        74.47748
      ],
      [
        20.36704,
        74.46669
      ],
      [
        20.32902,
        74.45674
      ],
      [
        20.29081,
        74.44745
      ],
      [
        20.2525,
        74.4385
      ],
      [
        20.22662,
        74.44643
      ],
      [
        20.20069,
        74.45412
      ],
      [
        20.17465,
        74.46136
      ],
      [
        20.14846,
        74.468
      ],
      [
        20.12212,
        74.47401
      ],
      [
        20.09564,
        74.47942
      ],
      [
        20.06905,
        74.48438
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.02374,
        74.48663
      ],
      [
        20.00507,
        74.48433
      ],
      [
        19.98638,
        74.48236
      ],
      [
        19.96766,
        74.4808
      ],
      [
        19.94891,
        74.47971
      ],
      [
        19.93012,
        74.47903
      ],
      [
        19.91132,
        74.47868
      ],
      [
        19.8925,
        74.4785
      ]
    ],
    "R-MLG-KPG-R": [
      [
        19.8925,
        74.4785
      ],
      [
        19.91116,
        74.48097
      ],
      [
        19.92983,
        74.48327
      ],
      [
        19.94852,
        74.48524
      ],
      [
        19.96724,
        74.4868
      ],
      [
        19.98599,
        74.48789
      ],
      [
        20.00478,
        74.48857
      ],
      [
        20.02358,
        74.48892
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.06828,
        74.48117
      ],
      [
        20.09421,
        74.47348
      ],
      [
        20.12025,
        74.46624
      ],
      [
        20.14644,
        74.4596
      ],
      [
        20.17278,
        74.45359
      ],
      [
        20.19926,
        74.44818
      ],
      [
        20.22585,
        74.44322
      ],
      [
        20.2525,
        74.4385
      ],
      [
        20.28944,
        74.45205
      ],
      [
        20.32648,
        74.46526
      ],
      [
        20.36371,
        74.47781
      ],
      [
        20.4012,
        74.48952
      ],
      [
        20.43896,
        74.50031
      ],
      [
        20.47698,
        74.51026
      ],
      [
        20.51519,
        74.51955
      ],
      [
        20.5535,
        74.5285
      ]
    ],
    "BUS-206": [
      [
        19.8925,
        74.4785
      ],
      [
        19.91116,
        74.48097
      ],
      [
        19.92983,
        74.48327
      ],
      [
        19.94852,
        74.48524
      ],
      [
        19.96724,
        74.4868
      ],
      [
        19.98599,
        74.48789
      ],
      [
        20.00478,
        74.48857
      ],
      [
        20.02358,
        74.48892
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.06828,
        74.48117
      ],
      [
        20.09421,
        74.47348
      ],
      [
        20.12025,
        74.46624
      ],
      [
        20.14644,
        74.4596
      ],
      [
        20.17278,
        74.45359
      ],
      [
        20.19926,
        74.44818
      ],
      [
        20.22585,
        74.44322
      ],
      [
        20.2525,
        74.4385
      ],
      [
        20.28944,
        74.45205
      ],
      [
        20.32648,
        74.46526
      ],
      [
        20.36371,
        74.47781
      ],
      [
        20.4012,
        74.48952
      ],
      [
        20.43896,
        74.50031
      ],
      [
        20.47698,
        74.51026
      ],
      [
        20.51519,
        74.51955
      ],
      [
        20.5535,
        74.5285
      ]
    ],
    "R-YEO-BOM": [
      [
        20.0424,
        74.4891
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.00368,
        73.8427
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.0178,
        72.8478
      ]
    ],
    "BUS-207": [
      [
        20.0424,
        74.4891
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.00368,
        73.8427
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.0178,
        72.8478
      ]
    ],
    "R-YEO-BOM-R": [
      [
        19.0178,
        72.8478
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        20.00368,
        73.8427
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.0424,
        74.4891
      ]
    ],
    "BUS-208": [
      [
        19.0178,
        72.8478
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        20.00368,
        73.8427
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.0424,
        74.4891
      ]
    ],
    "R-NSK-PUN": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.81667,
        74.03222
      ],
      [
        19.78361,
        74.05992
      ],
      [
        19.75009,
        74.08702
      ],
      [
        19.716,
        74.11336
      ],
      [
        19.68127,
        74.13885
      ],
      [
        19.64596,
        74.16357
      ],
      [
        19.6102,
        74.18769
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.52628,
        74.19564
      ],
      [
        19.47823,
        74.18024
      ],
      [
        19.42997,
        74.16567
      ],
      [
        19.38141,
        74.15221
      ],
      [
        19.33254,
        74.13992
      ],
      [
        19.28338,
        74.12874
      ],
      [
        19.234,
        74.11839
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.17563,
        74.09273
      ],
      [
        19.16691,
        74.07689
      ],
      [
        19.15847,
        74.06091
      ],
      [
        19.1504,
        74.04476
      ],
      [
        19.14272,
        74.02841
      ],
      [
        19.13541,
        74.01189
      ],
      [
        19.12838,
        73.99523
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.07708,
        73.96018
      ],
      [
        19.03251,
        73.94229
      ],
      [
        18.98767,
        73.92518
      ],
      [
        18.94249,
        73.90909
      ],
      [
        18.89692,
        73.89411
      ],
      [
        18.85101,
        73.88014
      ],
      [
        18.80483,
        73.86696
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.7301,
        73.85556
      ],
      [
        18.70171,
        73.85666
      ],
      [
        18.67332,
        73.85727
      ],
      [
        18.64494,
        73.85724
      ],
      [
        18.61657,
        73.85652
      ],
      [
        18.58821,
        73.85516
      ],
      [
        18.55985,
        73.85331
      ],
      [
        18.5315,
        73.8512
      ]
    ],
    "BUS-209": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.81667,
        74.03222
      ],
      [
        19.78361,
        74.05992
      ],
      [
        19.75009,
        74.08702
      ],
      [
        19.716,
        74.11336
      ],
      [
        19.68127,
        74.13885
      ],
      [
        19.64596,
        74.16357
      ],
      [
        19.6102,
        74.18769
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.52628,
        74.19564
      ],
      [
        19.47823,
        74.18024
      ],
      [
        19.42997,
        74.16567
      ],
      [
        19.38141,
        74.15221
      ],
      [
        19.33254,
        74.13992
      ],
      [
        19.28338,
        74.12874
      ],
      [
        19.234,
        74.11839
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.17563,
        74.09273
      ],
      [
        19.16691,
        74.07689
      ],
      [
        19.15847,
        74.06091
      ],
      [
        19.1504,
        74.04476
      ],
      [
        19.14272,
        74.02841
      ],
      [
        19.13541,
        74.01189
      ],
      [
        19.12838,
        73.99523
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.07708,
        73.96018
      ],
      [
        19.03251,
        73.94229
      ],
      [
        18.98767,
        73.92518
      ],
      [
        18.94249,
        73.90909
      ],
      [
        18.89692,
        73.89411
      ],
      [
        18.85101,
        73.88014
      ],
      [
        18.80483,
        73.86696
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.7301,
        73.85556
      ],
      [
        18.70171,
        73.85666
      ],
      [
        18.67332,
        73.85727
      ],
      [
        18.64494,
        73.85724
      ],
      [
        18.61657,
        73.85652
      ],
      [
        18.58821,
        73.85516
      ],
      [
        18.55985,
        73.85331
      ],
      [
        18.5315,
        73.8512
      ]
    ],
    "R-NSK-PUN-R": [
      [
        18.5315,
        73.8512
      ],
      [
        18.55985,
        73.85331
      ],
      [
        18.58821,
        73.85516
      ],
      [
        18.61657,
        73.85652
      ],
      [
        18.64494,
        73.85724
      ],
      [
        18.67332,
        73.85727
      ],
      [
        18.70171,
        73.85666
      ],
      [
        18.7301,
        73.85556
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.80483,
        73.86696
      ],
      [
        18.85101,
        73.88014
      ],
      [
        18.89692,
        73.89411
      ],
      [
        18.94249,
        73.90909
      ],
      [
        18.98767,
        73.92518
      ],
      [
        19.03251,
        73.94229
      ],
      [
        19.07708,
        73.96018
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.12838,
        73.99523
      ],
      [
        19.13541,
        74.01189
      ],
      [
        19.14272,
        74.02841
      ],
      [
        19.1504,
        74.04476
      ],
      [
        19.15847,
        74.06091
      ],
      [
        19.16691,
        74.07689
      ],
      [
        19.17563,
        74.09273
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.234,
        74.11839
      ],
      [
        19.28338,
        74.12874
      ],
      [
        19.33254,
        74.13992
      ],
      [
        19.38141,
        74.15221
      ],
      [
        19.42997,
        74.16567
      ],
      [
        19.47823,
        74.18024
      ],
      [
        19.52628,
        74.19564
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.6102,
        74.18769
      ],
      [
        19.64596,
        74.16357
      ],
      [
        19.68127,
        74.13885
      ],
      [
        19.716,
        74.11336
      ],
      [
        19.75009,
        74.08702
      ],
      [
        19.78361,
        74.05992
      ],
      [
        19.81667,
        74.03222
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-210": [
      [
        18.5315,
        73.8512
      ],
      [
        18.55985,
        73.85331
      ],
      [
        18.58821,
        73.85516
      ],
      [
        18.61657,
        73.85652
      ],
      [
        18.64494,
        73.85724
      ],
      [
        18.67332,
        73.85727
      ],
      [
        18.70171,
        73.85666
      ],
      [
        18.7301,
        73.85556
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.80483,
        73.86696
      ],
      [
        18.85101,
        73.88014
      ],
      [
        18.89692,
        73.89411
      ],
      [
        18.94249,
        73.90909
      ],
      [
        18.98767,
        73.92518
      ],
      [
        19.03251,
        73.94229
      ],
      [
        19.07708,
        73.96018
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.12838,
        73.99523
      ],
      [
        19.13541,
        74.01189
      ],
      [
        19.14272,
        74.02841
      ],
      [
        19.1504,
        74.04476
      ],
      [
        19.15847,
        74.06091
      ],
      [
        19.16691,
        74.07689
      ],
      [
        19.17563,
        74.09273
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.234,
        74.11839
      ],
      [
        19.28338,
        74.12874
      ],
      [
        19.33254,
        74.13992
      ],
      [
        19.38141,
        74.15221
      ],
      [
        19.42997,
        74.16567
      ],
      [
        19.47823,
        74.18024
      ],
      [
        19.52628,
        74.19564
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.6102,
        74.18769
      ],
      [
        19.64596,
        74.16357
      ],
      [
        19.68127,
        74.13885
      ],
      [
        19.716,
        74.11336
      ],
      [
        19.75009,
        74.08702
      ],
      [
        19.78361,
        74.05992
      ],
      [
        19.81667,
        74.03222
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-NSK-DHL": [
      [
        19.9984,
        73.7865
      ],
      [
        20.00927,
        73.80799
      ],
      [
        20.02033,
        73.82937
      ],
      [
        20.03175,
        73.85054
      ],
      [
        20.04363,
        73.87144
      ],
      [
        20.05602,
        73.89204
      ],
      [
        20.06888,
        73.91237
      ],
      [
        20.08209,
        73.93249
      ],
      [
        20.0955,
        73.9525
      ],
      [
        20.10602,
        73.96302
      ],
      [
        20.11643,
        73.97364
      ],
      [
        20.12666,
        73.98442
      ],
      [
        20.13663,
        73.99543
      ],
      [
        20.14633,
        74.00667
      ],
      [
        20.15578,
        74.01814
      ],
      [
        20.16504,
        74.02977
      ],
      [
        20.1742,
        74.0415
      ],
      [
        20.19196,
        74.06768
      ],
      [
        20.20995,
        74.09368
      ],
      [
        20.22837,
        74.11935
      ],
      [
        20.24735,
        74.14459
      ],
      [
        20.26694,
        74.16935
      ],
      [
        20.2871,
        74.19368
      ],
      [
        20.30768,
        74.21768
      ],
      [
        20.3285,
        74.2415
      ],
      [
        20.35882,
        74.27565
      ],
      [
        20.38881,
        74.31007
      ],
      [
        20.41818,
        74.34497
      ],
      [
        20.44674,
        74.3805
      ],
      [
        20.47443,
        74.41672
      ],
      [
        20.50131,
        74.45357
      ],
      [
        20.52757,
        74.4909
      ],
      [
        20.5535,
        74.5285
      ],
      [
        20.59545,
        74.56193
      ],
      [
        20.6377,
        74.59496
      ],
      [
        20.68047,
        74.62723
      ],
      [
        20.72393,
        74.65851
      ],
      [
        20.76814,
        74.68873
      ],
      [
        20.81305,
        74.71796
      ],
      [
        20.85848,
        74.74643
      ],
      [
        20.9042,
        74.7745
      ]
    ],
    "BUS-211": [
      [
        19.9984,
        73.7865
      ],
      [
        20.00927,
        73.80799
      ],
      [
        20.02033,
        73.82937
      ],
      [
        20.03175,
        73.85054
      ],
      [
        20.04363,
        73.87144
      ],
      [
        20.05602,
        73.89204
      ],
      [
        20.06888,
        73.91237
      ],
      [
        20.08209,
        73.93249
      ],
      [
        20.0955,
        73.9525
      ],
      [
        20.10602,
        73.96302
      ],
      [
        20.11643,
        73.97364
      ],
      [
        20.12666,
        73.98442
      ],
      [
        20.13663,
        73.99543
      ],
      [
        20.14633,
        74.00667
      ],
      [
        20.15578,
        74.01814
      ],
      [
        20.16504,
        74.02977
      ],
      [
        20.1742,
        74.0415
      ],
      [
        20.19196,
        74.06768
      ],
      [
        20.20995,
        74.09368
      ],
      [
        20.22837,
        74.11935
      ],
      [
        20.24735,
        74.14459
      ],
      [
        20.26694,
        74.16935
      ],
      [
        20.2871,
        74.19368
      ],
      [
        20.30768,
        74.21768
      ],
      [
        20.3285,
        74.2415
      ],
      [
        20.35882,
        74.27565
      ],
      [
        20.38881,
        74.31007
      ],
      [
        20.41818,
        74.34497
      ],
      [
        20.44674,
        74.3805
      ],
      [
        20.47443,
        74.41672
      ],
      [
        20.50131,
        74.45357
      ],
      [
        20.52757,
        74.4909
      ],
      [
        20.5535,
        74.5285
      ],
      [
        20.59545,
        74.56193
      ],
      [
        20.6377,
        74.59496
      ],
      [
        20.68047,
        74.62723
      ],
      [
        20.72393,
        74.65851
      ],
      [
        20.76814,
        74.68873
      ],
      [
        20.81305,
        74.71796
      ],
      [
        20.85848,
        74.74643
      ],
      [
        20.9042,
        74.7745
      ]
    ],
    "R-NSK-DHL-R": [
      [
        20.9042,
        74.7745
      ],
      [
        20.86225,
        74.74107
      ],
      [
        20.82,
        74.70804
      ],
      [
        20.77723,
        74.67577
      ],
      [
        20.73377,
        74.64449
      ],
      [
        20.68956,
        74.61427
      ],
      [
        20.64465,
        74.58504
      ],
      [
        20.59922,
        74.55657
      ],
      [
        20.5535,
        74.5285
      ],
      [
        20.52318,
        74.49435
      ],
      [
        20.49319,
        74.45993
      ],
      [
        20.46382,
        74.42503
      ],
      [
        20.43526,
        74.3895
      ],
      [
        20.40757,
        74.35328
      ],
      [
        20.38069,
        74.31643
      ],
      [
        20.35443,
        74.2791
      ],
      [
        20.3285,
        74.2415
      ],
      [
        20.31074,
        74.21532
      ],
      [
        20.29275,
        74.18932
      ],
      [
        20.27433,
        74.16365
      ],
      [
        20.25535,
        74.13841
      ],
      [
        20.23576,
        74.11365
      ],
      [
        20.2156,
        74.08932
      ],
      [
        20.19502,
        74.06532
      ],
      [
        20.1742,
        74.0415
      ],
      [
        20.16368,
        74.03098
      ],
      [
        20.15327,
        74.02036
      ],
      [
        20.14304,
        74.00958
      ],
      [
        20.13307,
        73.99857
      ],
      [
        20.12337,
        73.98733
      ],
      [
        20.11392,
        73.97586
      ],
      [
        20.10466,
        73.96423
      ],
      [
        20.0955,
        73.9525
      ],
      [
        20.08463,
        73.93101
      ],
      [
        20.07357,
        73.90963
      ],
      [
        20.06215,
        73.88846
      ],
      [
        20.05027,
        73.86756
      ],
      [
        20.03788,
        73.84696
      ],
      [
        20.02502,
        73.82663
      ],
      [
        20.01181,
        73.80651
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-212": [
      [
        20.9042,
        74.7745
      ],
      [
        20.86225,
        74.74107
      ],
      [
        20.82,
        74.70804
      ],
      [
        20.77723,
        74.67577
      ],
      [
        20.73377,
        74.64449
      ],
      [
        20.68956,
        74.61427
      ],
      [
        20.64465,
        74.58504
      ],
      [
        20.59922,
        74.55657
      ],
      [
        20.5535,
        74.5285
      ],
      [
        20.52318,
        74.49435
      ],
      [
        20.49319,
        74.45993
      ],
      [
        20.46382,
        74.42503
      ],
      [
        20.43526,
        74.3895
      ],
      [
        20.40757,
        74.35328
      ],
      [
        20.38069,
        74.31643
      ],
      [
        20.35443,
        74.2791
      ],
      [
        20.3285,
        74.2415
      ],
      [
        20.31074,
        74.21532
      ],
      [
        20.29275,
        74.18932
      ],
      [
        20.27433,
        74.16365
      ],
      [
        20.25535,
        74.13841
      ],
      [
        20.23576,
        74.11365
      ],
      [
        20.2156,
        74.08932
      ],
      [
        20.19502,
        74.06532
      ],
      [
        20.1742,
        74.0415
      ],
      [
        20.16368,
        74.03098
      ],
      [
        20.15327,
        74.02036
      ],
      [
        20.14304,
        74.00958
      ],
      [
        20.13307,
        73.99857
      ],
      [
        20.12337,
        73.98733
      ],
      [
        20.11392,
        73.97586
      ],
      [
        20.10466,
        73.96423
      ],
      [
        20.0955,
        73.9525
      ],
      [
        20.08463,
        73.93101
      ],
      [
        20.07357,
        73.90963
      ],
      [
        20.06215,
        73.88846
      ],
      [
        20.05027,
        73.86756
      ],
      [
        20.03788,
        73.84696
      ],
      [
        20.02502,
        73.82663
      ],
      [
        20.01181,
        73.80651
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-PUN-BOM": [
      [
        18.5015,
        73.8585
      ],
      [
        18.50531,
        73.85782
      ],
      [
        18.5091,
        73.8571
      ],
      [
        18.51288,
        73.85632
      ],
      [
        18.51665,
        73.85545
      ],
      [
        18.52038,
        73.85449
      ],
      [
        18.5241,
        73.85345
      ],
      [
        18.52781,
        73.85234
      ],
      [
        18.5315,
        73.8512
      ],
      [
        18.5599,
        73.84984
      ],
      [
        18.58829,
        73.84874
      ],
      [
        18.61668,
        73.84813
      ],
      [
        18.64506,
        73.84816
      ],
      [
        18.67343,
        73.84888
      ],
      [
        18.70179,
        73.85024
      ],
      [
        18.73015,
        73.85209
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.7615,
        73.79846
      ],
      [
        18.76398,
        73.74273
      ],
      [
        18.7655,
        73.687
      ],
      [
        18.76576,
        73.63128
      ],
      [
        18.76467,
        73.57558
      ],
      [
        18.76233,
        73.51988
      ],
      [
        18.75902,
        73.46419
      ],
      [
        18.7552,
        73.4085
      ],
      [
        18.78227,
        73.37046
      ],
      [
        18.80967,
        73.33269
      ],
      [
        18.8377,
        73.29542
      ],
      [
        18.86655,
        73.25881
      ],
      [
        18.89628,
        73.22292
      ],
      [
        18.92682,
        73.18769
      ],
      [
        18.95799,
        73.15296
      ],
      [
        18.9895,
        73.1185
      ],
      [
        19.01556,
        73.10074
      ],
      [
        19.04143,
        73.08274
      ],
      [
        19.06698,
        73.06431
      ],
      [
        19.09209,
        73.04533
      ],
      [
        19.11673,
        73.02574
      ],
      [
        19.14093,
        73.00559
      ],
      [
        19.16481,
        72.98501
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.0178,
        72.8478
      ]
    ],
    "BUS-213": [
      [
        18.5015,
        73.8585
      ],
      [
        18.50531,
        73.85782
      ],
      [
        18.5091,
        73.8571
      ],
      [
        18.51288,
        73.85632
      ],
      [
        18.51665,
        73.85545
      ],
      [
        18.52038,
        73.85449
      ],
      [
        18.5241,
        73.85345
      ],
      [
        18.52781,
        73.85234
      ],
      [
        18.5315,
        73.8512
      ],
      [
        18.5599,
        73.84984
      ],
      [
        18.58829,
        73.84874
      ],
      [
        18.61668,
        73.84813
      ],
      [
        18.64506,
        73.84816
      ],
      [
        18.67343,
        73.84888
      ],
      [
        18.70179,
        73.85024
      ],
      [
        18.73015,
        73.85209
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.7615,
        73.79846
      ],
      [
        18.76398,
        73.74273
      ],
      [
        18.7655,
        73.687
      ],
      [
        18.76576,
        73.63128
      ],
      [
        18.76467,
        73.57558
      ],
      [
        18.76233,
        73.51988
      ],
      [
        18.75902,
        73.46419
      ],
      [
        18.7552,
        73.4085
      ],
      [
        18.78227,
        73.37046
      ],
      [
        18.80967,
        73.33269
      ],
      [
        18.8377,
        73.29542
      ],
      [
        18.86655,
        73.25881
      ],
      [
        18.89628,
        73.22292
      ],
      [
        18.92682,
        73.18769
      ],
      [
        18.95799,
        73.15296
      ],
      [
        18.9895,
        73.1185
      ],
      [
        19.01556,
        73.10074
      ],
      [
        19.04143,
        73.08274
      ],
      [
        19.06698,
        73.06431
      ],
      [
        19.09209,
        73.04533
      ],
      [
        19.11673,
        73.02574
      ],
      [
        19.14093,
        73.00559
      ],
      [
        19.16481,
        72.98501
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.0178,
        72.8478
      ]
    ],
    "R-PUN-BOM-R": [
      [
        19.0178,
        72.8478
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16481,
        72.98501
      ],
      [
        19.14093,
        73.00559
      ],
      [
        19.11673,
        73.02574
      ],
      [
        19.09209,
        73.04533
      ],
      [
        19.06698,
        73.06431
      ],
      [
        19.04143,
        73.08274
      ],
      [
        19.01556,
        73.10074
      ],
      [
        18.9895,
        73.1185
      ],
      [
        18.95799,
        73.15296
      ],
      [
        18.92682,
        73.18769
      ],
      [
        18.89628,
        73.22292
      ],
      [
        18.86655,
        73.25881
      ],
      [
        18.8377,
        73.29542
      ],
      [
        18.80967,
        73.33269
      ],
      [
        18.78227,
        73.37046
      ],
      [
        18.7552,
        73.4085
      ],
      [
        18.75902,
        73.46419
      ],
      [
        18.76233,
        73.51988
      ],
      [
        18.76467,
        73.57558
      ],
      [
        18.76576,
        73.63128
      ],
      [
        18.7655,
        73.687
      ],
      [
        18.76398,
        73.74273
      ],
      [
        18.7615,
        73.79846
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.73015,
        73.85209
      ],
      [
        18.70179,
        73.85024
      ],
      [
        18.67343,
        73.84888
      ],
      [
        18.64506,
        73.84816
      ],
      [
        18.61668,
        73.84813
      ],
      [
        18.58829,
        73.84874
      ],
      [
        18.5599,
        73.84984
      ],
      [
        18.5315,
        73.8512
      ],
      [
        18.52781,
        73.85234
      ],
      [
        18.5241,
        73.85345
      ],
      [
        18.52038,
        73.85449
      ],
      [
        18.51665,
        73.85545
      ],
      [
        18.51288,
        73.85632
      ],
      [
        18.5091,
        73.8571
      ],
      [
        18.50531,
        73.85782
      ],
      [
        18.5015,
        73.8585
      ]
    ],
    "BUS-214": [
      [
        19.0178,
        72.8478
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16481,
        72.98501
      ],
      [
        19.14093,
        73.00559
      ],
      [
        19.11673,
        73.02574
      ],
      [
        19.09209,
        73.04533
      ],
      [
        19.06698,
        73.06431
      ],
      [
        19.04143,
        73.08274
      ],
      [
        19.01556,
        73.10074
      ],
      [
        18.9895,
        73.1185
      ],
      [
        18.95799,
        73.15296
      ],
      [
        18.92682,
        73.18769
      ],
      [
        18.89628,
        73.22292
      ],
      [
        18.86655,
        73.25881
      ],
      [
        18.8377,
        73.29542
      ],
      [
        18.80967,
        73.33269
      ],
      [
        18.78227,
        73.37046
      ],
      [
        18.7552,
        73.4085
      ],
      [
        18.75902,
        73.46419
      ],
      [
        18.76233,
        73.51988
      ],
      [
        18.76467,
        73.57558
      ],
      [
        18.76576,
        73.63128
      ],
      [
        18.7655,
        73.687
      ],
      [
        18.76398,
        73.74273
      ],
      [
        18.7615,
        73.79846
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.73015,
        73.85209
      ],
      [
        18.70179,
        73.85024
      ],
      [
        18.67343,
        73.84888
      ],
      [
        18.64506,
        73.84816
      ],
      [
        18.61668,
        73.84813
      ],
      [
        18.58829,
        73.84874
      ],
      [
        18.5599,
        73.84984
      ],
      [
        18.5315,
        73.8512
      ],
      [
        18.52781,
        73.85234
      ],
      [
        18.5241,
        73.85345
      ],
      [
        18.52038,
        73.85449
      ],
      [
        18.51665,
        73.85545
      ],
      [
        18.51288,
        73.85632
      ],
      [
        18.5091,
        73.8571
      ],
      [
        18.50531,
        73.85782
      ],
      [
        18.5015,
        73.8585
      ]
    ],
    "R-NSK-SHR": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.84295,
        74.06386
      ],
      [
        19.83585,
        74.12342
      ],
      [
        19.82774,
        74.18281
      ],
      [
        19.8183,
        74.24198
      ],
      [
        19.80741,
        74.30089
      ],
      [
        19.7952,
        74.35957
      ],
      [
        19.78198,
        74.41808
      ],
      [
        19.7682,
        74.4765
      ]
    ],
    "BUS-215": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.84295,
        74.06386
      ],
      [
        19.83585,
        74.12342
      ],
      [
        19.82774,
        74.18281
      ],
      [
        19.8183,
        74.24198
      ],
      [
        19.80741,
        74.30089
      ],
      [
        19.7952,
        74.35957
      ],
      [
        19.78198,
        74.41808
      ],
      [
        19.7682,
        74.4765
      ]
    ],
    "R-NSK-SHR-R": [
      [
        19.7682,
        74.4765
      ],
      [
        19.78198,
        74.41808
      ],
      [
        19.7952,
        74.35957
      ],
      [
        19.80741,
        74.30089
      ],
      [
        19.8183,
        74.24198
      ],
      [
        19.82774,
        74.18281
      ],
      [
        19.83585,
        74.12342
      ],
      [
        19.84295,
        74.06386
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-216": [
      [
        19.7682,
        74.4765
      ],
      [
        19.78198,
        74.41808
      ],
      [
        19.7952,
        74.35957
      ],
      [
        19.80741,
        74.30089
      ],
      [
        19.8183,
        74.24198
      ],
      [
        19.82774,
        74.18281
      ],
      [
        19.83585,
        74.12342
      ],
      [
        19.84295,
        74.06386
      ],
      [
        19.8495,
        74.0042
      ],
      [
        19.86129,
        73.98217
      ],
      [
        19.87327,
        73.96027
      ],
      [
        19.88563,
        73.93859
      ],
      [
        19.89845,
        73.91721
      ],
      [
        19.9118,
        73.89614
      ],
      [
        19.92562,
        73.87537
      ],
      [
        19.93981,
        73.85482
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-SHR-PUN": [
      [
        19.7682,
        74.4765
      ],
      [
        19.74598,
        74.44189
      ],
      [
        19.72345,
        74.40751
      ],
      [
        19.70035,
        74.37354
      ],
      [
        19.6765,
        74.34012
      ],
      [
        19.65185,
        74.30729
      ],
      [
        19.62645,
        74.27501
      ],
      [
        19.60048,
        74.24314
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.5247,
        74.20161
      ],
      [
        19.47532,
        74.19126
      ],
      [
        19.42616,
        74.18008
      ],
      [
        19.37729,
        74.16779
      ],
      [
        19.32873,
        74.15433
      ],
      [
        19.28047,
        74.13976
      ],
      [
        19.23242,
        74.12436
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.17762,
        74.09177
      ],
      [
        19.17059,
        74.07511
      ],
      [
        19.16328,
        74.05859
      ],
      [
        19.1556,
        74.04224
      ],
      [
        19.14753,
        74.02609
      ],
      [
        19.13909,
        74.01011
      ],
      [
        19.13037,
        73.99427
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.07517,
        73.96574
      ],
      [
        19.02899,
        73.95256
      ],
      [
        18.98308,
        73.93859
      ],
      [
        18.93751,
        73.92361
      ],
      [
        18.89233,
        73.90752
      ],
      [
        18.84749,
        73.89041
      ],
      [
        18.80292,
        73.87252
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.73015,
        73.85209
      ],
      [
        18.70179,
        73.85024
      ],
      [
        18.67343,
        73.84888
      ],
      [
        18.64506,
        73.84816
      ],
      [
        18.61668,
        73.84813
      ],
      [
        18.58829,
        73.84874
      ],
      [
        18.5599,
        73.84984
      ],
      [
        18.5315,
        73.8512
      ]
    ],
    "BUS-217": [
      [
        19.7682,
        74.4765
      ],
      [
        19.74598,
        74.44189
      ],
      [
        19.72345,
        74.40751
      ],
      [
        19.70035,
        74.37354
      ],
      [
        19.6765,
        74.34012
      ],
      [
        19.65185,
        74.30729
      ],
      [
        19.62645,
        74.27501
      ],
      [
        19.60048,
        74.24314
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.5247,
        74.20161
      ],
      [
        19.47532,
        74.19126
      ],
      [
        19.42616,
        74.18008
      ],
      [
        19.37729,
        74.16779
      ],
      [
        19.32873,
        74.15433
      ],
      [
        19.28047,
        74.13976
      ],
      [
        19.23242,
        74.12436
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.17762,
        74.09177
      ],
      [
        19.17059,
        74.07511
      ],
      [
        19.16328,
        74.05859
      ],
      [
        19.1556,
        74.04224
      ],
      [
        19.14753,
        74.02609
      ],
      [
        19.13909,
        74.01011
      ],
      [
        19.13037,
        73.99427
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.07517,
        73.96574
      ],
      [
        19.02899,
        73.95256
      ],
      [
        18.98308,
        73.93859
      ],
      [
        18.93751,
        73.92361
      ],
      [
        18.89233,
        73.90752
      ],
      [
        18.84749,
        73.89041
      ],
      [
        18.80292,
        73.87252
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.73015,
        73.85209
      ],
      [
        18.70179,
        73.85024
      ],
      [
        18.67343,
        73.84888
      ],
      [
        18.64506,
        73.84816
      ],
      [
        18.61668,
        73.84813
      ],
      [
        18.58829,
        73.84874
      ],
      [
        18.5599,
        73.84984
      ],
      [
        18.5315,
        73.8512
      ]
    ],
    "R-SHR-PUN-R": [
      [
        18.5315,
        73.8512
      ],
      [
        18.55985,
        73.85331
      ],
      [
        18.58821,
        73.85516
      ],
      [
        18.61657,
        73.85652
      ],
      [
        18.64494,
        73.85724
      ],
      [
        18.67332,
        73.85727
      ],
      [
        18.70171,
        73.85666
      ],
      [
        18.7301,
        73.85556
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.80483,
        73.86696
      ],
      [
        18.85101,
        73.88014
      ],
      [
        18.89692,
        73.89411
      ],
      [
        18.94249,
        73.90909
      ],
      [
        18.98767,
        73.92518
      ],
      [
        19.03251,
        73.94229
      ],
      [
        19.07708,
        73.96018
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.12838,
        73.99523
      ],
      [
        19.13541,
        74.01189
      ],
      [
        19.14272,
        74.02841
      ],
      [
        19.1504,
        74.04476
      ],
      [
        19.15847,
        74.06091
      ],
      [
        19.16691,
        74.07689
      ],
      [
        19.17563,
        74.09273
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.234,
        74.11839
      ],
      [
        19.28338,
        74.12874
      ],
      [
        19.33254,
        74.13992
      ],
      [
        19.38141,
        74.15221
      ],
      [
        19.42997,
        74.16567
      ],
      [
        19.47823,
        74.18024
      ],
      [
        19.52628,
        74.19564
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.59642,
        74.24611
      ],
      [
        19.61895,
        74.28049
      ],
      [
        19.64205,
        74.31446
      ],
      [
        19.6659,
        74.34788
      ],
      [
        19.69055,
        74.38071
      ],
      [
        19.71595,
        74.41299
      ],
      [
        19.74192,
        74.44486
      ],
      [
        19.7682,
        74.4765
      ]
    ],
    "BUS-218": [
      [
        18.5315,
        73.8512
      ],
      [
        18.55985,
        73.85331
      ],
      [
        18.58821,
        73.85516
      ],
      [
        18.61657,
        73.85652
      ],
      [
        18.64494,
        73.85724
      ],
      [
        18.67332,
        73.85727
      ],
      [
        18.70171,
        73.85666
      ],
      [
        18.7301,
        73.85556
      ],
      [
        18.7585,
        73.8542
      ],
      [
        18.80483,
        73.86696
      ],
      [
        18.85101,
        73.88014
      ],
      [
        18.89692,
        73.89411
      ],
      [
        18.94249,
        73.90909
      ],
      [
        18.98767,
        73.92518
      ],
      [
        19.03251,
        73.94229
      ],
      [
        19.07708,
        73.96018
      ],
      [
        19.1215,
        73.9785
      ],
      [
        19.12838,
        73.99523
      ],
      [
        19.13541,
        74.01189
      ],
      [
        19.14272,
        74.02841
      ],
      [
        19.1504,
        74.04476
      ],
      [
        19.15847,
        74.06091
      ],
      [
        19.16691,
        74.07689
      ],
      [
        19.17563,
        74.09273
      ],
      [
        19.1845,
        74.1085
      ],
      [
        19.234,
        74.11839
      ],
      [
        19.28338,
        74.12874
      ],
      [
        19.33254,
        74.13992
      ],
      [
        19.38141,
        74.15221
      ],
      [
        19.42997,
        74.16567
      ],
      [
        19.47823,
        74.18024
      ],
      [
        19.52628,
        74.19564
      ],
      [
        19.5742,
        74.2115
      ],
      [
        19.59642,
        74.24611
      ],
      [
        19.61895,
        74.28049
      ],
      [
        19.64205,
        74.31446
      ],
      [
        19.6659,
        74.34788
      ],
      [
        19.69055,
        74.38071
      ],
      [
        19.71595,
        74.41299
      ],
      [
        19.74192,
        74.44486
      ],
      [
        19.7682,
        74.4765
      ]
    ],
    "R-NSK-BOM": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.0178,
        72.8478
      ]
    ],
    "BUS-219": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.0178,
        72.8478
      ]
    ],
    "R-NSK-BOM-R": [
      [
        19.0178,
        72.8478
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-220": [
      [
        19.0178,
        72.8478
      ],
      [
        19.03825,
        72.86366
      ],
      [
        19.05883,
        72.87931
      ],
      [
        19.07966,
        72.8946
      ],
      [
        19.10082,
        72.90941
      ],
      [
        19.12234,
        72.9237
      ],
      [
        19.14418,
        72.93751
      ],
      [
        19.16627,
        72.95096
      ],
      [
        19.1885,
        72.9642
      ],
      [
        19.1969,
        72.98514
      ],
      [
        19.20509,
        73.00615
      ],
      [
        19.21292,
        73.02728
      ],
      [
        19.22027,
        73.04857
      ],
      [
        19.2271,
        73.07003
      ],
      [
        19.23344,
        73.09165
      ],
      [
        19.23942,
        73.11339
      ],
      [
        19.2452,
        73.1352
      ],
      [
        19.29255,
        73.18155
      ],
      [
        19.3403,
        73.22743
      ],
      [
        19.3888,
        73.27245
      ],
      [
        19.43827,
        73.31635
      ],
      [
        19.4888,
        73.35903
      ],
      [
        19.5403,
        73.40058
      ],
      [
        19.59255,
        73.44127
      ],
      [
        19.6452,
        73.4815
      ],
      [
        19.65248,
        73.49122
      ],
      [
        19.65967,
        73.501
      ],
      [
        19.66668,
        73.51089
      ],
      [
        19.67347,
        73.52093
      ],
      [
        19.68001,
        73.53114
      ],
      [
        19.68632,
        73.5415
      ],
      [
        19.69246,
        73.55197
      ],
      [
        19.6985,
        73.5625
      ],
      [
        19.73292,
        73.59255
      ],
      [
        19.7676,
        73.62226
      ],
      [
        19.80276,
        73.65135
      ],
      [
        19.83855,
        73.67963
      ],
      [
        19.87501,
        73.70703
      ],
      [
        19.9121,
        73.73361
      ],
      [
        19.94967,
        73.75957
      ],
      [
        19.9875,
        73.7852
      ],
      [
        19.98887,
        73.78528
      ],
      [
        19.99024,
        73.78537
      ],
      [
        19.99161,
        73.78549
      ],
      [
        19.99298,
        73.78563
      ],
      [
        19.99434,
        73.78581
      ],
      [
        19.99569,
        73.78602
      ],
      [
        19.99705,
        73.78625
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-NSK-CSN": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        20.00368,
        73.8427
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.02631,
        74.51853
      ],
      [
        20.0105,
        74.54809
      ],
      [
        19.99521,
        74.5779
      ],
      [
        19.9806,
        74.60802
      ],
      [
        19.96673,
        74.6385
      ],
      [
        19.95355,
        74.66929
      ],
      [
        19.94088,
        74.70033
      ],
      [
        19.9285,
        74.7315
      ],
      [
        19.9265,
        74.80603
      ],
      [
        19.92381,
        74.88049
      ],
      [
        19.91984,
        74.95484
      ],
      [
        19.91421,
        75.02905
      ],
      [
        19.90677,
        75.10309
      ],
      [
        19.89766,
        75.17699
      ],
      [
        19.88728,
        75.25078
      ],
      [
        19.8762,
        75.3245
      ]
    ],
    "BUS-221": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        20.00368,
        73.8427
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.02631,
        74.51853
      ],
      [
        20.0105,
        74.54809
      ],
      [
        19.99521,
        74.5779
      ],
      [
        19.9806,
        74.60802
      ],
      [
        19.96673,
        74.6385
      ],
      [
        19.95355,
        74.66929
      ],
      [
        19.94088,
        74.70033
      ],
      [
        19.9285,
        74.7315
      ],
      [
        19.9265,
        74.80603
      ],
      [
        19.92381,
        74.88049
      ],
      [
        19.91984,
        74.95484
      ],
      [
        19.91421,
        75.02905
      ],
      [
        19.90677,
        75.10309
      ],
      [
        19.89766,
        75.17699
      ],
      [
        19.88728,
        75.25078
      ],
      [
        19.8762,
        75.3245
      ]
    ],
    "R-NSK-CSN-R": [
      [
        19.8762,
        75.3245
      ],
      [
        19.88728,
        75.25078
      ],
      [
        19.89766,
        75.17699
      ],
      [
        19.90677,
        75.10309
      ],
      [
        19.91421,
        75.02905
      ],
      [
        19.91984,
        74.95484
      ],
      [
        19.92381,
        74.88049
      ],
      [
        19.9265,
        74.80603
      ],
      [
        19.9285,
        74.7315
      ],
      [
        19.94088,
        74.70033
      ],
      [
        19.95355,
        74.66929
      ],
      [
        19.96673,
        74.6385
      ],
      [
        19.9806,
        74.60802
      ],
      [
        19.99521,
        74.5779
      ],
      [
        20.0105,
        74.54809
      ],
      [
        20.02631,
        74.51853
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.00368,
        73.8427
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-222": [
      [
        19.8762,
        75.3245
      ],
      [
        19.88728,
        75.25078
      ],
      [
        19.89766,
        75.17699
      ],
      [
        19.90677,
        75.10309
      ],
      [
        19.91421,
        75.02905
      ],
      [
        19.91984,
        74.95484
      ],
      [
        19.92381,
        74.88049
      ],
      [
        19.9265,
        74.80603
      ],
      [
        19.9285,
        74.7315
      ],
      [
        19.94088,
        74.70033
      ],
      [
        19.95355,
        74.66929
      ],
      [
        19.96673,
        74.6385
      ],
      [
        19.9806,
        74.60802
      ],
      [
        19.99521,
        74.5779
      ],
      [
        20.0105,
        74.54809
      ],
      [
        20.02631,
        74.51853
      ],
      [
        20.0424,
        74.4891
      ],
      [
        20.05307,
        74.45703
      ],
      [
        20.06344,
        74.42488
      ],
      [
        20.07324,
        74.39258
      ],
      [
        20.08232,
        74.36009
      ],
      [
        20.09059,
        74.32738
      ],
      [
        20.09814,
        74.29448
      ],
      [
        20.10512,
        74.26143
      ],
      [
        20.1118,
        74.2283
      ],
      [
        20.1072,
        74.21359
      ],
      [
        20.10274,
        74.19884
      ],
      [
        20.09853,
        74.18403
      ],
      [
        20.09466,
        74.16914
      ],
      [
        20.09115,
        74.15416
      ],
      [
        20.08799,
        74.13909
      ],
      [
        20.08507,
        74.12396
      ],
      [
        20.0823,
        74.1088
      ],
      [
        20.07306,
        74.07018
      ],
      [
        20.06346,
        74.03167
      ],
      [
        20.05322,
        73.99335
      ],
      [
        20.04212,
        73.9553
      ],
      [
        20.03009,
        73.91753
      ],
      [
        20.01721,
        73.88002
      ],
      [
        20.00368,
        73.8427
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-NSK-TRB": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99791,
        73.78588
      ],
      [
        19.99742,
        73.78527
      ],
      [
        19.99691,
        73.78466
      ],
      [
        19.99639,
        73.78407
      ],
      [
        19.99586,
        73.78348
      ],
      [
        19.99532,
        73.78292
      ],
      [
        19.99476,
        73.78236
      ],
      [
        19.9942,
        73.7818
      ],
      [
        19.99486,
        73.77619
      ],
      [
        19.99557,
        73.77059
      ],
      [
        19.99638,
        73.765
      ],
      [
        19.99731,
        73.75944
      ],
      [
        19.99838,
        73.7539
      ],
      [
        19.99957,
        73.74839
      ],
      [
        20.00086,
        73.74289
      ],
      [
        20.0022,
        73.7374
      ],
      [
        19.99667,
        73.71712
      ],
      [
        19.99095,
        73.69691
      ],
      [
        19.98489,
        73.67681
      ],
      [
        19.97838,
        73.65687
      ],
      [
        19.97139,
        73.63709
      ],
      [
        19.96395,
        73.61746
      ],
      [
        19.95617,
        73.59795
      ],
      [
        19.9482,
        73.5785
      ],
      [
        19.94639,
        73.57284
      ],
      [
        19.94462,
        73.56717
      ],
      [
        19.94296,
        73.56147
      ],
      [
        19.94143,
        73.55573
      ],
      [
        19.94004,
        73.54997
      ],
      [
        19.93877,
        73.54417
      ],
      [
        19.93761,
        73.53834
      ],
      [
        19.9365,
        73.5325
      ]
    ],
    "BUS-223": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99791,
        73.78588
      ],
      [
        19.99742,
        73.78527
      ],
      [
        19.99691,
        73.78466
      ],
      [
        19.99639,
        73.78407
      ],
      [
        19.99586,
        73.78348
      ],
      [
        19.99532,
        73.78292
      ],
      [
        19.99476,
        73.78236
      ],
      [
        19.9942,
        73.7818
      ],
      [
        19.99486,
        73.77619
      ],
      [
        19.99557,
        73.77059
      ],
      [
        19.99638,
        73.765
      ],
      [
        19.99731,
        73.75944
      ],
      [
        19.99838,
        73.7539
      ],
      [
        19.99957,
        73.74839
      ],
      [
        20.00086,
        73.74289
      ],
      [
        20.0022,
        73.7374
      ],
      [
        19.99667,
        73.71712
      ],
      [
        19.99095,
        73.69691
      ],
      [
        19.98489,
        73.67681
      ],
      [
        19.97838,
        73.65687
      ],
      [
        19.97139,
        73.63709
      ],
      [
        19.96395,
        73.61746
      ],
      [
        19.95617,
        73.59795
      ],
      [
        19.9482,
        73.5785
      ],
      [
        19.94639,
        73.57284
      ],
      [
        19.94462,
        73.56717
      ],
      [
        19.94296,
        73.56147
      ],
      [
        19.94143,
        73.55573
      ],
      [
        19.94004,
        73.54997
      ],
      [
        19.93877,
        73.54417
      ],
      [
        19.93761,
        73.53834
      ],
      [
        19.9365,
        73.5325
      ]
    ],
    "R-NSK-TRB-R": [
      [
        19.9365,
        73.5325
      ],
      [
        19.93761,
        73.53834
      ],
      [
        19.93877,
        73.54417
      ],
      [
        19.94004,
        73.54997
      ],
      [
        19.94143,
        73.55573
      ],
      [
        19.94296,
        73.56147
      ],
      [
        19.94462,
        73.56717
      ],
      [
        19.94639,
        73.57284
      ],
      [
        19.9482,
        73.5785
      ],
      [
        19.95617,
        73.59795
      ],
      [
        19.96395,
        73.61746
      ],
      [
        19.97139,
        73.63709
      ],
      [
        19.97838,
        73.65687
      ],
      [
        19.98489,
        73.67681
      ],
      [
        19.99095,
        73.69691
      ],
      [
        19.99667,
        73.71712
      ],
      [
        20.0022,
        73.7374
      ],
      [
        20.00086,
        73.74289
      ],
      [
        19.99957,
        73.74839
      ],
      [
        19.99838,
        73.7539
      ],
      [
        19.99731,
        73.75944
      ],
      [
        19.99638,
        73.765
      ],
      [
        19.99557,
        73.77059
      ],
      [
        19.99486,
        73.77619
      ],
      [
        19.9942,
        73.7818
      ],
      [
        19.99476,
        73.78236
      ],
      [
        19.99532,
        73.78292
      ],
      [
        19.99586,
        73.78348
      ],
      [
        19.99639,
        73.78407
      ],
      [
        19.99691,
        73.78466
      ],
      [
        19.99742,
        73.78527
      ],
      [
        19.99791,
        73.78588
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-224": [
      [
        19.9365,
        73.5325
      ],
      [
        19.93761,
        73.53834
      ],
      [
        19.93877,
        73.54417
      ],
      [
        19.94004,
        73.54997
      ],
      [
        19.94143,
        73.55573
      ],
      [
        19.94296,
        73.56147
      ],
      [
        19.94462,
        73.56717
      ],
      [
        19.94639,
        73.57284
      ],
      [
        19.9482,
        73.5785
      ],
      [
        19.95617,
        73.59795
      ],
      [
        19.96395,
        73.61746
      ],
      [
        19.97139,
        73.63709
      ],
      [
        19.97838,
        73.65687
      ],
      [
        19.98489,
        73.67681
      ],
      [
        19.99095,
        73.69691
      ],
      [
        19.99667,
        73.71712
      ],
      [
        20.0022,
        73.7374
      ],
      [
        20.00086,
        73.74289
      ],
      [
        19.99957,
        73.74839
      ],
      [
        19.99838,
        73.7539
      ],
      [
        19.99731,
        73.75944
      ],
      [
        19.99638,
        73.765
      ],
      [
        19.99557,
        73.77059
      ],
      [
        19.99486,
        73.77619
      ],
      [
        19.9942,
        73.7818
      ],
      [
        19.99476,
        73.78236
      ],
      [
        19.99532,
        73.78292
      ],
      [
        19.99586,
        73.78348
      ],
      [
        19.99639,
        73.78407
      ],
      [
        19.99691,
        73.78466
      ],
      [
        19.99742,
        73.78527
      ],
      [
        19.99791,
        73.78588
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-KPG-SHR": [
      [
        19.8925,
        74.4785
      ],
      [
        19.87698,
        74.4773
      ],
      [
        19.86145,
        74.47624
      ],
      [
        19.84592,
        74.47545
      ],
      [
        19.83039,
        74.47501
      ],
      [
        19.81485,
        74.47495
      ],
      [
        19.7993,
        74.47524
      ],
      [
        19.78375,
        74.4758
      ],
      [
        19.7682,
        74.4765
      ]
    ],
    "BUS-225": [
      [
        19.8925,
        74.4785
      ],
      [
        19.87698,
        74.4773
      ],
      [
        19.86145,
        74.47624
      ],
      [
        19.84592,
        74.47545
      ],
      [
        19.83039,
        74.47501
      ],
      [
        19.81485,
        74.47495
      ],
      [
        19.7993,
        74.47524
      ],
      [
        19.78375,
        74.4758
      ],
      [
        19.7682,
        74.4765
      ]
    ],
    "R-KPG-SHR-R": [
      [
        19.7682,
        74.4765
      ],
      [
        19.78372,
        74.4777
      ],
      [
        19.79925,
        74.47876
      ],
      [
        19.81478,
        74.47955
      ],
      [
        19.83031,
        74.47999
      ],
      [
        19.84585,
        74.48005
      ],
      [
        19.8614,
        74.47976
      ],
      [
        19.87695,
        74.4792
      ],
      [
        19.8925,
        74.4785
      ]
    ],
    "BUS-226": [
      [
        19.7682,
        74.4765
      ],
      [
        19.78372,
        74.4777
      ],
      [
        19.79925,
        74.47876
      ],
      [
        19.81478,
        74.47955
      ],
      [
        19.83031,
        74.47999
      ],
      [
        19.84585,
        74.48005
      ],
      [
        19.8614,
        74.47976
      ],
      [
        19.87695,
        74.4792
      ],
      [
        19.8925,
        74.4785
      ]
    ],
    "R-NSK-SPT": [
      [
        19.9984,
        73.7865
      ],
      [
        20.02417,
        73.79414
      ],
      [
        20.04999,
        73.80153
      ],
      [
        20.07592,
        73.80848
      ],
      [
        20.10198,
        73.81483
      ],
      [
        20.1282,
        73.82055
      ],
      [
        20.15454,
        73.82568
      ],
      [
        20.18099,
        73.83036
      ],
      [
        20.2075,
        73.8348
      ],
      [
        20.23104,
        73.84219
      ],
      [
        20.2545,
        73.8498
      ],
      [
        20.2778,
        73.8578
      ],
      [
        20.30091,
        73.86632
      ],
      [
        20.3238,
        73.8754
      ],
      [
        20.3465,
        73.885
      ],
      [
        20.36904,
        73.89499
      ],
      [
        20.3915,
        73.9052
      ]
    ],
    "BUS-227": [
      [
        19.9984,
        73.7865
      ],
      [
        20.02417,
        73.79414
      ],
      [
        20.04999,
        73.80153
      ],
      [
        20.07592,
        73.80848
      ],
      [
        20.10198,
        73.81483
      ],
      [
        20.1282,
        73.82055
      ],
      [
        20.15454,
        73.82568
      ],
      [
        20.18099,
        73.83036
      ],
      [
        20.2075,
        73.8348
      ],
      [
        20.23104,
        73.84219
      ],
      [
        20.2545,
        73.8498
      ],
      [
        20.2778,
        73.8578
      ],
      [
        20.30091,
        73.86632
      ],
      [
        20.3238,
        73.8754
      ],
      [
        20.3465,
        73.885
      ],
      [
        20.36904,
        73.89499
      ],
      [
        20.3915,
        73.9052
      ]
    ],
    "R-NSK-SPT-R": [
      [
        20.3915,
        73.9052
      ],
      [
        20.36904,
        73.89499
      ],
      [
        20.3465,
        73.885
      ],
      [
        20.3238,
        73.8754
      ],
      [
        20.30091,
        73.86632
      ],
      [
        20.2778,
        73.8578
      ],
      [
        20.2545,
        73.8498
      ],
      [
        20.23104,
        73.84219
      ],
      [
        20.2075,
        73.8348
      ],
      [
        20.18099,
        73.83036
      ],
      [
        20.15454,
        73.82568
      ],
      [
        20.1282,
        73.82055
      ],
      [
        20.10198,
        73.81483
      ],
      [
        20.07592,
        73.80848
      ],
      [
        20.04999,
        73.80153
      ],
      [
        20.02417,
        73.79414
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-228": [
      [
        20.3915,
        73.9052
      ],
      [
        20.36904,
        73.89499
      ],
      [
        20.3465,
        73.885
      ],
      [
        20.3238,
        73.8754
      ],
      [
        20.30091,
        73.86632
      ],
      [
        20.2778,
        73.8578
      ],
      [
        20.2545,
        73.8498
      ],
      [
        20.23104,
        73.84219
      ],
      [
        20.2075,
        73.8348
      ],
      [
        20.18099,
        73.83036
      ],
      [
        20.15454,
        73.82568
      ],
      [
        20.1282,
        73.82055
      ],
      [
        20.10198,
        73.81483
      ],
      [
        20.07592,
        73.80848
      ],
      [
        20.04999,
        73.80153
      ],
      [
        20.02417,
        73.79414
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "R-NSK-SNR": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95463,
        73.8341
      ],
      [
        19.95506,
        73.8338
      ],
      [
        19.95549,
        73.83349
      ],
      [
        19.9559,
        73.83317
      ],
      [
        19.95631,
        73.83284
      ],
      [
        19.95671,
        73.8325
      ],
      [
        19.95711,
        73.83215
      ],
      [
        19.9575,
        73.8318
      ],
      [
        19.94532,
        73.85418
      ],
      [
        19.93294,
        73.87643
      ],
      [
        19.92019,
        73.89845
      ],
      [
        19.90695,
        73.92016
      ],
      [
        19.89319,
        73.94155
      ],
      [
        19.87894,
        73.96263
      ],
      [
        19.86432,
        73.98348
      ],
      [
        19.8495,
        74.0042
      ]
    ],
    "BUS-229": [
      [
        19.9984,
        73.7865
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95463,
        73.8341
      ],
      [
        19.95506,
        73.8338
      ],
      [
        19.95549,
        73.83349
      ],
      [
        19.9559,
        73.83317
      ],
      [
        19.95631,
        73.83284
      ],
      [
        19.95671,
        73.8325
      ],
      [
        19.95711,
        73.83215
      ],
      [
        19.9575,
        73.8318
      ],
      [
        19.94532,
        73.85418
      ],
      [
        19.93294,
        73.87643
      ],
      [
        19.92019,
        73.89845
      ],
      [
        19.90695,
        73.92016
      ],
      [
        19.89319,
        73.94155
      ],
      [
        19.87894,
        73.96263
      ],
      [
        19.86432,
        73.98348
      ],
      [
        19.8495,
        74.0042
      ]
    ],
    "R-NSK-SNR-R": [
      [
        19.8495,
        74.0042
      ],
      [
        19.86432,
        73.98348
      ],
      [
        19.87894,
        73.96263
      ],
      [
        19.89319,
        73.94155
      ],
      [
        19.90695,
        73.92016
      ],
      [
        19.92019,
        73.89845
      ],
      [
        19.93294,
        73.87643
      ],
      [
        19.94532,
        73.85418
      ],
      [
        19.9575,
        73.8318
      ],
      [
        19.95711,
        73.83215
      ],
      [
        19.95671,
        73.8325
      ],
      [
        19.95631,
        73.83284
      ],
      [
        19.9559,
        73.83317
      ],
      [
        19.95549,
        73.83349
      ],
      [
        19.95506,
        73.8338
      ],
      [
        19.95463,
        73.8341
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ],
    "BUS-230": [
      [
        19.8495,
        74.0042
      ],
      [
        19.86432,
        73.98348
      ],
      [
        19.87894,
        73.96263
      ],
      [
        19.89319,
        73.94155
      ],
      [
        19.90695,
        73.92016
      ],
      [
        19.92019,
        73.89845
      ],
      [
        19.93294,
        73.87643
      ],
      [
        19.94532,
        73.85418
      ],
      [
        19.9575,
        73.8318
      ],
      [
        19.95711,
        73.83215
      ],
      [
        19.95671,
        73.8325
      ],
      [
        19.95631,
        73.83284
      ],
      [
        19.9559,
        73.83317
      ],
      [
        19.95549,
        73.83349
      ],
      [
        19.95506,
        73.8338
      ],
      [
        19.95463,
        73.8341
      ],
      [
        19.9542,
        73.8344
      ],
      [
        19.95887,
        73.83106
      ],
      [
        19.96351,
        73.82768
      ],
      [
        19.96808,
        73.82422
      ],
      [
        19.97258,
        73.82066
      ],
      [
        19.97698,
        73.817
      ],
      [
        19.98131,
        73.81323
      ],
      [
        19.98557,
        73.80938
      ],
      [
        19.9898,
        73.8055
      ],
      [
        19.99073,
        73.80306
      ],
      [
        19.99168,
        73.80063
      ],
      [
        19.99267,
        73.79822
      ],
      [
        19.99372,
        73.79583
      ],
      [
        19.99482,
        73.79347
      ],
      [
        19.99598,
        73.79113
      ],
      [
        19.99718,
        73.78881
      ],
      [
        19.9984,
        73.7865
      ]
    ]
  },
  "schedules": [
    {
      "time": "06:00 AM",
      "busNumber": "MH 15 BT 2001",
      "destination": "Yeola Bus Stand",
      "type": "MSRTC Ordinary",
      "status": "Passed"
    },
    {
      "time": "06:15 AM",
      "busNumber": "MH 15 BT 2003",
      "destination": "Lasalgaon",
      "type": "Semi-Luxury",
      "status": "Passed"
    },
    {
      "time": "06:30 AM",
      "busNumber": "MH 15 BT 2009",
      "destination": "Pune Shivajinagar",
      "type": "Shivshahi AC",
      "status": "Departed"
    },
    {
      "time": "07:00 AM",
      "busNumber": "MH 15 BT 2011",
      "destination": "Dhule Central",
      "type": "MSRTC Express",
      "status": "Departed"
    },
    {
      "time": "07:30 AM",
      "busNumber": "MH 15 BT 2019",
      "destination": "Mumbai Dadar Asiad",
      "type": "Shivshahi AC",
      "status": "Departed"
    },
    {
      "time": "08:00 AM",
      "busNumber": "MH 15 BT 2015",
      "destination": "Shirdi Saibaba",
      "type": "Shivshahi AC",
      "status": "Departed"
    },
    {
      "time": "08:30 AM",
      "busNumber": "MH 15 BT 2007",
      "destination": "Mumbai Dadar (from Yeola)",
      "type": "Asiad Express",
      "status": "On Time"
    },
    {
      "time": "09:00 AM",
      "busNumber": "MH 15 BT 2021",
      "destination": "Chhatrapati Sambhajinagar",
      "type": "Shivshahi AC",
      "status": "On Time"
    },
    {
      "time": "09:15 AM",
      "busNumber": "MH 15 BT 2023",
      "destination": "Trimbakeshwar",
      "type": "Ordinary",
      "status": "Approaching"
    },
    {
      "time": "09:30 AM",
      "busNumber": "MH 15 BT 2025",
      "destination": "Saptashrungi Gad (Vani)",
      "type": "Lal Pari",
      "status": "Approaching"
    },
    {
      "time": "09:45 AM",
      "busNumber": "MH 15 BT 2005",
      "destination": "Kopargaon (from Malegaon)",
      "type": "Ordinary",
      "status": "Approaching"
    },
    {
      "time": "10:00 AM",
      "busNumber": "MH 15 BT 2013",
      "destination": "Mumbai Dadar (from Pune)",
      "type": "Shivshahi AC",
      "status": "Boarding"
    },
    {
      "time": "10:30 AM",
      "busNumber": "MH 15 BT 2017",
      "destination": "Pune (from Shirdi)",
      "type": "Shivshahi AC",
      "status": "Scheduled"
    },
    {
      "time": "11:00 AM",
      "busNumber": "MH 15 BT 2027",
      "destination": "Sinnar Industrial",
      "type": "Ordinary",
      "status": "Scheduled"
    },
    {
      "time": "11:30 AM",
      "busNumber": "MH 15 BT 2002",
      "destination": "Nashik CBS (from Yeola)",
      "type": "MSRTC Ordinary",
      "status": "Scheduled"
    },
    {
      "time": "12:00 PM",
      "busNumber": "MH 15 BT 2010",
      "destination": "Nashik CBS (from Pune)",
      "type": "Shivshahi AC",
      "status": "Scheduled"
    },
    {
      "time": "12:30 PM",
      "busNumber": "MH 15 BT 2020",
      "destination": "Nashik CBS (from Mumbai)",
      "type": "Shivshahi AC",
      "status": "Scheduled"
    },
    {
      "time": "01:00 PM",
      "busNumber": "MH 15 BT 2012",
      "destination": "Nashik CBS (from Dhule)",
      "type": "MSRTC Express",
      "status": "Scheduled"
    }
  ],
  "communityReports": [
    {
      "id": "REP-01",
      "busNumber": "MH 15 BT 2009",
      "route": "Nashik CBS - Pune Shivajinagar",
      "reportType": "Road Condition",
      "message": "Traffic running smooth near Sangamner bypass. AC cooling optimal.",
      "timestamp": "14 mins ago",
      "upvotes": 22,
      "status": "Verified"
    },
    {
      "id": "REP-02",
      "busNumber": "MH 15 BT 2001",
      "route": "Nashik CBS - Yeola Paithani City",
      "reportType": "Stop Information",
      "message": "Bus halted at Vinchur Phata junction for Lasalgaon transfer connection.",
      "timestamp": "8 mins ago",
      "upvotes": 16,
      "status": "Verified"
    },
    {
      "id": "REP-03",
      "busNumber": "MH 15 BT 2019",
      "route": "Nashik CBS - Mumbai Dadar",
      "reportType": "Thal Ghat Advisory",
      "message": "Igatpuri - Kasara ghat descent is clear and flowing on time.",
      "timestamp": "5 mins ago",
      "upvotes": 29,
      "status": "Verified"
    }
  ],
  "adminStats": {
    "district": "Maharashtra State Transit Network (MSRTC Central Division)",
    "activeBusesCount": 30,
    "onTimePercentage": "96.2%",
    "activeQrStops": 45,
    "dailyPassengers": "385,000+",
    "delayedRoutesCount": 2,
    "mostDelayedRoutes": [
      {
        "route": "Pune Swargate - Mumbai Dadar",
        "avgDelay": "8 mins"
      },
      {
        "route": "Yeola - Mumbai Dadar",
        "avgDelay": "6 mins"
      }
    ],
    "mostCrowdedStops": [
      {
        "name": "Nashik CBS (Thakkar Bazar)",
        "peakPassengers": "1,850 / hr",
        "lat": 19.9984,
        "lng": 73.7865
      },
      {
        "name": "Pune Shivajinagar Bus Stand",
        "peakPassengers": "2,400 / hr",
        "lat": 18.5315,
        "lng": 73.8512
      },
      {
        "name": "Mumbai Dadar Asiad Stand",
        "peakPassengers": "2,100 / hr",
        "lat": 19.0178,
        "lng": 72.8478
      },
      {
        "name": "Yeola Bus Stand",
        "peakPassengers": "820 / hr",
        "lat": 20.0424,
        "lng": 74.4891
      },
      {
        "name": "Shirdi Saibaba Bus Stand",
        "peakPassengers": "1,650 / hr",
        "lat": 19.7682,
        "lng": 74.4765
      }
    ]
  }
};

// Support CommonJS export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SMART_ST_DATA;
}
