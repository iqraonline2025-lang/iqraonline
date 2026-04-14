'use client';
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${baseUrl}/api/projects`);
        
        if (!response.ok) {
          throw new Error(`Server status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setProjects(result.data);
        } else {
          throw new Error(result.message || 'Failed to fetch projects');
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-[#fafaff]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 mb-4"></div>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Initialising Registry...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-32 text-red-500 bg-[#fafaff]">
        <p className="font-bold">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md text-sm"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-[#fafaff]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-5xl font-black text-slate-900 tracking-tight italic">
            FEATURED_ARTIFACTS<span className="text-purple-600">.01</span>
          </h2>
          <div className="h-1.5 w-20 bg-purple-600 mt-4" />
        </header>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 italic">
            No artifacts found in the registry.
          </div>
        )}
      </div>
    </section>
  );
}