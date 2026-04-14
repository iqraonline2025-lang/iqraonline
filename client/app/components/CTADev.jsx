'use client';
import React from 'react';
import { motion } from 'framer-motion';
// 1. Import Link from Next.js
import Link from 'next/link';

const CTADev = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative bg-black rounded-[3rem] overflow-hidden p-12 md:p-24 text-center group shadow-2xl">
          
          {/* Background Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-purple-400 font-black uppercase tracking-[0.4em] text-xs mb-6"
            >
              Ready to scale?
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter"
            >
              Let’s build something <span className="italic text-purple-600">legendary.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              {/* 2. Start Your Project -> Redirects to Contact Page */}
              <Link href="/contact" className="w-full md:w-auto no-underline">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-purple-600 rounded-2xl text-white font-black text-lg transition-all hover:bg-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.4)] cursor-pointer text-center"
                >
                  Start Your Project
                  <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
                </motion.div>
              </Link>

              {/* 3. Book a Call -> Redirects to WhatsApp */}
              <motion.a 
                href="https://wa.me/yournumberhere" // Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white font-black text-lg transition-all hover:bg-white/10 text-center no-underline"
              >
                Book a Call
              </motion.a>
            </motion.div>
          </div>

          {/* Floating Subtle Tech Elements */}
          <div className="absolute bottom-10 left-10 opacity-30 hidden md:block">
            <p className="font-mono text-[10px] text-purple-400 tracking-widest leading-loose text-left">
              // STATUS: AVAILABLE<br />
              // LOCATION: REMOTE_WORLDWIDE
            </p>
          </div>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CTADev;