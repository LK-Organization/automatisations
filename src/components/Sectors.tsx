import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Banknote, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Truck,
  Factory,
  Briefcase
} from 'lucide-react';
import { useTranslations } from '../i18n';

interface SectorsProps {
  lang: string;
}

const Sectors: React.FC<SectorsProps> = ({ lang }) => {
  const t = useTranslations(lang);

  const sectors = [
    {
      icon: Factory,
      title: 'sectors.industry.title',
      description: 'sectors.industry.description',
      color: 'from-gray-600 to-gray-700',
      stats: '40% d\'efficacité en plus'
    },
    {
      icon: Banknote,
      title: 'sectors.finance.title',
      description: 'sectors.finance.description',
      color: 'from-green-600 to-green-700',
      stats: '60% de réduction des erreurs'
    },
    {
      icon: Heart,
      title: 'sectors.health.title',
      description: 'sectors.health.description',
      color: 'from-red-500 to-red-600',
      stats: '30% de temps économisé'
    },
    {
      icon: ShoppingCart,
      title: 'sectors.commerce.title',
      description: 'sectors.commerce.description',
      color: 'from-blue-500 to-blue-600',
      stats: '50% d\'augmentation des ventes'
    },
    {
      icon: GraduationCap,
      title: 'sectors.education.title',
      description: 'sectors.education.description',
      color: 'from-purple-500 to-purple-600',
      stats: '70% d\'engagement en plus'
    },
    {
      icon: Truck,
      title: 'sectors.logistics.title',
      description: 'sectors.logistics.description',
      color: 'from-orange-500 to-orange-600',
      stats: '35% de coûts réduits'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Générale',
      company: 'TechCorp',
      sector: 'Industrie',
      quote: 'AutomatAi a révolutionné notre processus de production. Nous avons gagné 40% d\'efficacité en seulement 3 mois.',
      result: '+40% efficacité',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ahmed Hassan',
      role: 'CFO',
      company: 'FinanceMax',
      sector: 'Finance',
      quote: 'L\'automatisation de notre comptabilité nous a fait économiser des milliers d\'heures et éliminé les erreurs.',
      result: '-60% erreurs',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sophie Martin',
      role: 'Responsable Marketing',
      company: 'E-Shop Plus',
      sector: 'Commerce',
      quote: 'Nos ventes ont explosé grâce à l\'automatisation de notre génération de leads et du suivi client.',
      result: '+50% ventes',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
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
            {t('sectors.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('sectors.subtitle')}
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${sector.color} flex items-center justify-center mb-4`}>
                <sector.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(sector.title)}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {t(sector.description)}
              </p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${sector.color} text-white text-sm font-medium`}>
                {sector.stats}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h3>
          <p className="text-lg text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600">{testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{testimonial.sector}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;