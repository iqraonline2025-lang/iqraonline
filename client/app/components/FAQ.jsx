'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How long does a typical project take?",
    answer: "Most high-performance web projects take between 4 to 8 weeks from the initial architectural phase to final deployment. We prioritize velocity without sacrificing code integrity."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We don't just 'hand over the keys.' We offer maintenance packages that include 2026-standard security updates, performance monitoring, and iterative scaling."
  },
  {
    question: "What is your tech stack of choice?",
    answer: "We specialize in the modern frontier: Next.js, JavaScript (Node.js), Tailwind CSS, and Framer Motion. We build for speed, SEO, and avant-garde aesthetics."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Yes. We often act as a 'specialized strike team,' integrating with your internal developers to solve complex architectural problems or lead a design overhaul."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-purple-50 transition-all duration-300 ${isOpen ? 'bg-purple-50/30' : ''}`}>
      <button
        className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-purple-600' : 'text-slate-900'}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className={`text-2xl font-light ${isOpen ? 'text-purple-600' : 'text-slate-400'}`}
        >
          +
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-600 leading-relaxed max-w-2xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative">
      {/* Subtle Background Mark */}
      <div className="absolute top-10 right-10 text-slate-50 text-9xl font-black select-none pointer-events-none">
        FAQ
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
              Common <span className="text-purple-600 italic">Inquiries.</span>
            </h2>
            <p className="text-slate-500 font-medium">Everything you need to know before we start building.</p>
          </div>

          <div className="border-t border-purple-100">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}