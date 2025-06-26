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
    { icon: Users, value: "100%", label: "Clients satisfaits" },
    { icon: Award, value: "3+", label: "Années d'expérience" },
    { icon: Zap, value: "100%", label: "Amélioration efficacité" },
    { icon: CheckCircle, value: "100+", label: "Projets réalisés" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              {[
                "À la pointe de l’innovation",
                "Équipe d'experts certifiés",
                "Solutions personnalisées en moins de 24h",
                "Support 24/7",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-primary-600 flex-shrink-0"
                  />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
