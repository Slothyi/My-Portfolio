"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "skills", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundColor = () => {
    switch (activeSection) {
      case "about":
        return "radial-gradient(ellipse at center, rgba(13, 40, 50, 1) 0%, rgba(10, 15, 30, 1) 100%)"; // Teal tint
      case "education":
        return "radial-gradient(ellipse at center, rgba(30, 20, 50, 1) 0%, rgba(10, 15, 30, 1) 100%)"; // Violet tint
      case "skills":
        return "radial-gradient(ellipse at center, rgba(10, 40, 30, 1) 0%, rgba(10, 15, 30, 1) 100%)"; // Emerald tint
      case "projects":
        return "radial-gradient(ellipse at center, rgba(50, 20, 30, 1) 0%, rgba(10, 15, 30, 1) 100%)"; // Rose tint
      case "certifications":
        return "radial-gradient(ellipse at center, rgba(50, 40, 10, 1) 0%, rgba(10, 15, 30, 1) 100%)"; // Amber tint
      case "contact":
        return "radial-gradient(ellipse at center, rgba(10, 35, 50, 1) 0%, rgba(10, 15, 30, 1) 100%)"; // Cyan tint
      case "hero":
      default:
        return "radial-gradient(ellipse at center, var(--color-navy-900) 0%, var(--color-navy-950) 100%)"; // Default navy
    }
  };

  return (
    <main className="relative min-h-screen text-silver-100 selection:bg-cyan-500/30">
      {/* Smooth Global Background Transition */}
      <motion.div 
        className="fixed inset-0 z-[-1]"
        animate={{ background: getBackgroundColor() }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <ParticleBackground activeSection={activeSection} />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <>
            <Navbar key="navbar" activeSection={activeSection} />
            <div id="hero">
              <Hero key="hero" />
            </div>
            <About key="about" />
            <Education key="education" />
            <Skills key="skills" />
            <Projects key="projects" />
            <Certifications key="certifications" />
            <Contact key="contact" />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
