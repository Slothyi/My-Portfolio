"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, BrainCircuit, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "SQL"]
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    skills: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "FastAPI", "REST APIs", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
    skills: ["Android (Kotlin/Java)", "Retrofit", "CameraX", "ML Kit"]
  },
  {
    title: "ML & AI",
    icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
    skills: ["TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    title: "Cloud & Databases",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    skills: ["AWS (S3, EC2, Lambda, RDS, IAM)", "MongoDB", "MySQL"]
  },
  {
    title: "Tools & Environments",
    icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    skills: ["Git", "GitHub Actions", "VS Code", "Android Studio", "IntelliJ", "Jupyter", "Linux", "Postman"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-24 z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-silver-100 tracking-tight mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-silver-400 text-lg">The tools and technologies I use to build scalable systems.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-navy-800 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-cyan-500/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-silver-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-navy-900 border border-white/5 rounded-lg text-sm text-silver-300 font-medium group-hover:border-cyan-500/20 transition-colors"
                  >
                    {skill}
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
