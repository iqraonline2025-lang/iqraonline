"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link"; // Added Link import
import { FaQuran, FaMicrophone, FaStarAndCrescent, FaChild, FaChevronRight } from "react-icons/fa";

const courses = [
  {
    title: "Nazra",
    desc: "Focus on fluid recitation and recognizing Arabic alphabets with ease.",
    icon: <FaQuran />,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Tajweed",
    desc: "Master the intricate rules of pronunciation and melodic recitation.",
    icon: <FaMicrophone />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Hifz",
    desc: "A dedicated path for those looking to memorize the Divine Book.",
    icon: <FaStarAndCrescent />,
    color: "from-indigo-600 to-violet-700",
  },
  {
    title: "Kids Course",
    desc: "Interactive, fun, and simplified learning for the younger generation.",
    icon: <FaChild />,
    color: "from-violet-700 to-fuchsia-600",
  },
];

const QuranPreview = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const yPos = useTransform(smoothScroll, [0, 1], [400, -400]);

  return (
    <section 
      ref={containerRef}
      className="relative py-40 bg-[#f8f9ff] dark:bg-zinc-950 overflow-hidden"
    >
      {/* Moving Background Text */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div style={{ y: yPos }} className="flex flex-col items-center select-none space-y-[-2rem]">
          {["WISDOM", "SACRED", "PURE"].map((word, i) => (
            <span 
              key={i} 
              className="text-[14rem] md:text-[24rem] font-black text-purple-100/40 dark:text-purple-900/10 leading-none tracking-tighter"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Spiritual Excellence
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-white tracking-tight">
            Our <span className="text-purple-600">Courses</span>
          </h2>
        </div>

        {/* Improved Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Body */}
              <div className="relative h-full p-8 rounded-[2.5rem] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-purple-200/50 dark:hover:shadow-none transition-all duration-500 overflow-hidden group-hover:-translate-y-3">
                
                {/* Top Corner Glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl group-hover:bg-purple-400/30 transition-colors" />

                {/* Floating Icon UI */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-2xl mb-10 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {course.icon}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${course.color} blur-xl opacity-40 -z-10`} />
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                  {course.title}
                </h3>
                
                <p className="text-[15px] text-slate-500 dark:text-zinc-400 leading-relaxed mb-10 min-h-[80px]">
                  {course.desc}
                </p>

                {/* Redirect Link Wrapper */}
                <Link href="/contact" className="flex items-center justify-between group/cta">
                  <span className="text-sm font-bold text-purple-600 dark:text-purple-400 group-hover/cta:underline decoration-2 underline-offset-4 cursor-pointer">
                    Enroll Now
                  </span>
                  <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-300">
                    <FaChevronRight size={12} />
                  </div>
                </Link>
              </div>

              {/* Bottom Decorative Card Stack Effect */}
              <div className="absolute inset-0 bg-purple-600/5 dark:bg-purple-600/10 rounded-[2.5rem] translate-y-3 translate-x-2 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuranPreview;