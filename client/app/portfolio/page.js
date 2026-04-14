'use client';
import React from 'react';
import PortfolioHero from "../components/PortfolioHero";
import ProjectGrid from "../components/ProjectGrid";
import TechStack from '../components/TechStack';
import Workflow from '../components/WorkFlow';

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-[#FBFAFF]">
             <PortfolioHero />
             <ProjectGrid />
             <TechStack />
             <Workflow />
        </main>
    );
}