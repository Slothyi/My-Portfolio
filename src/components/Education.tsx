"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering (AI-ML)",
    institution: "Techno Main Salt Lake",
    location: "Kolkata",
    date: "Sep 2023 \u2013 Present",
    details: "Currently pursuing bachelor's degree with a focus on Artificial Intelligence and Machine Learning.",
  },
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Gobindapur Sephali Memorial Polytechnic",
    location: "Gobindapur",
    date: "Sep 2019 \u2013 2022",
    details: "CGPA: 8.1",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Guskara Purnananda Public Institution",
    location: "Guskara",
    date: "Apr 2018 \u2013 2019",
    details: "Completed higher secondary education focusing on sciences.",
  }
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="education" className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-24 z-10">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-silver-100 tracking-tight mb-4">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <p className="text-silver-400 text-lg">My academic journey and qualifications.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-cyan-500/20 ml-4 md:ml-0 md:pl-8 space-y-12"
        >
          {educationData.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-0">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[41px] top-1 w-5 h-5 bg-navy-900 border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-cyan-500/40 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-silver-100 group-hover:text-cyan-400 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-silver-300 mt-2 space-x-2">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium">{item.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 text-sm text-silver-400 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-cyan-400/70" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-cyan-400/70" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-silver-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
