"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statsData, testimonialsData } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    // Animate stats
    const statItems = gsap.utils.toArray<HTMLElement>(".stat-item");
    gsap.fromTo(
      statItems,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animate testimonials
    if (testimonialsRef.current) {
      const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Stats */}
      <section ref={statsRef} className="bg-[#4E94C2] py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, i) => (
            <div key={i} className="stat-item text-center">
              <p className="text-5xl md:text-7xl font-bold text-white tracking-[-0.04em]">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm md:text-base mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 mb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
            Client Love
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-[#121212] leading-[0.95] tracking-[-0.04em]">
            What they say.
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-[#F7F7F7] rounded-2xl p-8 md:p-10 flex flex-col justify-between"
            >
              <p className="text-[#121212] text-lg md:text-xl leading-relaxed font-medium mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#121212] font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#999] text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="bg-[#C4EF7A] text-[#527200] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {t.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default StatsSection;
