"use client";
import HeroText from "@/component/HeroText";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        className="bg-[#4E94C2]  h-[100vh] w-full relative overflow-hidden  "
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#4E94C2] ">
          <video
            ref={videoRef}
            src="https://framerusercontent.com/assets/vByUTRpjIKiQC9dZga6fw6PQLM.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover "
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      </div>
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <HeroText />
      </div>
      <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="https://framerusercontent.com/images/ooyYK8koXxi95QXafRKMXtdbVSA.gif"
          alt=""
          className="h-16"
        />
      </div>
      <div className="absolute top-[150%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <p className="md:text-5xl text-[5vw] font-bold whitespace-nowrap text-center">
          Let me take you <br /> through a journey of
        </p>
      </div>
    </>
  );
}

export default Hero;
