import React from 'react';
import portrait from '../assets/img/jim-profile.webp';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About: React.FC<{ site: Site }> = ({ site }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { whyWorkWithJimmy } = site;

  return (
    <Section
      id="about"
      tone="navy-deep"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 md:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={portrait}
              alt="Jimmy Ornido, Medical Virtual Assistant"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <Eyebrow tone="inverted">{whyWorkWithJimmy.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-display font-extrabold text-white leading-tight">
              {whyWorkWithJimmy.headline}
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-clinical-light/90">
              {whyWorkWithJimmy.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-8">
              {whyWorkWithJimmy.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-clinical-light/90">
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
