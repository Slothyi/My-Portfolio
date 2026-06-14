"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "AttendancePRO",
    subtitle: "Automated Attendance System",
    techStack: ["Kotlin", "FastAPI", "Python", "MongoDB"],
    description: [
      "Developed a multi-factor attendance system with GPS geo-fencing (200m), BLE classroom beacon verification, and server-side facial recognition (128-dim embeddings) to eliminate proxy attendance.",
      "Engineered an Android app with ML Kit liveness detection (blink tracking, head movement), CameraX, Retrofit API client, and real-time face capture to prevent photo spoofing.",
      "Architected a FastAPI backend with JWT authentication, bcrypt, single-session enforcement, MongoDB persistence, and styled Excel attendance reports via openpyxl."
    ],
    links: { github: "#", demo: "#" }
  },
  {
    title: "AI-Based Fake Currency Detection",
    subtitle: "Computer Vision & Deep Learning",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    description: [
      "Developed a CNN-based counterfeit currency detector using TensorFlow/Keras with data augmentation and hyperparameter tuning.",
      "Implemented image preprocessing (grayscale, resizing, normalization, noise filtering) and deployed a real-time interface via Flask/Streamlit."
    ],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Number Shifting Game",
    subtitle: "15-Puzzle Implementation",
    techStack: ["C", "Data Structures", "Algorithms"],
    description: [
      "Built a classic 15-puzzle game in C with arrow-key navigation, random matrix generation, and win/loss detection logic."
    ],
    links: { github: "#" }
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-24 z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-silver-100 tracking-tight mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-silver-400 text-lg">Systems and applications I've engineered from scratch.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-panel p-8 rounded-2xl flex flex-col hover:border-cyan-500/40 transition-colors group ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-navy-800 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-cyan-500/10">
                  <FolderGit2 className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex space-x-3">
                  {project.links.github && (
                    <a href={project.links.github} className="text-silver-400 hover:text-cyan-400 transition-colors">
                      <FaGithub className="w-6 h-6" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} className="text-silver-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-silver-100 mb-1 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-cyan-400/80 font-mono text-sm mb-6">{project.subtitle}</p>

              <div className="flex-1 space-y-3 mb-8">
                {project.description.map((desc, dIdx) => (
                  <p key={dIdx} className="text-silver-400 leading-relaxed text-sm md:text-base">
                    {desc}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-mono rounded-full border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
