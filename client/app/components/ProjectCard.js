'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react'; // Changed Github to Code as a safe fallback

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container with Zoom */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <motion.img 
          src={project.imageUrl || "/api/placeholder/400/320"} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
          {project.liveUrl && (
            <motion.a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-slate-900 font-bold rounded-full flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-colors"
            >
              View Live <ExternalLink size={16} />
            </motion.a>
          )}

          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
            >
              {/* Using 'Code' icon instead of 'Github' to bypass the build error */}
              Source Code <Code size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(project.techStack) && project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="text-[10px] font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}