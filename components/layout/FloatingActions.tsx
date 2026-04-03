"use client";
import { useState, useEffect } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";

export default function FloatingActions() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // בדיקה אם כבר יש אישור שמור
    const consent = localStorage.getItem("cookie-consent");
    if (consent) setHasConsent(true);

    // האזנה לרגע הלחיצה בבאנר (בלי לרענן דף)
    const handleConsent = () => setHasConsent(true);
    window.addEventListener("cookie-accepted", handleConsent);

    return () => window.removeEventListener("cookie-accepted", handleConsent);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <WhatsAppButton />
      <AccessibilityWidget />
    </>
  );
}
