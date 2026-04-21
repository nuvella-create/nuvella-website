"use client";

import { useState } from "react"; /* המון קשור פה לסקשין 5 אז להתייעץ לפני שינוי */
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { sendContactForm } from "./actions";

export default function Home() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // המצב החדש - האם להציג את שאר העבודות
  const [showMore, setShowMore] = useState(false);

  // הגדרת הסטטוס כולל שגיאות ספציפיות לכל שדה
  const [status, setStatus] = useState<{
    success?: boolean;
    error?: string;
    fieldErrors?: { name?: string; phone?: string; message?: string };
  } | null>(null);

  const [isPending, setIsPending] = useState(false);

  // רשימת פרויקטים מעודכנת עם כותרות ותיאורים שיווקיים
  const projects = [
    {
      id: 1,
      src: "/images/project1.png",
      title: "בוני פרגולות ומרחבי חוץ",
      alt: "עיצוב ובניית דף נחיתה לעסק פרגולות ומרחבי חוץ - נויבלה דיגיטל",
      desc: "תשתית שיווקית שמוכיחה מקצועיות מהשנייה הראשונה. שילוב נקי בין עבודות בשטח לבין המסרים שגורמים לאנשים להרים טלפון ולהזמין.",
    },
    {
      id: 2,
      src: "/images/project2.png",
      title: "קבלני שיפוצים וגמר",
      alt: "דף נחיתה שיווקי לקבלן שיפוצים עם דגש על המרות - נויבלה דיגיטל",
      desc: `דף נחיתה שמשדר רצינות וניסיון מהשנייה הראשונה. הוא חותך את כל ה"סיפורים" ומראה ללקוח בדיוק למה הוא הגיע למקום הנכון - כדי שירים את הטלפון בביטחון.`,
    },
    {
      id: 3,
      src: "/images/project3.png",
      title: "טכנאים ושירותי חירום",
      alt: "תשתית שיווקית ודף נחיתה לטכנאי שירותי חירום - אופטימיזציה לנייד",
      desc: "תשתית שיווקית לענף השירותים המהירים. במקצועות שבהם כל שנייה קובעת, הדף מראה ללקוח הלחוץ בדיוק מה שהוא צריך - הבטחה לזמן הגעה וכפתור חיוג שבולט ישר בעין.",
    },
    {
      id: 4,
      src: "/images/project4.png",
      title: "חברות בנייה וניהול הנדסי",
      alt: "מיתוג ובניית דף נחיתה לחברת ניהול הנדסי ובנייה פרטית - נויבלה",
      desc: "דף שמוכיח ללקוח שאין פה מקום לטעויות. הוא משדר סמכות הנדסית ובונה אמון מהיר, מה שגורם לגולש להבין שזה העסק שהוא רוצה שינהל לו את הפרויקט.",
    },
  ];

  // יצירת "עוגן" לטופס
  const contactRef = typeof window !== "undefined" ? null : null; // נגדיר אותו נקי

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="top" className="flex flex-col w-full font-heebo">
      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden font-heebo py-12 md:py-20 bg-white">
        {/* תמונת רקע - דסקטופ (מופיעה רק ממסך בינוני ומעלה) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/img-desktop.png"
            alt="נויבלה דיגיטל - פתרונות שיווק, בניית דפי נחיתה וניהול קמפיינים לעסקים"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* תמונת רקע - מובייל (מופיעה רק במסכים קטנים) */}
        <div className="block md:hidden absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/img-mobile.png"
            alt="נויבלה דיגיטל - פתרונות שיווק, בניית דפי נחיתה וניהול קמפיינים לעסקים"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        {/* שכבת הגנה (Overlay) - שומרת על קריאות הטקסט מעל התמונה החדשה */}
        <div className="absolute inset-0 bg-white/20 z-[1] pointer-events-none" />

        {/* התוכן של הסקשן - יושב מעל הכל בזכות z-10 */}
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

          {/* הכותרת (H1) עם אפקט שיין זהב מבריק עדין */}
          <h1 className="text-[5.8vw] md:text-6xl font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight px-4 text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)] w-full">
            <span className="block whitespace-nowrap">
              מחפש 5 בעלי עסקים רציניים
            </span>

            {/* השורה הזהובה - ה"שיין" מוחל כאן */}
            <span className="block whitespace-nowrap bg-gradient-to-r from-[#A07730] via-[#E7C58A] to-[#A07730] bg-clip-text text-transparent animate-gold-breath font-black">
              לחודש התנסות ללא דמי ניהול
            </span>
          </h1>

          {/* הפסקה השיווקית */}
          <p className="text-[15px] md:text-xl text-[#1A1A1A] max-w-[320px] md:max-w-3xl mx-auto mb-8 md:mb-12 font-bold leading-relaxed text-center text-balance bg-white/10 backdrop-blur-[2px] rounded-lg p-2">
            הקמת דף נחיתה, קמפיין ממוקד והזרמת פניות איכותיות למשך חודש - ללא
            דמי ניהול. המטרה? שתראה תוצאות ונעבור לעבודה קבועה.
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

        {/* שכבת מעבר חלקה מהלמעלה (Header) */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-[2]" />
        {/* שכבת מעבר חלקה לסקשן הבא */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F9F9F9] to-transparent z-[2]" />
      </section>
      {/* ── 2. IDENTIFICATION - גרסה מהודקת ── */}
      <section
        className="bg-[#F9F9F9] py-12 md:py-16 px-6 font-heebo border-t border-gray-100"
        dir="rtl"
      >
        <div className="max-w-5xl mx-auto">
          <div className="w-full md:w-[60%] text-right">
            {/* כותרת הסקשן - עקבית ומדויקת */}
            <div className="flex flex-col items-start mb-8 md:mb-12 text-right">
              <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
                <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
                הבעיה האמיתית
              </span>

              <div className="relative inline-block w-full">
                <h2 className="text-[20px] md:text-[32px] font-black text-[#1A1A1A] leading-tight md:whitespace-nowrap tracking-tighter">
                  המלצות זה נהדר. אבל זו לא אסטרטגיה - זה הימור.
                </h2>
                <div className="absolute -bottom-3 right-0 w-12 h-[2.5px] bg-[#A07730]"></div>
              </div>
            </div>

            {/* גוף הטקסט - מרווחים מהודקים לקריאה מהירה */}
            <div className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-5 text-right">
              <p>
                המלצות זה הבסיס של כל עסק, אבל בוא נודה באמת: זה "ברז" שאי אפשר
                לשלוט בו.
              </p>

              {/* נקודות הכאב */}
              <div className="space-y-4 pr-1">
                <p className="leading-relaxed">
                  - חודש אחד אתה בשיא, וחודש אחריו{" "}
                  <span className="font-bold">הטלפון פשוט שותק</span> - בלי שום
                  יכולת לצפות מה יקרה מחר.
                </p>
                <p className="leading-relaxed">
                  - אי אפשר "לפתוח" כשחסרה עבודה או "לסגור" כשעמוס - זה לא ניהול
                  עסק,{" "}
                  <span className="font-bold text-[#1A1A1A]">זו הישרדות.</span>
                </p>
                <p className="leading-relaxed">
                  - בזמן שאתה בונה על המלצות, הלקוחות כבר{" "}
                  <span className="font-bold">מחפשים בגוגל</span> וסוגרים אצל
                  המתחרה שלך.
                </p>
              </div>

              <p className="font-medium italic text-[15px] md:text-[17px] mt-8 border-r-2 border-[#A07730] pr-3 py-1">
                זה לא כי הוא איש מקצוע טוב ממך - זה פשוט כי{" "}
                <span className="text-[#1A1A1A] font-bold">
                  הוא דאג להופיע להם מול העיניים.
                </span>
              </p>

              {/* שורת המחץ */}
              <div className="mt-8 pt-2">
                <p className="text-[18px] md:text-[22px] font-black text-[#1A1A1A] leading-tight">
                  הגיע הזמן להפסיק לחכות לטלפון -
                  <br className="md:hidden" />
                  <span className="text-[#A07730]">
                    {" "}
                    ולהתחיל לשלוט בזרם העבודה שלך.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── 3. THE PROCESS - גרסה מהודקת וצרה ── */}
      <section
        id="how"
        className="bg-white py-12 md:py-16 px-6 font-heebo border-t border-gray-100"
        dir="rtl"
      >
        <div className="max-w-5xl mx-auto">
          <div className="w-full md:w-[60%] text-right">
            {/* כותרת הסקשן - עקביות מלאה עם שאר האתר */}
            <div className="flex flex-col items-start mb-10 md:mb-12 text-right">
              <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
                <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
                השורה התחתונה
              </span>

              <div className="relative inline-block w-full">
                <h2 className="text-[20px] md:text-[32px] font-black text-[#1A1A1A] leading-tight md:whitespace-nowrap tracking-tighter">
                  איך נביא לך תוצאות?
                </h2>
                <div className="absolute -bottom-3 right-0 w-12 h-[2.5px] bg-[#A07730]"></div>
              </div>
            </div>

            {/* רשימת השלבים עם ה-Timeline - צמצום מרווחים */}
            <div className="space-y-8 md:space-y-10 relative">
              {/* שלב 1 */}
              <div className="flex gap-4 md:gap-6 items-start relative text-right">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#A07730] flex items-center justify-center text-[#A07730] font-black text-sm md:text-base shrink-0 bg-white z-10">
                    1
                  </div>
                  <div className="w-px h-full bg-[#E5E5E0] absolute top-8 md:top-10"></div>
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[#1A1A1A] font-bold text-[16px] md:text-[18px] mb-1">
                    קודם כל נדבר
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    שיחת זום ממוקדת של 20 דקות - נבין בדיוק מי הקהל שלך, איך
                    להשיג אותו ונתאם ציפיות בלי לחץ ובלי מחויבות.
                  </p>
                </div>
              </div>

              {/* שלב 2 */}
              <div className="flex gap-4 md:gap-6 items-start relative text-right">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#A07730] flex items-center justify-center text-[#A07730] font-black text-sm md:text-base shrink-0 bg-white z-10">
                    2
                  </div>
                  <div className="w-px h-full bg-[#E5E5E0] absolute top-8 md:top-10"></div>
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[#1A1A1A] font-bold text-[16px] md:text-[18px] mb-1">
                    הקמת התשתית
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    אני לומד את העסק שלך, בונה דף נחיתה שמייצג אותך נכון ומקים
                    קמפיין שפוגע בול במי שצריך אותך עכשיו - הכל מוכן לעבודה תוך
                    כמה ימים.
                  </p>
                </div>
              </div>

              {/* שלב 3 */}
              <div className="flex gap-4 md:gap-6 items-start text-right">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#A07730] flex items-center justify-center text-white font-black text-sm md:text-base shrink-0 shadow-md">
                  3
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[#1A1A1A] font-bold text-[16px] md:text-[18px] mb-1">
                    ניהול ודיוק ביצועים
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    הקמפיין באוויר ואני דואג לניהול השוטף ולהזרמת פניות
                    רלוונטיות בזמן שאתה פשוט עוסק בעבודה שלך.
                  </p>
                </div>
              </div>
            </div>

            {/* פסקת סיכום והנעה לפעולה - מהודק יותר */}
            <div className="mt-12 space-y-5 text-right">
              <div className="p-5 bg-[#F9F9F7] rounded-xl border-r-4 border-[#A07730] shadow-sm">
                <p className="text-[16px] md:text-[18px] font-black text-[#1A1A1A] leading-tight mb-2">
                  חודש ראשון ללא דמי ניהול.
                </p>
                <p className="text-[13px] md:text-[15px] text-[#4A4A4A] leading-relaxed font-medium">
                  אני משקיע את הזמן והעבודה שלי - כי אני בטוח שאחרי שתראה
                  תוצאות, תרצה להמשיך.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-3 bg-[#1A1A1A] text-white py-3.5 px-8 rounded-xl font-black text-base md:text-lg hover:bg-black transition-all active:scale-95 w-full md:w-fit"
                >
                  בוא נבדוק התאמה
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── 4. ABOUT ME - גרסה מהודקת: תמונה בשמאל, מלל בימין ── */}
      <section
        id="about"
        className="py-16 md:py-24 bg-[#FCFBFA] px-6 font-heebo overflow-hidden"
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          {/* טור הטקסט - 60% מהרוחב, יופיע בימין בדסקטופ */}
          <div className="w-full md:w-[60%] flex flex-col items-start text-right order-last md:order-none">
            {/* כותרת הסקשן - עקבית עם שאר האתר */}
            <div className="flex flex-col items-start mb-10 md:mb-12 text-right">
              <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
                <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
                הפנים מאחורי הסוכנות
              </span>

              <div className="relative inline-block w-full">
                <h2 className="text-[20px] md:text-[32px] font-black text-[#1A1A1A] leading-tight md:whitespace-nowrap tracking-tighter">
                  נעים להכיר, אני איתי
                </h2>
                <div className="absolute -bottom-3 right-0 w-12 h-[2.5px] bg-[#A07730]"></div>
              </div>
            </div>

            <div className="space-y-8 w-full">
              {/* נקודה 1 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-[#A07730] flex items-center justify-center shrink-0 mt-1 bg-white shadow-sm">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A07730"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-1.5">
                    דיגיטל זה שפת האם שלי
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    מעבר לפרסום בפייסבוק וגוגל, אני בונה{" "}
                    <span className="font-bold text-[#1A1A1A]">
                      דפי נחיתה שיודעים למכור באמת.
                    </span>{" "}
                    אני לא רק "מעלה מודעה" - אני מבין איך הלקוח חושב ואיך לגרום
                    לו לעצור ולהשאיר פרטים. נולדתי לתוך הכלים האלה, ואני מביא
                    לעסק שלך{" "}
                    <span className="font-bold text-[#1A1A1A]">
                      שליטה בטכנולוגיה הכי מעודכנת
                    </span>{" "}
                    שיש היום בטבעיות ובביטחון.
                  </p>
                </div>
              </div>

              {/* נקודה 2 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-[#A07730] flex items-center justify-center shrink-0 mt-1 bg-white shadow-sm">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A07730"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-1.5">
                    ההצלחה שלך היא האינטרס שלי
                  </h3>
                  <div className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed space-y-3">
                    <p>
                      אני בונה עכשיו את המוניטין שלי, ולכן אני מושקע בעסק שלך{" "}
                      <span className="font-bold text-[#1A1A1A]">
                        הרבה יותר מכל סוכנות גדולה.
                      </span>{" "}
                      כל שקל מתקציב הקמפיין שלך{" "}
                      <span className="font-bold text-[#1A1A1A]">
                        חשוב לי כאילו הוא שלי.
                      </span>
                    </p>
                    <p>
                      העבודה שלי היא להזרים לך פניות חמות לטלפון - כדי שאתה תוכל
                      לסגור את העסקאות ולראות שהמערכת עובדת.
                    </p>
                  </div>
                </div>
              </div>

              {/* נקודה 3 */}
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border border-[#A07730] flex items-center justify-center shrink-0 mt-1 bg-white shadow-sm">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A07730"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-1.5">
                    המספרים ידברו בעד עצמם
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    אני לא מאמין במושגים שיווקיים מורכבים. שיווק טוב נמדד בדבר
                    אחד:{" "}
                    <span className="font-bold text-[#1A1A1A]">
                      לקוחות רלוונטיים שפונים אליך.
                    </span>{" "}
                    אני מציע{" "}
                    <span className="font-bold text-[#1A1A1A]">
                      חודש התנסות ללא דמי ניהול
                    </span>{" "}
                    כדי שתוכל לראות את התוצאות בעין לפני שאתה מחליט אם להמשיך.
                    פשוט, שקוף ובלי התחייבות מראש.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[16px] md:text-xl font-bold text-[#1A1A1A] leading-snug mt-12 text-right tracking-tight">
              בוא נדבר - שיחה קצרה שתעזור לנו להבין אם הפתרון שלי הוא מה שהעסק
              שלך צריך כרגע.
            </p>
          </div>

          {/* טור התמונה - 40% מהרוחב, יופיע בשמאל בדסקטופ וראשון במובייל */}
          <div className="w-full md:w-[40%] order-first md:order-none flex items-center justify-center md:justify-end">
            <div className="relative animate-bob w-[280px] md:w-full max-w-[360px]">
              <Image
                src="/images/me.png"
                alt="איתי דור - מומחה לבניית דפי נחיתה ושיווק דיגיטלי, מייסד נויבלה דיגיטל"
                width={400}
                height={500}
                className="profile-mask object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* ── 5.1 PROOF: גרסת מחשב חסינה לחיתוכים (Responsive Desktop) ── */}
      <section
        id="portfolio"
        className="hidden lg:block py-24 md:py-32 bg-[#FCFBFA] overflow-hidden border-t border-gray-100"
        dir="rtl"
      >
        {/* קונטיינר גמיש שמונע היצמדות לקצוות */}
        <div className="max-w-[1600px] mx-auto px-10 xl:px-20 flex flex-row items-center justify-between gap-12">
          {/* טור הטקסט - נשאר קבוע בימין */}
          <div className="w-[450px] xl:w-[500px] shrink-0 text-right z-20">
            <div className="flex flex-col items-start mb-10 text-right">
              <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
                <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
                מבחן התוצאה
              </span>
              <div className="relative inline-block w-full">
                <h2 className="text-[20px] md:text-[32px] font-black text-[#1A1A1A] leading-tight tracking-tighter">
                  לא סתם הגעת לדף הזה
                </h2>
                <div className="absolute -bottom-3 right-0 w-12 h-[2.5px] bg-[#A07730]"></div>
              </div>
            </div>

            <div className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-relaxed space-y-6">
              <p>
                <span className="font-bold text-[#1A1A1A]">
                  העובדה שאתה קורא את זה עכשיו היא ההוכחה הכי טובה שלי.
                </span>
              </p>
              <p>
                זה לא מקרה. ידעתי בדיוק למי לכוון את המודעה כדי שהיא תופיע לך
                בטלפון ותביא אותך לפה. באותה רמת דיוק אני אדאג שהלקוחות שלך יראו
                אותך - בדיוק כשהם צריכים אותך.
              </p>
              <p className="font-black text-[#1A1A1A] text-xl">
                אבל קליקים הם רק חצי מהעבודה.
              </p>
              <p>
                להביא אנשים לדף זה קל, אבל בלי דף נחיתה שמשדר סמכות ויודע לסגור
                -{" "}
                <span className="font-bold text-[#1A1A1A] border-b-2 border-[#A07730]">
                  הכסף של הקמפיין פשוט נזרק לפח.
                </span>{" "}
                קליק שלא הופך לפנייה הוא בזבוז של תקציב.
              </p>
              <p className="text-[#A07730] font-bold">
                ככה נראות התשתיות שאני בונה:
              </p>
            </div>
          </div>

          {/* ערימת התמונות - עם מנגנון Scale למניעת חיתוך */}
          <div className="flex-1 relative h-[650px] min-w-[700px]">
            {/* ה-div הזה מקטין את כל הערימה במסכים קטנים (1024px עד 1440px) */}
            <div className="relative w-full h-full origin-right scale-[0.75] xl:scale-[0.9] 2xl:scale-100 transition-transform duration-500">
              {/* פרויקט 2 - בסיס */}
              <div
                onClick={() => setSelectedImg(projects[1].src)}
                className="floating-project delay-2 absolute rounded-2xl border-[8px] border-white overflow-hidden cursor-zoom-in bg-white shadow-lg"
                style={
                  {
                    top: "20px",
                    right: "0px",
                    width: "500px",
                    height: "300px",
                    "--r": "-4deg",
                    zIndex: 10,
                  } as any
                }
              >
                <Image
                  src={projects[1].src}
                  alt={projects[1].alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* פרויקט 1 - מעליו */}
              <div
                onClick={() => setSelectedImg(projects[0].src)}
                className="floating-project delay-1 absolute rounded-2xl border-[8px] border-white overflow-hidden aspect-video cursor-zoom-in shadow-xl"
                style={
                  {
                    top: "100px",
                    right: "280px",
                    width: "420px",
                    "--r": "3deg",
                    zIndex: 20,
                  } as any
                }
              >
                <Image
                  src={projects[0].src}
                  alt={projects[0].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* פרויקט 3 */}
              <div
                onClick={() => setSelectedImg(projects[2].src)}
                className="floating-project delay-3 absolute rounded-2xl border-[8px] border-white overflow-hidden aspect-video cursor-zoom-in shadow-xl"
                style={
                  {
                    top: "340px",
                    right: "40px",
                    width: "420px",
                    "--r": "-2deg",
                    zIndex: 30,
                  } as any
                }
              >
                <Image
                  src={projects[2].src}
                  alt={projects[2].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* פרויקט 4 */}
              <div
                onClick={() => setSelectedImg(projects[3].src)}
                className="floating-project delay-4 absolute rounded-2xl border-[8px] border-white overflow-hidden aspect-video cursor-zoom-in shadow-xl"
                style={
                  {
                    top: "420px",
                    right: "350px",
                    width: "400px",
                    "--r": "4deg",
                    zIndex: 40,
                  } as any
                }
              >
                <Image
                  src={projects[3].src}
                  alt={projects[3].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* כרטיס CTA - הפרויקט שלך (הפך לקישור לחיץ) */}
              <Link
                href="#contact"
                className="floating-project delay-1 absolute rounded-[32px] border-4 border-dashed border-[#A07730]/40 bg-[#FAF5EB] flex flex-col items-center justify-center text-center p-10 z-[100] shadow-2xl transition-all hover:scale-[1.03] hover:border-[#A07730] group cursor-pointer"
                style={
                  {
                    top: "220px",
                    right: "550px",
                    width: "440px",
                    height: "300px",
                    "--r": "2deg",
                  } as any
                }
              >
                {/* אייקון פלוס שקופץ בהובר */}
                <div className="w-14 h-14 rounded-full bg-[#A07730] text-white flex items-center justify-center mb-5 text-3xl font-bold transition-transform group-hover:rotate-90">
                  +
                </div>

                <h3 className="text-[#1A1A1A] font-black text-2xl mb-3">
                  התבנית שלך?
                </h3>

                <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-4 font-medium px-4">
                  התבנית הזו ריקה, אבל היא יכולה להפוך לתשתית שמביאה לעסק שלך
                  לקוחות חדשים בכל יום.
                </p>

                <p className="text-[#A07730] text-sm font-black uppercase tracking-tight border-b-2 border-[#A07730]/20 group-hover:border-[#A07730] transition-colors">
                  לחץ כאן לתיאום שיחה קצרה
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ── 5.2 PROOF: גרסת מובייל (מתוקנת - ללא שגיאות סגירה) ── */}
      <section
        id="portfolio-mobile"
        className="lg:hidden py-16 bg-[#F2F2F2] border-t border-gray-100"
        dir="rtl"
      >
        {/* כותרת ומלל מובייל מהודק - תיקון קו עליון מלא */}
        <div className="px-6 mb-10 text-right">
          <div className="flex flex-col items-start mb-4">
            <span className="relative text-[10px] font-bold text-[#A07730] tracking-tight uppercase mb-1 leading-none">
              {/* הקו עכשיו על כל הרוחב (w-full) */}
              <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
              מבחן התוצאה
            </span>
            <div className="relative inline-block">
              <h2 className="text-[22px] font-black text-[#1A1A1A] leading-tight tracking-tighter">
                לא סתם הגעת לדף הזה
              </h2>
              {/* קו תחתון מותאם */}
              <div className="absolute -bottom-2 right-0 w-12 h-[2px] bg-[#A07730]"></div>
            </div>
          </div>

          <div className="text-[14px] text-[#4A4A4A] leading-[1.5] space-y-4">
            <p>
              <span className="font-bold text-[#1A1A1A]">
                העובדה שאתה קורא את זה עכשיו היא ההוכחה הכי טובה שלי.
              </span>
            </p>
            <p>
              זה לא מקרה. ידעתי בדיוק למי לכוון את המודעה כדי שתביא אותך לפה.
              באותה רמת דיוק אני אדאג שהלקוחות שלך יראו אותך - בדיוק כשהם צריכים
              אותך.
            </p>
            <p>
              <span className="font-bold text-[#1A1A1A]">
                אבל קליקים הם רק חצי מהעבודה.
              </span>{" "}
              בלי דף נחיתה שמשדר סמכות ויודע לסגור -{" "}
              <span className="font-bold text-[#1A1A1A] border-b border-[#A07730]">
                הכסף של הקמפיין פשוט נזרק לפח.
              </span>{" "}
              קליק שלא הופך לפנייה הוא בזבוז של תקציב.
            </p>
            <p className="text-[#1A1A1A] font-bold text-[13px] tracking-tight pt-1">
              ככה נראות התשתיות שאני בונה:
            </p>
          </div>
        </div>

        {/* קונטיינר הפרויקטים */}
        <div className="px-6 space-y-12">
          {/* 2 פרויקטים ראשונים */}
          {projects.slice(0, 2).map((p) => (
            <div key={p.id}>
              <h3 className="text-[#A07730] font-bold text-sm mb-2 uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="text-[#4A4A4A] text-[14px] mb-4 leading-relaxed">
                {p.desc}
              </p>
              <div
                onClick={() => setSelectedImg(p.src)}
                className="relative aspect-video rounded-xl overflow-hidden border-2 border-white shadow-lg bg-white"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className={p.id === 2 ? "object-contain p-2" : "object-cover"}
                />
              </div>
            </div>
          ))}

          {/* הפרויקט שלך: גרסת פרימיום - כל האלמנט לחיץ, ללא פלוס */}
          <div
            id="missing-project"
            onClick={scrollToContact}
            className="cursor-pointer active:scale-[0.99] transition-transform"
          >
            <h3 className="text-[#1A1A1A] font-black text-lg mb-2 text-right">
              התבנית שלך?
            </h3>
            <p className="text-[#4A4A4A] text-[14px] mb-4 leading-relaxed text-right">
              התבנית הזו ריקה, אבל היא יכולה להפוך לתשתית שמביאה לעסק שלך לקוחות
              חדשים בכל יום.
            </p>

            <div className="relative aspect-video rounded-xl border-4 border-dashed border-[#A07730]/30 bg-[#FAF5EB] flex flex-col items-center justify-center text-center p-8 shadow-sm">
              <div className="absolute inset-4 rounded-lg border border-dashed border-[#A07730]/15 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-[#A07730] font-bold text-sm tracking-tight opacity-80">
                  זה המקום שלך לצמוח
                </span>
                <span className="text-[#A07730] font-black text-base underline underline-offset-4 tracking-tight">
                  לחץ כאן לתיאום שיחה קצרה
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* נקודת עוגן לחזרה חכמה - גובה 0 כדי לא להוסיף רווח */}
        <div id="more-work-anchor" className="h-0 w-full"></div>

        {/* אזור כפתור ראה עוד - מרווח הדוק יותר */}
        {!showMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="text-[#A07730] font-black text-[11px] uppercase tracking-[0.2em] border-b border-[#A07730] pb-0.5 active:opacity-60 transition-all"
            >
              ראה עוד עבודות
            </button>
          </div>
        )}

        {/* עבודות נוספות בטעינה */}
        <div className="px-6">
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                /* mt-10 מייצר רווח זהה בדיוק לרווח שבין הפרויקטים הקודמים (space-y-10) */
                className="space-y-10 mt-10"
              >
                {projects.slice(2, 4).map((p) => (
                  <div key={p.id}>
                    <h3 className="text-[#A07730] font-bold text-sm mb-2 uppercase tracking-wide">
                      {p.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-[14px] mb-4 leading-relaxed">
                      {p.desc}
                    </p>
                    <div
                      onClick={() => setSelectedImg(p.src)}
                      className="relative aspect-video rounded-xl overflow-hidden border-2 border-white shadow-lg bg-white"
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}

                {/* כפתור ראה פחות - גלילה חכמה ל-25% מהתחתית */}
                <div className="flex justify-center py-2">
                  <button
                    onClick={() => {
                      setShowMore(false);
                      setTimeout(() => {
                        const anchor =
                          document.getElementById("more-work-anchor");
                        if (anchor) {
                          const targetY =
                            anchor.offsetTop - window.innerHeight * 0.75;
                          window.scrollTo({ top: targetY, behavior: "smooth" });
                        }
                      }, 50);
                    }}
                    className="text-[#A07730] font-black text-[11px] uppercase tracking-[0.2em] border-b border-[#A07730] pb-0.5 active:opacity-60 transition-all"
                  >
                    ראה פחות
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* ── 6. TRANSPARENCY: שקיפות מלאה (רקע לבן נקי במובייל) ── */}
      <section
        id="transparency"
        className="py-20 md:py-32 px-6 bg-white md:bg-[#F2F2F2] border-t border-gray-100"
        dir="rtl"
      >
        <div className="max-w-5xl mx-auto">
          {/* בלוק כותרת - תואם לשאר האתר */}
          <div className="flex flex-col items-start mb-16 text-right">
            <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
              <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
              שקיפות מלאה
            </span>

            <div className="relative inline-block">
              {/* צבע טקסט כהה גם במובייל וגם במחשב */}
              <h2 className="text-[24px] md:text-[32px] font-black text-[#1A1A1A] leading-tight tracking-tighter">
                מה קורה בסוף חודש הניסיון?
              </h2>
              <div className="absolute -bottom-2 md:-bottom-3 right-0 w-12 h-[2px] md:h-[2.5px] bg-[#A07730]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* אופציה א' - נפרדים כידידים (רקע אפור בהיר מאוד כדי להבדיל מהלבן של הסקשן) */}
            <div className="bg-[#F9F9F9] md:bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
              <div className="mb-6 text-[#A07730]/40">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#1A1A1A] mb-4">
                אופציה א' - סיום התקשרות
              </h3>
              <p className="text-[#4A4A4A] text-[15px] mb-6 leading-relaxed">
                אם הגענו למסקנה שהשירות שלי הוא לא המענה המדויק שהעסק שלך צריך
                כרגע - אנחנו פשוט עוצרים.
              </p>
              <ul className="space-y-3 text-[14px] md:text-[15px] text-[#1A1A1A] font-medium opacity-90 mt-auto">
                <li>- דף הנחיתה יורד מהאוויר ואין לך שום התחייבות כלפיי.</li>
                <li>
                  - חודש הניסיון היה ללא דמי ניהול - ניהול הסיכונים היה עליי.
                </li>
                <li>- מסיימים את ההתקשרות בצורה מקצועית ועניינית.</li>
              </ul>
            </div>

            {/* אופציה ב' - המכונה עובדת (נשאר שחור כי זה כרטיס, לא כל הרקע) */}
            <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-[#A07730] relative overflow-hidden flex flex-col md:scale-105">
              <div className="absolute top-4 left-4 bg-[#A07730] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                הבחירה של 90%
              </div>

              <div className="mb-6 text-[#A07730]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.5-1 1-4c2 1 3 2 4 4z" />
                  <path d="M12 15v5c3-1 4-2 4-4s-1-2-4-1z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">
                אופציה ב' - מסלול קבוע
              </h3>
              <p className="text-gray-400 text-[15px] mb-6 leading-relaxed">
                אם ראית שהמערכת עובדת ואתה רוצה להפוך אותה לחלק קבוע מהעסק שלך -
                זה המודל:
              </p>

              <div className="mb-6">
                <div className="text-[#A07730] text-3xl font-black tracking-tighter">
                  1,500 ₪{" "}
                  <span className="text-sm font-normal text-gray-400">
                    חד פעמי
                  </span>
                </div>
                <p className="text-gray-400 text-xs">
                  העברת בעלות מלאה על התשתית (עיצוב + קוד).
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#A07730]/20 mb-6"></div>

              <ul className="space-y-3 text-[14px] md:text-[15px] text-white font-medium mt-auto">
                <li className="text-[#A07730] font-bold mb-2">
                  500 ₪ ריטיינר חודשי שכולל:
                </li>
                <li>- ניהול ואופטימיזציה של הקמפיין הממומן.</li>
                <li>- ריענון קריאייטיבים ומודעות לשיפור ביצועים.</li>
                <li>- אחסון, דומיין וניהול טכני שוטף.</li>
                <li>- תחזוקה שוטפת של האתר ועדכוני תוכן קלים.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ── 7. CONTACT: גרסה חכמה עם הודעת תודה ── */}
      <section
        id="contact"
        className="pt-12 pb-20 md:pt-24 md:pb-32 px-4 md:px-6 bg-white"
        dir="rtl"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* בלוק כותרת */}
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
            אני בוחר את 5 הפרויקטים האלה בקפידה כדי לתת 100% פוקוס לכל לקוח.
            תשאיר פרטים, נתאם שיחה קצרה ונבין אם אנחנו יוצאים לדרך.
          </p>

          <div className="bg-[#F9F9F9] px-4 py-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-2xl shadow-[#A07730]/5 text-right transition-all duration-500">
            {status?.success ? (
              /* --- הודעת תודה --- */
              <div className="py-12 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#FAF5EB] rounded-full flex items-center justify-center mb-6 border border-[#A07730]/20">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A07730"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-[#1A1A1A] mb-4">
                  הפנייה התקבלה!
                </h3>
                <p className="text-[#4A4A4A] text-lg md:text-xl font-medium">
                  המייל אצלי. אני עובר על הפרטים וחוזר אליך בהקדם לתיאום שיחה.
                </p>
              </div>
            ) : (
              /* --- הטופס המקורי --- */
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formElement = e.currentTarget; // שומרים את הטופס כאן!
                  setIsPending(true);
                  setStatus(null);

                  const formData = new FormData(formElement);
                  const result = await sendContactForm(formData);

                  setIsPending(false);
                  setStatus(result);

                  if (result?.success === true) {
                    // 1. דיווח לפייסבוק
                    if (typeof window !== "undefined" && (window as any).fbq) {
                      (window as any).fbq("track", "Lead");
                    }

                    // 2. דיווח לגוגל - הגרסה המשופרת
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "lead", {
                        debug_mode: true,
                        transport_type: "beacon",
                      });
                    }

                    formElement.reset(); // איפוס הטופס
                  }
                }}
                id="contact-form"
                className="flex flex-col gap-5"
              >
                {/* שדה מלכודת (Honeypot) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    name="fax_number"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-right">
                  {/* שדה שם מלא */}
                  <div className="w-full">
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                      שם מלא
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="ישראל ישראלי"
                      className={`w-full bg-white border ${status?.fieldErrors?.name ? "border-red-500" : "border-gray-200"} rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right`}
                    />
                    {status?.fieldErrors?.name && (
                      <p className="text-red-600 text-[11px] font-bold mt-1 mr-1">
                        {status.fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* שדה טלפון */}
                  <div className="w-full">
                    <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                      טלפון
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="050-0000000"
                      className={`w-full bg-white border ${status?.fieldErrors?.phone ? "border-red-500" : "border-gray-200"} rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right`}
                    />
                    {status?.fieldErrors?.phone && (
                      <p className="text-red-600 text-[11px] font-bold mt-1 mr-1">
                        {status.fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* שדה הודעה / תיאור עסק */}
                <div className="w-full text-right">
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                    ספר לי קצת על העסק
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="כמה מילים על העסק ומה המטרה שלך מהדף..."
                    className={`w-full bg-white border ${status?.fieldErrors?.message ? "border-red-500" : "border-gray-200"} rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right resize-none`}
                  ></textarea>
                  {status?.fieldErrors?.message && (
                    <p className="text-red-600 text-[11px] font-bold mt-1 mr-1">
                      {status.fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* שגיאה כללית (כמו חריגה ממכסת שליחות) */}
                {status?.error && (
                  <p className="text-red-600 text-[13px] font-bold text-center -mb-2">
                    {status.error}
                  </p>
                )}

                {/* ... (כאן נשארים הצ'קבוקס של הפרטיות והכפתור של השליחה כפי שהיו) ... */}
                <div className="flex items-center gap-3 px-1 order-2 md:order-1">
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

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#A07730] hover:bg-[#8A6528] disabled:opacity-70 text-white font-black py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] order-1 md:order-2"
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
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="תצוגת פרויקט נבחר - נויבלה דיגיטל פתרונות שיווק"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
