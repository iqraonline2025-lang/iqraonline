"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaUserPlus, FaCalendarCheck, FaBookReader, FaComments, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const quranSteps = [
  { title: "Register", desc: "Fill out the simple form to get started.", icon: <FaUserPlus /> },
  { title: "Free Trial", desc: "Take 3 days of trial classes with no commitment.", icon: <FaCalendarCheck /> },
  { title: "Start Classes", desc: "Begin your journey with your assigned tutor.", icon: <FaBookReader /> },
];

const webSteps = [
  { title: "Consultation", desc: "Discuss your goals and project requirements.", icon: <FaComments /> },
  { title: "Design", desc: "We create a custom UI/UX mockup for your brand.", icon: <FaPencilRuler /> },
  { title: "Development", desc: "Building your site with clean, modern code.", icon: <FaCode /> },
  { title: "Delivery", desc: "Your site goes live after rigorous testing.", icon: <FaRocket /> },
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-500">A seamless process designed for your convenience.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          
          {/* Central Vertical Line (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-violet-500 to-emerald-500"
            />
          </div>

          {/* Track 1: Quran */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-emerald-600 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-sm">📖</span>
              Qur’an Journey
            </h3>
            {quranSteps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} color="emerald" />
            ))}
          </div>

          {/* Track 2: Web Dev */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-violet-600 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-sm">💻</span>
              Development Cycle
            </h3>
            {webSteps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} color="violet" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, color }) {
  const colorMap = {
    emerald: "bg-emerald-500 shadow-emerald-200 text-emerald-500",
    violet: "bg-violet-500 shadow-violet-200 text-violet-500"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: color === 'emerald' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="flex gap-6 relative"
    >
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white border-2 border-slate-100 shadow-lg text-xl z-10`}>
        <span className={colorMap[color].split(' ')[2]}>{step.icon}</span>
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
      </div>
    </motion.div>
  );
}