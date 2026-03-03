"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/siteData";
import SectionHeader from "@/component/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const featured = projectsData.filter((p) => p.featured);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".featured-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32">
      {/* Heading */}
      <SectionHeader
        label="Selected Work"
        heading="Featured Projects"
        className="max-w-[1200px] mx-auto px-6 md:px-16 mb-16"
      />

      {/* Project Grid */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {featured.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`featured-card group relative overflow-hidden rounded-xl ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden ${
                index === 0 ? "h-[50vh] md:h-[70vh]" : "h-[45vh] md:h-[55vh]"
              }`}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Category + Year */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm text-[#121212] text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
                <span className="bg-white/90 backdrop-blur-sm text-[#121212] text-[10px] font-semibold px-3 py-1.5 rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mr-15 ">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 mr-15">
                  {project.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#121212"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All CTA */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 mt-12 flex justify-center">
        <Link
          href="/work"
          className="group flex items-center gap-3 px-8 py-4 border-2 border-[#121212] rounded-full text-[#121212] text-sm font-semibold uppercase tracking-wider hover:bg-[#121212] hover:text-white transition-all duration-300"
        >
          View All Work
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProjects;
