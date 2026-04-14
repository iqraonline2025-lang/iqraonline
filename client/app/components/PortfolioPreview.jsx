'use client';
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const projects = [
  {
    tag: "Next.js + Tailwind",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    tag: "React + Framer Motion",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1470&auto=format&fit=crop"
  },
  {
    tag: "TypeScript + Stripe",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1470&auto=format&fit=crop"
  },
  {
    tag: "Node.js + PostgreSQL",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop"
  }
];

const PortfolioPreview = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Start the track slightly more to the right and move it further left
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Minimalist Watermark - Moved lower to stay behind cards */}
        <div className="absolute bottom-10 left-10 opacity-[0.02] select-none">
          <h2 className="text-[25vw] font-black leading-none text-black">DEV</h2>
        </div>

        {/* --- Header: Moved further up ('top-12') and away --- */}
        <div className="container mx-auto px-6 absolute top-12 md:top-16 z-20">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
             >
                <h2 className="text-4xl md:text-7xl font-black text-black tracking-tighter">
                    Recent <span className="text-purple-600 italic">Builds</span>
                </h2>
                {/* Visual spacer line */}
                <div className="w-24 h-1 bg-purple-600 rounded-full" />
             </motion.div>
        </div>

        {/* --- Horizontal Track: Added 'mt-24' to push it away from the header --- */}
        <motion.div style={{ x }} className="flex gap-10 mt-24 md:mt-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-[400px] w-[320px] md:h-[500px] md:w-[700px] flex-shrink-0 overflow-hidden rounded-[2.5rem] bg-slate-100 border border-slate-200 transition-all shadow-sm"
            >
              {/* Full Bleed Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt="Web Development Work"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Minimalist Tech Tag */}
              <div className="absolute bottom-10 left-10 z-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex flex-col gap-2">
                    <span className="text-purple-400 text-[10px] font-black tracking-widest uppercase">Tech Stack</span>
                    <span className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-xs font-bold text-white">
                    {project.tag}
                    </span>
                </div>
              </div>

              {/* Corner Icon */}
              <div className="absolute top-10 right-10 z-10 opacity-0 group-hover:opacity-100 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-black shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <span className="font-bold text-2xl text-purple-600">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;