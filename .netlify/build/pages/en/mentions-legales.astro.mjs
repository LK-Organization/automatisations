import '../../chunks/page-ssr_DeJh8TBP.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BZE_cvkn.mjs';
import 'kleur/colors';
import { $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../../chunks/Chatbot_DmgyXsBK.mjs';
export { renderers } from '../../renderers.mjs';

const $$MentionsLegales = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const title = "Automatisons - Legal Notice";
  const description = "Read the legal notice of the Automatisons website, including information about the publisher, the hosting provider, and personal data.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> <section class="max-w-4xl mx-auto px-4 py-20 text-gray-800"> <h1 class="text-4xl font-bold mb-10">Legal Notice</h1> <h2 class="text-2xl font-semibold mt-8 mb-2">1. Legal Information</h2> <p class="mb-4">
Company name: Automatisons Agency<br>
Legal form: Simplified Joint Stock Company (SAS)<br>
Share capital: €10,000<br>
SIRET number: 123 456 789 00012<br>
APE code: 6201Z (Computer programming)<br>
EU VAT number: FR12345678901
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">2. Registered Office</h2> <p class="mb-4">
Address: 123 Avenue de l'Innovation, 75001 Paris, France<br>
Phone: +33 6 48 09 15 11<br>
Email: contact@automatisons-agency.com
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">3. Publishing Director</h2> <p class="mb-4">
The publishing director of the website is Mr. Alexandre Martin, legal representative of Automatisons Agency.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">4. Hosting</h2> <p class="mb-4">
Hosting provider: OVH SAS<br>
Address: 2 rue Kellermann, 59100 Roubaix, France<br>
Phone: +33 8 99 70 17 61<br>
Website: www.ovh.com
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">5. Intellectual Property</h2> <p class="mb-4">
All content on this site (texts, images, graphics, logo, icons, sounds, software) is the exclusive property of Automatisons Agency, except for trademarks, logos, or content belonging to partner companies or authors.
</p> <p class="mb-4">
Any reproduction, representation, modification, publication, or adaptation of all or part of the elements of the site, regardless of the means or process used, is prohibited without prior written permission from Automatisons Agency.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">6. Personal Data</h2> <p class="mb-4">
In accordance with the French "Informatique et Libertés" law of January 6, 1978, as amended, and the General Data Protection Regulation (GDPR), you have the right to access, rectify, delete, and oppose the processing of your personal data.
</p> <p class="mb-4">
To exercise these rights, you can contact us at: <a href="mailto:contact@automatisons.fr" class="text-blue-600 hover:underline">contact@automatisons.fr</a> </p> <h2 class="text-2xl font-semibold mt-8 mb-2">7. Cookies</h2> <p class="mb-4">
This site uses cookies to enhance user experience and analyze traffic. By continuing to browse this site, you agree to the use of cookies in accordance with our privacy policy.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">8. Liability</h2> <p class="mb-4">
Automatisons Agency strives to provide the most accurate information possible on the site. However, it cannot be held liable for omissions, inaccuracies, or failures to update, whether caused by itself or by third-party partners.
</p> <p class="mb-4">
All information on the site is provided for reference only and is subject to change. Furthermore, the information on the site is not exhaustive.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">9. Applicable Law</h2> <p class="mb-4">
This legal notice is governed by French law. In case of dispute, only French courts shall have jurisdiction.
</p> <p class="mt-12 text-sm text-gray-500">Last updated: June 24, 2025</p> </section> </main> ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/mentions-legales.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/en/mentions-legales.astro";
const $$url = "/en/mentions-legales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MentionsLegales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
