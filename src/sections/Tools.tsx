import React from 'react';
import { Resume } from '../types/resume';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Tools: React.FC<{ resume: Resume; site: Site }> = ({ resume, site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Section
      id="tools"
      tone="ice"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <Eyebrow>{site.toolsLabel}</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-navy leading-tight">Systems I Work In</h2>
        </div>

        <div className="divide-y divide-border border-t border-b border-border">
          {site.toolsGroups.map((group) => (
            <div key={group.label} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-6">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">{group.label}</span>
              <span className="text-lg md:text-xl font-semibold text-navy">{group.tools.join(' · ')}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-text-secondary">
          <span className="font-semibold text-navy">{site.skillsLabel}: </span>
          {resume.coreSkills.join(' · ')}
        </p>
      </Container>
    </Section>
  );
};
