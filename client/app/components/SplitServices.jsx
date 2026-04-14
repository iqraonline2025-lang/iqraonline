"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBookOpen, FaCode, FaArrowRight } from "react-icons/fa";

const SplitServices = () => {
  return (
    <section className="py-24 px-6 bg-[#fcfaff] dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4">
            Our Core <span className="text-purple-600">Specialties</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Whether you are seeking spiritual growth or professional digital skills, 
            we provide expert-led paths tailored for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Qur'an Classes (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)"
            }}
            className="relative group overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-purple-100 dark:border-zinc-800 p-8 md:p-12"
          >
            {/* Background Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-purple-50 dark:bg-purple-950 rounded-2xl flex items-center justify-center mb-8 border border-purple-100 dark:border-zinc-800 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                <FaBookOpen className="size-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Qur’an Classes
              </h3>
              
              <p className="text-slate-600 dark:text-zinc-400 mb-8 leading-relaxed">
                Master Tajweed, improve your recitation, or embark on a Hifdh journey 
                with certified tutors. Flexible schedules for all ages and skill levels.
              </p>

              <ul className="space-y-3 mb-10 text-sm text-slate-500 dark:text-zinc-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Professional Tajweed Rules
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> 1-on-1 Focused Sessions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Progress Tracking Reports
                </li>
              </ul>

              <div className="mt-auto">
                <Link href="/classes" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-4 transition-all">
                  Explore Classes <FaArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Web Development (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(79, 70, 229, 0.15)"
            }}
            className="relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 p-8 md:p-12 text-white"
          >
            {/* Background Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 border border-zinc-700 transition-colors group-hover:bg-indigo-600">
                <FaCode className="size-8 text-indigo-400 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                Web Development
              </h3>
              
              <p className="text-zinc-400 mb-8 leading-relaxed">
                From landing pages to complex web applications. We build fast, 
                secure, and scalable solutions using the latest Next.js and Tailwind technologies.
              </p>

              <ul className="space-y-3 mb-10 text-sm text-zinc-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Full-Stack Next.js Apps
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> UI/UX Focused Design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> SEO & Performance Opt.
                </li>
              </ul>

              <div className="mt-auto">
                <Link href="/portfolio" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:gap-4 transition-all">
                  View Our Work <FaArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SplitServices;