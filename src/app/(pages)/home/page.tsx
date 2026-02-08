import React from "react";
import Hero from "./_compoent/Hero";
import ParallexScene from "./_compoent/ParallexScene";
import ExperienceSection from "./_compoent/ExperienceSection";
import About from "@/component/About";
import Footer from "@/component/Footer";

function Home() {
  return (
    <>
      <div className="max-w-screen min-h-screen bg-[#4E94C2]">
        <Hero />
        <ParallexScene />
        <About/>
        <ExperienceSection />
        <Footer/>
      </div>
    </>
  );
}

export default Home;
