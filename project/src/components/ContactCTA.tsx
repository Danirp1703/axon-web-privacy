import { motion } from 'framer-motion';
import { MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E0E0E0]/10 rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#E0E0E0]/10 rounded-full"
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-6 py-2 bg-[#E0E0E0]/10 border border-[#E0E0E0]/30 rounded-full"
          >
            <span className="text-[#E0E0E0] font-semibold">Empieza Hoy</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('cta_title')}
          </h2>

          <p className="text-xl text-[#D1D1D1] mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('cta_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="https://wa.me/34683327797"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(224, 224, 224, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white text-[#0D0D0D] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#E0E0E0] transition-all shadow-lg"
            >
              <MessageSquare size={28} />
              WhatsApp
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:oscar.ramos@axonsystem.es"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <Mail size={28} />
              Email
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Respuesta', value: '< 24h' },
              { label: 'Consulta', value: 'Gratis' },
              { label: 'Implementación', value: 'Rápida' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#E0E0E0]/20 rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-[#E0E0E0] mb-2">{item.value}</div>
                <div className="text-[#D1D1D1]">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
