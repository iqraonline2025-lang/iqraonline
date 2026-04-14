'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users } from 'lucide-react';

export default function ContactTrust() {
  const stats = [
    {
      icon: <Users className="text-purple-600" size={28} />,
      value: "500+",
      label: "Students Guided",
      description: "Nurturing spiritual growth across 15+ countries."
    },
    {
      icon: <Globe className="text-indigo-600" size={28} />,
      value: "12+",
      label: "Years Experience",
      description: "Expertise in full-stack dev & classical linguistics."
    },
    {
      icon: <Award className="text-violet-600" size={28} />,
      value: "100%",
      label: "Success Rate",
      description: "Commitment to excellence in every single project."
    }
  ];

  // Animation variants for the container to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Animation variants for each individual card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-600 font-bold uppercase tracking-[0.2em] text-xs"
          >
            Built on Trust
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2"
          >
            Spiritual Wisdom. <span className="text-purple-600">Digital Precision.</span>
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Animated Border/Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-[2.5rem] opacity-0 group-hover:opacity-20 transition duration-500 blur" />
              
              <div className="relative h-full p-10 rounded-[2.5rem] bg-white border border-purple-100/50 shadow-xl shadow-purple-900/5 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <div className="text-4xl font-black text-slate-900 mb-2">
                  {stat.value}
                </div>
                
                <div className="text-purple-600 font-bold text-sm uppercase tracking-wider mb-4">
                  {stat.label}
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}