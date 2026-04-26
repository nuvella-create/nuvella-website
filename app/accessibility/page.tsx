import { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות | Nuvella Digital",
  description:
    "נגישות זה חלק מהמקצועיות שלנו. כאן תוכלו לקרוא על התאמת האתר של נויבלה דיגיטל לכלל המשתמשים.",
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
        'אנו רואים חשיבות עליונה במתן שירות שוויוני לכלל הגולשים ומשקיעים משאבים רבים בהנגשת האתר. מטרתנו היא לאפשר לאנשים עם מוגבלות גלישה נוחה ועצמאית. האתר הונגש בהתאם לתקן הישראלי (ת"י 5568) ובהתאם להנחיות הנגישות הבינלאומיות ברמה AA.',
    },
    {
      id: 2,
      title: "התאמות הנגישות באתר",
      content: "להלן הפעולות המרכזיות שבוצעו לצורך הנגשת האתר:",
      list: [
        "התקנת רכיב נגישות (אייקון) המאפשר שליטה על גודל הגופן, ניגודיות צבעים והדגשת קישורים.",
        "התאמה מלאה לניווט באמצעות מקלדת (ללא שימוש בעכבר).",
        "תמיכה בתוכנות קורא מסך נפוצות עבור עיוורים וכבדי ראייה.",
        "שימוש בתגיות Alt לכל התמונות המשמעותיות באתר.",
        "מבנה אתר רספונסיבי המותאם לגלישה מניידים וטאבלטים.",
        "כתיבת קוד סמנטי ושמירה על היררכיית כותרות תקינה.",
      ],
    },
    {
      id: 3,
      title: "פטורים והחרגות",
      content:
        "האתר מונגש ברמת סבירות מקסימלית ובהתאם ליכולות הטכנולוגיות הקיימות. בשל היות העסק עסק קטן ודיגיטלי, קיימים פטורים מסוימים מהנגשה מלאה על פי חוק (תקנה 35), אך אנו עושים כמיטב יכולתנו להנגיש את כלל התוכן המרכזי.",
    },
    {
      id: 4,
      title: "נגישות פיזית",
      content:
        "Nuvella Digital היא סוכנות שיווק דיגיטלית הפועלת מרחוק. העסק אינו מקבל קהל בכתובת פיזית וכל השירותים ניתנים באמצעים טכנולוגיים, טלפוניים ודיגיטליים בלבד.",
    },
  ];

  return (
    <div className="bg-[#FAF5EB] min-h-screen">
      <section className="bg-[#1A1A1A] pt-32 pb-16 px-6 text-center border-b-4 border-[#A07730]">
        <p className="text-[#A07730] font-bold text-xs tracking-widest uppercase mb-3">
          מסמך רשמי
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-black mb-4">
          הצהרת נגישות
        </h1>
        <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed font-medium">
          Nuvella Digital פועלת לקידום הנגישות הדיגיטלית מתוך הבנה כי לכל אדם
          זכות לחיות בשוויון, כבוד ועצמאות.
        </p>
      </section>

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

          <div className="bg-white border border-[#E5E5E0] rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] border border-[#E8D5A8] flex items-center justify-center text-[#A07730] font-black text-lg shrink-0">
                5
              </div>
              <h2 className="text-xl font-extrabold text-[#1A1A1A]">
                דרכי פנייה ורכז נגישות
              </h2>
            </div>
            <p className="text-[#666666] leading-relaxed mb-6 font-medium">
              אם נתקלתם בקושי בגלישה או ברכיב שאינו מונגש, נשמח שתפנו אלינו כדי
              שנוכל לתקן ולשפר את חוויית השימוש עבורכם:
            </p>
            <div className="bg-[#FAF5EB]/50 p-6 rounded-xl border border-[#E8D5A8] space-y-3">
              <p className="text-sm text-[#1A1A1A]">
                <strong>רכז נגישות:</strong> איתי דור
              </p>
              <p className="text-sm text-[#1A1A1A]">
                <strong>טלפון / וואטסאפ:</strong>{" "}
                <a
                  href="tel:0539736329"
                  dir="ltr"
                  className="hover:text-[#A07730] transition-colors"
                >
                  053-973-6329
                </a>
              </p>
              <p className="text-sm text-[#1A1A1A]">
                <strong>דוא"ל:</strong>{" "}
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
            הצהרת הנגישות עודכנה לאחרונה בתאריך: <strong>24 באפריל 2026</strong>
          </div>
        </div>
      </main>
    </div>
  );
}
