import React from 'react';
import { Server, Layers, Database, ShieldCheck, Wrench, Monitor } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5 text-navy-700" />,
  Layers: <Layers className="w-5 h-5 text-navy-700" />,
  Database: <Database className="w-5 h-5 text-navy-700" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-navy-700" />,
  Wrench: <Wrench className="w-5 h-5 text-navy-700" />,
  Monitor: <Monitor className="w-5 h-5 text-navy-700" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-surface-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 bg-white px-2.5 py-1 rounded-md mb-3 border border-slate-200">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Specialized Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Proficient in modern backend development, architectural patterns, relational and in-memory databases, distributed messaging, and enterprise desktop applications.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-navy-300 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-navy-50 border border-navy-100">
                    {iconMap[category.iconName] || <Server className="w-5 h-5 text-navy-700" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950 text-base">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-50 border border-slate-200 text-slate-700 hover:border-navy-300 hover:text-navy-900 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified in production / projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-navy-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

