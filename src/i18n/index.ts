export const languages = {
  fr: "Français",
};

export const defaultLang = "fr";

export const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "hero.title": "Automatisez votre succès avec l'IA",
    "hero.subtitle":
      "Automatisons Agency transforme votre entreprise grâce à des solutions d'automatisation intelligentes et personnalisées.",
    "hero.cta": "Découvrir nos solutions",
    "hero.cta.secondary": "Nous contacter",

    // Solutions
    "solutions.title": "Nos Solutions d'Automatisation",
    "solutions.subtitle":
      "Des solutions complètes pour automatiser tous vos processus métier",
    "solutions.email.title": "Gestion des Emails",
    "solutions.email.description":
      "Automatisez le tri, les réponses et le suivi de vos emails",
    "solutions.crm.title": "CRM & Suivi Client",
    "solutions.crm.description":
      "Gérez vos relations clients avec une automatisation intelligente",
    "solutions.leads.title": "Génération de Leads",
    "solutions.leads.description":
      "Prospectez et qualifiez vos leads automatiquement",
    "solutions.appointment.title": "Prise de Rendez-vous",
    "solutions.appointment.description":
      "Automatisez la planification et la gestion de vos rendez-vous",
    "solutions.accounting.title": "Comptabilité & Facturation",
    "solutions.accounting.description":
      "Automatisez votre comptabilité et vos processus de facturation",
    "solutions.social.title": "Réseaux Sociaux",
    "solutions.social.description":
      "Gérez et automatisez votre présence sur les réseaux sociaux",
    "solutions.analytics.title": "Analyse & Reporting",
    "solutions.analytics.description":
      "Générez des rapports et analyses automatisés avec l'IA",
    "solutions.project.title": "Gestion de Projet",
    "solutions.project.description":
      "Optimisez la planification et le suivi de vos projets",
    "solutions.recruitment.title": "Recrutement & Onboarding",
    "solutions.recruitment.description":
      "Automatisez vos processus de recrutement et d'intégration",
    "solutions.chatbot.title": "Chatbots IA",
    "solutions.chatbot.description":
      "Assistants conversationnels intelligents pour votre support client",
    "solutions.learn_more": "En savoir plus",
    "solutions.cta.title": "Prêt à automatiser votre entreprise ?",
    "solutions.cta.description":
      "Découvrez comment nos solutions peuvent transformer vos processus",
    "solutions.cta.button": "Nous contacter",

    // Sectors
    "sectors.title": "Secteurs d'Activité",
    "sectors.subtitle":
      "Nous accompagnons les entreprises de tous secteurs dans leur transformation digitale",
    "sectors.industry.title": "Industrie",
    "sectors.industry.description":
      "Optimisation des chaînes de production et maintenance prédictive",
    "sectors.finance.title": "Finance",
    "sectors.finance.description":
      "Automatisation des processus financiers et conformité réglementaire",
    "sectors.health.title": "Santé",
    "sectors.health.description":
      "Gestion des dossiers patients et optimisation des parcours de soins",
    "sectors.commerce.title": "Commerce",
    "sectors.commerce.description":
      "E-commerce, gestion des stocks et relation client automatisée",
    "sectors.education.title": "Éducation",
    "sectors.education.description":
      "Plateformes d'apprentissage et gestion administrative automatisée",
    "sectors.logistics.title": "Logistique",
    "sectors.logistics.description":
      "Optimisation des chaînes d'approvisionnement et tracking automatisé",

    // Testimonials
    "testimonials.title": "Témoignages Clients",
    "testimonials.subtitle": "Découvrez les résultats obtenus par nos clients",

    // Methodology
    "methodology.title": "Notre Méthodologie",
    "methodology.subtitle":
      "Un processus éprouvé en 3 étapes pour garantir votre succès",
    "methodology.analysis.title": "Analyse Gratuite",
    "methodology.analysis.description":
      "Audit complet de vos processus actuels et identification des opportunités d'automatisation",
    "methodology.plan.title": "Plan Sur Mesure",
    "methodology.plan.description":
      "Élaboration d'une stratégie personnalisée avec roadmap détaillée et estimation des gains",
    "methodology.implementation.title": "Mise en Œuvre",
    "methodology.implementation.description":
      "Développement, déploiement et formation pour une adoption réussie",
    "methodology.cta.title": "Commencez votre transformation dès aujourd'hui",
    "methodology.cta.description":
      "Bénéficiez d'une analyse gratuite de vos processus en 48h",
    "methodology.cta.free_analysis": "Analyse gratuite",
    "methodology.cta.consultation": "Nous contacter",

    "about.title": "À propos d'Automatisons Agency",
    "about.description":
      "Nous sommes une agence spécialisée dans l'automatisation et l'intelligence artificielle, dédiée à transformer la façon dont les entreprises opèrent.",
    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Prêt à transformer votre entreprise ? Parlons de votre projet.",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "footer.description":
      "Automatisons Agency - Votre partenaire de confiance en automatisation et intelligence artificielle",
  },
} as const;

export function getLangFromUrl(url: URL) {
  return "fr";
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui["fr"][key];
  };
}
