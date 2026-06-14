"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-24 z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-silver-100 tracking-tight">
              About <span className="text-cyan-400">Me</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-silver-400 text-lg leading-relaxed">
              I am a B.Tech CSE (AI-ML) developer who ships production-grade full-stack, Android, and Machine Learning systems.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-silver-400 text-lg leading-relaxed">
              I specialize in building secure, end-to-end multi-factor authentication platforms and deploying scalable architectures on AWS. I am a fast learner with a rigorous problem-solving mindset, eager to drive impact on high-performing engineering teams.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-6 flex flex-wrap gap-4">
              <div className="glass-panel px-6 py-3 rounded-full flex items-center space-x-2 border-cyan-500/20">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-silver-300 font-medium">Full-Stack</span>
              </div>
              <div className="glass-panel px-6 py-3 rounded-full flex items-center space-x-2 border-cyan-500/20">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span className="text-silver-300 font-medium">Secure Auth</span>
              </div>
              <div className="glass-panel px-6 py-3 rounded-full flex items-center space-x-2 border-cyan-500/20">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-silver-300 font-medium">AWS Deployed</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Abstract Visual or Code Block */}
          <motion.div variants={itemVariants} className="relative w-full h-[400px]">
            <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-3xl animate-pulse" />
            <div className="glass-panel w-full h-full rounded-2xl border-cyan-500/20 p-6 flex flex-col relative z-10 overflow-hidden">
              <div className="flex space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 font-mono text-sm text-silver-300 leading-relaxed overflow-hidden">
                <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = {"{"}<br/>
                &nbsp;&nbsp;name: <span className="text-green-400">"Saikat Mukherjee"</span>,<br/>
                &nbsp;&nbsp;role: <span className="text-green-400">"Full-Stack & AI/ML Developer"</span>,<br/>
                &nbsp;&nbsp;passions: [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Scalable Cloud Architectures"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Secure Multi-Factor Auth"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"High-Performance UIs"</span><br/>
                &nbsp;&nbsp;],<br/>
                &nbsp;&nbsp;driveImpact: <span className="text-blue-400">function</span>() {"{"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-cyan-400">this</span>.passions.map(build);<br/>
                &nbsp;&nbsp;{"}"}<br/>
                {"}"};<br/><br/>
                <span className="text-blue-400">engineer</span>.driveImpact();
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
