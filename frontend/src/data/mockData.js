export const mockData = {
  user: {
    name: "Arjun Verma",
    karwanId: "KWN-IND-8829-DL",
    avatar: "/images/img_6ce6d3023e6b.jpg",
    email: "arjun.verma@example.com",
    phone: "+91 98765 43210",
    kycStatus: "Verified",
    digiLockerLinked: true,
    tripsCompleted: 14,
    trustContributionScore: 98,
    activeTrip: {
      id: "TRP-2026-RAJ",
      destination: "Rajasthan Heritage Circuit",
      currentCity: "Jaipur",
      nextStop: "Amber Fort & Jantar Mantar",
      dateRange: "Oct 28 - Nov 04, 2026",
      status: "In Progress",
      autoHealActive: true,
      lastUpdate: "12 mins ago"
    }
  },
  
  routesCatalog: [
    {
      category: "Landing & Core",
      items: [
        { name: "Landing (Hero & Testimonials)", path: "/", id: "931ebb8140734d9482fbbce7e998f71f" },
        { name: "Home (Empty / New Trip)", path: "/home", id: "7b628e06db8f48fe982e33b2744b67e5" },
        { name: "404 Not Found", path: "/404", id: "2d48569aeeab4112a5da7ba083b68176" },
      ]
    },
    {
      category: "Auth Flow",
      items: [
        { name: "Immersive Login", path: "/auth/immersive-login", id: "8091dcc7723045cf8985961abf95bee9" },
        { name: "Standard Login", path: "/auth/login", id: "af66b242359048bb9fd5aeaded794b96" },
        { name: "Role Selection", path: "/auth/role-selection", id: "3aeb915323374fc8a08d44c9362a2704" },
        { name: "Signup Step 1", path: "/auth/signup-step-1", id: "5ce3b5f8511143d98eb415cd8a0fc895" },
        { name: "Signup Step 2 (DigiLocker)", path: "/auth/signup-step-2", id: "dabed8bb75404028992277b550a0c261" },
        { name: "OTP Verification", path: "/auth/otp", id: "ec9df051594f4caa9ee5b9396706f794" },
      ]
    },
    {
      category: "Trip Planning & Experience",
      items: [
        { name: "Plan Trip - Route", path: "/trip/plan/route", id: "01a3480e62984115ae44a940b1eb04e3" },
        { name: "Plan Trip - Preferences", path: "/trip/plan/preferences", id: "41c54c9b5a2c48d5acbe9c94eaa5ad16" },
        { name: "Plan Trip - Review Refined", path: "/trip/plan/review", id: "3fc1f40e6e4e455a8c7afc5e069e18b7" },
        { name: "Adaptive Itinerary (Auto-Heal)", path: "/trip/itinerary", id: "2b83e6d2d7d54ef897b22ba1acefd1ff" },
        { name: "LiveTrail Transit Dashboard", path: "/trip/livetrail", id: "daca15712ca1471aa72a5b5bea1e1ab6" },
        { name: "TrustRadar Dashboard", path: "/trip/trustradar", id: "4c44889ddbd54d60b444fd645a9e9bbf" },
        { name: "Trip Completion & Feedback", path: "/trip/complete", id: "575c8a57a8754a96a3cf6187fb356460" },
      ]
    },
    {
      category: "Ground Truth Directory",
      items: [
        { name: "Ground Truth Directory", path: "/directory", id: "4bcc0b9838fe40aca61092b819e5270d" },
        { name: "Pine Ridge Cabin (Stay)", path: "/directory/stays/pine-ridge-cabin", id: "da59b22755b64c218ad1d0e2575cfe0f" },
        { name: "The Heritage Haveli (Stay)", path: "/directory/stays/heritage-haveli", id: "e9b1da3269654a3388bc6621e3d2f28b" },
        { name: "Mewar Palace Villa (Stay)", path: "/directory/stays/mewar-palace-villa", id: "a968a791bff24660b8c5b5a48006ecc9" },
        { name: "Rajesh Gupta (Guide Details)", path: "/directory/guides/rajesh-gupta", id: "35705193b2f6425c8f4f93bd3a918771" },
        { name: "Verified Vendor Details", path: "/directory/vendors/details", id: "b70790ae8aec4c2a95ef4dc3a178fce1" },
        { name: "Market Square Souvenirs", path: "/directory/vendors/market-square-souvenirs", id: "87a59c96cb384cb691e48397808dbd83" },
      ]
    },
    {
      category: "Dashboards & User",
      items: [
        { name: "Traveller Dashboard", path: "/dashboard", id: "e35e541363594a70aa6aab20948b9ba7" },
        { name: "User Profile (KARWAN ID)", path: "/profile", id: "d5f8daeb63dc4328abd1ed22f6e1fac6" },
        { name: "Main Settings", path: "/settings", id: "33416955f2894571a4a5bce751630f99" },
        { name: "Privacy & Verification Settings", path: "/settings/privacy", id: "f918d220469043beabf3c3c4acc54313" },
        { name: "Notifications Settings", path: "/settings/notifications", id: "f483a67e4c9240a2a317264c27602993" },
        { name: "Help & Support", path: "/settings/help", id: "f2997b91c3554c2e9f15a94de604b56b" },
        { name: "Notifications Hub", path: "/notifications", id: "21073382e643497397df97f5077df154" },
      ]
    },
    {
      category: "Partner Portal",
      items: [
        { name: "Partner Dashboard", path: "/partner/dashboard", id: "f42f7f8b4e6d422992fbbb3b40ac93e4" },
        { name: "Partner KYC - Step 1", path: "/partner/kyc/step-1", id: "3b59a460bf4c40df8ea71144947c5221" },
        { name: "Partner KYC - Step 2 (Docs)", path: "/partner/kyc/step-2", id: "cd3a1736037d46c383342aa83281145a" },
        { name: "Partner KYC - Step 3 (Review)", path: "/partner/kyc/step-3", id: "5f4cae2f30cd44b69acdb556655292ed" },
        { name: "Edit Listing (Provider)", path: "/partner/listing/edit", id: "ac4a42c1433c4884983bb0b09a49e3dc" },
      ]
    }
  ]
};

