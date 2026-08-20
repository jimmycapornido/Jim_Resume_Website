import React from 'react';
import { workflows } from '../data/workflows';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { WorkflowFeature } from '../components/portfolio/WorkflowFeature';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const WorkflowPortfolio: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <Section
      id="workflows"
      tone="white"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-6">
          <Eyebrow>Inside the Work</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-navy leading-tight">
            Healthcare Workflow Experience
          </h2>
          <p className="mt-5 text-base md:text-lg text-text-secondary leading-relaxed">
            Not just tools I know — workflows I have actually worked through, across EHR, medical-record,
            documentation, and tracking systems.
          </p>
        </div>

        <div>
          {workflows.map((item, i) => (
            <WorkflowFeature key={item.id} item={item} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
