'use client';
import React from 'react';
import { motion } from 'framer-motion';
// 1. Import Link from next/link
import Link from 'next/link';

const FreeTrialSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Aesthetic - Purplish Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(124,58,237,0.05)_0%,_rgba(255,255,255,1)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl shadow-purple-200"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Ready to Start Your <br />
            <span className="text-purple-200">Spiritual Journey?</span>
          </h2>
          
          <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Join hundreds of students mastering the Qur’an with love and precision. 
            Get your first 3 lessons entirely free—no commitment required.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* 2. Main CTA - Wrapped in Link and changed button to motion.div for animation */}
            <Link href="/contact" className="w-full md:w-auto no-underline">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-purple-700 font-black text-xl rounded-2xl shadow-xl transition-all cursor-pointer"
              >
                Claim Your Free Trial
              </motion.div>
            </Link>

            {/* 3. WhatsApp CTA - Updated with a placeholder number */}
            <motion.a 
              href="https://wa.me/1234567890" // Replace with your actual number (no + or spaces)
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-5 bg-[#25D366] text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:bg-[#20bd5a] transition-all no-underline"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-purple-200 text-sm">
            <span className="flex items-center gap-2">✓ Cancel Anytime</span>
            <span className="flex items-center gap-2">✓ No Credit Card Required</span>
            <span className="flex items-center gap-2">✓ Individual Attention</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeTrialSection;