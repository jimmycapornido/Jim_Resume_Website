import React from 'react';
import { Site } from '../types/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Proof: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="portfolio"
      ref={elementRef}
      className={`py-16 bg-white dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* SECTION HEADING */}
        <SectionHeading>Portfolio</SectionHeading>

        <p className="max-w-3xl mb-8 text-sm text-text-secondary dark:text-slate-300">
          HIPAA-safe highlights based on real workflow experience in EHR documentation,
          Patient Care Encounters, SharePoint/CharSwap organization, and secure medical record coordination.
        </p>

        {/* EXISTING METRICS (Proof Results) */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {site.proofMetrics.map((m, i) => (
            <div
              key={i}
              className={`bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-lg p-4 flex items-center transition-all duration-700 hover:shadow-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 50}ms` : '0ms' }}
            >
              <span className="text-primary dark:text-accent font-bold text-xl mr-3">✓</span>
              <span className="text-text-primary dark:text-slate-100 text-sm font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* NEW PORTFOLIO CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-text-primary dark:text-slate-100">
              🗂️ EHR & PCE Documentation
            </h3>
            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">
              Structured Patient Care Encounters (PCE), chart completeness checks,
              and audit-ready documentation in ClinicalWorks.
            </p>
          </div>

          <div className="p-6 bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-text-primary dark:text-slate-100">
              🔁 Workflow Optimization
            </h3>
            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">
              Organized medical records using SharePoint & CharSwap workflows,
              with Salesforce tracking for high-volume documentation support.
            </p>
          </div>

          <div className="p-6 bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-text-primary dark:text-slate-100">
              ⚖️ Law Firm Medical Record Coordination
            </h3>
            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">
              Secure bundling, verification, and transmission of requested
              medical records with compliance-focused handling.
            </p>
          </div>

          <div className="p-6 bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-sm hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-semibold text-text-primary dark:text-slate-100">
              🏥 Hospital-Based Clinical Foundation
            </h3>
            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">
              2+ years hospital exposure supporting real clinical workflow,
              strengthening documentation accuracy and discipline.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
