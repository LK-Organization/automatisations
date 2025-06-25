export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: "Champs manquants" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.automatisons.fr", // ou mail77.lwspanel.com
      port: 465,
      secure: true, // SSL
      auth: {
        user: "contact@automatisons.fr",
        pass: "z3yJd5623@Kjhsd",
      },
    });

    await transporter.sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "contact@automatisons.fr",
      subject: "📬 Nouveau message depuis le formulaire",
      text: data.message,
      html: `
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Message :</strong><br/>${data.message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error("Erreur envoi email :", err);
    return new Response(JSON.stringify({ error: "Email non envoyé" }), {
      status: 500,
    });
  }
};
