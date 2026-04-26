import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import CookieBanner from "@/components/layout/CookieBanner";
import TrackingScripts from "@/components/layout/TrackingScripts"; // הייבוא החדש
import { SpeedInsights } from "@vercel/speed-insights/next";
import UtmCapture from "@/components/layout/UtmCapture";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvella.co.il"),
  title: "נויבלה דיגיטל | פתרונות שיווק ודיגיטל לעסקים",
  description:
    "אנחנו בונים דפי נחיתה, מריצים קמפיינים ומביאים לידים אמיתיים לעסקים רציניים.",
  alternates: {
    canonical: "https://nuvella.co.il",
  },
  verification: {
    other: {
      "facebook-domain-verification": ["96xempfunvq7zkzmx8kz6f5jja9hvy"],
    },
  },
  openGraph: {
    title: "נויבלה דיגיטל | פתרונות שיווק ודיגיטל",
    description: "בניית דפי נחיתה וניהול קמפיינים מבוססי תוצאות.",
    url: "https://nuvella.co.il",
    siteName: "נויבלה דיגיטל",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
    locale: "he_IL",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.webp",
    apple: "/images/apple-icon.webp",
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
        {/* סכימה של גוגל - Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nuvella Digital",
              image: "https://nuvella.co.il/images/hero-2.webp",
              description:
                "סוכנות בוטיק לשיווק דיגיטלי, ניהול קמפיינים ממומנים ובניית דפי נחיתה ממירי פרימיום.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
                addressLocality: "Israel",
              },
              url: "https://nuvella.co.il",
              telephone: "+972539736329",
              priceRange: "$$",
            }),
          }}
        />

        {/* פה נמצאת הלוגיקה החדשה של הסקריפטים - הם ירו רק אחרי אישור */}
        <TrackingScripts />
        <UtmCapture />

        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <CookieBanner />
        <FloatingActions />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
