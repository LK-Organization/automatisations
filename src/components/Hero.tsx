import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { useTranslations } from "../i18n";

interface HeroProps {
  lang: "fr" | "en";
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <section
      id="home"
      className="relative w-full h-[100svh] md:h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/cover.jpg"
        alt="Bannière IA"
        className="w-full h-full object-top object-cover "
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Desktop title */}
          <h1 className="hidden md:flex flex-col gap-5 text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span>{t("hero.title")}</span>
            <span>{t("hero.title-secondary")}</span>
          </h1>

          {/* Mobile title */}
          <h1 className="md:hidden text-4xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <motion.a
              href={t("hero.cta.secondary.link")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 w-full sm:w-auto"
            >
              <Play size={20} />
              {t("hero.cta.secondary")}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Arrow to next section (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center space-y-6 z-10"
      >
        <a href="#exemples" className="block">
          <ArrowDown size={48} className="text-white animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
