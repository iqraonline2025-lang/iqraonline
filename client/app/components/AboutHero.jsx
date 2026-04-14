'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-white overflow-hidden py-20">
      
      {/* 1. LAYERED DEPTH (The "Glow" behind everything) */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-50/50 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT: High-End Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full mb-8 border border-purple-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              <span className="text-purple-700 text-[10px] font-black uppercase tracking-[0.2em]">Available for 2026 Projects</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              Code <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
                Meets 
              </span> <br />
              Magic.
            </h1>

            <p className="max-w-md text-slate-500 text-xl font-medium leading-relaxed mb-10">
              I build high-performance digital architectures where speed is the default and beauty is the standard.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="h-14 w-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 cursor-pointer transition-colors">
                <span className="text-xl">↓</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT: The "Bento" Visual Component */}
          <div className="relative">
            {/* Main Feature Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 1 }}
              className="relative z-20 bg-white border border-slate-100 p-12 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(120,50,255,0.15)]"
            >
              <div className="flex flex-col space-y-8">
                {/* Visual "Pulse" Element */}
                <div className="flex justify-between items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-3xl shadow-lg shadow-purple-200" />
                  <div className="text-right">
                    <p className="text-4xl font-black text-slate-900">99.9%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency</p>
                  </div>
                </div>

                {/* Aesthetic Code Bars */}
                <div className="space-y-3">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ delay: 1, duration: 1.5 }}
                      className="h-full bg-purple-600 rounded-full" 
                    />
                  </div>
                  <div className="h-2 w-[60%] bg-slate-100 rounded-full" />
                  <div className="h-2 w-[90%] bg-slate-100 rounded-full" />
                </div>

                <p className="text-slate-800 text-2xl font-bold tracking-tight">
                  Solving complex problems with <span className="italic font-serif">simple solutions.</span>
                </p>
              </div>
            </motion.div>

            {/* Floating Glass Element */}
            <motion.div 
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 z-30 bg-white/60 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block"
            >
              <p className="text-xs font-black text-purple-600 uppercase mb-2">Modern Stack</p>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-900" />
                <div className="w-8 h-8 rounded-lg bg-purple-100" />
                <div className="w-8 h-8 rounded-lg bg-fuchsia-100" />
              </div>
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-slate-50 rounded-full -z-10" />
          </div>

        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />
    </section>
  );
};

export default AboutHero;