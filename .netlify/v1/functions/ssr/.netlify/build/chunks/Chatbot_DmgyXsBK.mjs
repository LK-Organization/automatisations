import { e as createAstro, f as createComponent, r as renderTemplate, n as renderSlot, l as renderHead, o as renderScript, h as addAttribute } from './astro/server_BZE_cvkn.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                        */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { X, Menu, Facebook, Youtube, Instagram, MessageCircle, Bot, Maximize2, Minimize2, User, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = {
  fr: "Français",
  en: "English"
};
const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "hero.title": "Automatisez votre succès avec l'IA",
    "hero.subtitle": "Automatisons Agency transforme votre entreprise grâce à des solutions d'automatisation intelligentes et personnalisées.",
    "hero.cta": "Découvrir nos solutions",
    "hero.cta.secondary": "Nous contacter",
    "hero.cta.link": "/solutions",
    "hero.cta.secondary.link": "/contact",
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
    // À placer dans "fr"
    "solutions.email.features.0": "Tri automatique",
    "solutions.email.features.1": "Réponses intelligentes",
    "solutions.email.features.2": "Suivi automatisé",
    "solutions.crm.features.0": "Suivi des interactions",
    "solutions.crm.features.1": "Segmentation client",
    "solutions.crm.features.2": "Rappels automatiques",
    "solutions.leads.features.0": "Formulaires intelligents",
    "solutions.leads.features.1": "Scoring automatique",
    "solutions.leads.features.2": "Notifications en temps réel",
    "solutions.appointment.features.0": "Agenda intelligent",
    "solutions.appointment.features.1": "Confirmation par email",
    "solutions.appointment.features.2": "Rappels automatiques",
    "solutions.accounting.features.0": "Facturation automatisée",
    "solutions.accounting.features.1": "Gestion des paiements",
    "solutions.accounting.features.2": "Synchronisation bancaire",
    "solutions.social.features.0": "Planification des posts",
    "solutions.social.features.1": "Réponses automatisées",
    "solutions.social.features.2": "Analyse de performance",
    "solutions.analytics.features.0": "Tableaux de bord personnalisés",
    "solutions.analytics.features.1": "Rapports automatiques",
    "solutions.analytics.features.2": "Indicateurs clés (KPI)",
    "solutions.project.features.0": "Gestion des tâches",
    "solutions.project.features.1": "Suivi des progrès",
    "solutions.project.features.2": "Collaboration centralisée",
    "solutions.recruitment.features.0": "Tri des CV",
    "solutions.recruitment.features.1": "Envoi automatique d'emails",
    "solutions.recruitment.features.2": "Suivi des candidats",
    "solutions.chatbot.features.0": "Réponses instantanées",
    "solutions.chatbot.features.1": "Disponibilité 24/7",
    "solutions.chatbot.features.2": "Intégration CRM",
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
    "sectors.industry.stats": "40 % d'efficacité en plus",
    "sectors.finance.stats": "60 % de réduction des erreurs",
    "sectors.health.stats": "30 % de temps économisé",
    "sectors.commerce.stats": "50 % d'augmentation des ventes",
    "sectors.education.stats": "70 % d'engagement en plus",
    "sectors.logistics.stats": "35 % de coûts réduits",
    // Testimonials
    "testimonials.title": "Témoignages Clients",
    "testimonials.subtitle": "Découvrez les résultats obtenus par nos clients",
    // Jean‑Pierre L.
    "testimonials.jpl.name": "Jean‑Pierre L.",
    "testimonials.jpl.role": "Gérant de magasin",
    "testimonials.jpl.company": "—",
    "testimonials.jpl.sector": "Commerce de détail",
    "testimonials.jpl.quote": "On a fait appel à Automatisons Agency pour optimiser notre gestion des commandes. J'étais sceptique au début mais l'équipe a assuré. Moins d’erreurs et un bon retour sur investissement. Je recommande !",
    "testimonials.jpl.result": "-30 % erreurs",
    "testimonials.jpl.date": "Il y a 2 semaines",
    // Lucie B.
    "testimonials.lb.name": "Lucie B.",
    "testimonials.lb.role": "Responsable formation digitale",
    "testimonials.lb.company": "—",
    "testimonials.lb.sector": "Éducation / EdTech",
    "testimonials.lb.quote": "On a automatisé l’envoi des certificats et les relances de modules. Avant, tout était manuel et chronophage. Aujourd’hui, nos apprenants reçoivent tout en temps voulu, et notre équipe peut se concentrer sur l’essentiel.",
    "testimonials.lb.result": "-60 % de tâches manuelles",
    "testimonials.lb.date": "il y a 2 semaines",
    // Sarah M.
    "testimonials.sm.name": "Sarah M.",
    "testimonials.sm.role": "Directrice Administrative",
    "testimonials.sm.company": "—",
    "testimonials.sm.sector": "Services",
    "testimonials.sm.quote": "Ils ont automatisé la gestion des factures. Avant, on passait des heures à tout faire manuellement. Maintenant, c’est rapide, automatique, et on a plus de temps pour d'autres tâches.",
    "testimonials.sm.result": "Gain de temps × 2",
    "testimonials.sm.date": "Il y a 1 mois",
    // Mohamed K.
    "testimonials.mk.name": "Mohamed K.",
    "testimonials.mk.role": "Gérant E‑commerce",
    "testimonials.mk.company": "—",
    "testimonials.mk.sector": "E‑commerce",
    "testimonials.mk.quote": "Super travail sur notre boutique en ligne. Commandes et stocks sont gérés automatiquement. Les ventes ont augmenté et le suivi des colis est bien pensé.",
    "testimonials.mk.result": "+35 % ventes",
    "testimonials.mk.date": "Il y a 3 semaines",
    // Claire D.
    "testimonials.cd.name": "Claire D.",
    "testimonials.cd.role": "Comptable",
    "testimonials.cd.company": "—",
    "testimonials.cd.sector": "Comptabilité",
    "testimonials.cd.quote": "L'automatisation a réduit considérablement les erreurs de saisie. L’équipe est à l’écoute et réactive. Le support technique est rapide et efficace.",
    "testimonials.cd.result": "-70 % erreurs de saisie",
    "testimonials.cd.date": "Il y a 2 mois",
    // Thomas R.
    "testimonials.tr.name": "Thomas R.",
    "testimonials.tr.role": "Directeur Logistique",
    "testimonials.tr.company": "—",
    "testimonials.tr.sector": "Logistique",
    "testimonials.tr.quote": "On a automatisé notre chaîne d'approvisionnement. Moins de retards, meilleure organisation et bon rapport qualité‑prix malgré l’investissement de départ.",
    "testimonials.tr.result": "-50 % retards de livraison",
    "testimonials.tr.date": "Il y a 1 mois",
    // Nathalie F.
    "testimonials.nf.name": "Nathalie F.",
    "testimonials.nf.role": "Responsable Marketing",
    "testimonials.nf.company": "—",
    "testimonials.nf.sector": "Marketing",
    "testimonials.nf.quote": "L’automatisation de la génération de leads a boosté nos conversions. Le système envoie les bonnes infos au bon moment. Équipe pédagogue et sympa.",
    "testimonials.nf.result": "+45 % conversions",
    "testimonials.nf.date": "Il y a 3 semaines",
    // Karim B.
    "testimonials.kb.name": "Karim B.",
    "testimonials.kb.role": "Directeur Technique",
    "testimonials.kb.company": "—",
    "testimonials.kb.sector": "Industrie",
    "testimonials.kb.quote": "Ils ont automatisé notre maintenance prédictive. Moins de pannes et une meilleure anticipation. Équipe technique compétente et réactive.",
    "testimonials.kb.result": "-60 % pannes",
    "testimonials.kb.date": "Il y a 2 mois",
    // Amélie L.
    "testimonials.al.name": "Amélie L.",
    "testimonials.al.role": "Responsable RH",
    "testimonials.al.company": "—",
    "testimonials.al.sector": "Ressources humaines",
    "testimonials.al.quote": "Le tri des CV est automatisé. On a gagné un temps fou. L’équipe a bien pris le temps de nous former. L’interface pourrait être plus intuitive, mais le système est efficace.",
    "testimonials.al.result": "-50 % temps de recrutement",
    "testimonials.al.date": "Il y a 1 mois",
    // Google reviews
    "google.reviewCount": "2 avis",
    "google.today": "aujourd'hui",
    "google.oneDay": "il y a un jour",
    "google.days": `il y a {count} jours`,
    "google.oneWeek": "il y a une semaine",
    "google.weeks": "il y a {count} semaines",
    "google.oneMonth": "il y a un mois",
    "google.months": "il y a {count} mois",
    // Michal Klg
    "google.michal.name": "Michal Klg",
    "google.michal.quote": "Je recommande pour la mise en place d'automatisation IA. Gros gain de temps et d'efficacité sur nos processus suite à l'intervention d'Automatisons.fr merci encore",
    "google.michal.date": "2025-07-08",
    // lucas desprat
    "google.lucas.name": "lucas desprat",
    "google.lucas.quote": "L'agence Automatisons a littéralement révolutionné la gestion de mon auto entreprise. Ils ont automatisé tout le volet CRM et data, ce qui m’a fait gagner un temps fou au quotidien. Fini les tâches répétitives et la perte d’informations ! Aujourd’hui, tout est centralisé, fluide, et surtout, je peux enfin me concentrer sur ce qui compte vraiment : mon cœur de métier. Un accompagnement clair, humain et hyper efficace. Je recommande les yeux fermés.",
    "google.lucas.date": "2025-07-08",
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
    // Analysis step durations
    "methodology.analysis.duration": "24 h",
    "methodology.plan.duration": "48 h",
    "methodology.implementation.duration": "1 semaine",
    // Analysis features
    "methodology.analysis.feature1": "Audit complet de vos processus",
    "methodology.analysis.feature2": "Identification des opportunités",
    "methodology.analysis.feature3": "Analyse des données existantes",
    "methodology.analysis.feature4": "Rapport détaillé gratuit",
    // Plan features
    "methodology.plan.feature1": "Stratégie personnalisée",
    "methodology.plan.feature2": "Roadmap détaillée",
    "methodology.plan.feature3": "Estimation des gains",
    "methodology.plan.feature4": "Planning de déploiement",
    // Implementation features
    "methodology.implementation.feature1": "Développement sur mesure",
    "methodology.implementation.feature2": "Tests et validation",
    "methodology.implementation.feature3": "Formation des équipes",
    "methodology.implementation.feature4": "Support continu",
    "about.title": "À propos d'Automatisons Agency",
    "about.description": "Nous sommes une agence spécialisée dans l'automatisation et l'intelligence artificielle, dédiée à transformer la façon dont les entreprises opèrent.",
    // About stats (FR)
    "about.stats.customers": "100 %",
    "about.stats.customersLabel": "Clients satisfaits",
    "about.stats.years": "3+",
    "about.stats.yearsLabel": "Années d'expérience",
    "about.stats.efficiency": "200 %",
    "about.stats.efficiencyLabel": "Amélioration efficacité",
    "about.stats.projects": "45",
    "about.stats.projectsLabel": "Projets réalisés",
    // About features (FR)
    "about.feature.innovation": "À la pointe de l’innovation",
    "about.feature.experts": "Équipe d'experts certifiés",
    "about.feature.customSolutions": "Solutions personnalisées en moins de 24 h",
    "about.feature.support": "Support 24/7",
    "contact.title": "Contactez-nous",
    "contact.subtitle": "Prêt à transformer votre entreprise ? Parlons de votre projet.",
    "contact.emailFormTitle": "Envoyer un email",
    "contact.meetingFormTitle": "Prendre un rendez-vous",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Téléphone",
    "contact.addressLabel": "Adresse",
    "contact.city": "Paris, France",
    "contact.schedule": "Prendre RDV",
    "contact.success": "✅ Message envoyé !",
    "contact.error": "❌ Erreur : ",
    "footer.description": "Automatisons Agency - Votre partenaire de confiance en automatisation et intelligence artificielle",
    "footer.navigationTitle": "Navigation",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",
    "footer.legal": "Mentions légales",
    "footer.terms": "Conditions Générales d’Utilisation",
    "footer.usage": "Termes d’utilisation",
    "footer.legalLink": "/mentions-legales",
    "footer.termsLink": "/conditions-generales",
    "footer.usageLink": "/termes-utilisation"
  },
  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "hero.title": "Automate Your Success with AI",
    "hero.subtitle": "Automatisons Agency transforms your business with smart, customized automation solutions.",
    "hero.cta": "Discover Our Solutions",
    "hero.cta.secondary": "Contact Us",
    "hero.cta.link": "/en/solutions",
    "hero.cta.secondary.link": "/en/contact",
    // Solutions
    "solutions.title": "Our Automation Solutions",
    "solutions.subtitle": "Comprehensive solutions to automate all your business processes",
    "solutions.email.title": "Email Management",
    "solutions.email.description": "Automate sorting, replies, and follow‑ups for your emails",
    "solutions.crm.title": "CRM & Customer Tracking",
    "solutions.crm.description": "Manage customer relationships with intelligent automation",
    "solutions.leads.title": "Lead Generation",
    "solutions.leads.description": "Automatically prospect and qualify your leads",
    "solutions.appointment.title": "Appointment Scheduling",
    "solutions.appointment.description": "Automate scheduling and management of your appointments",
    "solutions.accounting.title": "Accounting & Invoicing",
    "solutions.accounting.description": "Automate your accounting and invoicing workflows",
    "solutions.social.title": "Social Media",
    "solutions.social.description": "Manage and automate your social media presence",
    "solutions.analytics.title": "Analytics & Reporting",
    "solutions.analytics.description": "Generate automated reports and insights with AI",
    "solutions.project.title": "Project Management",
    "solutions.project.description": "Optimize planning and tracking of your projects",
    "solutions.recruitment.title": "Recruitment & Onboarding",
    "solutions.recruitment.description": "Automate your recruitment and onboarding processes",
    "solutions.chatbot.title": "AI Chatbots",
    "solutions.chatbot.description": "Intelligent conversational assistants for your support team",
    "solutions.learn_more": "Learn More",
    "solutions.cta.title": "Ready to Automate Your Business?",
    "solutions.cta.description": "See how our solutions can transform your workflows",
    "solutions.cta.button": "Contact Us",
    // À placer dans "en"
    "solutions.email.features.0": "Automatic sorting",
    "solutions.email.features.1": "Smart replies",
    "solutions.email.features.2": "Email tracking",
    "solutions.crm.features.0": "Interaction tracking",
    "solutions.crm.features.1": "Customer segmentation",
    "solutions.crm.features.2": "Automated reminders",
    "solutions.leads.features.0": "Smart forms",
    "solutions.leads.features.1": "Automatic scoring",
    "solutions.leads.features.2": "Real-time notifications",
    "solutions.appointment.features.0": "Smart calendar",
    "solutions.appointment.features.1": "Email confirmations",
    "solutions.appointment.features.2": "Auto-reminders",
    "solutions.accounting.features.0": "Automated invoicing",
    "solutions.accounting.features.1": "Payment management",
    "solutions.accounting.features.2": "Bank sync",
    "solutions.social.features.0": "Post scheduling",
    "solutions.social.features.1": "Automated replies",
    "solutions.social.features.2": "Performance analytics",
    "solutions.analytics.features.0": "Custom dashboards",
    "solutions.analytics.features.1": "Auto-reports",
    "solutions.analytics.features.2": "Key Performance Indicators",
    "solutions.project.features.0": "Task management",
    "solutions.project.features.1": "Progress tracking",
    "solutions.project.features.2": "Centralized collaboration",
    "solutions.recruitment.features.0": "CV screening",
    "solutions.recruitment.features.1": "Automated emails",
    "solutions.recruitment.features.2": "Candidate tracking",
    "solutions.chatbot.features.0": "Instant replies",
    "solutions.chatbot.features.1": "24/7 availability",
    "solutions.chatbot.features.2": "CRM integration",
    // Sectors
    "sectors.title": "Industries We Serve",
    "sectors.subtitle": "We help businesses across sectors in their digital transformation",
    "sectors.industry.title": "Manufacturing",
    "sectors.industry.description": "Production line optimization and predictive maintenance",
    "sectors.finance.title": "Finance",
    "sectors.finance.description": "Automate financial processes and regulatory compliance",
    "sectors.health.title": "Healthcare",
    "sectors.health.description": "Patient record management and care pathway optimization",
    "sectors.commerce.title": "Retail",
    "sectors.commerce.description": "E‑commerce, inventory management and automated customer relations",
    "sectors.education.title": "Education",
    "sectors.education.description": "Learning platforms and automated administrative management",
    "sectors.logistics.title": "Logistics",
    "sectors.logistics.description": "Supply chain optimization and automated tracking",
    "sectors.industry.stats": "40% more efficiency",
    "sectors.finance.stats": "60% fewer errors",
    "sectors.health.stats": "30% time saved",
    "sectors.commerce.stats": "50% sales increase",
    "sectors.education.stats": "70% more engagement",
    "sectors.logistics.stats": "35% cost reduction",
    // Testimonials
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "See what our customers have achieved",
    // Jean‑Pierre L.
    "testimonials.jpl.name": "Jean‑Pierre L.",
    "testimonials.jpl.role": "Store Manager",
    "testimonials.jpl.company": "—",
    "testimonials.jpl.sector": "Retail",
    "testimonials.jpl.quote": "We turned to Automatisons Agency to optimize our order management. I was skeptical at first but the team delivered. Fewer errors and a great ROI. Highly recommend!",
    "testimonials.jpl.result": "-30 % errors",
    "testimonials.jpl.date": "2 weeks ago",
    // Lucie B.
    "testimonials.lb.name": "Lucie B.",
    "testimonials.lb.role": "Responsable formation digitale",
    "testimonials.lb.company": "—",
    "testimonials.lb.sector": "Éducation / EdTech",
    "testimonials.lb.quote": "On a automatisé l’envoi des certificats et les relances de modules. Avant, tout était manuel et chronophage. Aujourd’hui, nos apprenants reçoivent tout en temps voulu, et notre équipe peut se concentrer sur l’essentiel.",
    "testimonials.lb.result": "-60 % de tâches manuelles",
    "testimonials.lb.date": "il y a 2 semaines",
    // Sarah M.
    "testimonials.sm.name": "Sarah M.",
    "testimonials.sm.role": "Administrative Director",
    "testimonials.sm.company": "—",
    "testimonials.sm.sector": "Services",
    "testimonials.sm.quote": "They automated our invoicing. Before, we spent hours doing it manually. Now it’s fast, automatic, and we have more time for other tasks.",
    "testimonials.sm.result": "Time saved ×2",
    "testimonials.sm.date": "1 month ago",
    // Mohamed K.
    "testimonials.mk.name": "Mohamed K.",
    "testimonials.mk.role": "E‑commerce Manager",
    "testimonials.mk.company": "—",
    "testimonials.mk.sector": "E‑commerce",
    "testimonials.mk.quote": "Great work on our online store. Orders and stock are managed automatically. Sales have increased and the package tracking is well‑designed.",
    "testimonials.mk.result": "+35 % sales",
    "testimonials.mk.date": "3 weeks ago",
    // Claire D.
    "testimonials.cd.name": "Claire D.",
    "testimonials.cd.role": "Accountant",
    "testimonials.cd.company": "—",
    "testimonials.cd.sector": "Accounting",
    "testimonials.cd.quote": "Automation drastically cut data‑entry errors. The team is attentive and responsive. Technical support is fast and effective.",
    "testimonials.cd.result": "-70 % data‑entry errors",
    "testimonials.cd.date": "2 months ago",
    // Thomas R.
    "testimonials.tr.name": "Thomas R.",
    "testimonials.tr.role": "Logistics Director",
    "testimonials.tr.company": "—",
    "testimonials.tr.sector": "Logistics",
    "testimonials.tr.quote": "We automated our supply chain. Fewer delays, better organization, and good value despite the initial investment.",
    "testimonials.tr.result": "-50 % delivery delays",
    "testimonials.tr.date": "1 month ago",
    // Nathalie F.
    "testimonials.nf.name": "Nathalie F.",
    "testimonials.nf.role": "Marketing Manager",
    "testimonials.nf.company": "—",
    "testimonials.nf.sector": "Marketing",
    "testimonials.nf.quote": "Lead‑gen automation boosted our conversions. The system sends the right info at the right time. The team is knowledgeable and friendly.",
    "testimonials.nf.result": "+45 % conversions",
    "testimonials.nf.date": "3 weeks ago",
    // Karim B.
    "testimonials.kb.name": "Karim B.",
    "testimonials.kb.role": "Technical Director",
    "testimonials.kb.company": "—",
    "testimonials.kb.sector": "Manufacturing",
    "testimonials.kb.quote": "They automated our predictive maintenance. Fewer breakdowns and better foresight. The technical team is skilled and responsive.",
    "testimonials.kb.result": "-60 % breakdowns",
    "testimonials.kb.date": "2 months ago",
    // Amélie L.
    "testimonials.al.name": "Amélie L.",
    "testimonials.al.role": "HR Manager",
    "testimonials.al.company": "—",
    "testimonials.al.sector": "Human Resources",
    "testimonials.al.quote": "CV screening is automated. We saved tons of time. The team trained us well. The interface could be more intuitive, but the system works great.",
    "testimonials.al.result": "-50 % recruiting time",
    "testimonials.al.date": "1 month ago",
    // Google reviews
    "google.reviewCount": "2 reviews",
    "google.today": "today",
    "google.oneDay": "1 day ago",
    "google.days": "{count} days ago",
    "google.oneWeek": "1 week ago",
    "google.weeks": "{count} weeks ago",
    "google.oneMonth": "1 month ago",
    "google.months": "{count} months ago",
    "google.michal.name": "Michal Klg",
    "google.michal.quote": "I recommend them for setting up AI automation. Huge time and efficiency gains on our processes following Automatisons.fr’s intervention. Thanks again!",
    "google.michal.date": "2025-07-08",
    "google.lucas.name": "lucas desprat",
    "google.lucas.quote": "Automatisons Agency literally revolutionized the management of my auto business. They automated the entire CRM and data side, saving me a ton of time daily. No more repetitive tasks or lost info! Everything’s now centralized and smooth, allowing me to focus on what truly matters: my core business. Clear, human, and highly efficient support—I recommend them wholeheartedly.",
    "google.lucas.date": "2025-07-08",
    // Methodology
    "methodology.title": "Our Methodology",
    "methodology.subtitle": "A proven 3‑step process to ensure your success",
    "methodology.analysis.title": "Free Audit",
    "methodology.analysis.description": "Comprehensive audit of your current processes and automation opportunities",
    "methodology.plan.title": "Tailored Plan",
    "methodology.plan.description": "A personalized strategy with detailed roadmap and gain estimates",
    "methodology.implementation.title": "Implementation",
    "methodology.implementation.description": "Development, deployment, and training for successful adoption",
    "methodology.cta.title": "Start Your Transformation Today",
    "methodology.cta.description": "Get a free process audit within 48 hours",
    "methodology.cta.free_analysis": "Free Audit",
    "methodology.cta.consultation": "Contact Us",
    "methodology.analysis.duration": "24 h",
    "methodology.plan.duration": "48 h",
    "methodology.implementation.duration": "1 week",
    "methodology.analysis.feature1": "Comprehensive process audit",
    "methodology.analysis.feature2": "Identify automation opportunities",
    "methodology.analysis.feature3": "Existing data analysis",
    "methodology.analysis.feature4": "Free detailed report",
    "methodology.plan.feature1": "Customized strategy",
    "methodology.plan.feature2": "Detailed roadmap",
    "methodology.plan.feature3": "Gain estimates",
    "methodology.plan.feature4": "Deployment planning",
    "methodology.implementation.feature1": "Custom development",
    "methodology.implementation.feature2": "Testing and validation",
    "methodology.implementation.feature3": "Team training",
    "methodology.implementation.feature4": "Ongoing support",
    "about.title": "About Automatisons Agency",
    "about.description": "We are an agency specializing in automation and artificial intelligence, dedicated to transforming how businesses operate.",
    "about.stats.customers": "100 %",
    "about.stats.customersLabel": "Satisfied clients",
    "about.stats.years": "3+",
    "about.stats.yearsLabel": "Years of experience",
    "about.stats.efficiency": "200 %",
    "about.stats.efficiencyLabel": "Efficiency improvement",
    "about.stats.projects": "45",
    "about.stats.projectsLabel": "Projects completed",
    "about.feature.innovation": "At the cutting edge of innovation",
    "about.feature.experts": "Certified expert team",
    "about.feature.customSolutions": "Custom solutions within 24 h",
    "about.feature.support": "24/7 support",
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to transform your business? Let's talk.",
    "contact.emailFormTitle": "Send an Email",
    "contact.meetingFormTitle": "Schedule a Meeting",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.emailLabel": "Email",
    "contact.phoneLabel": "Phone",
    "contact.addressLabel": "Address",
    "contact.city": "Paris, France",
    "contact.schedule": "Schedule a Meeting",
    "contact.success": "✅ Message sent!",
    "contact.error": "❌ Error: ",
    "footer.description": "Automatisons Agency – Your trusted partner in automation and AI",
    "footer.navigationTitle": "Navigation",
    "footer.followUs": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.legal": "Legal Notice",
    "footer.terms": "Terms and Conditions of Use",
    "footer.usage": "Terms of Service",
    "footer.legalLink": "/en/mentions-legales",
    "footer.termsLink": "/en/conditions-generales",
    "footer.usageLink": "/en/termes-utilisation"
  }
};
function getLangFromUrl(url) {
  const segs = url.pathname.split("/").filter(Boolean);
  return segs[0] === "en" ? "en" : "fr";
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] ?? ui["fr"][key];
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.automatisons.fr");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Automatisons\xA0\u2014 Votre partenaire de confiance en automatisation et intelligence artificielle"
  } = Astro2.props;
  const lang = getLangFromUrl(new URL(Astro2.request.url));
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:image" content="/brand.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="canonical"', '><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-8CDN9B0J2D"><\/script>', "", '</head> <body class="font-sans"> <main> <!-- Pass `lang` and `t` down to pages/components --> ', " </main> </body></html>"], ["<html", '> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:image" content="/brand.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="canonical"', '><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-8CDN9B0J2D"><\/script>', "", '</head> <body class="font-sans"> <main> <!-- Pass \\`lang\\` and \\`t\\` down to pages/components --> ', " </main> </body></html>"])), addAttribute(lang, "lang"), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(`https://www.automatisons.fr${Astro2.url.pathname}`, "href"), renderScript($$result, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/layouts/Layout.astro", void 0);

const Navigation = ({
  lang,
  isHomePage = false
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations(lang);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navItems = [
    { key: "nav.home", href: lang === "en" ? "/en/" : "/" },
    {
      key: "nav.solutions",
      href: lang === "en" ? "/en/solutions" : "/solutions"
    },
    { key: "nav.contact", href: lang === "en" ? "/en/contact" : "/contact" }
  ];
  const [switchTo, setSwitchTo] = useState("/");
  const [switchLabel, setSwitchLabel] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const isEnglish = currentPath.startsWith("/en");
      const newPath = isEnglish ? currentPath.replace(/^\/en/, "") || "/" : "/en" + currentPath;
      setSwitchTo(newPath);
      setSwitchLabel(isEnglish ? languages.fr : languages.en);
    }
  }, []);
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
    }
    return "bg-black/95 backdrop-blur-md border-b border-gray-800";
  };
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      initial: { y: 0 },
      animate: { y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 },
      transition: { duration: 0.3, ease: "easeInOut" },
      children: /* @__PURE__ */ jsxs("div", { className: getBackgroundStyle(), children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-20", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: lang === "en" ? "/en/" : "/",
              className: "flex items-center",
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/logo-automatisation.png",
                  alt: "Automatisons Agency Logo",
                  className: "h-12 w-auto"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8", children: /* @__PURE__ */ jsx("div", { children: navItems.map((item) => /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: "text-white/90 hover:text-white px-4 py-2 text-base font-medium transition-all duration-200 hover:scale-105",
              children: t(item.key)
            },
            item.key
          )) }) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: switchTo,
              className: "hidden md:flex bg-primary-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 items-center justify-center gap-2",
              children: switchLabel
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "md:hidden flex items-center space-x-4", children: /* @__PURE__ */ jsx(
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
            children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 px-2 pt-2 pb-3 space-y-1 sm:px-3", children: [
              navItems.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  className: "text-white/90 hover:text-white block px-3 py-2 text-base font-medium transition-all duration-200",
                  onClick: () => setIsMenuOpen(false),
                  children: t(item.key)
                },
                item.key
              )),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: switchTo,
                  className: " bg-primary-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 items-center justify-center gap-2 ",
                  children: switchLabel
                }
              )
            ] })
          }
        ) })
      ] })
    }
  );
};

const LogoX = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "data-testid": "geist-icon",
      height: "16",
      strokeLinejoin: "round",
      viewBox: "0 0 16 16",
      width: "16",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z",
          fill: "currentColor"
        }
      )
    }
  );
};

const Footer = ({ lang }) => {
  const t = useTranslations(lang);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61577856784226",
      label: "Facebook"
    },
    { icon: LogoX, href: "https://x.com/Automatisonsfr", label: "X" },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCbhcq1KZSTbgCqz2aUNXaTA",
      label: "YouTube"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/automatisons.fr/",
      label: "Instagram"
    }
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
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: t("footer.navigationTitle") }),
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
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: t("footer.followUs") }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: socialLinks.map((social) => /* @__PURE__ */ jsx(
              motion.a,
              {
                href: social.href,
                whileHover: { scale: 1.1 },
                whileTap: { scale: 0.9 },
                className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200",
                "aria-label": social.label,
                target: "_blank",
                children: /* @__PURE__ */ jsx(social.icon, { size: 20 })
              },
              social.label
            )) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center flex-row border-t border-gray-800 mt-8 pt-8 text-center flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-gray-400", children: [
        "© ",
        currentYear,
        " Automatisons Agency. ",
        t("footer.rights")
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: t("footer.legalLink"),
            className: "text-gray-400 hover:text-primary-400 transition-colors duration-200",
            children: t("footer.legal")
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: t("footer.termsLink"),
            className: "text-gray-400 hover:text-primary-400 transition-colors duration-200",
            children: t("footer.terms")
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: t("footer.usageLink"),
            className: "text-gray-400 hover:text-primary-400 transition-colors duration-200",
            children: t("footer.usage")
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
        text: "Vous recherchez des solutions pour optimiser vos processus métier et réduire le temps consacré aux tâches répétitives ? Notre expertise en automatisation vous permet de transformer ces contraintes en opportunités d'efficacité.\nEn tant que spécialistes de l'automatisation, nous accompagnons les entreprises dans la digitalisation de leurs workflows. Vous pouvez explorer nos solutions via cet assistant intelligent ou nous contacter directement pour un entretien personnalisé avec nos experts. \nDécouvrons ensemble comment l'automatisation peut révolutionner votre productivité.",
        isBot: true,
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);
  const knowledgeBase = {
    // Questions sur l'automatisation
    automatisation: {
      keywords: [
        "automatisation",
        "automatiser",
        "workflow",
        "processus",
        "tâches"
      ],
      response: "L'automatisation des workflows permet de simplifier et d'optimiser vos processus métier. Nous proposons :\n\n• Automatisation des emails et communications\n• Gestion automatisée des leads et CRM\n• Automatisation comptable et facturation\n• Workflows de validation et d'approbation\n• Intégration entre vos outils existants\n\nSouhaitez-vous en savoir plus sur un domaine spécifique ?"
    },
    // Questions sur l'IA
    "intelligence artificielle": {
      keywords: [
        "ia",
        "intelligence artificielle",
        "ai",
        "agent ia",
        "chatbot",
        "machine learning"
      ],
      response: "Nos solutions d'intelligence artificielle incluent :\n\n• Chatbots conversationnels intelligents\n• Agents IA pour le support client\n• Analyse prédictive des données\n• Reconnaissance et traitement automatique de documents\n• Personnalisation des expériences utilisateur\n• Optimisation des processus par IA\n\nQuel type d'agent IA vous intéresse le plus ?"
    },
    // Questions sur les services
    services: {
      keywords: [
        "services",
        "offres",
        "solutions",
        "que faites-vous",
        "proposez-vous"
      ],
      response: "Nos principaux services incluent :\n\n🤖 **Intelligence Artificielle**\n• Développement d'agents IA personnalisés\n• Chatbots et assistants virtuels\n• Analyse de données par IA\n\n⚙️ **Automatisation des Processus**\n• Workflows automatisés\n• Intégrations système\n• Optimisation des tâches répétitives\n\n🔗 **Intégration Système**\n• Connexion de vos outils\n• APIs et synchronisation\n• Migration de données\n\nQuel service vous intéresse ?"
    },
    // Questions sur les prix
    prix: {
      keywords: ["prix", "coût", "tarif", "budget", "combien", "devis"],
      response: "Nos tarifs sont personnalisés selon vos besoins spécifiques. Voici notre approche :\n\n💡 **Analyse gratuite** (48h)\n• Audit de vos processus actuels\n• Identification des opportunités\n• Estimation des gains potentiels\n\n📋 **Devis personnalisé**\n• Basé sur la complexité du projet\n• Paiement échelonné possible\n• ROI garanti\n\nSouhaitez-vous une analyse gratuite de vos processus ?"
    },
    // Questions sur l'implémentation
    implementation: {
      keywords: [
        "implémentation",
        "mise en place",
        "déploiement",
        "installation",
        "comment ça marche"
      ],
      response: "Notre processus d'implémentation en 3 étapes :\n\n🔍 **1. Analyse (48h)**\n• Audit complet de vos processus\n• Identification des opportunités\n• Rapport détaillé gratuit\n\n📋 **2. Planification (7 jours)**\n• Stratégie personnalisée\n• Roadmap détaillée\n• Planning de déploiement\n\n🚀 **3. Déploiement (2-8 semaines)**\n• Développement sur mesure\n• Tests et validation\n• Formation de vos équipes\n• Support continu\n\nVoulez-vous commencer par une analyse gratuite ?"
    },
    // Questions sur les secteurs
    secteurs: {
      keywords: ["secteur", "industrie", "domaine", "entreprise", "business"],
      response: "Nous accompagnons tous les secteurs d'activité :\n\n🏭 **Industrie** - Production et maintenance prédictive\n💰 **Finance** - Processus financiers et conformité\n🏥 **Santé** - Gestion patients et parcours de soins\n🛒 **Commerce** - E-commerce et relation client\n🎓 **Éducation** - Plateformes d'apprentissage\n🚚 **Logistique** - Chaînes d'approvisionnement\n\nDans quel secteur évoluez-vous ?"
    },
    // Questions sur le support
    support: {
      keywords: ["support", "aide", "assistance", "problème", "bug"],
      response: "Notre support client comprend :\n\n🔧 **Support technique 24/7**\n• Assistance en temps réel\n• Résolution rapide des problèmes\n• Maintenance préventive\n\n📚 **Formation et documentation**\n• Formation de vos équipes\n• Guides d'utilisation détaillés\n• Webinaires réguliers\n\n📞 **Contact direct**\n• Email : contact@automatisons.com\n• Téléphone : +33 6 48 09 15 11\n• Chat en direct (comme maintenant !)\n\nComment puis-je vous aider spécifiquement ?"
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
      return "Pour nous contacter :\n\n📧 **Email** : contact@automatisons.com\n📞 **Téléphone** : +33 6 48 09 15 11\n📍 **Adresse** : Paris, France\n\nVous pouvez aussi remplir notre formulaire de contact sur le site pour une réponse rapide. Souhaitez-vous que je vous redirige vers la page contact ?";
    }
    return "Je comprends votre question, mais j'aimerais vous donner une réponse plus précise. Pouvez-vous me dire si vous vous intéressez plutôt à :\n\n• L'automatisation de processus métier\n• L'implémentation d'agents IA\n• Nos services et tarifs\n• Un secteur d'activité spécifique\n\nOu contactez directement notre équipe au +33 6 48 09 15 11 pour un conseil personnalisé !";
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
    setTimeout(
      () => {
        const botResponse = {
          id: (Date.now() + 1).toString(),
          text: findBestResponse(inputValue),
          isBot: true,
          timestamp: /* @__PURE__ */ new Date()
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1e3 + Math.random() * 1e3
    );
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
                  children: /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `flex items-start gap-2 max-w-[80%] ${message.isBot ? "flex-row" : "flex-row-reverse"}`,
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.isBot ? "bg-gradient-to-r from-primary-600 to-accent-500 text-white" : "bg-gray-200 text-gray-600"}`,
                            children: message.isBot ? /* @__PURE__ */ jsx(Bot, { size: 16 }) : /* @__PURE__ */ jsx(User, { size: 16 })
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: `rounded-2xl p-3 ${message.isBot ? "bg-gray-100 text-gray-800" : "bg-gradient-to-r from-primary-600 to-accent-500 text-white"}`,
                            children: [
                              /* @__PURE__ */ jsx("p", { className: "text-sm whitespace-pre-line", children: message.text }),
                              /* @__PURE__ */ jsx(
                                "p",
                                {
                                  className: `text-xs mt-1 opacity-70 ${message.isBot ? "text-gray-500" : "text-white/70"}`,
                                  children: formatTime(message.timestamp)
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
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
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                          style: { animationDelay: "0.1s" }
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                          style: { animationDelay: "0.2s" }
                        }
                      )
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
