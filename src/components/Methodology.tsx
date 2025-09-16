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
  lang: "fr" | "en";
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
      ],
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="pt-20 ">
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
      </div>
    </section>
  );
};

export default Methodology;
