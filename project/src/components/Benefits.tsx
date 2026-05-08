import { motion } from 'framer-motion';
import { Clock, TrendingUp, Rocket, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      title: t('benefit1_title'),
      description: t('benefit1_desc'),
    },
    {
      icon: TrendingUp,
      title: t('benefit2_title'),
      description: t('benefit2_desc'),
    },
    {
      icon: Rocket,
      title: t('benefit3_title'),
      description: t('benefit3_desc'),
    },
    {
      icon: Heart,
      title: t('benefit4_title'),
      description: t('benefit4_desc'),
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E0E0E0]/10 rounded-full blur-[120px]"
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('benefits_title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E0E0E0] to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E0E0E0]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#E0E0E0]/20 rounded-2xl p-8 hover:border-[#E0E0E0]/50 transition-all">
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#E0E0E0]/10 border border-[#E0E0E0]/30 flex items-center justify-center group-hover:bg-[#E0E0E0]/20 transition-colors"
                  >
                    <benefit.icon className="text-[#E0E0E0]" size={32} />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E0E0E0] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-[#D1D1D1] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#E0E0E0] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#1A1A1A] border border-[#E0E0E0]/30 rounded-2xl p-8">
            <p className="text-xl text-[#D1D1D1] max-w-2xl">
              Nuestras soluciones están diseñadas para fisioterapeutas que buscan{' '}
              <span className="text-[#E0E0E0] font-semibold">
                optimizar su práctica
              </span>{' '}
              y ofrecer una{' '}
              <span className="text-[#E0E0E0] font-semibold">
                atención excepcional
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
