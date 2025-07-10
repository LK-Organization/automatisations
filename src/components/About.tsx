import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Zap } from "lucide-react";
import { useTranslations } from "../i18n";

interface AboutProps {
  lang: string;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const stats = [
    {
      icon: Users,
      valueKey: "about.stats.customers",
      labelKey: "about.stats.customersLabel",
    },
    {
      icon: Award,
      valueKey: "about.stats.years",
      labelKey: "about.stats.yearsLabel",
    },
    {
      icon: Zap,
      valueKey: "about.stats.efficiency",
      labelKey: "about.stats.efficiencyLabel",
    },
    {
      icon: CheckCircle,
      valueKey: "about.stats.projects",
      labelKey: "about.stats.projectsLabel",
    },
  ];

  const highlights = [
    "about.feature.innovation",
    "about.feature.experts",
    "about.feature.customSolutions",
    "about.feature.support",
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("about.description")}
            </p>

            <div className="space-y-4">
              {highlights.map((key, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-primary-600 flex-shrink-0"
                  />
                  <span className="text-gray-700">{t(key)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg text-center"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {t(stat.valueKey)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t(stat.labelKey)}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
