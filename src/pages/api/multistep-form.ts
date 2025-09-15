// src/pages/api/multistep-form.ts

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { ui } from "../../i18n"; // Adjust path if needed

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
  lang: keyof typeof ui; // "fr" | "en"
}

const transporter = nodemailer.createTransport({
  host: "mail77.lwspanel.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@automatisons.fr",
    pass: "z3yJd5623@Kjhsd",
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload: FormPayload = await request.json();

    // 🌍 Get client IP address
    const forwarded = request.headers.get("x-forwarded-for");
    const clientIP = forwarded
      ? forwarded.split(",")[0]
      : request.headers.get("x-real-ip") || "IP non détectée";

    // 🌐 Load correct translations
    const i18n = ui[payload.lang] || ui["fr"];
    const t = (key: string) => (i18n as Record<string, string>)[key] ?? key;

    // 📨 Build email content
    const lines: string[] = [];

    lines.push(`📩 Nouvelle soumission Multistep Form`);
    lines.push(`📍 Adresse IP du client : ${clientIP}`);
    lines.push("");

    lines.push(
      `1) ${t("multistep.step1.question")}: ${payload.knowAutomation}`
    );
    lines.push(`2) ${t("multistep.step2.question")}: ${payload.lostTime}`);
    lines.push(`3) ${t("multistep.step3.question")}: ${payload.robotThought}`);
    lines.push(`4) ${t("multistep.step4.question")}: ${payload.role}`);
    lines.push(`5) ${t("multistep.step5.question")}: ${payload.idea}`);
    if (payload.ideaDetail) {
      lines.push(`   → ${payload.ideaDetail}`);
    }

    lines.push(`6) ${t("multistep.step6.question")}:`);
    payload.interests.forEach((interest, idx) => {
      lines.push(`   ${idx + 1}. ${interest}`);
    });

    lines.push("");
    lines.push(
      `${t("multistep.final.question")}: ${t("multistep.final.option." + payload.contactWhen)}`
    );

    if (payload.contactWhen === "day" && payload.contactEmail) {
      lines.push(
        `• ${t("multistep.final.channel.email")}: ${payload.contactEmail}`
      );
    }
    if (payload.contactWhen === "now" && payload.contactWhats) {
      lines.push(
        `• ${t("multistep.final.channel.whatsapp")}: ${payload.contactWhats}`
      );
    }
    if (payload.contactWhen === "rendezvous") {
      lines.push(`• ${t("multistep.final.channel.calendar")}`);
    }

    // 🛠 Send email
    await transporter.sendMail({
      from: '"Automatisons" <contact@automatisons.fr>',
      to: "contact@automatisons.fr",
      subject: "Nouvelle soumission MultiStepForm",
      text: lines.join("\n"),
      html: `<pre style="font-family: monospace;">${lines.join("\n")}</pre>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Erreur dans multistep-form.ts :", err);
    return new Response(
      JSON.stringify({ error: err.message || "Erreur inconnue" }),
      { status: 500 }
    );
  }
};
