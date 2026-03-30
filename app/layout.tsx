import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

// הגדרת הפונט Heebo לכל האתר
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
    icon: "/images/favicon.png", // הנתיב לקובץ שלך בתוך public
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
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

        {/* pt-20 דואג שהתוכן יתחיל מתחת להדר הקבוע */}
        <main className="flex-grow pt-20">{children}</main>

        {/* רכיבים צפים שיופיעו בכל דפי האתר */}
        <WhatsAppButton />
        <AccessibilityWidget />

        <Footer />
      </body>
    </html>
  );
}
