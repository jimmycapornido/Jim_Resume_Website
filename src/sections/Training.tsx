import React, { useState } from 'react';
import { medicalVaTraining, clinicalSafetyTraining } from '../data/training';
import { TrainingItem } from '../types/training';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TrainingRow } from '../components/training/TrainingRow';
import { CertificateCard } from '../components/training/CertificateCard';
import { ImageLightbox } from '../components/ui/ImageLightbox';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Training: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<TrainingItem | null>(null);

  return (
    <Section
      id="training"
      tone="white"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <Eyebrow>Training & Certifications</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-navy leading-tight">
            Documented Training Behind the Work
          </h2>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
            Medical VA Specialization
          </h3>
        </div>
        <div>
          {medicalVaTraining.map((item, i) => (
            <TrainingRow key={item.id} item={item} reverse={i % 2 === 1} onEnlarge={setSelected} />
          ))}
        </div>

        <div className="mt-20 mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Clinical Foundation</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {clinicalSafetyTraining.map((item) => (
            <CertificateCard key={item.id} item={item} onEnlarge={setSelected} />
          ))}
        </div>
      </Container>

      {selected && (
        <ImageLightbox
          src={selected.image}
          alt={`Certificate: ${selected.title}, issued by ${selected.provider}`}
          onClose={() => setSelected(null)}
        />
      )}
    </Section>
  );
};
