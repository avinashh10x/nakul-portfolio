"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const scrollTextRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      title: "Storytelling",
      text: "Every frame tells a story. I craft compelling narratives through precise cuts, seamless transitions, and emotional pacing that captivates audiences and brings your vision to life.",
      num: "(01)",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      bgColor: "bg-[#F1F1F1]",
      textColor: "text-[#121212]",
    },
    {
      title: "Technical Mastery",
      text: "From color grading to motion graphics, I leverage industry-standard tools like Premiere Pro, After Effects, and DaVinci Resolve to deliver professional-grade content that exceeds expectations.",
      num: "(02)",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
      bgColor: "bg-[#C4EF7A]",
      textColor: "text-[#527200]",
    },
    {
      title: "Creative Vision",
      text: "I don't just edit footage—I transform raw content into cinematic experiences. With a keen eye for composition, rhythm, and visual aesthetics, I elevate every project to its full potential.",
      num: "(03)",
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
      bgColor: "bg-[#FC4C3B]",
      textColor: "text-white",
    },
    {
      title: "Client Collaboration",
      text: "Your vision is my priority. I work closely with clients through every stage—from initial concept to final delivery—ensuring the end result perfectly aligns with your goals and brand identity.",
      num: "(04)",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      bgColor: "bg-[#F1F1F1]",
      textColor: "text-[#121212]",
    },
    {
      title: "Trend Awareness",
      text: "The digital landscape evolves fast. I stay ahead of the curve with the latest editing techniques, trending formats, and platform-specific optimization to keep your content fresh and engaging.",
      num: "(05)",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
      bgColor: "bg-[#C4EF7A]",
      textColor: "text-[#527200]",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !scrollTextRef.current) return;

    // Hide "Scroll" text when section starts
    gsap.to(scrollTextRef.current, {
      autoAlpha: 0,
      duration: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "top top-=1",
        toggleActions: "play none reverse none",
      },
    });

    // Animate each slide
    const slideElements = document.querySelectorAll(".experience-slide");

    slideElements.forEach((slide) => {
      const contentWrapper = slide.querySelector(
        ".content-wrapper",
      ) as HTMLElement;
      const content = slide.querySelector(".content") as HTMLElement;

      if (!contentWrapper || !content) return;

      // 3D rotation and scale animation
      gsap.to(content, {
        rotationZ: (Math.random() - 0.5) * 10, // Random rotation between -5 and 5 degrees
        scale: 0.7,
        rotationX: 40,
        ease: "power1.in",
        scrollTrigger: {
          pin: contentWrapper,
          trigger: slide,
          start: "top 0%",
          end: `+=${window.innerHeight}`,
          scrub: true,
        },
      });

      // Fade out animation
      gsap.to(content, {
        autoAlpha: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: content,
          start: "top -80%",
          end: `+=${0.2 * window.innerHeight}`,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative">
      <div className="text-6xl font-bold text-center absolute left-1/2  -translate-x-1/2 z-10 top-52">
        <h3>Experiences</h3>
        <br />
        <p className="text-2xl">
          A timeline of roles, collaborations, апа learnings that shaped how |
          think and design today.
        </p>
      </div>
      <div
        ref={sectionRef}
        className="relative overflow-hidden py-[100vh] bg-[#4E94C2]"
      >
        <p
          ref={scrollTextRef}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F1F1F1] text-2xl font-medium"
        ></p>

        <div>
          {slides.map((slide, index) => (
            <div key={index} className="experience-slide h-screen ">
              <div
                className="content-wrapper w-full h-full"
                style={{ perspective: "250vw" }}
              >
                <div
                  className={`content absolute inset-0 ${slide.bgColor} ${slide.textColor} px-6 py-6 md:px-12 md:py-6 flex flex-col justify-between`}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 10%",
                  }}
                >
                  {/* Top section */}
                  <div className="flex justify-between items-center">
                    <p className="text-[8.5vw] font-medium leading-[0.9] tracking-[-0.06em]">
                      {slide.title}
                    </p>
                    {/* SVG Icon */}
                    <svg
                      className="w-[5.7vw] h-auto block"
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

                  {/* Bottom section */}
                  <div className="flex justify-between items-end gap-4">
                    <p className="w-[32vw] text-[1.6vw] font-medium leading-[1.1] tracking-[-0.03em] flex items-end">
                      {slide.text}
                    </p>
                    <div className="flex gap-6 text-[8.5vw] font-medium leading-[0.9] tracking-[-0.06em]">
                      <p className="num">{slide.num}</p>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-[25vw] rounded-sm object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
