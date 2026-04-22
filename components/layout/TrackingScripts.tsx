// קוד שקשור לפיקסלים ולבאנר והפיקסל והבחירות לקוח אם לאשר את הבאנר
"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function TrackingScripts() {
  const [hasFullConsent, setHasFullConsent] = useState(false);

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

  useEffect(() => {
    // בדיקה בטעינה ראשונית - רק אם הערך הוא "all"
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "all") setHasFullConsent(true);

    // האזנה להחלטה מהבאנר בזמן אמת
    const handleDecision = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "all") setHasFullConsent(true);
    };

    window.addEventListener("cookie-decision-made", handleDecision);

    return () =>
      window.removeEventListener("cookie-decision-made", handleDecision);
  }, []);

  if (!hasFullConsent) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { 'debug_mode': true });
            `}
          </Script>
        </>
      )}

      {PIXEL_ID && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
