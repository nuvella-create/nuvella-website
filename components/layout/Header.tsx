"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* לוגו */}
        <Link
          href="/#top"
          className="flex items-center transition-transform hover:scale-105"
        >
          <Image
            src="/images/hero-1.png"
            alt="Nuvella Digital"
            width={90}
            height={40}
            className="object-contain object-right"
            priority
          />
        </Link>

        {/* תפריט ניווט מעודכן */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-[#6B6B6B]">
          <Link href="/#about" className="hover:text-black transition-colors">
            מי אני
          </Link>
          <Link href="/#how" className="hover:text-black transition-colors">
            איך זה עובד
          </Link>
          <Link
            href="/#portfolio"
            className="hover:text-black transition-colors"
          >
            עבודות
          </Link>
          <Link
            href="/#transparency"
            className="hover:text-black transition-colors"
          >
            שקיפות
          </Link>
        </div>

        {/* כפתור הנעה לפעולה */}
        <Link
          href="/#contact"
          className="bg-[#A07730] hover:bg-[#8A6425] text-white rounded-xl flex items-center gap-2 font-black px-5 py-2.5 text-xs transition-all shadow-lg active:scale-95"
        >
          אני רוצה מקום
          <svg
            width="12"
            height="12"
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
    </nav>
  );
};

export default Header;
