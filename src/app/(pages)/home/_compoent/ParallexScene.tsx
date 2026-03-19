"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ParallexScene() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLImageElement>(null);
  const bgMountainRef = useRef<HTMLImageElement>(null);
  const fgMountainRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const isMobile = window.innerWidth < 768;

    gsap.to(skyRef.current, {
      y: isMobile ? -25 : -50,
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(bgMountainRef.current, {
      y: isMobile ? -50 : -100,
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(fgMountainRef.current, {
      y: isMobile ? -75 : -150,
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#4E94C2] relative md:h-[100vh]">
      <h3 className="md:text-5xl text-[8vw] font-bold whitespace-nowrap text-center absolute left-1/2 -translate-x-1/2 z-10 top-1/12">
        Simplifying the <br /> experience{" "}
        <span>
          <img
            src="/img/c1.png"
            className="md:h-[3vw] h-[8vw] rounded-xl border-2 -rotate-10 border-white inline-block"
          />
          <img
            src="/img/c2.png"
            className="md:h-[3vw] h-[8vw] rounded-xl border-2 rotate-10 border-white inline-block"
          />
          <img
            src="/img/c3.png"
            className="md:h-[3vw] h-[9vw] rounded-xl border-2 -rotate-10 border-white inline-block"
          />
        </span>{" "}
        of <br /> living one
        <span className="relative">
          <img
            src="/img/pc.png"
            className="md:h-[4vw] md:w-[10vw] object-cover h-[6vw] w-[6vw] rounded-full m-2 inline-block"
          />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-[2vw] text-[4vw]">
            Screen
          </p>
        </span>
        at a time
      </h3>

      <div className="relative w-full h-screen overflow-hidden">
        <div ref={overlayRef} className="w-full h-full absolute top-1/4">
          <img
            ref={skyRef}
            src="/img/b1.png"
            alt="Sky and clouds"
            className="w-full md:w-full md:h-auto absolute h-full object-cover"
          />
          <img
            ref={bgMountainRef}
            src="/img/b2.png"
            alt="Background mountain"
            className="w-full md:w-full md:h-auto absolute h-full object-cover"
          />
          <img
            ref={fgMountainRef}
            src="/img/b3.png"
            alt="Foreground mountain"
            className="w-full md:w-full md:h-auto absolute h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ParallexScene;
