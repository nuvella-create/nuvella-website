import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions"; // ייבוא החדש
import CookieBanner from "@/components/layout/CookieBanner";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nuvella Digital | פתרונות שיווק ודיגיטל לעסקים",
  description:
    "אנחנו בונים דפי נחיתה, מריצים קמפיינים ומביאים לידים אמיתיים לעסקים רציניים.",
  icons: {
    icon: [
      { url: "/images/favicon.png" }, // לבדיקה רגילה
      { url: "/images/favicon.png", sizes: "192x192", type: "image/png" }, // לגוגל חיפוש
    ],
    shortcut: "/images/favicon.png",
    apple: [
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body
        className={`${heebo.className} min-h-screen flex flex-col bg-white text-black antialiased`}
      >
        <Header />

        <main className="flex-grow pt-20">{children}</main>

        {/* הבאנר תופס את התחתית ומסתיר הכל */}
        <CookieBanner />

        {/* האייקונים (ווטסאפ ונגישות) יופיעו פה רק אחרי אישור בבאנר */}
        <FloatingActions />

        <Footer />
      </body>
    </html>
  );
}
