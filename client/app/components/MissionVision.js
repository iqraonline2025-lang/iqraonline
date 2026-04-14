'use client';
import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      label: "The Drive",
      description: "To bridge the gap between complex engineering and human intuition, creating digital tools that feel like second nature.",
      color: "from-purple-600 to-indigo-600",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      title: "Our Vision",
      label: "The Goal",
      description: "To define the next decade of the web where performance isn't a feature, but a fundamental human right for every user.",
      color: "from-fuchsia-600 to-purple-600",
      lightColor: "bg-fuchsia-50",
      textColor: "text-fuchsia-600"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter"
          >
            Why We <span className="text-purple-600 italic font-serif">Exist.</span>
          </motion.h2>
          <div className="w-12 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group cursor-default"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[3rem]`} />
              
              <div className="relative bg-white border border-slate-100 p-12 rounded-[3rem] shadow-sm group-hover:shadow-2xl group-hover:border-purple-100 transition-all duration-500 h-full">
                
                {/* Icon/Label */}
                <div className={`inline-block px-4 py-1 rounded-full ${card.lightColor} ${card.textColor} text-[10px] font-black uppercase tracking-widest mb-6`}>
                  {card.label}
                </div>

                <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {card.description}
                </p>

                {/* Animated Arrow/Indicator */}
                <div className="mt-8 flex items-center gap-2">
                  <div className={`h-1 w-0 group-hover:w-12 transition-all duration-500 bg-gradient-to-r ${card.color} rounded-full`} />
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`${card.textColor} opacity-0 group-hover:opacity-100 transition-opacity font-bold`}
                  >
                    →
                  </motion.span>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${card.color} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-300 font-black text-7xl md:text-9xl uppercase tracking-tighter select-none opacity-20 pointer-events-none">
            Purpose Driven
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;