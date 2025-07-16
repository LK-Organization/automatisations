import '../chunks/page-ssr_BjpphPOa.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Dn19Kt8r.mjs';
import 'kleur/colors';
import { $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../chunks/Chatbot_CpeBotSv.mjs';
import { H as Hero, A as AutomationCarousel, M as Methodology, T as TestimonialsCarousel, C as CTA, a as About, F as FAQAccordion, S as Sectors } from '../chunks/Exemples_CT088LI1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import { PlayCircle } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const VideoOverlay = ({
  thumbnail,
  videoUrl,
  alt = "Video thumbnail"
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "pb-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "relative w-auto h-[500px] max-w-3xl mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-lg", children: [
    /* @__PURE__ */ jsxs(
      "video",
      {
        ref: videoRef,
        className: "w-full h-full object-cover",
        poster: thumbnail,
        controls: isPlaying,
        children: [
          /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" }),
          "Your browser does not support the video tag."
        ]
      }
    ),
    !isPlaying && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handlePlay,
        className: "absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors",
        "aria-label": "Play video",
        children: /* @__PURE__ */ jsx(PlayCircle, { className: "w-20 h-20 text-white hover:scale-110 transition-transform" })
      }
    )
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const title = "Automatisons Agency \u2013 Automatisation Intelligente & IA";
  const description = "Automatisons - Votre partenaire pour l'automatisation et l'intelligence artificielle. Transformez votre entreprise gr\xE2ce \xE0 des solutions d'automatisation intelligentes.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", Hero, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Exemples", AutomationCarousel, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Exemples", "client:component-export": "default" })} ${renderComponent($$result2, "Methodology", Methodology, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Methodology", "client:component-export": "default" })} ${renderComponent($$result2, "TestimonialsCarousel", TestimonialsCarousel, { "lang": "fr", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "CTA", CTA, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "About", About, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/About", "client:component-export": "default" })} ${renderComponent($$result2, "Faq", FAQAccordion, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Faq", "client:component-export": "default" })} ${renderComponent($$result2, "Sectors", Sectors, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Sectors", "client:component-export": "default" })} ${renderComponent($$result2, "VideoPlayer", VideoOverlay, { "thumbnail": "/image.png", "videoUrl": "https://firebasestorage.googleapis.com/v0/b/makeviews-ea1af.appspot.com/o/Videos%2Fintro.mp4?alt=media&token=35a6bdd1-c28d-44e6-a3a0-e8bd0d62613a", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/VideoPlayer", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
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
