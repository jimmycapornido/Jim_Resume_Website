import React from 'react';
import { Resume } from '../types/resume';
import { Site } from '../types/site';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Divider } from '../components/ui/Divider';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const SkillsTools: React.FC<{ resume: Resume; site: Site }> = ({ resume, site }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={elementRef}
      className={`py-16 bg-white dark:bg-slate-900 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>{site.skillsLabel}</SectionHeading>
        <div className="flex flex-wrap gap-3 mb-10">
          {resume.coreSkills.map((skill, i) => (
            <div key={i} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isVisible ? `${i * 30}ms` : '0ms' }}>
              <Badge>{skill}</Badge>
            </div>
          ))}
        </div>
        <SectionHeading>{site.toolsLabel}</SectionHeading>
        <div className="flex flex-wrap gap-3 mb-6">
          {resume.technicalTools.map((tool, i) => (
            <span
              key={i}
              className={`inline-block px-4 py-2 text-sm font-medium rounded-full bg-surface dark:bg-slate-800 text-text-primary dark:text-slate-100 border border-border dark:border-slate-700 transition-all duration-700 hover:shadow-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 30}ms` : '0ms' }}
            >
              {tool}
            </span>
          ))}
        </div>
        <Divider />
      </div>
    </section>
  );
};
