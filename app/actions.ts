"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // בדיקת אבטחה בסיסית - שלא ישלחו שדות ריקים או בוטים
  if (!name || !phone) return { error: "חובה למלא שם וטלפון" };

  try {
    await resend.emails.send({
      from: "Nuvella Website <onboarding@resend.dev>", // אחרי שתחבר דומיין תשנה את זה
      to: ["office@nuvella.co.il"], // המייל שבו תקבל את הלידים
      subject: `ליד חדש מ-Nuvella: ${name}`,
      text: `שם: ${name}\nטלפון: ${phone}\nהודעה: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { error: "משהו השתבש בשליחה" };
  }
}
