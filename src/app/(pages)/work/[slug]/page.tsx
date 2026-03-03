"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/siteData";
import Footer2 from "@/component/Footer2";

gsap.registerPlugin(ScrollTrigger);

function CaseStudyPage() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".cs-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
      gsap.from(".cs-hero-meta", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      // Content sections
      gsap.utils.toArray<HTMLElement>(".cs-section").forEach((section) => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });

      // Gallery items
      gsap.utils.toArray<HTMLElement>(".cs-gallery-item").forEach((item, i) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project not found
          </h1>
          <Link
            href="/work"
            className="text-[#4E94C2] underline underline-offset-4"
          >
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Hero */}
      <div ref={heroRef} className="relative h-[85vh] overflow-hidden">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Back button */}
        <Link
          href="/work"
          className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-mono">Back</span>
        </Link>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="cs-hero-meta flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#C4EF7A] text-[#527200] text-xs font-bold tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-sm text-white/60 font-mono">
              {project.year}
            </span>
          </div>
          <h1 className="cs-hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] max-w-4xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="max-w-[1200px] mx-auto px-6 md:px-16 py-24 md:py-32"
      >
        {/* Description */}
        <div className="cs-section max-w-3xl mb-24">
          <p className="text-xl md:text-2xl text-[#121212]/80 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Challenge & Approach — two column */}
        <div className="cs-section grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
              The Challenge
            </p>
            <p className="text-lg text-[#121212]/70 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
              The Approach
            </p>
            <p className="text-lg text-[#121212]/70 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="cs-section mb-24">
          <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-6">
            Tools & Software
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 rounded-full bg-[#121212] text-white text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="cs-section bg-[#121212] rounded-3xl p-10 md:p-16 mb-24">
          <p className="text-xs uppercase tracking-widest text-[#C4EF7A] mb-3">
            The Result
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold leading-snug max-w-2xl">
            {project.result}
          </p>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-24">
            <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-8">
              Gallery
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="cs-gallery-item relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="cs-section flex items-center justify-between pt-12 border-t border-[#121212]/10">
          <Link
            href="/work"
            className="flex items-center gap-2 text-[#121212]/60 hover:text-[#121212] transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-mono">All Projects</span>
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#121212] text-white rounded-full text-sm font-medium hover:bg-[#121212]/80 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default CaseStudyPage;
