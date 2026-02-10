import React from "react";
import Hero from "./_compoent/Hero";
import ParallexScene from "./_compoent/ParallexScene";
import ExperienceSection from "./_compoent/ExperienceSection";
import About from "@/component/About";
import Footer from "@/component/Footer";
import Footer2 from "@/component/Footer2";

function Home() {
  return (
    <>
      <div className="max-w-screen min-h-screen bg-[#ffffff]">
        <Hero />
        <ParallexScene />
        <ExperienceSection />
        <Footer2/>
      </div>
    </>
  );
}

export default Home;
