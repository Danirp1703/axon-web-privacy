import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    nav_about: 'Quiénes Somos',
    nav_services: 'Servicios',
    nav_benefits: 'Beneficios',
    nav_contact: 'Contactar',
    hero_title: 'Transformamos tu negocio con Inteligencia Artificial real',
    hero_subtitle: 'Soluciones personalizadas. Resultados reales. Automatizaciones que escalan tu impacto.',
    hero_cta_whatsapp: 'Contactar por WhatsApp',
    hero_cta_email: 'Enviar Email',
    about_title: 'Quiénes Somos',
    about_text: 'Somos un equipo formado por Daniel Ramos Pastor, experto en IA con experiencia en tecnología de IA y software, y Oscar Ramos Pastor, experto en Marketing, Empresa y Comercio Internacional. Dirigimos Axon AI Agency para resolver los desafíos más complejos con precisión algorítmica.',
    services_title: 'Qué Hacemos',
    service1_title: 'Asistente en Página Web',
    service1_desc: 'Asistente para resolver todas las dudas que puedan surgir sobre tu página web',
    service2_title: 'Chatbots Personalizados',
    service2_desc: 'Asistentes virtuales que entienden a tus clientes',
    service3_title: 'Asistente de Llamadas con IA',
    service3_desc: 'Gestión inteligente de comunicaciones telefónicas',
    benefits_title: 'Beneficios',
    benefit1_title: 'Ahorro de Tiempo',
    benefit1_desc: 'Automatiza tareas repetitivas y enfócate en lo importante',
    benefit2_title: 'Aumento de Conversión',
    benefit2_desc: 'Respuestas inmediatas que convierten más leads',
    benefit3_title: 'Escalabilidad',
    benefit3_desc: 'Crece sin límites con sistemas que se adaptan',
    benefit4_title: 'Atención Personalizada',
    benefit4_desc: 'Cada cliente recibe un trato cercano y único',
    cta_title: '¿Listo para automatizar lo imposible?',
    cta_subtitle: 'Agenda una consulta gratuita y descubre cómo la IA puede transformar tu práctica',
    footer_rights: 'Todos los derechos reservados',
  },
  en: {
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_benefits: 'Benefits',
    nav_contact: 'Contact',
    hero_title: 'We Transform Your Business with Real Artificial Intelligence',
    hero_subtitle: 'Custom solutions. Real results. Automations that scale your impact.',
    hero_cta_whatsapp: 'Contact via WhatsApp',
    hero_cta_email: 'Send Email',
    about_title: 'About Us',
    about_text: 'We are a team made up of Daniel Ramos Pastor, an AI expert with experience in AI technology and software, and Oscar Ramos Pastor, an expert in Marketing, Business, and International Trade. We lead Axon AI Agency to solve the most complex challenges with algorithmic precision.',
    services_title: 'What We Do',
    service1_title: 'Web Page Assistant',
    service1_desc: 'Assistant to resolve any questions that may arise about your website',
    service2_title: 'Custom Chatbots',
    service2_desc: 'Virtual assistants that understand your customers',
    service3_title: 'AI Call Assistant',
    service3_desc: 'Intelligent phone communication management',
    benefits_title: 'Benefits',
    benefit1_title: 'Time Savings',
    benefit1_desc: 'Automate repetitive tasks and focus on what matters',
    benefit2_title: 'Increased Conversion',
    benefit2_desc: 'Instant responses that convert more leads',
    benefit3_title: 'Scalability',
    benefit3_desc: 'Grow without limits with adaptive systems',
    benefit4_title: 'Personalized Service',
    benefit4_desc: 'Every client receives close and unique treatment',
    cta_title: 'Ready to Automate the Impossible?',
    cta_subtitle: 'Schedule a free consultation and discover how AI can transform your practice',
    footer_rights: 'All rights reserved',
  },
  pt: {
    nav_about: 'Quem Somos',
    nav_services: 'Serviços',
    nav_benefits: 'Benefícios',
    nav_contact: 'Contatar',
    hero_title: 'Transformamos Seu Negócio com Inteligência Artificial Real',
    hero_subtitle: 'Soluções sob medida. Resultados reais. Automações que escalam seu impacto.',
    hero_cta_whatsapp: 'Contatar via WhatsApp',
    hero_cta_email: 'Enviar Email',
    about_title: 'Quem Somos',
    about_text: 'Somos uma equipe formada por Daniel Ramos Pastor, especialista em IA com experiência em tecnologia de IA e software, e Oscar Ramos Pastor, especialista em Marketing, Empresa e Comércio Internacional. Dirigimos a Axon AI Agency para resolver os desafios mais complexos com precisão algorítmica.',
    services_title: 'O Que Fazemos',
    service1_title: 'Assistente em Página Web',
    service1_desc: 'Assistente para resolver todas as dúvidas que possam surgir sobre seu site',
    service2_title: 'Chatbots Personalizados',
    service2_desc: 'Assistentes virtuais que entendem seus clientes',
    service3_title: 'Assistente de Chamadas com IA',
    service3_desc: 'Gestão inteligente de comunicações telefônicas',
    benefits_title: 'Benefícios',
    benefit1_title: 'Economia de Tempo',
    benefit1_desc: 'Automatize tarefas repetitivas e foque no que importa',
    benefit2_title: 'Aumento de Conversão',
    benefit2_desc: 'Respostas imediatas que convertem mais leads',
    benefit3_title: 'Escalabilidade',
    benefit3_desc: 'Cresça sem limites com sistemas que se adaptam',
    benefit4_title: 'Atendimento Personalizado',
    benefit4_desc: 'Cada cliente recebe um tratamento próximo e único',
    cta_title: 'Pronto para Automatizar o Impossível?',
    cta_subtitle: 'Agende uma consulta gratuita e descubra como a IA pode transformar sua prática',
    footer_rights: 'Todos os direitos reservados',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
