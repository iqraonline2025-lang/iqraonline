'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Use hardcoded URL to bypass environment variable issues for now
    const API_URL = "https://iqraonline.onrender.com/api/contact";
    
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000); // 20s timeout

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      const data = await response.json();
      clearTimeout(timeout);

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message || "Server Error");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus('error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      <form className="max-w-md w-full space-y-4" onSubmit={handleSubmit}>
        <input 
          className="w-full p-4 border rounded-xl bg-gray-50 text-black" 
          placeholder="Name" name="name" required
          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          className="w-full p-4 border rounded-xl bg-gray-50 text-black" 
          placeholder="Email" name="email" type="email" required
          value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <select 
          className="w-full p-4 border rounded-xl bg-gray-50 text-black" 
          name="service" required
          value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
        >
          <option value="">Select Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Theological Consultation">Theological Consultation</option>
        </select>
        <textarea 
          className="w-full p-4 border rounded-xl bg-gray-50 text-black h-32" 
          placeholder="Message" name="message" required
          value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        
        <button 
          type="submit" 
          disabled={status === 'sending'}
          className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl disabled:opacity-50"
        >
          {status === 'sending' ? "Sending..." : "Send Message"}
        </button>

        <div className="text-center text-sm">
          {status === 'success' && <p className="text-green-600 font-bold">✓ Sent successfully!</p>}
          {status === 'error' && <p className="text-red-600 font-bold">✕ Failed to connect to server.</p>}
        </div>
      </form>
    </div>
  );
}
