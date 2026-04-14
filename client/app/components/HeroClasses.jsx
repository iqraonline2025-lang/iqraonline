import React from 'react';
// 1. Change this import
import Link from 'next/link';

const HeroClasses = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#F8F7FF] overflow-hidden">
      
      {/* 1. Pure CSS/SVG Background (No Image Files) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent" />
        
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30-15 30L15 30z' fill='%236D28D9' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-purple-50/80 to-transparent" />
      </div>

      {/* 2. Content Container */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        
        <div className="mb-6 px-5 py-2 bg-white border border-purple-100 rounded-full shadow-sm">
          <span className="text-purple-600 text-sm font-medium tracking-wide">
            ✨ Premium 1-on-1 Quranic Learning
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
          Learn Qur’an Online with <br />
          <span className="text-purple-600">Expert Teachers</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Experience a personalized journey through Tajweed and Hifz. 
          Our certified tutors provide a calm, supportive environment for all ages.
        </p>

        {/* 2. Use 'href' instead of 'to' */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            href="/contact" 
            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-200 active:scale-95 text-center"
          >
            Book a Free Trial
          </Link>
        </div>

        {/* Feature Icons */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-purple-600 rounded-full" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-800">Ijazah Certified</p>
              <p className="text-xs text-slate-500">Qualified Tutors</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <div className="w-5 h-2 bg-purple-600 rounded-full" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-800">Flexible Hours</p>
              <p className="text-xs text-slate-500">24/7 Scheduling</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-200 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-indigo-200 rounded-full blur-[120px] opacity-40" />
    </section>
  );
};

export default HeroClasses;