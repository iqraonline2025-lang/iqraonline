'use client';
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { code: "01", title: "INITIAL_SCAN", desc: "Analyzing project requirements and architectural constraints." },
  { code: "02", title: "PROTOTYPE_BUILD", desc: "Drafting high-fidelity UI systems and interactive wireframes." },
  { code: "03", title: "CORE_DEVELOPMENT", desc: "Engineering scalable backend logic and responsive frontend components." },
  { code: "04", title: "SYSTEM_DEPLOY", desc: "Optimizing assets and pushing to production-grade environments." }
];

export default function Workflow() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <p className="text-purple-600 font-bold text-xs uppercase tracking-[0.3em] mb-2">The Process</p>
          <h2 className="text-5xl font-black text-slate-900 tracking-tight italic">
            DEVELOPMENT_CYCLE<span className="text-slate-300">.exe</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.code}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-8 bg-[#FBFAFF] border border-slate-100 rounded-xl hover:bg-slate-900 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="text-sm font-mono text-purple-600 group-hover:text-purple-400 font-bold">
                  [{step.code}]
                </span>
                <div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Animated "Loading" bar that appears on hover */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-purple-500 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}