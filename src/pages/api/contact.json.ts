export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const raw = await request.text();
  let body;

  try {
    body = JSON.parse(raw);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
    });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: "mail.automatisons.fr", // 🔧 ton host SMTP
    port: 465,
    secure: true,
    auth: {
      user: "contact@automatisons.fr", // 🔐 ton adresse mail
      pass: "z3yJd5623@Kjhsd", // 🔐 ton mot de passe SMTP
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contact@automatisons.fr",
      subject: `📩 Nouveau message de ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error); // 👈 Affiche le détail
    return new Response(
      JSON.stringify({ error: "Email not sent", details: String(error) }),
      { status: 500 }
    );
  }
};
