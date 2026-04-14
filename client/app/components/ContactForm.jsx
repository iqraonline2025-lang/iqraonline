'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [ripples, setRipples] = useState([]);
  const [status, setStatus] = useState('idle');
  
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

    // 1. WhatsApp Redirect Logic
    // Replace '1234567890' with your actual WhatsApp number (include country code, no '+')
    const WHATSAPP_NUMBER = "+447303179101"; // Example for UK. Change to yours.
    const messageText = `*New Inquiry from IQRA Online*%0A%0A` +
                        `*Name:* ${formData.name}%0A` +
                        `*Email:* ${formData.email}%0A` +
                        `*Service:* ${formData.service}%0A` +
                        `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${messageText}`;

    // 2. Optional: Still try to save to your DB in the background
    try {
      fetch("https://iqraonline.onrender.com/api/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.log("DB background save failed, but redirecting to WhatsApp anyway.");
    }

    // 3. Execute Redirect
    setStatus('success');
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', service: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
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
          <p className="text-slate-400 text-sm mt-3 font-medium">Direct WhatsApp Response</p>
        </header>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative group">
            <input 
              type="text" name="name" required 
              value={formData.name} onChange={handleChange} placeholder=" " 
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] outline-none transition-all duration-300 focus:border-purple-300 focus:ring-4 focus:ring-purple-500/5 bg-slate-50/50 focus:bg-white" 
            />
            <label className="absolute left-6 top-4 text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-5 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-purple-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
              Full Name
            </label>
          </div>

          <div className="relative group">
            <input 
              type="email" name="email" required 
              value={formData.email} onChange={handleChange} placeholder=" " 
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] outline-none transition-all duration-300 focus:border-purple-300 focus:ring-4 focus:ring-purple-500/5 bg-slate-50/50 focus:bg-white" 
            />
            <label className="absolute left-6 top-4 text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-5 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-purple-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
              Email Address
            </label>
          </div>

          <div className="relative group">
            <select 
              name="service" required 
              value={formData.service} onChange={handleChange}
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] outline-none transition-all duration-300 focus:border-purple-300 bg-slate-50/50 focus:bg-white appearance-none cursor-pointer text-slate-600"
            >
              <option value="" disabled>Select a Specialty</option>
              <option value="Web Development">Full-Stack Web Development</option>
              <option value="Theological Consultation">Theological Consultation</option>
            </select>
          </div>

          <div className="relative group">
            <textarea 
              name="message" required 
              value={formData.message} onChange={handleChange} placeholder=" " 
              className="peer w-full px-6 py-4 border-2 border-slate-50 rounded-[1.25rem] h-32 outline-none transition-all duration-300 focus:border-purple-300 resize-none bg-slate-50/50 focus:bg-white" 
            />
            <label className="absolute left-6 top-4 text-slate-400 transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-5 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-purple-600 peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-5 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2">
              Project Description
            </label>
          </div>

          <button
            type="submit"
            onClick={createRipple}
            disabled={status === 'sending'}
            className="relative overflow-hidden w-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-bold py-4 rounded-[1.25rem] transition-all active:scale-[0.96] hover:shadow-[0_10px_25px_rgba(99,102,241,0.3)] disabled:opacity-70"
          >
            <span className="relative z-10">
              {status === 'sending' ? 'Opening WhatsApp...' : 'Send to WhatsApp'}
            </span>
            {ripples.map((ripple) => (
              <span key={ripple.id} className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none" style={{ left: ripple.x, top: ripple.y, transform: 'translate(-50%, -50%)' }} />
            ))}
          </button>

          <div className="h-4 flex items-center justify-center text-center">
            {status === 'success' && <p className="text-green-500 font-bold text-xs animate-bounce">✓ Redirecting to chat...</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
