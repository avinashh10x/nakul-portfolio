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
  const animationFrameRef = useRef<number>(undefined);

  useEffect(() => {
    if (!isDisintegrating) {
      setOpacity(0);
      const timer = setTimeout(() => setOpacity(1), 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isDisintegrating]);

  useEffect(() => {
    const showDuration = 2000;
    const disintegrateDuration = 1500;

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

    const rect = textRef.current.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = rect.width;
    tempCanvas.height = rect.height;

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

    const sampling = 4;
    for (let y = 0; y < tempCanvas.height; y += sampling) {
      for (let x = 0; x < tempCanvas.width; x += sampling) {
        const index = (y * tempCanvas.width + x) * 4;
        const alpha = imageData.data[index + 3];

        if (alpha > 128) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 2 + Math.random() * 6;
          particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - Math.random() * 2,
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
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1;
      particle.life--;

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
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ zIndex: 10 }}
      />

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
