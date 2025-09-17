import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useTranslations } from "../i18n";

interface CTAProps {
  lang: "fr" | "en";
}

const CTA: React.FC<CTAProps> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <section className="py-20 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">
            {t("methodology.cta.title")}
          </h3>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
          >
            <Users size={20} />
            {t("methodology.cta.consultation")}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
