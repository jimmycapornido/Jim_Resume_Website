import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionHeading } from '../components/ui/SectionHeading';

export const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={elementRef}
      className={`py-16 bg-white dark:bg-slate-900 border-b border-border dark:border-slate-800 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>About</SectionHeading>

        <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-text-primary dark:text-slate-100">
          Clinically-Trained Medical Virtual Assistant Focused on Documentation Accuracy
        </h2>

        <div className="mt-6 space-y-4 max-w-3xl text-sm leading-relaxed text-text-secondary dark:text-slate-300">
          <p>
            I combine hospital-based clinical experience with hands-on support in U.S. healthcare documentation workflows. My focus is structured Electronic Health Record (EHR) management, precise Patient Care Encounter (PCE) documentation, and compliance-conscious record handling.
          </p>

          <p>
            Having supported high-volume documentation environments, I understand the importance of chart completeness, workflow consistency, and audit-readiness. I help reduce provider documentation burden by ensuring every encounter is organized, accurate, and professionally structured.
          </p>

          <p className="font-medium text-text-primary dark:text-slate-100">
            Documentation is not just data entry — it is clinical communication.
          </p>
        </div>
      </div>
    </section>
  );
};
