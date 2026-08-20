import React from 'react';

export type SectionTone = 'white' | 'ice' | 'light' | 'navy' | 'navy-deep';

const toneClasses: Record<SectionTone, string> = {
  white: 'bg-white text-text-primary',
  ice: 'bg-clinical-ice text-text-primary',
  light: 'bg-clinical-light text-text-primary',
  navy: 'bg-navy text-white',
  'navy-deep': 'bg-navy-deep text-white',
};

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, tone = 'white', className = '', children }, ref) => (
    <section id={id} ref={ref as React.Ref<HTMLElement>} className={`py-20 md:py-28 ${toneClasses[tone]} ${className}`}>
      {children}
    </section>
  )
);
Section.displayName = 'Section';
