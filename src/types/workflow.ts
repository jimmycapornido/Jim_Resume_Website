export interface WorkflowStep {
  label: string;
}

export interface WorkflowItem {
  id: string;
  number: string;
  title: string;
  tools: string[];
  summary: string;
  responsibilities: string[];
  clientValue: string[];
  flowSteps?: string[];
  /** Sanitized, PHI-free image only (e.g. a tool's own marketing/login screen). Never a real workflow screenshot. */
  image?: string;
  imageAlt?: string;
  /** Whole-image, heavily-blurred-beyond-legibility texture baked into the file itself (never CSS blur). Decorative background only. */
  bgImage?: string;
  featured: boolean;
}
