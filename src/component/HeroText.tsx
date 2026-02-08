"use client";
import React, { useEffect, useRef, useState } from "react";

const texts = ["Welcome", "Namaste", "Ciao", "Konnichiwa"];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

function HeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDisintegrating, setIsDisintegrating] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  // Fade in effect
  useEffect(() => {
    if (!isDisintegrating) {
      setOpacity(0);
      const timer = setTimeout(() => setOpacity(1), 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isDisintegrating]);

  // Main animation cycle
  useEffect(() => {
    const showDuration = 2000; // Show text for 2 seconds
    const disintegrateDuration = 1500; // Disintegrate over 1.5 seconds

    const timer = setTimeout(() => {
      setIsDisintegrating(true);
      createParticles();

      setTimeout(() => {
        setIsDisintegrating(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, disintegrateDuration);
    }, showDuration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const createParticles = () => {
    if (!textRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to match text container
    const rect = textRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Create temporary canvas to get text pixels
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = rect.width;
    tempCanvas.height = rect.height;

    // Draw text to get pixel data
    tempCtx.font = "bold 3rem sans-serif";
    tempCtx.fillStyle = "#000000";
    tempCtx.textAlign = "center";
    tempCtx.textBaseline = "middle";
    tempCtx.fillText(
      texts[currentIndex],
      tempCanvas.width / 2,
      tempCanvas.height / 2,
    );

    const imageData = tempCtx.getImageData(
      0,
      0,
      tempCanvas.width,
      tempCanvas.height,
    );
    const particles: Particle[] = [];

    // Sample pixels and create particles
    const sampling = 4; // Sample every 4th pixel for performance
    for (let y = 0; y < tempCanvas.height; y += sampling) {
      for (let x = 0; x < tempCanvas.width; x += sampling) {
        const index = (y * tempCanvas.width + x) * 4;
        const alpha = imageData.data[index + 3];

        if (alpha > 128) {
          // Create particle from this pixel with explosive spread
          const angle = Math.random() * Math.PI * 2; // Random direction
          const speed = 2 + Math.random() * 6; // Random speed for variety
          particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed, // Radial horizontal velocity
            vy: Math.sin(angle) * speed - Math.random() * 2, // Radial vertical velocity with upward bias
            life: 1,
            maxLife: 60 + Math.random() * 40,
            size: 2 + Math.random() * 3,
            color: `rgba(0, 0, 0, ${alpha / 255})`,
          });
        }
      }
    }

    particlesRef.current = particles;
    animateParticles();
  };

  const animateParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.filter((particle) => {
      // Update particle
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // Gravity
      particle.life--;

      // Draw particle
      const lifeRatio = particle.life / particle.maxLife;
      ctx.globalAlpha = lifeRatio;
      ctx.fillStyle = particle.color;
      ctx.fillRect(particle.x, particle.y, particle.size, particle.size);

      return particle.life > 0;
    });

    if (particlesRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animateParticles);
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-32">
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 10 }}
      />

      {/* Text */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
        style={{
          opacity: isDisintegrating ? 0 : opacity,
          zIndex: 5,
        }}
      >
        <p className="text-5xl font-bold whitespace-nowrap">
          {texts[currentIndex]}
        </p>
      </div>
    </div>
  );
}

export default HeroText;
