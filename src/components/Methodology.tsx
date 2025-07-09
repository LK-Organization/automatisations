import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Rocket,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";
import { useTranslations } from "../i18n";

interface MethodologyProps {
  lang: string;
}

const Methodology: React.FC<MethodologyProps> = ({ lang }) => {
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
        "methodology.analysis.feature4",
      ],
      color: "from-blue-500 to-blue-600",
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
        "methodology.plan.feature4",
      ],
      color: "from-purple-500 to-purple-600",
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
        "methodology.implementation.feature4",
      ],
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("methodology.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("methodology.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm z-20`}
                  >
                    {index + 1}
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {t(step.titleKey)}
                      </h3>

                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium mb-3`}
                      >
                        <Clock size={16} />
                        {t(step.durationKey)}
                      </div>

                      <p className="text-gray-600">{t(step.descriptionKey)}</p>
                    </div>

                    <div className="space-y-3">
                      {step.featuresKeys.map((featureKey, fIdx) => (
                        <motion.div
                          key={fIdx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + fIdx * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle
                            size={16}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span className="text-sm text-gray-700">
                            {t(featureKey)}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              {t("methodology.cta.title")}
            </h3>
            <motion.a
              href={lang === "en" ? "/en/contact" : "/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              <Users size={20} />
              {t("methodology.cta.consultation")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
