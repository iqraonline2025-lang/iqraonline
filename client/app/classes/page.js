'use client';

import CoursesSection from "../components/CoursesSection";
import FreeTrialSection from "../components/FreeTrialSection";
import HeroClasses from "../components/HeroClasses";
import HowItWorks from "../components/HowItWorks";
import InfoSection from "../components/InfoSection";
import ScheduleSection from "../components/ScheduleSection";
import WhyChooseUsQuran from "../components/WhyChooseUsQuran";

export default function Classes() {
    return (
        <>
        <HeroClasses />
        <CoursesSection />
        <ScheduleSection />
        <FreeTrialSection />
        <InfoSection />
        <HowItWorks />
        <WhyChooseUsQuran />
        </>
    )
}