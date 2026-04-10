import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-12 px-6 border-t border-[#333]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo Section - תיקון הקישור ל-top */}
        <Link href="/#top" className="transition-transform hover:scale-105">
          <Image
            src="/images/hero-2.png"
            alt="Nuvella Digital - ניהול קמפיינים ממומנים, בניית דפי נחיתה ופתרונות שיווק לעסקים"
            width={180}
            height={65}
            className="object-contain"
            priority
          />
        </Link>

        {/* Links Section */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm font-semibold text-[#A3A3A3]">
          {/* שינוי הקישור ל-#top כדי לעלות הכי למעלה שיש */}
          <Link href="/#top" className="hover:text-[#A07730] transition-colors">
            דף הבית
          </Link>
          <span className="hidden md:inline opacity-20">|</span>

          <Link
            href="/privacy"
            className="hover:text-[#A07730] transition-colors"
          >
            מדיניות פרטיות
          </Link>
          <span className="hidden md:inline opacity-20">|</span>

          <Link
            href="/accessibility"
            className="hover:text-[#A07730] transition-colors"
          >
            הצהרת נגישות
          </Link>

          {/* הטלפון בשורה שנייה במובייל */}
          <a
            href="tel:0539983363"
            dir="ltr"
            className="order-last md:order-first w-full md:w-auto text-center md:text-right hover:text-[#A07730] transition-colors"
          >
            053-998-3363
          </a>
        </nav>

        {/* Copyright Section */}
        <div className="flex flex-col items-center text-center text-[#A3A3A3]">
          <p className="text-xs font-medium" dir="ltr">
            Nuvella Digital 2026 ©
          </p>
          <p className="text-[10px] opacity-60 mt-1 uppercase tracking-widest w-full">
            כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
