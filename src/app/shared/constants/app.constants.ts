import { Service, AssistanceType } from '../models/contact.model';

export const STATS = [
  {
    value: '100+',
    label: 'Lives Touched',
  },
  {
    value: '₹5L+',
    label: 'Medical Aid Given',
  },
  {
    value: '50+',
    label: 'Dedicated Volunteers',
  },
];

export const ASSISTANCE_TYPES: AssistanceType[] = [
  'Medical Coordination',
  'Financial Assistance',
  'General Inquiry',
];

export const CONTACT_INFO = {
  phone: '+91 89832 16338',
  phoneHours: '24/7 Emergency Support',
  email: 'help@aarogyaghar.life',
  address: {
    line1: 'Morwadi, At Post: Nighoj',
    line2: 'Tal: Parner, Dist: Ahilyanagar',
  },
};

export const SERVICES: Service[] = [
  {
    id: 'medical-coordination',
    title: 'Medical Coordination',
    description: 'We take full responsibility for the health of neglected seniors. From arranging free doctor visits and hospital transport to ensuring they take their medicines on time — we are like their own family.',
    features: [
      'Free doctor consultations',
      'Hospital admission support',
      'Regular health check-ups',
      'Medicine supply at doorstep',
    ],
    gradient: 'linear-gradient(135deg, #0054A6, #007bff)',
  },
  {
    id: 'financial-assistance',
    title: 'Financial Assistance',
    description: 'Poverty should not prevent anyone from getting treatment. We directly pay for surgeries, medicines, and hospital bills for seniors who have no financial support.',
    features: [
      'Direct hospital bill payment',
      'Free life-saving medicines',
      'Emergency surgery grants',
      'Nutrition support',
    ],
    gradient: 'linear-gradient(135deg, #2BB673, #1e7e34)',
  },
];
