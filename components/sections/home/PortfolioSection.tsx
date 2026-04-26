"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    id: 1,
    src: "/images/project1.webp",
    title: "בוני פרגולות ומרחבי חוץ",
    alt: "עיצוב ובניית דף נחיתה לעסק פרגולות ומרחבי חוץ - נויבלה דיגיטל",
    desc: "תשתית שיווקית שמוכיחה מקצועיות מהשנייה הראשונה. שילוב נקי בין עבודות בשטח לבין המסרים שגורמים לאנשים להרים טלפון ולהזמין.",
  },
  {
    id: 3,
    src: "/images/project3.webp",
    title: "טכנאים ושירותי חירום",
    alt: "תשתית שיווקית ודף נחיתה לטכנאי שירותי חירום - אופטימיזציה לנייד",
    desc: "תשתית שיווקית לענף השירותים המהירים. במקצועות שבהם כל שנייה קובעת, הדף מראה ללקוח הלחוץ בדיוק מה שהוא צריך - הבטחה לזמן הגעה וכפתור חיוג שבולט ישר בעין.",
  },
  {
    id: 2,
    src: "/images/project2.webp",
    title: "קבלני שיפוצים וגמר",
    alt: "דף נחיתה שיווקי לקבלן שיפוצים עם דגש על המרות - נויבלה דיגיטל",
    desc: `דף נחיתה שמשדר רצינות וניסיון מהשנייה הראשונה. הוא חותך את כל ה"סיפורים" ומראה ללקוח בדיוק למה הוא הגיע למקום הנכון - כדי שירים את הטלפון בביטחון.`,
  },
  {
    id: 4,
    src: "/images/project4.webp",
    title: "חברות בנייה וניהול הנדסי",
    alt: "מיתוג ובניית דף נחיתה לחברת ניהול הנדסי ובנייה פרטית - נויבלה",
    desc: "דף שמוכיח ללקוח שאין פה מקום לטעויות. הוא משדר סמכות הנדסית ובונה אמון מהיר, מה שגורם לגולש להבין שזה העסק שהוא רוצה שינהל לו את הפרויקט.",
  },
];

export default function PortfolioSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── 5.1 PROOF: גרסת מחשב ── */}
      <section
        id="portfolio"
        className="hidden lg:block py-24 md:py-32 bg-[#FCFBFA] overflow-hidden border-t border-gray-100"
        dir="rtl"
      >
        <div className="max-w-[1600px] mx-auto px-10 xl:px-20 flex flex-row items-center justify-between gap-12">
          {/* טור הטקסט */}
          <div className="w-[450px] xl:w-[500px] shrink-0 text-right z-20">
            <div className="flex flex-col items-start mb-10 text-right">
              <span className="relative text-[10px] md:text-[11px] font-bold text-[#A07730] tracking-tight uppercase mb-2 leading-none">
                <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
                מבחן התוצאה
              </span>
              <div className="relative inline-block w-full">
                <h2 className="text-[20px] md:text-[32px] font-black text-[#1A1A1A] leading-tight tracking-tighter">
                  לא סתם הגעת לדף הזה
                </h2>
                <div className="absolute -bottom-3 right-0 w-12 h-[2.5px] bg-[#A07730]"></div>
              </div>
            </div>

            <div className="text-[16px] md:text-[18px] text-[#4A4A4A] leading-relaxed space-y-6">
              <p>
                <span className="font-bold text-[#1A1A1A]">
                  העובדה שאתה קורא את זה עכשיו היא ההוכחה הכי טובה שלי.
                </span>
              </p>
              <p>
                זה לא מקרה. ידעתי בדיוק למי לכוון את המודעה כדי שהיא תופיע לך
                בטלפון ותביא אותך לפה. באותה רמת דיוק אני אדאג שהלקוחות שלך יראו
                אותך - בדיוק כשהם צריכים אותך.
              </p>
              <p className="font-black text-[#1A1A1A] text-xl">
                אבל קליקים הם רק חצי מהעבודה.
              </p>
              <p>
                להביא אנשים לדף זה קל, אבל בלי דף נחיתה שמשדר סמכות ויודע לסגור
                -{" "}
                <span className="font-bold text-[#1A1A1A] border-b-2 border-[#A07730]">
                  הכסף של הקמפיין פשוט נזרק לפח.
                </span>{" "}
                קליק שלא הופך לפנייה הוא בזבוז של תקציב.
              </p>
              <p className="text-[#A07730] font-bold">
                ככה נראות התשתיות שאני בונה:
              </p>
            </div>
          </div>

          {/* ערימת התמונות */}
          <div className="flex-1 relative h-[650px] min-w-[700px]">
            <div className="relative w-full h-full origin-right scale-[0.75] xl:scale-[0.9] 2xl:scale-100 transition-transform duration-500">
              {/* פרויקט 3 (טכנאים) */}
              <div
                onClick={() => setSelectedImg(projects[1].src)}
                className="floating-project delay-2 absolute rounded-2xl border-[8px] border-white overflow-hidden cursor-zoom-in bg-white shadow-lg"
                style={
                  {
                    top: "20px",
                    right: "0px",
                    width: "500px",
                    height: "300px",
                    "--r": "-4deg",
                    zIndex: 10,
                  } as any
                }
              >
                <Image
                  src={projects[1].src}
                  alt={projects[1].alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* פרויקט 1 (פרגולות) */}
              <div
                onClick={() => setSelectedImg(projects[0].src)}
                className="floating-project delay-1 absolute rounded-2xl border-[8px] border-white overflow-hidden aspect-video cursor-zoom-in shadow-xl"
                style={
                  {
                    top: "100px",
                    right: "280px",
                    width: "420px",
                    "--r": "3deg",
                    zIndex: 20,
                  } as any
                }
              >
                <Image
                  src={projects[0].src}
                  alt={projects[0].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* פרויקט 2 (שיפוצים) */}
              <div
                onClick={() => setSelectedImg(projects[2].src)}
                className="floating-project delay-3 absolute rounded-2xl border-[8px] border-white overflow-hidden aspect-video cursor-zoom-in shadow-xl"
                style={
                  {
                    top: "340px",
                    right: "40px",
                    width: "420px",
                    "--r": "-2deg",
                    zIndex: 30,
                  } as any
                }
              >
                <Image
                  src={projects[2].src}
                  alt={projects[2].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* פרויקט 4 (בנייה) */}
              <div
                onClick={() => setSelectedImg(projects[3].src)}
                className="floating-project delay-4 absolute rounded-2xl border-[8px] border-white overflow-hidden aspect-video cursor-zoom-in shadow-xl"
                style={
                  {
                    top: "420px",
                    right: "350px",
                    width: "400px",
                    "--r": "4deg",
                    zIndex: 40,
                  } as any
                }
              >
                <Image
                  src={projects[3].src}
                  alt={projects[3].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* כרטיס CTA מחשב */}
              <Link
                href="#contact"
                className="floating-project delay-1 absolute rounded-[32px] border-4 border-dashed border-[#A07730]/40 bg-[#FAF5EB] flex flex-col items-center justify-center text-center p-10 z-[100] shadow-2xl transition-all hover:scale-[1.03] hover:border-[#A07730] group cursor-pointer"
                style={
                  {
                    top: "220px",
                    right: "550px",
                    width: "440px",
                    height: "300px",
                    "--r": "2deg",
                  } as any
                }
              >
                <div className="w-14 h-14 rounded-full bg-[#A07730] text-white flex items-center justify-center mb-5 text-3xl font-bold transition-transform group-hover:rotate-90">
                  +
                </div>
                <h3 className="text-[#1A1A1A] font-black text-2xl mb-3">
                  התבנית שלך?
                </h3>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed mb-4 font-medium px-4">
                  התבנית הזו ריקה, אבל היא יכולה להפוך לתשתית שמביאה לעסק שלך
                  לקוחות חדשים בכל יום.
                </p>
                <p className="text-[#A07730] text-sm font-black uppercase tracking-tight border-b-2 border-[#A07730]/20 group-hover:border-[#A07730] transition-colors">
                  לחץ כאן לתיאום שיחה קצרה
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5.2 PROOF: גרסת מובייל ── */}
      <section
        id="portfolio-mobile"
        className="lg:hidden py-16 bg-[#F2F2F2] border-t border-gray-100"
        dir="rtl"
      >
        <div className="px-6 mb-10 text-right">
          <div className="flex flex-col items-start mb-4">
            <span className="relative text-[10px] font-bold text-[#A07730] tracking-tight uppercase mb-1 leading-none">
              <span className="absolute -top-1.5 right-0 w-full h-[1px] bg-[#A07730]/60"></span>
              מבחן התוצאה
            </span>
            <div className="relative inline-block">
              <h2 className="text-[22px] font-black text-[#1A1A1A] leading-tight tracking-tighter">
                לא סתם הגעת לדף הזה
              </h2>
              <div className="absolute -bottom-2 right-0 w-12 h-[2px] bg-[#A07730]"></div>
            </div>
          </div>
          {/* המלל השיווקי המלא למובייל - הוחזר! */}
          <div className="text-[14px] text-[#4A4A4A] leading-[1.5] space-y-4">
            <p>
              <span className="font-bold text-[#1A1A1A]">
                העובדה שאתה קורא את זה עכשיו היא ההוכחה הכי טובה שלי.
              </span>
            </p>
            <p>
              זה לא מקרה. ידעתי בדיוק למי לכוון את המודעה כדי שתביא אותך לפה.
              באותה רמת דיוק אני אדאג שהלקוחות שלך יראו אותך - בדיוק כשהם צריכים
              אותך.
            </p>
            <p>
              <span className="font-bold text-[#1A1A1A]">
                אבל קליקים הם רק חצי מהעבודה.
              </span>{" "}
              בלי דף נחיתה שמשדר סמכות ויודע לסגור -{" "}
              <span className="font-bold text-[#1A1A1A] border-b border-[#A07730]">
                הכסף של הקמפיין פשוט נזרק לפח.
              </span>{" "}
              קליק שלא הופך לפנייה הוא בזבוז של תקציב.
            </p>
            <p className="text-[#1A1A1A] font-bold text-[13px] tracking-tight pt-1">
              ככה נראות התשתיות שאני בונה:
            </p>
          </div>
        </div>

        <div className="px-6 space-y-12">
          {projects.slice(0, 2).map((p) => (
            <div key={p.id}>
              <h3 className="text-[#A07730] font-bold text-sm mb-2 uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="text-[#4A4A4A] text-[14px] mb-4 leading-relaxed">
                {p.desc}
              </p>
              <div
                onClick={() => setSelectedImg(p.src)}
                className="relative aspect-video rounded-xl overflow-hidden border-2 border-white shadow-lg bg-white"
              >
                <Image src={p.src} alt={p.alt} fill className="object-cover" />
              </div>
            </div>
          ))}

          {/* כרטיס CTA מובייל */}
          <div
            onClick={scrollToContact}
            className="cursor-pointer active:scale-[0.99] transition-transform"
          >
            <h3 className="text-[#1A1A1A] font-black text-lg mb-2 text-right">
              התבנית שלך?
            </h3>
            <p className="text-[#4A4A4A] text-[14px] mb-4 leading-relaxed text-right">
              התבנית הזו ריקה, אבל היא יכולה להפוך לתשתית שמביאה לעסק שלך לקוחות
              חדשים בכל יום.
            </p>
            <div className="relative aspect-video rounded-xl border-4 border-dashed border-[#A07730]/30 bg-[#FAF5EB] flex flex-col items-center justify-center text-center p-8 shadow-sm">
              <div className="absolute inset-4 rounded-lg border border-dashed border-[#A07730]/15 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-[#A07730] font-bold text-sm tracking-tight opacity-80">
                  זה המקום שלך לצמוח
                </span>
                <span className="text-[#A07730] font-black text-base underline underline-offset-4 tracking-tight">
                  לחץ כאן לתיאום שיחה קצרה
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="more-work-anchor" className="h-0 w-full"></div>

        {!showMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="text-[#A07730] font-black text-[11px] uppercase tracking-[0.2em] border-b border-[#A07730] pb-0.5 active:opacity-60 transition-all"
            >
              ראה עוד עבודות
            </button>
          </div>
        )}

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="px-6 space-y-10 mt-10"
            >
              {projects.slice(2, 4).map((p) => (
                <div key={p.id}>
                  <h3 className="text-[#A07730] font-bold text-sm mb-2 uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-[14px] mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                  <div
                    onClick={() => setSelectedImg(p.src)}
                    className="relative aspect-video rounded-xl overflow-hidden border-2 border-white shadow-lg bg-white"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-center py-2">
                <button
                  onClick={() => {
                    setShowMore(false);
                    setTimeout(() => {
                      const anchor =
                        document.getElementById("more-work-anchor");
                      if (anchor) {
                        const targetY =
                          anchor.offsetTop - window.innerHeight * 0.75;
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                      }
                    }, 50);
                  }}
                  className="text-[#A07730] font-black text-[11px] uppercase tracking-[0.2em] border-b border-[#A07730] pb-0.5 active:opacity-60 transition-all"
                >
                  ראה פחות
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="תצוגת פרויקט נבחר - נויבלה דיגיטל פתרונות שיווק"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
