import { z } from 'zod';

export const ExperienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  date: z.string(),
  achievements: z.array(z.string()),
});

export const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  date: z.string(),
});

export const CertificationSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  code: z.string().optional(),
});

export const ResumeSchema = z.object({
  name: z.string(),
  location: z.string(),
  phone: z.string(),
  email: z.string(),
  dateOfBirth: z.string(),
  professionalSummary: z.string(),
  coreSkills: z.array(z.string()),
  technicalTools: z.array(z.string()),
  experience: z.array(ExperienceSchema),
  education: z.array(EducationSchema),
  certifications: z.array(CertificationSchema),
});

export type Resume = z.infer<typeof ResumeSchema>;
