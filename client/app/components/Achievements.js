'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';

// Individual Counter Logic
const Counter = ({ value, title, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white border border-purple-50 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-purple-100 transition-all duration-500 group">
      <div className="text-5xl md:text-6xl font-black text-slate-900 mb-2 flex items-center">
        <span ref={ref}>0</span>
        <span className="text-purple-600">{suffix}</span>
      </div>
      <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs group-hover:text-purple-600 transition-colors">
        {title}
      </p>
    </div>
  );
};

export default function Achievements() {
  const stats = [
    { value: 150, title: "Projects Completed", suffix: "+" },
    { value: 12, title: "Industry Awards", suffix: "" },
    { value: 500, title: "Happy Clients", suffix: "k" },
    { value: 99, title: "Success Rate", suffix: "%" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-50/50 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Counter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}