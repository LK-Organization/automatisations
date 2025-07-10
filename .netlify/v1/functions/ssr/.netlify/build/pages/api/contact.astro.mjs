import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Html, Body, Container, Heading, Text, Hr, Img, Row, Column, Link } from '@react-email/components';
import 'react';
export { renderers } from '../../renderers.mjs';

const ContactConfirmationEmail = ({
  name
}) => /* @__PURE__ */ jsx(Html, { children: /* @__PURE__ */ jsx(
  Body,
  {
    className: "flex flex-col items-center",
    style: { backgroundColor: "#fff", fontFamily: "sans-serif" },
    children: /* @__PURE__ */ jsxs(Container, { style: { padding: "20px" }, children: [
      /* @__PURE__ */ jsxs(Heading, { children: [
        "Merci pour votre message, ",
        name,
        " !"
      ] }),
      /* @__PURE__ */ jsx(Text, { children: "Nous avons bien reçu votre demande. Un membre de notre équipe vous contactera dans les plus brefs délais." }),
      /* @__PURE__ */ jsx(Hr, {}),
      /* @__PURE__ */ jsx(Text, { children: "— L’équipe de automatisons.fr" }),
      /* @__PURE__ */ jsxs("table", { className: "w-full flex justify-center mx-auto", children: [
        /* @__PURE__ */ jsx("tr", { className: "w-full mx-auto", children: /* @__PURE__ */ jsx("td", { align: "center", children: /* @__PURE__ */ jsx(
          Img,
          {
            alt: "React Email logo",
            height: "100",
            src: "https://www.automatisons.fr/logo.png"
          }
        ) }) }),
        /* @__PURE__ */ jsx("tr", { className: "w-full mx-auto", children: /* @__PURE__ */ jsxs("td", { align: "center", children: [
          /* @__PURE__ */ jsx(Text, { className: "my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]", children: "AUTOMATISONS AGENCY" }),
          /* @__PURE__ */ jsx(Text, { className: "mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px]", children: "Automatisez votre succès avec l'IA" })
        ] }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { align: "center", children: /* @__PURE__ */ jsxs(Row, { className: "table-cell h-[44px] w-[56px] align-bottom", children: [
          /* @__PURE__ */ jsx(Column, { className: "pr-[8px]", children: /* @__PURE__ */ jsx(Link, { href: "https://www.facebook.com/people/Automatisons/61577856784226/", children: /* @__PURE__ */ jsx(
            Img,
            {
              alt: "Facebook",
              height: "36",
              src: "https://react.email/static/facebook-logo.png",
              width: "36"
            }
          ) }) }),
          /* @__PURE__ */ jsx(Column, { className: "pr-[8px]", children: /* @__PURE__ */ jsx(Link, { href: "https://x.com/Automatisonsfr", children: /* @__PURE__ */ jsx(
            Img,
            {
              alt: "X",
              height: "36",
              src: "https://react.email/static/x-logo.png",
              width: "36"
            }
          ) }) }),
          /* @__PURE__ */ jsx(Column, { children: /* @__PURE__ */ jsx(Link, { href: "https://www.instagram.com/automatisons.fr/", children: /* @__PURE__ */ jsx(
            Img,
            {
              alt: "Instagram",
              height: "36",
              src: "https://react.email/static/instagram-logo.png",
              width: "36"
            }
          ) }) }),
          /* @__PURE__ */ jsx(Column, { children: /* @__PURE__ */ jsx(Link, { href: "https://www.youtube.com/channel/UCbhcq1KZSTbgCqz2aUNXaTA", children: /* @__PURE__ */ jsx(
            Img,
            {
              alt: "youtube",
              height: "36",
              src: "/youtube-logo.png",
              width: "36"
            }
          ) }) })
        ] }) }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { align: "center", children: /* @__PURE__ */ jsx(Text, { className: "mt-[4px] mb-0 font-semibold text-[16px] text-gray-500 leading-[24px]", children: "contact@automatisons.fr | +33 6 48 09 15 11" }) }) })
      ] })
    ] })
  }
) });

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: "Champs manquants" }), {
        status: 400
      });
    }
    const transporter = nodemailer.createTransport({
      host: "mail77.lwspanel.com",
      port: 465,
      secure: true,
      auth: {
        user: "contact@automatisons.fr",
        pass: "z3yJd5623@Kjhsd"
      }
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
      `
    });
    const confirmationHtml = await render(ContactConfirmationEmail(data.name));
    await transporter.sendMail({
      from: '"Automatisons.fr" <contact@automatisons.fr>',
      to: data.email,
      subject: "🤝 Confirmation de votre message",
      html: confirmationHtml
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (err) {
    console.error("Erreur envoi email :", err);
    return new Response(JSON.stringify({ error: "Email non envoyé" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
