export const captureUtms = () => {
  if (typeof window === "undefined") return;

  // שימוש ב-localStorage כדי שהנתונים יישמרו גם אם הדפדפן נסגר
  const params = new URLSearchParams(window.location.search);
  const utmData: Record<string, string> = {};

  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
  ];

  let hasData = false;
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      utmData[key] = value;
      hasData = true;
    }
  });

  if (hasData) {
    utmData["captured_at"] = new Date().toISOString();
    utmData["referrer"] = document.referrer || "direct";
    // שומרים ב-localStorage ולא ב-session
    localStorage.setItem("nuvella_utm", JSON.stringify(utmData));
  }
};

export const getStoredUtms = () => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("nuvella_utm");
  return stored ? JSON.parse(stored) : null;
};
