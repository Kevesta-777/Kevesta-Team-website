import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../../utils/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emily Robertson',
    company: 'TechStart Inc.',
    content: 'Working with Kevesta was a game-changer for our business. Their team delivered our e-commerce platform ahead of schedule with all the features we needed and more. The website\'s performance and user experience exceeded our expectations.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    id: '2',
    name: 'James Thompson',
    company: 'MediHealth Solutions',
    content: 'The mobile application Kevesta built for us has transformed how we interact with patients. Their attention to detail, focus on security, and intuitive design has resulted in overwhelmingly positive feedback from our users.',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    id: '3',
    name: 'Christina Lee',
    company: 'Global Logistics Inc.',
    content: 'We approached Kevesta with a complex enterprise solution need, and they exceeded all expectations. Their team took the time to understand our unique challenges and delivered a system that has significantly improved our operational efficiency.',
    image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5
  },
  {
    id: '4',
    name: 'Robert Chen',
    company: 'FinTech Innovations',
    content: 'The AI-powered analytics dashboard Kevesta developed has given us unprecedented insights into our financial data. Their expertise in both finance and technology was evident throughout the project, and the results speak for themselves.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const setTestimonial = (index: number) => {
    setActiveIndex(index);
    // Pause autoplay for a moment when manually changing
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay]);

  return (
    <section id="testimonials" className="section bg-secondary-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex items-center justify-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md border border-secondary-100 dark:border-secondary-700 w-full"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[activeIndex].rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-secondary-300 dark:text-secondary-700'
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-secondary-800 dark:text-secondary-200 text-lg mb-4 italic">
                      "{testimonials[activeIndex].content}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
                      <p className="text-primary-600 dark:text-primary-400">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white dark:bg-gray-800 text-secondary-700 dark:text-secondary-300 p-2 rounded-full border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-gray-700 shadow-md focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white dark:bg-gray-800 text-secondary-700 dark:text-secondary-300 p-2 rounded-full border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-gray-700 shadow-md focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeIndex
                  ? 'bg-primary-600 dark:bg-primary-500'
                  : 'bg-secondary-300 dark:bg-secondary-700 hover:bg-secondary-400 dark:hover:bg-secondary-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}