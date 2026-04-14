'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactFAQ from "../components/ContactFAQ";

// FIX 1: Ensure this is a DEFAULT import (no curly braces)
import ContactCTA from '../components/ContactCTA'; 
import ContactTrust from '../components/ContactTrust';
import ContactStudio from '../components/ContactStudio';

const DynamicMap = dynamic(() => import('../components/MapComponent'), { 
  ssr: false, 
  loading: () => <div className="h-[350px] bg-slate-100 animate-pulse rounded-[2.5rem]" />
});

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // FIX 2: Instead of returning an empty div, return the structure 
  // but hide the components that cause trouble. 
  // This keeps the "Tree" consistent for Next.js.
  if (!mounted) {
    return <div className="bg-[#FBFAFF] min-h-screen" />; 
  }

  return (
    <div className="bg-[#FBFAFF] min-h-screen">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        <div className="space-y-8">
          <ContactInfo />
          <DynamicMap /> 
        </div>
        <ContactForm />
      </div>

      <ContactFAQ />
      {/* If the error persists here, double check the filename is exactly ContactCTA.js */}
      <ContactCTA />
      <ContactTrust />
      <ContactStudio />
    </div>
  );
}