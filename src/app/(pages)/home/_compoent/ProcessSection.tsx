"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processData } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const steps = gsap.utils.toArray<HTMLElement>(".process-step");

    steps.forEach((step, i) => {
      // Animate the whole step
      gsap.fromTo(
        step,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Animate the progress line
      const line = step.querySelector(".step-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black py-24 md:py-32 overflow-hidden"
    >
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 mb-20 text-center">
        <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
          The Process
        </p>
        <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
          {processData.heading}
        </h2>
        <p className="text-black/50 text-lg mt-4 max-w-xl mx-auto">
          {processData.subheading}
        </p>
      </div>

      {/* Steps — horizontal on desktop, stacked on mobile */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {processData.steps.map((step, index) => (
            <div
              key={index}
              className="process-step flex flex-col items-center text-center relative"
            >
              {/* Connector line (desktop only, between steps) */}
              {index < processData.steps.length - 1 && (
                <div className="step-line hidden md:block absolute top-7 left-1/2 w-full h-[2px] bg-[#4E94C2]/20 origin-left z-0" />
              )}

              {/* Circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-[#4E94C2] flex items-center justify-center mb-6 shrink-0">
                <span className="text-[#4E94C2] text-sm font-bold font-mono">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="px-4 md:px-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-[-0.02em] mb-3">
                  {step.title}
                </h3>
                <p className="text-black/50 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile connector line */}
              {index < processData.steps.length - 1 && (
                <div className="step-line md:hidden w-[2px] h-10 bg-[#4E94C2]/20 mt-6 origin-top" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
