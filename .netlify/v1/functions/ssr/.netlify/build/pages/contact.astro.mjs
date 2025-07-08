/* empty css                                                */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_MKBel6VV.mjs';
import 'kleur/colors';
import { u as useTranslations, $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../chunks/Chatbot_C1apEjJ1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const Contact = ({ lang }) => {
  const t = useTranslations(lang);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    if (response.ok) {
      alert("✅ Message envoyé !");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("❌ Erreur : " + result.error);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: t("contact.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: t("contact.subtitle") })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "bg-white rounded-2xl p-8 shadow-lg",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("contact.emailFormTitle") }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: t("contact.name")
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "name",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "email",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: t("contact.email")
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: "message",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: t("contact.message")
                  }
                ),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "message",
                    name: "message",
                    rows: 5,
                    value: formData.message,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  type: "submit",
                  className: "w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(Send, { size: 20 }),
                    t("contact.send")
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "space-y-8",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg space-y-6 h-full justify-between flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("contact.meetingFormTitle") }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Mail, { size: 20, className: "text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: "Email" }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "contact@Automatisons.com" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(Phone, { size: 20, className: "text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: "Téléphone" }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "+33 1 23 45 67 89" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(MapPin, { size: 20, className: "text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900", children: "Adresse" }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "Paris, France" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              motion.a,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2",
                href: "https://calendly.com/kkulig25/30min",
                target: "_blank",
                children: "Prendre RDV"
              }
            )
          ] })
        }
      )
    ] })
  ] }) });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const title = "Automatisons - Contact";
  const description = "Contactez-nous pour discuter de votre projet d'automatisation et d'intelligence artificielle.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> ${renderComponent($$result2, "Contact", Contact, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Contact", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/contact.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
