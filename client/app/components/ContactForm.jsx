'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [ripples, setRipples] = useState([]);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // FIX: Fallback URL ensures it never tries to hit localhost on Vercel
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://iqraonline.onrender.com';

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        // Clear form on success
        setFormData({ name: '', email: '', service: '', message: '' });
        // Reset status to idle after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Server Error Response:", data);
        setStatus('error');
      }
    } catch (err) {
      // This catches the net::ERR_NAME_NOT_RESOLVED or timeouts
      console.error("Submission Network Error:", err);
      setStatus('error');
    }
  };

  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FDFDFF] p-6 text-slate-900">
      <div className="max-w-md w-full bg-white shadow-[0_20px_50px_rgba(139,92,246,0.12)] rounded-[3rem] border border-purple-50 p-10 relative">
        
        <header className="mb-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 text-[11px] font-bold tracking-[0.1em] text-purple-600 uppercase bg-purple-50 rounded-full">
            Inquiry Portal
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-medium">Digital Solutions & Scriptural Research</p>
        </header>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="relative group">
            <input 
              type="text"
              name="name"
              required 
              value={formData.name}
              onChange={handleChange}
              placeholder=" " 
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] outline-none transition-all duration-300 focus:border-purple-300 focus:ring-4 focus:ring-purple-500/5 bg-slate-50/50 focus:bg-white" 
            />
            <label className="absolute left-6 top-4 text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-5 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-purple-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
              Full Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative group">
            <input 
              type="email"
              name="email"
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder=" " 
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] outline-none transition-all duration-300 focus:border-purple-300 focus:ring-4 focus:ring-purple-500/5 bg-slate-50/50 focus:bg-white" 
            />
            <label className="absolute left-6 top-4 text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-5 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-purple-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
              Email Address
            </label>
          </div>

          {/* Service Selector */}
          <div className="relative group">
            <select 
              name="service" 
              required 
              value={formData.service} 
              onChange={handleChange}
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] outline-none transition-all duration-300 focus:border-purple-300 focus:ring-4 focus:ring-purple-500/5 bg-slate-50/50 focus:bg-white appearance-none cursor-pointer text-slate-600"
            >
              <option value="" disabled>Select a Specialty</option>
              <optgroup label="Software Engineering">
                <option value="Web Development">Full-Stack Web Development</option>
                <option value="App Development">Mobile App Development</option>
              </optgroup>
              <optgroup label="Islamic Studies">
                <option value="Quran/Hadith Investigation">Quran & Hadith Investigation</option>
                <option value="Theological Consultation">Theological Consultation</option>
              </optgroup>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-purple-400 group-focus-within:rotate-180 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative group">
            <textarea 
              name="message" 
              required 
              value={formData.message} 
              onChange={handleChange} 
              placeholder=" " 
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] h-32 outline-none transition-all duration-300 focus:border-purple-300 focus:ring-4 focus:ring-purple-500/5 resize-none bg-slate-50/50 focus:bg-white" 
            />
            <label className="absolute left-6 top-4 text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-5 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-purple-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
              Project Description
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              onClick={createRipple}
              disabled={status === 'sending'}
              className="relative overflow-hidden w-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-bold py-4 rounded-[1.25rem] transition-all active:scale-[0.96] hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                {status === 'sending' ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : 'Send Message'}
              </span>
              {ripples.map((ripple) => (
                <span key={ripple.id} className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none" style={{ left: ripple.x, top: ripple.y, transform: 'translate(-50%, -50%)' }} />
              ))}
            </button>
          </div>

          {/* Status Indicators */}
          <div className="h-4 flex items-center justify-center">
            {status === 'success' && <p className="text-green-500 font-bold text-xs">✓ Inquiry received. Check your Gmail shortly.</p>}
            {status === 'error' && <p className="text-red-500 font-bold text-xs">✕ Connection failed. Please try again.</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
