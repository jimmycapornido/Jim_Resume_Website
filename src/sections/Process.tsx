import React from 'react';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Process: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Section
      id="process"
      tone="white"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-navy leading-tight">A Simple, Consistent Process</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {site.process.map((step, i) => (
            <div
              key={step.step}
              className={`md:pl-8 ${i > 0 ? 'md:border-l md:border-border' : ''} pt-6 md:pt-0 border-t md:border-t-0 border-border`}
            >
              <div className="text-5xl font-extrabold text-primary/25 mb-4">{String(step.step).padStart(2, '0')}</div>
              <h3 className="text-h3 font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
