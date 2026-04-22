"use server";
import { Resend } from "resend";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { headers } from "next/headers";

// 1. הגדרת המחסום: כרגע על 100 לבדיקות - תחזיר ל-(3, "4 h") לפני דחיפה לורסל
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(3, "4 h"),
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
    .regex(/^05\d([-]?)\d{3}([-]?)\d{4}$/, "חובה למלא מספר טלפון ישראלי תקין"),
  message: z
    .string()
    .max(1000, "הודעה ארוכה מדי (מקסימום 1000 תווים)")
    .optional(),
  fax_number: z.string().max(0).optional(), // מלכודת דבש לבוטים
});

export async function sendContactForm(formData: FormData) {
  // --- שלב 1: אבטחה (Honeypot + Rate Limiting) ---
  const honeypot = formData.get("fax_number");
  if (honeypot && (honeypot as string).length > 0) return { success: true };

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") ?? "127.0.0.1";
  const { success: rateOk } = await ratelimit.limit(ip);
  if (!rateOk) return { error: "חרגת מכמות השליחות. נסה שוב בעוד כמה שעות." };

  // --- שלב 2: ולידציה של השדות ---
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    fax_number: formData.get("fax_number"),
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
  // יצירת מזהה ייחודי למניעת שרשור בג'ימייל
  const uniqueId = Math.random().toString(36).substring(7).toUpperCase();

  try {
    // 1. מייל Intelligence אליך (נויבלה) - מוסבר ומקצועי
    await resend.emails.send({
      from: "Nuvella Intel <office@nuvella.co.il>",
      to: ["office@nuvella.co.il"],
      subject: `ליד חדש - Nuvella | ${name}`, // כותרת קצרה וחדה
      html: `
        <div dir="rtl" style="font-family: sans-serif; text-align: right; color: #1a1a1a; border: 2px solid #A07730; padding: 25px; border-radius: 15px;">
          <h2 style="color: #A07730; margin-bottom: 20px;">דוח ליד חדש - מודיעין שיווקי</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #eee;">
            <p><strong>CONTACT_NAME (שם מלא):</strong> ${name}</p>
            <p><strong>CONTACT_PHONE (טלפון):</strong> ${phone}</p>
            <p><strong>MESSAGE (הודעה):</strong> ${message || "ללא הודעה"}</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p><strong>UTM_SOURCE (מקור התנועה):</strong> ${utms?.utm_source || "אורגני/ישיר"} <br> <small style="color: #666;">האתר/אפליקציה שמהם הוא הגיע (למשל פייסבוק/גוגל).</small></p>
            
            <p><strong>UTM_MEDIUM (סוג המדיה):</strong> ${utms?.utm_medium || "none"} <br> <small style="color: #666;">סוג התנועה (cpc = שיווק ממומן בתשלום, organic = חיפוש חופשי).</small></p>
            
            <p><strong>UTM_CAMPAIGN (שם הקמפיין):</strong> ${utms?.utm_campaign || "none"} <br> <small style="color: #666;">שם הקמפיין המדויק שהגדרת במנהל המודעות.</small></p>
            
            <p><strong>UTM_CONTENT (תוכן מודעה):</strong> ${utms?.utm_content || "none"} <br> <small style="color: #666;">השם של המודעה הספציפית (הקריאייטיב) שעליה הוא לחץ.</small></p>
            
            <p><strong>CLICK_ID (מזהה קליק):</strong> ${utms?.gclid || utms?.fbclid || "none"} <br> <small style="color: #666;">המספר הסידורי שפייסבוק/גוגל נותנים לקליק הזה.</small></p>
            
            <p><strong>REFERRER (האתר הקודם):</strong> ${utms?.referrer || "direct"} <br> <small style="color: #666;">האתר שבו המשתמש גלש רגע לפני שהוא נכנס לאתר שלך.</small></p>
            
            <p><strong>LANDING_PAGE (דף נחיתה):</strong> ${utms?.landing_page || "/"} <br> <small style="color: #666;">העמוד הראשון שבו המשתמש נחת אצלך באתר.</small></p>
            
            <p><strong>TIMESTAMP (זמן שליחה):</strong> ${timestamp}</p>
          </div>
          <p style="font-size: 10px; color: #ccc; margin-top: 10px;">REF: ${uniqueId}</p>
        </div>
      `,
    });

    // 2. מייל "שואו" ללקוח - יוקרתי, נפרד וגלוי
    await resend.emails.send({
      from: "Nuvella Digital <office@nuvella.co.il>",
      to: ["itaydor.works@gmail.com"],
      subject: `ליד חדש מהאתר - ${name} [${uniqueId}]`, // ה-ID פה מונע שרשור הודעות
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

    // --- מה שצריך להוסיף עכשיו (הדיווח לפייסבוק מהשרת) ---
    try {
      const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
      const accessToken = process.env.FB_ACCESS_TOKEN;

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
                  fn: name.split(" ")[0],
                  ph: phone.replace(/\D/g, ""),
                },
                custom_data: {
                  utm_source: utms?.utm_source,
                  utm_medium: utms?.utm_medium,
                  utm_campaign: utms?.utm_campaign,
                },
              },
            ],
          }),
        },
      );
    } catch (fbError) {
      console.error("❌ Facebook CAPI Error:", fbError);
    }

    return { success: true };
  } catch (err) {
    console.error("❌ Server Error:", err);
    return { error: "חלה שגיאה טכנית. אנחנו מטפלים בזה, נסה שוב בקרוב." };
  }
}
