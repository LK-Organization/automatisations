export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import ContactConfirmationEmail from "../../emails/ContactConfirmationEmail";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: "Champs manquants" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: `mail77.lwspanel.com`,
      port: 465,
      secure: true,
      auth: {
        user: `contact@automatisons.fr`,
        pass: `z3yJd5623@Kjhsd`,
      },
    });

    await transporter.sendMail({
      from: '"Automatisons" <contact@automatisons.fr>',
      to: "contact@automatisons.fr",
      subject: "📬 Nouveau message depuis le formulaire",
      text: data.message,
      html: `
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Message :</strong><br/>${data.message}</p>
      `,
    });
    const confirmationHtml = await render(ContactConfirmationEmail(data.name));

    await transporter.sendMail({
      from: '"Automatisons.fr" <contact@automatisons.fr>',
      to: data.email,
      subject: "🤝 Confirmation de votre message",
      html: confirmationHtml,
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
