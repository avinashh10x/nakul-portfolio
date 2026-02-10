"use client";
import HeroText from "@/component/HeroText";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroData } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return;

    // Animate video to zoom in and fade out on scroll (covers full screen before disappearing)
    gsap.to([videoRef.current, ".gradient-overlay"], {
      scale: 2, // Zoom in to 2x size to cover full screen
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true, // Pin the video while scrolling through this section
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="bg-[#4E94C2] h-[85vh] md:h-screen! w-full relative"
      >
        <div className="sticky top-0 h-screen!  w-full overflow-hidden bg-[#4E94C2]">
          <video
            ref={videoRef}
            src={heroData.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-screen! object-cover "
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      </div>
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <HeroText />
      </div>
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={heroData.scrollGifUrl} alt="" className="h-16" />
      </div>
      <div className="absolute top-[120%] md:top-[150%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full">
        <p className="md:text-5xl text-[8vw] font-bold whitespace-nowrap text-center">
          {heroData.headingLine1} <br /> {heroData.headingLine2}
        </p>
      </div>
    </>
  );
}

export default Hero;
