interface ListItem {
  text: string;
  label?: string; // הסימן ? אומר שזה אופציונלי - וזה מה שפותר את השגיאה
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
        "השימוש באתר זה, לרבות גלישה בו, השארת פרטים בטופס צור קשר או כל אינטראקציה אחרת, מהווה את הסכמתך המלאה לתנאי מדיניות פרטיות זו ולתנאי השימוש. במידה ואינך מסכים לאחד או יותר מהתנאים, הנך מתבקש לעזוב את האתר לאלתר ולא לעשות בו כל שימוש.",
    },
    {
      id: 2,
      title: "איסוף מידע",
      content: "אנו אוספים שני סוגים עיקריים של מידע ממשתמשי האתר:",
      list: [
        {
          label: "מידע שנמסר באופן אקטיבי:",
          text: 'שם מלא, מספר טלפון, כתובת דוא"ל, תחומי עניין וכל מידע אחר שהוזן על ידך בטפסים שבאתר.',
        },
        {
          label: "מידע שנאסף באופן אוטומטי (טכנולוגי):",
          text: "כתובת IP, סוג דפדפן, סוג מכשיר, מיקום משוער, דפים בהם ביקרת ונתונים סטטיסטיים נוספים.",
        },
      ],
    },
    {
      id: 3,
      title: "קוקיז (Cookies) וטכנולוגיות מעקב",
      content:
        "האתר עושה שימוש נרחב בכלים של צדדים שלישיים לצורך שיווק, סטטיסטיקה ופרסום ממוקד מחדש (Remarketing).",
      list: [
        {
          text: "כלים אלו שותלים קבצי Cookies בדפדפן שלך כדי לזהות את תחומי העניין שלך ולהציג לך מודעות מותאמות אישית.",
        },
        {
          text: "המידע שנאסף על ידי חברות אלו כפוף למדיניות הפרטיות שלהן. באפשרותך לחסום או למחוק קבצי Cookies בהגדרות הדפדפן.",
        },
      ],
    },
    {
      id: 4,
      title: "העברת פרטים ללקוחות קצה",
      content:
        "Nuvella Digital היא סוכנות שיווק. המידע שאתה מספק לנו משמש אותנו כדי ליצור עמך קשר ולהציע לך את שירותינו.",
      extra:
        "במידה והשארת את פרטיך באתר ייעודי, הנך מאשר לנו במפורש להעביר את פרטיך (הליד) לאיש המקצוע הרלוונטי כדי שיוכל לתת לך שירות.",
    },
    {
      id: 5,
      title: "דיוור ישיר (חוק הספאם)",
      content:
        "בהשארת פרטיך באתר, הנך נותן את הסכמתך המפורשת לקבלת דברי דואר, הודעות SMS, וואטסאפ ושיחות טלפון מ-Nuvella Digital.",
      list: [
        {
          text: "הנך רשאי לחזור בך מהסכמתך בכל עת על ידי שליחת הודעת סירוב פשוטה.",
        },
      ],
    },
    {
      id: 6,
      title: "אבטחת מידע",
      content:
        "אנו משקיעים מאמצים סבירים לאבטח את המידע הנשמר אצלנו. יחד עם זאת, מערכות אלו אינן מבטיחות חסינות מוחלטת מפני פריצות סייבר.",
      extra:
        "זכותך לפנות אלינו בבקשה לעיין במידע השמור עליך, ולבקש לתקן או למחוק אותו במידה ואינו מדויק.",
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
          מסמך זה מפרט את תנאי השימוש באתר ואת האופן שבו Nuvella Digital אוספת,
          שומרת ועושה שימוש במידע של הגולשים.
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
