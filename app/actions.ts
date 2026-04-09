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

// 2. חוקים קשוחים - שם (3 תווים), טלפון (ישראלי עם/בלי מקפים), הודעה (עד 1000)
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
  fax_number: z.string().max(0).optional(), // מלכודת דבש
});

export async function sendContactForm(formData: FormData) {
  // --- שכבת אבטחה 1: מלכודת דבש (Honeypot) ---
  const honeypot = formData.get("fax_number");
  if (honeypot && (honeypot as string).length > 0) {
    return { success: true };
  }

  // --- שכבת אבטחה 2: הגבלת שליחות (Rate Limiting) ---
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return { error: "חרגת מכמות השליחות. ניתן לנסות שוב בעוד כמה שעות." };
  }

  // --- שכבת אבטחה 3: בדיקת תקינות השדות (Zod) ---
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

  // --- שלב 4: שליחת המייל באמת ---
  try {
    const { data, error } = await resend.emails.send({
      from: "Nuvella <office@nuvella.co.il>",
      to: ["office@nuvella.co.il"],
      // הסרנו את replyTo כי הוא קיבל מספר טלפון וזה גרם לשגיאה
      subject: `ליד חדש: ${name}`,
      text: `שם: ${name}\nטלפון: ${phone}\nהודעה: ${message || "ללא הודעה"}`,
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      return {
        error: "חלה שגיאה בשליחת הטופס. ניתן לנסות שוב או ליצור קשר בוואטסאפ.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("❌ Server Error:", err);
    return { error: "חלה שגיאה טכנית. אנחנו מטפלים בזה, נסה שוב בקרוב." };
  }
}
