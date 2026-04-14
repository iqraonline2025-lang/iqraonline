'use client';
import React from 'react';
import { motion } from 'framer-motion';
// 1. Import Link from Next.js
import Link from 'next/link';

const TechHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      
      {/* 1. Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px]" />
        
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px' 
          }} 
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.2)_100%)]" />
      </div>

      {/* 2. Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-purple-100 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
          <span className="text-purple-700 text-[10px] font-black uppercase tracking-[0.2em]">
            Next-Gen Web Solutions
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[1.05] tracking-tight mb-8"
        >
          We Build Modern, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600">
            High-Converting
          </span> Websites
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl mb-12 font-medium"
        >
          Fusing cutting-edge technology with world-class design to turn your 
          digital presence into a high-performance growth engine.
        </motion.p>

        {/* 2. Updated CTAs with Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Start Your Project -> Contact */}
          <Link href="/contact" className="w-full sm:w-auto no-underline">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white text-center font-bold rounded-2xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-100 cursor-pointer"
            >
              Start Your Project
            </motion.div>
          </Link>
          
          {/* View Our Work -> Portfolio */}
          <Link href="/portfolio" className="w-full sm:w-auto no-underline">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/80 backdrop-blur-md text-purple-600 text-center border-2 border-purple-100 font-bold rounded-2xl hover:border-purple-600 hover:bg-purple-50 transition-all cursor-pointer"
            >
              View Our Work
            </motion.div>
          </Link>
        </motion.div>

        <div className="mt-24 flex justify-center gap-8 md:gap-16 opacity-40">
          {['REACT', 'NEXT.JS', 'TAILWIND', 'FRAMER'].map((tech) => (
            <div key={tech} className="text-black text-[10px] font-black tracking-[0.3em]">
              {tech}
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-100 to-transparent" />
    </section>
  );
};

export default TechHero;