export default function Transparency() {
  return (
    <section
      id="transparency"
      className="py-20 md:py-32 px-6 bg-white md:bg-[#F2F2F2] border-t border-gray-100"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        {/* בלוק כותרת */}
        <div className="flex flex-col items-start mb-16 text-right">
          <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
            <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
            שקיפות מלאה
          </span>

          <div className="relative inline-block">
            <h2 className="text-[24px] md:text-[32px] font-black text-[#1A1A1A] leading-tight tracking-tighter">
              מה קורה בסוף חודש הניסיון?
            </h2>
            <div className="absolute -bottom-2 md:-bottom-3 right-0 w-12 h-[2px] md:h-[2.5px] bg-[#A07730]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* אופציה א' - סיום התקשרות */}
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

          {/* אופציה ב' - מסלול קבוע */}
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
  );
}
