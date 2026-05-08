import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Brain, Lightbulb } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(#E0E0E0_1px,transparent_1px),linear-gradient(90deg,#E0E0E0_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('about_title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E0E0E0] to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-[#D1D1D1] leading-relaxed mb-8">
              {t('about_text')}
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-[#1A1A1A]/50 rounded-lg border border-[#E0E0E0]/20"
              >
                <div className="w-12 h-12 rounded-full bg-[#E0E0E0]/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="text-[#E0E0E0]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Daniel Ramos Pastor</h3>
                  <p className="text-[#D1D1D1] text-sm">
                    Experto en IA, Tecnología y Software
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-[#1A1A1A]/50 rounded-lg border border-[#E0E0E0]/20"
              >
                <div className="w-12 h-12 rounded-full bg-[#E0E0E0]/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-[#E0E0E0]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Oscar Ramos Pastor</h3>
                  <p className="text-[#D1D1D1] text-sm">
                    Experto en Marketing, Empresa y Comercio Internacional
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFB2]/20 to-transparent"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#E0E0E0] to-[#B0B0B0] rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#0D0D0D]">AI</span>
                  </div>
                  <div className="text-[#E0E0E0] text-2xl font-bold">Axon AI Agency</div>
                  <div className="text-[#D1D1D1] mt-2">Precisión Algorítmica</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#E0E0E0]/30 rounded-full"
            ></motion.div>

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-[#E0E0E0]/20 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
