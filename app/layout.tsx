import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import CookieBanner from "@/components/layout/CookieBanner";
import TrackingScripts from "@/components/layout/TrackingScripts"; // הייבוא החדש

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvella.co.il"), // השורה שמוסיפים כדי לסדר את ה-Open Graph
  title: "נויבלה דיגיטל | פתרונות שיווק ודיגיטל לעסקים",
  description:
    "אנחנו בונים דפי נחיתה, מריצים קמפיינים ומביאים לידים אמיתיים לעסקים רציניים.",
  alternates: {
    canonical: "https://nuvella.co.il", // הוספתי לך את זה בשביל ה-SEO
  },
  openGraph: {
    title: "נויבלה דיגיטל | פתרונות שיווק ודיגיטל",
    description: "בניית דפי נחיתה וניהול קמפיינים מבוססי תוצאות.",
    url: "https://nuvella.co.il",
    siteName: "נויבלה דיגיטל",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    locale: "he_IL",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/apple-icon.png",
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
        {/* פה נמצאת הלוגיקה החדשה של הסקריפטים - הם ירו רק אחרי אישור */}
        <TrackingScripts />

        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <CookieBanner />
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
