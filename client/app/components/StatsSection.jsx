'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * DigitTicker: Handles the high-end mechanical "scroll" animation
 * for individual numbers with a metallic gradient style.
 */
const DigitTicker = ({ value, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 

  return (
    <div ref={ref} className="h-[120px] md:h-[160px] overflow-hidden inline-block px-1">
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: `-${value * 10}%` } : { y: 0 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.6, 0.01, 0.05, 0.95], 
          delay: delay 
        }}
        className="flex flex-col"
      >
        {digits.map((n, i) => (
          <span 
            key={i} 
            /* FIXED: Optimized text color for transparency */
            className="h-[120px] md:h-[160px] flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-b from-black via-slate-800 to-slate-400"
          >
            {n}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/**
 * StatItem: Manages the layout, labels, and the purple neon suffix.
 */
const StatItem = ({ number, label, suffix, index }) => {
  const numStr = String(number).padStart(2, '0');
  
  return (
    /* FIXED: Changed hover:bg-slate-50 to hover:bg-purple-50/10 for transparency */
    <div className="relative group py-12 md:py-16 border-b border-slate-100/30 last:border-0 md:border-b-0 md:border-r md:border-slate-100/30 md:last:border-0 px-10 transition-all duration-700 hover:bg-purple-50/10 backdrop-blur-[2px]">
      <div className="flex flex-col items-center md:items-start">
        
        <div className="flex items-center gap-3 mb-6">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 16 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="h-[2px] bg-purple-600" 
          />
          <p className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover:text-black transition-colors duration-300">
            {label}
          </p>
        </div>

        <div className="flex items-baseline text-8xl md:text-[150px] font-black tracking-tighter leading-none">
          {numStr.split('').map((digit, i) => (
            <DigitTicker 
              key={i} 
              value={parseInt(digit)} 
              delay={index * 0.2 + i * 0.1} 
            />
          ))}
          
          <motion.span 
            initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.2 + 0.8 }}
            className="text-purple-600 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)] ml-2 select-none"
          >
            {suffix}
          </motion.span>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100/10 overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: index * 0.2 }}
            className="w-full h-full bg-gradient-to-r from-transparent via-purple-600 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Main Stats Section
 */
export default function StatsSection() {
  return (
    /* FIXED: bg-white -> bg-transparent */
    <section className="py-32 bg-transparent relative overflow-hidden">
      
      {/* Background Subtle Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          
          <StatItem number={18} label="Finished Projects" suffix="+" index={0} />
          <StatItem number={12} label="Global Clients" suffix="" index={1} />
          <StatItem number={2} label="Years Active" suffix="yr" index={2} />

        </div>
      </div>

      {/* Decorative Purple Aura (Bottom Right) */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] opacity-20 pointer-events-none" />
    </section>
  );
}