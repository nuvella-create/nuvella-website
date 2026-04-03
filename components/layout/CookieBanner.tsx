"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
    // שליחת איתות לשאר האתר שהקוקיז אושרו
    window.dispatchEvent(new Event("cookie-accepted"));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#F5F5F2] border-t border-zinc-200 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[9999]">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        dir="rtl"
      >
        <div className="flex flex-col gap-1 text-center md:text-right">
          <h3 className="text-sm font-bold text-zinc-900">
            הודעת עוגיות (Cookies)
          </h3>
          <p className="text-[13px] text-zinc-600 leading-relaxed">
            אנו משתמשים בקוקיז כדי לשפר את חווית הגלישה שלך באתר. המשך הגלישה
            מהווה הסכמה לשימוש זה.
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={acceptCookies}
            className="flex-1 md:flex-none bg-[#A67C37] text-white text-xs font-bold py-3.5 px-8 rounded-xl hover:bg-[#8E6A2F] transition-all duration-200"
          >
            אני מסכים/ה
          </button>
          <button
            onClick={acceptCookies}
            className="flex-1 md:flex-none bg-white text-zinc-600 text-xs font-medium py-3.5 px-8 rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-all duration-200"
          >
            רק הכרחיות
          </button>
        </div>
      </div>
    </div>
  );
}
