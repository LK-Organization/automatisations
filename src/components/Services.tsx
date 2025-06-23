import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cog, Link } from 'lucide-react';
import { useTranslations } from '../i18n';

interface ServicesProps {
  lang: string;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const services = [
    {
      icon: Brain,
      title: 'services.ai.title',
      description: 'services.ai.description',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cog,
      title: 'services.automation.title',
      description: 'services.automation.description',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Link,
      title: 'services.integration.title',
      description: 'services.integration.description',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t(service.title)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(service.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;