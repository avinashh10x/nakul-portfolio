"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/siteData";
import SectionHeader from "@/component/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

type Project = (typeof projectsData)[number];

// Card always fills its parent's height — bento cell defines the size
function FeaturedCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (!videoRef.current || !project.videoUrl) return;
    videoRef.current.play().catch(() => {});
  };
  const handleMouseLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="featured-card group relative block h-full w-full overflow-hidden rounded-2xl bg-[#121212]"
    >
      {/* Thumbnail */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(max-width:640px) 100vw, (max-width:1024px) 66vw, 50vw"
        className="object-cover opacity-90 transition-opacity duration-500"
      />

      {/* Video on hover */}
      {project.videoUrl && (
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
        <span className="text-[11px] font-mono text-white/50 tracking-widest uppercase">
          {project.year}
        </span>
        <h3 className="mt-1 text-lg md:text-2xl font-bold text-white leading-snug">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-white/55 line-clamp-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out max-w-lg">
          {project.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-3 group-hover:translate-x-0">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  );
}

function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll(".featured-card");
      gsap.fromTo(
        cards,
        { y: 70, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.09,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        },
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32">
      <SectionHeader
        label="Selected Work"
        heading="Featured Projects"
        className="max-w-[1200px] mx-auto px-6 md:px-16 mb-16"
      />

      {/*
        BENTO LAYOUT (desktop — 3 cols):
        ┌─────────────────────┬──────────┐
        │   Card 1 (col×2)    │          │
        ├──────────┬──────────┤  Card 2  │
        │  Card 3  │  Card 4  │ (row×2)  │
        └──────────┴──────────┴──────────┘
        Mobile: single column stack with fixed heights
      */}
      <div
        ref={gridRef}
        className="
          max-w-[1200px] mx-auto px-6 md:px-16
          grid gap-4
          grid-cols-1
          sm:grid-cols-3 sm:grid-rows-[400px_280px]
        "
      >
        {/* Card 1 — top-left wide */}
        <div className="h-[260px] sm:h-auto sm:col-span-2 sm:row-span-1">
          {featured[0] && <FeaturedCard project={featured[0]} />}
        </div>

        {/* Card 2 — right column, spans both rows (tall) */}
        <div className="h-[340px] sm:h-auto sm:col-span-1 sm:row-span-2">
          {featured[1] && <FeaturedCard project={featured[1]} />}
        </div>

        {/* Card 3 — bottom-left */}
        <div className="h-[220px] sm:h-auto sm:col-span-1 sm:row-span-1">
          {featured[2] && <FeaturedCard project={featured[2]} />}
        </div>

        {/* Card 4 — bottom-middle */}
        <div className="h-[220px] sm:h-auto sm:col-span-1 sm:row-span-1">
          {featured[3] && <FeaturedCard project={featured[3]} />}
        </div>
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
