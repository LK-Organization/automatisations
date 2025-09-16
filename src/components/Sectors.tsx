import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Banknote,
  Heart,
  ShoppingCart,
  GraduationCap,
  Truck,
} from "lucide-react";
import { useTranslations } from "../i18n";

interface SectorsProps {
  lang: "fr" | "en";
}

const Sectors: React.FC<SectorsProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const sectors = [
    {
      icon: Factory,
      titleKey: "sectors.industry.title",
      descriptionKey: "sectors.industry.description",
      statsKey: "sectors.industry.stats",
      color: "from-gray-600 to-gray-700",
    },
    {
      icon: Banknote,
      titleKey: "sectors.finance.title",
      descriptionKey: "sectors.finance.description",
      statsKey: "sectors.finance.stats",
      color: "from-green-600 to-green-700",
    },
    {
      icon: Heart,
      titleKey: "sectors.health.title",
      descriptionKey: "sectors.health.description",
      statsKey: "sectors.health.stats",
      color: "from-red-500 to-red-600",
    },
    {
      icon: ShoppingCart,
      titleKey: "sectors.commerce.title",
      descriptionKey: "sectors.commerce.description",
      statsKey: "sectors.commerce.stats",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: GraduationCap,
      titleKey: "sectors.education.title",
      descriptionKey: "sectors.education.description",
      statsKey: "sectors.education.stats",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Truck,
      titleKey: "sectors.logistics.title",
      descriptionKey: "sectors.logistics.description",
      statsKey: "sectors.logistics.stats",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="pb-20 bg-white footer">
      <div id="footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("sectors.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("sectors.subtitle")}
          </p>
        </motion.div>

        {/* Sector cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <motion.div
                key={sector.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-4`}
                >
                  <IconComponent size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(sector.titleKey)}
                </h3>

                <p className="text-gray-600 mb-4">{t(sector.descriptionKey)}</p>

                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${sector.color} text-white text-sm font-medium`}
                >
                  {t(sector.statsKey)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Sectors;
