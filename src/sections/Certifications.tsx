import React from 'react';
import { Resume } from '../types/resume';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Certifications: React.FC<{ resume: Resume }> = ({ resume }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="certifications"
      ref={elementRef}
      className={`py-16 bg-surface dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>Certifications & Training</SectionHeading>
        <div className="grid md:grid-cols-2 gap-7">
          {resume.certifications.map((cert, i) => (
            <div
              key={i}
              className={`bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm p-6 flex flex-col transition-all duration-700 hover:shadow-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 75}ms` : '0ms' }}
            >
              <div className="font-semibold text-base text-text-primary dark:text-slate-100 mb-2">{cert.title}</div>
              <div className="text-text-secondary dark:text-slate-400 text-sm mb-2">{cert.issuer}</div>
              <div className="text-text-muted dark:text-slate-500 text-xs mb-1">{cert.date}</div>
              {cert.code && <div className="text-xs text-text-muted dark:text-slate-500">Code: {cert.code}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
