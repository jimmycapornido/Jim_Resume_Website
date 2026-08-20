import React from 'react';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Problem: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Section
      id="problem"
      tone="navy"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <Eyebrow tone="inverted">{site.problem.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-display font-extrabold text-white leading-tight">{site.problem.headline}</h2>
            <p className="mt-8 text-lg font-medium text-accent">{site.problem.transition}</p>
            <Button
              variant="secondary"
              className="mt-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {site.problem.cta}
            </Button>
          </div>

          <ul className="space-y-5 border-t border-white/15 pt-8 md:border-t-0 md:pt-0">
            {site.problem.painPoints.map((point) => (
              <li key={point} className="flex gap-4 text-base md:text-lg leading-relaxed text-clinical-light/90">
                <span className="text-accent font-bold">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};
