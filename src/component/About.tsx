"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const pinHeightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sentencesRef = useRef<(HTMLDivElement | null)[]>([]);

  const sentences = [
    '"Every edit',
    "tells a story,",
    "every frame",
    'matters."',
  ];

  // Utility function to wrap letters in span
  const wrapLettersInSpan = (text: string) => {
    return text
      .split("")
      .map((char) => (char === " " ? "<span> </span>" : `<span>${char}</span>`))
      .join("");
  };

  useEffect(() => {
    if (!pinHeightRef.current || !containerRef.current) return;

    // Pin the container during scroll
    ScrollTrigger.create({
      trigger: pinHeightRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: containerRef.current,
    });

    // Create timeline for sentence animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinHeightRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    sentencesRef.current.forEach((sentence, index) => {
      if (!sentence) return;

      const nextSentence = sentencesRef.current[index + 1];
      if (nextSentence) {
        // Move current sentence up and out
        tl.to(sentence, {
          yPercent: -50,
          y: "-50vh",
          ease: "power4.in",
        });

        // Move current sentence letters up with stagger
        tl.to(
          sentence.querySelectorAll("span"),
          {
            yPercent: -50,
            y: "-50vh",
            stagger: -0.02,
            ease: "power2.in",
          },
          "<",
        );

        // Move next sentence in from below
        tl.from(
          nextSentence,
          {
            yPercent: 50,
            y: "50vh",
            ease: "power4.out",
          },
          "<",
        );

        // Move next sentence letters in with stagger
        tl.from(
          nextSentence.querySelectorAll("span"),
          {
            yPercent: 50,
            y: "50vh",
            ease: "power2.out",
            stagger: -0.02,
          },
          "<",
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative bg-[#4E94C2] text-[#F1F1F1]">
      <div ref={pinHeightRef} className="h-[600vh]">
        <div ref={containerRef} className="flex items-center h-screen">
          {/* Center animated sentences */}
          <div className="relative w-full">
            {sentences.map((sentence, index) => (
              <div
                key={index}
                ref={(el) => {
                  sentencesRef.current[index] = el;
                }}
                className={`w-full text-center flex justify-center text-[10vw] leading-[0.9] font-medium ${
                  index !== 0 ? "absolute left-0 top-0" : ""
                }`}
                dangerouslySetInnerHTML={{
                  __html: wrapLettersInSpan(sentence),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
