'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Tomorrow", "Velocity", "Impact", "The Future"];

const ContactHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      
      {/* 1. THE BACKGROUND: SOFT ORGANIC GLOWS */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-purple-100/50 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-fuchsia-50/40 rounded-full blur-[120px]"
        />
      </div>

      {/* 2. THE CONTENT */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-purple-100 shadow-sm mb-12 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-700">
            Available for Q3-Q4 2026
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="max-w-5xl mx-auto mb-16">
          <h1 className="text-[12vw] md:text-[9rem] font-black text-slate-900 tracking-tighter leading-[0.85]">
            Let’s Build <br />
            <div className="relative h-[1.1em] overflow-hidden flex justify-center mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: "100%", rotateX: -45, opacity: 0 }}
                  animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                  exit={{ y: "-100%", rotateX: 45, opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 italic font-serif"
                >
                  {words[index]}.
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
        </div>

        {/* Action Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="max-w-xl text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            From architectural strategy to high-performance code. 
            Send us a message and let's start the dialogue.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <a 
              href="mailto:iqraonline2025@gmail.com" 
              className="text-slate-900 font-bold border-b-2 border-slate-200 hover:border-purple-600 pb-1 transition-all"
            >
              iqraonline2025@gmail.com
            </a>
          </div>
        </motion.div>

      </div>

      {/* 3. SUBTLE NOISE TEXTURE (The "Nice" Secret) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay z-[1]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
      />

    </section>
  );
};

export default ContactHero;