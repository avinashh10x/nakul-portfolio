"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { aboutPageData, personalInfo } from "@/data/siteData";
import Footer2 from "@/component/Footer2";

gsap.registerPlugin(ScrollTrigger);

function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".about-section").forEach((section) => {
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

      // Tool bars animation
      gsap.utils.toArray<HTMLElement>(".tool-bar-fill").forEach((bar) => {
        gsap.from(bar, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Header */}
      <div
        ref={headerRef}
        className="max-w-[1200px] mx-auto pt-32 pb-16 px-6 md:px-16 text-center"
      >
        <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
          About
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#121212] leading-[0.95] tracking-[-0.04em] max-w-4xl mx-auto">
          {aboutPageData.headline}
        </h1>
      </div>

      <div ref={contentRef} className="max-w-[1200px] mx-auto px-6 md:px-16">
        {/* Bio + Image */}
        <div className="about-section grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pb-24">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
            <Image
              src={aboutPageData.profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Bio text */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {aboutPageData.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-[#121212]/70 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="about-section py-24 border-t border-[#121212]/10 text-center">
          <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-8">
            Philosophy
          </p>
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#121212] leading-[1.1] max-w-4xl mx-auto">
            &ldquo;{aboutPageData.philosophy}&rdquo;
          </blockquote>
        </div>

        {/* Tools & Skills */}
        <div className="about-section py-24 border-t border-[#121212]/10 text-center">
          <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-12">
            Tools & Expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl">
            {aboutPageData.tools.map((tool) => (
              <div key={tool.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#121212]">
                    {tool.name}
                  </span>
                  <span className="text-xs font-mono text-[#121212]/40">
                    {tool.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#121212]/10 rounded-full overflow-hidden">
                  <div
                    className="tool-bar-fill h-full bg-[#4E94C2] rounded-full"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="about-section py-24 border-t border-[#121212]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-[#4E94C2] mb-3">
                Vision
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-[#121212] leading-snug">
                Where I&apos;m headed
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-[#121212]/70 leading-relaxed">
                {aboutPageData.vision}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-section pb-24 pt-8 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#121212] text-white rounded-full font-bold text-lg hover:bg-[#121212]/80 transition-colors"
          >
            Work With Me
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 border-2 border-[#121212] text-[#121212] rounded-full font-bold text-lg hover:bg-[#121212] hover:text-white transition-colors"
          >
            View My Work
          </Link>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default AboutPage;
