"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ChevronDown,
  MousePointer2,
  Zap,
  Handshake,
  Target,
  Settings2,
  Rocket,
} from "lucide-react";

const sections = [
  {
    id: 1,
    title: "התהליך: איך הופכים גולש לכסף?",
    subtitle: "מה יוצא לך מזה",
    icon: <Zap className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- דף נחיתה מהיר פי 10 מוויקס - נבנה בקוד נקי (Next.js)",
      "- קמפיין ממומן שפוגע רק בלקוחות רלוונטיים שצריכים עבודה עכשיו",
      "- הפיקסל: 'מנהל עבודה' סמוי שרודף אחרי לקוחות שראו ולא השאירו פרטים",
      "- סינון לידים: מי שפונה אליך כבר ראה עבודות והבין שאתה לא זול",
    ],
  },
  {
    id: 2,
    title: "הקלפים על השולחן: האינטרס שלי",
    subtitle: "שקיפות מלאה",
    icon: <Handshake className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- אני לא עובד בחינם ואני לא פראייר - אני פה כדי לבנות לעצמי שם",
      "- ההצלחה שלך היא הפורטפוליו שלי - אם לא תרוויח, אין לי עסק",
      "- אני רעב לתוצאות יותר מכל סוכנות גדולה שרק רוצה את הריטיינר שלך",
      "- שקיפות מלאה: אתה רואה כל שקל שיוצא ולאן הוא הולך בקמפיין",
    ],
  },
  {
    id: 3,
    title: "מה זה דורש ממך? (בלי סיפורים)",
    subtitle: "ההשקעה שלך",
    icon: <Target className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- 1,500 ₪ עלות הקמה חד פעמית - האתר שלך לתמיד",
      "- תקציב פרסום: לפחות 1,500 ₪ בחודש למטא (פחות מזה זה סתם הימור)",
      "- זמן: שיחת אפיון של 20 דקות וזום טכני קצר לפתיחת חשבונות",
      "- שליטה מלאה: האשראי והחשבונות שלך, אני רק מנהל את המכונה",
    ],
  },
  {
    id: 4,
    title: "החלק המעצבן: הטכנולוגיה עלי",
    subtitle: "שקט נפשי",
    icon: <Settings2 className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- פתיחת דף עסקי, אינסטגרם, פיקסלים וחיבורים - הכל אני עושה איתך",
      "- הגדרת גוגל מפות (Business Profile) כדי שתופיע בחינם בחיפושים",
      "- חיבור מערכת דיווח לידים ישירות לוואטסאפ העסקי שלך",
      "- אתה מתעסק בעבודה בשטח - אני סוגר לך את הפינה הטכנית המעיקה",
    ],
  },
  {
    id: 5,
    title: "לו'ז עבודה: מתי מתחילים להרוויח?",
    subtitle: "יוצאים לדרך",
    icon: <Rocket className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- תוך 72 שעות מהעברת תמונות: דף הנחיתה של העסק באוויר",
      "- זום טכני קצר: מחברים הכל ולוחצים על ה'פליי' של הקמפיין",
      "- שיפוף תוצאות: אנחנו משפרים את המודעות עד שהלידים זורמים",
      "- המטרה: ליד ראשון כבר בשבוע הראשון של הפרסום",
    ],
  },
];

export default function PitchPage() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const hideElements = () => {
      const selectors = [
        "header",
        "footer",
        '[class*="CookieBanner"]',
        '[class*="FloatingActions"]',
        "#whatsapp-button",
        "#accessibility-widget",
      ];
      selectors.forEach((s) =>
        document
          .querySelectorAll(s)
          .forEach((el) => ((el as HTMLElement).style.display = "none")),
      );
      document.body.style.overflow = "hidden";
    };
    hideElements();
    return () => {
      document
        .querySelectorAll("header, footer")
        .forEach((el) => ((el as HTMLElement).style.display = ""));
      document.body.style.overflow = "";
    };
  }, []);

  const handleLaunch = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100000] bg-[#FDFCF9] overflow-y-auto scroll-smooth hide-scrollbar text-zinc-900 font-sans"
      dir="rtl"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#A67C37] origin-right z-[100001]"
        style={{ scaleX }}
      />
      <div className="relative">
        {sections.map((s) => (
          <section
            key={s.id}
            className="h-screen w-full flex flex-col items-center justify-center p-8 relative border-b border-[#A67C37]/10"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl w-full text-right"
            >
              <div className="mb-4">
                <span className="bg-[#A67C37]/10 text-[#A67C37] px-4 py-1 rounded-full text-sm font-bold uppercase">
                  {s.subtitle} — {s.id}/5
                </span>
              </div>
              <div className="flex items-center gap-8 mb-10">
                <h2 className="text-4xl md:text-7xl font-black text-zinc-900 leading-tight">
                  {s.id >= 4 ? (
                    <span className="text-[#A67C37]">{s.title}</span>
                  ) : (
                    s.title
                  )}
                </h2>
                <div className="hidden md:block opacity-80">{s.icon}</div>
              </div>
              <ul className="space-y-6 mb-16">
                {s.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-xl md:text-3xl text-zinc-600 font-medium"
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>
              {s.id === 5 && (
                <div className="flex justify-center">
                  <button
                    onClick={handleLaunch}
                    disabled={isSending || sent}
                    className={`px-20 py-6 rounded-2xl text-3xl font-black transition-all shadow-2xl ${sent ? "bg-green-600 text-white" : "bg-[#A67C37] text-white hover:scale-105 active:scale-95"}`}
                  >
                    {isSending
                      ? "יוצק יסודות..."
                      : sent
                        ? "יוצאים לדרך! 🔥"
                        : "מאשר ומתחילים?"}
                  </button>
                </div>
              )}
            </motion.div>
            {s.id < 5 && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
                <ChevronDown size={48} />
              </div>
            )}
          </section>
        ))}
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
