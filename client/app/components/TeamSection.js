'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: "Alex Rivers",
    role: "Digital Architect",
    bio: "Obsessed with clean lines and efficient logic. Alex leads our technical strategy with a focus on high-performance architecture.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Jordan Lee",
    role: "Creative Director",
    bio: "Bridging the gap between avant-garde design and user functionality. Jordan ensures every pixel serves a purpose.",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "Sam Chen",
    role: "Lead Engineer",
    bio: "Turning vision into velocity with cutting-edge code. Sam specializes in scalable systems and ultra-fast interfaces.",
    color: "from-indigo-600 to-purple-700",
  }
];

const TeamMember = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[480px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* FRONT SIDE: The "Sleek Minimalist" Look */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-[3rem] bg-white border border-purple-50 shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col p-4">
          
          {/* Top Visual Area (Abstract & Clean) */}
          <div className="relative h-4/5 w-full rounded-[2.5rem] bg-slate-50 overflow-hidden flex items-center justify-center">
             {/* Layered Decorative Glows */}
             <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-[70px] bg-gradient-to-br ${member.color} opacity-20`} />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-purple-100 rounded-full opacity-50" />
             
             {/* Initials with Inner Glow */}
             <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${member.color} shadow-lg shadow-purple-200 flex items-center justify-center`}>
                <span className="text-4xl font-black text-white italic">
                  {member.name[0]}
                </span>
             </div>
          </div>

          {/* Bottom Info Area */}
          <div className="h-1/5 px-4 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">
              {member.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <p className="text-purple-600 font-bold text-[10px] uppercase tracking-[0.2em]">
                {member.role}
              </p>
            </div>
          </div>
        </div>

        {/* BACK SIDE: The "Premium Reveal" Look */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[3rem] bg-slate-900 p-12 flex flex-col justify-between text-white shadow-2xl overflow-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {/* Backdrop Glow */}
          <div className={`absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-[100px] bg-gradient-to-br ${member.color} opacity-30`} />
          
          <div className="relative z-10">
            <span className="text-purple-400 font-black uppercase text-[10px] tracking-[0.4em] mb-8 block">
              Perspective '26
            </span>
            <p className="text-2xl font-medium leading-snug tracking-tight text-slate-100">
              "{member.bio}"
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="h-px w-full bg-white/10" />
            <div className="flex justify-between items-center">
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                    <span className="text-[10px] font-bold">IN</span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                    <span className="text-[10px] font-bold">X</span>
                  </div>
               </div>
               <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Available</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500 italic">Collective.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium border-l-4 border-purple-100 pl-6">
            Defining the edge of web engineering and creative strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
};

export default TeamSection;