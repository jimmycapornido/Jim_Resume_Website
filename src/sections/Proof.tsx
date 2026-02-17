import React from 'react';
import { Site } from '../types/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Proof: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="proof"
      ref={elementRef}
      className={`py-16 bg-white dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>Proof & Results</SectionHeading>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {site.proofMetrics.map((m, i) => (
            <div
              key={i}
              className={`bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-lg p-4 flex items-center transition-all duration-700 hover:shadow-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 50}ms` : '0ms' }}
            >
              <span className="text-primary dark:text-accent font-bold text-xl mr-3">✓</span>\n              <span className="text-text-primary dark:text-slate-100 text-sm font-medium">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
