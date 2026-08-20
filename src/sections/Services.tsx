import React from 'react';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Services: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Section
      id="services"
      tone="ice"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <Eyebrow>What I Support</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-navy leading-tight">Core Services</h2>
          {site.servicesIntro && (
            <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed">{site.servicesIntro}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-x-14">
          {site.services.map((service, i) => (
            <div
              key={service.title}
              className={`py-8 ${i === 0 ? '' : i === 1 ? 'border-t border-border md:border-t-0' : 'border-t border-border'}`}
            >
              <span className="text-xs font-bold text-text-muted tracking-widest">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-h3 font-bold text-navy">{service.title}</h3>
              {service.platform && (
                <p className="mt-1 text-sm font-semibold text-primary">{service.platform}</p>
              )}
              <p className="mt-3 text-sm md:text-base leading-relaxed text-text-secondary">{service.description}</p>
              <ul className="mt-4 space-y-1.5">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex items-start text-sm text-text-secondary">
                    <span className="mr-2.5 text-accent font-bold mt-0.5">✓</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
