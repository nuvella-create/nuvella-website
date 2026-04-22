// lib/utm.ts

export const captureUtms = () => {
  if (typeof window === "undefined") return;

  // First-touch: אם כבר יש נתונים ב-session, לא דורסים אותם
  const existing = sessionStorage.getItem("nuvella_utm");
  if (existing) return;

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
    sessionStorage.setItem("nuvella_utm", JSON.stringify(utmData));
  }
};

export const getStoredUtms = () => {
  if (typeof window === "undefined") return null;
  const stored = sessionStorage.getItem("nuvella_utm");
  return stored ? JSON.parse(stored) : null;
};
