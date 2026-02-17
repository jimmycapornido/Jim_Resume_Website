import React from 'react';
import { Resume } from '../types/resume';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience: React.FC<{ resume: Resume }> = ({ resume }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={elementRef}
      className={`py-16 bg-surface dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>Experience</SectionHeading>
        <div className="flex flex-col gap-8">
          {resume.experience.map((role, i) => (
            <div
              key={i}
              className={`bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm p-8 transition-all duration-700 hover:shadow-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 75}ms` : '0ms' }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="font-semibold text-lg text-text-primary dark:text-slate-100">{role.role}</div>
                <div className="text-text-secondary dark:text-slate-400 text-sm mt-1 md:mt-0">{role.company} • {role.date}</div>
              </div>
              <ul className="space-y-2">
                {role.achievements.map((a, j) => (
                  <li key={j} className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed flex">
                    <span className="mr-3 text-primary dark:text-accent font-bold flex-shrink-0">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
