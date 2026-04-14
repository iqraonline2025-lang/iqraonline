'use client';
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: "Verified Ijazah Holders",
    desc: "Our tutors are certified by world-class Islamic institutions like Al-Azhar University.",
    icon: "📜"
  },
  {
    title: "Female Tutors Available",
    desc: "We offer private, comfortable learning environments for sisters and children.",
    icon: "🧕"
  },
  {
    title: "Modern Virtual Portal",
    desc: "Access digital whiteboards, screen sharing, and recorded sessions for revision.",
    icon: "💻"
  },
  {
    title: "Multilingual Support",
    desc: "Classes are available in English, Arabic, and Urdu to suit your preference.",
    icon: "🌍"
  }
];

const WhyChooseUsQuran = () => {
  return (
    <section className="py-24 bg-[#F8F7FF] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] -z-0" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Why Learn <span className="text-purple-600">With Us?</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We combine traditional teaching methods with modern technology to provide the most effective Quranic education online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-6 p-8 bg-white border border-purple-50 rounded-3xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat Bar */}
        <div className="mt-20 py-8 px-12 bg-purple-600 rounded-[2rem] flex flex-wrap justify-center gap-10 md:gap-20 text-white shadow-xl shadow-purple-200">
          <div className="text-center">
            <p className="text-3xl font-black">98%</p>
            <p className="text-purple-100 text-xs uppercase font-bold tracking-widest">Success Rate</p>
          </div>
          <div className="text-center border-x border-purple-400/30 px-10 hidden md:block">
            <p className="text-3xl font-black">24/7</p>
            <p className="text-purple-100 text-xs uppercase font-bold tracking-widest">Support</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">50+</p>
            <p className="text-purple-100 text-xs uppercase font-bold tracking-widest">Expert Tutors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsQuran;