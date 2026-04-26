export default function Identification() {
  return (
    <section
      className="bg-[#F9F9F9] py-12 md:py-16 px-6 font-heebo border-t border-gray-100"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        <div className="w-full md:w-[60%] text-right">
          {/* כותרת הסקשן */}
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

          {/* גוף הטקסט */}
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

            {/* פסקת הציטוט המודגשת - הייתה חסרה בקוד שלך */}
            <p className="font-medium italic text-[15px] md:text-[17px] mt-8 border-r-2 border-[#A07730] pr-3 py-1">
              זה לא כי הוא איש מקצוע טוב ממך - זה פשוט כי{" "}
              <span className="text-[#1A1A1A] font-bold">
                הוא דאג להופיע להם מול העיניים.
              </span>
            </p>

            {/* שורת המחץ - הייתה חסרה בקוד שלך */}
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
  );
}
