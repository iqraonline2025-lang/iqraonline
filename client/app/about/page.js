'use client';

import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import Achievements from "../components/Achievements";
import FAQ from "../components/FAQ";
import MissionVision from "../components/MissionVision";
import TeamSection from "../components/TeamSection";

export default function About() {
    return (
        <>
         <AboutHero />
         <AboutSection />
         <MissionVision />
         <TeamSection />
         <Achievements />
         <FAQ />
        </>
    )
}