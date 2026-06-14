"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Phone, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const leftSlide: any = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const rightSlide: any = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-24 pt-24">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          className="flex flex-col space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={leftSlide}>
            <h2 className="text-cyan-400 font-mono text-sm md:text-base tracking-widest uppercase mb-6">AI/ML, Cloud & Full Stack Engineer</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-silver tracking-tight leading-tight">
              Architecting Intelligent <br /> Systems.
            </h1>
          </motion.div>
          
          <motion.p variants={leftSlide} className="text-silver-400 text-lg md:text-xl max-w-lg leading-relaxed h-20">
            <Typewriter
              words={[
                "I engineer scalable cloud architectures.",
                "I build intelligent AI/ML pipelines.",
                "I craft high-performance full-stack web applications.",
                "I design futuristic, cinematic digital experiences."
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.p>

          <motion.div variants={leftSlide} className="flex items-center space-x-5 pt-4">
            <motion.a 
              variants={iconVariants}
              href="https://github.com/Slothyi" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors hover:text-cyan-400"
            >
              <FaGithub className="w-5 h-5 text-silver-300 transition-colors hover:text-cyan-400" />
            </motion.a>
            <motion.a 
              variants={iconVariants}
              href="https://www.linkedin.com/in/saikat-mukherjee-cse" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors hover:text-cyan-400"
            >
              <FaLinkedin className="w-5 h-5 text-silver-300 transition-colors hover:text-cyan-400" />
            </motion.a>
            <motion.a 
              variants={iconVariants}
              href="mailto:saikatm572@gmail.com" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors hover:text-cyan-400"
            >
              <Mail className="w-5 h-5 text-silver-300 transition-colors hover:text-cyan-400" />
            </motion.a>
            <motion.a 
              variants={iconVariants}
              href="tel:+917908555103" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors hover:text-cyan-400"
            >
              <Phone className="w-5 h-5 text-silver-300 transition-colors hover:text-cyan-400" />
            </motion.a>
          </motion.div>

          <motion.div variants={leftSlide} className="pt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="glass-panel px-8 py-4 rounded-full flex items-center justify-center space-x-3 text-cyan-400 font-medium hover:drop-shadow-neon transition-all duration-300 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/Saikat_Mukherjee_Resume.pdf"
              download="Saikat_Mukherjee_Resume.pdf"
              className="px-8 py-4 rounded-full flex items-center justify-center space-x-3 text-silver-100 font-medium bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-300 group"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div 
          className="flex justify-center md:justify-end"
          initial="hidden"
          animate="visible"
          variants={rightSlide}
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
          >
            <div className="absolute inset-0 bg-cyan-500/20 rounded-[50%] blur-3xl animate-pulse" />
            <div className="glass-panel w-full h-full overflow-hidden relative z-10 border-cyan-500/30 p-2 rounded-full">
              <div className="w-full h-full bg-navy-800 flex items-center justify-center overflow-hidden rounded-full">
                 <img src="/profile.jpeg" alt="Saikat Mukherjee" className="w-full h-full object-cover opacity-90 scale-[1.15]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
