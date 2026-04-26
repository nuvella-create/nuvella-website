"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [links, setLinks] = useState(false);
  const [noAnim, setNoAnim] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);
  const [highlightHeaders, setHighlightHeaders] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("a11y_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      setFontSize(parsed.fontSize || 100);
      setContrast(parsed.contrast || false);
      setLinks(parsed.links || false);
      setNoAnim(parsed.noAnim || false);
      setGrayscale(parsed.grayscale || false);
      setReadableFont(parsed.readableFont || false);
      setBigCursor(parsed.bigCursor || false);
      setHighlightHeaders(parsed.highlightHeaders || false);
    }
  }, []);

  useEffect(() => {
    // הגדרת הפונט באתר בלבד
    document.documentElement.style.fontSize = `${(fontSize / 100) * 16}px`;

    // החלת קלאסים על ה-Body
    const b = document.body.classList;
    b.toggle("a11y-high-contrast", contrast);
    b.toggle("a11y-underline-links", links);
    b.toggle("a11y-no-anim", noAnim);
    b.toggle("a11y-grayscale", grayscale);
    b.toggle("a11y-readable-font", readableFont);
    b.toggle("a11y-big-cursor", bigCursor);
    b.toggle("a11y-highlight-headers", highlightHeaders);

    localStorage.setItem(
      "a11y_state",
      JSON.stringify({
        fontSize,
        contrast,
        links,
        noAnim,
        grayscale,
        readableFont,
        bigCursor,
        highlightHeaders,
      }),
    );
  }, [
    fontSize,
    contrast,
    links,
    noAnim,
    grayscale,
    readableFont,
    bigCursor,
    highlightHeaders,
  ]);

  const resetAll = () => {
    setFontSize(100);
    setContrast(false);
    setLinks(false);
    setNoAnim(false);
    setGrayscale(false);
    setReadableFont(false);
    setBigCursor(false);
    setHighlightHeaders(false);
  };

  const features = [
    {
      id: "contrast",
      label: "ניגודיות גבוהה",
      active: contrast,
      setter: setContrast,
    },
    { id: "links", label: "הדגשת קישורים", active: links, setter: setLinks },
    {
      id: "grayscale",
      label: "שחור לבן",
      active: grayscale,
      setter: setGrayscale,
    },
    {
      id: "readable",
      label: "פונט קריא",
      active: readableFont,
      setter: setReadableFont,
    },
    {
      id: "cursor",
      label: "סמן גדול",
      active: bigCursor,
      setter: setBigCursor,
    },
    {
      id: "headers",
      label: "הדגשת כותרות",
      active: highlightHeaders,
      setter: setHighlightHeaders,
    },
    { id: "anim", label: "חסימת אנימציות", active: noAnim, setter: setNoAnim },
  ];

  return (
    <div className="a11y-widget-root">
      {/* לשונית נגישות - גובה מהודק לדסקטופ לצמצום רווחים */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        /* מובייל: h-10 (40px) | מחשב: הופחת מ-h-16 ל-h-12 (48px) למראה הדוק */
        className="fixed bottom-[120px] left-0 z-[9999] w-7 h-10 lg:w-9 lg:h-12 bg-[#A07730] hover:bg-[#8A6425] hover:w-9 lg:hover:w-11 rounded-r-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90 group"
        aria-label="נגישות"
      >
        <div className="relative w-5 h-5 lg:w-6 lg:h-6">
          <Image
            src="/images/accessibility-icon.webp"
            alt="פתיחת תפריט נגישות - נויבלה דיגיטל"
            fill
            className="object-contain"
          />
        </div>
      </button>

      {/* פאנל הנגישות - מקובע ל-16px כדי שלא יגדל עם האתר */}
      {isOpen && (
        <div
          className="fixed bottom-[150px] left-[33px] z-[9999] w-[260px] bg-white rounded-xl shadow-2xl border border-[#E6DED5] overflow-hidden flex flex-col"
          style={{ fontSize: "16px" }}
        >
          {/* כותרת */}
          <div className="bg-[#1A1A1A] p-3 flex items-center justify-between">
            <span className="text-white text-sm font-bold">תפריט נגישות</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white text-xs"
            >
              סגור
            </button>
          </div>

          <div className="p-3 space-y-2 max-h-[350px] overflow-y-auto">
            {/* שליטה על פונט - הקיבוע פה הוא ב-PX */}
            <div className="flex items-center justify-between p-2 bg-[#F9F6F0] rounded-lg border border-[#E6DED5]">
              <span className="text-[13px] font-bold text-[#5C4A3D]">
                גודל טקסט
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFontSize(Math.max(80, fontSize - 10))}
                  className="w-7 h-7 bg-white border border-[#E6DED5] rounded font-bold text-[#A07730] hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-[11px] font-bold w-8 text-center">
                  {fontSize}%
                </span>
                <button
                  onClick={() => setFontSize(Math.min(150, fontSize + 10))}
                  className="w-7 h-7 bg-white border border-[#E6DED5] rounded font-bold text-[#A07730] hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* כפתורי הפיצ'רים */}
            <div className="grid grid-cols-1 gap-1.5">
              {features.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => btn.setter(!btn.active)}
                  className={`flex items-center gap-2.5 p-2 rounded-lg border transition-all text-[12px] font-bold ${
                    btn.active
                      ? "bg-[#A07730] border-[#A07730] text-white"
                      : "bg-white border-[#E6DED5] text-[#1A1A1A] hover:bg-[#FAF9F6]"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${btn.active ? "bg-white" : "bg-[#A07730]"}`}
                  ></div>
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={resetAll}
                className="w-full text-[11px] font-bold text-[#A07730] hover:underline py-1"
              >
                איפוס הגדרות
              </button>
              <Link
                href="/accessibility"
                className="block w-full text-center py-2 bg-[#F9F6F0] text-[#1A1A1A] text-[12px] font-bold rounded-lg border border-[#E6DED5] hover:bg-[#E6DED5] transition-colors"
              >
                הצהרת נגישות מלאה
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
