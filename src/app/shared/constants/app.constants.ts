import { Service, AssistanceType } from '../models/contact.model';
export const STATS = [
  {
    value: '1,000+',
    label: 'Seniors Helped',
  },
  {
    value: '50+',
    label: 'Healthcare Partners',
  },
  {
    value: '100+',
    label: 'Volunteers',
  },
  {
    value: '5,000+',
    label: 'Meals Provided',
  },
];

export const ASSISTANCE_TYPES: AssistanceType[] = [
  'Medical Coordination',
  'Financial Assistance',
  'General Inquiry',
];

export const CONTACT_INFO = {
  phone: '+91 8983216338',
  phoneHours: 'Mon-Fri, 9am-5pm',
  email: 'sumit.rasal301@gmail.com',
  address: {
    line1: 'Morwadi, AT-Post: Nighoj',
    line2: 'Tal - Parner, Dist - Ahilyanagar',
  },
};

export const SERVICES: Service[] = [
  {
    id: 'medical-coordination',
    title: 'Medical Coordination',
    description: 'We handle all the logistics of your healthcare. From scheduling doctor appointments and transport to ensuring prescriptions are filled, our team is here to take the stress out of managing your health.',
    features: [
      'Appointment scheduling & reminders',
      'Transportation to medical facilities',
      'Medication management & refills',
      'Liaison between family and doctors',
    ],
    gradient: 'linear-gradient(135deg, #007bff, #0056b3)',
  },
  {
    id: 'financial-assistance',
    title: 'Financial Assistance',
    description: 'Navigating healthcare costs can be overwhelming. We provide support by connecting seniors with grants, aid programs, and direct assistance for medical bills and prescriptions.',
    features: [
      'Medical bill payment support',
      'Prescription cost assistance',
      'Guidance on available aid programs',
      'Partnerships with local pharmacies',
    ],
    gradient: 'linear-gradient(135deg, #28a745, #1e7e34)',
  },
];
