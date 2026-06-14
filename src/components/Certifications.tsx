"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const certificationsData = [
  "AWS Certified Solutions Architect \u2013 Associate",
  "Full-Stack Web Development Bootcamp",
  "C++, DSA & IoT Bootcamp"
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="certifications" className="relative min-h-[60vh] flex items-center justify-center py-24 px-6 md:px-24 z-10">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-silver-100 tracking-tight mb-4">
            Licenses & <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-silver-400 text-lg">Continuous learning and professional validation.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-4"
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel p-6 rounded-2xl flex items-center space-x-6 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="p-4 bg-navy-800 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-cyan-500/10">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-silver-100 group-hover:text-cyan-400 transition-colors">
                  {cert}
                </h3>
              </div>
              <CheckCircle2 className="w-6 h-6 text-cyan-400/50" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
