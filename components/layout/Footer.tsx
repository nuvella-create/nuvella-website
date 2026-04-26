"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getStoredUtms } from "@/lib/utm";
import { usePathname } from "next/navigation";
import { sendContactForm } from "@/app/actions";

const Footer = () => {
  const pathname = usePathname();
  // ניהול המצב של הפופ-אפ והשם של הליד
  const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
  const [visitorName, setVisitorName] = useState("");

  return (
    <footer className="bg-[#1A1A1A] py-10 px-6 border-t border-[#333]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* 1. לוגו - תמיד ראשון מימין */}
        <div className="order-1">
          <Link
            href="/#top"
            className="transition-transform hover:scale-105 block"
          >
            <Image
              src="/images/hero-2.webp"
              alt="Nuvella Digital - ניהול קמפיינים ממומנים, בניית דפי נחיתה ופתרונות שיווק לעסקים"
              width={160}
              height={58}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* 2. עמודי האתר - ממוקמים במרכז */}
        <nav className="order-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-bold text-[#A3A3A3]">
          <Link href="/#top" className="hover:text-[#A07730] transition-colors">
            דף הבית
          </Link>
          <span className="hidden md:inline opacity-20">|</span>
          <Link
            href="/privacy"
            className="hover:text-[#A07730] transition-colors"
          >
            מדיניות פרטיות
          </Link>
          <span className="hidden md:inline opacity-20">|</span>
          <Link
            href="/accessibility"
            className="hover:text-[#A07730] transition-colors"
          >
            הצהרת נגישות
          </Link>
        </nav>

        {/* 3. הטלפון המפוצל - פונקציונליות מותאמת לדף */}
        <div className="order-3">
          {/* תצוגת מובייל לחיצה: משופרת עדינה */}
          {pathname !== "/thanks" && (
            <button
              onClick={() => setIsPhonePopupOpen(true)}
              dir="ltr"
              className="flex md:hidden items-center gap-3 py-3 px-7 bg-[#2A2A2A] border border-[#A07730]/30 rounded-full active:scale-95 transition-all shadow-md"
            >
              <div className="flex items-center justify-center bg-[#A07730] p-1.5 rounded-full">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-base font-black text-white">
                053-973-6329
              </span>
            </button>
          )}

          {/* תצוגה סטטית (לא לחיצה): דסקטופ תמיד נשאר מקורי 100% */}
          <div
            dir="ltr"
            className={`${pathname === "/thanks" ? "flex" : "hidden md:flex"} items-center gap-3 py-2.5 px-6 bg-[#222] border border-[#333] rounded-full cursor-default`}
          >
            <div className="flex items-center justify-center bg-[#A07730] p-1.5 rounded-full">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-base font-black text-white">
              053-973-6329
            </span>
          </div>
        </div>

        {/* 4. זכויות שמורות - תיקון המרכוז בדסקטופ */}
        <div className="order-4 flex flex-col items-center md:items-center text-center">
          <p
            className="text-[14px] font-bold text-white opacity-90 tracking-wide"
            dir="ltr"
          >
            Nuvella Digital 2026 ©
          </p>
          <p className="text-[12px] text-[#888] font-medium mt-0.5">
            כל הזכויות שמורות
          </p>
        </div>
      </div>

      {/* פופ-אפ איסוף שם - קופץ רק במובייל אחרי לחיצה על הטלפון */}
      {isPhonePopupOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-[#1A1A1A] text-lg font-bold text-center mb-2">
              רגע לפני שמחייגים...
            </h3>
            <p className="text-[#666] text-sm text-center mb-5 font-medium">
              איך קוראים לך? (שאדע לחזור במידת הצורך)
            </p>

            <input
              type="text"
              placeholder="השם שלך"
              maxLength={30}
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              /* שיניתי מ-mb-4 ל-mb-8 בשביל מרווח כפול ונוח יותר */
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 text-[#1A1A1A] text-right outline-none focus:border-[#A07730] transition-all mb-8 text-base"
              autoFocus
            />

            <div className="flex gap-3">
              <button
                onClick={() => setIsPhonePopupOpen(false)}
                className="flex-1 py-3 text-[#A3A3A3] text-sm font-bold"
              >
                ביטול
              </button>
              <button
                onClick={async () => {
                  // הוספת async כאן
                  // שימוש בפונקציה האחידה במקום גישה ישירה לזיכרון
                  const utms =
                    typeof getStoredUtms === "function"
                      ? getStoredUtms()
                      : null;

                  // דיווח לפייסבוק
                  if (typeof window !== "undefined" && (window as any).fbq) {
                    (window as any).fbq("track", "Lead", {
                      content_name: "Phone_Click",
                      user_name: visitorName,
                      utm_source: utms?.utm_source || "direct",
                      utm_medium: utms?.utm_medium || "none",
                      utm_campaign: utms?.utm_campaign || "none",
                    });
                  }

                  // דיווח לגוגל
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "generate_lead", {
                      method: "phone",
                      user_name: visitorName,
                      utm_source: utms?.utm_source || "direct",
                      utm_medium: utms?.utm_medium || "none",
                      utm_campaign: utms?.utm_campaign || "none",
                    });
                  }

                  // שליחת מייל מודיעין לאופיס בלבד
                  const phoneData = new FormData();
                  phoneData.append("name", visitorName || "גולש טלפון");
                  phoneData.append("phone", "0539736329");
                  phoneData.append("lead_type", "שיחת טלפון (פוטר)");
                  phoneData.append("utm_data", JSON.stringify(utms));

                  // מחכים שהמייל יישלח לפני החיוג
                  await sendContactForm(phoneData);

                  // ביצוע החיוג בפועל וסגירת הפופ-אפ
                  window.location.href = "tel:0539736329";
                  setIsPhonePopupOpen(false);
                }}
                className="flex-1 bg-[#A07730] hover:bg-[#8A6528] text-white font-black py-4 rounded-xl transition-all"
              >
                התקשר עכשיו
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
