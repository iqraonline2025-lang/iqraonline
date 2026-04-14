'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, Code, X, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AddProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    liveUrl: '',
    githubUrl: ''
  });
  
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState({ loading: false, message: '', error: false });

  // Handle Image Preview Cleanup
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setStatus({ loading: false, message: 'Please upload a project image', error: true });
      return;
    }

    setStatus({ loading: true, message: 'Initiating transfer...', error: false });

    try {
      // 1. Upload to Cloudinary (Fixed with your real Cloud Name)
      const cloudName = "dkz5fdqsb"; 
      const uploadPreset = "my_portfolio_preset"; // Make sure this is "Unsigned" in Cloudinary!

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", uploadPreset);

      const cloudRes = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: data }
      );
      
      const cloudData = await cloudRes.json();
      if (!cloudData.secure_url) {
        throw new Error("Cloudinary upload failed. Ensure your preset is set to 'Unsigned'.");
      }

      // 2. Prepare Final Data
      const techArray = formData.techStack.split(',').map(item => item.trim());
      const finalPayload = {
        ...formData,
        imageUrl: cloudData.secure_url,
        techStack: techArray
      };

      // 3. Send to Node.js Backend (Fixed URL path)
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${baseUrl}/api/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalPayload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, message: 'Project committed to database ✅', error: false });
        // Reset Form
        setFormData({ title: '', description: '', techStack: '', liveUrl: '', githubUrl: '' });
        setFile(null);
      } else {
        throw new Error(result.message || 'Database rejection');
      }
    } catch (err) {
      setStatus({ loading: false, message: err.message, error: true });
    }
  };

  return (
    <section className="min-h-screen bg-[#fafaff] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-sm"
        >
          <header className="mb-10">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight italic">Admin / Registry</h1>
            <p className="text-slate-500 mt-2 font-medium">Add new engineering artifacts to the public grid.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Upload Section */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Visual Identity</label>
              {!preview ? (
                <div className="group relative h-72 w-full border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center transition-all hover:border-purple-300 hover:bg-purple-50/20">
                  <input 
                    type="file" 
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <div className="p-5 rounded-2xl bg-slate-50 text-slate-400 group-hover:text-purple-500 transition-colors">
                    <Upload size={32} />
                  </div>
                  <p className="mt-4 text-sm font-bold text-slate-400">Select Project Cover Image</p>
                </div>
              ) : (
                <div className="relative h-72 w-full rounded-[2rem] overflow-hidden group shadow-xl border-4 border-white">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      type="button"
                      onClick={() => setFile(null)}
                      className="p-3 bg-white rounded-full text-red-500 shadow-xl hover:scale-110 transition-transform"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">Title</label>
                  <input 
                    type="text" required
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-500/20 font-semibold text-slate-800 outline-none"
                    placeholder="Project Name"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2 flex items-center gap-2"><Code size={12}/> Tech Stack</label>
                  <input 
                    type="text"
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-500/20 font-semibold text-slate-800 outline-none"
                    placeholder="React, Node, Tailwind..."
                    value={formData.techStack}
                    onChange={(e) => setFormData({...formData, techStack: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">Live Demo URL</label>
                  <input 
                    type="url"
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-500/20 font-semibold text-slate-800 outline-none"
                    placeholder="https://..."
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2 text-slate-400">Source Code URL</label>
                  <input 
                    type="url"
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-500/20 font-semibold text-slate-800 outline-none"
                    placeholder="https://github.com/..."
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">Project Brief</label>
              <textarea 
                required rows="4"
                className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-purple-500/20 font-semibold text-slate-800 outline-none"
                placeholder="Describe the architectural logic..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              disabled={status.loading}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${
                status.loading ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-purple-600 shadow-2xl shadow-purple-100'
              }`}
            >
              {status.loading ? 'Processing...' : <>Commit Artifact <Send size={18} /></>}
            </button>

            {status.message && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl font-bold text-sm ${
                  status.error ? 'bg-red-50 text-red-500' : 'bg-purple-50 text-purple-600'
                }`}
              >
                {status.error ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
                {status.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}