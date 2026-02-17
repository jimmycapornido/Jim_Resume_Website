import { z } from 'zod';

export const SiteNavLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const SiteMetricSchema = z.object({
  label: z.string(),
});

export const SiteServiceSchema = z.object({
  title: z.string(),
  description: z.string(),
  outcomes: z.array(z.string()),
});

export const SiteProcessStepSchema = z.object({
  step: z.number(),
  title: z.string(),
  description: z.string(),
});

export const SiteProfileCardSchema = z.object({
  title: z.string(),
  availability: z.string(),
  metrics: z.array(SiteMetricSchema),
});

export const SiteContactSchema = z.object({
  headline: z.string(),
  responseSLA: z.string(),
  consentText: z.string(),
});

export const SiteFooterSchema = z.object({
  copyright: z.string(),
  role: z.string(),
  year: z.number(),
  backToTop: z.string(),
});

export const SiteSchema = z.object({
  brand: z.string(),
  navLinks: z.array(SiteNavLinkSchema),
  ctaNav: z.string(),
  ctaHeroPrimary: z.string(),
  ctaHeroSecondary: z.string(),
  trustStrip: z.array(z.string()),
  profileCard: SiteProfileCardSchema,
  services: z.array(SiteServiceSchema),
  process: z.array(SiteProcessStepSchema),
  proofMetrics: z.array(SiteMetricSchema),
  skillsLabel: z.string(),
  toolsLabel: z.string(),
  contact: SiteContactSchema,
  footer: SiteFooterSchema,
});

export type Site = z.infer<typeof SiteSchema>;
