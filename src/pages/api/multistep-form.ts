// src/pages/api/multistep-form.ts

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

interface FormPayload {
  knowAutomation: string;
  lostTime: string;
  robotThought: string;
  role: string;
  idea: string;
  ideaDetail?: string;
  interests: string[];
  contactWhen: "now" | "day" | "rendezvous";
  contactEmail?: string;
  contactWhats?: string;
}

const transporter = nodemailer.createTransport({
  host: `${import.meta.env.MAIL_HOST}`,
  port: 465,
  secure: true,
  auth: {
    user: `${import.meta.env.MAIL_USER}`,
    pass: `${import.meta.env.MAIL_PASS}`,
  },
});

// Pour débuger, on va logger quand on reçoit la requête
export const POST: APIRoute = async ({ request }) => {
  try {
    const payload: FormPayload = await request.json();
    console.log("📨 Payload reçu:", payload);

    // Construire le corps du mail
    const lines: string[] = [];
    lines.push(`1) Connaissance automatisation : ${payload.knowAutomation}`);
    lines.push(`2) Temps perdu par jour      : ${payload.lostTime}`);
    lines.push(`3) “Un robot pourrait faire ça” : ${payload.robotThought}`);
    lines.push(`4) Rôle                     : ${payload.role}`);
    lines.push(
      `5) Idée d'automatisation    : ${payload.idea}` +
        (payload.idea === "oui" && payload.ideaDetail
          ? ` (“${payload.ideaDetail}”)`
          : "")
    );
    lines.push(`6) Centres d’intérêt        :`);
    payload.interests.forEach((i, idx) => lines.push(`   ${idx + 1}. ${i}`));
    lines.push("");
    lines.push(`Contact souhaité           : ${payload.contactWhen}`);
    if (payload.contactWhen === "day" && payload.contactEmail) {
      lines.push(`• Email   : ${payload.contactEmail}`);
    }
    if (payload.contactWhen === "now" && payload.contactWhats) {
      lines.push(`• WhatsApp: ${payload.contactWhats}`);
    }
    if (payload.contactWhen === "rendezvous") {
      lines.push(`• Rendez-vous via Calendly`);
    }

    const mailOptions = {
      from: '"Automatisons" <contact@automatisons.fr>',
      to: "contact@automatisons.fr",
      subject: "Nouvelle soumission MultiStepForm",
      text: lines.join("\n"),
      html: `<pre style="font-family: monospace;">${lines.join("\n")}</pre>`,
    };

    console.log("✉️ Envoi du mail à", "contact@automatisons.fr");
    await transporter.sendMail(mailOptions);
    console.log("✅ Mail envoyé avec succès");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("🚨 Erreur API multistep-form:", err);
    const message = err?.message || "Erreur inconnue";
    return new Response(
      JSON.stringify({ error: `Échec de l’envoi : ${message}` }),
      { status: 500 }
    );
  }
};
