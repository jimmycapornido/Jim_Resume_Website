import { z } from 'zod';

export const SiteNavLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const SiteMetricSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const SiteServiceSchema = z.object({
  title: z.string(),
  platform: z.string().optional(),
  description: z.string(),
  outcomes: z.array(z.string()),
});

export const SiteProcessStepSchema = z.object({
  step: z.number(),
  title: z.string(),
  description: z.string(),
});

export const SiteHeroSchema = z.object({
  eyebrow: z.string(),
  headline: z.string(),
  subcopy: z.string(),
  ctaPrimary: z.string(),
  ctaSecondary: z.string(),
  proofPoints: z.array(SiteMetricSchema),
});

export const SiteProblemSchema = z.object({
  eyebrow: z.string(),
  headline: z.string(),
  painPoints: z.array(z.string()),
  transition: z.string(),
  cta: z.string(),
});

export const SiteWhyWorkWithJimmySchema = z.object({
  eyebrow: z.string(),
  headline: z.string(),
  body: z.array(z.string()),
  points: z.array(z.string()),
});

export const SiteToolsGroupSchema = z.object({
  label: z.string(),
  tools: z.array(z.string()),
});

export const SiteContactSchema = z.object({
  headline: z.string(),
  subcopy: z.string().optional(),
  privacyNotice: z.string().optional(),
  responseSLA: z.string(),
  consentText: z.string(),
});

export const SiteFooterSchema = z.object({
  copyright: z.string(),
  role: z.string(),
  year: z.number(),
  backToTop: z.string(),
});

export const TestimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  imagePath: z.string(),
});

export const CompanyLogoSchema = z.object({
  name: z.string(),
  logoPath: z.string(),
});

export const SiteSchema = z.object({
  brand: z.string(),
  brandSecondary: z.string().optional(),
  navLinks: z.array(SiteNavLinkSchema),
  ctaNav: z.string(),
  hero: SiteHeroSchema,
  trustStrip: z.array(z.string()),
  problem: SiteProblemSchema,
  servicesIntro: z.string().optional(),
  services: z.array(SiteServiceSchema),
  process: z.array(SiteProcessStepSchema),
  proofMetrics: z.array(SiteMetricSchema),
  testimonial: TestimonialSchema.optional(),
  companies: z.array(CompanyLogoSchema).optional(),
  whyWorkWithJimmy: SiteWhyWorkWithJimmySchema,
  toolsGroups: z.array(SiteToolsGroupSchema),
  skillsLabel: z.string(),
  toolsLabel: z.string(),
  contact: SiteContactSchema,
  footer: SiteFooterSchema,
});

export type Site = z.infer<typeof SiteSchema>;
