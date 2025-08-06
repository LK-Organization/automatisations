// src/i18n.ts
export const languages = {
  fr: "/fr-flag.svg",
  en: "/gb-flag.svg",
};

export const defaultLang = "fr";

export const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "hero.title": "Dites adieux à vos tâches répétitives.\n ",
    "hero.ai": "IA Active",
    "hero.subtitle":
      "Nos automatisations IA personnalisées pour vos tâches et vos workflows informatiques.",

    "hero.cta": "Comment ça fonctionne",
    "hero.cta.secondary": "Nous contacter",
    "hero.cta.link": "#exemples",
    "hero.cta.secondary.link": "/contact",

    // exemples
    "exemples.title": "Exemples concrets d’automatisation",

    "exemples.factures.title": "Saisie automatique de factures fournisseurs",
    "exemples.factures.subtitle":
      "Je ne perds plus mes soirées à trier des factures.",
    "exemples.factures.image": "/inassistant.png",
    "exemples.factures.details":
      "En tant que gérant d’un e-commerce dans le domaine de la mode, je collabore avec plus de 20 fournisseurs basés en Europe.\n\nLa gestion manuelle des factures, avec des formats variés, des taux de TVA différents, et parfois des conversions de devises, etc. me prenait en moyenne 4 heures par semaine. Sans compter les erreurs de saisie qui pouvaient entraîner des oublis ou des retards de paiement.\n\nDepuis que j’ai un traitement automatisé des factures, la comptabilité de mes achats est largement simplifiée.\n\nLes factures reçues par e-mail ou transférées dans un dossier sont lues automatiquement.\n\nToutes les informations utiles (fournisseur, montant HT/TTC, TVA, devise, date, n° de facture) sont extraites et triées dans un fichier Excel.\n\nIl ne me reste plus qu’à vérifier rapidement les lignes, puis à transmettre à ma comptable. Résultat : je gagne facilement 3 heures par semaine.",

    "exemples.emails.title": "Automatisation de la gestion des e-mails reçus",
    "exemples.emails.subtitle":
      "Des centaines de mails quotidiens qui se trient tout seuls.",
    "exemples.emails.image": "/emails.png",
    "exemples.emails.details":
      "Je suis responsable d’exploitation dans une PME logistique. Entre les bons de commande, les notifications de transport, les relances et les documents douaniers, je reçois plus de 150 e-mails par jour.\n\nAvant, je passais mes matinées à trier, transférer et classer les messages. Certaines demandes urgentes se perdaient, et des retards d’expédition pouvaient arriver à cause d’un simple oubli de lecture.\n\nDepuis que j’ai fait automatiser la gestion de notre boîte mail, les e-mails sont lus, catégorisés et transférés automatiquement à la bonne personne ou dans le bon dossier.\n\nLes pièces jointes sont enregistrées dans notre Drive, et les urgences sont signalées par un code couleur.\n\nEn tout, je gagne près de 2 heures par jour, et surtout, nous avons réduit les erreurs de traitement de 80 %.",

    "exemples.reports.title": "Envoi automatisé de comptes-rendus après visite",
    "exemples.reports.subtitle":
      "Fini la perte de temps sur les compte-rendus.",
    "exemples.reports.image": "/reports.png",
    "exemples.reports.details":
      "À chaque visite client je dois rédiger un compte-rendu manuel. Entre la rédaction, le copier-coller d’infos, l’envoi par mail, cela me prenait 10 à 15 minutes par bien à la fin de la journée… parfois jusqu’à 22h.\n\nAujourd’hui, dès qu’une visite est terminée, je remplis simplement un formulaire. Le compte-rendu personnalisé est généré automatiquement et envoyé au client en quelques minutes, avec les infos du bien, les points clés, et même des suggestions de visites similaires.\n\nCela me fait gagner un nombre d’heures incalculable chaque semaine, et mes clients sont bluffés de recevoir un suivi aussi rapide et soigné.",

    "exemples.crm.title":
      "Synchronisation entre CRM, calendrier, et boîte mail",
    "exemples.crm.subtitle":
      "Toutes les infos au même endroit : plus aucune erreur.",
    "exemples.crm.image": "/crm.png",
    "exemples.crm.details":
      "Notre équipe commerciale travaille sur le terrain, avec un CRM, un calendrier Google, et des échanges mails très fréquents avec les clients pros (artisans, grossistes…).\n\nAvant, on perdait un temps fou à mettre à jour les rendez-vous manuellement, reporter les infos dans le CRM, et reclasser les e-mails dans les bons dossiers.\nRésultat : doublons, oublis, et un CRM jamais à jour.\n\nDepuis la mise en place d’une synchronisation intelligente, tout est fluide :\n\n- Un rendez-vous fixé dans un mail s’ajoute au calendrier et au CRM.\n- Les infos client sont extraites du mail pour enrichir les fiches automatiquement.\n- Les comptes-rendus d’appels sont centralisés.\n\n Aujourd’hui, nos commerciaux passent moins de temps sur l’administratif, et plus de temps à vendre. Le CRM est enfin à jour sans effort, et le suivi client est beaucoup plus réactif.",

    "exemples.chatbot.title": "Chatbot de réponses automatiques",
    "exemples.chatbot.subtitle":
      "Des équipes réduites, un meilleur fonctionnement et une meilleure satisfaction client.",
    "exemples.chatbot.image": "/chatbot.png",
    "exemples.chatbot.details":
      "Je suis responsable du service client pour une assurance en ligne. Chaque jour, notre équipe reçoit des dizaines de questions identiques sur les remboursements, les délais de traitement ou les pièces justificatives à fournir. On perdait un temps fou à répondre à des demandes basiques, et nous étions toujours en retard.\n\nDepuis que nous avons mis en place un chatbot intelligent sur notre site, c’est terminé. Il répond instantanément aux demandes les plus fréquentes, guide les utilisateurs vers les bons formulaires et leur indique le suivi de leur dossier. En cas de besoin, il redirige vers un conseiller humain.\n\nAujourd’hui, nous fonctionnons mieux, avec moins de personnel, et nos clients sont bien plus satisfaits.",

    "exemples.assistant.title": "Assistant vocal intelligent",
    "exemples.assistant.subtitle":
      "Je demande simplement les infos client à mon assistant vocal.",
    "exemples.assistant.image": "/assistant.png",
    "exemples.assistant.details":
      "Quand on est commercial de terrain, on doit jongler entre les clients et retrouver les infos dans le CRM, les mails, les notes et les autres outils. Avant chaque rendez-vous, je passais 15 ou 20 minutes à fouiller partout pour retrouver les infos du client : dernières interactions, contrats en cours, échéances, historique…\n\nDepuis qu’on a intégré un assistant vocal connecté à toutes les bases de données, je n’ai plus besoin de chercher. Je demande simplement à voix haute : « Où en est le dossier Dupont ? » ou « Quel est le chiffre d’affaires de ce client sur les six derniers mois ? », et l’IA me répond en quelques secondes, avec des données à jour extraites de nos différents outils.\n\nL’assistant vocal me fournit instantanément les informations dont j’ai besoin, pour n’importe quel client.",
    // multistep form
    "form.title": "Formulaire interactif",
    "form.labels.next": "Suivant",
    "form.labels.back": "Retour",
    "form.labels.send": "Envoyer",
    "form.labels.contact": "Contactez-nous",
    "form.labels.meeting": "Prendre un Rendez-vous",
    "form.labels.optional": "optionnel",

    "multistep.step1.question": "Savez-vous ce qu’est l’automatisation ?",
    "multistep.step1.option.known": "Oui, je connais",
    "multistep.step1.option.learn": "Pas vraiment, j’aimerais en savoir plus",
    "multistep.step1.info":
      "L’automatisation, c’est déléguer vos tâches répétitives à un système intelligent (ou à un robot) pour gagner du temps et de l’efficacité.",

    "multistep.step2.question":
      "Quand vous travaillez sur ordinateur ou portable, combien de temps perdez-vous chaque jour sur des tâches répétitives ?",
    "multistep.step2.option.zero": "Zéro",
    "multistep.step2.option.few": "Jusqu’à 8h !",
    "multistep.step2.option.team":
      "J’ai une équipe avec plusieurs collaborateurs, beaucoup plus !",
    "multistep.step2.option.notsure": "Aucune idée, mais sûrement trop",
    "multistep.step2.info":
      "Votre temps a de la valeur pour vous, félicitations !",

    "multistep.step3.question":
      "Vous est-il déjà arrivé de vous dire : “Un robot pourrait faire ça à ma place” ?",
    "multistep.step3.option.often": "Oui, souvent",
    "multistep.step3.option.never": "Non, jamais",
    "multistep.step3.option.now": "Maintenant que vous le dites… oui !",

    "multistep.step4.question": "Quel est votre rôle ?",
    "multistep.step4.option.owner": "Gérant / Entrepreneur",
    "multistep.step4.option.employee": "Salarié",
    "multistep.step4.option.freelance": "Freelance",
    "multistep.step4.option.student": "Étudiant",
    "multistep.step4.option.other": "Autre",

    "multistep.step5.question":
      "Avez-vous une idée précise de ce que vous aimeriez automatiser ?",
    "multistep.step5.option.yes": "Oui",
    "multistep.step5.option.no": "Non, j’aimerais des exemples",

    "multistep.step6.question": "Qu’est-ce qui vous intéresse ?",
    "multistep.step6.option.sync":
      "Synchroniser mes outils (ex : Google Sheets + Gmail + WhatsApp)",
    "multistep.step6.option.appointments":
      "Automatiser la prise de rendez-vous",
    "multistep.step6.option.crm":
      "Gagner du temps sur la gestion client (CRM, factures, réponses auto...)",
    "multistep.step6.option.repetitive":
      "Ne pas m’occuper des tâches répétitives (copier-coller, tri, suivi...)",
    "multistep.step6.option.guide": "Je veux qu’on me guide",

    "multistep.final.question": "Quand souhaitez-vous qu’on vous contacte ?",
    "multistep.final.option.now": "Dès maintenant",
    "multistep.final.option.today": "Dans la journée",
    "multistep.final.option.schedule": "Je préfère prendre rendez-vous",
    "multistep.final.channel.whatsapp": "WhatsApp",
    "multistep.final.channel.email": "Votre Mail",
    "multistep.final.channel.calendar": "Prise de rendez-vous via calendrier",
    "multistep.success.title": "Merci !",
    "multistep.success.message": "Votre formulaire a bien été envoyé.",
    "multistep.error.title": "Oups…",
    "multistep.error.message": "Erreur d’envoi. Réessayez.",
    "form.labels.retry": "Réessayer",

    // Solutions
    "solutions.title": "Nos Solutions d'Automatisation Intelligentes",
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
      "On a fait appel à Automatisons Agence IA pour optimiser notre gestion des commandes. J'étais sceptique au début mais l'équipe a assuré. Moins d’erreurs et un bon retour sur investissement. Je recommande !",
    "testimonials.jpl.result": "-30 % erreurs",
    "testimonials.jpl.date": "Il y a 2 semaines",
    // Lucie B.
    "testimonials.lb.name": "Lucie B.",
    "testimonials.lb.role": "Responsable formation digitale",
    "testimonials.lb.company": "—",
    "testimonials.lb.sector": "Éducation / EdTech",
    "testimonials.lb.quote":
      "On a automatisé l’envoi des certificats et les relances de modules. Avant, tout était manuel et chronophage. Aujourd’hui, nos apprenants reçoivent tout en temps voulu, et notre équipe peut se concentrer sur l’essentiel.",
    "testimonials.lb.result": "-60 % de tâches manuelles",
    "testimonials.lb.date": "il y a 2 semaines",

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
    // Robert Stepa
    "google.robert.name": "Robert Stepa",
    "google.robert.quote": "Je recommande 10/10",
    "google.robert.date": "2025-07-10",
    // Gauthier
    "google.gauthier.name": "Gauthier Milla",
    "google.gauthier.quote":
      "Super pro et rapide, Lukas m’a beaucoup aidé à simplifier mes tâches. Il a créé un Chatbot qui répond aux messages de toutes mes boites mail et de toutes mes conversations WhatsApp. Tout est réuni sur une interface dédiée simple et fonctionnelle qui me permet de suivre toutes les conversations, les demandes et les réponses.\nUn gain de temps énorme et un travail vraiment qualitatif, vous pouvez y aller les yeux fermés !",
    "google.gauthier.date": "2025-07-10",
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

    "about.title": "À propos d'Automatisons Agence IA",
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
    "contact.meetingFormSubtitle":
      "Discutons de votre projet d’automatisation IA ",
    "contact.meetingFormDescription":
      "Grâce à l’automatisation intelligente vous libérez votre équipe des tâches répétitives. Nous simplifions vos processus (marketing, service client, emailing…) pour que vous puissiez vous concentrer sur ce qui compte vraiment : la croissance de votre entreprise.",
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
    "faq.title": "FAQ",
    "faq.subtitle":
      "Les questions les plus fréquentes sur l'automatisation intelligente",

    "faq.q1.question":
      "Quels types de tâches peut-on automatiser dans une entreprise ?",
    "faq.q1.answer": `Toutes les tâches répétitives et chronophages, même complexes, peuvent être automatisées grâce à l’intelligence artificielle.\nLes tâches le plus fréquemment automatisées pour les PME sont :\n
- Gestion des stocks : mise à jour automatique des niveaux de stock, réapprovisionnement intelligent basé sur les ventes et la saisonnalité.\n- Marketing : envoi automatisé de newsletters, relance personnalisée des paniers abandonnés, détection des points de friction dans le tunnel de vente.\n- Service client (SAV) : traitement et réponse automatique aux e-mails, réponses instantanées aux questions fréquentes, tri et priorisation des tickets selon leur nature ou leur niveau d'urgence.\nVous avez une tâche spécifique en tête ? Contactez-nous pour une analyse gratuite sous 24h.`,

    "faq.q2.question":
      "L’automatisation IA est-elle compatible avec les logiciels que nous utilisons ?",
    "faq.q2.answer": `Oui. Nous concevons des solutions qui s’intègrent à vos outils existants (CRM, ERP, CMS, etc.) grâce à des interfaces sur mesure. Nos systèmes d’automatisation intelligents connectent vos logiciels, vos données et les processus automatisés sans perturber votre organisation.`,

    "faq.q3.question": "Est-ce que l’automatisation est réversible ?",
    "faq.q3.answer": `Oui. Chaque système d’automatisation intelligent fonctionne comme un programme indépendant : il peut être modifié, désactivé ou supprimé à tout moment, sans impacter vos données ni désorganiser vos processus internes.`,

    "faq.q4.question": "Mes données sont-elles sécurisées ?",
    "faq.q4.answer": `Absolument. Toutes les données sont chiffrées et traitées dans des environnements conformes aux normes RGPD.

Deux options sont possibles :
- Cloud sécurisé privé respectant les normes européennes
- Hébergement local sur vos propres serveurs, pour une totale maîtrise des données.`,

    "faq.q5.question": "Combien coûte une automatisation intelligente IA ?",
    "faq.q5.answer": `Nous ne proposons pas de tarifs fixes, car chaque projet est unique. Le coût dépend de plusieurs facteurs : complexité des tâches, volumes de données, fréquence d’utilisation, etc.

L’analyse de vos besoins et le devis sont gratuits, livrés en moins de 24h.`,

    // Chatbot
    "chatbot.title": "Assistant IA",
    "chatbot.subtitle": "Automatisons Agence IA",
    "chatbot.input": "Tapez votre message...",
    "chatbot.welcome":
      "👋 Bonjour et bienvenue !\n Si vous cherchez à gagner du temps, à simplifier vos tâches quotidiennes et à automatiser ce qui peut l’être, vous êtes au bon endroit.\n Cet assistant est là pour vous aider à découvrir nos solutions ou pour vous mettre en contact avec un expert.",

    "chatbot.default":
      "Je comprends votre question, mais j'aimerais vous donner une réponse plus précise. Pouvez-vous me dire si vous vous intéressez plutôt à :\n\n• L'automatisation de processus métier\n• L'implémentation d'agents IA\n• Nos services et tarifs\n• Un secteur d'activité spécifique\n\nOu contactez directement notre équipe au +33 6 48 09 15 11 pour un conseil personnalisé !",

    "chatbot.greeting":
      "Bonjour ! Ravi de vous rencontrer. Je suis là pour répondre à toutes vos questions sur l'automatisation et l'intelligence artificielle. Que souhaitez-vous savoir ?",

    "chatbot.thank_you":
      "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider à comprendre comment l'automatisation peut transformer votre entreprise.",

    "chatbot.contact":
      "Pour nous contacter :\n\n📧 **Email** : contact@automatisons.com\n📞 **Téléphone** : +33 6 48 09 15 11\n📍 **Adresse** : Paris, France\n\nVous pouvez aussi remplir notre formulaire de contact sur le site pour une réponse rapide. Souhaitez-vous que je vous redirige vers la page contact ?",

    "chatbot.input.placeholder": "Tapez votre message...",

    "footer.description":
      "Automatisons Agence IA - Votre partenaire de confiance en automatisation et intelligence artificielle",

    "footer.navigationTitle": "Navigation",
    "footer.followUs": "Suivez-nous",
    "footer.rights": "Tous droits réservés.",
    "footer.legal": "Mentions légales",
    "footer.terms": "Conditions Générales d’Utilisation",
    "footer.usage": "Termes d’utilisation",
    "footer.legalLink": "/mentions-legales/",
    "footer.termsLink": "/conditions-generales/",
    "footer.usageLink": "/termes-utilisation/",
    "footer.addressTitle": "Adresse",
  },

  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",
    "hero.title": "Say goodbye to your repetitive tasks.",
    "hero.ai": "Active AI",
    "hero.subtitle":
      "Our custom AI automations for your IT tasks and workflows.",
    "hero.cta": "How does it work",
    "hero.cta.secondary": "Contact Us",
    "hero.cta.link": "#exemples",
    "hero.cta.secondary.link": "/en/contact",
    // exemples
    "exemples.title": "Concrete Examples of Automation",

    "exemples.factures.title": "Automatic Entry of Supplier Invoices",
    "exemples.factures.subtitle": "No more wasting evenings sorting invoices.",
    "exemples.factures.image": "/inassistant.png",
    "exemples.factures.details":
      "As the manager of a fashion e-commerce business, I work with over 20 suppliers based in Europe.\n\nManually handling invoices—with varying formats, different VAT rates, and sometimes currency conversions—used to take me an average of 4 hours per week. Not to mention data entry errors that could lead to missed or late payments.\n\nSince implementing automated invoice processing, managing my purchase accounting has become much simpler.\n\nInvoices received via email or saved in a folder are automatically read.\n\nAll relevant information (supplier, amount excl./incl. tax, VAT, currency, date, invoice number) is extracted and sorted into an Excel file.\n\nAll I have to do is quickly check the lines and send them to my accountant.\n\nResult: I easily save 3 hours per week.",

    "exemples.emails.title": "Automation of Incoming Email Management",
    "exemples.emails.subtitle": "Hundreds of daily emails now sort themselves.",
    "exemples.emails.image": "/emails.png",
    "exemples.emails.details":
      "I'm an operations manager at a logistics SME. Between purchase orders, shipping notifications, follow-ups, and customs documents, I receive over 150 emails a day.\n\nPreviously, I spent my mornings sorting, forwarding, and filing messages. Urgent requests were sometimes missed, leading to shipment delays due to simple oversight.\n\nSince automating our mailbox management, emails are automatically read, categorized, and forwarded to the right person or folder.\n\nAttachments are saved to our Drive, and urgent messages are flagged with a color code.\n\nIn total, I save nearly 2 hours a day, and we've reduced processing errors by 80%.",

    "exemples.reports.title": "Automated Sending of Visit Reports",
    "exemples.reports.subtitle": "No more wasting time on reports.",
    "exemples.reports.image": "/reports.png",
    "exemples.reports.details":
      "After every client visit, I used to write a manual report. Between writing, copy-pasting info, and emailing, it took me 10 to 15 minutes per property at the end of the day—sometimes until 10 p.m.\n\nNow, as soon as a visit is over, I just fill out a form. A personalized report is automatically generated and sent to the client within minutes, including property details, key points, and even suggestions for similar listings.\n\nThis saves me countless hours every week, and my clients are amazed by the fast and polished follow-up.",

    "exemples.crm.title": "Synchronization Between CRM, Calendar, and Email",
    "exemples.crm.subtitle": "All info in one place—no more errors.",
    "exemples.crm.image": "/crm.png",
    "exemples.crm.details":
      "Our sales team works in the field using a CRM, Google Calendar, and frequent email exchanges with professional clients (craftsmen, wholesalers, etc.).\n\nBefore, we wasted a lot of time manually updating meetings, transferring info into the CRM, and organizing emails into the right folders.\n\nResult: duplicates, oversights, and an outdated CRM.\n\nSince setting up smart synchronization, everything runs smoothly:\n\n- A meeting scheduled in an email is added to the calendar and CRM.\n- Client information is extracted from emails and automatically enriches their profile.\n -Call reports are centralized.\n\nNow, our salespeople spend less time on admin and more time selling. The CRM is finally up-to-date effortlessly, and client follow-up is much more responsive.",

    "exemples.chatbot.title": "Automatic Response Chatbot",
    "exemples.chatbot.subtitle":
      "Smaller teams, better efficiency, and higher customer satisfaction.",
    "exemples.chatbot.image": "/chatbot.png",
    "exemples.chatbot.details":
      "I'm the customer service manager for an online insurance company. Every day, our team receives dozens of repetitive questions about reimbursements, processing times, or required documents. We wasted a lot of time answering basic inquiries and were constantly behind.\n\nSince deploying an intelligent chatbot on our site, that’s over. It instantly answers common questions, guides users to the right forms, and shows them how to track their files. When needed, it redirects them to a human agent.\n\nToday, we operate more efficiently with fewer staff, and our clients are far more satisfied.",

    "exemples.assistant.title": "Smart Voice Assistant",
    "exemples.assistant.subtitle":
      "I simply ask my voice assistant for client info.",
    "exemples.assistant.image": "/assistant.png",
    "exemples.assistant.details":
      "As a field salesperson, I have to juggle between clients and search through the CRM, emails, notes, and other tools. Before each meeting, I’d spend 15–20 minutes digging for client info: recent interactions, current contracts, deadlines, history…\n\nSince integrating a voice assistant connected to all our databases, I no longer need to search. I just ask aloud, “What’s the status of the Dupont file?” or “What’s this client’s turnover over the last six months?”—and the AI replies in seconds with up-to-date data pulled from our tools.\n\nThe voice assistant instantly gives me the info I need, for any client.",
    // multi-step form
    "form.title": "Interactive Form",
    "form.labels.next": "Next",
    "form.labels.back": "Back",
    "form.labels.send": "Send",
    "form.labels.contact": "Contact us",
    "form.labels.meeting": "Schedule a meeting",
    "form.labels.optional": "optional",
    "form.labels.retry": "Retry",

    "multistep.step1.question": "Do you know what automation is?",
    "multistep.step1.option.known": "Yes, I know",
    "multistep.step1.option.learn": "Not really, I’d like to learn more",
    "multistep.step1.info":
      "Automation means delegating your repetitive tasks to an intelligent system (or a robot) to save time and work more efficiently.",

    "multistep.step2.question":
      "When you work on a computer or laptop, how much time do you lose each day on repetitive tasks?",
    "multistep.step2.option.zero": "Zero",
    "multistep.step2.option.few": "Up to 8 hours!",
    "multistep.step2.option.team":
      "I have a team with multiple people, much more!",
    "multistep.step2.option.notsure": "No idea, but probably too much",
    "multistep.step2.info": "Your time is valuable—congratulations!",

    "multistep.step3.question":
      "Have you ever thought: “A robot could do this for me”?",
    "multistep.step3.option.often": "Yes, often",
    "multistep.step3.option.never": "No, never",
    "multistep.step3.option.now": "Now that you mention it… yes!",

    "multistep.step4.question": "What is your role?",
    "multistep.step4.option.owner": "Owner / Entrepreneur",
    "multistep.step4.option.employee": "Employee",
    "multistep.step4.option.freelance": "Freelancer",
    "multistep.step4.option.student": "Student",
    "multistep.step4.option.other": "Other",

    "multistep.step5.question":
      "Do you have a specific idea of what you’d like to automate?",
    "multistep.step5.option.yes": "Yes",
    "multistep.step5.option.no": "No, I’d like some examples",

    "multistep.step6.question": "What interests you?",
    "multistep.step6.option.sync":
      "Sync my tools (e.g. Google Sheets + Gmail + WhatsApp)",
    "multistep.step6.option.appointments": "Automate appointment scheduling",
    "multistep.step6.option.crm":
      "Save time on client management (CRM, invoicing, auto‑responses...)",
    "multistep.step6.option.repetitive":
      "Avoid repetitive tasks (copy/paste, sorting, follow‑up...)",
    "multistep.step6.option.guide": "I want guidance",

    "multistep.final.question": "When would you like us to contact you?",
    "multistep.final.option.now": "Right away",
    "multistep.final.option.today": "Later today",
    "multistep.final.option.schedule": "I prefer to schedule a meeting",
    "multistep.final.channel.whatsapp": "WhatsApp",
    "multistep.final.channel.email": "Email",
    "multistep.final.channel.calendar": "Calendar scheduling",

    "multistep.success.title": "Thank you!",
    "multistep.success.message": "Your form has been submitted successfully.",
    "multistep.error.title": "Oops…",
    "multistep.error.message": "Submission failed. Please try again.",
    // Solutions
    "solutions.title": "Our Smart Automation Solutions",
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
      "We turned to Automatisons Agence IA to optimize our order management. I was skeptical at first but the team delivered. Fewer errors and a great ROI. Highly recommend!",
    "testimonials.jpl.result": "-30 % errors",
    "testimonials.jpl.date": "2 weeks ago",
    // Lucie B.
    "testimonials.lb.name": "Lucie B.",
    "testimonials.lb.role": "Responsable formation digitale",
    "testimonials.lb.company": "—",
    "testimonials.lb.sector": "Éducation / EdTech",
    "testimonials.lb.quote":
      "On a automatisé l’envoi des certificats et les relances de modules. Avant, tout était manuel et chronophage. Aujourd’hui, nos apprenants reçoivent tout en temps voulu, et notre équipe peut se concentrer sur l’essentiel.",
    "testimonials.lb.result": "-60 % de tâches manuelles",
    "testimonials.lb.date": "il y a 2 semaines",

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
      "Automatisons Agence IA literally revolutionized the management of my auto business. They automated the entire CRM and data side, saving me a ton of time daily. No more repetitive tasks or lost info! Everything’s now centralized and smooth, allowing me to focus on what truly matters: my core business. Clear, human, and highly efficient support—I recommend them wholeheartedly.",
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

    "about.title": "About Automatisons Agence IA",
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
    "contact.meetingFormSubtitle":
      "Let’s Talk About Your AI Automation Project",
    "contact.meetingFormDescription":
      "With smart automation, you free your team from repetitive tasks. We simplify your processes (marketing, customer service, emailing…) so you can focus on what really matters: growing your business.",
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
    "faq.title": "FAQ",
    "faq.subtitle": "The most common questions about intelligent automation",
    "faq.q1.question": "What kind of tasks can be automated in a business?",
    "faq.q1.answer": `All repetitive and time-consuming tasks, even complex ones, can be automated thanks to artificial intelligence.

The most commonly automated tasks for SMEs include:
- Inventory management: automatic stock level updates, smart restocking based on sales and seasonality.
- Marketing: automated newsletter sending, personalized cart abandonment follow-ups, detection of friction points in the sales funnel.
- Customer Service (After-Sales Support): automatic processing and responses to emails, instant replies to frequently asked questions, sorting and prioritizing tickets based on their nature or level of urgency.

Have a specific task in mind? Contact us for a free analysis within 24 hours.`,

    "faq.q2.question": "Is AI automation compatible with the software we use?",
    "faq.q2.answer": `Yes. We design solutions that integrate with your existing tools (CRM, ERP, CMS, etc.) using custom interfaces. Our intelligent automation systems connect your software, data, and automated processes without disrupting your organization.`,

    "faq.q3.question": "Is automation reversible?",
    "faq.q3.answer": `Yes. Each intelligent automation system works as an independent program: it can be modified, disabled, or removed at any time without affecting your data or disrupting your internal processes.`,

    "faq.q4.question": "Is my data secure?",
    "faq.q4.answer": `Absolutely. All data is encrypted and processed in environments compliant with GDPR standards.

Two options are available:
- Private secure cloud respecting European standards
- Local hosting on your own servers for full control over your data.`,

    "faq.q5.question": "How much does intelligent AI automation cost?",
    "faq.q5.answer": `We don’t offer fixed prices because every project is unique. The cost depends on several factors: task complexity, data volume, usage frequency, etc.

The analysis of your needs and the quote are free and delivered within 24 hours.`,

    // Chatbot
    "chatbot.title": "AI Assistant",
    "chatbot.subtitle": "Automatisons Agence IA",
    "chatbot.input": "Type your message...",
    "chatbot.welcome":
      "👋 Hello and welcome!\n If you're looking to save time, simplify your daily tasks, and automate what can be automated, you're in the right place.\n This assistant is here to help you discover our solutions or connect you with an expert.",

    "chatbot.default":
      "I understand your question, but I’d like to give you a more precise answer. Could you let me know if you're interested in:\n\n• Business process automation\n• Implementing AI agents\n• Our services and pricing\n• A specific industry\n\nOr contact our team directly at +33 6 48 09 15 11 for personalized advice!",

    "chatbot.greeting":
      "Hello! Nice to meet you. I'm here to answer all your questions about automation and artificial intelligence. What would you like to know?",

    "chatbot.thank_you":
      "You're welcome! Feel free to ask if you have more questions. I'm here to help you understand how automation can transform your business.",

    "chatbot.contact":
      "To contact us:\n\n📧 **Email**: contact@automatisons.com\n📞 **Phone**: +33 6 48 09 15 11\n📍 **Address**: Paris, France\n\nYou can also fill out our contact form on the website for a quick response. Would you like me to redirect you to the contact page?",

    "chatbot.input.placeholder": "Type your message...",

    "footer.description":
      "Automatisons Agence IA – Your trusted partner in automation and AI",

    "footer.navigationTitle": "Navigation",
    "footer.followUs": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.legal": "Legal Notice",
    "footer.terms": "Terms and Conditions of Use",
    "footer.usage": "Terms of Service",
    "footer.legalLink": "/en/mentions-legales/",
    "footer.termsLink": "/en/conditions-generales/",
    "footer.usageLink": "/en/termes-utilisation/",
    "footer.addressTitle": "Address",
  },
} as const;

export function getLangFromUrl(url: URL): keyof typeof ui {
  // if first pathname segment is "en", we're in English
  const segs = url.pathname.split("/").filter(Boolean);
  return segs[0] === "en" ? "en" : "fr";
}

export function useTranslations(lang: keyof typeof ui) {
  return function t<K extends keyof (typeof ui)[keyof typeof ui]>(key: K) {
    return ui[lang][key] ?? ui["fr"][key];
  };
}
