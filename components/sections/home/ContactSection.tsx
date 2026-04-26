"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sendContactForm } from "@/app/actions"; // שים לב לנתיב, אם ה-actions ב-app
import { getStoredUtms } from "@/lib/utm";

export default function ContactSection() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{
    success?: boolean;
    error?: string;
    fieldErrors?: { name?: string; phone?: string; message?: string };
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(formElement);
    const utms = getStoredUtms();
    if (utms) formData.append("utm_data", JSON.stringify(utms));

    const result = await sendContactForm(formData);

    setIsPending(false);
    setStatus(result);

    if (result?.success === true) {
      if (typeof window !== "undefined") {
        // דיווח לפייסבוק
        if ((window as any).fbq) {
          (window as any).fbq("track", "Lead", {
            content_name: "Contact_Form",
            utm_source: utms?.utm_source || "direct",
          });
        }
        // דיווח לגוגל
        if ((window as any).gtag) {
          (window as any).gtag("event", "form_lead", {
            method: "form",
            content_name: "Contact_Form",
            utm_source: utms?.utm_source || "direct",
          });
        }
      }

      // המתנה של חצי שנייה כדי לוודא שהנתונים נשלחו
      setTimeout(() => {
        // איפוס מיקום הגלילה לראש הדף
        window.scrollTo(0, 0);
        // מעבר לדף תודה
        router.push("/thanks");
      }, 500);
    }
  };

  return (
    <section
      id="contact"
      className="pt-12 pb-20 md:pt-24 md:pb-32 px-4 md:px-6 bg-white"
      dir="rtl"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-10 text-center">
          <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-full h-[1px] bg-[#A07730]/60"></span>
            שלב ראשון
          </span>
          <div className="relative inline-block">
            <h2 className="text-[30px] md:text-[48px] font-black text-[#1A1A1A] leading-tight tracking-tighter">
              איך מתחילים?
            </h2>
            <div className="absolute -bottom-2 md:-bottom-3 right-0 w-12 h-[2px] md:h-[2.5px] bg-[#A07730]"></div>
          </div>
        </div>

        <p className="text-[#4A4A4A] text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          אני בוחר את 5 הפרויקטים האלה בקפידה כדי לתת 100% פוקוס לכל לקוח. תשאיר
          פרטים, נתאם שיחה קצרה ונבין אם אנחנו יוצאים לדרך.
        </p>

        <div className="bg-[#F9F9F9] px-4 py-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-2xl shadow-[#A07730]/5 text-right transition-all">
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            className="flex flex-col gap-5"
          >
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input
                name="fax_number"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-right">
              {/* שם מלא */}
              <div className="w-full">
                <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                  שם מלא
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="ישראל ישראלי"
                  className={`w-full bg-white border ${
                    status?.fieldErrors?.name
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right`}
                />
                {status?.fieldErrors?.name && (
                  <p className="text-red-600 text-[11px] font-bold mt-1 mr-1">
                    {status.fieldErrors.name}
                  </p>
                )}
              </div>

              {/* טלפון */}
              <div className="w-full">
                <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                  טלפון
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="050-0000000"
                  className={`w-full bg-white border ${
                    status?.fieldErrors?.phone
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right`}
                />
                {status?.fieldErrors?.phone && (
                  <p className="text-red-600 text-[11px] font-bold mt-1 mr-1">
                    {status.fieldErrors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* הודעה */}
            <div className="w-full text-right">
              <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                ספר לי קצת על העסק
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="כמה מילים על העסק ומה המטרה שלך מהדף..."
                className={`w-full bg-white border ${
                  status?.fieldErrors?.message
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right resize-none`}
              ></textarea>
              {status?.fieldErrors?.message && (
                <p className="text-red-600 text-[11px] font-bold mt-1 mr-1">
                  {status.fieldErrors.message}
                </p>
              )}
            </div>

            {/* צ'קבוקס אישור תנאים */}
            <div className="flex items-center gap-3 px-1">
              <input
                name="privacy"
                type="checkbox"
                id="privacy"
                required
                className="w-4 h-4 accent-[#A07730] cursor-pointer shrink-0"
              />
              <label
                htmlFor="privacy"
                className="text-[11px] md:text-[12px] text-[#4A4A4A] cursor-pointer leading-tight select-none"
              >
                אני מאשר/ת קבלת עדכונים מקצועיים בכפוף ל-
                <Link
                  href="/privacy"
                  className="text-[#A07730] underline font-bold hover:text-[#8A6528] mx-1"
                >
                  מדיניות הפרטיות
                </Link>
              </label>
            </div>

            {/* כפתור שליחה */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#A07730] hover:bg-[#8A6528] disabled:opacity-70 text-white font-black py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <span>{isPending ? "שולח..." : "שלח ובוא נבדוק התאמה"}</span>
              {!isPending && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>

            {status?.error && (
              <p className="text-red-600 text-[13px] font-bold text-center mt-2">
                {status.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
