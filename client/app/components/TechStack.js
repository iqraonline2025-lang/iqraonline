'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "AWS", "Vercel", "Git/GitHub"] },
  { category: "Design", items: ["Figma", "UI/UX", "Responsive Design"] }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <p className="text-purple-600 font-bold text-xs uppercase tracking-[0.3em] mb-2">Capabilities</p>
            <h2 className="text-5xl font-black text-slate-900 tracking-tight italic">
              TECH_ENGINE<span className="text-slate-300">.v2</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-medium leading-relaxed">
            A specialized toolkit focused on building high-performance, 
            scalable web architectures and immersive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#FBFAFF] border border-slate-100 rounded-2xl hover:border-purple-200 transition-colors group"
            >
              <h3 className="text-slate-900 font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="text-slate-500 text-sm font-medium flex items-center justify-between">
                    {item}
                    <span className="text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">READY</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}