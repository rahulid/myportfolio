import React from 'react';
import { Heart } from 'lucide-react';
import NSVSRLogo from '../assets/nsvsrlogobg_removed.svg?react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-3">
              {/* Logo with Glow */}
              <NSVSRLogo className="w-28 h-28 text-white drop-shadow-[0_0_10px_#38bdf8] animate-animate-rotateY3D hover:drop-shadow-[0_0_20px_#0ea5e9] transition duration-300"/>
            </div>
            <a href="#hero" className="text-xl font-bold text-white">Rahul Prema</a>
            <p className="text-slate-400 mt-2 max-w-sm">
              Product by NSVSR
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="flex items-center text-slate-400">
              Made with <Heart size={14} className="mx-1 text-red-500" fill="currentColor" /> using React
            </p>
            <p className="text-slate-500 mt-1">
              &copy; {currentYear} Rahul Prema. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
              <li><a href="#hero" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
              <li><a href="#resume" className="hover:text-indigo-400 transition-colors">Resume</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
