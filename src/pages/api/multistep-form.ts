// src/pages/api/multistep-form.ts

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { ui } from "../../i18n"; // adjust path if needed

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
  host: import.meta.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: import.meta.env.MAIL_USER,
    pass: import.meta.env.MAIL_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload: FormPayload = await request.json();
    // pick the right translations object
    const i18n = ui[payload.lang] || ui["fr"];
    const t = (key: string) => (i18n as Record<string, string>)[key] ?? key;

    // build the email body lines in the user’s language
    const lines: string[] = [];
    lines.push(
      `1) ${t("multistep.step1.question")}: ${payload.knowAutomation}`
    );
    lines.push(`2) ${t("multistep.step2.question")}: ${payload.lostTime}`);
    lines.push(`3) ${t("multistep.step3.question")}: ${payload.robotThought}`);
    lines.push(`4) ${t("multistep.step4.question")}: ${payload.role}`);
    lines.push(
      `5) ${t("multistep.step5.question")}: ${payload.idea}` +
        (payload.ideaDetail ? ` (“${payload.ideaDetail}”)` : "")
    );
    lines.push(`6) ${t("multistep.step6.question")}:`);
    payload.interests.forEach((i, idx) => lines.push(`   ${idx + 1}. ${i}`));
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

    const mailOptions = {
      from: '"Automatisons" <contact@automatisons.fr>',
      to: "contact@automatisons.fr",
      subject: "Nouvelle soumission MultiStepForm",
      text: lines.join("\n"),
      html: `<pre style="font-family: monospace;">${lines.join("\n")}</pre>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Error in multistep-form API:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      { status: 500 }
    );
  }
};
