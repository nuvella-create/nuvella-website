import Link from "next/link";

export default function Process() {
  return (
    <section
      id="how"
      className="bg-white py-12 md:py-16 px-6 font-heebo border-t border-gray-100"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        <div className="w-full md:w-[60%] text-right">
          {/* כותרת הסקשן */}
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

          {/* רשימת השלבים עם ה-Timeline */}
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
                  שיחת זום ממוקדת של 20 דקות - נבין בדיוק מי הקהל שלך, איך להשיג
                  אותו ונתאם ציפיות בלי לחץ ובלי מחויבות.
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
                  קמפיין שפוגע בול במי שצריך אותך עכשיו -{" "}
                  <span className="font-medium">
                    הכל מוכן לעבודה תוך כמה ימים.
                  </span>
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
                  הקמפיין באוויר ואני דואג לניהול השוטף ולהזרמת פניות רלוונטיות
                  בזמן שאתה פשוט עוסק בעבודה שלך.
                </p>
              </div>
            </div>
          </div>

          {/* פסקת סיכום והנעה לפעולה */}
          <div className="mt-12 space-y-5 text-right">
            <div className="p-5 bg-[#F9F9F7] rounded-xl border-r-4 border-[#A07730] shadow-sm">
              <p className="text-[16px] md:text-[18px] font-black text-[#1A1A1A] leading-tight mb-2">
                חודש ראשון ללא דמי ניהול.
              </p>
              <p className="text-[13px] md:text-[15px] text-[#4A4A4A] leading-relaxed font-medium">
                אני משקיע את הזמן והעבודה שלי - כי אני בטוח שאחרי שתראה תוצאות,
                תרצה להמשיך.
              </p>
            </div>

            {/* הכפתור שהיה חסר בקוד שלך */}
            <div className="pt-1">
              <Link
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
