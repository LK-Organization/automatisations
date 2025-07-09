import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Users,
  TrendingUp,
  Calendar,
  Calculator,
  Share2,
  BarChart3,
  FolderKanban,
  UserCheck,
  MessageCircle,
  Target,
} from "lucide-react";
import { useTranslations } from "../i18n";

interface SolutionsProps {
  lang: string;
}

const Solutions: React.FC<SolutionsProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const solutions = [
    {
      icon: Mail,
      title: "solutions.email.title",
      description: "solutions.email.description",
      color: "from-blue-500 to-blue-600",
      features: [
        "solutions.email.features.0",
        "solutions.email.features.1",
        "solutions.email.features.2",
      ],
    },
    {
      icon: Users,
      title: "solutions.crm.title",
      description: "solutions.crm.description",
      color: "from-purple-500 to-purple-600",
      features: [
        "solutions.crm.features.0",
        "solutions.crm.features.1",
        "solutions.crm.features.2",
      ],
    },
    {
      icon: TrendingUp,
      title: "solutions.leads.title",
      description: "solutions.leads.description",
      color: "from-green-500 to-green-600",
      features: [
        "solutions.leads.features.0",
        "solutions.leads.features.1",
        "solutions.leads.features.2",
      ],
    },
    {
      icon: Calendar,
      title: "solutions.appointment.title",
      description: "solutions.appointment.description",
      color: "from-orange-500 to-orange-600",
      features: [
        "solutions.appointment.features.0",
        "solutions.appointment.features.1",
        "solutions.appointment.features.2",
      ],
    },
    {
      icon: Calculator,
      title: "solutions.accounting.title",
      description: "solutions.accounting.description",
      color: "from-indigo-500 to-indigo-600",
      features: [
        "solutions.accounting.features.0",
        "solutions.accounting.features.1",
        "solutions.accounting.features.2",
      ],
    },
    {
      icon: Share2,
      title: "solutions.social.title",
      description: "solutions.social.description",
      color: "from-pink-500 to-pink-600",
      features: [
        "solutions.social.features.0",
        "solutions.social.features.1",
        "solutions.social.features.2",
      ],
    },
    {
      icon: BarChart3,
      title: "solutions.analytics.title",
      description: "solutions.analytics.description",
      color: "from-cyan-500 to-cyan-600",
      features: [
        "solutions.analytics.features.0",
        "solutions.analytics.features.1",
        "solutions.analytics.features.2",
      ],
    },
    {
      icon: FolderKanban,
      title: "solutions.project.title",
      description: "solutions.project.description",
      color: "from-teal-500 to-teal-600",
      features: [
        "solutions.project.features.0",
        "solutions.project.features.1",
        "solutions.project.features.2",
      ],
    },
    {
      icon: UserCheck,
      title: "solutions.recruitment.title",
      description: "solutions.recruitment.description",
      color: "from-red-500 to-red-600",
      features: [
        "solutions.recruitment.features.0",
        "solutions.recruitment.features.1",
        "solutions.recruitment.features.2",
      ],
    },
    {
      icon: MessageCircle,
      title: "solutions.chatbot.title",
      description: "solutions.chatbot.description",
      color: "from-violet-500 to-violet-600",
      features: [
        "solutions.chatbot.features.0",
        "solutions.chatbot.features.1",
        "solutions.chatbot.features.2",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("solutions.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("solutions.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <solution.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(solution.title)}
              </h3>

              <p className="text-gray-600 mb-4">{t(solution.description)}</p>

              <div className="space-y-2">
                {solution.features.map((featureKey, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}
                    ></div>
                    <span className="text-sm text-gray-600">
                      {t(featureKey)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              {t("solutions.cta.title")}
            </h3>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Target size={20} />
              {t("solutions.cta.button")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
