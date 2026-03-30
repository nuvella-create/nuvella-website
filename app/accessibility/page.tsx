import { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות | Nuvella Digital",
  description:
    "Nuvella Digital מחויבת להנגשת שירותיה לכלל האוכלוסייה. קראו את הצהרת הנגישות שלנו.",
};

interface AccessibilitySection {
  id: number;
  title: string;
  content: string;
  list?: string[];
}

export default function AccessibilityPage() {
  const sections: AccessibilitySection[] = [
    {
      id: 1,
      title: "מבוא",
      content:
        'אנו משקיעים מאמצים ומשאבים רבים בהפיכת אתר זה לנגיש ונוח לשימוש עבור אנשים עם מוגבלות. הנגשת האתר בוצעה בהתאם לתקן הישראלי (ת"י 5568) והנחיות הנגישות הבינלאומיות ברמה AA, במידת האפשר.',
    },
    {
      id: 2,
      title: "התאמות הנגישות באתר",
      content: "להלן רשימת ההתאמות המרכזיות שביצענו:",
      list: [
        "ניווט באמצעות מקלדת באופן מלא.",
        "תמיכה בתוכנות קורא מסך נפוצות.",
        "אפשרות לשינוי גודל הגופן ושמירה על מבנה האתר.",
        "ניגודיות צבעים תקינה ועמידה בסטנדרטים.",
        "תגיות Alt לכל התמונות המשמעותיות באתר.",
        "מבנה האתר רספונסיבי ומותאם למכשירים ניידים וטאבלטים.",
      ],
    },
    {
      id: 3,
      title: "פטורים והחרגות",
      content:
        "בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות, ובהתחשב בהיות העסק עסק קטן, קיימים פטורים מסוימים מהנגשה מלאה. עם זאת, אנו עושים כמיטב יכולתנו להנגיש את התוכן המרכזי באתר.",
    },
  ];

  return (
    <div className="bg-[#FAF5EB] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] pt-32 pb-16 px-6 text-center border-b-4 border-[#A07730]">
        <p className="text-[#A07730] font-bold text-xs tracking-widest uppercase mb-3">
          מסמך רשמי
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-black mb-4">
          הצהרת נגישות
        </h1>
        <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed font-medium">
          Nuvella Digital רואה חשיבות עליונה בהנגשת שירותיה לכלל האוכלוסייה, תוך
          מתן כבוד ועצמאות לאנשים עם מוגבלויות.
        </p>
      </section>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border border-[#E5E5E0] rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] border border-[#E8D5A8] flex items-center justify-center text-[#A07730] font-black text-lg shrink-0">
                  {section.id}
                </div>
                <h2 className="text-xl font-extrabold text-[#1A1A1A]">
                  {section.title}
                </h2>
              </div>
              <p className="text-[#666666] leading-relaxed mb-4 font-medium">
                {section.content}
              </p>
              {section.list && (
                <ul className="space-y-3 mr-2">
                  {section.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="relative pr-6 text-[#666666] leading-relaxed text-sm"
                    >
                      <span className="absolute right-0 top-2.5 w-1.5 h-1.5 bg-[#A07730] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-white border border-[#E5E5E0] rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] border border-[#E8D5A8] flex items-center justify-center text-[#A07730] font-black text-lg shrink-0">
                4
              </div>
              <h2 className="text-xl font-extrabold text-[#1A1A1A]">
                דרכי פנייה ורכז נגישות
              </h2>
            </div>
            <p className="text-[#666666] leading-relaxed mb-6 font-medium">
              נתקלתם בבעיית נגישות באתר? אנחנו כאן כדי לעזור ולתקן. ניתן לפנות
              לרכז הנגישות שלנו:
            </p>
            <div className="bg-[#FAF5EB]/50 p-6 rounded-xl border border-[#E8D5A8] space-y-3">
              <p className="text-sm text-[#1A1A1A]">
                <strong>שם רכז הנגישות:</strong> איתי דור
              </p>
              <p className="text-sm text-[#1A1A1A]">
                <strong>טלפון/וואטסאפ:</strong>{" "}
                <a
                  href="tel:0526052579"
                  dir="ltr"
                  className="hover:text-[#A07730] transition-colors"
                >
                  052-605-2579
                </a>
              </p>
              <p className="text-sm text-[#1A1A1A]">
                <strong>מייל:</strong>{" "}
                <a
                  href="mailto:office@nuvella.co.il"
                  className="hover:text-[#A07730] transition-colors"
                >
                  office@nuvella.co.il
                </a>
              </p>
            </div>
          </div>

          <div className="text-center text-[#666666] text-xs pt-4 font-medium">
            הצהרת הנגישות עודכנה לאחרונה בתאריך: <strong>19 במרץ 2026</strong>
          </div>
        </div>
      </main>
    </div>
  );
}
