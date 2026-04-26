"use client";
import { useState } from "react";
import { getStoredUtms } from "@/lib/utm";
import { sendContactForm } from "@/app/actions";

const WhatsAppButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [visitorName, setVisitorName] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);

  const handleWhatsAppGo = async () => {
    const now = Date.now();
    const spamData = JSON.parse(
      localStorage.getItem("wa_limit") || '{"count": 0, "last": 0}',
    );

    if (spamData.count >= 3 && now - spamData.last < 3600000) {
      setIsBlocked(true);
      return;
    }

    const cleanName = visitorName.trim().substring(0, 30);
    const utms = typeof getStoredUtms === "function" ? getStoredUtms() : null;
    const phoneNumber = "972559736329";

    // השורה המדויקת שביקשת לשלוח לוואטסאפ
    const message = `היי איתי, קוראים לי ${cleanName || "מעוניין/ת"}, אשמח לפרטים בנוגע לחודש ההתנסות ללא דמי ניהול שכולל בניית דף נחיתה וניהול קמפיין.`;

    localStorage.setItem(
      "wa_limit",
      JSON.stringify({ count: spamData.count + 1, last: now }),
    );

    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "WhatsApp_Click",
        user_name: cleanName,
        utm_source: utms?.utm_source || "direct",
      });
    }
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_lead", {
        method: "whatsapp",
        user_name: cleanName,
        utm_source: utms?.utm_source || "direct",
      });
    }

    // שליחת מייל מודיעין לאופיס בלבד - הצהרה אחת בלבד!
    const leadData = new FormData();
    leadData.append("name", cleanName || "גולש וואטסאפ");
    leadData.append("phone", "0539736329");
    leadData.append("lead_type", "הודעת וואטסאפ");
    leadData.append("utm_data", JSON.stringify(utms));

    // עכשיו ה-await יעבוד כי הפונקציה למעלה היא async
    await sendContactForm(leadData);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    setIsPopupOpen(false);
  };

  return (
    <>
      <style jsx>{`
        @keyframes whatsapp-rings {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        .animate-rings {
          animation: whatsapp-rings 2s infinite;
        }
      `}</style>

      {/* כפתור מותאם רספונסיבית: במובייל 58px, בדסקטופ 64px (הגודל המקורי) */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-[58px] h-[58px] md:w-[64px] md:h-[64px] bg-[#25D366] text-white rounded-2xl transition-all duration-300 hover:scale-110 hover:rotate-[8deg] shadow-2xl animate-rings active:scale-95"
      >
        <svg
          className="w-[30px] h-[30px] md:w-[34px] md:h-[34px]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 text-right">
          <div className="bg-white border border-gray-100 rounded-[28px] p-8 w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            {isBlocked ? (
              <div className="text-center">
                <h3 className="text-red-600 text-xl font-black mb-2">
                  קצת הגזמנו...
                </h3>
                <p className="text-gray-600 text-sm mb-6 font-medium">
                  יותר מדי ניסיונות בזמן קצר. נסה שוב מאוחר יותר.
                </p>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="w-full py-3 bg-gray-100 rounded-xl font-bold"
                >
                  סגור
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-[#1A1A1A] text-2xl font-black mb-1 text-center">
                  רק שאלה קטנה...
                </h3>
                <p className="text-[#666] text-[15px] mb-8 text-center font-medium opacity-70">
                  איך קוראים לך? (שאדע למי לחזור)
                </p>

                <input
                  type="text"
                  placeholder="השם שלך"
                  maxLength={30}
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-5 text-[#1A1A1A] text-right outline-none focus:border-[#A07730] transition-all mb-6 text-lg"
                  autoFocus
                />

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleWhatsAppGo}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xl font-black py-4.5 rounded-2xl shadow-lg transition-all active:scale-95"
                  >
                    בוא נדבר בוואטסאפ
                  </button>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full py-2 text-[#A3A3A3] text-xs font-bold uppercase tracking-widest"
                  >
                    ביטול
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
