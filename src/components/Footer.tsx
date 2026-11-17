import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 py-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-navy-900">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-white font-bold text-lg tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-slate-400 mt-0.5">
              Software Engineer | Backend Developer • C# & ASP.NET Core
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Social icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-navy-900 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-navy-900 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2 text-slate-400 hover:text-white hover:bg-navy-900 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white hover:bg-navy-900 rounded-lg transition-colors ml-2 cursor-pointer"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 font-mono">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p>Built with React, Vite & TypeScript • Minimal & Fast</p>
        </div>
      </div>
    </footer>
  );
};
