"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectsData } from "@/data/siteData";
import SectionHeader from "@/component/SectionHeader";
import Footer2 from "@/component/Footer2";

gsap.registerPlugin(ScrollTrigger);

type Project = (typeof projectsData)[number];

function WorkCard({ project }: { project: Project }) {
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
      onClick={togglePlay}
      className="work-card group relative block overflow-hidden rounded-2xl bg-[#121212] mb-4 break-inside-avoid cursor-pointer"
    >
      <div className="relative w-full aspect-[9/16]">
        {project.videoUrl && (
          <>
            <video
              ref={videoRef}
              src={project.videoUrl}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          {/* <span className="text-[11px] font-mono text-white/50 tracking-widest uppercase">
            {project.year}
          </span> */}
          {/* <h2 className="mt-1 text-lg md:text-xl font-bold text-white leading-snug">
            {project.title}
          </h2>
          <p className="mt-1.5 text-sm text-white/55 line-clamp-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            {project.description}
          </p> */}
        </div>

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm">
          <span className="text-[10px] font-mono text-white/70 tracking-wider uppercase">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}

function WorkPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gridRef.current!.querySelectorAll(".work-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.07,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        },
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SectionHeader
        ref={headerRef}
        label="Portfolio"
        heading={<>A curation of craft & impact.</>}
        subheading="Brand films, music videos, social reels, and wedding cinematography — all in one place."
        as="h1"
        className="w-full px-6 md:px-16 pt-32 pb-16"
      />

      <div
        ref={gridRef}
        className="w-full px-6 md:px-16 pb-32 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {projectsData.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>

      <Footer2 />
    </div>
  );
}

export default WorkPage;
