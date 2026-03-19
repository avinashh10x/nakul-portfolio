"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/siteData";
import SectionHeader from "@/component/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

type Project = (typeof projectsData)[number];

function ReelCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };


  return (
    <div
      ref={cardRef}
      onClick={togglePlay}
      className="featured-card group relative w-full aspect-[9/16] overflow-hidden rounded-2xl bg-[#121212] cursor-pointer"
    >
      {project.videoUrl && (
        <>
          <video
            ref={videoRef}
            src={project.videoUrl}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-3 left-3 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-all cursor-pointer"
            aria-label="Toggle sound"
          >
            {isMuted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
            )}
          </button>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        {/* <span className="text-[10px] absolute bottom-3 right-5 font-mono text-white/50 tracking-widest uppercase block mb-1">
          {project.year}
        </span> */}
        {/* <h3 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-2">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-white/55 line-clamp-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          {project.category}
        </p> */}
      </div>

      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-mono text-white/80 tracking-wider uppercase">
          {project.category}
        </span>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  useEffect(() => {
    if (!rowRef.current) return;
    const ctx = gsap.context(() => {
      const cards = rowRef.current!.querySelectorAll(".featured-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: rowRef.current, start: "top 85%" },
        },
      );
    }, rowRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 overflow-hidden">
      <SectionHeader
        label="Work"
        heading="Projects worth watching."
        className="w-full px-6 md:px-16 mb-16"
      />

      <div
        ref={rowRef}
        className="w-full px-6 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {featured.map((project) => (
          <ReelCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="w-full px-6 md:px-16 mt-14 flex justify-center">
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
