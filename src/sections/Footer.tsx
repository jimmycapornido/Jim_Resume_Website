import React from 'react';
import { Site } from '../types/site';

export const Footer: React.FC<{ site: Site }> = ({ site }) => (
  <footer className="py-8 bg-surface dark:bg-slate-900 border-t border-border dark:border-slate-800 text-center text-xs text-text-muted dark:text-slate-400">
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-2">
        {site.footer?.copyright} • {site.footer?.role} • {site.footer?.year}
      </div>
      <a href="#hero" className="inline-block text-primary dark:text-slate-100 hover:text-accent transition text-xs font-medium">{site.footer?.backToTop}</a>
    </div>
  </footer>
);
