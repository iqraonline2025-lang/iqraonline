'use client';
import React from 'react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    label: "Email",
    value: "iqraonline2025@gmail.com",
    sub: "Response within 24h",
    icon: "✉️",
    link: "mailto:iqraonline2025@gmail.com"
  },
  {
    label: "WhatsApp",
    value: "+44 7303 179101",
    sub: "Available for quick chats",
    icon: "💬",
    link: "https://wa.me/+447303179101"
  },
  {
    label: "Location",
    value: "London / Remote",
    sub: "Operating Worldwide",
    icon: "📍",
    link: "#"
  }
];

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[2.5rem] bg-slate-50 border border-purple-50 hover:bg-white hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-2xl bg-white border border-purple-100 flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* Text Content */}
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 mb-2">
                {item.label}
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                {item.value}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                {item.sub}
              </p>

              {/* Decorative Corner Arrow */}
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-purple-600 stroke-2">
                  <path d="M5 15L15 5M15 5H7M15 5V13" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;