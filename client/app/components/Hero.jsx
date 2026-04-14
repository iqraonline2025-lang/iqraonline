"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCode, FaBookOpen } from "react-icons/fa";

const Hero = () => {
  // Mouse Parallax Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [7, -7]);
  const rotateY = useTransform(x, [-100, 100], [-7, 7]);

  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section 
      onMouseMove={handleMouse}
      className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#fafbff] dark:bg-zinc-950 px-6 py-20"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-100/50 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-purple-100 dark:border-zinc-800 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
              Enrolling for 2026 Cohort
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-zinc-950 dark:text-white leading-[1.05] tracking-tight"
          >
            Learn Qur’an with <span className="text-purple-600">Excellence</span> & Build Modern Web
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed"
          >
            A unique fusion of sacred tradition and digital innovation. Master Tajweed, memorization, and Full-Stack development in one unified, empowering journey.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Link href="/classes">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-purple-200/60 dark:shadow-none flex items-center gap-3 group">
                <FaBookOpen />
                Start Learning
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="px-8 py-4 bg-white dark:bg-zinc-900 border-2 border-purple-50 dark:border-zinc-800 text-zinc-950 dark:text-white rounded-2xl font-bold hover:border-purple-200 transition-all flex items-center gap-3 shadow-sm">
                <FaCode />
                View Portfolio
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1200 }}
          className="relative hidden lg:flex justify-center items-center h-[600px]"
        >
          <div className="absolute w-[400px] h-[400px] bg-purple-200/50 dark:bg-purple-900/30 rounded-full blur-[100px] opacity-80" />

          {/* Qur'an Module */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-20 left-10 z-10"
          >
            <div className="relative group p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-purple-100 dark:border-zinc-800 shadow-2xl transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-50 dark:from-purple-900/20 dark:to-zinc-900 rounded-3xl blur-md opacity-60" />
              <div className="relative flex items-center gap-5">
                <div className="w-16 h-16 bg-purple-50 dark:bg-purple-950 rounded-2xl flex items-center justify-center border border-purple-100">
                  <FaBookOpen className="text-purple-600 size-8" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-950 dark:text-white text-sm">Sacred Knowledge</h4>
                  <p className="text-[10px] text-purple-700 dark:text-purple-400 font-mono">Tajweed & Hifdh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SVG Connection */}
          <svg width="400" height="400" className="absolute opacity-40" viewBox="0 0 400 400">
            <path d="M 120 300 Q 200 200, 300 120" stroke="#9333ea" strokeWidth="2" fill="none" strokeDasharray="5,5" />
          </svg>

          {/* Code Module */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute top-10 right-10 z-20"
          >
            <div className="p-1 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700 w-[320px] overflow-hidden">
              <div className="flex gap-1.5 p-3 border-b border-zinc-700 bg-zinc-800/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed text-zinc-300">
                <p><span className="text-purple-400">const</span> Future = () {"=>"} {"{"}</p>
                <p className="ml-4 text-zinc-500">// Connect Wisdom</p>
                <p className="ml-4"><span className="text-indigo-400">build</span>(modernWeb);</p>
                <p>{"}"};</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;