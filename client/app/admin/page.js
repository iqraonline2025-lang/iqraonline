'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Settings, 
  Database, 
  ArrowRight, 
  LayoutDashboard, 
  ShieldCheck 
} from 'lucide-react';

export default function AdminDashboard() {
  const adminActions = [
    {
      title: "Add New Artifact",
      desc: "Upload images and commit new projects to the MongoDB registry.",
      icon: PlusCircle,
      path: "/admin/add-project",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Manage Registry",
      desc: "Edit details, update tech stacks, or purge artifacts from the grid.",
      icon: Database,
      path: "/admin/manage",
      color: "text-blue-600",
      bg: "bg-blue-50"
    }
  ];

  return (
    <section className="min-h-screen bg-[#fafaff] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="text-purple-600" size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Secure Access Granted</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight italic">
              Control_Center<span className="text-purple-600">.exe</span>
            </h1>
          </motion.div>

          <Link href="/" className="text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
            Exit to Public Site
          </Link>
        </header>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminActions.map((action, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={action.path} className="group block h-full">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-200 transition-all h-full flex flex-col">
                  <div className={`h-14 w-14 ${action.bg} ${action.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <action.icon size={28} />
                  </div>
                  
                  <h2 className="text-xl font-black text-slate-900 mb-2">{action.title}</h2>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                    {action.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-slate-400 group-hover:text-purple-600 transition-colors">
                    Initialize Module <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* System Stats Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <div className="text-xs font-bold uppercase tracking-widest opacity-60">
              System Status: Operational
            </div>
          </div>
          
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-[10px] uppercase opacity-40 font-bold mb-1">Stack</p>
              <p className="text-xs font-black">MERN / NEXT.JS</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase opacity-40 font-bold mb-1">Database</p>
              <p className="text-xs font-black">MONGODB_ATLAS</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase opacity-40 font-bold mb-1">Cloud</p>
              <p className="text-xs font-black">CLOUDINARY_API</p>
            </div>
          </div>
        </motion.footer>

      </div>
    </section>
  );
}