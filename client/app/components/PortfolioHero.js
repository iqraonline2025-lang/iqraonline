'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, ArrowRight } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fdfdff] overflow-hidden pt-20">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-50/50 skew-x-12 translate-x-32 z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white"
          >
            <Cpu size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">System v2.0.26</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl xl:text-7xl font-black text-slate-900 leading-[1.1]"
          >
            Building <span className="text-purple-600">Digital</span> <br />
            Sanctuaries.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-lg leading-relaxed border-l-2 border-purple-100 pl-6"
          >
            Full-stack engineering meets classical linguistics. I build high-performance systems that respect the logic of language and the precision of code.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6"
          >
          </motion.div>
        </div>

        {/* Right Side: Visual Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Terminal size={12} className="text-slate-500" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">bash — 80x24</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-8 font-mono text-sm leading-relaxed">
              <p className="text-emerald-400">➜ <span className="text-slate-300">~</span> <span className="text-purple-400">whoami</span></p>
              <p className="text-slate-400 mt-1">Full-Stack Engineer & Linguistic Researcher</p>
              
              <p className="text-emerald-400 mt-6">➜ <span className="text-slate-300">~</span> <span className="text-purple-400">cat</span> stack.json</p>
              <div className="text-slate-300 mt-1">
                <p>{"{"}</p>
                <p className="pl-4">"frontend": ["Next.js", "Tailwind"],</p>
                <p className="pl-4">"backend": ["Node.js", "PostgreSQL"],</p>
                <p className="pl-4">"research": "Arabic Root Extraction"</p>
                <p>{"}"}</p>
              </div>

              <motion.div 
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-5 bg-purple-500 mt-4 inline-block"
              />
            </div>
          </div>

          {/* Floating Element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Status</p>
              <p className="text-xs font-black text-slate-900">Optimization Active</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}