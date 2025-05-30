import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Project, ProjectCategory } from '../../utils/types';
import Button from '../ui/Button';
import { ExternalLink, Github } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced search, real-time inventory, and seamless checkout.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: 'https://kevesta.com',
    githubLink: 'https://github.com/kevesta',
    features: [
      'Advanced product search and filtering',
      'Real-time inventory management',
      'Secure payment processing',
      'User authentication and profiles',
      'Order tracking and history'
    ],
    technologies: {
      frontend: ['React', 'Redux', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      deployment: ['AWS', 'Docker', 'CI/CD']
    }
  },
  {
    id: '2',
    title: 'Health & Fitness App',
    description: 'A comprehensive mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'ML Kit'],
    link: 'https://healthapp-demo.codecraft.dev',
    githubLink: 'https://github.com/codecraft/health-fitness-app',
    features: [
      'Personalized workout plans',
      'Nutrition tracking and meal planning',
      'Health metrics dashboard',
      'AI-powered recommendations',
      'Social features and challenges'
    ],
    technologies: {
      frontend: ['Flutter', 'Bloc Pattern'],
      backend: ['Firebase', 'Cloud Functions'],
      ml: ['TensorFlow Lite', 'ML Kit']
    }
  },
  {
    id: '3',
    title: 'HR Management System',
    description: 'An enterprise solution for managing employees, performance, and HR processes with advanced analytics.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'enterprise',
    tags: ['Angular', '.NET', 'SQL Server', 'Azure'],
    link: 'https://hrms-demo.codecraft.dev',
    githubLink: 'https://github.com/codecraft/hr-management',
    features: [
      'Employee data management',
      'Performance tracking',
      'Leave management',
      'Payroll integration',
      'Advanced reporting'
    ],
    technologies: {
      frontend: ['Angular', 'NgRx', 'Material UI'],
      backend: ['.NET Core', 'SQL Server'],
      cloud: ['Azure', 'Azure AD']
    }
  },
  {
    id: '4',
    title: 'Predictive Maintenance System',
    description: 'AI-powered system for predicting equipment failures before they happen, reducing downtime for manufacturing clients.',
    image: 'https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ai',
    tags: ['Python', 'TensorFlow', 'IoT', 'GCP'],
    link: 'https://predictive-maintenance.codecraft.dev',
    githubLink: 'https://github.com/codecraft/predictive-maintenance',
    features: [
      'Real-time sensor data analysis',
      'Failure prediction algorithms',
      'Maintenance scheduling',
      'Equipment performance analytics',
      'Alert system'
    ],
    technologies: {
      ml: ['Python', 'TensorFlow', 'Scikit-learn'],
      backend: ['FastAPI', 'PostgreSQL'],
      cloud: ['GCP', 'IoT Core']
    }
  },
  {
    id: '5',
    title: 'Crypto Research Platform',
    description: 'Advanced blockchain analytics platform providing real-time market insights, smart contract analysis, and DeFi protocol monitoring with AI-powered predictions.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'blockchain',
    tags: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Chainlink'],
    link: 'https://crypto-research.codecraft.dev',
    githubLink: 'https://github.com/codecraft/crypto-research',
    features: [
      'Real-time blockchain data analytics',
      'Smart contract security analysis',
      'DeFi protocol monitoring and risk assessment',
      'NFT market trends and valuation',
      'Cross-chain transaction tracking'
    ],
    technologies: {
      blockchain: ['Solidity', 'Web3.js', 'Ethers.js'],
      backend: ['Node.js', 'GraphQL', 'MongoDB'],
      analytics: ['Python', 'TensorFlow', 'Pandas'],
      infrastructure: ['IPFS', 'Chainlink', 'AWS']
    }
  },
  {
    id: '6',
    title: 'Logistics Management Platform',
    description: 'End-to-end supply chain visibility platform with real-time tracking, route optimization and analytics.',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'enterprise',
    tags: ['React', 'Node.js', 'GraphQL', 'MongoDB'],
    link: 'https://logistics-demo.codecraft.dev',
    githubLink: 'https://github.com/codecraft/logistics-platform',
    features: [
      'Real-time shipment tracking',
      'Route optimization',
      'Warehouse management',
      'Analytics dashboard',
      'Mobile app integration'
    ],
    technologies: {
      frontend: ['React', 'Apollo Client'],
      backend: ['Node.js', 'GraphQL', 'MongoDB'],
      mobile: ['React Native']
    }
  }
];

const categories: {id: ProjectCategory, label: string}[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'blockchain', label: 'BlockChain' },
  { id: 'ai', label: 'AI' },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section id="projects" className="section bg-secondary-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise and commitment to excellence.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-white text-secondary-700 hover:bg-secondary-100 dark:bg-gray-800 dark:text-secondary-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-secondary-100 dark:border-secondary-700 hover:shadow-lg transition-all group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    View details
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-secondary-200"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div 
                className="fixed inset-0 transition-opacity" 
                onClick={() => setSelectedProject(null)}
              >
                <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

              <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                <div className="absolute right-4 top-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-secondary-400 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-200"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                  
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-secondary-600 dark:text-secondary-400">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedProject.technologies).map(([category, techs]) => (
                        <div key={category}>
                          <h5 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 capitalize mb-1">
                            {category}:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Visit Live Site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-secondary-200 dark:border-secondary-700 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
                      >
                        View Source
                        <Github className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}