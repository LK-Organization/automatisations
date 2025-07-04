import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_D0YNkI8Y.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                        */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { X, Menu, Facebook, Twitter, Linkedin, Instagram, MessageCircle, Bot, Maximize2, Minimize2, User, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Automatisons - Votre partenaire de confiance en automatisation et intelligence artificielle", lang = "fr" } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="font-sans"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/layouts/Layout.astro", void 0);

const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "hero.title": "Automatisez votre succès avec l'IA",
    "hero.subtitle": "Automatisons Agency transforme votre entreprise grâce à des solutions d'automatisation intelligentes et personnalisées.",
    "hero.cta": "Découvrir nos solutions",
    "hero.cta.secondary": "Nous contacter",
    // Solutions
    "solutions.title": "Nos Solutions d'Automatisation",
    "solutions.subtitle": "Des solutions complètes pour automatiser tous vos processus métier",
    "solutions.email.title": "Gestion des Emails",
    "solutions.email.description": "Automatisez le tri, les réponses et le suivi de vos emails",
    "solutions.crm.title": "CRM & Suivi Client",
    "solutions.crm.description": "Gérez vos relations clients avec une automatisation intelligente",
    "solutions.leads.title": "Génération de Leads",
    "solutions.leads.description": "Prospectez et qualifiez vos leads automatiquement",
    "solutions.appointment.title": "Prise de Rendez-vous",
    "solutions.appointment.description": "Automatisez la planification et la gestion de vos rendez-vous",
    "solutions.accounting.title": "Comptabilité & Facturation",
    "solutions.accounting.description": "Automatisez votre comptabilité et vos processus de facturation",
    "solutions.social.title": "Réseaux Sociaux",
    "solutions.social.description": "Gérez et automatisez votre présence sur les réseaux sociaux",
    "solutions.analytics.title": "Analyse & Reporting",
    "solutions.analytics.description": "Générez des rapports et analyses automatisés avec l'IA",
    "solutions.project.title": "Gestion de Projet",
    "solutions.project.description": "Optimisez la planification et le suivi de vos projets",
    "solutions.recruitment.title": "Recrutement & Onboarding",
    "solutions.recruitment.description": "Automatisez vos processus de recrutement et d'intégration",
    "solutions.chatbot.title": "Chatbots IA",
    "solutions.chatbot.description": "Assistants conversationnels intelligents pour votre support client",
    "solutions.learn_more": "En savoir plus",
    "solutions.cta.title": "Prêt à automatiser votre entreprise ?",
    "solutions.cta.description": "Découvrez comment nos solutions peuvent transformer vos processus",
    "solutions.cta.button": "Nous contacter",
    // Sectors
    "sectors.title": "Secteurs d'Activité",
    "sectors.subtitle": "Nous accompagnons les entreprises de tous secteurs dans leur transformation digitale",
    "sectors.industry.title": "Industrie",
    "sectors.industry.description": "Optimisation des chaînes de production et maintenance prédictive",
    "sectors.finance.title": "Finance",
    "sectors.finance.description": "Automatisation des processus financiers et conformité réglementaire",
    "sectors.health.title": "Santé",
    "sectors.health.description": "Gestion des dossiers patients et optimisation des parcours de soins",
    "sectors.commerce.title": "Commerce",
    "sectors.commerce.description": "E-commerce, gestion des stocks et relation client automatisée",
    "sectors.education.title": "Éducation",
    "sectors.education.description": "Plateformes d'apprentissage et gestion administrative automatisée",
    "sectors.logistics.title": "Logistique",
    "sectors.logistics.description": "Optimisation des chaînes d'approvisionnement et tracking automatisé",
    // Testimonials
    "testimonials.title": "Témoignages Clients",
    "testimonials.subtitle": "Découvrez les résultats obtenus par nos clients",
    // Methodology
    "methodology.title": "Notre Méthodologie",
    "methodology.subtitle": "Un processus éprouvé en 3 étapes pour garantir votre succès",
    "methodology.analysis.title": "Analyse Gratuite",
    "methodology.analysis.description": "Audit complet de vos processus actuels et identification des opportunités d'automatisation",
    "methodology.plan.title": "Plan Sur Mesure",
    "methodology.plan.description": "Élaboration d'une stratégie personnalisée avec roadmap détaillée et estimation des gains",
    "methodology.implementation.title": "Mise en Œuvre",
    "methodology.implementation.description": "Développement, déploiement et formation pour une adoption réussie",
    "methodology.cta.title": "Commencez votre transformation dès aujourd'hui",
    "methodology.cta.description": "Bénéficiez d'une analyse gratuite de vos processus en 48h",
    "methodology.cta.free_analysis": "Analyse gratuite",
    "methodology.cta.consultation": "Nous contacter",
    "about.title": "À propos d'Automatisons Agency",
    "about.description": "Nous sommes une agence spécialisée dans l'automatisation et l'intelligence artificielle, dédiée à transformer la façon dont les entreprises opèrent.",
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Prêt à transformer votre entreprise ? Parlons de votre projet.",
    "contact.emailFormTitle": "Envoyer un email",
    "contact.meetingFormTitle": "Prendre un rendez-vous",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "footer.description": "Automatisons Agency - Votre partenaire de confiance en automatisation et intelligence artificielle"
  }
};
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui["fr"][key];
  };
}

const Navigation = ({ lang, isHomePage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations(lang);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.solutions", href: "/solutions" },
    { key: "nav.contact", href: "/contact" }
  ];
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);
  const getBackgroundStyle = () => {
    if (isHomePage) {
      return "bg-black/20 backdrop-blur-md border-b border-white/10";
    } else {
      return "bg-black/95 backdrop-blur-md border-b border-gray-800";
    }
  };
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      initial: { y: 0 },
      animate: {
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      },
      transition: { duration: 0.3, ease: "easeInOut" },
      children: /* @__PURE__ */ jsxs("div", { className: getBackgroundStyle(), children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-20", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/logo-automatisation.png",
              alt: "Automatisons Agency Logo",
              className: "h-12 w-auto"
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex absolute left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-8", children: navItems.map((item) => /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: "text-white/90 hover:text-white px-4 py-2 text-base font-medium transition-all duration-200 hover:scale-105",
              children: t(item.key)
            },
            item.key
          )) }) }),
          /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleMenu,
              className: "text-white/90 hover:text-white focus:outline-none p-2 transition-all duration-200",
              children: isMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMenuOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            className: `md:hidden ${isHomePage ? "bg-black/30" : "bg-black/90"} backdrop-blur-md border-t ${isHomePage ? "border-white/10" : "border-gray-800"}`,
            children: /* @__PURE__ */ jsx("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: navItems.map((item) => /* @__PURE__ */ jsx(
              "a",
              {
                href: item.href,
                className: "text-white/90 hover:text-white block px-3 py-2 text-base font-medium transition-all duration-200",
                onClick: () => setIsMenuOpen(false),
                children: t(item.key)
              },
              item.key
            )) })
          }
        ) })
      ] })
    }
  );
};

const Footer = ({ lang }) => {
  const t = useTranslations(lang);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "text-left",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center mb-4", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/logo-automatisation.png",
                alt: "Automatisons Agency Logo",
                className: "h-12 w-auto"
              }
            ) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: t("footer.description") })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          viewport: { once: true },
          className: "text-left",
          children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: "Navigation" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
              { key: "nav.home", href: "/" },
              { key: "nav.solutions", href: "/solutions" },
              { key: "nav.contact", href: "/contact" }
            ].map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: "text-gray-300 hover:text-primary-400 transition-colors duration-200",
                children: t(link.key)
              }
            ) }, link.key)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
          viewport: { once: true },
          className: "text-left",
          children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: "Suivez-nous" }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: socialLinks.map((social) => /* @__PURE__ */ jsx(
              motion.a,
              {
                href: social.href,
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.9 },
                className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200",
                "aria-label": social.label,
                children: /* @__PURE__ */ jsx(social.icon, { size: 20 })
              },
              social.label
            )) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center flex-row border-t border-gray-800 mt-8 pt-8 text-center", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-400", children: [
        "© ",
        currentYear,
        " Automatisons Agency. ",
        t("footer.rights")
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/mentions-legales",
            className: "text-gray-400 hover:text-primary-400 transition-colors duration-200",
            children: "Mentions légales"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/conditions-generales",
            className: "text-gray-400 hover:text-primary-400 transition-colors duration-200",
            children: "Conditions Générales d’Utilisation"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/termes-utilisation",
            className: "text-gray-400 hover:text-primary-400 transition-colors duration-200",
            children: "Termes d’utilisation"
          }
        )
      ] })
    ] })
  ] }) });
};

const Chatbot = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: Date.now().toString(),
        text: "Bonjour ! Je suis l'assistant virtuel d'Automatisons Agency. Je peux vous aider avec vos questions sur l'automatisation des workflows, l'implémentation d'agents IA, et nos services. Comment puis-je vous aider aujourd'hui ?",
        isBot: true,
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);
  const knowledgeBase = {
    // Questions sur l'automatisation
    "automatisation": {
      keywords: ["automatisation", "automatiser", "workflow", "processus", "tâches"],
      response: "L'automatisation des workflows permet de simplifier et d'optimiser vos processus métier. Nous proposons :\n\n• Automatisation des emails et communications\n• Gestion automatisée des leads et CRM\n• Automatisation comptable et facturation\n• Workflows de validation et d'approbation\n• Intégration entre vos outils existants\n\nSouhaitez-vous en savoir plus sur un domaine spécifique ?"
    },
    // Questions sur l'IA
    "intelligence artificielle": {
      keywords: ["ia", "intelligence artificielle", "ai", "agent ia", "chatbot", "machine learning"],
      response: "Nos solutions d'intelligence artificielle incluent :\n\n• Chatbots conversationnels intelligents\n• Agents IA pour le support client\n• Analyse prédictive des données\n• Reconnaissance et traitement automatique de documents\n• Personnalisation des expériences utilisateur\n• Optimisation des processus par IA\n\nQuel type d'agent IA vous intéresse le plus ?"
    },
    // Questions sur les services
    "services": {
      keywords: ["services", "offres", "solutions", "que faites-vous", "proposez-vous"],
      response: "Nos principaux services incluent :\n\n🤖 **Intelligence Artificielle**\n• Développement d'agents IA personnalisés\n• Chatbots et assistants virtuels\n• Analyse de données par IA\n\n⚙️ **Automatisation des Processus**\n• Workflows automatisés\n• Intégrations système\n• Optimisation des tâches répétitives\n\n🔗 **Intégration Système**\n• Connexion de vos outils\n• APIs et synchronisation\n• Migration de données\n\nQuel service vous intéresse ?"
    },
    // Questions sur les prix
    "prix": {
      keywords: ["prix", "coût", "tarif", "budget", "combien", "devis"],
      response: "Nos tarifs sont personnalisés selon vos besoins spécifiques. Voici notre approche :\n\n💡 **Analyse gratuite** (48h)\n• Audit de vos processus actuels\n• Identification des opportunités\n• Estimation des gains potentiels\n\n📋 **Devis personnalisé**\n• Basé sur la complexité du projet\n• Paiement échelonné possible\n• ROI garanti\n\nSouhaitez-vous une analyse gratuite de vos processus ?"
    },
    // Questions sur l'implémentation
    "implementation": {
      keywords: ["implémentation", "mise en place", "déploiement", "installation", "comment ça marche"],
      response: "Notre processus d'implémentation en 3 étapes :\n\n🔍 **1. Analyse (48h)**\n• Audit complet de vos processus\n• Identification des opportunités\n• Rapport détaillé gratuit\n\n📋 **2. Planification (7 jours)**\n• Stratégie personnalisée\n• Roadmap détaillée\n• Planning de déploiement\n\n🚀 **3. Déploiement (2-8 semaines)**\n• Développement sur mesure\n• Tests et validation\n• Formation de vos équipes\n• Support continu\n\nVoulez-vous commencer par une analyse gratuite ?"
    },
    // Questions sur les secteurs
    "secteurs": {
      keywords: ["secteur", "industrie", "domaine", "entreprise", "business"],
      response: "Nous accompagnons tous les secteurs d'activité :\n\n🏭 **Industrie** - Production et maintenance prédictive\n💰 **Finance** - Processus financiers et conformité\n🏥 **Santé** - Gestion patients et parcours de soins\n🛒 **Commerce** - E-commerce et relation client\n🎓 **Éducation** - Plateformes d'apprentissage\n🚚 **Logistique** - Chaînes d'approvisionnement\n\nDans quel secteur évoluez-vous ?"
    },
    // Questions sur le support
    "support": {
      keywords: ["support", "aide", "assistance", "problème", "bug"],
      response: "Notre support client comprend :\n\n🔧 **Support technique 24/7**\n• Assistance en temps réel\n• Résolution rapide des problèmes\n• Maintenance préventive\n\n📚 **Formation et documentation**\n• Formation de vos équipes\n• Guides d'utilisation détaillés\n• Webinaires réguliers\n\n📞 **Contact direct**\n• Email : contact@automatisons.com\n• Téléphone : +33 1 23 45 67 89\n• Chat en direct (comme maintenant !)\n\nComment puis-je vous aider spécifiquement ?"
    }
  };
  const findBestResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some((keyword) => message.includes(keyword))) {
        return data.response;
      }
    }
    if (message.includes("bonjour") || message.includes("salut") || message.includes("hello")) {
      return "Bonjour ! Ravi de vous rencontrer. Je suis là pour répondre à toutes vos questions sur l'automatisation et l'intelligence artificielle. Que souhaitez-vous savoir ?";
    }
    if (message.includes("merci") || message.includes("thank you")) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider à comprendre comment l'automatisation peut transformer votre entreprise.";
    }
    if (message.includes("contact") || message.includes("rendez-vous") || message.includes("rdv")) {
      return "Pour nous contacter :\n\n📧 **Email** : contact@automatisons.com\n📞 **Téléphone** : +33 1 23 45 67 89\n📍 **Adresse** : Paris, France\n\nVous pouvez aussi remplir notre formulaire de contact sur le site pour une réponse rapide. Souhaitez-vous que je vous redirige vers la page contact ?";
    }
    return "Je comprends votre question, mais j'aimerais vous donner une réponse plus précise. Pouvez-vous me dire si vous vous intéressez plutôt à :\n\n• L'automatisation de processus métier\n• L'implémentation d'agents IA\n• Nos services et tarifs\n• Un secteur d'activité spécifique\n\nOu contactez directement notre équipe au +33 1 23 45 67 89 pour un conseil personnalisé !";
  };
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(inputValue),
        isBot: true,
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1e3 + Math.random() * 1e3);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const formatTime = (date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => setIsOpen(true),
        className: `fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? "hidden" : "block"}`,
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: { delay: 2 },
        children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 24 }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold", children: "!" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 100, scale: 0.8 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          height: isMinimized ? "60px" : "600px"
        },
        exit: { opacity: 0, y: 100, scale: 0.8 },
        className: "fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden",
        style: { width: "400px", maxWidth: "90vw" },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary-600 to-accent-500 text-white p-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Bot, { size: 20 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Assistant IA" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90", children: "Automatisons Agency" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsMinimized(!isMinimized),
                  className: "p-1 hover:bg-white/20 rounded transition-colors",
                  children: isMinimized ? /* @__PURE__ */ jsx(Maximize2, { size: 16 }) : /* @__PURE__ */ jsx(Minimize2, { size: 16 })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsOpen(false),
                  className: "p-1 hover:bg-white/20 rounded transition-colors",
                  children: /* @__PURE__ */ jsx(X, { size: 16 })
                }
              )
            ] })
          ] }),
          !isMinimized && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "h-96 overflow-y-auto p-4 space-y-4", children: [
              messages.map((message) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  className: `flex ${message.isBot ? "justify-start" : "justify-end"}`,
                  children: /* @__PURE__ */ jsxs("div", { className: `flex items-start gap-2 max-w-[80%] ${message.isBot ? "flex-row" : "flex-row-reverse"}`, children: [
                    /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isBot ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white" : "bg-gray-200 text-gray-600"}`, children: message.isBot ? /* @__PURE__ */ jsx(Bot, { size: 16 }) : /* @__PURE__ */ jsx(User, { size: 16 }) }),
                    /* @__PURE__ */ jsxs("div", { className: `rounded-2xl p-3 ${message.isBot ? "bg-gray-100 text-gray-800" : "bg-gradient-to-r from-primary-600 to-accent-500 text-white"}`, children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm whitespace-pre-line", children: message.text }),
                      /* @__PURE__ */ jsx("p", { className: `text-xs mt-1 opacity-70 ${message.isBot ? "text-gray-500" : "text-white/70"}`, children: formatTime(message.timestamp) })
                    ] })
                  ] })
                },
                message.id
              )),
              isTyping && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  className: "flex justify-start",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Bot, { size: 16, className: "text-white" }) }),
                    /* @__PURE__ */ jsx("div", { className: "bg-gray-100 rounded-2xl p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
                      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
                      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
                    ] }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: inputValue,
                  onChange: (e) => setInputValue(e.target.value),
                  onKeyPress: handleKeyPress,
                  placeholder: "Tapez votre message...",
                  className: "flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                  disabled: isTyping
                }
              ),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  onClick: handleSendMessage,
                  disabled: !inputValue.trim() || isTyping,
                  className: "bg-gradient-to-r from-primary-600 to-accent-500 text-white p-2 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: /* @__PURE__ */ jsx(Send, { size: 16 })
                }
              )
            ] }) })
          ] })
        ]
      }
    ) })
  ] });
};

export { $$Layout as $, Chatbot as C, Footer as F, Navigation as N, useTranslations as u };
