"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const text = "SAIKAT MUKHERJEE";
  const letters = text.split("");

  const containerVariants: any = {
    hidden: { opacity: 1 }, // Wrapper is visible initially to hide background
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const letterVariants: any = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  useEffect(() => {
    // Total animation time is roughly:
    // 0.3s delay + (16 letters * 0.08s stagger) + 0.8s reveal + 1s hold = ~3.38s
    const timer = setTimeout(() => {
      onComplete();
    }, 3400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none bg-navy-950"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative flex items-center justify-center">
        {/* Staggered Cinematic Text Reveal */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-widest text-center whitespace-nowrap flex text-gradient-silver">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={letter === " " ? "w-4 md:w-8" : ""}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Global Glow Pulse that kicks in as the letters finish revealing */}
        <motion.div
          className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full z-[-1]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.2, 1.8] }}
          transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
