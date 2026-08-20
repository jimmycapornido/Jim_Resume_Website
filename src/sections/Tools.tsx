import React from 'react';
import { Resume } from '../types/resume';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { LogoMarquee, MarqueeItem } from '../components/ui/LogoMarquee';
import { ToolIconName } from '../components/ui/ToolIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TOOL_ICONS: Record<string, ToolIconName> = {
  'eClinicalWorks': 'ehr',
  'ChartSwap': 'records',
  'Microsoft Lists': 'checklist',
  'SharePoint': 'cloud-share',
  'Salesforce': 'crm',
  'Microsoft Outlook': 'mail',
  'Microsoft Word': 'doc-text',
  'Excel': 'spreadsheet',
  'Google Sheets & Docs': 'documents',
  'PDF tools': 'pdf',
};

export const Tools: React.FC<{ resume: Resume; site: Site }> = ({ resume, site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const allTools = site.toolsGroups.flatMap((g) => g.tools);
  const marqueeItems: MarqueeItem[] = allTools.map((tool) => ({
    icon: TOOL_ICONS[tool] ?? 'doc-text',
    label: tool,
  }));
  const mid = Math.ceil(marqueeItems.length / 2);
  const rows = [marqueeItems.slice(0, mid), marqueeItems.slice(mid)];

  return (
    <Section
      id="tools"
      tone="navy-deep"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <Container>
        <div className="max-w-2xl mb-12">
          <Eyebrow tone="inverted">{site.toolsLabel}</Eyebrow>
          <h2 className="mt-4 text-display font-extrabold text-white leading-tight">Systems I Work In</h2>
        </div>

        <LogoMarquee rows={rows} />

        <div className="mt-14 pt-10 border-t border-white/15 divide-y divide-white/10">
          {site.toolsGroups.map((group) => (
            <div key={group.label} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-4">
              <span className="text-xs font-bold uppercase tracking-widest text-clinical-light/60">{group.label}</span>
              <span className="text-base md:text-lg font-semibold text-white">{group.tools.join(' · ')}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-clinical-light/70">
          <span className="font-semibold text-white">{site.skillsLabel}: </span>
          {resume.coreSkills.join(' · ')}
        </p>
      </Container>
    </Section>
  );
};
