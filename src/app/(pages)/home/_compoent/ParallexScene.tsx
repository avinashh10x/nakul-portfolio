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

    gsap.to(skyRef.current, {
      y: -50, // Move up slowly
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(bgMountainRef.current, {
      y: -100, // Move up medium speed
      scrollTrigger: {
        trigger: overlayRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(fgMountainRef.current, {
      y: -150, // Move up fastest
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
      <h3 className="md:text-6xl text-[8vw] font-bold whitespace-nowrap text-center absolute left-1/2  -translate-x-1/2 z-10 top-1/12">
        Simpliefing the <br /> expirence{" "}
        <span>
          <img
            src="https://framerusercontent.com/images/Omh6oj53opUFAsz5PdJ0h2mJB54.gif"
            className="h-[8vw] rounded-xl border-2 -rotate-10 border-white inline-block"
          />
          <img
            src="https://framerusercontent.com/images/Vi2Rc9XzMiijQWFO6ASg06AHKxc.gif"
            className="h-[8vw] rounded-xl border-2 rotate-10 border-white inline-block"
          />
          <img
            src="https://framerusercontent.com/images/Omh6oj53opUFAsz5PdJ0h2mJB54.gif"
            className="h-[9vw] rounded-xl border-2 -rotate-10 border-white inline-block"
          />
        </span>{" "}
        of <br /> living one at a time
      </h3>

      <div className="relative w-full h-screen">
        {/* Overlay container - used as scroll trigger target */}
        <div ref={overlayRef} className="w-full absolute top-1/4">
          {/* Sky layer - slowest parallax */}
          <img
            ref={skyRef}
            src="https://framerusercontent.com/images/9SnlRERg9iwp8HZyYEp7VtlP8P0.png?width=1920&height=1296"
            alt="mountain cloud and sky"
            className="w-full absolute"
          />
          {/* Background mountain - medium parallax */}
          <img
            ref={bgMountainRef}
            src="https://framerusercontent.com/images/snR7rLEQS23Ks0LjGdsp4ciM48.png?width=1920&height=1080"
            alt="background mountain"
            className="w-full absolute"
          />
          {/* Foreground mountain - fastest parallax */}
          <img
            ref={fgMountainRef}
            src="https://framerusercontent.com/images/J1zm8vrw81ZeeRi4U0x0CQtcpgU.png?width=1920&height=1230"
            alt="main mountain and view"
            className="w-full absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default ParallexScene;
