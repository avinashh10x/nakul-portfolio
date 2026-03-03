"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/siteData";
import SectionHeader from "@/component/SectionHeader";
import Footer2 from "@/component/Footer2";

gsap.registerPlugin(ScrollTrigger);

const aspectClass = {
  wide: "aspect-video",
  tall: "aspect-[9/16]",
};

type Project = (typeof projectsData)[number];

function WorkCard({ project }: { project: Project }) {
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
      className="work-card group relative block overflow-hidden rounded-2xl bg-[#121212] mb-4 break-inside-avoid"
    >
      <div
        className={`relative w-full ${
          aspectClass[project.layout as keyof typeof aspectClass] ??
          "aspect-video"
        }`}
      >
        {/* Static thumbnail — always present */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover opacity-90 transition-opacity duration-500"
        />

        {/* Video — loads lazily, fades in on hover */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Card content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <span className="text-[11px] font-mono text-white/50 tracking-widest uppercase">
            {project.year}
          </span>
          <h2 className="mt-1 text-lg md:text-xl font-bold text-white leading-snug">
            {project.title}
          </h2>
          <p className="mt-1.5 text-sm text-white/55 line-clamp-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
            {project.description}
          </p>
        </div>

        {/* Arrow badge */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-3 group-hover:translate-x-0">
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </div>
      </div>
    </Link>
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
          stagger: 0.08,
          duration: 0.75,
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
      {/* Header */}
      <SectionHeader
        ref={headerRef}
        label="Portfolio"
        heading={<>Selected Work</>}
        subheading="A curated collection of brand films, music videos, social reels, and wedding cinematography."
        as="h1"
        className="max-w-[1400px] mx-auto pt-32 pb-16 px-6 md:px-16"
      />

      {/* Masonry bento grid — CSS columns, Pinterest-style */}
      <div
        ref={gridRef}
        className="max-w-[1400px] mx-auto px-4 md:px-10 pb-32"
        style={{ columns: "var(--cols)", gap: "16px" } as React.CSSProperties}
      >
        {/* Responsive column count via CSS custom property */}
        <style>{`
          :root { --cols: 1; }
          @media (min-width: 640px)  { :root { --cols: 2; } }
          @media (min-width: 1024px) { :root { --cols: 3; } }
        `}</style>

        {projectsData.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>

      <Footer2 />
    </div>
  );
}

export default WorkPage;
