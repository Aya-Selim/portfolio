import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-surface-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-navy-700 bg-white px-2.5 py-1 rounded-md mb-3 border border-slate-200">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Let's Discuss Engineering & Opportunities
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I am available for software engineering roles, backend opportunities, and technical discussions. Feel free to reach out via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-navy-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-50 text-navy-700 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-sm font-semibold text-navy-950 hover:text-navy-700 transition-colors"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                  className="p-2 text-slate-400 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-navy-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-50 text-navy-700 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-navy-950 hover:text-navy-700 transition-colors"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-navy-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-50 text-navy-700 rounded-lg">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      LinkedIn Profile
                    </span>
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy-950 hover:text-navy-700 transition-colors flex items-center gap-1"
                    >
                      <span>linkedin.com/in/ayasamirselim</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-navy-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-50 text-navy-700 rounded-lg">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      GitHub Profile
                    </span>
                    <a
                      href={personalInfo.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-navy-950 hover:text-navy-700 transition-colors flex items-center gap-1"
                    >
                      <span>github.com/Aya-Selim</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-6 text-navy-950 font-semibold text-lg">
              <MessageSquare className="w-5 h-5 text-navy-700" />
              <span>Send a Direct Message</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Software Engineering Role / Interview Invitation"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-700 focus:border-transparent transition-all resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 transition-colors shadow-xs w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
