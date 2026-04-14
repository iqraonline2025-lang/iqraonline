"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#fafbff] dark:bg-zinc-950">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-purple-100 dark:border-zinc-800 rounded-[3.5rem] p-12 md:p-20 text-center shadow-2xl shadow-purple-200/40 dark:shadow-none"
        >
          {/* Internal Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight"
          >
            Start your journey <span className="text-purple-600">today.</span>
          </motion.h2>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Join a community of learners mastering the sacred arts and modern 
            technology. Your first session is always on us.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Pulsing Primary Button */}
            <motion.div
              animate={{ 
                boxShadow: ["0 0 0 0px rgba(147, 51, 234, 0.4)", "0 0 0 20px rgba(147, 51, 234, 0)"] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              className="rounded-2xl"
            >
            </motion.div>

            {/* Secondary Button */}
            <Link href="/contact">
              <button className="px-10 py-5 bg-white dark:bg-zinc-800 border-2 border-purple-100 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-2xl font-bold text-lg hover:border-purple-600 dark:hover:border-purple-500 transition-all active:scale-95">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;