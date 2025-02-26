"use client";

import HeroSection from "@/components/Home/HeroSection";
import Features from "@/components/Home/Features";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonial from "@/components/Home/Testimonial";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";


export default function Home() {
  return (
    <div>
          <div className="grid-background"> </div>

          <HeroSection/>
           <Features/>
          < WhyChooseUs />
          <HowItWorks/>
          <Testimonial/>
          <FAQ/>
          <CTA/>
          
      </div>
  );
}
