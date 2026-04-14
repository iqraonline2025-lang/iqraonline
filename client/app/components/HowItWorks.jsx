'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Book a Free Evaluation",
    description: "Sign up for a 30-minute trial where our lead tutor assesses your current level and goals."
  },
  {
    number: "02",
    title: "Get a Personalized Plan",
    description: "We match you with the perfect teacher and create a schedule that fits your lifestyle."
  },
  {
    number: "03",
    title: "Start Learning",
    description: "Log into our classroom portal and begin your journey toward Quranic mastery."
  },
  {
    number: "04",
    title: "Track Your Progress",
    description: "Receive monthly reports on Tajweed improvements and Hifz milestones."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">
              Your Path to <span className="text-purple-600">Success</span>
            </h2>
            <p className="text-slate-500">
              We’ve simplified the process of starting your religious education. 
              Four simple steps to begin your journey.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="px-6 py-3 border-2 border-dashed border-purple-200 rounded-full text-purple-600 font-bold text-sm">
               Simple & Transparent
             </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-purple-50 via-purple-200 to-purple-50 -z-10" />

          {/* FIXED: Changed 'courses.map' to 'steps.map' */}
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Number Circle */}
              <div className="w-16 h-16 bg-white border-4 border-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:border-purple-600 transition-colors duration-500 shadow-sm">
                <span className="text-2xl font-black text-purple-600 italic">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>

              {/* Decorative Element */}
              <div className="mt-6 w-8 h-1 bg-purple-100 group-hover:w-16 group-hover:bg-purple-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;