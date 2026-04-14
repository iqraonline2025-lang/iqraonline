"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Hifdh Student",
    content: "The personalized approach to Tajweed here is unmatched. I've seen more progress in 3 months than I did in years of self-study.",
    stars: 5,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "SaaS Founder",
    content: "They didn't just build a website; they built a brand experience. The Next.js performance is incredible and my conversion rates doubled.",
    stars: 5,
  },
  {
    id: 3,
    name: "Omar Farooq",
    role: "Web Dev Student",
    content: "Learning full-stack development alongside Quranic studies was a dream come true. The mentorship is grounded and professional.",
    stars: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-32 bg-[#fafbff] dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
          >
            Voice of Excellence
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
            Trusted by <span className="text-purple-600">Many</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full"
            >
              <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-purple-100 dark:border-zinc-800 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-purple-200/40 dark:shadow-none text-center">
                
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-200">
                    <FaQuoteLeft size={20} />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                  {[...Array(testimonials[index].stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 italic leading-relaxed mb-8">
                  "{testimonials[index].content}"
                </p>

                <div>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm text-purple-600 font-medium">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16">
            <button 
              onClick={prevStep}
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-purple-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-purple-600 hover:border-purple-600 transition-all shadow-md"
            >
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16">
            <button 
              onClick={nextStep}
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-purple-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-purple-600 hover:border-purple-600 transition-all shadow-md"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-purple-600" : "w-2 bg-purple-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;