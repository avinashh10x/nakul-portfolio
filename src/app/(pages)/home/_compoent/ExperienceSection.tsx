"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "@/data/siteData";

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  title: string;
  text: string;
  num: string;
  image: string;
  bgColor: string;
  textColor: string;
}

function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = experienceData.slides;

  useEffect(() => {
    if (!sectionRef.current || !stackContainerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".experience-card");
    const totalCards = cards.length;

    // Only enough scroll for cards to stack — no exit animation needed.
    // Section unpins immediately after last card, next content scrolls naturally.
    const totalScrollLength = (totalCards - 1) * window.innerHeight * 0.7;

    // Set first card visible immediately
    gsap.set(cards[0], { y: 0, scale: 1, rotation: 0, autoAlpha: 1 });

    // Set all other cards below the viewport (ready to slide up)
    cards.forEach((card, i) => {
      if (i > 0) {
        gsap.set(card, {
          y: window.innerHeight,
          scale: 1,
          rotation: 0,
          autoAlpha: 1,
        });
      }
      // z-index: later cards on top
      card.style.zIndex = String(i + 1);
    });

    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScrollLength}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // For each card (except the first), animate it sliding up into the stack.
    cards.forEach((card, i) => {
      if (i === 0) return;

      const label = `card${i}`;
      masterTl.addLabel(label);

      // Animate new card sliding up from below
      masterTl.to(
        card,
        {
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        label,
      );

      // Simultaneously scale down & rotate all previously stacked cards
      for (let j = 0; j < i; j++) {
        const stackOffset = i - j;
        masterTl.to(
          cards[j],
          {
            scale: 1 - stackOffset * 0.04,
            rotation: stackOffset * (j % 2 === 0 ? -1.5 : 1.5),
            y: -stackOffset * 15,
            duration: 1,
            ease: "power2.out",
          },
          label,
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Heading scrolls away naturally before cards pin */}
      <div className="bg-[#ffffff] pt-96 text-center text-black">
        <h3 className="text-6xl font-bold">{experienceData.heading}</h3>
        <br />
        <p className="text-2xl max-w-2xl mx-auto">
          {experienceData.subheading}
        </p>
      </div>

      <section className="relative">
        <div
          ref={sectionRef}
          className="relative h-screen overflow-hidden bg-[#ffffff]"
        >
          {/* Stack container – all cards are absolutely positioned inside */}
          <div
            ref={stackContainerRef}
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="experience-card absolute w-[90vw] h-[60vh] md:w-[60vw] md:h-[60vh]"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div
                  className={`w-full h-full ${slide.bgColor} ${slide.textColor} px-5 py-5 md:px-12 md:py-6 flex flex-col justify-between rounded-lg shadow-2xl overflow-hidden`}
                >
                  {/* Top section */}
                  <div className="flex justify-between items-start">
                    <p className="text-[12vw] md:text-[5vw] font-medium leading-[0.9] tracking-[-0.06em]">
                      {slide.title}
                    </p>
                    {/* SVG Icon */}
                    <svg
                      className="w-[6vw] md:w-[2vw] h-auto block shrink-0 mt-1"
                      width="81"
                      height="82"
                      viewBox="0 0 81 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M52.9696 64.5854C51.6459 63.2617 49.6094 63.2617 48.2857 64.5854L42.7872 70.0839C41.4635 71.4076 39.4271 71.4076 38.1034 70.0839L32.4013 64.3818C31.0776 63.0581 31.0775 61.0216 32.4013 59.6979L80.971 11.1282L70.585 0.742188L22.0153 49.3119C20.6916 50.6356 18.6551 50.6356 17.3314 49.3119L11.6293 43.6098C10.3056 42.2861 10.3056 40.2497 11.6293 38.926L17.1277 33.4275C18.4515 32.1038 18.4515 30.0673 17.1277 28.7436L11.4256 23.0415C10.1019 21.7178 10.1019 19.6813 11.4256 18.3576L16.9241 12.8592C18.2478 11.5355 18.2478 9.499 16.9241 8.17529L11.222 2.47318C9.89828 1.14948 7.86182 1.14948 6.53812 2.47319L1.03965 7.97165C-0.284051 9.29535 -0.284051 11.3318 1.03965 12.6555L6.74177 18.3576C8.06547 19.6813 8.06546 21.7178 6.74176 23.0415L1.2433 28.54C-0.0804043 29.8637 -0.0804005 31.9001 1.2433 33.2238L6.94541 38.9259C8.26912 40.2497 8.26911 42.2861 6.94541 43.6098L1.44694 49.1083C0.123239 50.432 0.123243 52.4685 1.44694 53.7922L7.14905 59.4943C8.47276 60.818 8.47276 62.8545 7.14906 64.1782L1.6506 69.6766C0.326892 71.0003 0.32689 73.0368 1.6506 74.3605L7.3527 80.0626C8.67641 81.3863 10.7129 81.3863 12.0366 80.0626L17.535 74.5641C18.8587 73.2404 20.8952 73.2404 22.2189 74.5641L27.921 80.2662C29.2447 81.5899 31.2812 81.59 32.6049 80.2663L38.1034 74.7678C39.4271 73.4441 41.4635 73.4441 42.7872 74.7678L48.4893 80.4699C49.8131 81.7936 51.8495 81.7936 53.1732 80.4699L58.6717 74.9714C59.9954 73.6477 62.0319 73.6477 63.3556 74.9714L69.0577 80.6735C70.3814 81.9972 72.4178 81.9972 73.7415 80.6735L79.24 75.1751C80.5637 73.8514 80.5637 71.8149 79.24 70.4912L73.5379 64.7891C72.2142 63.4654 70.1777 63.4654 68.854 64.7891L63.3556 70.2876C62.0319 71.6113 59.9954 71.6113 58.6717 70.2876L52.9696 64.5854ZM22.2189 69.8803C20.8952 71.204 18.8587 71.204 17.535 69.8803L11.8329 64.1782C10.5092 62.8544 10.5092 60.818 11.8329 59.4943L17.3314 53.9958C18.6551 52.6721 20.6916 52.6721 22.0153 53.9958L27.7174 59.6979C29.0411 61.0216 29.0411 63.0581 27.7174 64.3818L22.2189 69.8803Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Bottom section — stacked on mobile, side-by-side on desktop */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-4">
                    <div className="flex items-end justify-between w-full md:w-auto gap-3">
                      <p className="md:w-[28vw] w-full text-left text-[5vw] md:text-[2vw] font-medium leading-[1.1] tracking-[-0.03em]">
                        {slide.text}
                      </p>
                      <p className="text-[12vw] md:text-[2vw] font-medium leading-[0.9] tracking-[-0.06em] shrink-0 md:hidden">
                        {slide.num}
                      </p>
                    </div>
                    <div className="flex gap-4 md:gap-6 items-end w-full md:w-auto">
                      <p className="hidden md:block text-[4vw] font-medium leading-[0.9] tracking-[-0.06em]">
                        {slide.num}
                      </p>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-[20vh] md:w-[20vw] md:h-[26vh] m-2 rounded-sm object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ExperienceSection;
