"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/siteData";
import Footer2 from "@/component/Footer2";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Ads", "YouTube", "Reels", "Weddings"];

function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

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
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        },
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Header */}
      <div
        ref={headerRef}
        className="max-w-[1200px] mx-auto pt-32 pb-16 px-6 md:px-16 text-center"
      >
        <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#121212] leading-[0.95] tracking-[-0.04em]">
          Selected
          <br />
          Work
        </h1>
        <p className="mt-6 text-lg text-[#121212]/60 max-w-xl mx-auto">
          A curated collection of brand films, music videos, social reels, and
          wedding cinematography.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 pb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#121212] text-white"
                  : "bg-white text-[#121212] hover:bg-[#121212]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div
        ref={gridRef}
        className="max-w-[1200px] mx-auto px-6 md:px-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filtered.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`work-card group relative block overflow-hidden rounded-2xl bg-[#121212] ${
              project.layout === "wide" && i === 0
                ? "md:col-span-2 aspect-[16/7]"
                : "aspect-[4/3]"
            }`}
          >
            {/* Thumbnail */}
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-[#C4EF7A] tracking-wider uppercase">
                  {project.category}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs text-white/60">{project.year}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-white/60 max-w-lg line-clamp-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {project.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
              <svg
                className="w-4 h-4 text-white"
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
          </Link>
        ))}
      </div>

      <Footer2 />
    </div>
  );
}

export default WorkPage;
