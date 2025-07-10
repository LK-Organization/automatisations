import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useTranslations } from "../i18n";

interface HeroProps {
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse  items-center justify-center overflow-hidden h-svh"
    >
      {/* Image de fond pleine largeur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner-reduite.png"
          alt="Intelligence Artificielle - Interaction humain-robot avec interface technologique futuriste"
          className="w-full h-full object-cover"
        />
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Bouton IA Active - Côté droit */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="md:absolute mr-auto ml-4 bottom-20 md:top-1/2 md:right-8 md:transform md:-translate-y-1/2 z-10"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">IA Active</span>
          </div>
        </div>
      </motion.div>

      {/* Contenu au-dessus de l'image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={t("hero.cta.link")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              {t("hero.cta")}
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href={t("hero.cta.secondary.link")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Play size={20} />
              {t("hero.cta.secondary")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
