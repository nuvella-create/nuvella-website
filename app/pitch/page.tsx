"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  XCircle,
  ChevronDown,
  MousePointer2,
  HardHat,
  Construction,
  Target,
  ShieldCheck,
  Factory,
  Key,
} from "lucide-react";

const sections = [
  {
    id: 1,
    title: "המציאות בשטח: מפה לאוזן זה הימור",
    subtitle: "שלב 1: הריסה",
    icon: <XCircle className="w-16 h-16 text-red-500/80" />,
    bullets: [
      "- המלצות זה הבסיס, אבל זה לא 'ברז' שאפשר לפתוח כשצריך עבודה",
      "- בזמן שאתה מחכה לטלפון, הלקוחות הכי גדולים כבר סוגרים עם המתחרה",
      "- הלחץ לסגור חודש גורם לך 'לגלח' מחירים רק כדי שהפועלים לא ישבו בבית",
      "- אתה מקצוען בשטח - אבל בדיגיטל אתה כרגע תייר, והמתחרים מנצלים את זה",
    ],
  },
  {
    id: 2,
    title: "היסודות: בונים לך תשתית מבטון מזוין",
    subtitle: "שלב 2: יציקה",
    icon: <Construction className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- לא 'וואלה' ולא 'וויקס' - אני יוצק לך אתר בקוד מאפס (Next.js)",
      "- זה כמו יסודות לעומק 12 מטר: האתר מהיר, חסין ולא זז גם בעומס",
      "- 'צלף דיגיטלי' - אנחנו שמים שלט רק בבית של מי שקיבל היתר בנייה השבוע",
      "- הפיקסל: מנהל עבודה סמוי שרודף אחרי לקוחות שלא השאירו פרטים",
    ],
  },
  {
    id: 3,
    title: "המסננת: למה הלידים שלי הם לא 'פח'?",
    subtitle: "שלב 3: סינון",
    icon: <Factory className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- נמאס לך מ'חופרים' שרוצים רק מחיר? דף הנחיתה שלי הוא שומר הסף",
      "- הלקוח עובר 'תחקיר' עוד לפני שהוא מקבל את המספר שלך",
      "- הוא רואה עבודות, מבין שאתה ליגה אחרת, ורק אז מרים יד",
      "- אתה מקבל קריאת שירות חמה - לקוח שמוכן לסגור ולא רק לעשות סקר",
    ],
  },
  {
    id: 4,
    title: "הטאבו: הנכס עובר לבעלותך המלאה",
    subtitle: "שלב 4: גמר",
    icon: <ShieldCheck className="w-16 h-16 text-green-600/80" />,
    bullets: [
      "- חודש 1: 0 ₪ דמי ניהול - אני מוכיח לך שהמכונה מדפיסה כסף לפני שתשלם",
      "- 1,500 ₪ הקמה וזהו - האתר שלך לתמיד, רשום על שמך בטאבו הדיגיטלי",
      "- 500 ₪ ריטיינר: עלות של פועל אחד לחצי יום בשביל שקט נפשי לכל החודש",
      "- בלי חוזים דרקוניים - אני שותף שלך, לא עוד ספק שגונב אותך",
    ],
  },
  {
    id: 5,
    title: "מסירת מפתח: יוצאים לשלוט בשוק",
    subtitle: "שלב 5: אכלוס",
    icon: <Key className="w-16 h-16 text-[#A67C37]" />,
    bullets: [
      "- מחר בבוקר ה'מכונה' שלך נכנסת לייצור - נותרו 2 מקומות פנויים בלבד",
      "- אני בן 18, אני רעב להצלחה שלך כי השם שלי תלוי בתוצאות שלך",
      "- תוך 5 דקות מהלחיצה: מייל סיכום ותיאום שיחת אפיון יוצא אליך",
      "- בוא נלחץ ונפסיק להמר על העתיד של העסק שלך",
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
      selectors.forEach((selector) => {
        document
          .querySelectorAll(selector)
          .forEach((el) => ((el as HTMLElement).style.display = "none"));
      });
      document.body.style.overflow = "hidden";
    };
    hideElements();
    const timer = setTimeout(hideElements, 1000);
    return () => {
      document
        .querySelectorAll("header, footer")
        .forEach((el) => ((el as HTMLElement).style.display = ""));
      document.body.style.overflow = "";
      clearTimeout(timer);
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
        {sections.map((section) => (
          <section
            key={section.id}
            className="h-screen w-full flex flex-col items-center justify-center p-8 relative border-b border-[#A67C37]/10"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl w-full text-right"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#A67C37]/10 text-[#A67C37] px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                  {section.subtitle} — {section.id}/5
                </span>
              </div>

              <div className="flex items-center gap-8 mb-10">
                <h2 className="text-4xl md:text-7xl font-black text-zinc-900 leading-tight">
                  {section.id >= 4 ? (
                    <span className="bg-gradient-to-r from-[#A07730] via-[#E7C58A] to-[#A07730] bg-clip-text text-transparent animate-shimmer font-black">
                      {section.title}
                    </span>
                  ) : (
                    section.title
                  )}
                </h2>
                <div className="hidden md:block opacity-80">{section.icon}</div>
              </div>

              <ul className="space-y-6 mb-16">
                {section.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-xl md:text-3xl text-zinc-600 font-medium flex items-center gap-4"
                  >
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>

              {section.id === 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="flex justify-center mt-4"
                >
                  <button
                    onClick={handleLaunch}
                    disabled={isSending || sent}
                    className={`group relative px-20 py-6 rounded-2xl text-3xl font-black transition-all duration-500 shadow-2xl ${
                      sent
                        ? "bg-green-600 text-white"
                        : "bg-[#A67C37] text-white hover:bg-[#8E6A2F] active:scale-95"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {isSending
                        ? "יוצק יסודות..."
                        : sent
                          ? "מפתח בדרך אליך! 🔥"
                          : "בוא נלחץ?"}
                      {!isSending && !sent && (
                        <MousePointer2 className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                    </div>
                  </button>
                </motion.div>
              )}
            </motion.div>

            {section.id < 5 && (
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
        body {
          background-color: #fdfcf9 !important;
        }
      `}</style>
    </div>
  );
}
