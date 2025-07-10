import '../../chunks/page-ssr_DeJh8TBP.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BZE_cvkn.mjs';
import 'kleur/colors';
import { $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../../chunks/Chatbot_DmgyXsBK.mjs';
import { S as Solutions } from '../../chunks/Solutions_BBVLx4Ca.mjs';
export { renderers } from '../../renderers.mjs';

const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const title = "Automatisons - Solutions";
  const description = "D\xE9couvrez nos solutions compl\xE8tes d'automatisation et d'intelligence artificielle pour transformer vos processus d'entreprise.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> ${renderComponent($$result2, "Solutions", Solutions, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Solutions", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/solutions.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/solutions.astro";
const $$url = "/en/solutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Solutions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
