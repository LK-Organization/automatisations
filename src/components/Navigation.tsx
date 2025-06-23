import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../i18n';

interface NavigationProps {
  lang: string;
  isHomePage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ lang, isHomePage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations(lang);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.solutions', href: '/solutions' },
    { key: 'nav.contact', href: '/contact' },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Toujours visible en haut de page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - cacher le menu
        setIsVisible(false);
        setIsMenuOpen(false); // Fermer le menu mobile si ouvert
      } else if (currentScrollY < lastScrollY) {
        // Scroll vers le haut - montrer le menu
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Déterminer le style de fond selon la page
  const getBackgroundStyle = () => {
    if (isHomePage) {
      return "bg-black/20 backdrop-blur-md border-b border-white/10";
    } else {
      return "bg-black/95 backdrop-blur-md border-b border-gray-800";
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className={getBackgroundStyle()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/logo-automatisation.png" 
                  alt="Automatisons Agency Logo" 
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation - Centré */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-white/90 hover:text-white px-4 py-2 text-base font-medium transition-all duration-200 hover:scale-105"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white/90 hover:text-white focus:outline-none p-2 transition-all duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${isHomePage ? 'bg-black/30' : 'bg-black/90'} backdrop-blur-md border-t ${isHomePage ? 'border-white/10' : 'border-gray-800'}`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-white/90 hover:text-white block px-3 py-2 text-base font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;