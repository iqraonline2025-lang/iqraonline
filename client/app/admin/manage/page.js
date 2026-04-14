'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ExternalLink, RefreshCcw, AlertTriangle, Edit3 } from 'lucide-react';

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${baseUrl}/api/projects`); // Added /api
      const data = await response.json();
      if (data.success) setProjects(data.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Purge this artifact from the registry?")) return;
    
    setActionId(id);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${baseUrl}/api/projects/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (data.success) {
        setProjects(projects.filter(p => p._id !== id));
      }
    } catch (err) {
      alert("Purge failed: Connection error");
    } finally {
      setActionId(null);
    }
  };

  return (
    <section className="py-20 px-12">
      <div className="max-w-5xl">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight italic">Registry_Index</h1>
            <p className="text-slate-500 font-medium">Database state: {projects.length} artifacts active.</p>
          </div>
          <button 
            onClick={fetchProjects}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:border-purple-300 transition-all"
          >
            <RefreshCcw size={18} className={loading ? 'animate-spin' : ''} /> Sync
          </button>
        </header>

        {loading && projects.length === 0 ? (
          <div className="py-20 flex justify-center">
            <RefreshCcw className="animate-spin text-purple-600" size={32} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white p-5 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-purple-500/5 transition-all"
                >
                  <div className="h-20 w-32 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-50">
                    <img src={project.imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{project.title}</h3>
                    <p className="text-slate-400 text-xs font-bold mt-1">ID: {project._id.slice(-8)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a href={project.liveUrl} target="_blank" className="p-3 text-slate-400 hover:text-purple-600 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <button className="p-3 text-slate-400 hover:text-blue-500 transition-colors">
                      <Edit3 size={20} />
                    </button>
                    <button 
                      onClick={() => handleDelete(project._id)}
                      disabled={actionId === project._id}
                      className="p-3 text-slate-400 hover:text-red-500 transition-colors disabled:opacity-50"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {!loading && projects.length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                <AlertTriangle className="mx-auto text-slate-300 mb-4" size={48} />
                <p className="text-slate-400 font-bold italic uppercase tracking-widest">Registry Empty</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}