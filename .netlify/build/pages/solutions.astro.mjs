/* empty css                                                */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D0YNkI8Y.mjs';
import 'kleur/colors';
import { u as useTranslations, $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../chunks/Chatbot_CJSXzon3.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';
import { Mail, Users, TrendingUp, Calendar, Calculator, Share2, BarChart3, FolderKanban, UserCheck, MessageCircle, Target } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const Solutions = ({ lang }) => {
  const t = useTranslations(lang);
  const solutions = [
    {
      icon: Mail,
      title: "solutions.email.title",
      description: "solutions.email.description",
      color: "from-blue-500 to-blue-600",
      features: ["Tri automatique", "Réponses intelligentes", "Suivi des emails"]
    },
    {
      icon: Users,
      title: "solutions.crm.title",
      description: "solutions.crm.description",
      color: "from-purple-500 to-purple-600",
      features: ["Gestion contacts", "Suivi pipeline", "Automatisation"]
    },
    {
      icon: TrendingUp,
      title: "solutions.leads.title",
      description: "solutions.leads.description",
      color: "from-green-500 to-green-600",
      features: ["Prospection IA", "Qualification auto", "Scoring leads"]
    },
    {
      icon: Calendar,
      title: "solutions.appointment.title",
      description: "solutions.appointment.description",
      color: "from-orange-500 to-orange-600",
      features: ["Calendrier intelligent", "Rappels auto", "Synchronisation"]
    },
    {
      icon: Calculator,
      title: "solutions.accounting.title",
      description: "solutions.accounting.description",
      color: "from-indigo-500 to-indigo-600",
      features: ["Facturation auto", "Rapprochement", "Reporting"]
    },
    {
      icon: Share2,
      title: "solutions.social.title",
      description: "solutions.social.description",
      color: "from-pink-500 to-pink-600",
      features: ["Publication auto", "Engagement", "Analytics"]
    },
    {
      icon: BarChart3,
      title: "solutions.analytics.title",
      description: "solutions.analytics.description",
      color: "from-cyan-500 to-cyan-600",
      features: ["Dashboards IA", "Prédictions", "KPIs temps réel"]
    },
    {
      icon: FolderKanban,
      title: "solutions.project.title",
      description: "solutions.project.description",
      color: "from-teal-500 to-teal-600",
      features: ["Planification auto", "Suivi temps réel", "Optimisation"]
    },
    {
      icon: UserCheck,
      title: "solutions.recruitment.title",
      description: "solutions.recruitment.description",
      color: "from-red-500 to-red-600",
      features: ["Tri CV IA", "Entretiens auto", "Onboarding"]
    },
    {
      icon: MessageCircle,
      title: "solutions.chatbot.title",
      description: "solutions.chatbot.description",
      color: "from-violet-500 to-violet-600",
      features: ["Support 24/7", "IA conversationnelle", "Multicanal"]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: t("solutions.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: t("solutions.subtitle") })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: index * 0.1 },
        viewport: { once: true },
        whileHover: { y: -5 },
        className: "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group",
        children: [
          /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsx(solution.icon, { size: 28, className: "text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: t(solution.title) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: t(solution.description) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: solution.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}` }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: feature })
          ] }, featureIndex)) }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: `mt-4 w-full bg-gradient-to-r ${solution.color} text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200`,
              children: t("solutions.learn_more")
            }
          )
        ]
      },
      solution.title
    )) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.5 },
        viewport: { once: true },
        className: "text-center mt-16",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6", children: t("solutions.cta.title") }),
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: "/contact",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200",
              children: [
                /* @__PURE__ */ jsx(Target, { size: 20 }),
                t("solutions.cta.button")
              ]
            }
          )
        ] })
      }
    )
  ] }) });
};

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const title = "Automatisons - Solutions";
  const description = "D\xE9couvrez nos solutions compl\xE8tes d'automatisation et d'intelligence artificielle pour transformer vos processus d'entreprise.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> ${renderComponent($$result2, "Solutions", Solutions, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Solutions", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/solutions.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/solutions.astro";
const $$url = "/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
