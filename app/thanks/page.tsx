"use client";
import { useEffect } from "react";
import { getStoredUtms } from "@/lib/utm";
import Link from "next/link";

export default function ThanksPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. תיקון למובייל - טס לראש הדף בשנייה שהדף נטען
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      const utms = typeof getStoredUtms === "function" ? getStoredUtms() : null;

      // 2. דיווח לפייסבוק
      if ((window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Form_Lead",
          utm_source: utms?.utm_source || "direct",
        });
      }

      // 3. דיווח לגוגל - כולל כל ה-UTM שצריך
      if ((window as any).gtag) {
        (window as any).gtag("event", "form_lead", {
          method: "form",
          utm_source: utms?.utm_source || "direct",
          utm_medium: utms?.utm_medium || "none",
          utm_campaign: utms?.utm_campaign || "none",
          utm_content: utms?.utm_content || "none",
          utm_term: utms?.utm_term || "none",
        });
      }
    }
  }, []);

  return (
    <div className="min-h-[90vh] bg-[#111] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full border border-[#333] bg-[#1A1A1A] p-10 rounded-[32px] shadow-2xl">
        <div className="w-16 h-16 bg-[#A07730]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#A07730]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* כותרת נעולה לשורה אחת */}
        <h1 className="text-[21px] xs:text-[24px] md:text-4xl font-black text-white mb-4 tracking-tight leading-tight whitespace-nowrap">
          הפרטים התקבלו בהצלחה
        </h1>

        <div className="w-12 h-[3px] bg-[#A07730] mx-auto mb-8"></div>

        <div className="text-lg text-[#A3A3A3] mb-8 space-y-4 font-medium leading-relaxed">
          <p>תודה על הפנייה.</p>
          <p>אני אעבור על המידע ששלחת ואחזור אליך בהקדם לשיחה קצרה.</p>
        </div>

        {/* שורת יציאה מהאתר */}
        <p className="text-sm text-[#666] mb-8 font-bold italic">
          ניתן לסגור את האתר בבטחה כעת.
        </p>

        <Link
          href="/"
          className="inline-block w-full bg-[#A07730] text-white font-black py-4 px-10 rounded-2xl shadow-lg hover:bg-[#8A6528] transition-all active:scale-[0.98]"
        >
          חזרה לאתר
        </Link>
      </div>
    </div>
  );
}
