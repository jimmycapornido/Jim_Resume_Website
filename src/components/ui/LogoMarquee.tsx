import React from 'react';
import { ToolIcon, ToolIconName } from './ToolIcon';

export interface MarqueeItem {
  icon: ToolIconName;
  label: string;
}

const Row: React.FC<{ items: MarqueeItem[] }> = ({ items }) => (
  <div className="flex items-center gap-10 shrink-0 pr-10">
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-3 text-white/90 whitespace-nowrap">
        <ToolIcon name={item.icon} className="w-6 h-6 text-accent shrink-0" />
        <span className="text-base md:text-lg font-semibold">{item.label}</span>
      </span>
    ))}
  </div>
);

export const LogoMarquee: React.FC<{ rows: MarqueeItem[][] }> = ({ rows }) => (
  <div aria-hidden="true" className="space-y-6">
    {rows.map((items, i) => (
      <div key={i} className="marquee-row overflow-hidden">
        <div className={`flex w-max ${i % 2 === 1 ? 'marquee-track-reverse' : 'marquee-track'}`}>
          <Row items={items} />
          <Row items={items} />
        </div>
      </div>
    ))}
  </div>
);
