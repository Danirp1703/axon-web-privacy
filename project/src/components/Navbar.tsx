import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/axon-logo.png"
              alt="Axon AI Agency"
              className="h-12 w-auto"
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#D1D1D1] hover:text-white transition-colors"
            >
              {t('nav_about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#D1D1D1] hover:text-white transition-colors"
            >
              {t('nav_services')}
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-[#D1D1D1] hover:text-white transition-colors"
            >
              {t('nav_benefits')}
            </button>

            <div className="flex items-center space-x-2 border-l border-[#D1D1D1]/20 pl-6">
              <button
                onClick={() => setLanguage('es')}
                className={`text-sm ${language === 'es' ? 'text-white font-bold' : 'text-[#D1D1D1]'} hover:text-white transition-colors`}
              >
                ES
              </button>
              <span className="text-[#D1D1D1]">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm ${language === 'en' ? 'text-white font-bold' : 'text-[#D1D1D1]'} hover:text-white transition-colors`}
              >
                EN
              </button>
              <span className="text-[#D1D1D1]">|</span>
              <button
                onClick={() => setLanguage('pt')}
                className={`text-sm ${language === 'pt' ? 'text-white font-bold' : 'text-[#D1D1D1]'} hover:text-white transition-colors`}
              >
                PT
              </button>
            </div>

            <motion.a
              href="mailto:oscar.ramos@axonsystem.es"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0D0D0D] px-6 py-2 rounded-lg font-semibold hover:bg-[#E0E0E0] transition-colors"
            >
              {t('nav_contact')}
            </motion.a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="block text-[#D1D1D1] hover:text-white transition-colors w-full text-left"
            >
              {t('nav_about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block text-[#D1D1D1] hover:text-white transition-colors w-full text-left"
            >
              {t('nav_services')}
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="block text-[#D1D1D1] hover:text-white transition-colors w-full text-left"
            >
              {t('nav_benefits')}
            </button>

            <div className="flex items-center space-x-4 pt-4 border-t border-[#D1D1D1]/20">
              <button
                onClick={() => setLanguage('es')}
                className={`text-sm ${language === 'es' ? 'text-white font-bold' : 'text-[#D1D1D1]'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm ${language === 'en' ? 'text-white font-bold' : 'text-[#D1D1D1]'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`text-sm ${language === 'pt' ? 'text-white font-bold' : 'text-[#D1D1D1]'}`}
              >
                PT
              </button>
            </div>

            <a
              href="mailto:oscar.ramos@axonsystem.es"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-[#0D0D0D] px-6 py-2 rounded-lg font-semibold text-center"
            >
              {t('nav_contact')}
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
