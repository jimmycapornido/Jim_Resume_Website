import React from 'react';
import heroPortrait from '../assets/img/jim-profile.webp';
import { Site } from '../types/site';
import { Button } from '../components/ui/Button';
import { Metric } from '../components/ui/Metric';
import { Container } from '../components/layout/Container';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Hero: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="hero"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-navy-deep min-h-screen min-h-[100svh] flex items-center"
    >
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-full md:w-2/3 object-cover object-[center_20%] opacity-40 md:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 md:via-navy-deep/70 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
      </div>

      <Container className={`relative pt-28 md:pt-32 pb-14 md:pb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-2xl">
          <span className="block text-eyebrow font-semibold uppercase text-accent">{site.hero.eyebrow}</span>
          <h1 className="mt-4 text-hero font-extrabold tracking-tight text-white">{site.hero.headline}</h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-clinical-light/90 max-w-xl">
            {site.hero.subcopy}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {site.hero.ctaPrimary}
            </Button>
            <Button
              variant="outline-inverted"
              onClick={() => document.getElementById('workflows')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {site.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg border-t border-white/15 pt-6">
            {site.hero.proofPoints.map((p) => (
              <Metric key={p.label} value={p.value} label={p.label} tone="inverted" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
