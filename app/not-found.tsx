import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-20 bg-[#F7F7F5]">
      {/* קוד השגיאה הענקי */}
      <div className="text-[clamp(6rem,20vw,12rem)] font-black text-[#E5E5E0] leading-none select-none mb-[-10px] md:mb-[-20px]">
        404
      </div>

      {/* כותרת */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mt-6 mb-4">
        הגעת למקום הלא נכון...
      </h1>

      {/* טקסט הסבר */}
      <p className="text-lg text-[#6B6B6B] max-w-md mx-auto mb-10 leading-relaxed font-medium">
        נראה שמישהו פה פספס את המטרה (וזה לא אנחנו).{" "}
        <br className="hidden md:block" />
        במקום להיתקע בדף ריק, בוא נחזור לדף הראשי.
      </p>

      {/* כפתור חזרה לדף הבית */}
      <Link
        href="/"
        className="bg-[#A07730] hover:bg-[#8A6425] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg transition-all hover:-translate-y-1 hover:shadow-[#A07730]/30 active:scale-95"
      >
        חזרה לדף הראשי
      </Link>
    </div>
  );
}
