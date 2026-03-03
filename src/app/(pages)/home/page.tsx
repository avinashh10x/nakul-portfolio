import React from "react";
import Hero from "./_compoent/Hero";
import ParallexScene from "./_compoent/ParallexScene";
import ExperienceSection from "./_compoent/ExperienceSection";
import FeaturedProjects from "./_compoent/FeaturedProjects";
import ProcessSection from "./_compoent/ProcessSection";
import StatsSection from "./_compoent/StatsSection";
import FinalCTA from "./_compoent/FinalCTA";
import Footer2 from "@/component/Footer2";

function Home() {
  return (
    <>
      <div className="max-w-screen min-h-screen bg-[#4E94C2]">
        <Hero />

        <div className="bg-white">
          <ParallexScene />
          <ExperienceSection />
          <FeaturedProjects />
        </div>
        <ProcessSection />
        {/* <StatsSection /> */}
        <FinalCTA />
        <Footer2 />
      </div>
    </>
  );
}

export default Home;
