'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most landing pages are delivered within 2 weeks. Full-scale applications and e-commerce platforms typically range from 4 to 8 weeks depending on complexity."
  },
  {
    question: "What tech stack do you use?",
    answer: "I specialize in the 'Bleeding Edge'—Next.js 15, TypeScript, Tailwind CSS, and Framer Motion for the frontend, with Supabase or PostgreSQL for the backend."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes. Every project includes 30 days of priority support. I also offer monthly maintenance packages to keep your site fast, secure, and updated."
  },
  {
    question: "Can you help with SEO and Performance?",
    answer: "Absolutely. I build with a 'Performance First' mindset, aiming for 100/100 Lighthouse scores and structured data for optimal Google ranking."
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={toggle}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-black transition-colors duration-300 ${isOpen ? 'text-purple-600' : 'text-black group-hover:text-purple-600'}`}>
          {faq.question}
        </span>
        
        {/* Animated Plus/Minus Icon */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div className="absolute w-full h-[2px] bg-black group-hover:bg-purple-600 transition-colors" />
          <motion.div 
            animate={{ rotate: isOpen ? 0 : 90 }}
            className="absolute w-full h-[2px] bg-black group-hover:bg-purple-600 transition-colors"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12">
              <p className="text-slate-500 text-lg leading-relaxed max-w-3xl font-medium">
                {faq.answer}
              </p>
              
              {/* Subtle Decorative Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                className="h-1 bg-purple-600 mt-6"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQWeb = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default for "life"

  return (
    <section className="py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Static Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-purple-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Support</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none mb-6">
                Common <br />
                <span className="text-purple-600 italic">Queries.</span>
              </h2>
              <p className="text-slate-500 font-medium">
                Everything you need to know about the process, tech, and delivery.
              </p>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem 
                  key={index} 
                  faq={faq} 
                  isOpen={openIndex === index} 
                  toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-black leading-none">HELP</h2>
      </div>
    </section>
  );
};

export default FAQWeb;