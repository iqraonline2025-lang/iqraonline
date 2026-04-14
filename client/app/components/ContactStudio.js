'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, BookOpen, Globe, Cpu, Zap, Mic2 } from 'lucide-react';

export default function ContactStudio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-20 px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
      >
        
        {/* Card 1: Main Philosophy (Large 2x2) */}
        <motion.div 
          variants={cardVariants}
          className="md:col-span-2 md:row-span-2 bg-white border border-purple-100 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-purple-900/5"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-200">
              <Terminal size={28} />
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-6 leading-[1.1]">
              Deep Logic. <br/>
              <span className="text-purple-600 font-serif italic">Divine Wisdom.</span>
            </h3>
            <p className="text-slate-500 max-w-sm leading-relaxed text-lg">
              Operating at the center of modern engineering and classical linguistics. Every project is handled with surgical precision.
            </p>
          </div>
          
          {/* Subtle background decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-50 rounded-full blur-3xl group-hover:bg-purple-100 transition-colors duration-500" />
        </motion.div>

        {/* Card 2: Technical Stack (Wide) */}
        <motion.div 
          variants={cardVariants}
          className="md:col-span-2 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 backdrop-blur-sm border border-purple-100 rounded-[2.5rem] p-8 flex items-center justify-between group hover:border-purple-300 transition-colors"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Cpu className="text-indigo-600" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xl">High-End Stack</h4>
              <p className="text-slate-500">Optimized for speed and scale.</p>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            {['React', 'Next.js', 'Go'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/80 border border-purple-100 text-purple-600 text-[10px] font-bold rounded-lg uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 3: Global Presence (Small Square) */}
        <motion.div 
          variants={cardVariants}
          className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-center items-center text-center group relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 opacity-20"
          >
            <Globe size={120} />
          </motion.div>
          <Zap className="text-purple-400 mb-4" size={32} />
          <span className="text-2xl font-black block">GMT +0</span>
          <span className="text-xs uppercase tracking-widest text-slate-400 mt-2">Remote Workflows</span>
        </motion.div>

        {/* Card 4: Audio/Linguistics (Small Square) */}
        <motion.div 
          variants={cardVariants}
          className="bg-white border border-purple-100 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:bg-purple-50 transition-colors"
        >
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
            <Mic2 className="text-purple-600" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Studio Grade</h4>
            <p className="text-xs text-slate-500 mt-1">High-fidelity linguistic recording & analysis.</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}