'use client';

import UltraAnimatedPage from "../components/UltraAnimatedPage";
import TechHero from "../components/TechHero";
import ServicesWebDev from "../components/ServicesWebDev";
import ProcessSections from "../components/ProcessSections";
import PortfolioPreview from "../components/PortfolioPreview";
import StatsSection from "../components/StatsSection";
import CTADev from "../components/CTADev";
import ServicesPort from "../components/ServicesPort";
import FAQWeb from "../components/FAQWeb";

export default function WebDev() {
  return (
    <UltraAnimatedPage>
      {/* The Hero usually stays at the top */}
      <TechHero />
      
      {/* This marquee often looks best right after the Hero */}
      {/* <TechStack />  <-- Add this if you used the marquee code from earlier */}

      <ServicesWebDev />
      
      <ProcessSections />
      
      <PortfolioPreview />
      
      {/* StatsSection now has the premium counters we built */}
      <StatsSection />
      
      <CTADev />
      
      <ServicesPort />
      <FAQWeb />
    </UltraAnimatedPage>

  );
}