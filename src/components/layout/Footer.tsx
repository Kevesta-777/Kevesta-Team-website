import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://crimson-genetic-crane-992.mypinata.cloud/ipfs/bafybeiaqnoovzyu4547cnd6xoru3donnyzhnghufawcexldoky6hlmkaie/logo.png" 
                alt="Kevesta" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
              We craft digital experiences that help businesses thrive in the modern world.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/kevesta-777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/kevestaltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-500 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Blockchain Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  DevOps & Cloud
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#team" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-secondary-600 dark:text-secondary-400">
                  651 N Broad Street, Middletown, Delaware, US, 19709
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <a
                  href="tel:+19294470499"
                  className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400"
                >
                  +1 (929) 447-0499
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:everistus@kevesta.com"
                  className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400"
                >
                  everistus@kevesta.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-200 dark:border-secondary-800">
          <p className="text-secondary-600 dark:text-secondary-400 text-center">
            © {currentYear} Kevesta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}