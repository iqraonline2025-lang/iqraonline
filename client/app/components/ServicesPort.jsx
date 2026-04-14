'use client';
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Full-Stack Development",
    desc: "Building scalable web applications using Next.js, TypeScript, and high-performance databases.",
    icon: "⚡",
    size: "md:col-span-8",
  },
  {
    title: "UI/UX Engineering",
    desc: "Turning complex requirements into intuitive, pixel-perfect digital interfaces.",
    icon: "🎨",
    size: "md:col-span-4",
  },
  {
    title: "E-Commerce",
    desc: "Custom Shopify & Stripe integrations designed for high conversion.",
    icon: "🛍️",
    size: "md:col-span-4",
  },
  {
    title: "Performance Optimization",
    desc: "Turning slow sites into lightning-fast experiences with 100/100 Lighthouse scores.",
    icon: "🚀",
    size: "md:col-span-8",
  }
];

const ServicesPort = () => {
  return (
    /* FIXED: bg-white changed to bg-transparent */
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter">
              Focused <span className="text-purple-600 italic">Capabilities.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs pb-2 border-l-2 border-purple-600 pl-4">
            Custom technical solutions built with modern stacks and precise execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              /* FIXED: bg-slate-50 changed to semi-transparent glass style */
              className={`${service.size} group relative overflow-hidden bg-white/40 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-purple-100/30 transition-all duration-500`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-black mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
                
                {/* Visual Dev Hint */}
                <div className="mt-12 flex gap-2">
                  <div className="h-1 w-12 bg-purple-200 group-hover:bg-purple-600 transition-colors" />
                  <div className="h-1 w-4 bg-slate-200 group-hover:bg-black transition-colors" />
                </div>
              </div>

              {/* Background Glows within the card */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/15 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPort;