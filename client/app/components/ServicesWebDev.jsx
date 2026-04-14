'use client';
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Landing Pages",
    description: "High-performance conversion engines designed to turn traffic into leads. Perfect for product launches.",
    tag: "High Conversion"
  },
  {
    title: "Business Websites",
    description: "Secure, scalable digital presences that build credibility and showcase your brand to the world.",
    tag: "Corporate Scale"
  },
  {
    title: "E-commerce",
    description: "Full-stack online stores with seamless shopping experiences and robust backend management.",
    tag: "Revenue Focus"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80 } 
  },
};

const ServicesWebDev = () => {
  return (
    /* FIXED: Changed bg-white to bg-transparent */
    <section className="py-24 bg-transparent relative overflow-hidden">
      
      {/* FIXED: Removed the solid slate-50 background div that was blocking the parallax */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full blur-[120px] opacity-30 -z-10" />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-600 font-black tracking-widest text-[10px] uppercase bg-purple-50 px-3 py-1 rounded-md"
          >
            Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-black mt-4 leading-tight tracking-tighter"
          >
            Digital Solutions <br /> 
            <span className="text-purple-600 italic">Built for Growth.</span>
          </motion.h2>
        </div>

        {/* 2. Grid with Slide-in Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0px 20px 40px rgba(147, 51, 234, 0.12)" 
              }}
              /* NOTE: Cards stay white so they are readable, but the space BETWEEN them is transparent */
              className="group bg-white border border-slate-100 p-10 rounded-[2.5rem] flex flex-col h-full transition-all cursor-default relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-black/[0.01] rounded-bl-full transition-all group-hover:bg-purple-600/[0.03]" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-4 block">
                  {service.tag}
                </span>
                
                <h3 className="text-2xl font-black text-black mb-4 group-hover:text-purple-600 transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-sm mb-8 font-medium">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 flex items-center gap-2 text-black font-black group-hover:text-purple-600 transition-all text-sm uppercase tracking-wider">
                  Get Started 
                  <span className="w-8 h-[2px] bg-black group-hover:bg-purple-600 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Bottom Tech Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl px-8 py-6 flex flex-wrap items-center justify-between gap-6 border border-white/20">
            <p className="text-black font-black tracking-tight">Have a custom requirement?</p>
            <button className="px-8 py-3 bg-purple-600 text-white font-black rounded-xl hover:bg-black transition-all shadow-xl shadow-purple-200/50 uppercase text-xs tracking-widest">
              Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesWebDev;