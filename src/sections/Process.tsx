import React from 'react';
import { Site } from '../types/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Process: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="process"
      ref={elementRef}
      className={`py-16 bg-surface dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>How It Works</SectionHeading>
        <div className="flex flex-col md:flex-row gap-8">
          {site.process.map((step, i) => (
            <div
              key={i}
              className={`flex-1 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-bold text-primary dark:text-accent mb-3">{step.step}</div>
              <div className="font-semibold text-lg text-text-primary dark:text-slate-100 mb-2">{step.title}</div>
              <div className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
