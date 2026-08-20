import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/layout/Container';
import { Site } from '../types/site';

export const Nav: React.FC<{ site: Site }> = ({ site }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#hero');

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash || '#hero');
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setOpen(false);
  };

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-white/0 border-b border-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#hero" className="leading-tight hover:opacity-80 transition">
          <span className="block font-extrabold text-lg text-navy tracking-tight">{site.brand}</span>
          {site.brandSecondary && (
            <span className="block text-xs font-medium text-text-muted">{site.brandSecondary}</span>
          )}
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {site.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium relative pb-1 text-text-primary hover:text-primary transition-colors"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
              {activeHash === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
          <Button variant="primary" onClick={scrollToContact}>
            {site.ctaNav}
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-navy"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl leading-none">{open ? '×' : '☰'}</span>
        </button>
      </Container>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-6">
          {site.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-text-primary hover:text-primary transition"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            className="w-full mt-3"
            onClick={() => {
              setOpen(false);
              scrollToContact();
            }}
          >
            {site.ctaNav}
          </Button>
        </div>
      )}
    </nav>
  );
};
