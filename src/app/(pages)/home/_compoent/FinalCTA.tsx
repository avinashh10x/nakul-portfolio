"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-anim"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black py-28 md:py-40 text-center"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <h2 className="cta-anim text-5xl md:text-7xl font-bold text-black leading-[0.95] tracking-[-0.04em]">
          Let&apos;s create something unforgettable.
        </h2>
        <p className="cta-anim text-black/50 text-base md:text-lg mt-6 max-w-xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s
          bring your vision to life.
        </p>
        <div className="cta-anim flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#4E94C2] text-white rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#3d7ba3] transition-colors duration-300"
          >
            Start a Project
          </Link>
          <a
            href="mailto:avinash@example.com"
            className="px-8 py-4 border-2 border-black/30 text-black rounded-full text-sm font-semibold uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
