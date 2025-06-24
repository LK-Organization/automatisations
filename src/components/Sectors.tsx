import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Banknote,
  Heart,
  ShoppingCart,
  GraduationCap,
  Truck,
  Factory,
  Briefcase,
} from "lucide-react";
import { useTranslations } from "../i18n";

interface SectorsProps {
  lang: string;
}

const Sectors: React.FC<SectorsProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const sectors = [
    {
      icon: Factory,
      title: "sectors.industry.title",
      description: "sectors.industry.description",
      color: "from-gray-600 to-gray-700",
      stats: "40% d'efficacité en plus",
    },
    {
      icon: Banknote,
      title: "sectors.finance.title",
      description: "sectors.finance.description",
      color: "from-green-600 to-green-700",
      stats: "60% de réduction des erreurs",
    },
    {
      icon: Heart,
      title: "sectors.health.title",
      description: "sectors.health.description",
      color: "from-red-500 to-red-600",
      stats: "30% de temps économisé",
    },
    {
      icon: ShoppingCart,
      title: "sectors.commerce.title",
      description: "sectors.commerce.description",
      color: "from-blue-500 to-blue-600",
      stats: "50% d'augmentation des ventes",
    },
    {
      icon: GraduationCap,
      title: "sectors.education.title",
      description: "sectors.education.description",
      color: "from-purple-500 to-purple-600",
      stats: "70% d'engagement en plus",
    },
    {
      icon: Truck,
      title: "sectors.logistics.title",
      description: "sectors.logistics.description",
      color: "from-orange-500 to-orange-600",
      stats: "35% de coûts réduits",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
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
                <sector.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(sector.title)}
              </h3>

              <p className="text-gray-600 mb-4">{t(sector.description)}</p>

              <div
                className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${sector.color} text-white text-sm font-medium`}
              >
                {sector.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
