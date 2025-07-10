// src/i18n.ts
export const languages = {
  fr: "Français",
  en: "English",
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
    "hero.cta.link": "/solutions",
    "hero.cta.secondary.link": "/contact",
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
    "testimonials.jpl.quote":
      "On a fait appel à Automatisons Agency pour optimiser notre gestion des commandes. J'étais sceptique au début mais l'équipe a assuré. Moins d’erreurs et un bon retour sur investissement. Je recommande !",
    "testimonials.jpl.result": "-30 % erreurs",
    "testimonials.jpl.date": "Il y a 2 semaines",

    // Sarah M.
    "testimonials.sm.name": "Sarah M.",
    "testimonials.sm.role": "Directrice Administrative",
    "testimonials.sm.company": "—",
    "testimonials.sm.sector": "Services",
    "testimonials.sm.quote":
      "Ils ont automatisé la gestion des factures. Avant, on passait des heures à tout faire manuellement. Maintenant, c’est rapide, automatique, et on a plus de temps pour d'autres tâches.",
    "testimonials.sm.result": "Gain de temps × 2",
    "testimonials.sm.date": "Il y a 1 mois",

    // Mohamed K.
    "testimonials.mk.name": "Mohamed K.",
    "testimonials.mk.role": "Gérant E‑commerce",
    "testimonials.mk.company": "—",
    "testimonials.mk.sector": "E‑commerce",
    "testimonials.mk.quote":
      "Super travail sur notre boutique en ligne. Commandes et stocks sont gérés automatiquement. Les ventes ont augmenté et le suivi des colis est bien pensé.",
    "testimonials.mk.result": "+35 % ventes",
    "testimonials.mk.date": "Il y a 3 semaines",

    // Claire D.
    "testimonials.cd.name": "Claire D.",
    "testimonials.cd.role": "Comptable",
    "testimonials.cd.company": "—",
    "testimonials.cd.sector": "Comptabilité",
    "testimonials.cd.quote":
      "L'automatisation a réduit considérablement les erreurs de saisie. L’équipe est à l’écoute et réactive. Le support technique est rapide et efficace.",
    "testimonials.cd.result": "-70 % erreurs de saisie",
    "testimonials.cd.date": "Il y a 2 mois",

    // Thomas R.
    "testimonials.tr.name": "Thomas R.",
    "testimonials.tr.role": "Directeur Logistique",
    "testimonials.tr.company": "—",
    "testimonials.tr.sector": "Logistique",
    "testimonials.tr.quote":
      "On a automatisé notre chaîne d'approvisionnement. Moins de retards, meilleure organisation et bon rapport qualité‑prix malgré l’investissement de départ.",
    "testimonials.tr.result": "-50 % retards de livraison",
    "testimonials.tr.date": "Il y a 1 mois",

    // Nathalie F.
    "testimonials.nf.name": "Nathalie F.",
    "testimonials.nf.role": "Responsable Marketing",
    "testimonials.nf.company": "—",
    "testimonials.nf.sector": "Marketing",
    "testimonials.nf.quote":
      "L’automatisation de la génération de leads a boosté nos conversions. Le système envoie les bonnes infos au bon moment. Équipe pédagogue et sympa.",
    "testimonials.nf.result": "+45 % conversions",
    "testimonials.nf.date": "Il y a 3 semaines",

    // Karim B.
    "testimonials.kb.name": "Karim B.",
    "testimonials.kb.role": "Directeur Technique",
    "testimonials.kb.company": "—",
    "testimonials.kb.sector": "Industrie",
    "testimonials.kb.quote":
      "Ils ont automatisé notre maintenance prédictive. Moins de pannes et une meilleure anticipation. Équipe technique compétente et réactive.",
    "testimonials.kb.result": "-60 % pannes",
    "testimonials.kb.date": "Il y a 2 mois",

    // Amélie L.
    "testimonials.al.name": "Amélie L.",
    "testimonials.al.role": "Responsable RH",
    "testimonials.al.company": "—",
    "testimonials.al.sector": "Ressources humaines",
    "testimonials.al.quote":
      "Le tri des CV est automatisé. On a gagné un temps fou. L’équipe a bien pris le temps de nous former. L’interface pourrait être plus intuitive, mais le système est efficace.",
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
    "google.michal.quote":
      "Je recommande pour la mise en place d'automatisation IA. Gros gain de temps et d'efficacité sur nos processus suite à l'intervention d'Automatisons.fr merci encore",
    "google.michal.date": "2025-07-08",

    // lucas desprat
    "google.lucas.name": "lucas desprat",
    "google.lucas.quote":
      "L'agence Automatisons a littéralement révolutionné la gestion de mon auto entreprise. Ils ont automatisé tout le volet CRM et data, ce qui m’a fait gagner un temps fou au quotidien. Fini les tâches répétitives et la perte d’informations ! Aujourd’hui, tout est centralisé, fluide, et surtout, je peux enfin me concentrer sur ce qui compte vraiment : mon cœur de métier. Un accompagnement clair, humain et hyper efficace. Je recommande les yeux fermés.",
    "google.lucas.date": "2025-07-08",

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
    "about.description":
      "Nous sommes une agence spécialisée dans l'automatisation et l'intelligence artificielle, dédiée à transformer la façon dont les entreprises opèrent.",
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
    "about.feature.customSolutions":
      "Solutions personnalisées en moins de 24 h",
    "about.feature.support": "Support 24/7",

    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Prêt à transformer votre entreprise ? Parlons de votre projet.",
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

    "footer.description":
      "Automatisons Agency - Votre partenaire de confiance en automatisation et intelligence artificielle",

    "footer.navigationTitle": "Navigation",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",
    "footer.legal": "Mentions légales",
    "footer.terms": "Conditions Générales d’Utilisation",
    "footer.usage": "Termes d’utilisation",
    "footer.legalLink": "/mentions-legales",
    "footer.termsLink": "/conditions-generales",
    "footer.usageLink": "/termes-utilisation",
  },

  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "hero.title": "Automate Your Success with AI",
    "hero.subtitle":
      "Automatisons Agency transforms your business with smart, customized automation solutions.",
    "hero.cta": "Discover Our Solutions",
    "hero.cta.secondary": "Contact Us",
    "hero.cta.link": "/en/solutions",
    "hero.cta.secondary.link": "/en/contact",
    // Solutions
    "solutions.title": "Our Automation Solutions",
    "solutions.subtitle":
      "Comprehensive solutions to automate all your business processes",
    "solutions.email.title": "Email Management",
    "solutions.email.description":
      "Automate sorting, replies, and follow‑ups for your emails",
    "solutions.crm.title": "CRM & Customer Tracking",
    "solutions.crm.description":
      "Manage customer relationships with intelligent automation",
    "solutions.leads.title": "Lead Generation",
    "solutions.leads.description":
      "Automatically prospect and qualify your leads",
    "solutions.appointment.title": "Appointment Scheduling",
    "solutions.appointment.description":
      "Automate scheduling and management of your appointments",
    "solutions.accounting.title": "Accounting & Invoicing",
    "solutions.accounting.description":
      "Automate your accounting and invoicing workflows",
    "solutions.social.title": "Social Media",
    "solutions.social.description":
      "Manage and automate your social media presence",
    "solutions.analytics.title": "Analytics & Reporting",
    "solutions.analytics.description":
      "Generate automated reports and insights with AI",
    "solutions.project.title": "Project Management",
    "solutions.project.description":
      "Optimize planning and tracking of your projects",
    "solutions.recruitment.title": "Recruitment & Onboarding",
    "solutions.recruitment.description":
      "Automate your recruitment and onboarding processes",
    "solutions.chatbot.title": "AI Chatbots",
    "solutions.chatbot.description":
      "Intelligent conversational assistants for your support team",
    "solutions.learn_more": "Learn More",
    "solutions.cta.title": "Ready to Automate Your Business?",
    "solutions.cta.description":
      "See how our solutions can transform your workflows",
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
    "sectors.subtitle":
      "We help businesses across sectors in their digital transformation",
    "sectors.industry.title": "Manufacturing",
    "sectors.industry.description":
      "Production line optimization and predictive maintenance",
    "sectors.finance.title": "Finance",
    "sectors.finance.description":
      "Automate financial processes and regulatory compliance",
    "sectors.health.title": "Healthcare",
    "sectors.health.description":
      "Patient record management and care pathway optimization",
    "sectors.commerce.title": "Retail",
    "sectors.commerce.description":
      "E‑commerce, inventory management and automated customer relations",
    "sectors.education.title": "Education",
    "sectors.education.description":
      "Learning platforms and automated administrative management",
    "sectors.logistics.title": "Logistics",
    "sectors.logistics.description":
      "Supply chain optimization and automated tracking",
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
    "testimonials.jpl.quote":
      "We turned to Automatisons Agency to optimize our order management. I was skeptical at first but the team delivered. Fewer errors and a great ROI. Highly recommend!",
    "testimonials.jpl.result": "-30 % errors",
    "testimonials.jpl.date": "2 weeks ago",

    // Sarah M.
    "testimonials.sm.name": "Sarah M.",
    "testimonials.sm.role": "Administrative Director",
    "testimonials.sm.company": "—",
    "testimonials.sm.sector": "Services",
    "testimonials.sm.quote":
      "They automated our invoicing. Before, we spent hours doing it manually. Now it’s fast, automatic, and we have more time for other tasks.",
    "testimonials.sm.result": "Time saved ×2",
    "testimonials.sm.date": "1 month ago",

    // Mohamed K.
    "testimonials.mk.name": "Mohamed K.",
    "testimonials.mk.role": "E‑commerce Manager",
    "testimonials.mk.company": "—",
    "testimonials.mk.sector": "E‑commerce",
    "testimonials.mk.quote":
      "Great work on our online store. Orders and stock are managed automatically. Sales have increased and the package tracking is well‑designed.",
    "testimonials.mk.result": "+35 % sales",
    "testimonials.mk.date": "3 weeks ago",

    // Claire D.
    "testimonials.cd.name": "Claire D.",
    "testimonials.cd.role": "Accountant",
    "testimonials.cd.company": "—",
    "testimonials.cd.sector": "Accounting",
    "testimonials.cd.quote":
      "Automation drastically cut data‑entry errors. The team is attentive and responsive. Technical support is fast and effective.",
    "testimonials.cd.result": "-70 % data‑entry errors",
    "testimonials.cd.date": "2 months ago",

    // Thomas R.
    "testimonials.tr.name": "Thomas R.",
    "testimonials.tr.role": "Logistics Director",
    "testimonials.tr.company": "—",
    "testimonials.tr.sector": "Logistics",
    "testimonials.tr.quote":
      "We automated our supply chain. Fewer delays, better organization, and good value despite the initial investment.",
    "testimonials.tr.result": "-50 % delivery delays",
    "testimonials.tr.date": "1 month ago",

    // Nathalie F.
    "testimonials.nf.name": "Nathalie F.",
    "testimonials.nf.role": "Marketing Manager",
    "testimonials.nf.company": "—",
    "testimonials.nf.sector": "Marketing",
    "testimonials.nf.quote":
      "Lead‑gen automation boosted our conversions. The system sends the right info at the right time. The team is knowledgeable and friendly.",
    "testimonials.nf.result": "+45 % conversions",
    "testimonials.nf.date": "3 weeks ago",

    // Karim B.
    "testimonials.kb.name": "Karim B.",
    "testimonials.kb.role": "Technical Director",
    "testimonials.kb.company": "—",
    "testimonials.kb.sector": "Manufacturing",
    "testimonials.kb.quote":
      "They automated our predictive maintenance. Fewer breakdowns and better foresight. The technical team is skilled and responsive.",
    "testimonials.kb.result": "-60 % breakdowns",
    "testimonials.kb.date": "2 months ago",

    // Amélie L.
    "testimonials.al.name": "Amélie L.",
    "testimonials.al.role": "HR Manager",
    "testimonials.al.company": "—",
    "testimonials.al.sector": "Human Resources",
    "testimonials.al.quote":
      "CV screening is automated. We saved tons of time. The team trained us well. The interface could be more intuitive, but the system works great.",
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
    "google.michal.quote":
      "I recommend them for setting up AI automation. Huge time and efficiency gains on our processes following Automatisons.fr’s intervention. Thanks again!",
    "google.michal.date": "2025-07-08",

    "google.lucas.name": "lucas desprat",
    "google.lucas.quote":
      "Automatisons Agency literally revolutionized the management of my auto business. They automated the entire CRM and data side, saving me a ton of time daily. No more repetitive tasks or lost info! Everything’s now centralized and smooth, allowing me to focus on what truly matters: my core business. Clear, human, and highly efficient support—I recommend them wholeheartedly.",
    "google.lucas.date": "2025-07-08",

    // Methodology
    "methodology.title": "Our Methodology",
    "methodology.subtitle": "A proven 3‑step process to ensure your success",
    "methodology.analysis.title": "Free Audit",
    "methodology.analysis.description":
      "Comprehensive audit of your current processes and automation opportunities",
    "methodology.plan.title": "Tailored Plan",
    "methodology.plan.description":
      "A personalized strategy with detailed roadmap and gain estimates",
    "methodology.implementation.title": "Implementation",
    "methodology.implementation.description":
      "Development, deployment, and training for successful adoption",
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
    "about.description":
      "We are an agency specializing in automation and artificial intelligence, dedicated to transforming how businesses operate.",
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

    "footer.description":
      "Automatisons Agency – Your trusted partner in automation and AI",

    "footer.navigationTitle": "Navigation",
    "footer.followUs": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.legal": "Legal Notice",
    "footer.terms": "Terms and Conditions of Use",
    "footer.usage": "Terms of Service",
    "footer.legalLink": "/en/mentions-legales",
    "footer.termsLink": "/en/conditions-generales",
    "footer.usageLink": "/en/termes-utilisation",
  },
} as const;

export function getLangFromUrl(url: URL): keyof typeof ui {
  // if first pathname segment is "en", we're in English
  const segs = url.pathname.split("/").filter(Boolean);
  return segs[0] === "en" ? "en" : "fr";
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)["fr"]) {
    return ui[lang][key] ?? ui["fr"][key];
  };
}
