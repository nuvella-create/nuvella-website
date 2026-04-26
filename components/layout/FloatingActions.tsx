"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // הוספת כלי לזיהוי הדף
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function FloatingActions() {
  const [hasDecision, setHasDecision] = useState(false);
  const pathname = usePathname(); // מקבל את נתיב הדף הנוכחי

  useEffect(() => {
    // בדיקה בטעינה ראשונית - כל ערך (all או essential) נחשב החלטה
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "all" || consent === "essential") {
      setHasDecision(true);
    }

    // האזנה להחלטה מהבאנר בזמן אמת
    const handleDecision = () => setHasDecision(true);
    window.addEventListener("cookie-decision-made", handleDecision);

    return () =>
      window.removeEventListener("cookie-decision-made", handleDecision);
  }, []);

  // אם עוד לא התקבלה החלטה בבאנר, לא מציגים כלום
  if (!hasDecision) return null;

  return (
    <>
      {/* כפתור הוואטסאפ: מופיע רק אם אנחנו לא בדף התודה */}
      {pathname !== "/thanks" && <WhatsAppButton />}

      {/* כפתור הנגישות: מופיע תמיד בכל דפי האתר (אחרי אישור הבאנר) */}
      <AccessibilityWidget />
    </>
  );
}
