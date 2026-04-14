import React from 'react';
import { motion } from 'framer-motion';
// 1. Import Link from next/link
import Link from 'next/link';

const courses = [
  {
    title: "Nazra",
    description: "Learn to read the Holy Qur’an with the correct pronunciation from the very basics.",
    duration: "6 Months",
    level: "Beginner",
    icon: "📖"
  },
  {
    title: "Tajweed",
    description: "Master the rules of recitation to recite the Qur’an with the beauty it deserves.",
    duration: "8 Months",
    level: "Intermediate",
    icon: "✨"
  },
  {
    title: "Hifz",
    description: "A structured program to help students memorize the Qur’an with retention techniques.",
    duration: "Flexible",
    level: "Advanced",
    icon: "🧠"
  },
  {
    title: "Islamic Studies",
    description: "Comprehensive lessons on Fiqh, Hadith, and Seerah to build a strong foundation.",
    duration: "Ongoing",
    level: "All Levels",
    icon: "🕌"
  }
];

const CoursesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Our Popular <span className="text-purple-600">Courses</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Choose a program that fits your goals. Our curriculum is designed by scholars for an effective learning experience.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0px 20px 40px rgba(109, 40, 217, 0.1)" 
              }}
              className="group bg-[#FDFCFE] border border-purple-50 p-8 rounded-3xl transition-colors hover:border-purple-200 flex flex-col h-full"
            >
              <div className="text-4xl mb-6 bg-purple-100 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-purple-600 group-hover:rotate-6 transition-all duration-300">
                <span className="group-hover:scale-110 transition-transform">{course.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{course.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{course.description}</p>

              <div className="space-y-3 mb-8 border-t border-purple-50 pt-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 uppercase tracking-wider">Duration</span>
                  <span className="font-semibold text-purple-700">{course.duration}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 uppercase tracking-wider">Level</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded-md font-bold">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* 2. Replaced <button> with <Link> */}
              <Link 
                href="/contact"
                className="w-full py-3 bg-white text-purple-600 border border-purple-200 font-bold rounded-xl group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 text-center block"
              >
                Enroll Now
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;