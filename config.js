// ==========================================
// 🎛️ PEERTUBE - MASTER CONFIG FILE
// ==========================================
// Yeh file poore project ka control panel hai.
// Yahan se sab settings manage karo.

const CONFIG = {
  
  // ===== BACKEND =====
  backend: {
    scriptUrl: "https://script.google.com/macros/s/AKfycbykj3nN7s1C4eviFOiQVwK4w_kPZHuo0kcwmj9_fVGQIoLnjZOQ93WAYKFK04wrGBY-2w/exec"
  },
  
  // ===== VIDEO =====
  video: {
    baseUrl: "videos/",              // Future: Cloudflare R2 ka URL
    autoPlay: true,
    muted: true,
    loop: true,
    minWatchTimeForView: 3,
    watchTimeMilestones: [3, 10, 30, 60]
  },
  
  // ===== FEATURES =====
  features: {
    reels: true,
    login: true,
    comments: true,
    likes: true,
    bookmarks: true,
    share: true,
    quiz: false,          // Future
    notes: false,         // Future
    leaderboard: false,
    premium: false
  },
  
  // ===== ADS =====
  ads: {
    enabled: false,
    adsenseClientId: "",
    sponsoredInterval: 5
  },
  
  // ===== UI =====
  ui: {
    theme: "dark",
    primaryColor: "#ff0055",
    showLoginButton: true
  },
  
  // ===== FIREBASE =====
  firebase: {
    enabled: true
  },
  
  // ===== ANALYTICS =====
  analytics: {
    trackWatchTime: true,
    trackTrafficSource: true,
    trackDeviceType: true,
    trackSessionId: true,
    sessionTimeout: 30
  },
  
  // ===== APP INFO =====
  app: {
    name: "PeerTube",
    tagline: "Daily Current Affairs for Students",
    version: "1.0.0"
  }
};

Object.freeze(CONFIG);
