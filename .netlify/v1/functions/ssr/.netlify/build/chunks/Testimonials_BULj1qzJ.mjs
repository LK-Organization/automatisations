import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Factory, Banknote, Heart, ShoppingCart, GraduationCap, Truck, Search, FileText, Rocket, Clock, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { u as useTranslations } from './Chatbot_DmgyXsBK.mjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
/* empty css                         */

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
                    href: t("hero.cta.link"),
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
                    href: t("hero.cta.secondary.link"),
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
      titleKey: "sectors.industry.title",
      descriptionKey: "sectors.industry.description",
      statsKey: "sectors.industry.stats",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Banknote,
      titleKey: "sectors.finance.title",
      descriptionKey: "sectors.finance.description",
      statsKey: "sectors.finance.stats",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Heart,
      titleKey: "sectors.health.title",
      descriptionKey: "sectors.health.description",
      statsKey: "sectors.health.stats",
      color: "from-red-500 to-red-600"
    },
    {
      icon: ShoppingCart,
      titleKey: "sectors.commerce.title",
      descriptionKey: "sectors.commerce.description",
      statsKey: "sectors.commerce.stats",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      titleKey: "sectors.education.title",
      descriptionKey: "sectors.education.description",
      statsKey: "sectors.education.stats",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Truck,
      titleKey: "sectors.logistics.title",
      descriptionKey: "sectors.logistics.description",
      statsKey: "sectors.logistics.stats",
      color: "from-orange-500 to-orange-600"
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
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20", children: sectors.map((sector, index) => {
      const IconComponent = sector.icon;
      return /* @__PURE__ */ jsxs(
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
                children: /* @__PURE__ */ jsx(IconComponent, { size: 32, className: "text-white" })
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: t(sector.titleKey) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: t(sector.descriptionKey) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${sector.color} text-white text-sm font-medium`,
                children: t(sector.statsKey)
              }
            )
          ]
        },
        sector.titleKey
      );
    }) })
  ] }) });
};

const Methodology = ({ lang }) => {
  const t = useTranslations(lang);
  const steps = [
    {
      icon: Search,
      titleKey: "methodology.analysis.title",
      descriptionKey: "methodology.analysis.description",
      durationKey: "methodology.analysis.duration",
      featuresKeys: [
        "methodology.analysis.feature1",
        "methodology.analysis.feature2",
        "methodology.analysis.feature3",
        "methodology.analysis.feature4"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      titleKey: "methodology.plan.title",
      descriptionKey: "methodology.plan.description",
      durationKey: "methodology.plan.duration",
      featuresKeys: [
        "methodology.plan.feature1",
        "methodology.plan.feature2",
        "methodology.plan.feature3",
        "methodology.plan.feature4"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      titleKey: "methodology.implementation.title",
      descriptionKey: "methodology.implementation.description",
      durationKey: "methodology.implementation.duration",
      featuresKeys: [
        "methodology.implementation.feature1",
        "methodology.implementation.feature2",
        "methodology.implementation.feature3",
        "methodology.implementation.feature4"
      ],
      color: "from-green-500 to-green-600"
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
    /* @__PURE__ */ jsxs("div", { className: "relative mb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0" }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8 relative z-10", children: steps.map((step, index) => {
        const Icon = step.icon;
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: index * 0.2 },
            viewport: { once: true },
            whileHover: { y: -5 },
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
                    children: /* @__PURE__ */ jsx(Icon, { size: 32, className: "text-white" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: t(step.titleKey) }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium mb-3`,
                      children: [
                        /* @__PURE__ */ jsx(Clock, { size: 16 }),
                        t(step.durationKey)
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: t(step.descriptionKey) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.featuresKeys.map((featureKey, fIdx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2 + fIdx * 0.1
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
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: t(featureKey) })
                    ]
                  },
                  fIdx
                )) })
              ] })
            ]
          },
          step.titleKey
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.5 },
        viewport: { once: true },
        className: "text-center",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6", children: t("methodology.cta.title") }),
          /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: lang === "en" ? "/en/contact" : "/contact",
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
    {
      icon: Users,
      valueKey: "about.stats.customers",
      labelKey: "about.stats.customersLabel"
    },
    {
      icon: Award,
      valueKey: "about.stats.years",
      labelKey: "about.stats.yearsLabel"
    },
    {
      icon: Zap,
      valueKey: "about.stats.efficiency",
      labelKey: "about.stats.efficiencyLabel"
    },
    {
      icon: CheckCircle,
      valueKey: "about.stats.projects",
      labelKey: "about.stats.projectsLabel"
    }
  ];
  const highlights = [
    "about.feature.innovation",
    "about.feature.experts",
    "about.feature.customSolutions",
    "about.feature.support"
  ];
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 bg-white overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
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
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: highlights.map((key, idx) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: idx * 0.1 },
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
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: t(key) })
              ]
            },
            idx
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
        children: stats.map((stat, idx) => {
          const Icon = stat.icon;
          return /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: idx * 0.1 },
              viewport: { once: true },
              className: "bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg text-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Icon, { size: 24, className: "text-white" }) }),
                /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary-600 mb-2", children: t(stat.valueKey) }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: t(stat.labelKey) })
              ]
            },
            idx
          );
        })
      }
    )
  ] }) }) });
};

const testimonials = [
  {
    nameKey: "testimonials.jpl.name",
    roleKey: "testimonials.jpl.role",
    companyKey: "testimonials.jpl.company",
    sectorKey: "testimonials.jpl.sector",
    quoteKey: "testimonials.jpl.quote",
    resultKey: "testimonials.jpl.result",
    image: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    dateKey: "testimonials.jpl.date"
  },
  {
    nameKey: "testimonials.sm.name",
    roleKey: "testimonials.sm.role",
    companyKey: "testimonials.sm.company",
    sectorKey: "testimonials.sm.sector",
    quoteKey: "testimonials.sm.quote",
    resultKey: "testimonials.sm.result",
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    dateKey: "testimonials.sm.date"
  },
  {
    nameKey: "google.michal.name",
    quoteKey: "google.michal.quote",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVS5pyiS9_3e7sULrVYX_1lxPriE0LspxWZMCtvg3b9ZoIW1D7H=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    dateKey: "google.michal.date",
    link: "https://maps.app.goo.gl/dMPkcWyNTZCkX5Mv6",
    google: true
  },
  {
    nameKey: "testimonials.mk.name",
    roleKey: "testimonials.mk.role",
    companyKey: "testimonials.mk.company",
    sectorKey: "testimonials.mk.sector",
    quoteKey: "testimonials.mk.quote",
    resultKey: "testimonials.mk.result",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    dateKey: "testimonials.mk.date"
  },
  {
    nameKey: "testimonials.cd.name",
    roleKey: "testimonials.cd.role",
    companyKey: "testimonials.cd.company",
    sectorKey: "testimonials.cd.sector",
    quoteKey: "testimonials.cd.quote",
    resultKey: "testimonials.cd.result",
    image: "/clair.webp",
    rating: 5,
    dateKey: "testimonials.cd.date"
  },
  {
    nameKey: "google.lucas.name",
    quoteKey: "google.lucas.quote",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXjgMdmZQigdYIIc4s61eOLL0JhQ8Ra9OkCZ0u5TDWGMzMqsk2l=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    dateKey: "google.lucas.date",
    link: "https://maps.app.goo.gl/QEGeBrYyCJHK6Fhk9",
    google: true
  },
  {
    nameKey: "testimonials.tr.name",
    roleKey: "testimonials.tr.role",
    companyKey: "testimonials.tr.company",
    sectorKey: "testimonials.tr.sector",
    quoteKey: "testimonials.tr.quote",
    resultKey: "testimonials.tr.result",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    dateKey: "testimonials.tr.date"
  },
  {
    nameKey: "testimonials.nf.name",
    roleKey: "testimonials.nf.role",
    companyKey: "testimonials.nf.company",
    sectorKey: "testimonials.nf.sector",
    quoteKey: "testimonials.nf.quote",
    resultKey: "testimonials.nf.result",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    dateKey: "testimonials.nf.date"
  },
  {
    nameKey: "testimonials.kb.name",
    roleKey: "testimonials.kb.role",
    companyKey: "testimonials.kb.company",
    sectorKey: "testimonials.kb.sector",
    quoteKey: "testimonials.kb.quote",
    resultKey: "testimonials.kb.result",
    image: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    dateKey: "testimonials.kb.date"
  },
  {
    nameKey: "testimonials.al.name",
    roleKey: "testimonials.al.role",
    companyKey: "testimonials.al.company",
    sectorKey: "testimonials.al.sector",
    quoteKey: "testimonials.al.quote",
    resultKey: "testimonials.al.result",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    dateKey: "testimonials.al.date"
  },
  {
    nameKey: "testimonials.lb.name",
    roleKey: "testimonials.lb.role",
    companyKey: "testimonials.lb.company",
    sectorKey: "testimonials.lb.sector",
    quoteKey: "testimonials.lb.quote",
    resultKey: "testimonials.lb.result",
    image: "/lucie.webp",
    rating: 5,
    dateKey: "testimonials.lb.date"
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
const TestimonialsCarousel = ({ lang }) => {
  const t = useTranslations(lang);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const truncateQuote = (quote) => {
    const paragraphs = quote.split(/(?:\r?\n){2,}/).filter((p) => p.trim() !== "");
    if (paragraphs.length <= 3) {
      return { display: quote, isTruncated: false };
    }
    const truncated = paragraphs.slice(0, 3).join("\n\n") + "...";
    return { display: truncated, isTruncated: true };
  };
  const openTestimonial = (tst, e) => {
    if (!tst.google) {
      e.preventDefault();
      setSelectedTestimonial(tst);
    }
  };
  const closeModal = () => setSelectedTestimonial(null);
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: t("testimonials.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: t("testimonials.subtitle") })
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
          children: testimonials.map((tst, index) => {
            const fullQuote = t(tst.quoteKey);
            const { display: displayQuote, isTruncated } = truncateQuote(fullQuote);
            return /* @__PURE__ */ jsx(SwiperSlide, { className: "mb-5", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: tst.link || "#",
                target: tst.link ? "_blank" : void 0,
                rel: tst.link ? "noopener noreferrer" : void 0,
                className: "block h-full",
                onClick: (e) => openTestimonial(tst, e),
                children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-[400px] flex flex-col justify-center gap-0", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: tst.image,
                          alt: t(tst.nameKey),
                          className: "w-12 h-12 rounded-full object-cover mr-4"
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900", children: t(tst.nameKey) }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: t(tst.dateKey) }),
                        tst.roleKey && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: t(tst.roleKey) }),
                        tst.companyKey && /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-600", children: t(tst.companyKey) })
                      ] })
                    ] }),
                    tst.google && /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/google-logo.svg",
                        alt: "Google",
                        className: "w-6 h-auto"
                      }
                    )
                  ] }),
                  renderStars(tst.rating),
                  /* @__PURE__ */ jsxs("blockquote", { className: "text-gray-700 mb-4 italic whitespace-pre-line", children: [
                    '"',
                    displayQuote,
                    '"'
                  ] }),
                  isTruncated && !tst.google && /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-primary-600 font-medium", children: "Read full review..." }),
                  tst.sectorKey && tst.resultKey && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-auto", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: t(tst.sectorKey) }),
                    /* @__PURE__ */ jsx("span", { className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium", children: t(tst.resultKey) })
                  ] })
                ] })
              }
            ) }, index);
          })
        }
      )
    ] }),
    selectedTestimonial && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4",
        onClick: closeModal,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
                  onClick: closeModal,
                  children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M6 18L18 6M6 6l12 12"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: selectedTestimonial.image,
                    alt: t(selectedTestimonial.nameKey),
                    className: "w-16 h-16 rounded-full object-cover mr-4"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 text-xl", children: t(selectedTestimonial.nameKey) }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: t(selectedTestimonial.dateKey) }),
                  selectedTestimonial.roleKey && /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: t(selectedTestimonial.roleKey) }),
                  selectedTestimonial.companyKey && /* @__PURE__ */ jsx("p", { className: "text-primary-600 font-medium", children: t(selectedTestimonial.companyKey) })
                ] })
              ] }) }),
              renderStars(selectedTestimonial.rating),
              /* @__PURE__ */ jsxs("blockquote", { className: "text-gray-700 text-lg mb-6 italic whitespace-pre-line", children: [
                '"',
                t(selectedTestimonial.quoteKey),
                '"'
              ] }),
              selectedTestimonial.sectorKey && selectedTestimonial.resultKey && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-6 pt-4 border-t border-gray-200", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: t(selectedTestimonial.sectorKey) }),
                /* @__PURE__ */ jsx("span", { className: "bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium", children: t(selectedTestimonial.resultKey) })
              ] })
            ]
          }
        )
      }
    )
  ] });
};

export { About as A, Hero as H, Methodology as M, Sectors as S, TestimonialsCarousel as T };
