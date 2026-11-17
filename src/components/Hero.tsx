import React from 'react';
import { ArrowDown, Mail, Database, Server, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-mono font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 mb-3">
              {personalInfo.name}
            </h1>

            {/* Professional Title */}
            <p className="text-xl sm:text-2xl font-semibold text-navy-700 mb-4 tracking-tight">
              {personalInfo.title}
            </p>

            {/* Specialization Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {['C#', 'ASP.NET Core 8', 'Clean Architecture', 'SQL Server', 'Desktop & Web'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {personalInfo.introduction}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 transition-colors shadow-xs w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-slate-300" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 text-navy-900 font-medium text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-navy-700" />
                <span>Contact Me</span>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-600 hover:text-navy-900 bg-white border border-slate-200 hover:border-slate-300 rounded-lg transition-colors shadow-2xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-600 hover:text-navy-900 bg-white border border-slate-200 hover:border-slate-300 rounded-lg transition-colors shadow-2xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Tech Illustration (No Fake Photo) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Technical Architecture Visual Card */}
              <div className="bg-navy-900 text-white rounded-xl border border-navy-800 shadow-xl overflow-hidden font-sans">
                {/* Visual Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-950 border-b border-navy-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-300 font-medium">ArchitectureStack.cs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active System</span>
                  </div>
                </div>

                {/* Stack Layers Visualization */}
                <div className="p-5 space-y-3.5 text-xs font-mono">
                  {/* Layer 1: API / Presentation */}
                  <div className="bg-navy-850/80 border border-navy-800 rounded-lg p-3 hover:border-navy-600 transition-colors">
                    <div className="flex items-center justify-between text-navy-300 mb-1.5">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                        <Server className="w-3.5 h-3.5 text-navy-400" />
                        <span>Presentation & Web API</span>
                      </div>
                      <span className="text-[10px] bg-navy-800 px-1.5 py-0.5 rounded text-navy-300">Layer 1</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      ASP.NET Core 8 • RESTful Endpoints • JWT / OAuth • SignalR Hubs
                    </p>
                  </div>

                  {/* Layer 2: Application / CQRS */}
                  <div className="bg-navy-850/80 border border-navy-800 rounded-lg p-3 hover:border-navy-600 transition-colors">
                    <div className="flex items-center justify-between text-navy-300 mb-1.5">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                        <Layers className="w-3.5 h-3.5 text-navy-400" />
                        <span>Core Application & Business Logic</span>
                      </div>
                      <span className="text-[10px] bg-navy-800 px-1.5 py-0.5 rounded text-navy-300">Layer 2</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      Clean & Onion Architecture • MediatR Handlers • CQRS Pattern
                    </p>
                  </div>

                  {/* Layer 3: Infrastructure & Data Access */}
                  <div className="bg-navy-850/80 border border-navy-800 rounded-lg p-3 hover:border-navy-600 transition-colors">
                    <div className="flex items-center justify-between text-navy-300 mb-1.5">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                        <Database className="w-3.5 h-3.5 text-navy-400" />
                        <span>Infrastructure & Persistence</span>
                      </div>
                      <span className="text-[10px] bg-navy-800 px-1.5 py-0.5 rounded text-navy-300">Layer 3</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      EF Core • Direct ADO.NET • Repository & Unit of Work • SQL Server
                    </p>
                  </div>

                  {/* Layer 4: Messaging & Caching */}
                  <div className="bg-navy-850/80 border border-navy-800 rounded-lg p-3 hover:border-navy-600 transition-colors">
                    <div className="flex items-center justify-between text-navy-300 mb-1.5">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-navy-400" />
                        <span>Integration & Messaging</span>
                      </div>
                      <span className="text-[10px] bg-navy-800 px-1.5 py-0.5 rounded text-navy-300">Layer 4</span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-sans">
                      RabbitMQ Event Bus • Redis Distributed Cache • Stripe Webhooks
                    </p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2.5 bg-navy-950 border-t border-navy-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Integrity: 100% Parameterized SQL & RBAC</span>
                  </span>
                  <span className="text-slate-500">.NET 8.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
