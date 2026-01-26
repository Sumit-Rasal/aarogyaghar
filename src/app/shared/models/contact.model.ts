export interface ContactRequest {
  name: string;
  phone: string;
  age: number;
  email?: string;
  assistanceType: AssistanceType;
}

export type AssistanceType = 'Medical Coordination' | 'Financial Assistance' | 'General Inquiry';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}
