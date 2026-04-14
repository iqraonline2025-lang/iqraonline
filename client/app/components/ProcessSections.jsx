'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
  {
    title: "Research",
    desc: "We dive deep into your industry, competitors, and target audience to build a data-driven strategy.",
    icon: "🔍"
  },
  {
    title: "Design",
    desc: "Creating high-fidelity wireframes and stunning visual interfaces tailored to your brand identity.",
    icon: "🎨"
  },
  {
    title: "Development",
    desc: "Bringing designs to life with clean code, responsive layouts, and lightning-fast performance.",
    icon: "⚙️"
  },
  {
    title: "Launch",
    desc: "Rigorous testing followed by a seamless deployment to your live domain and global scaling.",
    icon: "🚀"
  }
];

const ProcessSections = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    /* FIXED: Changed bg-white to bg-transparent */
    <section ref={containerRef} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20 relative z-20">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tighter">
            Our <span className="text-purple-600 italic">Workflow</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            From initial concept to final deployment, we follow a precise 4-step 
            process to ensure your project's success.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* 1. The Background Static Line - Reduced opacity to look better on transparent */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/50 -translate-x-1/2" />

          {/* 2. The Growing Purple Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-purple-600 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(147,51,234,0.3)]"
          />

          {/* 3. The Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center">
                
                {/* Dot on the line */}
                <motion.div 
                  initial={{ backgroundColor: "#e2e8f0" }}
                  whileInView={{ backgroundColor: "#9333ea", scale: 1.2 }}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md -translate-x-1/2 z-20"
                />

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:ml-auto md:pl-20'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    /* FIXED: bg-white/80 and backdrop-blur-md for premium "glass" feel over parallax background */
                    className="p-8 bg-white/80 backdrop-blur-md border border-slate-100/50 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-purple-100/50 transition-all group"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-black text-black mb-3 group-hover:text-purple-600 transition-colors tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSections;