// src/components/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { useTranslations } from "../i18n";
import Silk from "./SilkBackground"; // ← import your Silk component

interface HeroProps { lang: string; }
const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = useTranslations(lang);


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden h-svh"
    >
      {/* ─────────────────────────────────────────────── */}
      {/* 0) Silk animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Silk
         speed={5}
  scale={1}
  color="#2563eb"
  noiseIntensity={1.5}
  rotation={0}
        />
      </div>

      


      {/* 4) IA Active badge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:inline-block absolute bottom-20 md:top-1/2 md:left-8 transform -translate-y-1/2 z-10"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">{t("hero.ai")}</span>
          </div>
        </div>
      </motion.div>

      {/* 5) Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-10 pb-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <motion.a
              href={t("hero.cta.link")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
            >
              {t("hero.cta")} <ArrowDown size={20} />
            </motion.a>
            <motion.a
              href={t("hero.cta.secondary.link")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
            >
              <Play size={20} /> {t("hero.cta.secondary")}
            </motion.a>
          </div>
        </motion.div>
        <p className="text-xl md:text-2xl text-white mb-4 max-w-4xl leading-relaxed">
          {t("hero.subtitle")}
        </p>
      </div>

      {/* 6) Scroll arrow */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
      >
        <a href="#next-section">
          <ArrowDown size={48} className="text-white animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
