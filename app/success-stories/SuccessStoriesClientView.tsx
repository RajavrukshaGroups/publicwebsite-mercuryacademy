// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { 
//   ArrowRight, 
//   Quote, 
//   TrendingUp, 
//   Briefcase, 
//   Award, 
//   Users,
//   PlayCircle
// } from 'lucide-react';
// import Image from 'next/image';

// const successStories = [
//   {
//     id: 1,
//     name: "Aarav Sharma",
//     previousRole: "Software Engineer",
//     currentRole: "Senior Data Scientist",
//     company: "Google",
//     hike: "120%",
//     quote: "The Business Analytics program completely transformed my approach to data. The hands-on projects and expert faculty guidance were instrumental in my transition to Google.",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
//     course: "MBA in Business Analytics"
//   },
//   {
//     id: 2,
//     name: "Priya Patel",
//     previousRole: "HR Executive",
//     currentRole: "HR Business Partner",
//     company: "Amazon",
//     hike: "85%",
//     quote: "The comprehensive curriculum and peer learning network helped me develop a strategic mindset. I can now confidently drive HR initiatives at a global scale.",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
//     course: "MBA in Human Resource Management"
//   },
//   {
//     id: 3,
//     name: "Rahul Desai",
//     previousRole: "Marketing Associate",
//     currentRole: "Digital Marketing Head",
//     company: "Unilever",
//     hike: "150%",
//     quote: "I was looking for a program that offered flexibility without compromising on quality. The online MBA provided exactly that, along with incredible networking opportunities.",
//     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
//     course: "MBA in Marketing Management"
//   },
//   {
//     id: 4,
//     name: "Neha Gupta",
//     previousRole: "Financial Analyst",
//     currentRole: "Investment Banker",
//     company: "Goldman Sachs",
//     hike: "200%",
//     quote: "The rigor of the finance modules prepared me for the demanding world of investment banking. The career support team was exceptional in helping me secure my dream role.",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
//     course: "MBA in Financial Management"
//   },
//   {
//     id: 5,
//     name: "Vikram Singh",
//     previousRole: "Operations Manager",
//     currentRole: "Supply Chain Director",
//     company: "Flipkart",
//     hike: "90%",
//     quote: "Learning from industry veterans gave me practical insights that I could immediately apply at work. The curriculum is perfectly aligned with current industry needs.",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
//     course: "MBA in Operations Management"
//   },
//   {
//     id: 6,
//     name: "Ananya Reddy",
//     previousRole: "Business Development Exec",
//     currentRole: "VP of Sales",
//     company: "Salesforce",
//     hike: "140%",
//     quote: "The leadership skills I gained during the program were a game-changer. The interactive sessions and case studies provided a deep understanding of global business dynamics.",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
//     course: "BBA in General Management"
//   }
// ];

// const metrics = [
//   { icon: TrendingUp, value: "54%", label: "Average Salary Hike" },
//   { icon: Users, value: "10,000+", label: "Alumni Network" },
//   { icon: Briefcase, value: "500+", label: "Hiring Partners" },
//   { icon: Award, value: "Top 1%", label: "Industry Placement" },
// ];

// export default function SuccessStoriesClientView() {
//   return (
//     <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 selection:bg-amber-500 selection:text-white -mt-25">
//       {/* ========================================================================= */}
//       {/* 1. HERO BANNER WITH NAVY BACKGROUND AND GOLD ACCENT                       */}
//       {/* ========================================================================= */}
//       <section className="relative bg-[#0d1c3a] text-white overflow-hidden">
//         {/* Background Layers */}
//         <div className="absolute inset-0 z-0 flex">
//           <div className="w-full lg:w-[60%] h-full bg-gradient-to-r from-[#0a1835] via-[#0d1c3a] to-[#112347] z-10"></div>
          
//           <div className="hidden lg:block lg:w-[40%] h-full relative z-0">
//             <div
//               className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay grayscale"
//               style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')`,
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-950/40 to-[#0d1c3a]" />
//             {/* Diagonal Golden Stripe */}
//             <div
//               className="absolute top-0 left-0 bottom-0 w-3 bg-amber-400 z-20 shadow-xl"
//               style={{
//                 transform: 'skewX(-16deg)',
//                 transformOrigin: 'top left',
//               }}
//             />
//           </div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
//           <div className="max-w-3xl pt-12">
//             <span className="inline-block py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-xs uppercase tracking-wider mb-6">
//               Alumni Success
//             </span>
//             <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
//               <span className="block text-white">Real People.</span>
//               <span className="block text-[#fdb813] drop-shadow-sm">Real Impact.</span>
//             </h1>
//             <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed font-medium max-w-2xl">
//               Discover how our graduates have transformed their careers, achieved their dreams, and become leaders in top global organizations.
//             </p>
//             <div className="flex flex-wrap items-center gap-4">
//               <a href="#stories" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
//                 Read Their Stories
//               </a>
//               <Link href="/courses" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all">
//                 Explore Programs
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================================= */}
//       {/* 2. IMPACT METRICS BAR                                                     */}
//       {/* ========================================================================= */}
//       <section className="relative z-20 -mt-10 lg:-mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
//         <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
//             {metrics.map((metric, idx) => {
//               const Icon = metric.icon;
//               return (
//                 <div key={idx} className={`flex flex-col items-center text-center ${idx % 2 !== 0 ? 'md:border-l-0' : ''}`}>
//                   <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4 text-amber-500">
//                     <Icon className="w-6 h-6" />
//                   </div>
//                   <div className="font-serif text-3xl font-extrabold text-gray-900 mb-1">
//                     {metric.value}
//                   </div>
//                   <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
//                     {metric.label}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ========================================================================= */}
//       {/* 3. SUCCESS STORIES GRID                                                   */}
//       {/* ========================================================================= */}
//       <section id="stories" className="py-20 sm:py-28 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
//             <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
//               Inspiring Journeys
//             </h2>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               Read how our flexible online learning model empowered these professionals to upskill without pausing their careers.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {successStories.map((story) => (
//               <div 
//                 key={story.id} 
//                 className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full hover:-translate-y-1 relative overflow-hidden"
//               >
//                 {/* Decorative background blur */}
//                 <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all duration-500"></div>

//                 {/* Quote Icon */}
//                 <div className="mb-6">
//                   <Quote className="w-10 h-10 text-amber-300 opacity-50" />
//                 </div>

//                 {/* Quote Text */}
//                 <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8 flex-grow relative z-10 italic">
//                   "{story.quote}"
//                 </p>

//                 {/* Separator */}
//                 <div className="h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-8"></div>

//                 {/* User Info & Stats */}
//                 <div className="flex items-center gap-4 relative z-10">
//                   <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-amber-100">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img 
//                       src={story.image} 
//                       alt={story.name} 
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 text-base">{story.name}</h4>
//                     <p className="text-xs text-amber-600 font-bold tracking-wide uppercase mt-0.5">
//                       {story.course}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Career Transition Block */}
//                 <div className="mt-6 bg-[#f8fafc] rounded-2xl p-4 border border-gray-100 relative z-10">
//                   <div className="flex items-center justify-between gap-2 mb-3">
//                     <div className="text-xs font-semibold text-gray-500 truncate" title={story.previousRole}>
//                       {story.previousRole}
//                     </div>
//                     <ArrowRight className="w-4 h-4 text-amber-500 shrink-0" />
//                     <div className="text-xs font-bold text-blue-950 truncate" title={story.currentRole}>
//                       {story.currentRole}
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
//                     <div className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
//                       <Briefcase className="w-4 h-4 text-gray-400" />
//                       {story.company}
//                     </div>
//                     <div className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
//                       <TrendingUp className="w-3 h-3" />
//                       {story.hike} Hike
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-bold text-sm transition-all group">
//               <span>Load More Stories</span>
//               <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================================= */}
//       {/* 4. VIDEO TESTIMONIAL BANNER (DARK)                                        */}
//       {/* ========================================================================= */}
//       <section className="py-20 bg-[#051329] text-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
//             <div className="lg:w-1/2">
//               <span className="text-amber-400 font-bold text-xs tracking-wider uppercase mb-3 block">
//                 Video Testimonial
//               </span>
//               <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
//                 "The flexibility allowed me to study while leading a global team."
//               </h2>
//               <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//                 Watch how Sarah leveraged the cutting-edge curriculum and industry connections to secure an executive role at a top-tier consulting firm.
//               </p>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
//                   <PlayCircle className="w-6 h-6 text-amber-400" />
//                 </div>
//                 <div>
//                   <div className="font-bold text-white">Sarah Jenkins</div>
//                   <div className="text-sm text-gray-400">VP Strategy, McKinsey</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="lg:w-1/2 w-full">
//               <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 shadow-2xl group cursor-pointer">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img 
//                   src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" 
//                   alt="Video Thumbnail" 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-blue-950/40 group-hover:bg-blue-950/20 transition-colors"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:text-blue-950 transition-all shadow-xl group-hover:scale-110">
//                     <PlayCircle className="w-10 h-10 ml-1" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================================= */}
//       {/* 5. BOTTOM CTA                                                             */}
//       {/* ========================================================================= */}
//       <section className="py-20 sm:py-24 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//             Ready to write your own success story?
//           </h2>
//           <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
//             Join thousands of successful alumni. Enroll in our industry-aligned programs and take the next big step in your career.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Link href="/courses" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
//               Explore Programs
//             </Link>
//             <button className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 font-bold text-sm transition-all">
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  ChevronDown,
  Award,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Briefcase,
  Building2,
  ChevronRight,
  Sparkles,
  Play,
  Pause,
  Mail,
  MapPin,
  X,
  CheckCircle2,
  MessageSquare,
  PhoneCall,
  BookOpen
} from 'lucide-react';
import BackgroundBanner from "../../public/images/success-stories-bg-banner.png"

// ============================================================================
// 1. TYPES & DATA
// ============================================================================

export interface SuccessStory {
  id: string;
  quote: string;
  name: string;
  program: string;
  category: 'analytics' | 'hr' | 'marketing' | 'finance' | 'operations' | 'management' | 'tech';
  previousRole: string;
  newRole: string;
  company: string;
  salaryHike: string;
  avatar: string;
  location?: string;
  graduationYear: string;
  fullStory?: {
    challenge: string;
    solution: string;
    outcome: string;
    interviewQnA: {
      question: string;
      answer: string;
    }[];
    skillsAcquired: string[];
  };
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  iconType: 'trend' | 'alumni' | 'partners' | 'placement';
}

export interface UniversityPartner {
  id: string;
  name: string;
  accreditation: string;
  location: string;
  programsCount: number;
  badge: string;
  rating: string;
}

export interface CounsellingRequest {
  name: string;
  email: string;
  phone: string;
  preferredProgram: string;
  currentExperience: string;
}

const STATS_DATA: StatItem[] = [
  { id: 'stat-1', number: '54%', label: 'AVERAGE SALARY HIKE', iconType: 'trend' },
  { id: 'stat-2', number: '10,000+', label: 'ALUMNI NETWORK', iconType: 'alumni' },
  { id: 'stat-3', number: '500+', label: 'HIRING PARTNERS', iconType: 'partners' },
  { id: 'stat-4', number: 'Top 1%', label: 'INDUSTRY PLACEMENT', iconType: 'placement' }
];

const UNIVERSITY_PARTNERS: UniversityPartner[] = [
  {
    id: 'uni-1',
    name: 'Jain Deemed University',
    accreditation: 'NAAC A++ Graded | UGC Entitled',
    location: 'Bengaluru, India',
    programsCount: 18,
    badge: 'Top Ranked',
    rating: '4.9 ★'
  },
  {
    id: 'uni-2',
    name: 'Manipal University Jaipur',
    accreditation: 'NAAC A+ Graded | UGC Recognized',
    location: 'Jaipur, India',
    programsCount: 14,
    badge: 'Popular Choice',
    rating: '4.8 ★'
  },
  {
    id: 'uni-3',
    name: 'Amity University Online',
    accreditation: 'QS Ranked | WES Accredited',
    location: 'Noida, India',
    programsCount: 22,
    badge: 'Global Recognition',
    rating: '4.9 ★'
  },
  {
    id: 'uni-4',
    name: 'DY Patil University',
    accreditation: 'NAAC A++ Graded | AICTE Approved',
    location: 'Navi Mumbai, India',
    programsCount: 12,
    badge: 'Healthcare & MBA',
    rating: '4.7 ★'
  },
  {
    id: 'uni-5',
    name: 'Vellore Institute of Technology (VIT)',
    accreditation: 'NIRF Top 10 | UGC Entitled',
    location: 'Vellore, India',
    programsCount: 16,
    badge: 'Tech & Management',
    rating: '4.9 ★'
  }
];

const PROGRAM_CATEGORIES = [
  { id: 'all', label: 'All Programs' },
  { id: 'analytics', label: 'Business Analytics' },
  { id: 'hr', label: 'HR Management' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'finance', label: 'Financial Management' },
  { id: 'operations', label: 'Operations' },
  { id: 'management', label: 'General Management' }
] as const;

const STORIES_DATA: SuccessStory[] = [
  {
    id: 'aarav-sharma',
    quote: 'The Business Analytics program completely transformed my approach to data. The hands-on projects and expert faculty guidance were instrumental in my transition to Google.',
    name: 'Aarav Sharma',
    program: 'MBA IN BUSINESS ANALYTICS',
    category: 'analytics',
    previousRole: 'Software Engineer',
    newRole: 'Senior Data Scientist',
    company: 'Google',
    salaryHike: '+120% Hike',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    location: 'Bengaluru, India',
    graduationYear: '2023',
    fullStory: {
      challenge: 'As a backend Software Engineer, I felt pigeonholed into writing boilerplate code without having strategic visibility into business outcomes or data science modeling.',
      solution: 'Mercury Academy\'s Online MBA in Business Analytics gave me Python modeling, advanced regression, SQL warehouses, and real-time business intelligence dashboards without leaving my full-time job.',
      outcome: 'Within 3 months of completing my capstone project, I interviewed with Google Cloud AI and received a Senior Data Scientist offer with a 120% salary increase.',
      skillsAcquired: ['Machine Learning', 'Predictive Analytics', 'Tableau & PowerBI', 'SQL & BigQuery', 'Business Strategy'],
      interviewQnA: [
        {
          question: 'How did you balance a full-time engineering job with an MBA?',
          answer: 'The weekend live sessions and asynchronous video modules made it seamless. I dedicated 8 hours every weekend to hands-on labs.'
        },
        {
          question: 'What was the most valuable part of the Mercury Academy curriculum?',
          answer: 'The 1-on-1 industry mentorship. My mentor was a Principal Data Scientist who helped me optimize my portfolio projects for tech recruiter screenings.'
        }
      ]
    }
  },
  {
    id: 'priya-patel',
    quote: 'The comprehensive curriculum and peer learning network helped me develop a strategic mindset. I can now confidently drive HR initiatives at a global scale.',
    name: 'Priya Patel',
    program: 'MBA IN HUMAN RESOURCE MANAGEMENT',
    category: 'hr',
    previousRole: 'HR Executive',
    newRole: 'HR Business Partner',
    company: 'Amazon',
    salaryHike: '+85% Hike',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    location: 'Hyderabad, India',
    graduationYear: '2023',
    fullStory: {
      challenge: 'I was managing daily operational HR tasks but wanted to transition into strategic workforce planning and executive talent partnering.',
      solution: 'The MBA in HRM taught me organizational psychology, labor law frameworks, talent analytics, and cross-cultural leadership.',
      outcome: 'Promoted from HR Executive to Regional HR Business Partner at Amazon within 6 months of degree completion.',
      skillsAcquired: ['Workforce Analytics', 'Strategic HR Partnering', 'Global Compensation', 'Change Management', 'Talent Acquisition'],
      interviewQnA: [
        {
          question: 'Did the online format provide enough networking opportunities?',
          answer: 'Absolutely! Our cohort had leaders from 14 different industries. We still hold monthly peer mastermind calls.'
        }
      ]
    }
  },
  {
    id: 'rahul-desai',
    quote: 'I was looking for a program that offered flexibility without compromising on quality. The online MBA provided exactly that, along with incredible networking opportunities.',
    name: 'Rahul Desai',
    program: 'MBA IN MARKETING MANAGEMENT',
    category: 'marketing',
    previousRole: 'Marketing Associate',
    newRole: 'Digital Marketing Head',
    company: 'Unilever',
    salaryHike: '+150% Hike',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    location: 'Mumbai, India',
    graduationYear: '2022',
    fullStory: {
      challenge: 'My marketing knowledge was limited to social media execution. I needed a deep understanding of brand economics, omnichannel retail, and consumer behavior.',
      solution: 'Mercury Academy\'s Marketing Management specialization combined Harvard-style case studies with live brand simulations.',
      outcome: 'I led Unilever\'s new D2C campaign strategy and was promoted to Head of Digital Marketing with a 150% hike.',
      skillsAcquired: ['Brand Strategy', 'Performance Marketing', 'Omnichannel Attribution', 'Consumer Psychology', 'P&L Management'],
      interviewQnA: [
        {
          question: 'What surprised you most about the program?',
          answer: 'The practical brand simulations where we competed in real-time teams to manage multi-million dollar virtual advertising budgets.'
        }
      ]
    }
  },
  {
    id: 'neha-gupta',
    quote: 'The rigor of the finance modules prepared me for the demanding world of investment banking. The career support team was exceptional in helping me secure my dream role.',
    name: 'Neha Gupta',
    program: 'MBA IN FINANCIAL MANAGEMENT',
    category: 'finance',
    previousRole: 'Financial Analyst',
    newRole: 'Investment Banker',
    company: 'Goldman Sachs',
    salaryHike: '+200% Hike',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    location: 'Mumbai, India',
    graduationYear: '2023',
    fullStory: {
      challenge: 'Transitioning from corporate accounting to tier-1 investment banking requires rigorous financial modeling and M&A valuation mastery.',
      solution: 'The MBA in Financial Management included DCF valuation workshops, LBO modeling labs, and direct interview prep with banking veterans.',
      outcome: 'Secured an Associate role at Goldman Sachs with a 200% salary jump.',
      skillsAcquired: ['M&A Valuation', 'LBO & DCF Modeling', 'Derivatives & Hedging', 'Corporate Strategy', 'Financial Reporting'],
      interviewQnA: [
        {
          question: 'How did the Career Services team support your job hunt?',
          answer: 'They arranged 4 mock technical superdays with alumni working on Wall Street and Dalal Street. I walked into Goldman Sachs feeling 100% prepared.'
        }
      ]
    }
  },
  {
    id: 'vikram-singh',
    quote: 'Learning from industry veterans gave me practical insights that I could immediately apply at work. The curriculum is perfectly aligned with current industry needs.',
    name: 'Vikram Singh',
    program: 'MBA IN OPERATIONS MANAGEMENT',
    category: 'operations',
    previousRole: 'Operations Manager',
    newRole: 'Supply Chain Director',
    company: 'Flipkart',
    salaryHike: '+90% Hike',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    location: 'Bengaluru, India',
    graduationYear: '2023',
    fullStory: {
      challenge: 'Managing last-mile delivery bottlenecks needed advanced supply chain optimization and AI-driven inventory forecasting.',
      solution: 'The Operations Management MBA covered Six Sigma Black Belt methodologies, ERP architectures, and modern logistics automation.',
      outcome: 'Appointed as Supply Chain Director at Flipkart, managing nationwide warehouse throughput.',
      skillsAcquired: ['Six Sigma Black Belt', 'Supply Chain Analytics', 'Warehouse Automation', 'Vendor Negotiation', 'Lean Enterprise'],
      interviewQnA: [
        {
          question: 'Were you able to apply what you learned immediately?',
          answer: 'Yes! My coursework project saved my previous employer $320,000 in freight optimization within the first semester.'
        }
      ]
    }
  },
  {
    id: 'ananya-reddy',
    quote: 'The leadership skills I gained during the program were a game-changer. The interactive sessions and case studies provided a deep understanding of global business dynamics.',
    name: 'Ananya Reddy',
    program: 'MBA IN GENERAL MANAGEMENT',
    category: 'management',
    previousRole: 'Business Development Exec',
    newRole: 'VP of Sales',
    company: 'Salesforce',
    salaryHike: '+140% Hike',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
    location: 'Pune, India',
    graduationYear: '2022',
    fullStory: {
      challenge: 'Moving from individual contributor to VP of Sales required executive presence, enterprise deal structuring, and C-suite negotiation.',
      solution: 'The General Management program focused on executive decision-making, strategic sales transformations, and global governance.',
      outcome: 'Elevated to VP of Enterprise Sales at Salesforce, expanding revenue across APAC.',
      skillsAcquired: ['Executive Leadership', 'Enterprise Deal Structuring', 'Revenue Operations', 'Boardroom Governance', 'Global Expansion'],
      interviewQnA: [
        {
          question: 'What would you say to someone hesitating to enroll?',
          answer: 'The ROI is undeniable. Within one year after graduation, the salary hike paid off the tuition fee more than six times over.'
        }
      ]
    }
  },
  {
    id: 'rohit-verma',
    quote: 'Mercury Academy\'s Artificial Intelligence & Analytics specialization enabled me to transition from QA testing to designing enterprise LLM architectures.',
    name: 'Rohit Verma',
    program: 'MBA IN BUSINESS ANALYTICS',
    category: 'analytics',
    previousRole: 'QA Analyst',
    newRole: 'Lead AI Engineer',
    company: 'Microsoft',
    salaryHike: '+180% Hike',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    location: 'Hyderabad, India',
    graduationYear: '2024',
    fullStory: {
      challenge: 'I felt stuck in automated software testing without a pathway into machine learning engineering.',
      solution: 'The analytics & AI track gave me practical Python, neural network foundations, and cloud deployment frameworks.',
      outcome: 'Hired as Lead AI Engineer at Microsoft Cloud.',
      skillsAcquired: ['Deep Learning', 'PyTorch & TensorFlow', 'LLM Fine-Tuning', 'Cloud Architecture'],
      interviewQnA: [
        {
          question: 'How was the peer support?',
          answer: 'Incredible. We built three open-source data pipelines together during our capstone.'
        }
      ]
    }
  },
  {
    id: 'meera-nair',
    quote: 'The international business case studies gave me the exact vocabulary and analytical tools to lead multi-country mergers and acquisitions.',
    name: 'Meera Nair',
    program: 'MBA IN FINANCIAL MANAGEMENT',
    category: 'finance',
    previousRole: 'Treasury Analyst',
    newRole: 'M&A Director',
    company: 'Deloitte',
    salaryHike: '+135% Hike',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    location: 'Bengaluru, India',
    graduationYear: '2023',
    fullStory: {
      challenge: 'I needed cross-border financial compliance and corporate restructuring expertise.',
      solution: 'Mercury Academy provided real-world M&A simulation labs with Big-4 partners.',
      outcome: 'Joined Deloitte as Director of M&A Advisory.',
      skillsAcquired: ['Due Diligence', 'Cross-Border Taxation', 'Corporate Restructuring'],
      interviewQnA: [
        {
          question: 'Why did you choose Mercury Academy over traditional campus MBA?',
          answer: 'I could keep my $80,000 income while earning an internationally accredited degree.'
        }
      ]
    }
  },
  {
    id: 'karthik-sundaram',
    quote: 'The digital transformation modules gave me the confidence to lead enterprise cloud migrations across 30+ regional offices.',
    name: 'Karthik Sundaram',
    program: 'MBA IN OPERATIONS MANAGEMENT',
    category: 'operations',
    previousRole: 'IT Operations Lead',
    newRole: 'VP of Digital Transformation',
    company: 'Infosys',
    salaryHike: '+110% Hike',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    location: 'Chennai, India',
    graduationYear: '2023',
    fullStory: {
      challenge: 'Bridging the gap between legacy IT infrastructure and executive boardroom strategy.',
      solution: 'The MBA taught me agile change management, vendor governance, and enterprise cloud ROI.',
      outcome: 'Appointed VP of Digital Transformation at Infosys.',
      skillsAcquired: ['Enterprise Cloud ROI', 'Agile Delivery', 'Vendor Governance'],
      interviewQnA: [
        {
          question: 'What is your advice for prospective students?',
          answer: 'Engage deeply with the faculty office hours—they are real-world industry leaders.'
        }
      ]
    }
  }
];

// ============================================================================
// 2. MODAL COMPONENTS
// ============================================================================

interface StoryDetailModalProps {
  story: SuccessStory | null;
  onClose: () => void;
  onOpenCounselling: () => void;
}

const StoryDetailModal: React.FC<StoryDetailModalProps> = ({ story, onClose, onOpenCounselling }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-100">
        {/* Header */}
       

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-br from-slate-50 to-amber-50/40 rounded-2xl p-6 border border-slate-200/60">
            <div className="flex items-center gap-4">
              <Image 
                src={story.avatar} 
                alt={story.name} 
                className="w-20 h-20 rounded-full object-cover border-4 border-amber-400 shadow-md shrink-0" 
                width={80} 
                height={80} 
              />
              <div>
                <h3 className="font-serif-display text-2xl font-bold text-[#0A1931]">{story.name}</h3>
                <p className="text-xs font-bold text-[#D97706] uppercase tracking-wider mt-0.5">{story.program}</p>
                {story.location && <p className="text-xs text-slate-500 mt-1">{story.location}</p>}
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 bg-white sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-0 border-slate-200">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold text-sm shadow-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>{story.salaryHike}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 font-bold text-sm">
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>Now at {story.company}</span>
              </div>
            </div>
          </div>

          {/* Career Path Timeline */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Career Transformation Journey
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="bg-white/10 rounded-xl p-3.5">
                <p className="text-xs text-slate-400 font-semibold uppercase">Previous Role</p>
                <p className="text-base font-bold text-white mt-1">{story.previousRole}</p>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-0">
                <div className="w-10 h-10 rounded-full bg-[#F6B83B] text-[#0A1931] flex items-center justify-center font-bold">
                  →
                </div>
              </div>
              <div className="bg-amber-500/20 border border-amber-400/40 rounded-xl p-3.5">
                <p className="text-xs text-amber-300 font-semibold uppercase">New Role Secured</p>
                <p className="text-base font-extrabold text-white mt-1">{story.newRole}</p>
                <p className="text-xs font-medium text-amber-200 mt-0.5">{story.company}</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#F59E0B] pl-4 sm:pl-6 py-2">
            <p className="text-lg sm:text-xl text-slate-800 italic font-medium leading-relaxed">"{story.quote}"</p>
          </div>

          {story.fullStory && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">The Challenge</h5>
                  <p className="text-sm text-slate-700 leading-relaxed">{story.fullStory.challenge}</p>
                </div>
                <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200/60">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-2">The Mercury Solution</h5>
                  <p className="text-sm text-slate-700 leading-relaxed">{story.fullStory.solution}</p>
                </div>
                <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200/60">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">The Outcome</h5>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold">{story.fullStory.outcome}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D97706]" />
                  <span>Key Competencies Acquired</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {story.fullStory.skillsAcquired.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#D97706]" />
                  <span>Q&A with {story.name.split(' ')[0]}</span>
                </h4>
                <div className="space-y-4">
                  {story.fullStory.interviewQnA.map((qa, i) => (
                    <div key={i} className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70">
                      <p className="font-bold text-slate-900 text-sm mb-2">Q: {qa.question}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        <span className="font-bold text-[#D97706] mr-1.5">A:</span>
                        {qa.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="bg-gradient-to-r from-[#0A1931] to-[#0D2847] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-lg text-white">Want to achieve a similar career leap?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Speak with our admissions counsellors for personalized guidance.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenCounselling();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F6B83B] hover:bg-[#E59618] text-[#0A1931] font-bold text-sm shrink-0 shadow-md transition-all"
            >
              <span>Get Free Guidance</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CounsellingModal: React.FC<CounsellingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<CounsellingRequest>({
    name: '',
    email: '',
    phone: '',
    preferredProgram: 'MBA IN BUSINESS ANALYTICS',
    currentExperience: '1-3 Years'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100">
        <div className="bg-[#0A1931] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close counselling modal"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>1-on-1 Expert Career Guidance</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white leading-tight">
            Get Free Career Counselling
          </h3>
          <p className="text-sm text-slate-300 mt-1.5 max-w-md">
            Our academic advisors will evaluate your profile and help you pick the right UGC-entitled university program.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif-display text-2xl font-bold text-[#0A1931]">Counselling Request Sent!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <span className="font-bold text-slate-900">{formData.name}</span>. Senior Admissions Counsellor will call you within 15 minutes.
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400">Closing dialog automatically...</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Program Interested In *</label>
                  <select
                    value={formData.preferredProgram}
                    onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none text-sm transition-all bg-white"
                  >
                    <option value="MBA IN BUSINESS ANALYTICS">MBA in Business Analytics</option>
                    <option value="MBA IN HRM">MBA in Human Resource Management</option>
                    <option value="MBA IN MARKETING">MBA in Marketing Management</option>
                    <option value="MBA IN FINANCE">MBA in Financial Management</option>
                    <option value="MBA IN OPERATIONS">MBA in Operations Management</option>
                    <option value="MBA IN GENERAL">MBA in General Management</option>
                    <option value="ONLINE MCA / BCA">Online MCA / BCA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Work Experience</label>
                  <select
                    value={formData.currentExperience}
                    onChange={(e) => setFormData({ ...formData, currentExperience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none text-sm transition-all bg-white"
                  >
                    <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                    <option value="1-3 Years">1 - 3 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5-10 Years">5 - 10 Years</option>
                    <option value="10+ Years">10+ Years (Senior Leadership)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#F6B83B] hover:bg-[#E59618] text-[#0A1931] font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Free Call Back</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Privacy Guaranteed</span>
                </div>
                <span>•</span>
                <span>No Spam</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

interface UniversitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUniversity?: (uniName: string) => void;
}

const UniversitiesModal: React.FC<UniversitiesModalProps> = ({ isOpen, onClose, onSelectUniversity }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto border border-slate-100">
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-[#D97706] text-xs font-bold uppercase mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>UGC & NAAC A++ Accredited</span>
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[#0A1931]">Partner Universities</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Close universities modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-600">
            Mercury Academy partners exclusively with India's top-ranked online and distance universities. All degrees are UGC-entitled and globally recognized.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {UNIVERSITY_PARTNERS.map((uni) => (
              <div
                key={uni.id}
                className="bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/80 rounded-2xl p-5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-[#B45309]">{uni.badge}</span>
                    <span className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                      <span>{uni.rating}</span>
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-[#0A1931] group-hover:text-[#D97706] transition-colors">{uni.name}</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{uni.location}</span>
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-200/60">
                    <p className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{uni.accreditation}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">{uni.programsCount}+ Online Programs</span>
                  <button
                    onClick={() => {
                      if (onSelectUniversity) onSelectUniversity(uni.name);
                      onClose();
                    }}
                    className="text-xs font-bold text-[#0A1931] group-hover:text-[#D97706] flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-4 text-center">
            <p className="text-xs sm:text-sm font-semibold text-slate-700">
              Need help deciding which university fits your career goals?{' '}
              <button
                onClick={onClose}
                className="text-[#D97706] font-bold underline hover:text-[#B45309]"
              >
                Request Free Counselling →
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCounselling: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenCounselling }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#0A1931] text-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-blue-900/60">
        <div className="flex items-center justify-between px-6 py-4 bg-[#061426] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-bold text-white tracking-wide">Sarah Jenkins — VP Strategy, McKinsey</span>
            <span className="hidden sm:inline-block text-xs text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
              Executive MBA Testimonial
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&auto=format&fit=crop&q=85" 
            alt="Sarah Jenkins video testimonial" 
            className="w-full h-full object-cover" 
            width={1200} 
            height={675} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-transparent to-black/30"></div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center group/btn"
          >
            <div className="w-20 h-20 rounded-full bg-white/90 hover:bg-[#F6B83B] text-[#0A1931] flex items-center justify-center shadow-2xl transition-all transform scale-100 hover:scale-110">
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </div>
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-center pointer-events-none">
            <div className="inline-block bg-black/75 backdrop-blur-sm px-6 py-2.5 rounded-2xl border border-white/10 max-w-2xl">
              <p className="text-sm sm:text-base text-amber-200 font-semibold italic">
                “The executive mentoring and case simulations at Mercury Academy gave me the exact board-level framework to lead our APAC consulting strategy.”
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-[#08172D] flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-white text-base">Inspired by Sarah's journey?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Discover how our flexible Online MBA fits your executive career without pausing work.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenCounselling();
              }}
              className="px-6 py-3 rounded-xl bg-[#F6B83B] hover:bg-[#E59618] text-[#0A1931] font-bold text-sm shadow-md transition-all"
            >
              Get Free Counselling
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
            >
              Close Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. PAGE SECTIONS
// ============================================================================

interface HeaderProps {
  onOpenCounselling: () => void;
  onOpenUniversities: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCounselling, onOpenUniversities, onNavigateToSection }) => {
  const [showUniDropdown, setShowUniDropdown] = useState(false);

  return (
    <></>
  );
};

interface HeroSectionProps {
  onReadStories: () => void;
  onExplorePrograms: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onReadStories, onExplorePrograms }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-amber-50/20 to-white pt-12 pb-24 lg:pt-16 lg:pb-32"
    style={{backgroundImage: `url(${BackgroundBanner.src})` , backgroundPosition: "center" , backgroundSize: "cover" , backgroundRepeat: "no-repeat", minHeight: "120vh" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D97706]">ALUMNI SUCCESS</span>
            </div>

            <div className="space-y-1">
              <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A1931] leading-[1.05]">
                Real People.
              </h1>
              <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gold-gradient leading-[1.05]">
                Real Impact.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
              Discover how our graduates have transformed their careers, achieved their dreams, and become leaders in top global organizations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onReadStories}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F6B83B] hover:bg-[#E59618] text-[#0B2545] font-bold text-base shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <span>Read Their Stories</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B2545] font-semibold text-base border border-slate-300/80 shadow-sm transition-all duration-150"
              >
                <span>Explore Programs</span>
              </button>
            </div>

            <div className="pt-6 flex items-center gap-6 text-xs font-semibold text-slate-500 border-t border-slate-200/60 max-w-lg">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>UGC Entitled Degrees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>NAAC A++ Accreditations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>Global Alumni Network</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
             

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBar: React.FC = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'trend':
        return <TrendingUp className="w-6 h-6 text-[#F59E0B]" />;
      case 'alumni':
        return <Users className="w-6 h-6 text-[#F59E0B]" />;
      case 'partners':
        return <Briefcase className="w-6 h-6 text-[#F59E0B]" />;
      case 'placement':
        return <Award className="w-6 h-6 text-[#F59E0B]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#F59E0B]" />;
    }
  };

  return (
    <section className="relative z-20 -mt-12 sm:-mt-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-3xl shadow-stats-bar border border-slate-100 p-6 sm:p-8 lg:py-9 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {STATS_DATA.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                index > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''
              } ${index === 1 ? 'pt-0' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-amber-50/80 border border-amber-200/60 flex items-center justify-center mb-3 shadow-sm transform hover:scale-110 transition-transform duration-200">
                {renderIcon(stat.iconType)}
              </div>
              <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0A1931] tracking-tight">
                {stat.number}
              </h3>
              <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMercurySection: React.FC = () => {
  const pillars = [
    {
      id: 'pillar-1',
      icon: <Award className="w-6 h-6 text-[#F59E0B]" />,
      title: 'UGC & NAAC A++ Accredited',
      desc: 'Partnered with India\'s highest-ranked universities. Every degree is entitled by UGC and recognized worldwide.'
    },
    {
      id: 'pillar-2',
      icon: <Briefcase className="w-6 h-6 text-[#F59E0B]" />,
      title: '100% Career Assistance',
      desc: 'Direct hiring referrals to 500+ top enterprises including Google, Amazon, Microsoft, and Goldman Sachs.'
    },
    {
      id: 'pillar-3',
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />,
      title: '1-on-1 Industry Mentors',
      desc: 'Learn directly from CXOs, Principal Data Scientists, and VPs who guide your capstone projects & interview prep.'
    },
    {
      id: 'pillar-4',
      icon: <BookOpen className="w-6 h-6 text-[#F59E0B]" />,
      title: 'Zero Career Pause',
      desc: 'Flexible live weekend sessions and on-demand modules designed for working professionals.'
    }
  ];

  return (
    <section id="why-mercury" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#0B2545] via-[#0E2C52] to-[#0A1931] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-amber-500/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Mercury Advantage</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Why Working Professionals Choose Mercury Academy
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We bridge the gap between academic prestige and real-world corporate leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {pillars.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Accredited Program</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface StoriesGridProps {
  onSelectStory: (story: SuccessStory) => void;
}

const StoriesGrid: React.FC<StoriesGridProps> = ({ onSelectStory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filteredStories =
    selectedCategory === 'all'
      ? STORIES_DATA
      : STORIES_DATA.filter((story) => story.category === selectedCategory);

  const visibleStories = filteredStories.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="inspiring-journeys" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative Golden Heading Flourish */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
          <div className="flex items-center gap-1.5 text-amber-500">
            <span className="text-sm font-serif-display">◇</span>
            <span className="text-xs font-serif-display">◈</span>
            <span className="text-sm font-serif-display">◇</span>
          </div>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
        </div>

        <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#0A1931] tracking-tight mb-4">
          Inspiring Journeys
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Read how our flexible online learning model empowered these professionals to upskill without pausing their careers.
        </p>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {PROGRAM_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? 'bg-[#0A1931] text-amber-300 shadow-md transform scale-105 border border-amber-400/40'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Alumni Success Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleStories.map((story) => (
          <div
            key={story.id}
            onClick={() => onSelectStory(story)}
            className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 relative overflow-hidden"
          >
            <div>
              <div className="mb-4 text-[#F59E0B] font-serif-display text-5xl leading-none select-none">"</div>
              <p className="text-slate-700 italic font-medium leading-relaxed text-sm sm:text-base mb-6">
                "{story.quote}"
              </p>
              <div className="flex items-center gap-3.5 mb-6">
                <Image 
                  src={story.avatar} 
                  alt={story.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/80 shadow-sm shrink-0" 
                  width={56} 
                  height={56} 
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#D97706] transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-xs font-bold text-[#D97706] uppercase tracking-wider mt-0.5">{story.program}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 mb-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-600 truncate max-w-[120px] sm:max-w-[130px]">{story.previousRole}</span>
                  <span className="text-[#F59E0B] font-bold px-1">→</span>
                  <span className="text-[#0A1931] font-bold truncate max-w-[130px] sm:max-w-[140px] text-right">
                    {story.newRole}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold text-xs sm:text-sm">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <span>{story.company}</span>
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-extrabold text-xs shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{story.salaryHike}</span>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-0.5">
                <span>View Story</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredStories.length && (
        <div className="flex justify-center mt-14">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0A1931] font-bold text-sm border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-150 group"
          >
            <span>Load More Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
};

interface VideoTestimonialProps {
  onPlayVideo: () => void;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ onPlayVideo }) => {
  return (
    <section id="video-testimonial" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061426] via-[#0A1E3F] to-[#0A1931] shadow-2xl border border-blue-900/40 text-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">VIDEO TESTIMONIAL</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              "The flexibility allowed me to study while leading a global team."
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Watch how Sarah leveraged the cutting-edge curriculum and industry connections to secure an executive role at a top-tier consulting firm.
            </p>

            <div className="flex items-center gap-4 pt-2 border-t border-white/10 max-w-md">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" 
                alt="Sarah Jenkins" 
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md shrink-0" 
                width={56} 
                height={56} 
              />
              <div>
                <h4 className="font-bold text-white text-base">Sarah Jenkins</h4>
                <p className="text-sm font-medium text-amber-300">VP Strategy, McKinsey</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              onClick={onPlayVideo}
              className="group relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border-2 border-white/10 shadow-2xl cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
            >
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&auto=format&fit=crop&q=80" 
                alt="Sarah Jenkins Video Testimonial" 
                className="w-full h-full object-cover object-center brightness-90 group-hover:brightness-100 transition-all duration-500" 
                width={1000} 
                height={625} 
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/80 via-transparent to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-amber-400/30 rounded-full animate-ping"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 group-hover:bg-[#F6B83B] text-[#0A1931] flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>Watch Testimonial (2:45)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CTASectionProps {
  onExplorePrograms: () => void;
  onTalkToAdvisor: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onExplorePrograms, onTalkToAdvisor }) => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <div className="relative bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 rounded-3xl p-8 sm:p-14 lg:p-16 border border-amber-200/60 shadow-xl text-center overflow-hidden">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-25 sm:opacity-40 pointer-events-none hidden md:block">
          <svg className="w-24 h-48 text-[#D97706]" viewBox="0 0 100 200" fill="currentColor">
            <path d="M70,10 C45,30 35,70 35,100 C35,130 45,170 70,190 C60,180 50,160 45,140 C55,145 65,140 70,130 C60,130 50,120 45,105 C55,110 65,105 70,95 C60,95 50,85 45,70 C55,75 65,70 70,60 C60,60 50,50 48,35 C58,40 65,35 70,25 Z" />
          </svg>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-25 sm:opacity-40 pointer-events-none hidden md:block transform scale-x-[-1]">
          <svg className="w-24 h-48 text-[#D97706]" viewBox="0 0 100 200" fill="currentColor">
            <path d="M70,10 C45,30 35,70 35,100 C35,130 45,170 70,190 C60,180 50,160 45,140 C55,145 65,140 70,130 C60,130 50,120 45,105 C55,110 65,105 70,95 C60,95 50,85 45,70 C55,75 65,70 70,60 C60,60 50,50 48,35 C58,40 65,35 70,25 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <span>Next Cohort Open</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#0A1931] tracking-tight leading-tight">
            Ready to write your own success story?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Join thousands of successful alumni. Enroll in our industry-aligned programs and take the next big step in your career.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F6B83B] hover:bg-[#E59618] text-[#0A1931] font-bold text-base shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onTalkToAdvisor}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0A1931] font-bold text-base border-2 border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-150"
            >
              <Phone className="w-4 h-4 text-[#D97706]" />
              <span>Talk to an Advisor</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FooterProps {
  onOpenUniversities: () => void;
  onOpenCounselling: () => void;
  onNavigateToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenUniversities, onOpenCounselling, onNavigateToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
   <></>
  );
};

// ============================================================================
// 4. MAIN EXPORT - ROOT COMPONENT
// ============================================================================

export default function SuccessStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [isCounsellingOpen, setIsCounsellingOpen] = useState<boolean>(false);
  const [isUniversitiesOpen, setIsUniversitiesOpen] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      <Header
        onOpenCounselling={() => setIsCounsellingOpen(true)}
        onOpenUniversities={() => setIsUniversitiesOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      <main className="flex-1">
        <HeroSection
          onReadStories={() => handleNavigateToSection('inspiring-journeys')}
          onExplorePrograms={() => setIsUniversitiesOpen(true)}
        />

        <StatsBar />

        <WhyMercurySection />

        <StoriesGrid onSelectStory={(story) => setSelectedStory(story)} />

        <VideoTestimonial onPlayVideo={() => setIsVideoOpen(true)} />

        <CTASection
          onExplorePrograms={() => setIsUniversitiesOpen(true)}
          onTalkToAdvisor={() => setIsCounsellingOpen(true)}
        />
      </main>

      <Footer
        onOpenUniversities={() => setIsUniversitiesOpen(true)}
        onOpenCounselling={() => setIsCounsellingOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Modals */}
      <StoryDetailModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onOpenCounselling={() => setIsCounsellingOpen(true)}
      />

      <CounsellingModal
        isOpen={isCounsellingOpen}
        onClose={() => setIsCounsellingOpen(false)}
      />

      <UniversitiesModal
        isOpen={isUniversitiesOpen}
        onClose={() => setIsUniversitiesOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenCounselling={() => setIsCounsellingOpen(true)}
      />
    </div>
  );
}