import React from 'react';
import { Calendar, Building2, Tag } from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-surface-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 bg-white px-2.5 py-1 rounded-md mb-3 border border-slate-200">
            Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Practical Software Engineering Experience
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Hands-on internships and project roles focused on backend engineering, enterprise business applications, and collaborative development.
          </p>
        </div>

        {/* Timeline / Card List */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-navy-700 group-hover:border-navy-900 group-hover:scale-110 transition-all" />

              {/* Card */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-navy-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy-950">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-navy-700 font-medium mt-0.5">
                      <Building2 className="w-4 h-4 text-navy-600" />
                      <span>{item.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-mono text-slate-500">{item.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                    <Tag className="w-3 h-3 text-slate-400 mr-1" />
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-surface-50 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
