"use client";

import { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  activeSection: string;
}

export default function ParticleBackground({ activeSection }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetColorRef = useRef({ r: 34, g: 211, b: 238 });
  const currentColorRef = useRef({ r: 34, g: 211, b: 238 });

  useEffect(() => {
    switch (activeSection) {
      case "about":
        targetColorRef.current = { r: 45, g: 212, b: 191 }; // Teal
        break;
      case "education":
        targetColorRef.current = { r: 167, g: 139, b: 250 }; // Violet
        break;
      case "skills":
        targetColorRef.current = { r: 52, g: 211, b: 153 }; // Emerald
        break;
      case "projects":
        targetColorRef.current = { r: 251, g: 113, b: 133 }; // Rose
        break;
      case "certifications":
        targetColorRef.current = { r: 251, g: 191, b: 36 }; // Amber
        break;
      case "contact":
        targetColorRef.current = { r: 34, g: 211, b: 238 }; // Cyan
        break;
      case "hero":
      default:
        targetColorRef.current = { r: 34, g: 211, b: 238 }; // Cyan
        break;
    }
  }, [activeSection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen size, cap at 120
      const numParticles = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 120);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth color transition
      currentColorRef.current.r = lerp(currentColorRef.current.r, targetColorRef.current.r, 0.02);
      currentColorRef.current.g = lerp(currentColorRef.current.g, targetColorRef.current.g, 0.02);
      currentColorRef.current.b = lerp(currentColorRef.current.b, targetColorRef.current.b, 0.02);

      const r = Math.round(currentColorRef.current.r);
      const g = Math.round(currentColorRef.current.g);
      const b = Math.round(currentColorRef.current.b);

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Draw connecting lines (Neural Network aesthetic)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            // Opacity fades out as distance increases
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(1 - distance / 160) * 0.4})`; // Dynamic lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw lines to mouse (Interactive Neural Network)
      for (let i = 0; i < particles.length; i++) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(1 - distance / 200) * 0.8})`; // Brighter dynamic for mouse
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Subtle attraction force to mouse
          particles[i].x -= dx * 0.01;
          particles[i].y -= dy * 0.01;
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`;
        ctx.fill();
        
        // Add a subtle glow to nodes
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 1)`;
      });
      ctx.shadowBlur = 0; // Reset shadow for lines

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Initialize
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
}
