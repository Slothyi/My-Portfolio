"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-24 px-6 md:px-24 z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-silver-100 tracking-tight mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-silver-400 text-lg">Looking for new opportunities and exciting collaborations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.a 
              variants={itemVariants}
              href="mailto:saikatm572@gmail.com" 
              className="glass-panel p-6 rounded-2xl flex items-center space-x-6 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="p-4 bg-navy-800 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-silver-400 text-sm mb-1 uppercase tracking-wider">Email</h4>
                <p className="text-silver-100 font-medium text-lg group-hover:text-cyan-400 transition-colors">saikatm572@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              variants={itemVariants}
              href="tel:+917908555103" 
              className="glass-panel p-6 rounded-2xl flex items-center space-x-6 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="p-4 bg-navy-800 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-silver-400 text-sm mb-1 uppercase tracking-wider">Phone</h4>
                <p className="text-silver-100 font-medium text-lg group-hover:text-cyan-400 transition-colors">+91-7908555103</p>
              </div>
            </motion.a>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a href="https://github.com/Slothyi" target="_blank" rel="noopener noreferrer" className="glass-panel flex-1 py-4 rounded-xl flex items-center justify-center space-x-3 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-colors group">
                <FaGithub className="w-6 h-6 text-silver-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-silver-300 font-medium group-hover:text-cyan-400 transition-colors">Slothyi</span>
              </a>
              <a href="https://www.linkedin.com/in/saikat-mukherjee-cse" target="_blank" rel="noopener noreferrer" className="glass-panel flex-1 py-4 rounded-xl flex items-center justify-center space-x-3 hover:border-cyan-500/40 hover:bg-white/[0.03] transition-colors group">
                <FaLinkedin className="w-6 h-6 text-silver-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-silver-300 font-medium group-hover:text-cyan-400 transition-colors">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <form className="glass-panel p-8 rounded-2xl flex flex-col space-y-6">
              <h3 className="text-2xl font-bold text-silver-100 mb-2">Send a Message</h3>
              
              <div className="space-y-2">
                <label className="text-sm text-silver-400 font-medium">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-silver-100 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-silver-400 font-medium">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-silver-100 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-silver-400 font-medium">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Hello Saikat, I'd like to talk about..." 
                  className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-silver-100 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button 
                type="button" 
                className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-medium rounded-xl py-4 flex items-center justify-center space-x-2 transition-colors group mt-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
