"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaTag, FaGlobeAmericas, FaHeadset } from "react-icons/fa";

const reasons = [
  {
    title: "Experienced Experts",
    desc: "Qualified scholars for Qur’an and senior developers for digital builds.",
    icon: <FaUserTie />,
    color: "from-blue-400 to-indigo-600",
    glow: "group-hover:shadow-blue-500/50",
  },
  {
    title: "Affordable Pricing",
    desc: "High-end quality scaled to fit your budget with transparent pricing.",
    icon: <FaTag />,
    color: "from-emerald-400 to-teal-600",
    glow: "group-hover:shadow-emerald-500/50",
  },
  {
    title: "Global Presence",
    desc: "Serving thousands of students and businesses across 4 continents.",
    icon: <FaGlobeAmericas />,
    color: "from-violet-400 to-purple-600",
    glow: "group-hover:shadow-violet-500/50",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock assistance for all your technical and scheduling needs.",
    icon: <FaHeadset />,
    color: "from-rose-400 to-orange-600",
    glow: "group-hover:shadow-rose-500/50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-violet-50 border border-violet-100"
          >
            <span className="text-violet-600 font-bold tracking-widest uppercase text-[10px]">
              The Advantage
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[320px] perspective-1000"
            >
              {/* Animated Glowing Background (Behind Card) */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${reason.color} rounded-[2rem] opacity-0 group-hover:opacity-100 blur transition duration-500 ${reason.glow}`} />

              {/* Main Card */}
              <div className="relative h-full bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center border border-slate-100 leading-none">
                
                {/* Icon Circle with Glass effect */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white text-3xl mb-8 shadow-xl transform group-hover:rotate-[10deg] transition-transform duration-500`}>
                  {reason.icon}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-violet-600 transition-colors">
                  {reason.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {reason.desc}
                </p>

                {/* Decorative Dots */}
                <div className="absolute bottom-6 flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <div className={`w-6 h-1.5 rounded-full bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}