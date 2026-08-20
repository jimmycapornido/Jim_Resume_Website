import React from 'react';
import { WorkflowItem } from '../../types/workflow';
import { Eyebrow } from '../ui/Eyebrow';

const FlowDiagram: React.FC<{ steps: string[] }> = ({ steps }) => (
  <ol className="flex flex-col gap-0">
    {steps.map((step, i) => (
      <li key={step} className="relative pl-9 pb-6 last:pb-0">
        {i < steps.length - 1 && (
          <span className="absolute left-[11px] top-6 bottom-0 w-px bg-white/25" aria-hidden="true" />
        )}
        <span className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-accent text-navy-deep text-xs font-bold flex items-center justify-center">
          {i + 1}
        </span>
        <span className="text-sm md:text-base font-medium text-white">{step}</span>
      </li>
    ))}
  </ol>
);

const VisualPanel: React.FC<{ item: WorkflowItem }> = ({ item }) => (
  <div className="w-full h-full min-h-[280px] md:min-h-[360px] rounded-2xl bg-navy p-8 md:p-10 flex flex-col justify-between">
    {item.flowSteps ? (
      <FlowDiagram steps={item.flowSteps} />
    ) : (
      <>
        <span className="text-white/30 text-7xl md:text-8xl font-extrabold leading-none">{item.number}</span>
        <div className="mt-6">
          {item.tools.map((tool) => (
            <div key={tool} className="text-white font-semibold text-lg md:text-xl">
              {tool}
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

export const WorkflowFeature: React.FC<{ item: WorkflowItem; reverse?: boolean }> = ({ item, reverse = false }) => (
  <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 md:py-20 border-b border-border last:border-b-0">
    <div className={reverse ? 'md:order-2' : 'md:order-1'}>
      <VisualPanel item={item} />
    </div>
    <div className={reverse ? 'md:order-1' : 'md:order-2'}>
      <Eyebrow>Workflow {item.number}</Eyebrow>
      <h3 className="mt-3 text-h3 md:text-h2 font-extrabold text-navy leading-tight">{item.title}</h3>
      <p className="mt-2 text-sm font-medium text-text-muted">{item.tools.join(' + ')}</p>
      <p className="mt-4 text-base leading-relaxed text-text-secondary">{item.summary}</p>

      <div className="mt-6">
        <h4 className="text-xs font-bold uppercase tracking-wide text-text-muted mb-3">What I Handle</h4>
        <ul className="space-y-2">
          {item.responsibilities.map((r) => (
            <li key={r} className="flex gap-3 text-sm text-text-secondary">
              <span className="text-primary font-bold mt-0.5">—</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-xs font-bold uppercase tracking-wide text-text-muted mb-3">How This Helps Your Team</h4>
        <ul className="space-y-2">
          {item.clientValue.map((v) => (
            <li key={v} className="flex gap-3 text-sm text-text-secondary">
              <span className="text-accent font-bold mt-0.5">✓</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
