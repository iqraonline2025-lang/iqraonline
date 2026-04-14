 'use client';

import CTA from "./components/CTA";
import Hero from "./components/Hero";
import QuranPreview from "./components/QuranPreview";
import SplitServices from "./components/SplitServices";
import Testimonials from "./components/Testimonials";
import WebDevPreview from "./components/WebDevPreview";

 export default function Home() {
  return (
    <>
    <Hero />
    <SplitServices />
    <QuranPreview />
    <WebDevPreview />
    <Testimonials />
    <CTA />
    </>
  )
 }