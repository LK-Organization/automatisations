import '../chunks/page-ssr_DeJh8TBP.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BZE_cvkn.mjs';
import 'kleur/colors';
import { $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../chunks/Chatbot_DmgyXsBK.mjs';
import { H as Hero, S as Sectors, M as Methodology, A as About, T as TestimonialsCarousel } from '../chunks/Testimonials_BULj1qzJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const title = "Automatisons - Accueil";
  const description = "Automatisons - Votre partenaire pour l'automatisation et l'intelligence artificielle. Transformez votre entreprise gr\xE2ce \xE0 des solutions d'automatisation intelligentes.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", Hero, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Sectors", Sectors, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Sectors", "client:component-export": "default" })} ${renderComponent($$result2, "Methodology", Methodology, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Methodology", "client:component-export": "default" })} ${renderComponent($$result2, "About", About, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/About", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialsCarousel", TestimonialsCarousel, { "lang": "fr", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/index.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
