import React from 'react';
import JimProfile from '../assets/img/Jim-Profile.jpg';
import { Site } from '../types/site';
import { Resume } from '../types/resume';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero: React.FC<{ site: Site; resume: Resume }> = ({ site, resume }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="hero"
      ref={elementRef}
      className={`py-16 md:py-24 bg-clinical dark:bg-slate-900 border-b border-border dark:border-slate-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex flex-col items-center max-w-5xl gap-12 px-4 mx-auto md:flex-row">
        {/* LEFT */}
        <div className="flex-1">
          <h1 className="mb-6 font-bold text-h1 text-text-primary dark:text-slate-50">Medical Virtual Assistant for Accurate, HIPAA-Compliant Documentation</h1>
          <p className="mb-6 text-base leading-relaxed text-text-secondary dark:text-slate-300">Speed, accuracy, and compliance for your clinic's documentation and records.</p>
          <div className="flex flex-col gap-4 mb-6 sm:flex-row">
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{site.ctaHeroPrimary}</Button>
            <a href={`mailto:${resume.email}`} className="px-4 py-2 transition-colors border rounded-md border-border text-text-primary hover:bg-surface dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">{site.ctaHeroSecondary}</a>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted dark:text-slate-400">
            {site.trustStrip.map((t) => <span key={t} className="inline-block px-2.5 py-1 bg-surface dark:bg-slate-800 rounded border border-border dark:border-slate-700 text-xs font-medium">{t}</span>)}
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex flex-col items-center flex-1 w-full max-w-xs p-8 bg-white border shadow-sm dark:bg-slate-800 rounded-xl border-border dark:border-slate-700">
          <img
            src={JimProfile}
            alt="Jimmy C. Ornido profile photo"
            className="object-cover mb-4 border border-gray-200 rounded-full w-28 h-28 dark:border-slate-700 bg-surface dark:bg-slate-700"
          />
          <div className="mb-1 text-lg font-semibold text-center text-text-primary dark:text-slate-100">{site.profileCard.title}</div>
          <div className="w-full pb-5 mb-5 text-sm text-center border-b text-text-secondary dark:text-slate-300 border-border dark:border-slate-700">{resume.location}</div>
          {/* Contact Info - Separated Rows with Icons */}
          <div className="w-full mb-5 space-y-3">
            <a href={`tel:${resume.phone}`} className="flex items-center gap-3 text-sm font-medium transition text-text-primary dark:text-slate-100 hover:text-primary dark:hover:text-accent">
              <span className="flex-shrink-0 text-lg">📞</span>
              <span className="break-all">{resume.phone}</span>
            </a>
            <a href={`mailto:${resume.email}`} className="flex items-center gap-3 text-sm font-medium transition text-text-primary dark:text-slate-100 hover:text-primary dark:hover:text-accent">
              <span className="flex-shrink-0 text-lg">✉️</span>
              <span className="text-xs break-all">{resume.email}</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4 justify-center">
            {site.profileCard.metrics.map((m, i) => <Badge key={i}>{m.label}</Badge>)}
          </div>
          <div className="text-xs text-center text-text-muted dark:text-slate-400">{site.profileCard.availability}</div>
        </div>
      </div>
    </section>
  );
};
