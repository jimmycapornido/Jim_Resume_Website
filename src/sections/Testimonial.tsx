import React from 'react';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Testimonial: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  if (!site.testimonial) return null;

  return (
    <Section
      tone="light"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container narrow className="text-center">
        <blockquote className="text-2xl md:text-3xl font-semibold leading-snug text-navy">
          "{site.testimonial.quote}"
        </blockquote>
        <cite className="mt-6 block not-italic text-sm font-semibold uppercase tracking-wide text-text-muted">
          — {site.testimonial.author}
        </cite>
      </Container>
    </Section>
  );
};
