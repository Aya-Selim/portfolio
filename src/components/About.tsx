import React from 'react';
import { GraduationCap, Server, Cpu, Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 bg-navy-50 px-2.5 py-1 rounded-md mb-3 border border-navy-100">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Engineering robust backend architectures & desktop applications
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I am a Computer Engineering graduate from Tanta University (Grade: Excellent), dedicated to writing clean, maintainable, and high-performance software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
            <div className="p-6 rounded-xl bg-surface-50 border border-slate-200 shadow-2xs">
              <h3 className="text-lg font-semibold text-navy-900 mb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-navy-700" />
                <span>Academic & Engineering Foundation</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Graduated with a Bachelor of Engineering in Computer Engineering from Tanta University with an Excellent grade. My academic training provided me with an in-depth understanding of computer systems, data structures, algorithms, operating systems, and software engineering methodologies.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-50 border border-slate-200 shadow-2xs">
              <h3 className="text-lg font-semibold text-navy-900 mb-2 flex items-center gap-2">
                <Server className="w-5 h-5 text-navy-700" />
                <span>Backend & Architecture Specialization</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                My primary focus lies in architecting backend systems with C# and ASP.NET Core. I specialize in designing scalable RESTful APIs, implementing Clean Architecture and Onion Architecture, CQRS with MediatR, and ensuring transactional consistency across SQL Server, PostgreSQL, Redis, and RabbitMQ.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface-50 border border-slate-200 shadow-2xs">
              <h3 className="text-lg font-semibold text-navy-900 mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-navy-700" />
                <span>Software, Hardware & Real-World Integration</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                With a background in Computer Engineering, I am interested in exploring the connection between software, hardware, and real-world systems—from hardware-near desktop tools with ADO.NET and serial/device communication to distributed cloud microservices and event-driven backends.
              </p>
            </div>
          </div>

          {/* Right Column: Key Focus Areas / Technical Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-navy-900 text-white border border-navy-800 shadow-md">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-navy-300 mb-4">
                Core Engineering Principles
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-md bg-navy-800 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-white block font-medium">Decoupled Architecture:</strong>
                    <span className="text-slate-300 text-xs">
                      Strict domain separation via Clean Architecture, Onion layers, and CQRS patterns.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-md bg-navy-800 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-white block font-medium">Data Integrity & Performance:</strong>
                    <span className="text-slate-300 text-xs">
                      Parameterized queries, EF Core optimizations, direct ADO.NET execution, and Redis caching.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-md bg-navy-800 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-white block font-medium">Security by Design:</strong>
                    <span className="text-slate-300 text-xs">
                      JWT authentication, PBKDF2 password hashing, RBAC, OAuth 2.0, and idempotent webhook handlers.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="p-1 rounded-md bg-navy-800 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <strong className="text-white block font-medium">Cross-Platform Competence:</strong>
                    <span className="text-slate-300 text-xs">
                      Hands-on capability in both cloud-native web backends and enterprise Windows desktop solutions.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Education Callout */}
            <div className="p-5 rounded-xl bg-surface-50 border border-slate-200">
              <div className="text-xs font-mono text-slate-500 mb-1">Education Summary</div>
              <div className="font-semibold text-navy-950 text-sm">
                B.Eng. in Computer Engineering • Tanta University
              </div>
              <div className="text-xs text-navy-700 font-medium mt-1">
                Graduation: June 2026 | Grade: Excellent with Honors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
