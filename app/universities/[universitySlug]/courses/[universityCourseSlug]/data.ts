export const PROGRAM_INFO = {
  programType: 'Degree',
  level: 'Undergraduate',
  offeredBy: 'Dayananda Sagar University',
  duration: '3 Years',
  studyMode: 'Online',
  location: 'Bangalore',
  accreditationBadge: 'UGC Approved',
  accreditationSubtitle: 'Entitled Recognition'
};

export const ABOUT_TEXT = {
  heading: 'Transform Your Career',
  paragraphs: [
    'This program is designed to build foundational skills and advanced knowledge.',
    'Join our community to access a wide range of academic resources and experienced faculty.'
  ]
};

export const INFO_CARDS = [
  {
    id: 'card1',
    iconType: 'eligibility',
    title: 'Eligibility Criteria',
    description: '10+2 from a recognized board with minimum 50% aggregate.',
    bulletPoints: ['No entrance exam required', 'Direct admission'],
    linkText: 'Check Eligibility',
    linkAction: 'eligibility'
  },
  {
    id: 'card2',
    iconType: 'admission',
    title: 'Admission Process',
    description: 'Simple and entirely online process.',
    bulletPoints: ['Submit application', 'Document verification', 'Fee payment'],
    linkText: 'Start Application',
    linkAction: 'apply'
  },
  {
    id: 'card3',
    iconType: 'benefits',
    title: 'Learning Benefits',
    description: 'Flexible learning schedule tailored for working professionals.',
    bulletPoints: ['Live interactive sessions', 'Recorded lectures', 'Dedicated mentors'],
    linkText: 'Download Brochure',
    linkAction: 'brochure'
  }
];

export const FEE_STRUCTURE = [
  { id: 'fee1', iconType: 'application', label: 'Application Fee', amount: '₹1,000' },
  { id: 'fee2', iconType: 'semester', label: 'Semester Fee', amount: '₹20,000' },
  { id: 'fee3', iconType: 'annual', label: 'Annual Fee', amount: '₹40,000' },
  { id: 'fee4', iconType: 'total', label: 'Total Fee', amount: '₹1,20,000' }
];

export const SEMESTER_CURRICULUM = [
  {
    id: 1,
    title: 'Semester 1',
    subjectCount: 5,
    description: 'Foundation courses covering the basics of management.',
    subjects: [
      { name: 'Principles of Management' },
      { name: 'Business Economics' },
      { name: 'Financial Accounting' }
    ]
  },
  {
    id: 2,
    title: 'Semester 2',
    subjectCount: 5,
    description: 'Core concepts in analytics and operations.',
    subjects: [
      { name: 'Business Analytics Fundamentals' },
      { name: 'Marketing Management' },
      { name: 'Organizational Behavior' }
    ]
  }
];

export const PROGRAM_AT_A_GLANCE = {
  semesters: 6,
  subjects: 30,
  totalCredits: 120
};

export const FAQ_ITEMS = [
  {
    id: 'faq1',
    question: 'Is the online degree valid?',
    answer: 'Yes, it is fully recognized by UGC-DEB.'
  },
  {
    id: 'faq2',
    question: 'Are there any hidden fees?',
    answer: 'No, our fee structure is completely transparent.'
  }
];
