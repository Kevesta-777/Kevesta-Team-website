import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TeamMember } from '../../utils/types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Everistus Chinecherem',
    role: 'CEO & CSO',
    bio: 'Visionary leader with extensive experience in blockchain technology, smart contract development, and decentralized systems architecture. Pioneering innovative solutions in DeFi and Web3.',
    image: 'https://crimson-genetic-crane-992.mypinata.cloud/ipfs/bafybeiaqnoovzyu4547cnd6xoru3donnyzhnghufawcexldoky6hlmkaie/everistus.jpg',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '2',
    name: 'Uprety Sunil',
    role: 'Project Manager & Tech Advisor',
    bio: 'Expert in blockchain infrastructure, distributed systems, and enterprise-grade DApp development. Specializes in implementing secure and scalable blockchain solutions.',
    image: 'https://crimson-genetic-crane-992.mypinata.cloud/ipfs/bafkreiexnzmxy3juc7vj5v5chcpzyxgglmxoic7ahv2ll3u3z2plk2x47i',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: '3',
    name: 'Ivan Damara',
    role: 'Frontend Lead',
    bio: 'Expert in modern JavaScript frameworks with a passion for creating intuitive, accessible interfaces.',
    image: 'https://crimson-genetic-crane-992.mypinata.cloud/ipfs/bafybeiaqnoovzyu4547cnd6xoru3donnyzhnghufawcexldoky6hlmkaie/uprety.jpg',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '4',
    name: 'Sheng FuLai',
    role: 'Backend Architect',
    bio: 'Specializes in high-performance APIs, database optimization, and microservices architecture.',
    image: 'https://crimson-genetic-crane-992.mypinata.cloud/ipfs/bafybeiaqnoovzyu4547cnd6xoru3donnyzhnghufawcexldoky6hlmkaie/sheng.jpg',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: '5',
    name: 'Juri Miyazawa',
    role: 'Mobile Development Lead',
    bio: 'Expert in native and cross-platform mobile development with a focus on performance and UX.',
    image: 'https://crimson-genetic-crane-992.mypinata.cloud/ipfs/bafybeiaqnoovzyu4547cnd6xoru3donnyzhnghufawcexldoky6hlmkaie/juri.jpg',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: '6',
    name: 'Azizul Islam',
    role: 'UX/UI Designer',
    bio: 'Creates user-centered designs that balance aesthetics and functionality to deliver exceptional experiences.',
    image: 'https://crimson-genetic-crane-992.mypinata.cloud/ipfs/bafybeiaqnoovzyu4547cnd6xoru3donnyzhnghufawcexldoky6hlmkaie/bratko.jpg',
    socialLinks: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }
  }
];

export default function TeamSection() {
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
    <section id="team" className="section bg-white dark:bg-gray-950">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle mx-auto">
            Our talented team of experts brings years of experience and passion to every project.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md border border-secondary-100 dark:border-secondary-800 hover:shadow-lg transition-all group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-4">
                      {member.socialLinks.github && (
                        <a
                          href={member.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 text-white hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 text-white hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 text-white hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{member.role}</p>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}