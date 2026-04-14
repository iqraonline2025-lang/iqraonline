"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "How do online Qur’an classes work?",
    answer: "Classes are conducted via Zoom or Google Meet. Once you register, we assign a dedicated tutor who works with you one-on-one. You'll have a shared screen to view the digital Qur'an and Tajweed rules in real-time.",
    category: "Quran"
  },
  {
    question: "What tools are used for classes?",
    answer: "We primarily use Zoom for high-quality audio/video. For children, we use interactive whiteboards and educational games to keep them engaged with their lessons.",
    category: "Quran"
  },
  {
    question: "How long does a website take to build?",
    answer: "A standard landing page takes 5-7 days, while a full business website or E-commerce store typically takes 2-4 weeks depending on the complexity and features required.",
    category: "Web Dev"
  },
  {
    question: "Do you provide revisions for web projects?",
    answer: "Absolutely! We offer unlimited revisions during the design phase and up to 3 rounds of major adjustments after development to ensure the final product perfectly matches your vision.",
    category: "Web Dev"
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
          <p className="text-slate-500">Everything you need to know about our services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={false}
              className={`border rounded-3xl overflow-hidden transition-colors duration-300 ${
                activeIndex === i ? "border-violet-500 bg-violet-50/30" : "border-slate-100 bg-white"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${activeIndex === i ? "text-violet-600" : "text-slate-900"}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`text-2xl ${activeIndex === i ? "text-violet-600" : "text-slate-400"}`}
                >
                  <HiChevronDown />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-violet-100 pt-4 mt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-violet-100 text-violet-600">
                          {faq.category}
                        </span>
                      </div>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}