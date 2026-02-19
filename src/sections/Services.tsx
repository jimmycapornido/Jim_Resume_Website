import React from 'react';
import { Site } from '../types/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Divider } from '../components/ui/Divider';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceIcons = ['📋', '🗂️', '📝', '🔍', '📊', '✅'];

export const Services: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={elementRef}
      className={`py-16 bg-white dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>
  Core Services
</SectionHeading>

        <div className="grid md:grid-cols-3 gap-8">
          {site.services.map((service, i) => (
            <div
              key={i}
              className="bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm p-7 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{serviceIcons[i]}</div>
              <h3 className="font-semibold text-lg text-text-primary dark:text-slate-100 mb-3">{service.title}</h3>
              <p className="text-text-secondary dark:text-slate-300 text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="text-xs text-text-muted dark:text-slate-400 space-y-1.5">
                {service.outcomes.map((o, j) => (
                  <li key={j} className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Divider />
      </div>
    </section>
  );
};
