"use client";

import { motion } from "framer-motion";
import { FaRocket, FaStore, FaBriefcase, FaSyncAlt, FaCheck } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiTypescript, SiVercel } from "react-icons/si";

const services = [
  {
    title: "Landing Pages",
    desc: "High-conversion single-page sites designed to capture leads and turn visitors into customers.",
    features: ["A/B Testing Ready", "Call-to-Action Focus", "Ultra-Lightweight"],
    ideal: "Product Launches & Marketing Campaigns",
    icon: <FaRocket />,
    glow: "group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
  },
  {
    title: "Business Websites",
    desc: "Professional, scalable websites that establish your brand authority and tell your story.",
    features: ["CMS Integration", "Service Showcases", "Contact Systems"],
    ideal: "Service Providers & Corporate Agencies",
    icon: <FaBriefcase />,
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
  },
  {
    title: "E-commerce Stores",
    desc: "Robust online shops built for speed, security, and a seamless shopping experience.",
    features: ["Secure Payments", "Inventory Management", "User Accounts"],
    ideal: "Retailers & Digital Product Sellers",
    icon: <FaStore />,
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
  },
  {
    title: "Website Redesign",
    desc: "Modernizing your outdated site with better UX, faster speeds, and a fresh look.",
    features: ["Performance Audit", "Mobile Optimization", "SEO Migration"],
    ideal: "Businesses with slow or outdated sites",
    icon: <FaSyncAlt />,
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.5)]"
  }
];

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Vercel", icon: <SiVercel /> },
];

export default function WebDevelopmentDetailed() {
  return (
    <section id="web" className="py-24 bg-[#0a0a0b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Cutting-Edge Web Solutions</h2>
          <p className="text-slate-400 max-w-2xl text-lg">We build digital experiences that are fast, secure, and visually stunning using the world's most advanced technologies.</p>
        </div>

        {/* 1. Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 transition-all duration-500 ${service.glow}`}
            >
              <div className="text-3xl text-violet-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <div className="w-1 h-1 bg-violet-500 rounded-full" /> {feat}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-800">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-bold">Ideal For</p>
                <p className="text-xs text-violet-400 font-semibold">{service.ideal}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Technologies Horizontal Scroll */}
        <div className="mb-32">
          <p className="text-center text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold mb-12">Our Tech Stack</p>
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 text-3xl md:text-5xl text-zinc-700 hover:text-white transition-colors cursor-default transition-transform hover:scale-110">
                  {tech.icon}
                  <span className="text-lg md:text-xl font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. What You Get Checklist */}
        <div className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-zinc-800">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Fully Responsive", desc: "Flawless on mobile, tablet, and desktop." },
              { title: "Fast Loading", desc: "Optimized Core Web Vitals for speed." },
              { title: "SEO Optimized", desc: "Built to rank on search engines." },
              { title: "Modern UI/UX", desc: "Intuitive designs that engage users." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-500 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all">
                  <FaCheck className="text-violet-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind Marquee Keyframes (Add to your global CSS if not present) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}