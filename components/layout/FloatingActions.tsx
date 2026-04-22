"use client";
import { useState, useEffect } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function FloatingActions() {
  const [hasDecision, setHasDecision] = useState(false);

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

  if (!hasDecision) return null;

  return (
    <>
      <WhatsAppButton />
      <AccessibilityWidget />
    </>
  );
}
