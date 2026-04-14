import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScheduleSection = () => {
  const [isWeekend, setIsWeekend] = useState(false);

  const scheduleOptions = {
    weekday: [
      { slots: "Morning", time: "8:00 AM - 12:00 PM", days: "Mon - Fri" },
      { slots: "Afternoon", time: "1:00 PM - 5:00 PM", days: "Mon - Fri" },
      { slots: "Evening", time: "6:00 PM - 10:00 PM", days: "Mon - Fri" },
    ],
    weekend: [
      { slots: "Batch A", time: "9:00 AM - 1:00 PM", days: "Sat - Sun" },
      { slots: "Batch B", time: "2:00 PM - 6:00 PM", days: "Sat - Sun" },
      { slots: "Night", time: "8:00 PM - 11:00 PM", days: "Sat - Sun" },
    ]
  };

  return (
    <section className="py-24 bg-[#F8F7FF] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">
          Flexible <span className="text-purple-600">Scheduling</span>
        </h2>
        <p className="text-slate-500 mb-12 max-w-lg mx-auto">
          Choose a time that works for you. Our global teachers are available across all time zones.
        </p>

        {/* Custom Toggle (Weekday vs Weekend) */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-bold ${!isWeekend ? 'text-purple-600' : 'text-slate-400'}`}>Weekday</span>
          <button 
            onClick={() => setIsWeekend(!isWeekend)}
            className="w-16 h-8 bg-purple-200 rounded-full p-1 transition-colors relative"
          >
            <motion.div 
              animate={{ x: isWeekend ? 32 : 0 }}
              className="w-6 h-6 bg-purple-600 rounded-full shadow-md"
            />
          </button>
          <span className={`text-sm font-bold ${isWeekend ? 'text-purple-600' : 'text-slate-400'}`}>Weekend</span>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {(isWeekend ? scheduleOptions.weekend : scheduleOptions.weekday).map((item, idx) => (
              <motion.div
                key={item.slots}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 25px 50px -12px rgba(109, 40, 217, 0.15)"
                }}
                className="p-8 rounded-3xl border border-purple-100 bg-white/50 backdrop-blur-sm transition-all cursor-default group"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-600 transition-colors">
                  <svg className="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.slots}</h3>
                <p className="text-purple-600 font-semibold mb-4">{item.time}</p>
                
                <div className="py-2 px-4 bg-slate-100 rounded-full inline-block text-xs font-bold text-slate-500 uppercase tracking-tighter">
                  {item.days}
                </div>
                
                <div className="mt-8">
                  <button className="text-sm font-bold text-purple-600 group-hover:underline underline-offset-4">
                    Check Availability →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-16 text-sm text-slate-400 italic">
          * Custom time slots available upon request for Hifz students.
        </p>
      </div>
    </section>
  );
};

export default ScheduleSection;