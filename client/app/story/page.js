"use client"; // Required for animations

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FullStory() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Purple Glows */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-3xl mx-auto py-20 px-6 relative z-10">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href="/" className="group flex items-center text-purple-600 font-medium mb-12 hover:text-purple-800 transition-colors">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> 
            Back to Home
          </Link>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">Full Story</span>
            </h1>
            <div className="h-1.5 w-24 bg-purple-600 rounded-full"></div>
          </motion.div>

          {/* Content Body */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-light italic border-l-4 border-purple-200 pl-6">
              "It all began in a cramped apartment with three mismatched chairs and 
              a single goal: to make technology feel human again."
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              In our second year, we almost called it quits. The servers were down, 
              the coffee was cold, and the bank account was near zero. But a single 
              email from a customer explaining how our tool saved their family business 
              changed everything. 
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-purple-50 p-8 rounded-3xl border border-purple-100 shadow-sm">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">The Turning Point</h2>
            <p className="text-gray-700 leading-relaxed">
              We realized we weren't just writing code; we were building lifelines. 
              We pivoted our entire strategy to focus on the person behind the screen, 
              not just the data in the database.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
            <p>
              Today, we stand as a leader in the industry, but we still keep those 
              three mismatched chairs in our headquarters. They remind us that 
              great things start small, and empathy is the most powerful tool in our kit.
            </p>
          </motion.div>

          {/* Simple CTA at the end */}
          <motion.div variants={fadeInUp} className="pt-10 flex flex-col items-center">
             <div className="w-full h-px bg-gray-100 mb-10" />
             <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Wanna join us?</p>
             <button className="bg-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-purple-700 hover:shadow-xl transition-all active:scale-95">
               View Open Positions
             </button>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}