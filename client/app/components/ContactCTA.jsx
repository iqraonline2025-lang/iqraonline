'use client';
import React from 'react';
import { Send, Zap, ShieldCheck } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl shadow-purple-200">
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to start your <br /> next <span className="text-purple-200">big chapter?</span>
          </h2>
          
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether it's building a world-class web platform or conducting rigorous 
            scriptural investigation, I'm ready to dive in.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <Zap size={18} className="text-purple-300" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <ShieldCheck size={18} className="text-purple-300" />
              <span>Secure Data</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <Send size={18} className="text-purple-300" />
              <span>Global Reach</span>
            </div>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-4 bg-white text-purple-700 font-bold rounded-2xl hover:bg-purple-50 transition-all active:scale-95 shadow-lg"
          >
            Back to Top
          </button>
        </div>
      </div>

      <footer className="mt-20 text-center space-y-4">
        <p className="text-slate-400 text-sm tracking-widest font-bold uppercase">
          © {new Date().getFullYear()} Studio Name
        </p>
        <div className="flex justify-center gap-6 text-slate-400">
          <a href="#" className="hover:text-purple-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-purple-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-purple-600 transition-colors">GitHub</a>
        </div>
      </footer>
    </section>
  );
}