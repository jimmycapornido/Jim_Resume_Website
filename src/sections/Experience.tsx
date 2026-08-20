import React from 'react';
import { Resume } from '../types/resume';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience: React.FC<{ resume: Resume }> = ({ resume }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Section
      id="experience"
      tone="ice"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <Eyebrow>Professional Experience</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-navy leading-tight">Where This Comes From</h2>
        </div>

        <div className="space-y-14">
          {resume.experience.map((role, i) => (
            <div key={role.role} className={i === 0 ? '' : 'pt-14 border-t border-border'}>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-5">
                <h3 className={`font-bold text-navy ${i === 0 ? 'text-h2' : 'text-h3'}`}>{role.role}</h3>
                <span className="text-sm font-medium text-text-muted">
                  {role.company} · {role.date}
                </span>
              </div>
              <ul className={`grid gap-x-10 gap-y-2.5 ${i === 0 ? 'md:grid-cols-2' : ''}`}>
                {role.achievements.map((a) => (
                  <li key={a} className="flex text-sm md:text-base leading-relaxed text-text-secondary">
                    <span className="mr-3 text-primary font-bold flex-shrink-0">—</span>
                    <span>{a}</span>
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
