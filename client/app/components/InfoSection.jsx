'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Parent",
    initials: "SA",
    text: "The teachers are incredibly patient with my 7-year-old. He actually looks forward to his Tajweed classes now!"
  },
  {
    name: "Omar Farooq",
    role: "Hifz Student",
    initials: "OF",
    text: "The 1-on-1 attention is exactly what I needed. My memorization pace has doubled since joining."
  },
  {
    name: "Mariam K.",
    role: "Adult Learner",
    initials: "MK",
    text: "As a busy professional, the flexible scheduling is a lifesaver. Highly recommend the Islamic Studies course."
  }
];

const faqs = [
  {
    question: "Do I need any previous knowledge to start?",
    answer: "Not at all! We have courses ranging from absolute beginners (Nazra) to advanced Hifz and Tajweed."
  },
  {
    question: "Are there female teachers available?",
    answer: "Yes, we have a dedicated team of highly qualified female tutors for our sisters and young children."
  },
  {
    question: "What if I miss a scheduled class?",
    answer: "We offer flexible rescheduling. Just let your tutor know 6 hours in advance, and you can make up the class later."
  }
];

const InfoSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section className="py-24 bg-[#FDFCFE]">
      <div className="container mx-auto px-6">
        
        {/* --- Testimonials --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">What Our <span className="text-purple-600">Students Say</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-purple-50 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-purple-100 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{t.name}</h4>
                  <p className="text-xs text-purple-500 font-semibold uppercase">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* --- FAQs --- */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800">Frequently Asked <span className="text-purple-600">Questions</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-purple-100 rounded-2xl overflow-hidden bg-white">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-purple-50 transition-colors"
                >
                  <span className="font-bold text-slate-700">{faq.question}</span>
                  <span className={`text-purple-600 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;