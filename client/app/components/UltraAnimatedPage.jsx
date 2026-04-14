'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const UltraAnimatedPage = ({ children }) => {
  const containerRef = useRef(null);
  
  // 1. Capture scroll with a high-tension spring for "snappy" feedback
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // Faster response
    damping: 30,
    restDelta: 0.001
  });

  // 2. Visible "Liquid" Background Elements
  // These move significantly so the scroll feels "evident"
  const bgMoveY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const orbRotation = useTransform(smoothProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="relative bg-[#f8faff] min-h-screen w-full selection:bg-purple-200">
      
      {/* --- HIGH-VISIBILITY BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large, colorful abstract shapes that clearly move when you scroll */}
        <motion.div 
          style={{ y: bgMoveY, rotate: orbRotation }}
          className="absolute -top-[10%] -right-[10%] w-[80vw] h-[80vw] bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-[100px]"
        />
        <motion.div 
          style={{ y: useTransform(smoothProgress, [0, 1], ["0%", "30%"]), rotate: -orbRotation }}
          className="absolute bottom-[-10%] -left-[10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-indigo-100/50 to-pink-100/50 rounded-full blur-[120px]"
        />
        
        {/* Frosted Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-[80px] bg-white/30" />
      </div>

      {/* --- DELIBERATE PROGRESS BAR (Visible at the top) --- */}
      <motion.div 
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 origin-left z-[100] shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
      />

      {/* --- CONTENT WITH "SNAP" ANIMATION --- */}
      <main className="relative z-10 w-full">
        {React.Children.map(children, (child) => (
          <div className="min-h-screen flex items-center justify-center py-20 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              viewport={{ 
                once: false, // Re-animates when scrolling back up
                amount: 0.3  // Triggers when 30% of section is visible
              }}
              transition={{ 
                type: "spring",
                stiffness: 50,
                damping: 15,
                mass: 1
              }}
              className="w-full perspective-1000"
            >
              {child}
            </motion.div>
          </div>
        ))}
      </main>

      {/* --- SCROLL MOUSE ICON (Evident cue) --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-40">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-slate-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default UltraAnimatedPage;