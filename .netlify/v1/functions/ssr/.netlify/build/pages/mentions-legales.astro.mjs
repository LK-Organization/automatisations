import '../chunks/page-ssr_DeJh8TBP.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BZE_cvkn.mjs';
import 'kleur/colors';
import { $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../chunks/Chatbot_DmgyXsBK.mjs';
export { renderers } from '../renderers.mjs';

const $$MentionsLegales = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const title = "Automatisons - Mentions l\xE9gales";
  const description = "Consultez les mentions l\xE9gales du site Automatisons, ainsi que les informations sur l\u2019\xE9diteur, l\u2019h\xE9bergeur et les donn\xE9es personnelles.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-16"> <section class="max-w-4xl mx-auto px-4 py-20 text-gray-800"> <h1 class="text-4xl font-bold mb-10">Mentions Légales</h1> <h2 class="text-2xl font-semibold mt-8 mb-2">1. Informations légales</h2> <p class="mb-4">
Raison sociale : Automatisons Agency<br>
Forme juridique : Société par Actions Simplifiée (SAS)<br>
Capital social : 10 000 €<br>
Numéro SIRET : 123 456 789 00012<br>
Code APE : 6201Z (Programmation informatique)<br>
Numéro de TVA intracommunautaire : FR12345678901
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">2. Siège social</h2> <p class="mb-4">
Adresse : 123 Avenue de l'Innovation, 75001 Paris, France<br>
Téléphone : +33 6 48 09 15 11<br>
Email : contact@automatisons-agency.com
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">3. Directeur de la publication</h2> <p class="mb-4">
Le directeur de la publication du site internet est Monsieur Alexandre Martin, représentant légal de la société Automatisons Agency.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">4. Hébergement</h2> <p class="mb-4">
Hébergeur : OVH SAS<br>
Adresse : 2 rue Kellermann, 59100 Roubaix, France<br>
Téléphone : +33 8 99 70 17 61<br>
Site web : www.ovh.com
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">5. Propriété intellectuelle</h2> <p class="mb-4">
L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, sons, logiciels) est la propriété exclusive de Automatisons Agency, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
</p> <p class="mb-4">
Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Automatisons Agency.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">6. Données personnelles</h2> <p class="mb-4">
Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
</p> <p class="mb-4">
Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@automatisons.fr" class="text-blue-600 hover:underline">contact@automatisons.fr</a> </p> <h2 class="text-2xl font-semibold mt-8 mb-2">7. Cookies</h2> <p class="mb-4">
Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">8. Responsabilité</h2> <p class="mb-4">
Automatisons Agency s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
</p> <p class="mb-4">
Tous les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs.
</p> <h2 class="text-2xl font-semibold mt-8 mb-2">9. Droit applicable</h2> <p class="mb-4">
Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
</p> <p class="mt-12 text-sm text-gray-500">Dernière mise à jour : 24 juin 2025</p> </section> </main> ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/mentions-legales.astro", void 0);

const $$file = "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/pages/mentions-legales.astro";
const $$url = "/mentions-legales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MentionsLegales,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
