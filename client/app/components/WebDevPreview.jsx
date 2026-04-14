"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaCode, FaLightbulb, FaShieldAlt, FaRocket, FaCheckCircle } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiTypescript, SiSupabase } from "react-icons/si";

// Animated Counter Component
const Counter = ({ value, title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const end = parseInt(value);
        const duration = 2000;
        let timer = setInterval(() => {
          start += Math.ceil(end / 100);
          if (start > end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, duration / 100);
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center p-6 bg-white/50 dark:bg-zinc-900/50 rounded-3xl border border-purple-100 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
      <div className="text-4xl font-black text-purple-600 mb-1">{count}+</div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{title}</div>
    </div>
  );
};

const WebDevPreview = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 70, damping: 25 });
  const yPos = useTransform(smoothScroll, [0, 1], [350, -350]);

  const capabilities = [
    {
      title: "UI/UX Architecture",
      desc: "Creating intuitive interfaces that guide users naturally toward your goals.",
      icon: <FaLightbulb />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Full-Stack Systems",
      desc: "Robust backend logic paired with blazing-fast frontend performance.",
      icon: <FaCode />,
      color: "from-indigo-500 to-violet-600"
    },
    {
      title: "Scalable Security",
      desc: "Implementing industry-standard security protocols to protect your data.",
      icon: <FaShieldAlt />,
      color: "from-violet-600 to-purple-700"
    },
    {
      title: "Performance SEO",
      desc: "Optimized code structure to ensure top-tier rankings and instant load times.",
      icon: <FaRocket />,
      color: "from-purple-700 to-fuchsia-600"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-[#fafbff] dark:bg-zinc-950 overflow-hidden">
      
      {/* Background Vertical Parallax Text */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div style={{ y: yPos }} className="flex flex-col items-center opacity-40 dark:opacity-10 space-y-[-3rem]">
          {["DEVELOP", "ENGINEER", "CREATE"].map((word, i) => (
            <span key={i} className="text-[10rem] md:text-[20rem] font-black text-purple-200 uppercase leading-none tracking-tighter">
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Copy & Tech Stack */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest border border-purple-200 dark:border-purple-800">
                Tech Solutions
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Building the <span className="text-purple-600">Digital</span> Standard
            </h2>
            
            <p className="text-slate-600 dark:text-zinc-400 text-lg leading-relaxed mb-10">
              We don't just build websites; we engineer digital ecosystems. Our focus is on clean code, seamless user experiences, and measurable business growth.
            </p>

            <div className="flex flex-wrap gap-8 text-3xl text-slate-400 dark:text-zinc-600 mb-12">
              <SiNextdotjs className="hover:text-black dark:hover:text-white transition-colors" />
              <SiTailwindcss className="hover:text-sky-400 transition-colors" />
              <SiTypescript className="hover:text-blue-600 transition-colors" />
              <SiSupabase className="hover:text-emerald-500 transition-colors" />
              <SiFramer className="hover:text-pink-500 transition-colors" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Counter value="12" title="Years Experience" />
              <Counter value="100" title="Success Rate" />
            </div>
          </div>

          {/* Right Side: Capability Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white dark:border-zinc-800 shadow-xl shadow-purple-100/20 dark:shadow-none transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaCheckCircle size={14} /> <span>Optimized Logic</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDevPreview;