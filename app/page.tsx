import Hero from "@/components/sections/home/Hero";
import Identification from "@/components/sections/home/Identification";
import Process from "@/components/sections/home/Process";
import AboutMe from "@/components/sections/home/AboutMe";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import Transparency from "@/components/sections/home/Transparency";
import ContactSection from "@/components/sections/home/ContactSection";

export const metadata = {
  title: "נויבלה דיגיטל | בניית דפי נחיתה וניהול קמפיינים ממומנים",
  description:
    "הקמת תשתית שיווקית חכמה לעסקים: דפי נחיתה ממירים, קמפיינים בגוגל ופייסבוק וחודש ניסיון ללא דמי ניהול.",
  openGraph: {
    title: "נויבלה דיגיטל - תוצאות לפני הכל",
    description: "בואו נבדוק התאמה לחודש ניסיון ללא דמי ניהול.",
    images: ["/images/og-image.webp"],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col w-full font-heebo">
      <Hero />
      <Identification />
      <Process />
      <AboutMe />
      <PortfolioSection />
      <Transparency />
      <ContactSection />
    </main>
  );
}
