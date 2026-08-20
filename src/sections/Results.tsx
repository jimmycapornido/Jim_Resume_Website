import React from 'react';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Metric } from '../components/ui/Metric';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Results: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Section
      id="results"
      tone="white"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <Eyebrow>Proof of Work</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-navy leading-tight">Impact & Results</h2>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed">
            Figures drawn directly from documented experience in EHR administration, medical-record request
            tracking, and hospital-based patient care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {site.proofMetrics.map((m) => (
            <Metric
              key={m.label}
              value={m.value}
              label={m.label}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            />
          ))}
        </div>

        {site.companies && site.companies.length > 0 && (
          <div className="mt-20 pt-10 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-6">
              Healthcare organizations I've worked with
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              {site.companies.map((company) => (
                <img
                  key={company.name}
                  src={company.logoPath}
                  alt={company.name}
                  className="h-10 md:h-12 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
