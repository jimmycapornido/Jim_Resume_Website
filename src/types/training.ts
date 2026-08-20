export type TrainingCategory = 'medical-va' | 'clinical-safety';

export interface TrainingItem {
  id: string;
  title: string;
  provider: string;
  date: string;
  image: string;
  category: TrainingCategory;
  summary: string;
  certificateCode?: string;
}
