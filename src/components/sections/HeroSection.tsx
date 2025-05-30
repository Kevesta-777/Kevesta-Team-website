import React from 'react';
import { ArrowRight, Code, Database, Globe, Smartphone, Blocks } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white dark:from-gray-950 dark:to-gray-950"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
      
      {/* Hero content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-6 border border-primary-200 bg-primary-50/50 text-primary-700 rounded-full px-4 py-1.5 dark:bg-primary-950/50 dark:border-primary-900 dark:text-primary-400"
          >
            <span className="text-sm font-medium">Transforming ideas into digital reality</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl dark:text-white"
          >
            We build <span className="text-primary-600 dark:text-primary-500">exceptional</span> software
            <br className="hidden md:block" /> for the modern world
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-8 md:mb-10 max-w-2xl"
          >
            Our expert team crafts scalable, innovative solutions that drive business growth and deliver seamless user experiences across web, mobile, and enterprise platforms.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" variant="primary" href="#projects">
              Explore our work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" href="#contact">
              Start a project
            </Button>
          </motion.div>
        </div>
        
        {/* Technology icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center py-8 px-6 border-b border-r border-secondary-100 dark:border-secondary-800">
                <Globe className="h-8 w-8 text-primary-500 mb-3" />
                <span className="font-medium">Web Development</span>
              </div>
              <div className="flex flex-col items-center py-8 px-6 border-b md:border-r border-secondary-100 dark:border-secondary-800">
                <Smartphone className="h-8 w-8 text-primary-500 mb-3" />
                <span className="font-medium">Mobile Apps</span>
              </div>
              <div className="flex flex-col items-center py-8 px-6 border-r md:border-b border-secondary-100 dark:border-secondary-800">
                <Database className="h-8 w-8 text-primary-500 mb-3" />
                <span className="font-medium">Enterprise Solutions</span>
              </div>
              <div className="flex flex-col items-center py-8 px-6 md:border-b border-secondary-100 dark:border-secondary-800">
                <Blocks className="h-8 w-8 text-primary-500 mb-3" />
                <span className="font-medium">BlockChain Development</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}