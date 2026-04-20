import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | Nuvella Digital",
  description:
    "איך אנחנו שומרים על המידע שלכם בנויבלה דיגיטל. שקיפות מלאה לגבי הנתונים וניהול הקמפיינים שלנו.",
};

interface ListItem {
  text: string;
  label?: string;
}

interface Section {
  id: number;
  title: string;
  content: string;
  list?: ListItem[];
  extra?: string;
}

export default function PrivacyPolicy() {
  const sections: Section[] = [
    {
      id: 1,
      title: "הסכמה לתנאים",
      content:
        "השימוש באתר זה, לרבות גלישה, השארת פרטים או כל אינטראקציה אחרת, מהווה הסכמה מלאה לתנאי המדיניות. במידה ואינך מסכים לאחד מהתנאים, הנך מתבקש להפסיק את הגלישה באתר לאלתר.",
    },
    {
      id: 2,
      title: "איסוף מידע",
      content: "אנו אוספים נתונים לצורך שיפור השירות והתאמת התוכן עבורך:",
      list: [
        {
          label: "מידע אקטיבי:",
          text: 'שם, טלפון, דוא"ל וכל מידע שהוזן בטפסים באופן יזום על ידי הגולש.',
        },
        {
          label: "מידע טכנולוגי:",
          text: "כתובת IP, סוג מכשיר, דפים בהם ביקרת ונתוני סטטיסטיקה לצורך אופטימיזציה.",
        },
      ],
    },
    {
      id: 3,
      title: "קוקיז (Cookies) וצדדים שלישיים",
      content:
        "האתר עושה שימוש בכלים של Google ,Meta (פייסבוק) וצדדים שלישיים לצורך שיווק ופרסום מחדש (Remarketing).",
      list: [
        {
          text: "הכלים שותלים קבצי Cookies בדפדפן כדי לזהות העדפות ולהציג מודעות רלוונטיות.",
        },
        {
          text: "המידע שנאסף על ידי חברות אלו כפוף למדיניות הפרטיות שלהן בלבד. ניתן לחסום Cookies בהגדרות הדפדפן בכל עת.",
        },
      ],
    },
    {
      id: 4,
      title: "העברת פרטים (לידים) ואחריות",
      content:
        "Nuvella Digital פועלת כסוכנות שיווק ומתווכת בין גולשים לאנשי מקצוע. במידה והשארת פרטים באתר ייעודי, הנך מאשר לנו להעביר את פרטיך לאיש המקצוע הרלוונטי.",
      extra:
        "חשוב להדגיש: מרגע העברת הפרטים, האחריות הבלעדית על השירות, איכותו והשימוש במידע חלה על איש המקצוע בלבד. Nuvella Digital אינה צד בעסקה ולא תישא באחריות להתנהלות צד ג'.",
    },
    {
      id: 5,
      title: "דיוור ישיר וחוק התקשורת",
      content:
        "השארת פרטים מהווה הסכמה מפורשת לקבלת תוכן שיווקי, הודעות SMS, וואטסאפ ושיחות טלפון מ-Nuvella Digital או מטעמה.",
      list: [
        {
          text: "הסכמה זו מהווה אישור למשלוח דבר פרסומת לפי חוק התקשורת. ניתן לבקש הסרה מרשימת התפוצה בכל עת על ידי הודעת סירוב.",
        },
      ],
    },
    {
      id: 6,
      title: "אבטחת מידע וזכויות הגולש",
      content:
        "אנו משקיעים מאמצים באבטחת המידע, אך אין חסינות מוחלטת מפני פריצות סייבר. זכותך לבקש לעיין במידע השמור עליך או לבקש את מחיקתו מהמאגר שלנו.",
    },
    {
      id: 7,
      title: "יצירת קשר ושירות לקוחות",
      content:
        "לכל שאלה, עדכון פרטים או בקשת הסרה, ניתן לפנות אלינו בערוצים הבאים:",
      list: [
        { label: 'דוא"ל:', text: "office@nuvella.co.il" },
        { label: "טלפון / וואטסאפ:", text: "055-9736329" },
        { label: "שעות פעילות:", text: "א'-ה' 09:00-18:00" },
      ],
    },
  ];

  return (
    <div className="bg-[#FAF5EB] min-h-screen">
      <section className="bg-[#1A1A1A] pt-32 pb-16 px-6 text-center border-b-4 border-[#A07730]">
        <p className="text-[#A07730] font-bold text-xs tracking-widest uppercase mb-3">
          מסמך משפטי מחייב
        </p>
        <h1 className="text-white text-3xl md:text-5xl font-black mb-4">
          מדיניות פרטיות ותנאי שימוש
        </h1>
        <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed font-medium">
          מסמך זה מפרט את תנאי הגלישה באתר Nuvella Digital. המטרה שלנו היא לשמור
          על השקיפות והביטחון שלכם.
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border border-[#E5E5E0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
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
                      {item.label && (
                        <strong className="text-[#1A1A1A] block md:inline ml-1">
                          {item.label}
                        </strong>
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <p className="mt-4 p-4 bg-[#FAF5EB]/50 rounded-lg border-r-4 border-[#A07730] text-[#1A1A1A] font-bold text-sm">
                  {section.extra}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
