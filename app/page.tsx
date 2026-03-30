"use client";

import { useState } from "react"; /* המון קשור פה לסקשין 5 אז להתייעץ עם הצאט לפני ביצוע שינוי*/
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { sendContactForm } from "./actions";

export default function Home() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // המצב החדש - האם להציג את שאר העבודות
  const [showMore, setShowMore] = useState(false);

  // רשימת פרויקטים מעודכנת עם כותרות ותיאורים שיווקיים
  const projects = [
    {
      id: 1,
      src: "/images/project1.png",
      title: "בוני פרגולות ומרחבי חוץ",
      desc: "תבנית שגורמת ללקוח להבין שהוא הגיע למקצוען. דגש על תמונות חזקות ונקודות אמון שסוגרות ליד חם עוד לפני שהוא בכלל הרים טלפון.",
    },
    {
      id: 2,
      src: "/images/project2.png",
      title: "קבלני שיפוצים וגמר",
      desc: "תבנית שחותרת למגע. דגש על כותרת חזקה שמורידה חששות ומספרים שמראים ללקוח שהוא בידיים בטוחות, כדי שישאיר טלפון עוד לפני שיחשוב על המתחרים.",
    },
    {
      id: 3,
      src: "/images/project3.png",
      title: "טכנאים ושירותי חירום",
      desc: "תבנית שנבנתה כדי למכור מהירות. דגש על זמינות מיידית וקריאה בולטת לשיחה, שדואגת שלקוח לחוץ יפסיק לחפש ופשוט יחייג אליך לפני שימשיך למתחרה הבא.",
    },
    {
      id: 4,
      src: "/images/project4.png",
      title: "חברות בנייה וניהול הנדסי",
      desc: "תבנית שנועדה לייצר שקט נפשי אצל הלקוח. דגש על טופס לידים מפורט ונקודות אמון שמראות על סדר ומקצועיות, כדי שהגולש ירגיש בטוח לפנות אליך כבר בשלב התכנון הראשוני.",
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
      {/* ── HERO SECTION - אייקונים גרפיים נקיים בזהב ── */}
      {/* ── HERO SECTION ── */}
      <section className="relative pt-8 pb-12 md:pt-14 md:pb-20 px-6 bg-white overflow-hidden font-heebo">
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Badge Pill */}
          <div className="flex items-center gap-4 bg-[#FAF5EB] border border-[#E8D5A8] px-5 py-2 rounded-full mb-8 shadow-sm">
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

          <h1 className="text-[clamp(24px,7.5vw,36px)] md:text-6xl font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight px-4 text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)]">
            <span className="block whitespace-nowrap">
              מחפש 5 בעלי עסקים רציניים
            </span>
            <span className="text-[#A07730] block whitespace-nowrap">
              לחודש עבודה ללא עלות
            </span>
          </h1>

          <p className="text-[15px] md:text-xl text-[#6B6B6B] max-w-[340px] md:max-w-3xl mx-auto mb-8 md:mb-12 font-medium leading-relaxed text-center text-balance">
            אני בונה לך דף נחיתה מקצועי, מריץ פרסום ממוקד ומכניס לך לידים
            איכותיים במשך חודש שלם, ללא עלות כלל.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:mb-16">
            {/* כפתור זהב - יורד לסוף לטופס */}
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

            {/* כפתור לבן - יורד למה אני מציע */}
            <Link
              href="#how"
              className="flex items-center gap-2 bg-white border border-[#E5E5E0] text-[#1A1A1A] px-7 py-3.5 md:px-10 md:py-4.5 rounded-xl font-bold text-base md:text-lg hover:bg-gray-50 transition-colors"
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
          <div className="flex flex-row items-center justify-center gap-x-2 md:gap-x-10 text-[10px] md:text-sm font-bold text-[#A07730] w-full max-w-[340px] md:max-w-none mx-auto">
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
              <span>ללא כרטיס אשראי</span>
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
              <span>ללא חוזה מחייב</span>
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
              <span>עצירה בכל רגע</span>
            </div>
          </div>
        </div>
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
                  מפה לאוזן זה מעולה - אבל זו לא אסטרטגיה, זה הימור.
                </h2>
                <div className="absolute -bottom-3 right-0 w-12 h-[2.5px] bg-[#A07730]"></div>
              </div>
            </div>

            {/* גוף הטקסט - מרווחים מהודקים לקריאה מהירה */}
            <div className="text-[15px] md:text-[17px] text-[#4A4A4A] leading-relaxed space-y-5 text-right">
              <p>
                המלצות זה הבסיס של כל עסק, אבל כולם מכירים את{" "}
                <span className="text-[#1A1A1A] font-bold">החודש השקט</span>{" "}
                שהטלפון פתאום לא מצלצל.
              </p>

              {/* נקודות הכאב */}
              <div className="space-y-3 pr-1">
                <p>
                  - הלחץ מתחיל, ואתה מוצא את עצמך{" "}
                  <span className="font-bold">מגלח מהמחיר</span> רק כדי לסגור
                  עוד עבודה.
                </p>
                <p>
                  - מפה לאוזן זה לא "ברז" - אי אפשר לפתוח כשרוצים עוד עבודה,
                  ולסגור כשיש עומס.
                </p>
                <p>
                  - בזמן שאתה מחכה שמישהו ימליץ עליך, הלקוחות מחפשים בגוגל
                  וסוגרים עם{" "}
                  <span className="text-[#1A1A1A] font-bold">המתחרה שלך</span>.
                </p>
              </div>

              <p className="font-medium italic text-[14px] md:text-[16px]">
                זה לא כי הוא איש מקצוע טוב ממך - זה נטו כי{" "}
                <span className="text-[#1A1A1A] font-bold">
                  הוא היה שם ואתה לא.
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
                  מה אני מציע בעצם?
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
                    זום קצר של 20 דקות שבו אני מסביר לך בדיוק מה אני עושה ואיך,
                    ואתה שואל כל מה שצריך, ואנחנו מחליטים ביחד אם זה מתאים
                    לשנינו, בלי לחץ ובלי מחויבות.
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
                    אני נכנס לעבודה
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    אני לומד את העסק שלך, בונה דף נחיתה שמייצג אותך נכון, ומכין
                    קמפיין שמגיע בדיוק לאנשים שצריכים אותך.
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
                    יוצאים לאוויר
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    הקמפיין רץ, אני עוקב ומייעל, ואתה רואה פניות נכנסות בזמן
                    שאתה עוסק בעבודה שלך.
                  </p>
                </div>
              </div>
            </div>

            {/* פסקת סיכום והנעה לפעולה - מהודק יותר */}
            <div className="mt-12 space-y-5 text-right">
              <div className="p-5 bg-[#F9F9F7] rounded-xl border-r-4 border-[#A07730] shadow-sm">
                <p className="text-[16px] md:text-[18px] font-black text-[#1A1A1A] leading-tight mb-2">
                  חודש ראשון ללא עלות.
                </p>
                <p className="text-[13px] md:text-[15px] text-[#4A4A4A] leading-relaxed font-medium">
                  אני משקיע את הזמן והעבודה שלי - כי אני יודע שכשתראה תוצאות,
                  תרצה להמשיך.
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
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
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
                    בן 18, וזה היתרון הכי גדול שלך במגרש הזה.
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    אני חי קוד, עיצוב ושיווק מאז שאני זוכר את עצמי – לא כי קראתי
                    על זה בספר, אלא כי גדלתי לתוך הטכנולוגיה הזו. אני מביא את
                    השליטה המוחלטת בכלים הכי חדים של היום, כדי לבנות לך תשתית
                    שעובדת.
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
                    ראיתי איך בעלי עסקים נופלים.
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    עבדתי תקופה ארוכה בסוכנות שיווק מוכרת וראיתי מקרוב עסקים
                    קטנים קורסים. לא כי העבודה שלהם בשטח לא טובה, אלא כי התשתית
                    הדיגיטלית שלהם הייתה פח. וזה בדיוק מה שגרם לי להקים את
                    Nuvella.
                  </p>
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
                    אני לא מוכר אשליות, אני בונה תיק עבודות.
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-[#4A4A4A] leading-relaxed">
                    מי שמבטיח לך תוצאות ודאיות מחר בבוקר - משקר. מה שאני כן יכול
                    להבטיח זה את האינטרס שלי: אני פורץ עכשיו לשוק ובונה תיק
                    עבודות. בעוד שסוכנויות אחרות גובות מינימום 2,000 ש”ח דמי
                    ניהול חודשיים, אני מציע את החודש הראשון ללא עלות בכלל. כדי
                    שהשם שלי יגדל, אני חייב שהעסק שלך ירוויח בזכותי.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl font-bold text-[#1A1A1A] leading-snug mt-12 text-right">
              בוא נדבר - תשאל אותי כל מה שצריך, ונראה ביחד אם זה מתאים לשנינו.
            </p>
          </div>

          {/* טור התמונה - 40% מהרוחב, יופיע בשמאל בדסקטופ וראשון במובייל */}
          <div className="w-full md:w-[40%] order-first md:order-none flex items-center justify-center md:justify-start">
            <div className="relative animate-bob w-[280px] md:w-full max-w-[360px]">
              <Image
                src="/images/me.png"
                alt="איתי דור - Nuvella"
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
                זה לא מקרה. העובדה שאתה פה מוכיחה שהפרסום שלי{" "}
                <span className="font-bold text-[#1A1A1A] border-b-2 border-[#A07730]">
                  פוגע בול
                </span>
                .
              </p>
              <p>כמו שהבאתי אותך לכאן - ככה אני אטרגט את הלקוחות שלך.</p>
              <p className="font-black text-[#1A1A1A] text-xl">
                אבל קליקים לא שווים כסף בלי דף נחיתה שמשדר אמינות.
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
                  alt="P2"
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
                  alt="P1"
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
                  alt="P3"
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
                  alt="P4"
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
                  הפרויקט שלך?
                </h3>

                <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-4 font-medium px-4">
                  התבנית הזו כרגע חסרה, אבל היא יכולה להיות המכונה שמביאה לך
                  לקוחות כל בוקר.
                </p>

                <p className="text-[#A07730] text-sm font-black uppercase tracking-tight border-b-2 border-[#A07730]/20 group-hover:border-[#A07730] transition-colors">
                  לחץ כאן ונשריין לך מקום
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

          <div className="text-[14px] text-[#4A4A4A] leading-[1.4] space-y-2">
            <p>
              זה לא מקרה. העובדה שאתה פה מוכיחה שהפרסום שלי{" "}
              <span className="font-bold text-[#1A1A1A] border-b border-[#A07730]">
                פוגע בול
              </span>
              . כמו שהבאתי אותך לכאן - ככה אביא לך את הלקוחות שצריכים אותך.
            </p>
            <p className="font-bold text-[#1A1A1A]">
              אבל קליקים לא שווים שקל בלי דף נחיתה שמשדר אמינות.
            </p>
            <p className="text-[#4A4A4A] font-bold text-[13px] tracking-tight pt-1">
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
                  alt={p.title}
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
              הפרויקט שלך?
            </h3>
            <p className="text-[#4A4A4A] text-[14px] mb-4 leading-relaxed text-right">
              התבנית הזו כרגע חסרה, אבל היא יכולה להיות המכונה שמביאה לך לקוחות
              כל בוקר.
            </p>

            <div className="relative aspect-video rounded-xl border-4 border-dashed border-[#A07730]/30 bg-[#FAF5EB] flex flex-col items-center justify-center text-center p-8 shadow-sm">
              <div className="absolute inset-4 rounded-lg border border-dashed border-[#A07730]/15 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-[#A07730] font-bold text-sm tracking-tight opacity-80">
                  זה המקום שלך לצמוח
                </span>
                <span className="text-[#A07730] font-black text-base underline underline-offset-4 tracking-tight">
                  לחץ כאן ונשריין לך מקום
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* כפתור ראה עוד עבודות */}
        {!showMore && (
          <button onClick={() => setShowMore(true)} className="minimal-btn">
            ראה עוד עבודות
          </button>
        )}

        {/* עבודות נוספות בטעינה */}
        <div className="px-6">
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-12 pt-10"
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
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => {
                    setShowMore(false);
                    document
                      .getElementById("portfolio-mobile")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="minimal-btn"
                >
                  ראה פחות
                </button>
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
                אופציה א' - נפרדים כידידים
              </h3>
              <p className="text-[#4A4A4A] text-[15px] mb-6 leading-relaxed">
                אם החלטת שזה לא בשבילך, או שהרגשת שזה לא נתן לך את הערך שציפית
                לו - הכל טוב.
              </p>
              <ul className="space-y-3 text-[14px] md:text-[15px] text-[#1A1A1A] font-medium opacity-90 mt-auto">
                <li>- לא קרה כלום, נפרדים בלי משקעים.</li>
                <li>- הדף יורד מהאוויר ואין לך שום התחייבות.</li>
                <li>- לא שילמת דמי ניהול ולא הפסדת שקל.</li>
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
                אופציה ב' - הופכים לקבוע
              </h3>
              <p className="text-gray-400 text-[15px] mb-6 leading-relaxed">
                אם החלטת שהשיטה הזו עובדת בשבילך ואתה רוצה להמשיך לצמוח יחד, זה
                המודל שלנו:
              </p>

              <div className="mb-6">
                <div className="text-[#A07730] text-3xl font-black tracking-tighter">
                  1,500 ₪{" "}
                  <span className="text-sm font-normal text-gray-400">
                    חד פעמי
                  </span>
                </div>
                <p className="text-gray-400 text-xs">
                  והאתר עובר לבעלותך המלאה (עיצוב + קוד)
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#A07730]/20 mb-6"></div>

              <ul className="space-y-3 text-[14px] md:text-[15px] text-white font-medium mt-auto">
                <li className="text-[#A07730] font-bold mb-2">
                  500 ₪ ריטיינר חודשי שכולל:
                </li>
                <li>- ניהול קמפיין פייסבוק/אינסטגרם שוטף.</li>
                <li>- הכנת קריאייטיבים (עיצוב מודעות וטקסטים).</li>
                <li>- קניית דומיין אישי ואחסון פרימיום.</li>
                <li>- תחזוקה ושינויי תוכן לפי הצורך.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ── 7. CONTACT: גרסת השקה נעולה וחוקית ── */}
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

          <div className="bg-[#F9F9F9] px-4 py-8 md:p-12 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-2xl shadow-[#A07730]/5 text-right">
            {/* הטופס מחובר לפעולת השרת */}
            <form
              action={async (formData) => {
                await sendContactForm(formData);
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-right">
                <div className="w-full">
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                    שם מלא
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="ישראל ישראלי"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                    טלפון
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="050-0000000"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right"
                  />
                </div>
              </div>

              <div className="w-full text-right">
                <label className="block text-xs font-bold text-[#1A1A1A] mb-2 mr-1">
                  ספר לי קצת על העסק
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="כמה מילים על העסק ומה המטרה שלך מהדף..."
                  className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 focus:border-[#A07730] outline-none transition-all text-right resize-none"
                ></textarea>
              </div>

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
                className="w-full bg-[#A07730] hover:bg-[#8A6528] text-white font-black py-5 rounded-2xl shadow-lg shadow-[#A07730]/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98] order-1 md:order-2"
              >
                <span>שלח ובוא נבדוק התאמה</span>
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
              </button>
            </form>
          </div>

          {/* צ'קליסט תחתון */}
          <div className="mt-8 flex flex-nowrap justify-center gap-4 md:gap-10 border-t border-gray-200/50 pt-5">
            <div className="flex items-center gap-1 text-[10px] md:text-[13px] font-bold text-[#4A4A4A] whitespace-nowrap">
              <span className="text-[#A07730]">✓</span> חודש ראשון חינם
            </div>
            <div className="flex items-center gap-1 text-[10px] md:text-[13px] font-bold text-[#4A4A4A] whitespace-nowrap">
              <span className="text-[#A07730]">✓</span> ללא אשראי
            </div>
            <div className="flex items-center gap-1 text-[10px] md:text-[13px] font-bold text-[#4A4A4A] whitespace-nowrap">
              <span className="text-[#A07730]">✓</span> עצירה בכל עת
            </div>
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
                alt="Preview"
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
