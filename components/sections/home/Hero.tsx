import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden font-heebo py-12 md:py-20 bg-white">
      {/* תמונת רקע - דסקטופ */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/img-desktop.webp"
          alt="נויבלה דיגיטל - פתרונות שיווק, בניית דפי נחיתה וניהול קמפיינים לעסקים"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* תמונת רקע - מובייל */}
      <div className="block md:hidden absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/img-mobile.webp"
          alt="נויבלה דיגיטל - פתרונות שיווק, בניית דפי נחיתה וניהול קמפיינים לעסקים"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* שכבת הגנה (Overlay) */}
      <div className="absolute inset-0 bg-white/20 z-[1] pointer-events-none" />

      {/* התוכן של הסקשן */}
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center px-6">
        {/* Badge Pill */}
        <div className="flex items-center gap-4 bg-[#FAF5EB]/90 border border-[#E8D5A8] px-5 py-2 rounded-full mb-8 shadow-sm backdrop-blur-sm">
          <span className="text-[#A07730] text-sm font-bold leading-none">
            נותרו 3 מקומות מתוך 5
          </span>
          <div className="flex gap-1.5" dir="ltr">
            <div className="w-2.5 h-2.5 rounded-full border border-[#A07730]"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-[#A07730]"></div>
            <div className="w-2.5 h-2.5 rounded-full border border-[#A07730]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#A07730]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#A07730]"></div>
          </div>
        </div>

        {/* הכותרת (H1) */}
        <h1 className="text-[5.8vw] md:text-6xl font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight px-4 text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)] w-full">
          <span className="block whitespace-nowrap">
            מחפש 5 בעלי עסקים רציניים
          </span>
          <span className="block whitespace-nowrap bg-gradient-to-r from-[#A07730] via-[#E7C58A] to-[#A07730] bg-clip-text text-transparent animate-gold-breath font-black">
            לחודש התנסות ללא דמי ניהול
          </span>
        </h1>

        {/* הפסקה השיווקית */}
        <p className="text-[15px] md:text-xl text-[#1A1A1A] max-w-[320px] md:max-w-3xl mx-auto mb-8 md:mb-12 font-bold leading-relaxed text-center text-balance bg-white/10 backdrop-blur-[2px] rounded-lg p-2">
          הקמת דף נחיתה, קמפיין ממוקד והזרמת פניות איכותיות למשך חודש - ללא דמי
          ניהול. המטרה? שתראה תוצאות ונעבור לעבודה קבועה.
        </p>

        {/* הכפתורים */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:mb-16">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-[#A07730] text-white px-7 py-3.5 md:px-10 md:py-4.5 rounded-xl font-bold text-base md:text-lg hover:scale-105 transition-transform shadow-md"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            בואו נבדוק התאמה
          </Link>

          <Link
            href="#how"
            className="flex items-center gap-2 bg-white/80 border border-[#E5E5E0] text-[#1A1A1A] px-7 py-3.5 md:px-10 md:py-4.5 rounded-xl font-bold text-base md:text-lg hover:bg-white transition-colors backdrop-blur-sm"
          >
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
              <circle cx="12" cy="12" r="10" />
              <path d="m10 8 4 4-4 4" />
            </svg>
            איך זה עובד?
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-row items-center justify-center gap-x-2 md:gap-x-10 text-[10px] md:text-sm font-bold text-[#A07730] w-full max-w-[340px] md:max-w-none mx-auto bg-white/30 backdrop-blur-md py-3 rounded-2xl">
          <div className="flex items-center gap-1 shrink-0">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span>אפס דמי ניהול</span>
          </div>
          <span className="opacity-20 text-black">|</span>
          <div className="flex items-center gap-1 shrink-0">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span>בלי התחייבות</span>
          </div>
          <span className="opacity-20 text-black">|</span>
          <div className="flex items-center gap-1 shrink-0">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>שקיפות מלאה</span>
          </div>
        </div>
      </div>

      {/* שכבות מעבר חלקות */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9F9F9] to-transparent z-[2]" />
    </section>
  );
}
