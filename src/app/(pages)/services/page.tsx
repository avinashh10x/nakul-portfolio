"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { servicesData, personalInfo } from "@/data/siteData";
import Footer2 from "@/component/Footer2";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  play: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  film: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
      />
    </svg>
  ),
  reels: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),
  heart: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
};

function ServicesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
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
          What I Offer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#121212] leading-[0.95] tracking-[-0.04em]">
          Services
        </h1>
        <p className="mt-6 text-lg text-[#121212]/60 max-w-xl mx-auto">
          End-to-end video editing and motion design services — from concept to
          final delivery, tailored to your platform and audience.
        </p>
      </div>

      {/* Service Cards */}
      <div
        ref={cardsRef}
        className="max-w-[1200px] mx-auto px-6 md:px-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {servicesData.map((service, i) => (
          <div
            key={service.title}
            className="service-card bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:bg-[#121212] transition-colors duration-500"
          >
            {/* Top */}
            <div>
              {/* Icon + Title */}
              <div className="flex items-start justify-between mb-8">
                <div className="text-[#4E94C2] group-hover:text-[#C4EF7A] transition-colors duration-500">
                  {iconMap[service.icon] || iconMap.play}
                </div>
                <span className="text-xs font-mono text-[#121212]/30 group-hover:text-white/30 transition-colors duration-500">
                  0{i + 1}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#121212] group-hover:text-white transition-colors duration-500 mb-3">
                {service.title}
              </h2>

              <p className="text-xs font-mono text-[#4E94C2] tracking-wider uppercase mb-6 group-hover:text-[#C4EF7A] transition-colors duration-500">
                For {service.forWho}
              </p>

              <p className="text-[#121212]/60 group-hover:text-white/60 transition-colors duration-500 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Includes */}
              <div className="mb-8">
                <p className="text-xs font-mono text-[#121212]/40 group-hover:text-white/40 tracking-widest uppercase mb-4 transition-colors duration-500">
                  What&apos;s Included
                </p>
                <ul className="space-y-2.5">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#121212]/70 group-hover:text-white/70 transition-colors duration-500"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4EF7A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-6 border-t border-[#121212]/10 group-hover:border-white/10 transition-colors duration-500">
              <span className="text-sm font-mono text-[#121212]/40 group-hover:text-white/40 transition-colors duration-500">
                {service.timeline}
              </span>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-[#121212] text-white text-sm font-medium group-hover:bg-[#C4EF7A] group-hover:text-[#121212] transition-all duration-500"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#4E94C2] py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need something custom?
          </h2>
          <p className="text-lg text-white/70 max-w-lg mx-auto mb-10">
            Every project is unique. Let&apos;s discuss your specific needs and
            build a package that fits.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#121212] rounded-full font-bold text-lg hover:bg-[#C4EF7A] transition-colors duration-300"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default ServicesPage;
