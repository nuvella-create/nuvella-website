"use server";
import { Resend } from "resend";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { headers } from "next/headers";

// 1. הגדרת המחסום: כרגע על 300 לבדיקות
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(30, "4 h"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

// 2. חוקים קשוחים - אימות שדות עם Zod
const contactSchema = z.object({
  name: z
    .string()
    .min(3, "חובה למלא שם מלא (לפחות 3 תווים)")
    .regex(/^[א-תa-zA-Z\s]+$/, "שם חייב להכיל אותיות בלבד"),
  phone: z
    .string()
    .regex(/^05\d{8}$/, "חובה למלא מספר טלפון ישראלי תקין (10 ספרות)"),
  message: z
    .string()
    .max(1000, "הודעה ארוכה מדי (מקסימום 1000 תווים)")
    .optional(),
  fax_number: z.string().max(0).optional(), // מלכודת דבש לבוטים
});

export async function sendContactForm(formData: FormData) {
  // --- הגדרות סוכנות (כאן משנים את שם הלקוח שלך עבור הכותרת) ---
  const AGENCY_CLIENT_NAME = "Nuvella Digital";

  // --- שלב 1: אבטחה (Honeypot + Rate Limiting) ---
  const honeypot = formData.get("fax_number");
  if (honeypot && (honeypot as string).length > 0) return { success: true };

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") ?? "127.0.0.1";
  const { success: rateOk } = await ratelimit.limit(ip);
  if (!rateOk) return { error: "חרגת מכמות השליחות. נסה שוב בעוד כמה שעות." };

  // --- שלב 2: ולידציה של השדות ---
  // מנקה רווחים ומקפים מהטלפון כדי שלא תהיה "פלצנות" בוולידציה
  const cleanPhone = ((formData.get("phone") as string) || "").replace(
    /[-\s]/g,
    "",
  );

  const rawData = {
    name: formData.get("name") || undefined,
    phone: cleanPhone || undefined,
    message: formData.get("message") || undefined,
    fax_number: formData.get("fax_number") || undefined,
  };

  const validated = contactSchema.safeParse(rawData);
  if (!validated.success) {
    const errors = validated.error.flatten().fieldErrors;
    return {
      fieldErrors: {
        name: errors.name?.[0],
        phone: errors.phone?.[0],
        message: errors.message?.[0],
      },
    };
  }

  const { name, phone, message } = validated.data;

  // חילוץ סוג המרה (חדש למודיעין)
  const leadType = (formData.get("lead_type") as string) || "טופס לידים";

  // --- שלב 3: חילוץ נתוני UTM (Intelligence) ---
  const utmDataRaw = formData.get("utm_data") as string;
  let utms = null;
  try {
    utms = utmDataRaw ? JSON.parse(utmDataRaw) : null;
  } catch (e) {
    console.error("❌ UTM Parse Error");
  }

  // --- שלב 4: שליחת מיילים מותאמים אישית ---
  const timestamp = new Date().toLocaleString("he-IL", {
    timeZone: "Asia/Jerusalem",
  });
  const uniqueId = Math.random().toString(36).substring(7).toUpperCase();

  try {
    // 1. מייל Intelligence אליך (נויבלה) - עיצוב פרימיום עם הסברים מלאים
    await resend.emails.send({
      from: "Nuvella Intel <office@nuvella.co.il>",
      to: ["office@nuvella.co.il"],
      // כותרת מורכבת: ליד חדש | שם הלקוח שלך | סוג הליד - שם הפונה
      subject: `ליד חדש | ${AGENCY_CLIENT_NAME} | ${leadType} - ${name}`,
      html: `
        <div dir="rtl" style="font-family: sans-serif; text-align: right; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          <div style="background: #A07730; padding: 25px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px; letter-spacing: 1px; font-weight: 900;">דוח מודיעין שיווקי - ${AGENCY_CLIENT_NAME}</h1>
          </div>
          
          <div style="padding: 30px; background: white;">
            <div style="margin-bottom: 25px; border-bottom: 2px solid #fdfaf3; padding-bottom: 15px;">
              <span style="background: #fdfaf3; color: #A07730; padding: 6px 14px; border-radius: 100px; font-weight: bold; font-size: 14px; border: 1px solid #f2e6d0;">
                סוג המרה: ${leadType}
              </span>
              <span style="float: left; color: #999; font-size: 12px; font-family: monospace;">#${uniqueId}</span>
            </div>

            <div style="margin-bottom: 30px;">
              <p style="margin: 5px 0;"><strong>CONTACT_NAME (שם מלא):</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>CONTACT_PHONE (טלפון):</strong> ${phone}</p>
              <p style="margin: 5px 0;"><strong>MESSAGE (הודעה):</strong> ${message || "ללא הודעה"}</p>
            </div>

            <h3 style="color: #1a1a1a; font-size: 18px; margin-bottom: 15px; border-right: 4px solid #A07730; padding-right: 12px;">נתוני קמפיין ומודיעין</h3>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0;"><strong>UTM_SOURCE (מקור התנועה):</strong> ${utms?.utm_source || "אורגני/ישיר"}</p>
              <small style="color: #666; font-size: 12px; display: block; margin-top: 2px;">האתר/אפליקציה שמהם הוא הגיע (למשל פייסבוק/גוגל).</small>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0;"><strong>UTM_MEDIUM (סוג המדיה):</strong> ${utms?.utm_medium || "none"}</p>
              <small style="color: #666; font-size: 12px; display: block; margin-top: 2px;">סוג התנועה (cpc = שיווק ממומן בתשלום, organic = חיפוש חופשי).</small>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0;"><strong>UTM_CAMPAIGN (שם הקמפיין):</strong> ${utms?.utm_campaign || "none"}</p>
              <small style="color: #666; font-size: 12px; display: block; margin-top: 2px;">שם הקמפיין המדויק שהגדרת במנהל המודעות.</small>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0;"><strong>UTM_CONTENT (תוכן מודעה):</strong> ${utms?.utm_content || "none"}</p>
              <small style="color: #666; font-size: 12px; display: block; margin-top: 2px;">השם של המודעה הספציפית (הקריאייטיב) שעליה הוא לחץ.</small>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0;"><strong>CLICK_ID (מזהה קליק):</strong> ${utms?.gclid || utms?.fbclid || "none"}</p>
              <small style="color: #666; font-size: 12px; display: block; margin-top: 2px;">המספר הסידורי שפייסבוק/גוגל נותנים לקליק הזה.</small>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0;"><strong>REFERRER (האתר הקודם):</strong> ${utms?.referrer || "direct"}</p>
              <small style="color: #666; font-size: 12px; display: block; margin-top: 2px;">האתר שבו המשתמש גלש רגע לפני שהוא נכנס לאתר שלך.</small>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="margin: 0;"><strong>LANDING_PAGE (דף נחיתה):</strong> ${utms?.landing_page || "/"}</p>
              <small style="color: #666; font-size: 12px; display: block; margin-top: 2px;">העמוד הראשון שבו המשתמש נחת אצלך באתר.</small>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 11px; color: #aaa; text-align: center;">
              <p style="margin: 2px 0;">נשלח ביום: ${timestamp}</p>
              <p style="margin: 2px 0;">IP: ${ip} | Nuvella Intelligence System</p>
            </div>
          </div>
        </div>
      `,
    });

    // 2. מייל "שואו" ללקוח (itaydor.works) - נשלח אך ורק אם זה טופס לידים
    if (leadType === "טופס לידים") {
      await resend.emails.send({
        from: "Nuvella Digital <office@nuvella.co.il>",
        to: ["itaydor.works@gmail.com"],
        subject: `ליד חדש מהאתר - ${name} [${uniqueId}]`,
        html: `
          <div dir="rtl" style="font-family: sans-serif; text-align: right; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 2px solid #A07730; padding: 30px; border-radius: 20px;">
            <p style="font-size: 11px; color: #999; margin-bottom: 10px;">${timestamp}</p>
            <h2 style="color: #A07730; font-size: 24px; margin-bottom: 25px;">יש לך פנייה חדשה מהאתר 🔥</h2>
            <div style="background: #fdfaf3; padding: 25px; border-radius: 15px; border: 1px solid #f2e6d0;">
              <p style="font-size: 18px; margin: 12px 0;"><strong>שם הלקוח:</strong> ${name}</p>
              <p style="font-size: 18px; margin: 12px 0;"><strong>טלפון:</strong> <a href="tel:${phone}" style="color: #A07730; text-decoration: none; font-weight: bold;">${phone}</a></p>
              <p style="font-size: 18px; margin: 12px 0;"><strong>הודעה:</strong> ${message || "ללא הודעה"}</p>
            </div>
            <div style="background: #fff; padding: 15px; border-right: 4px solid #A07730; margin-top: 20px;">
              <p style="font-size: 14px; color: #666; margin: 0;"><strong>מקור הפנייה:</strong></p>
              <p style="font-size: 17px; color: #A07730; font-weight: bold; margin: 5px 0;">
                ${utms?.utm_medium === "cpc" ? "שיווק ממומן (Meta Ads)" : "חיפוש גוגל / פנייה ישירה"}
              </p>
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="font-size: 12px; color: #999; text-align: center;">הופק על ידי Nuvella Digital | מזהה פנייה: ${uniqueId}</p>
          </div>
        `,
      });
    }

    // 3. דיווח פייסבוק מהשרת (CAPI) - תמיד נשלח
    try {
      const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
      const accessToken = process.env.FB_ACCESS_TOKEN;
      if (pixelId && accessToken) {
        await fetch(
          `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              data: [
                {
                  event_name: "Lead",
                  event_time: Math.floor(Date.now() / 1000),
                  action_source: "website",
                  event_source_url: `https://www.nuvella.co.il${utms?.landing_page || ""}`,
                  user_data: {
                    client_ip_address: ip,
                    client_user_agent: headerList.get("user-agent"),
                    fn: [name.split(" ")[0]],
                    ph: [phone.replace(/\D/g, "")],
                  },
                  custom_data: {
                    utm_source: utms?.utm_source,
                    utm_medium: utms?.utm_medium,
                    utm_campaign: utms?.utm_campaign,
                    content_name:
                      leadType === "טופס לידים" ? "Contact_Form" : leadType,
                  },
                },
              ],
            }),
          },
        );
      }
    } catch (fbError) {
      console.error("❌ FB CAPI Error");
    }

    return { success: true };
  } catch (err) {
    console.error("❌ Server Error:", err);
    return { error: "חלה שגיאה טכנית. אנחנו מטפלים בזה, נסה שוב בקרוב." };
  }
}
