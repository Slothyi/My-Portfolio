"use client";

import { motion } from "framer-motion";

const navItems = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Certifications",
  "Contact",
];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 w-full z-50 py-6 px-6 md:px-24 flex items-center justify-between bg-navy-950/50 backdrop-blur-md border-b border-white/5"
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-3 cursor-pointer">
        <div className="w-1.5 h-8 bg-cyan-400 rounded-full" />
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-cyan-400">Saikat</span>{" "}
          <span className="text-silver-100">Mukherjee</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative text-sm font-medium transition-colors duration-300 ${
              activeSection === item.toLowerCase()
                ? "text-cyan-400" 
                : "text-silver-300 hover:text-cyan-400"
            }`}
          >
            {item}
            {/* Active Glow Effect */}
            {activeSection === item.toLowerCase() && (
              <span className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full -z-10 w-full h-full scale-150" />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
