import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-navy-900 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-white font-mono text-sm font-semibold shadow-xs group-hover:bg-navy-800 transition-colors">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-navy-950 group-hover:text-navy-700 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                Backend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-navy-700 bg-navy-50 font-semibold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-navy-700 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Social & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition-colors shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-md transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded-lg"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded-lg"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-sm font-medium text-white bg-navy-900 hover:bg-navy-800 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
