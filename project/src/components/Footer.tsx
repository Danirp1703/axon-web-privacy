import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#00FFB2]/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/axon-logo.png"
              alt="Axon AI Agency"
              className="h-10 w-auto mb-4"
            />
            <p className="text-[#D1D1D1] text-sm">
              Transformando negocios con Inteligencia Artificial real
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Enlaces</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-[#D1D1D1] hover:text-white transition-colors text-sm"
              >
                {t('nav_about')}
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-[#D1D1D1] hover:text-white transition-colors text-sm"
              >
                {t('nav_services')}
              </button>
              <button
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-[#D1D1D1] hover:text-white transition-colors text-sm"
              >
                {t('nav_benefits')}
              </button>
              <a
                href="/privacidad.html"
                className="block text-[#D1D1D1] hover:text-white transition-colors text-sm"
              >
                Política de Privacidad
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:oscar.ramos@axonsystem.es"
                className="flex items-center gap-2 text-[#D1D1D1] hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                oscar.ramos@axonsystem.es
              </a>
              <div className="flex gap-4 mt-4">
                <motion.a
                  href="https://www.linkedin.com/in/daniel-ramos-pastor-6875a932b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#E0E0E0' }}
                  className="text-[#D1D1D1] hover:text-[#E0E0E0] transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#E0E0E0' }}
                  className="text-[#D1D1D1] hover:text-[#E0E0E0] transition-colors"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E0E0E0]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#D1D1D1] text-sm">
              © {currentYear} Axon AI Agency. {t('footer_rights')}.
            </p>
            <p className="text-[#D1D1D1] text-sm mt-1">
              Daniel Ramos Pastor, NIF 20919691H
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#D1D1D1] text-sm">Idioma:</span>
            <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
