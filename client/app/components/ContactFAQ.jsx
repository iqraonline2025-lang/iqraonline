'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is your web development stack?",
    answer: "I primarily build high-performance applications using Next.js, Tailwind CSS, and Node.js. For databases, I prefer MongoDB or PostgreSQL depending on the project requirements."
  },
  {
    question: "How does the Quranic Investigation service work?",
    answer: "This is a scholarly research service where I provide deep-dive analysis on specific verses or Hadith using classical linguistics and historical context. It is ideal for researchers or those seeking clarify on complex topics."
  },
  {
    question: "Do you offer maintenance for web projects?",
    answer: "Yes, every web project includes a 30-day support period. Longer-term maintenance packages are available to keep your security and dependencies up to date."
  },
  {
    question: "How long does a typical project take?",
    answer: "Web projects usually range from 2 to 6 weeks. Quranic research inquiries are typically delivered within 5-7 business days depending on the depth of the topic."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Common <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-slate-500 mt-4">Everything you need to know about my services and process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border-2 rounded-[1.5rem] transition-all duration-300 ${
                openIndex === index ? 'border-purple-200 bg-purple-50/30' : 'border-slate-50 bg-slate-50/50'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left outline-none"
              >
                <span className="font-bold text-slate-800 tracking-tight">{faq.question}</span>
                <ChevronDown 
                  className={`text-purple-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-purple-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}