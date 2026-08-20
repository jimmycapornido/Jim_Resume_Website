import React from 'react';
import { Site } from '../types/site';
import { Container } from '../components/layout/Container';

export const Footer: React.FC<{ site: Site }> = ({ site }) => (
  <footer className="bg-navy-deep text-clinical-light/70 py-10">
    <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p>{site.footer.copyright}</p>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-medium text-white hover:text-accent transition"
      >
        {site.footer.backToTop} ↑
      </button>
    </Container>
  </footer>
);
