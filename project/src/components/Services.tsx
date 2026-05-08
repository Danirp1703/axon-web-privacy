import { motion } from 'framer-motion';
import { Bot, MessageCircle, Phone, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const videos: Record<number, string> = {
    0: 'N-spjVyDBYI',
    1: 'BBZY-STADpw',
    2: 'k19K0STvDnE',
  };

  const services = [
    {
      icon: Bot,
      title: t('service1_title'),
      description: t('service1_desc'),
      gradient: 'from-[#00FFB2] to-[#00CC8F]',
    },
    {
      icon: MessageCircle,
      title: t('service2_title'),
      description: t('service2_desc'),
      gradient: 'from-[#00CC8F] to-[#009968]',
    },
    {
      icon: Phone,
      title: t('service3_title'),
      description: t('service3_desc'),
      gradient: 'from-[#009968] to-[#00FFB2]',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#E0E0E0]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#E0E0E0]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('services_title')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#E0E0E0] to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-[#E0E0E0]/30 to-transparent"></div>

              <div className="relative bg-[#1A1A1A] border border-[#E0E0E0]/20 rounded-2xl p-8 h-full hover:border-[#E0E0E0]/50 transition-colors flex flex-col">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                >
                  <service.icon className="text-[#0D0D0D]" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E0E0E0] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#D1D1D1] leading-relaxed mb-6">
                  {service.description}
                </p>

                {videos[index] && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${videos[index]}`, '_blank')}
                    className="relative mb-6 rounded-lg overflow-hidden group/video"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videos[index]}/maxresdefault.jpg`}
                      alt="Video demo"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-16 h-16 bg-[#00FFB2] rounded-full flex items-center justify-center"
                      >
                        <Play className="text-[#0D0D0D]" size={32} fill="currentColor" />
                      </motion.div>
                    </div>
                  </motion.button>
                )}

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="h-1 bg-gradient-to-r from-[#E0E0E0] to-transparent mt-auto rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
