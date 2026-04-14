"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaLaptopCode, FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: "quran",
    title: "Qur’an Services",
    desc: "Professional online Qur’an education specializing in Tajweed, Hifz, and Arabic for all ages.",
    icon: <FaBookOpen className="text-4xl" />,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-200",
    border: "group-hover:border-emerald-500",
    direction: -100, // Slide from left
  },
  {
    id: "web",
    title: "Web Development",
    desc: "Modern digital solutions including landing pages, full-stack apps, and custom UI/UX designs.",
    icon: <FaLaptopCode className="text-4xl" />,
    color: "from-violet-600 to-indigo-600",
    shadow: "shadow-violet-200",
    border: "group-hover:border-violet-600",
    direction: 100, // Slide from right
  },
];

export default function ServicesOverview() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ x: service.direction, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={() => scrollToSection(service.id)}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: service.direction > 0 ? -5 : 5 }}
                className={`relative h-full p-8 md:p-12 rounded-[2.5rem] bg-white border-2 border-slate-100 transition-all duration-500 ${service.border} hover:shadow-2xl ${service.shadow}/40`}
              >
                {/* Glow Background Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-[2.5rem] transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                    Explore Details 
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}