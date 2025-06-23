import React from 'react';
import { motion } from 'framer-motion';
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
  Target
} from 'lucide-react';
import { useTranslations } from '../i18n';

interface SolutionsProps {
  lang: string;
}

const Solutions: React.FC<SolutionsProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const solutions = [
    {
      icon: Mail,
      title: 'solutions.email.title',
      description: 'solutions.email.description',
      color: 'from-blue-500 to-blue-600',
      features: ['Tri automatique', 'Réponses intelligentes', 'Suivi des emails']
    },
    {
      icon: Users,
      title: 'solutions.crm.title',
      description: 'solutions.crm.description',
      color: 'from-purple-500 to-purple-600',
      features: ['Gestion contacts', 'Suivi pipeline', 'Automatisation']
    },
    {
      icon: TrendingUp,
      title: 'solutions.leads.title',
      description: 'solutions.leads.description',
      color: 'from-green-500 to-green-600',
      features: ['Prospection IA', 'Qualification auto', 'Scoring leads']
    },
    {
      icon: Calendar,
      title: 'solutions.appointment.title',
      description: 'solutions.appointment.description',
      color: 'from-orange-500 to-orange-600',
      features: ['Calendrier intelligent', 'Rappels auto', 'Synchronisation']
    },
    {
      icon: Calculator,
      title: 'solutions.accounting.title',
      description: 'solutions.accounting.description',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Facturation auto', 'Rapprochement', 'Reporting']
    },
    {
      icon: Share2,
      title: 'solutions.social.title',
      description: 'solutions.social.description',
      color: 'from-pink-500 to-pink-600',
      features: ['Publication auto', 'Engagement', 'Analytics']
    },
    {
      icon: BarChart3,
      title: 'solutions.analytics.title',
      description: 'solutions.analytics.description',
      color: 'from-cyan-500 to-cyan-600',
      features: ['Dashboards IA', 'Prédictions', 'KPIs temps réel']
    },
    {
      icon: FolderKanban,
      title: 'solutions.project.title',
      description: 'solutions.project.description',
      color: 'from-teal-500 to-teal-600',
      features: ['Planification auto', 'Suivi temps réel', 'Optimisation']
    },
    {
      icon: UserCheck,
      title: 'solutions.recruitment.title',
      description: 'solutions.recruitment.description',
      color: 'from-red-500 to-red-600',
      features: ['Tri CV IA', 'Entretiens auto', 'Onboarding']
    },
    {
      icon: MessageCircle,
      title: 'solutions.chatbot.title',
      description: 'solutions.chatbot.description',
      color: 'from-violet-500 to-violet-600',
      features: ['Support 24/7', 'IA conversationnelle', 'Multicanal']
    }
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
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
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
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(solution.title)}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {t(solution.description)}
              </p>
              
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-4 w-full bg-gradient-to-r ${solution.color} text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200`}
              >
                {t('solutions.learn_more')}
              </motion.button>
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
              {t('solutions.cta.title')}
            </h3>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <Target size={20} />
              {t('solutions.cta.button')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;