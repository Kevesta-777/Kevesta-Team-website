import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cpu, 
  Blocks, 
  Cloud 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Service } from '../../utils/types';

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'We build modern, responsive websites and progressive web apps that deliver exceptional user experiences.',
    icon: 'Code2'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that work seamlessly across iOS and Android devices.',
    icon: 'Smartphone'
  },
  {
    id: '3',
    title: 'Enterprise Solutions',
    description: 'Custom enterprise software that streamlines operations, enhances productivity, and scales with your business.',
    icon: 'Database'
  },
  {
    id: '4',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage data to provide insights, automation, and predictive capabilities.',
    icon: 'Cpu'
  },
  {
    id: '5',
    title: 'BlockChain Development',
    description: 'Build secure, decentralized applications with smart contracts, DApps, and custom blockchain solutions that revolutionize your business processes.',
    icon: 'Blocks'
  },
  {
    id: '6',
    title: 'DevOps & Cloud',
    description: 'Optimize your infrastructure with our DevOps practices and cloud migration strategies.',
    icon: 'Cloud'
  }
];

const getIconComponent = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Blocks':
      return <Blocks className={className} />;
    case 'Cloud':
      return <Cloud className={className} />;
    default:
      return <Code2 className={className} />;
  }
};

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We provide end-to-end solutions for businesses of all sizes, from startups to enterprise.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-secondary-100 dark:border-secondary-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 rounded-lg p-4 inline-block mb-4">
                  {getIconComponent(service.icon, 'h-6 w-6')}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 flex-grow">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium mt-4 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}