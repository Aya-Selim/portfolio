import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 bg-navy-50 px-2.5 py-1 rounded-md mb-3 border border-navy-100">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Education & Qualifications
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Rigorous engineering education emphasizing computational foundations, operating systems, and distributed software systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="bg-surface-50 rounded-2xl border border-slate-200 p-8 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-navy-900 text-white rounded-xl shadow-xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                    {education.degree}
                  </h3>
                  <p className="text-navy-700 font-medium text-sm sm:text-base">
                    {education.faculty}, {education.institution}
                  </p>
                </div>
              </div>

              {/* Honors Badge & Completion */}
              <div className="flex flex-wrap items-center gap-3 my-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Grade: {education.grade}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-200 text-xs font-mono font-medium">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>Graduation: {education.completionDate}</span>
                </div>
              </div>

              {/* Coursework & Engineering Details */}
              {education.details && (
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Key Highlights & Coursework
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {education.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-navy-700 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Side: Engineering Pillars */}
            <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-navy-900 font-semibold text-sm">
                <BookOpen className="w-4 h-4 text-navy-700" />
                <span>Foundational Pillars</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2 font-mono">
                <li className="p-2 rounded bg-surface-50 border border-slate-100 flex items-center justify-between">
                  <span>Data Structures & Algorithms</span>
                  <span className="text-emerald-600">✓</span>
                </li>
                <li className="p-2 rounded bg-surface-50 border border-slate-100 flex items-center justify-between">
                  <span>Database Systems & Relational Theory</span>
                  <span className="text-emerald-600">✓</span>
                </li>
                <li className="p-2 rounded bg-surface-50 border border-slate-100 flex items-center justify-between">
                  <span>Operating Systems & Concurrency</span>
                  <span className="text-emerald-600">✓</span>
                </li>
                <li className="p-2 rounded bg-surface-50 border border-slate-100 flex items-center justify-between">
                  <span>Software Engineering & Architecture</span>
                  <span className="text-emerald-600">✓</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

