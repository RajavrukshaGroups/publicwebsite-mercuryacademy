// import { HeroStats } from "./hero-stats";
// import HeroFeatureCard from "./hero-feature-card";
// import PartnerUniversities from "./PartnerUniversities"
// import CareerChallengesSection from "./CareerChallengesSection"
// import DegreeTransformationSection from "./DegreeTransformationSection"

// export function Hero() {
//   return (
//     <div className="bg-navy-pattern">
//       {/* Hero Stats */}
//       <HeroStats />

//       {/* Hero Feature Card */}
//       <HeroFeatureCard />

//       <DegreeTransformationSection />
//       <CareerChallengesSection />
//       <PartnerUniversities />
//     </div>
//   );
// }


'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Award, 
  ArrowUpRight 
} from 'lucide-react';
import WhyChooseSection, { FeatureItem } from './WhyChooseSection';
import SuccessStoriesSection, { StatItem, SuccessStory } from './SuccessStoriesSection';
import HowItWorksSection from './HowItWorksSection';
import CallToActionBanner from './CallToActionBanner';

import InquiryModal from './InquiryModal';

// Import your existing Hero components
import { HeroStats } from "./hero-stats";
import HeroFeatureCard from "./hero-feature-card";
import PartnerUniversities from "./PartnerUniversities"
import CareerChallengesSection from "./CareerChallengesSection"
import DegreeTransformationSection from "./DegreeTransformationSection"
import { DeviceMode } from './MercuryShowcase';

// Data for Mercury Academy sections
const MERCURY_FEATURES: FeatureItem[] = [
  {
    id: 'ugc-approved',
    title: 'UGC-Approved Degrees',
    description: 'Recognized by UGC & Govt. of India',
    icon: 'GraduationCap',
  },
  {
    id: 'flexible-learning',
    title: 'Flexible Learning',
    description: 'Study at your pace, anytime, anywhere',
    icon: 'Clock',
  },
  {
    id: 'industry-relevant',
    title: 'Industry-Relevant Curriculum',
    description: 'Designed with industry expert insights',
    icon: 'Award',
  },
  {
    id: 'affordable-fees',
    title: 'Affordable Fees',
    description: 'Quality education that fits your budget',
    icon: 'Coins',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Support',
    description: 'From admission to convocation',
    icon: 'ShieldCheck',
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Expert advice for a better future',
    icon: 'TrendingUp',
  },
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'rohan-mehta',
    name: 'Rohan Mehta',
    title: 'MBA Graduate',
    program: 'Executive MBA in Operations & Strategy',
    quote:
      'Mercury Academy helped me complete my MBA while working full-time. The support and flexibility were exceptional!',
    avatarUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80',
    profileImageUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ananya-sharma',
    name: 'Ananya Sharma',
    title: 'MCA Graduate',
    program: 'Master of Computer Applications - Cloud & AI',
    quote:
      'Transitioning into tech seemed intimidating until I enrolled. The UGC-approved degree and faculty mentorship landed me a Senior Analyst role!',
    avatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    profileImageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vikram-rao',
    name: 'Vikramaditya Rao',
    title: 'M.Com Graduate',
    program: 'Master of Commerce in Financial Management',
    quote:
      'The career guidance and affordable fee structure made all the difference. I was promoted to Finance Lead within 6 months of graduation.',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    profileImageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'priyanka-nair',
    name: 'Priyanka Nair',
    title: 'BBA Graduate',
    program: 'Bachelor of Business Administration',
    quote:
      'Being able to study from anywhere in India without compromising on institutional accreditation gave my career a massive boost.',
    avatarUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
    profileImageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
];

const MERCURY_STATS: StatItem[] = [
  {
    value: '15K+',
    label: 'Happy Students',
  },
  {
    value: '20+',
    label: 'Partner Universities',
  },
  {
    value: '50+',
    label: 'Programs Offered',
  },
  {
    value: '98%',
    label: 'Success Rate',
  },
];

export function Hero() {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getContainerWidthClass = () => {
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[400px] shadow-2xl rounded-[38px] border-[10px] border-slate-900 overflow-hidden my-6 bg-white';
      case 'tablet':
        return 'max-w-[820px] shadow-2xl rounded-[32px] border-[10px] border-slate-900 overflow-hidden my-6 bg-white';
      case 'desktop':
      default:
        return 'w-full max-w-7xl';
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2E9] flex flex-col justify-between selection:bg-amber-500 selection:text-white">
      {/* Institutional Top Navigation */}
      <div className="bg-navy-pattern">
        <HeroStats />
        <HeroFeatureCard />
        <DegreeTransformationSection />
        <CareerChallengesSection />
        <PartnerUniversities />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col items-center">
        {/* Optional Page Banner for Context */}
        <div className="w-full max-w-7xl mb-6 sm:mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Admissions Open for 2026 Batch</span>
            </div>
            <h1 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1833]">
              Mercury Academy — Excellence in Professional Education
            </h1>
          </div>

          {/* <div className="flex items-center justify-center sm:justify-end gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5 font-medium bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              UGC & AICTE Recognized
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:text-amber-800 underline cursor-pointer"
            >
              <span>Download Brochure</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div> */}
        </div>

        {/* Device Wrapper for Responsive Testing */}
        <div className={`transition-all duration-500 mx-auto ${getContainerWidthClass()}`}>
          {/* The Exact Card Showcase Layout requested by user */}
          <div className="bg-[#FAF7EE] rounded-[32px] sm:rounded-[36px] p-3 sm:p-5 lg:p-6 shadow-xl border border-[#E8E1D2]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
              {/* Left Column (Why Choose Mercury Academy? - Deep Navy Card) */}
              <div className="lg:col-span-6 flex">
                <div className="w-full">
                  <WhyChooseSection
                    features={MERCURY_FEATURES}
                    onOpenModal={() => setIsModalOpen(true)}
                  />
                </div>
              </div>

              {/* Right Column (Success Stories - Warm Cream Card with Stats) */}
              <div className="lg:col-span-6 flex">
                <div className="w-full">
                  <SuccessStoriesSection
                    stories={SUCCESS_STORIES}
                    stats={MERCURY_STATS}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <HowItWorksSection onOpenModal={() => setIsModalOpen(true)} />

          {/* Call To Action Banner Section */}
          <CallToActionBanner onOpenModal={() => setIsModalOpen(true)} />
        </div>

        {/* Responsive Testing Helpful Note */}
        {deviceMode !== 'desktop' && (
          <div className="mt-4 text-xs text-slate-500 bg-white/80 px-4 py-2 rounded-full border border-slate-200/80">
            Previewing in <strong>{deviceMode.toUpperCase()}</strong> responsive frame. Click &ldquo;Desktop&rdquo; in the top bar to restore fluid width.
          </div>
        )}
      </main>

      {/* Existing Hero Component - Integrate your existing sections here */}
      

      {/* Institutional Footer */}
      {/* <footer className="w-full bg-[#0A1833] text-white border-t border-white/10 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-serif-display font-bold text-xl text-white mb-3">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              <span>Mercury Academy</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Empowering working professionals and students across India with UGC-approved degrees, industry-relevant curriculum, and flexible learning schedules.
            </p>
            <div className="flex items-center gap-3 text-xs text-amber-400">
              <Award className="w-4 h-4" />
              <span>NAAC &ldquo;A+&rdquo; Accredited Institution</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
              Approved Programs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>Executive MBA - Operations</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>MCA - Cloud Computing & AI</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>M.Com - Financial Management</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>BBA - Business Analytics</li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)}>BCA - Full Stack Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
              Accreditation & Approvals
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>University Grants Commission (UGC)</li>
              <li>Govt. of India Recognized</li>
              <li>AICTE Approved Programs</li>
              <li>Association of Indian Universities (AIU)</li>
              <li>WES Approved for Global Higher Ed</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-3">
              Admissions Support
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 (080) 4567 8900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>admissions@mercuryacademy.edu.in</span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-2 w-full px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 font-semibold text-xs transition-colors cursor-pointer"
              >
                Schedule Counseling Call
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Mercury Academy of Higher Education. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setIsModalOpen(true)}>Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setIsModalOpen(true)}>Terms of Admission</span>
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setIsModalOpen(true)}>UGC Accreditation Notice</span>
          </div>
        </div>
      </footer> */}

      {/* Interactive Admission Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}