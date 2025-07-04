/* empty css                                                */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_D0YNkI8Y.mjs';
import 'kleur/colors';
import { u as useTranslations, $ as $$Layout, N as Navigation, F as Footer, C as Chatbot } from '../chunks/Chatbot_CJSXzon3.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Factory, Banknote, Heart, ShoppingCart, GraduationCap, Truck, Search, FileText, Rocket, Clock, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const Hero = ({ lang }) => {
  const t = useTranslations(lang);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex flex-col-reverse  items-center justify-center overflow-hidden h-svh",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/banner-reduite.png",
              alt: "Intelligence Artificielle - Interaction humain-robot avec interface technologique futuriste",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.5 },
            className: "md:absolute mr-auto ml-4 bottom-20 md:top-1/2 md:right-8 md:transform md:-translate-y-1/2 z-10",
            children: /* @__PURE__ */ jsx("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: "IA Active" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5 text-center", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center",
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: t("hero.title") }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto", children: t("hero.subtitle") }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    href: "/solutions",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2",
                    children: [
                      t("hero.cta"),
                      /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    href: "/contact",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm",
                    children: [
                      /* @__PURE__ */ jsx(Play, { size: 20 }),
                      t("hero.cta.secondary")
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  );
};

const Sectors = ({ lang }) => {
  const t = useTranslations(lang);
  const sectors = [
    {
      icon: Factory,
      title: "sectors.industry.title",
      description: "sectors.industry.description",
      color: "from-gray-600 to-gray-700",
      stats: "40% d'efficacité en plus"
    },
    {
      icon: Banknote,
      title: "sectors.finance.title",
      description: "sectors.finance.description",
      color: "from-green-600 to-green-700",
      stats: "60% de réduction des erreurs"
    },
    {
      icon: Heart,
      title: "sectors.health.title",
      description: "sectors.health.description",
      color: "from-red-500 to-red-600",
      stats: "30% de temps économisé"
    },
    {
      icon: ShoppingCart,
      title: "sectors.commerce.title",
      description: "sectors.commerce.description",
      color: "from-blue-500 to-blue-600",
      stats: "50% d'augmentation des ventes"
    },
    {
      icon: GraduationCap,
      title: "sectors.education.title",
      description: "sectors.education.description",
      color: "from-purple-500 to-purple-600",
      stats: "70% d'engagement en plus"
    },
    {
      icon: Truck,
      title: "sectors.logistics.title",
      description: "sectors.logistics.description",
      color: "from-orange-500 to-orange-600",
      stats: "35% de coûts réduits"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: t("sectors.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: t("sectors.subtitle") })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20", children: sectors.map((sector, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: index * 0.1 },
        viewport: { once: true },
        whileHover: { y: -5 },
        className: "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `w-16 h-16 rounded-2xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-4`,
              children: /* @__PURE__ */ jsx(sector.icon, { size: 32, className: "text-white" })
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: t(sector.title) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: t(sector.description) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${sector.color} text-white text-sm font-medium`,
              children: sector.stats
            }
          )
        ]
      },
      sector.title
    )) })
  ] }) });
};

const Methodology = ({ lang }) => {
  const t = useTranslations(lang);
  const steps = [
    {
      icon: Search,
      title: "methodology.analysis.title",
      description: "methodology.analysis.description",
      duration: "24h",
      color: "from-blue-500 to-blue-600",
      features: [
        "Audit complet de vos processus",
        "Identification des opportunités",
        "Analyse des données existantes",
        "Rapport détaillé gratuit"
      ]
    },
    {
      icon: FileText,
      title: "methodology.plan.title",
      description: "methodology.plan.description",
      duration: "48h",
      color: "from-purple-500 to-purple-600",
      features: [
        "Stratégie personnalisée",
        "Roadmap détaillée",
        "Estimation des gains",
        "Planning de déploiement"
      ]
    },
    {
      icon: Rocket,
      title: "methodology.implementation.title",
      description: "methodology.implementation.description",
      duration: "1 semaine",
      color: "from-green-500 to-green-600",
      features: [
        "Développement sur mesure",
        "Tests et validation",
        "Formation des équipes",
        "Support continu"
      ]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: t("methodology.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: t("methodology.subtitle") })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0" }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8 relative z-10", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: index * 0.2 },
          viewport: { once: true },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm z-20`,
                children: index + 1
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mt-4", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto`,
                  children: /* @__PURE__ */ jsx(step.icon, { size: 32, className: "text-white" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: t(step.title) }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium mb-3`,
                    children: [
                      /* @__PURE__ */ jsx(Clock, { size: 16 }),
                      step.duration
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: t(step.description) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2 + featureIndex * 0.1
                  },
                  viewport: { once: true },
                  className: "flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ jsx(
                      CheckCircle,
                      {
                        size: 16,
                        className: "text-green-500 flex-shrink-0"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: feature })
                  ]
                },
                featureIndex
              )) })
            ] })
          ]
        },
        step.title
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.5 },
        viewport: { once: true },
        className: "text-center mt-16",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6", children: t("methodology.cta.title") }),
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: "/contact",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              className: "inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200",
              children: [
                /* @__PURE__ */ jsx(Users, { size: 20 }),
                t("methodology.cta.consultation")
              ]
            }
          )
        ] })
      }
    )
  ] }) });
};

const About = ({ lang }) => {
  const t = useTranslations(lang);
  const stats = [
    { icon: Users, value: "100%", label: "Clients satisfaits" },
    { icon: Award, value: "3+", label: "Années d'expérience" },
    { icon: Zap, value: "100%", label: "Amélioration efficacité" },
    { icon: CheckCircle, value: "100+", label: "Projets réalisés" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "text-left",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: t("about.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: t("about.description") }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            "À la pointe de l’innovation",
            "Équipe d'experts certifiés",
            "Solutions personnalisées en moins de 24h",
            "Support 24/7"
          ].map((item, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              className: "flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsx(
                  CheckCircle,
                  {
                    size: 20,
                    className: "text-primary-600 flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
              ]
            },
            index
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true },
        className: "grid grid-cols-2 gap-6",
        children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            viewport: { once: true },
            className: "bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg text-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(stat.icon, { size: 24, className: "text-white" }) }),
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary-600 mb-2", children: stat.value }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: stat.label })
            ]
          },
          index
        ))
      }
    )
  ] }) }) });
};

const testimonials = [
  {
    name: "Jean-Pierre L.",
    role: "Gérant de magasin",
    company: "—",
    sector: "Commerce de détail",
    quote: "On a fait appel à Automatisons Agency pour optimiser notre gestion des commandes. J'étais sceptique au début mais l'équipe a assuré. Moins d’erreurs et un bon retour sur investissement. Je recommande !",
    result: "-30% erreurs",
    image: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 2 semaines"
  },
  {
    name: "Sarah M.",
    role: "Directrice Administrative",
    company: "—",
    sector: "Services",
    quote: "Ils ont automatisé la gestion des factures. Avant, on passait des heures à tout faire manuellement. Maintenant, c’est rapide, automatique, et on a plus de temps pour d'autres tâches.",
    result: "Gain de temps x2",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 1 mois"
  },
  {
    name: "Mohamed K.",
    role: "Gérant E-commerce",
    company: "—",
    sector: "E-commerce",
    quote: "Super travail sur notre boutique en ligne. Commandes et stocks sont gérés automatiquement. Les ventes ont augmenté et le suivi des colis est bien pensé.",
    result: "+35% ventes",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 3 semaines"
  },
  {
    name: "Claire D.",
    role: "Comptable",
    company: "—",
    sector: "Comptabilité",
    quote: "L'automatisation a réduit considérablement les erreurs de saisie. L’équipe est à l’écoute et réactive. Le support technique est rapide et efficace.",
    result: "-70% erreurs de saisie",
    image: "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 2 mois"
  },
  {
    name: "Thomas R.",
    role: "Directeur Logistique",
    company: "—",
    sector: "Logistique",
    quote: "On a automatisé notre chaîne d'approvisionnement. Moins de retards, meilleure organisation et bon rapport qualité-prix malgré l’investissement de départ.",
    result: "-50% retards livraison",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 1 mois"
  },
  {
    name: "Nathalie F.",
    role: "Responsable Marketing",
    company: "—",
    sector: "Marketing",
    quote: "L’automatisation de la génération de leads a boosté nos conversions. Le système envoie les bonnes infos au bon moment. Équipe pédagogue et sympa.",
    result: "+45% conversions",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 3 semaines"
  },
  {
    name: "Karim B.",
    role: "Directeur Technique",
    company: "—",
    sector: "Industrie",
    quote: "Ils ont automatisé notre maintenance prédictive. Moins de pannes et une meilleure anticipation. Équipe technique compétente et réactive.",
    result: "-60% pannes",
    image: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 2 mois"
  },
  {
    name: "Amélie L.",
    role: "Responsable RH",
    company: "—",
    sector: "Ressources humaines",
    quote: "Le tri des CV est automatisé. On a gagné un temps fou. L’équipe a bien pris le temps de nous former. L’interface pourrait être plus intuitive, mais le système est efficace.",
    result: "-50% temps de recrutement",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    date: "Il y a 1 mois"
  }
];
const renderStars = (rating) => /* @__PURE__ */ jsx("div", { className: "flex mb-2", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
  "span",
  {
    className: `text-[20px] ${i < rating ? "text-yellow-400" : "text-gray-300"}`,
    children: "★"
  },
  i
)) });
const TestimonialsCarousel = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Témoignages clients" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Ils nous font confiance." })
    ] }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Autoplay],
        autoplay: { delay: 4e3, disableOnInteraction: false },
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        },
        children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "mb-5", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6  shadow-lg border border-gray-100 h-[400px]  flex flex-col justify-center gap-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: testimonial.image,
                alt: testimonial.name,
                className: "w-12 h-12 rounded-full object-cover mr-4"
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900", children: testimonial.name }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: testimonial.date }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: testimonial.role }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-600", children: testimonial.company })
            ] })
          ] }),
          renderStars(testimonial.rating),
          /* @__PURE__ */ jsxs("blockquote", { className: "text-gray-700 mb-4 italic", children: [
            '"',
            testimonial.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: testimonial.sector }),
            /* @__PURE__ */ jsx("span", { className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium", children: testimonial.result })
          ] })
        ] }) }, index))
      }
    )
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "fr";
  const title = "Automatisons - Accueil";
  const description = "Automatisons - Votre partenaire pour l'automatisation et l'intelligence artificielle. Transformez votre entreprise gr\xE2ce \xE0 des solutions d'automatisation intelligentes.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", Navigation, { "lang": lang, "isHomePage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Navigation", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", Hero, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Sectors", Sectors, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Sectors", "client:component-export": "default" })} ${renderComponent($$result2, "Methodology", Methodology, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Methodology", "client:component-export": "default" })} ${renderComponent($$result2, "About", About, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/About", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", TestimonialsCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Footer", "client:component-export": "default" })} ${renderComponent($$result2, "Chatbot", Chatbot, { "lang": lang, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/MohMost/Downloads/Sandbox/Projects/automatisations/src/components/Chatbot", "client:component-export": "default" })} ` })}`;
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
