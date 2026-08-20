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
  featured: boolean;
}
