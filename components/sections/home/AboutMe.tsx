import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-[#FCFBFA] px-6 font-heebo overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
        {/* טור הטקסט - 60% מהרוחב, יופיע בימין בדסקטופ */}
        <div className="w-full md:w-[60%] flex flex-col items-start text-right order-last md:order-none">
          {/* כותרת הסקשן */}
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
                  אני לא רק "מעלה מודעה" - אני מבין איך הלקוח חושב ואיך לגרום לו
                  לעצור ולהשאיר פרטים. נולדתי לתוך הכלים האלה, ואני מביא לעסק
                  שלך{" "}
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
            בוא נדבר - שיחה קצרה שתעזור לנו להבין אם הפתרון שלי הוא מה שהעסק שלך
            צריך כרגע.
          </p>
        </div>

        {/* טור התמונה */}
        <div className="w-full md:w-[40%] order-first md:order-none flex items-center justify-center md:justify-end">
          <div className="relative animate-bob w-[280px] md:w-full max-w-[360px]">
            <Image
              src="/images/me.webp"
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
  );
}
