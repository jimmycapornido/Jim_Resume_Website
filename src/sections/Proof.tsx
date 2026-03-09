import React from 'react';
import { Site } from '../types/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Proof: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  console.log("Proof component received site data:", site);

  return (
    <section
      id="portfolio"
      ref={elementRef}
      className={`py-16 bg-white dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl px-4 mx-auto">

        {/* SECTION HEADING */}
        <SectionHeading>Proof of Work</SectionHeading>

        <p className="max-w-3xl mb-12 text-sm text-text-secondary dark:text-slate-300">
          HIPAA-safe highlights based on real workflow experience in EHR documentation,
          Patient Care Encounters, SharePoint/ChartSwap organization, and secure medical record coordination.
        </p>

        {/* NEW TESTIMONIAL BLOCK */}
        {site.testimonial && (
          <div className="flex flex-col mb-12 overflow-hidden border shadow-sm md:flex-row rounded-2xl bg-gradient-to-br from-blue-50/50 to-teal-50/30 dark:from-slate-800 dark:to-slate-800/80 border-border dark:border-slate-700">
            <div className="flex flex-col justify-center w-full p-8 md:p-12 md:w-1/2">
              <h3 className="mb-6 text-2xl font-bold tracking-tight text-text-primary dark:text-slate-100">
                What My Clients Say
              </h3>
              <blockquote className="mb-6 text-lg italic leading-relaxed text-text-secondary dark:text-slate-300">
                "{site.testimonial.quote}"
              </blockquote>
              <cite className="font-semibold not-italic text-primary dark:text-accent">
                — {site.testimonial.author}
              </cite>
            </div>
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[400px]">
              <img 
                src={site.testimonial.imagePath} 
                alt="Jimmy orchestrating medical documentation"
                className="block object-cover w-full h-full [mask-image:linear-gradient(to_bottom,transparent,black_15%)] md:[mask-image:linear-gradient(to_right,transparent,black_20%)]"
              />
            </div>
          </div>
        )}

        {/* COMPANIES BLOCK */}
        {site.companies && site.companies.length > 0 && (
          <div className="mb-16 text-center">
            <h4 className="flex items-center justify-center gap-4 mb-8 text-sm font-semibold tracking-wider uppercase text-text-muted dark:text-slate-400">
              <span className="w-12 h-px bg-border dark:bg-slate-700"></span>
              I am fortunate to have worked with these companies
              <span className="w-12 h-px bg-border dark:bg-slate-700"></span>
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-90 dark:opacity-80">
              {site.companies.map((company, i) => (
                <img 
                  key={i} 
                  src={company.logoPath} 
                  alt={company.name} 
                  className="object-contain h-16 transition-opacity md:h-20 hover:opacity-100 grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        )}

        {/* EXISTING METRICS (Proof Results) */}
        <h3 className="mb-6 text-xl font-bold text-text-primary dark:text-slate-100">
          Impact & Results
        </h3>
        <div className="grid gap-4 mb-10 md:grid-cols-2">
          {site.proofMetrics.map((m, i) => (
            <div
              key={i}
              className={`bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-lg p-4 flex items-center transition-all duration-700 hover:shadow-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 50}ms` : '0ms' }}
            >
              <span className="mr-3 text-xl font-bold text-primary dark:text-accent">✓</span>
              <span className="text-sm font-medium text-text-primary dark:text-slate-100">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* EXISTING PORTFOLIO CARDS */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 transition-all duration-300 shadow-sm bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl hover:-translate-y-1">
            <h3 className="font-semibold text-text-primary dark:text-slate-100">
              🗂️ EHR & PCE Documentation
            </h3>
            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">
              Structured Patient Care Encounters (PCE), chart completeness checks,
              and audit-ready documentation in ClinicalWorks.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 shadow-sm bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl hover:-translate-y-1">
            <h3 className="font-semibold text-text-primary dark:text-slate-100">
              🔁 Workflow Optimization
            </h3>
            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">
              Organized medical records using SharePoint & ChartSwap workflows,
              with Salesforce tracking for high-volume documentation support.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 shadow-sm bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl hover:-translate-y-1">
            <h3 className="font-semibold text-text-primary dark:text-slate-100">
              ⚖️ Law Firm Medical Record Coordination
            </h3>
            <p className="mt-2 text-sm text-text-secondary dark:text-slate-300">
              Secure bundling, verification, and transmission of requested
              medical records with compliance-focused handling.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 shadow-sm bg-surface dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl hover:-translate-y-1">
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
