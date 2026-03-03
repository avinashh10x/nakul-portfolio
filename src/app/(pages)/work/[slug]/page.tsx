"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/siteData";
import Footer2 from "@/component/Footer2";

gsap.registerPlugin(ScrollTrigger);

// ─── Back button ────────────────────────────────────────────
function BackButton({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/work"
      className={`flex items-center gap-2 transition-colors ${
        light
          ? "text-white/60 hover:text-white"
          : "text-[#121212]/50 hover:text-[#121212]"
      }`}
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
  );
}

// ─── Media renderer ─────────────────────────────────────────
function Media({
  project,
  className,
}: {
  project: (typeof projectsData)[number];
  className?: string;
}) {
  if (project.videoUrl) {
    return (
      <video
        src={project.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
    );
  }
  return (
    <Image
      src={project.heroImage}
      alt={project.title}
      fill
      priority
      className={className}
    />
  );
}

// ─── Main page ───────────────────────────────────────────────
function CaseStudyPage() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      gsap.from(".cs-hero-title", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".cs-hero-meta", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.4,
      });
      gsap.from(".cs-hero-desc", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.55,
      });
      gsap.utils.toArray<HTMLElement>(".cs-section").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".cs-gallery-item").forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, [project]);

  // ── 404 ────────────────────────────────────────────────────
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

  const isTall = project.layout === "tall";

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      {/* ══════════════════════════════════════════════════════
          HERO — WIDE (landscape / 16:9)
          Full-bleed cinematic, title overlaid at bottom
      ══════════════════════════════════════════════════════ */}
      {!isTall && (
        <div className="relative w-full aspect-video max-h-[92vh] min-h-[55vh] overflow-hidden bg-[#0a0a0a]">
          <Media
            project={project}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

          {/* Back */}
          <div className="absolute top-8 left-8 z-10">
            <BackButton light />
          </div>

          {/* Title block */}
          <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-10 md:pb-16">
            <div className="cs-hero-meta flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
                {project.year}
              </span>
            </div>
            <h1 className="cs-hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.92] max-w-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          HERO — TALL (portrait / 9:16 reels, shorts)
          Dark section, centered portrait frame + info beside it
      ══════════════════════════════════════════════════════ */}
      {isTall && (
        <div className="bg-white pt-24 pb-16 md:pb-24">
          {/* Back */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-16 mb-10">
            <BackButton  />
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-16">
            {/* Portrait media — phone-sized frame */}
            <div className="relative w-full max-w-[350px] lg:max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shrink-0 shadow-2xl mx-auto md:mx-0 ">
              <Media
                project={project}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Info beside */}
            <div className="flex-1 text-black pb-4">
              <p className="cs-hero-meta text-xs font-mono text-black/40 tracking-widest uppercase mb-4">
                {project.year}
              </p>
              <h1 className="cs-hero-title text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.95] mb-6">
                {project.title}
              </h1>
              <p className="cs-hero-desc text-base md:text-lg text-black/55 leading-relaxed max-w-lg">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-1.5 rounded-full bg-black/8 border border-black/10 text-black/70 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-20 md:py-28">
        {/* Description — only show for wide layout (tall already shows it in hero) */}
        {!isTall && (
          <div className="cs-section max-w-3xl mb-20">
            <p className="text-xl md:text-2xl text-[#121212]/75 leading-relaxed">
              {project.description}
            </p>
          </div>
        )}

        {/* Challenge & Approach */}
        <div className="cs-section grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
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

        {/* Tools — only for wide layout, tall already shows tools in hero */}
        {!isTall && (
          <div className="cs-section mb-20">
            <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-5">
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
        )}

        {/* Result */}
        <div className="cs-section bg-[#121212] rounded-3xl p-10 md:p-16 mb-20">
          <p className="text-xs uppercase tracking-widest text-[#C4EF7A] mb-3">
            The Result
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold leading-snug max-w-2xl">
            {project.result}
          </p>
        </div>

        {/* Gallery — masonry CSS columns, respects all aspect ratios
        {project.gallery && project.gallery.length > 0 && (
          <div className="cs-section mb-20">
            <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-8">
              Gallery
            </p>
            <div
              style={{
                columns: project.gallery.length === 1 ? 1 : 2,
                gap: "12px",
              }}
            >
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="cs-gallery-item break-inside-avoid mb-3 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Footer nav */}
        <div className="cs-section flex items-center justify-between pt-10 border-t border-[#121212]/10">
          <BackButton />
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
