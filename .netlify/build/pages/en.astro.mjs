import '../chunks/page-ssr_BjpphPOa.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Dn19Kt8r.mjs';
import 'kleur/colors';
import { $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../chunks/Chatbot_CpeBotSv.mjs';
import { H as Hero, A as AutomationCarousel, M as Methodology, T as TestimonialsCarousel, C as CTA, a as About, F as FAQAccordion, S as Sectors } from '../chunks/Exemples_CT088LI1.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const title = "Automatisons Agency \u2013 Smart Automation & AI";
  const description = "Automatisons - Votre partenaire pour l'automatisation et l'intelligence artificielle. Transformez votre entreprise gr\xE2ce \xE0 des solutions d'automatisation intelligentes.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", Hero, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Exemples", AutomationCarousel, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Exemples", "client:component-export": "default" })} ${renderComponent($$result2, "Methodology", Methodology, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Methodology", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialsCarousel", TestimonialsCarousel, { "lang": "en", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "CTA", CTA, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "About", About, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/About", "client:component-export": "default" })} ${renderComponent($$result2, "Faq", FAQAccordion, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Faq", "client:component-export": "default" })} ${renderComponent($$result2, "Sectors", Sectors, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Sectors", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
