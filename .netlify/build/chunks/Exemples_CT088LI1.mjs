import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play, Factory, Banknote, Heart, ShoppingCart, GraduationCap, Truck, Search, FileText, Rocket, Clock, CheckCircle, Users, Award, Zap, ChevronDown, Tag, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { u as useTranslations } from './Chatbot_CpeBotSv.mjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
/* empty css                         */
import clsx from 'clsx';

const Hero = ({ lang }) => {
  const t = useTranslations(lang);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen flex flex-col items-center justify-center overflow-hidden h-svh",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/hero.webp",
              alt: "Bannière IA",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/30" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.5 },
            className: "hidden md:inline-block absolute md:mr-auto md:ml-4 bottom-20 md:top-1/2 md:left-8 md:transform md:-translate-y-1/2 z-10",
            children: /* @__PURE__ */ jsx("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: "IA Active" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5 text-center flex flex-col items-center justify-center h-full", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center",
              children: [
                /* @__PURE__ */ jsx("h1", { className: "md:flex flex-col hidden justify-center items-center gap-5 w-full text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight", children: /* @__PURE__ */ jsx("span", { className: " w-full whitespace-normal ", children: t("hero.title") }) }),
                /* @__PURE__ */ jsx("h1", { className: "md:hidden inline-block w-full text-4xl md:text-6xl lg:text-6xl space-y-5 font-bold text-white mb-6 leading-tight ", children: /* @__PURE__ */ jsx("span", { className: " w-full whitespace-normal ", children: t("hero.title") }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-6", children: [
                  /* @__PURE__ */ jsxs(
                    motion.a,
                    {
                      href: t("hero.cta.link"),
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className: "bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2",
                      children: [
                        t("hero.cta"),
                        /* @__PURE__ */ jsx(ArrowDown, { size: 20 })
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
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:absolute bottom-[100px] md:text-2xl text-white/90 mb-4 leading-relaxed max-w-4xl mx-auto", children: t("hero.subtitle") })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.7 },
            className: "hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-6 z-10",
            children: /* @__PURE__ */ jsx("a", { href: "#next-section", className: "block", children: /* @__PURE__ */ jsx(ArrowDown, { size: 48, className: "text-white animate-bounce" }) })
          }
        )
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
  return /* @__PURE__ */ jsxs("section", { id: "next-section", className: "pb-20 bg-white footer", children: [
    /* @__PURE__ */ jsxs("div", { id: "footer", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
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
    ] }),
    /* @__PURE__ */ jsx("div", {})
  ] });
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
  return /* @__PURE__ */ jsx("section", { className: "pt-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
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
    ] })
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

function AccordionItem({
  item,
  isExpanded,
  onToggle,
  index
}) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ease-out hover:shadow-md hover:border-gray-200", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: onToggle,
        className: "w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-start gap-4 focus:outline-none transition-colors duration-200 hover:bg-gray-50",
        "aria-expanded": isExpanded,
        "aria-controls": `faq-content-${index}`,
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold text-gray-900 leading-tight", children: item.question }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              color: "#2563eb",
              className: `h-5 w-5 text-gray-400 transition-all duration-300 ease-out flex-shrink-0 mt-0.5 ${isExpanded ? "rotate-180 text-blue-600" : "hover:text-gray-600"}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: `faq-content-${index}`,
        style: {
          height: isExpanded ? `${contentHeight}px` : "0px"
        },
        className: "transition-all duration-500 ease-out overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { ref: contentRef, className: "px-4 sm:px-6 pb-4 sm:pb-6", children: /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 pt-4", children: /* @__PURE__ */ jsx("div", { className: "text-sm sm:text-base text-gray-700 leading-relaxed space-y-2", children: item.answer.split("\n").map((line, idx) => {
          if (line.trim().startsWith("-")) {
            return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 mt-1 text-[#2563eb] flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: line.replace(/^- /, "") })
            ] }, idx);
          } else {
            return /* @__PURE__ */ jsx("p", { children: line }, idx);
          }
        }) }) }) })
      }
    )
  ] });
}
function FAQAccordion({ lang = "en" }) {
  const t = useTranslations(lang);
  const [expandedItem, setExpandedItem] = useState(null);
  const faqs = [
    { question: t("faq.q1.question"), answer: t("faq.q1.answer") },
    { question: t("faq.q2.question"), answer: t("faq.q2.answer") },
    { question: t("faq.q3.question"), answer: t("faq.q3.answer") },
    { question: t("faq.q4.question"), answer: t("faq.q4.answer") },
    { question: t("faq.q5.question"), answer: t("faq.q5.answer") }
  ];
  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen pt-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl lg:max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 sm:mb-12 lg:mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight", children: t("faq.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4", children: t("faq.subtitle") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 sm:space-y-4 lg:space-y-6", children: faqs.map((item, index) => /* @__PURE__ */ jsx(
      AccordionItem,
      {
        item,
        isExpanded: expandedItem === index,
        onToggle: () => toggleItem(index),
        index
      },
      index
    )) })
  ] }) });
}

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
    nameKey: "google.robert.name",
    quoteKey: "google.robert.quote",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXAaT0oltSu6t0NBpGSbs6iwzfuC3Xt_2lCRuTEBoyrrBXZkGgf=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateKey: "google.robert.date",
    link: "https://maps.app.goo.gl/xtHdunsTCQDC9oN58",
    google: true
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
    nameKey: "google.gauthier.name",
    quoteKey: "google.gauthier.quote",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUDF573SdGX3zh50wMnANkKf1_ru0jfsGaPM7ThpNoxjYjUTv3L=w72-h72-p-rp-mo-br100",
    rating: 5,
    dateKey: "google.gauthier.date",
    link: "https://maps.app.goo.gl/xtHdunsTCQDC9oN58",
    google: true
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
  const openTestimonial = (tst, e) => {
    if (!tst.google) {
      e.preventDefault();
      setSelectedTestimonial(tst);
    }
  };
  const closeModal = () => setSelectedTestimonial(null);
  return /* @__PURE__ */ jsxs("section", { className: "pt-20 bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold text-gray-900 mb-4", children: t("testimonials.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: t("testimonials.subtitle") })
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
          children: testimonials.map((tst, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "mb-5", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: tst.link || "#",
              target: tst.link ? "_blank" : void 0,
              rel: tst.link ? "noopener noreferrer" : void 0,
              className: "block h-full",
              onClick: (e) => openTestimonial(tst, e),
              children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-[350px] flex flex-col justify-center gap-0", children: [
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
                /* @__PURE__ */ jsxs(
                  "blockquote",
                  {
                    className: "text-gray-700 mb-4 italic whitespace-pre-line line-clamp-3 overflow-hidden",
                    style: {
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3
                    },
                    children: [
                      '"',
                      t(tst.quoteKey),
                      '"'
                    ]
                  }
                ),
                tst.sectorKey && tst.resultKey && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-auto", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: t(tst.sectorKey) }),
                  /* @__PURE__ */ jsx("span", { className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium", children: t(tst.resultKey) })
                ] })
              ] })
            }
          ) }, index))
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
            className: "bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
                  onClick: closeModal,
                  children: "✕"
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

const CTA = ({ lang }) => {
  const t = useTranslations(lang);
  return /* @__PURE__ */ jsx("section", { className: "py-20 ", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.5 },
      viewport: { once: true },
      className: "text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
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
  ) });
};

const exampleIds = [
  {
    id: "factures",
    image: "/invoice.png",
    tags: ["OCR", "Node.js", "Excel"],
    imageClass: "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-b-2xl",
    imgPosition: "bottom"
  },
  {
    id: "emails",
    image: "/emailing.png",
    tags: ["Gmail API", "Drive API"],
    imageClass: "h-[250px] md:h-[200px] md:w-full w-auto object-contain object-right rounded-t-2xl",
    imgPosition: "top"
  },
  {
    id: "chatbot",
    image: "/chatbot.png",
    tags: ["React", "OpenAI"],
    imageClass: "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-t-2xl",
    imgPosition: "bottom"
  },
  {
    id: "crm",
    image: "/crm.png",
    tags: ["Salesforce ", "Google Calendar "],
    imageClass: "h-[200px] md:h-[150px] md:w-auto w-[300px] object-cover object-center rounded-b-2xl",
    imgPosition: "top"
  },
  {
    id: "reports",
    image: "/reports.png",
    tags: ["Formik", "jsPDF", "SMTP"],
    imageClass: "h-auto md:h-[200px] md:w-full w-[300px] object-cover object-top rounded-b-2xl",
    imgPosition: "bottom"
  },
  {
    id: "assistant",
    image: "/vocal-assitance.png",
    tags: ["React", "Web Speech API"],
    imageClass: "h-[250px] md:w-full w-full object-cover object-bottom rounded-t-2xl",
    imgPosition: "top"
  }
];
const AutomationCarousel = ({ lang }) => {
  const t = useTranslations(lang);
  const [selected, setSelected] = useState(null);
  const swiperRef = useRef(null);
  const examplesWithText = exampleIds.map((ex) => ({
    ...ex,
    title: t(`exemples.${ex.id}.title`),
    subtitle: t(`exemples.${ex.id}.subtitle`),
    details: t(`exemples.${ex.id}.details`)
  }));
  return /* @__PURE__ */ jsx("section", { className: "py-16", id: "exemples", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 text-center", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: t("exemples.title") }) }),
    /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Autoplay],
        onSwiper: (sw) => swiperRef.current = sw,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 3e3, disableOnInteraction: false },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 }
        },
        className: "px-4",
        children: examplesWithText.map((ex) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => setSelected(ex),
            className: "h-[450px] flex flex-col justify-between bg-gradient-to-br from-indigo-800 to-purple-700 rounded-2xl shadow-lg overflow-hidden cursor-pointer",
            children: [
              ex.imgPosition === "top" && /* @__PURE__ */ jsx(
                "img",
                {
                  src: ex.image,
                  alt: ex.title,
                  draggable: false,
                  className: clsx(ex.imageClass, "w-full select-none")
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-1", children: ex.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-200 mb-4 text-sm", children: ex.subtitle }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ex.tags.map((tag) => /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: "inline-flex items-center px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full",
                    children: [
                      /* @__PURE__ */ jsx(Tag, { size: 12, className: "mr-1" }),
                      tag
                    ]
                  },
                  tag
                )) })
              ] }),
              ex.imgPosition === "bottom" && /* @__PURE__ */ jsx(
                "img",
                {
                  src: ex.image,
                  alt: ex.title,
                  draggable: false,
                  className: clsx(ex.imageClass, "w-full select-none")
                }
              )
            ]
          }
        ) }, ex.id))
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-4 mt-6", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => swiperRef.current?.slidePrev(),
          className: "p-3 bg-white rounded-full shadow disabled:opacity-50",
          children: /* @__PURE__ */ jsx(ChevronLeft, {})
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => swiperRef.current?.slideNext(),
          className: "p-3 bg-white rounded-full shadow disabled:opacity-50",
          children: /* @__PURE__ */ jsx(ChevronRight, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selected && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setSelected(null),
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white rounded-2xl max-w-2xl w-full p-8 relative mx-4",
            initial: { scale: 0.8, y: 50 },
            animate: { scale: 1, y: 0 },
            exit: { scale: 0.8, y: 50 },
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
                  onClick: () => setSelected(null),
                  children: /* @__PURE__ */ jsx(X, { size: 24 })
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: selected.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-700 whitespace-pre-line mb-6", children: selected.details })
            ]
          }
        )
      }
    ) })
  ] }) });
};

export { AutomationCarousel as A, CTA as C, FAQAccordion as F, Hero as H, Methodology as M, Sectors as S, TestimonialsCarousel as T, About as a };
