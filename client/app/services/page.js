'use client';

import FAQSection from "../components/FAQSection";
import HeroServices from "../components/HeroServices";
import ProcessSection from "../components/ProcessSection";
import QuranDetailed from "../components/QuranDetailed";
import ServicesOverview from "../components/ServicesOverview";
import WebDevelopmentDetailed from "../components/WebDevelopmentDetailed";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Services() {
    return (
        <>
        <HeroServices />
        <ServicesOverview />
        <QuranDetailed />
        <WebDevelopmentDetailed />
        <ProcessSection />
        <WhyChooseUs />
        <FAQSection />
          </>
    )
}