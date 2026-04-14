"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaClock, FaChartLine, FaCheckCircle } from "react-icons/fa";

const courses = [
  {
    title: "Nazra Qur’an",
    desc: "Focus on reading the Qur’an fluently with basic rules of pronunciation.",
    level: "Beginner",
    duration: "3-6 Months",
    benefits: ["Fluent Reading", "Basic Duas"],
    color: "emerald"
  },
  {
    title: "Tajweed Course",
    desc: "Master the art of recitation with detailed rules of Makharij and Sifaat.",
    level: "Intermediate",
    duration: "4 Months",
    benefits: ["Perfect Accent", "Melodious Voice"],
    color: "blue"
  },
  {
    title: "Hifz Program",
    desc: "Customized memorization plans with a focus on retention and review.",
    level: "Advanced",
    duration: "Flexible",
    benefits: ["Ijazah Track", "Review System"],
    color: "purple"
  },
  {
    title: "Kids Special",
    desc: "Fun and engaging classes designed specifically for younger learners.",
    level: "Beginner",
    duration: "Long-term",
    benefits: ["Gamified Learning", "Islamic Etiquettes"],
    color: "amber"
  }
];

export default function QuranDetailed() {
  return (
    <section id="quran" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Qur’an Courses</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">High-quality spiritual education tailored to your pace and level.</p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`mb-6 inline-flex p-3 rounded-2xl bg-${course.color}-50 text-${course.color}-600`}>
                <FaGraduationCap className="text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{course.desc}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <FaChartLine /> {course.level}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <FaClock /> {course.duration}
                </div>
              </div>

              <ul className="space-y-2 mb-8">
                {course.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <FaCheckCircle className={`text-${course.color}-500 text-xs`} /> {b}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-violet-600 transition-colors">
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>

        {/* 2. Teaching Features & Who Can Join Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Features Grid */}
          <div>
            <h3 className="text-3xl font-black mb-8">Why Learn With Us?</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Male & Female Teachers", icon: "👩‍🏫" },
                { label: "One-on-One Classes", icon: "🎯" },
                { label: "Flexible Timing", icon: "⏰" },
                { label: "Progress Reports", icon: "📊" },
              ].map((feat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-2xl border border-slate-100 flex flex-col items-center text-center group"
                >
                  <span className="text-4xl mb-4 group-hover:animate-bounce">{feat.icon}</span>
                  <span className="font-bold text-slate-800">{feat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Who Can Join */}
          <div className="bg-violet-600 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">Who Can Join?</h3>
              <p className="mb-8 opacity-90">We welcome students from all walks of life, regardless of their current level.</p>
              <div className="grid grid-cols-2 gap-4">
                {["Kids", "Adults", "Beginners", "Reverts"].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl font-bold text-center"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* 3. Benefits Section */}
        <div className="mt-24 pt-24 border-t border-slate-200">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Correct Pronunciation", desc: "Learn to recite with precise articulation (Makharij)." },
              { title: "Memorization Support", desc: "Scientific methods to help you retain the Qur’an for life." },
              { title: "Islamic Understanding", desc: "Go beyond reading; understand the context and wisdom." },
            ].map((benefit, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div 
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   transition={{ type: "spring", stiffness: 200, delay: i * 0.2 }}
                   className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6"
                >
                  <FaCheckCircle className="text-2xl" />
                </motion.div>
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}