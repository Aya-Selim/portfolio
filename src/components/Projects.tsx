import React, { useState } from 'react';
import { ExternalLink, Play, Layers, CheckCircle2, Monitor, Server, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Desktop' | 'Web & API'>('All');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'Desktop') return project.isDesktop;
    if (filter === 'Web & API') return !project.isDesktop;
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 bg-navy-50 px-2.5 py-1 rounded-md mb-3 border border-navy-100">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-4">
              Production-Grade Systems & Applications
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Showcasing practical backend architectures, enterprise desktop systems with ADO.NET, high-throughput REST APIs, and microservice integrations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-100 rounded-lg border border-slate-200 shrink-0 self-start md:self-auto">
            {(['All', 'Desktop', 'Web & API'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  filter === tab
                    ? 'bg-white text-navy-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {tab === 'All' ? 'All Projects' : tab === 'Desktop' ? 'Desktop Application' : 'Backend & APIs'}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project: Project) => {
            const isDesktopHighlight = project.id === 'inventory-system';

            return (
              <article
                key={project.id}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isDesktopHighlight
                    ? 'border-2 border-navy-700 bg-surface-50 shadow-md ring-1 ring-navy-700/10'
                    : 'border border-slate-200 bg-white shadow-2xs hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                {/* Special Highlight Banner for Desktop Inventory System */}
                {isDesktopHighlight && (
                  <div className="bg-navy-900 text-white px-6 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Enterprise Desktop & Layered Architecture Highlight</span>
                    </div>
                    <span className="text-navy-300 text-[11px]">
                      C# • Windows Forms • ADO.NET • SQL Server
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Project Details */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-navy-50 text-navy-800 border border-navy-200">
                            {project.isDesktop ? (
                              <Monitor className="w-3.5 h-3.5 text-navy-700" />
                            ) : (
                              <Server className="w-3.5 h-3.5 text-navy-700" />
                            )}
                            {project.category}
                          </span>

                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                            <Layers className="w-3.5 h-3.5 text-slate-500" />
                            {project.architecture}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-2xl font-bold text-navy-950 tracking-tight mb-1">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-sm font-medium text-navy-700 mb-4">
                            {project.subtitle}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Architectural / Technical Highlights */}
                        <div className="mb-6">
                          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-3">
                            Key Architectural Highlights
                          </h4>
                          <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-700">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-navy-700 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Tech stack badges */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 text-slate-700 border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Visual Architecture / Action Box */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-50 rounded-xl p-6 border border-slate-200">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-mono text-slate-500">
                          <span>Project Artifacts</span>
                          <span className="font-semibold text-navy-900">Verified Codebase</span>
                        </div>

                        {/* Architecture Summary Card */}
                        <div className="bg-white rounded-lg p-4 border border-slate-200 mb-6 space-y-3">
                          <div className="text-xs font-semibold text-navy-900">
                            Engineering Blueprint
                          </div>
                          <div className="space-y-2 text-xs text-slate-600 font-mono">
                            <div className="flex justify-between py-1 border-b border-slate-100">
                              <span className="text-slate-500">Pattern:</span>
                              <span className="font-medium text-navy-950 text-right">{project.architecture}</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-slate-100">
                              <span className="text-slate-500">Primary Language:</span>
                              <span className="font-medium text-navy-950">C# (.NET)</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span className="text-slate-500">Data Access:</span>
                              <span className="font-medium text-navy-950">
                                {project.isDesktop ? 'ADO.NET (Direct & Parameterized)' : 'Entity Framework Core'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Desktop Demonstration note if applicable */}
                        {project.isDesktop && (
                          <div className="p-3 rounded-lg bg-navy-50 border border-navy-200 mb-6 text-xs text-navy-900 leading-relaxed">
                            <strong>Technical Interview Highlight:</strong> This project highlights raw ADO.NET SQL efficiency, 4-tier separation, Crystal Reports rendering, and enterprise desktop security with PBKDF2 hashing.
                          </div>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="space-y-2.5 pt-4">
                        <div className="flex flex-wrap items-center gap-3">
                          {/* GitHub Link */}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-lg bg-navy-900 text-white text-xs sm:text-sm font-medium hover:bg-navy-800 transition-colors shadow-2xs"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>View Source Code</span>
                          </a>

                          {/* Live / Video Demo Link */}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-navy-900 text-xs sm:text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
                            >
                              {project.isDesktop ? (
                                <>
                                  <Play className="w-4 h-4 text-navy-700" />
                                  <span>Watch Demo</span>
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="w-4 h-4 text-navy-700" />
                                  <span>Live Platform</span>
                                </>
                              )}
                            </a>
                          )}
                        </div>

                        {/* Direct link preview helper */}
                        <div className="text-[11px] text-center text-slate-500 font-mono">
                          Opens in a new tab • MIT / Open Repository
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
