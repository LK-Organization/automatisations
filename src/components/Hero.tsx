import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play, Instagram, Facebook } from "lucide-react";
import { useTranslations } from "../i18n";

interface HeroProps {
  lang: "fr" | "en";
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <section
      id="home"
      className="relative min-h-screen  flex flex-col items-center justify-center overflow-hidden h-svh"
    >
      {/* Fond */}
      <div className="absolute md:aspect-video inset-0 z-0">
        <img
          src="/couverture.jpg"
          alt="Bannière IA"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Contour avec effet glow bleuté */}
          <h1 className="md:flex flex-col hidden justify-center items-center gap-5 w-full text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className=" w-full whitespace-normal ">
              {t("hero.title")}
            </span>

            <span className=" w-full whitespace-normal">
              {t("hero.title-secondary")}
            </span>
          </h1>
          <h1 className="md:hidden inline-block w-full text-4xl md:text-6xl lg:text-6xl space-y-5 font-bold text-white mb-6 leading-tight ">
            <span className=" w-full whitespace-normal ">
              {t("hero.title")}
            </span>
          </h1>
          <p className="text-xl  md:text-2xl text-gray-400 mb-4 leading-relaxed max-w-4xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <motion.a
              href={t("hero.cta.link")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              {t("hero.cta")}
              <ArrowDown size={20} />
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

      {/* Réseaux + flèche → section suivante sur md+ */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-6 z-10"
      >
        {/* Flèche */}
        <a href="#next-section" className="block">
          <ArrowDown size={48} className="text-white animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
