import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Site } from '../types/site';

export const Nav: React.FC<{ site: Site }> = ({ site }) => {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#hero');

  React.useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || '#hero');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-clinical/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#hero" className="font-bold text-lg text-primary dark:text-slate-50 tracking-tight hover:opacity-80 transition">{site.brand}</a>
        <div className="hidden md:flex gap-8 items-center">
          {site.navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative pb-1 ${'text-text-primary dark:text-slate-100 hover:text-primary dark:hover:text-accent'}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
              {activeHash === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full animate-in fade-in" />
              )}
            </a>
          ))}
          <Button variant="primary" className="ml-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{site.ctaNav}</Button>
        </div>
        <button className="md:hidden p-2" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <span className="text-2xl">☰</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-clinical dark:bg-slate-800 border-t border-border dark:border-slate-700 px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {site.navLinks.map(link => (
            <a key={link.href} href={link.href} className="block py-2 text-sm font-medium text-text-primary dark:text-slate-100 hover:text-primary dark:hover:text-accent transition" onClick={() => handleNavClick(link.href)}>{link.label}</a>
          ))}
          <Button variant="primary" className="w-full mt-3" onClick={() => { setOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>{site.ctaNav}</Button>
        </div>
      )}
    </nav>
  );
};
