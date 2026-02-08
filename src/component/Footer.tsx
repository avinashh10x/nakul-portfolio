"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create quickTo functions for smooth CSS variable updates
    const xTo = gsap.quickTo(".duplicate", "--xpercent", {
      duration: 0.4,
      ease: "back",
    });

    const yTo = gsap.quickTo(".duplicate", "--ypercent", {
      duration: 0.4,
      ease: "back",
    });

    const handleMouseMove = (e: MouseEvent) => {
      // Map mouse X position to 0-100 range
      const mRangeX = gsap.utils.mapRange(
        0,
        window.innerWidth,
        0,
        100,
        e.clientX,
      );
      xTo(mRangeX);

      // Map mouse Y position relative to element bounds to 0-100 range
      const target = e.currentTarget as HTMLElement;
      const bound = target.getBoundingClientRect();
      const mRangeY = gsap.utils.mapRange(
        bound.top,
        bound.top + bound.height,
        0,
        100,
        e.clientY,
      );
      yTo(mRangeY);
    };

    sectionRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#4E94C2] text-[#F1F1F1] w-full flex items-end "
    >
      <div className="relative pointer-events-none  flex items-end h-screen w-full">
        {/* Main container */}
        <div className="relative px-6 h-screen w-full space-y-12 ">
          {/* Header */}
          <div className="flex justify-between w-full py-6">
            <p className="uppercase tracking-[-0.01em] text-xs">
              
            </p>
            <p className="uppercase tracking-[-0.01em] text-xs"></p>
            <p className="uppercase tracking-[-0.01em] text-xs"></p>
            <p className="uppercase tracking-[-0.01em] text-xs"></p>
          </div>

          {/* Line 1 */}
          <div className="flex items-center justify-between">
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium -ml-[0.07em]">
              Need a video
            </p>
          </div>

          {/* Line 2 */}
          <div className="flex items-center justify-between">
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium -ml-[0.07em]">
              editor
            </p>
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80"
              alt="Video editing"
              className="w-[11.2vw] aspect-[1.5] object-cover translate-y-[-5%] rounded-[0.5vw]"
            />
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium">
              for your
            </p>
          </div>

          {/* Line 3 */}
          <div className="flex items-center justify-between">
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium -ml-[0.07em]">
              project?
            </p>
            <svg
              className="w-[7.8vw] h-auto"
              fill="none"
              height="115"
              viewBox="0 0 118 115"
              width="118"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path d="m76.5346 31.8467 41.4654 41.5767-41.4654 41.5766h-18.429l33.9984-34.0896h-92.0658671v-14.974h92.0658671l-33.9984-34.0897z" />
                <path d="m.00000377 80.7447-.00000377-80.74469922 14.6416-.00000078v80.7447z" />
              </g>
            </svg>
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium">
              @niks
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between w-full py-6 relative border-t border-[rgb(205,205,205)] mt-12">
            <p className="uppercase tracking-[-0.01em] text-xs text-[rgb(205,205,205)]">
              Instagram
            </p>
            <p className="uppercase tracking-[-0.01em] text-xs text-[rgb(205,205,205)]">
              LinkedIn
            </p>
            <p className="uppercase tracking-[-0.01em] text-xs text-[rgb(205,205,205)]">
              hello@nakul.com
            </p>
            <p className="uppercase tracking-[-0.01em] text-xs text-[rgb(205,205,205)]">
              Mumbai
            </p>
          </div>
        </div>

        {/* Duplicate container with radial mask */}
        <div
          className="duplicate absolute top-0 left-0 w-full text-[#C9FE6E] px-6 h-screen space-y-12"
          style={{
            // @ts-ignore - CSS custom properties
            "--xpercent": "50%",
            "--ypercent": "50%",
            maskImage:
              "radial-gradient(circle at var(--xpercent) var(--ypercent), #000 20%, transparent 25%)",
            WebkitMaskImage:
              "radial-gradient(circle at var(--xpercent) var(--ypercent), #000 20%, transparent 25%)",
          }}
          aria-hidden="true"
        >
          {/* Header */}
          <div className="flex justify-between w-full py-6">
            <p className="uppercase tracking-[-0.01em] text-xs"></p>
            <p className="uppercase tracking-[-0.01em] text-xs"></p>
            <p className="uppercase tracking-[-0.01em] text-xs"></p>
            <p className="uppercase tracking-[-0.01em] text-xs"></p>
          </div>

          {/* Line 1 */}
          <div className="flex items-center justify-between">
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium -ml-[0.07em]">
              Need a video
            </p>
          </div>

          {/* Line 2 */}
          <div className="flex items-center justify-between">
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium -ml-[0.07em]">
              editor
            </p>
            <img
              src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&q=80"
              alt="Video editing"
              className="w-[11.2vw] aspect-[1.5] object-cover translate-y-[-5%] rounded-[0.5vw]"
            />
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium">
              for your
            </p>
          </div>

          {/* Line 3 */}
          <div className="flex items-center justify-between">
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium -ml-[0.07em]">
              project?
            </p>
            <svg
              className="w-[7.8vw] h-auto"
              fill="none"
              height="115"
              viewBox="0 0 118 115"
              width="118"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path d="m76.5346 31.8467 41.4654 41.5767-41.4654 41.5766h-18.429l33.9984-34.0896h-92.0658671v-14.974h92.0658671l-33.9984-34.0897z" />
                <path d="m.00000377 80.7447-.00000377-80.74469922 14.6416-.00000078v80.7447z" />
              </g>
            </svg>
            <p className="text-[8.5vw] leading-[0.9] tracking-[-0.05em] uppercase font-medium">
              @niks
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between w-full py-6 relative border-t border-[#C9FE6E] mt-12">
            <p className="uppercase tracking-[-0.01em] text-xs text-[#ffffff]">
              Instagram
            </p>
            <p className="uppercase tracking-[-0.01em] text-xs text-[#F1F1F1]">
              LinkedIn
            </p>
            <p className="uppercase tracking-[-0.01em] text-xs text-[#F1F1F1]">
              hello@nakul.com
            </p>
            <p className="uppercase tracking-[-0.01em] text-xs text-[#F1F1F1]">
              Mumbai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
