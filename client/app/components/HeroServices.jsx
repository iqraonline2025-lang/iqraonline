"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBookOpen, FaLaptopCode } from "react-icons/fa";

const HeroServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafbff] py-20 px-6">
      
      {/* 1. Animated Background */}
      <motion.div 
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 z-0"
      />

      {/* 2. Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.svg
          animate={{ y: [0, -40, 0], rotate: [0, 45, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-[10%] w-32 h-32 text-purple-300"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>

        <motion.div
          animate={{ y: [0, 50, 0], x: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-40 right-[15%] w-48 h-48 border border-purple-200 rounded-full flex items-center justify-center"
        >
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
          <div className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-purple-200 to-transparent" />
        </motion.div>
      </div>

      {/* 3. Main Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="px-5 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-black uppercase tracking-[0.3em]">
            Global Expertise
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 leading-[1.05] tracking-tight mb-8"
        >
          Our Services – <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            Excellence
          </span> in Learning
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We provide professional Qur’an education and modern web development 
          services worldwide, bridging the gap between spiritual growth and digital innovation.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="#quran">
            <button className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold transition-all hover:bg-purple-600 hover:scale-105 active:scale-95">
              <FaBookOpen className="text-purple-400 group-hover:text-white" />
              Explore Qur’an Classes
            </button>
          </Link>

          <Link href="#web">
            <button className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-purple-100 text-zinc-900 rounded-2xl font-bold transition-all hover:border-purple-600 hover:scale-105 active:scale-95 shadow-sm">
              <FaLaptopCode className="text-purple-600" />
              Explore Web Services
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroServices;