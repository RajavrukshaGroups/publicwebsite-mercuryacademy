'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Award, 
  ArrowUpRight,
  Clock,
  Coins,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

// Types
export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  title: string;
  program: string;
  quote: string;
  avatarUrl: string;
  profileImageUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

// Data
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

// Sub-components
const HeaderNav: React.FC<{
  deviceMode: DeviceMode;
  onSelectDeviceMode: (mode: DeviceMode) => void;
  onOpenModal: () => void;
}> = ({ deviceMode, onSelectDeviceMode, onOpenModal }) => {
  return (
    <nav className="bg-[#0A1833] text-white border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-serif-display font-bold text-lg">
          <GraduationCap className="w-6 h-6 text-amber-400" />
          <span className="text-white">Mercury Academy</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Device Mode Selector */}
          <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
            {(['desktop', 'tablet', 'mobile'] as DeviceMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => onSelectDeviceMode(mode)}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  deviceMode === mode
                    ? 'bg-amber-500 text-[#0A1833]'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenModal}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-[#0A1833] font-semibold rounded-lg text-xs transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const WhyChooseSection: React.FC<{
  features: FeatureItem[];
  onOpenModal: () => void;
}> = ({ features, onOpenModal }) => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      GraduationCap: <GraduationCap className="w-5 h-5 text-amber-400" />,
      Clock: <Clock className="w-5 h-5 text-amber-400" />,
      Award: <Award className="w-5 h-5 text-amber-400" />,
      Coins: <Coins className="w-5 h-5 text-amber-400" />,
      ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      TrendingUp: <TrendingUp className="w-5 h-5 text-amber-400" />,
    };
    return icons[iconName] || null;
  };

  return (
    <div className="bg-[#0A1833] rounded-2xl p-6 sm:p-8 h-full flex flex-col">
      <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-white mb-2">
        Why Choose Mercury Academy?
      </h2>
      <p className="text-slate-300 text-sm mb-6">
        Your gateway to UGC-approved professional education with industry-aligned programs and 100% placement support.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="mt-0.5">{getIcon(feature.icon)}</div>
            <div>
              <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
              <p className="text-slate-300 text-xs">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onOpenModal}
        className="mt-6 w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-[#0A1833] font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
      >
        <span>Start Your Journey</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const SuccessStoriesSection: React.FC<{
  stories: SuccessStory[];
  stats: StatItem[];
}> = ({ stories, stats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="bg-[#FAF7EE] rounded-2xl p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0A1833]">
          Success Stories
        </h2>
        <div className="flex gap-1">
          <button
            onClick={prevStory}
            className="p-1.5 rounded-lg bg-[#0A1833]/5 hover:bg-[#0A1833]/10 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextStory}
            className="p-1.5 rounded-lg bg-[#0A1833]/5 hover:bg-[#0A1833]/10 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-[#0A1833] font-bold text-lg">{stat.value}</div>
            <div className="text-[#0A1833]/60 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Current Story */}
      <div className="flex-1 bg-white rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-4 mb-3">
          <img
            src={currentStory.avatarUrl}
            alt={currentStory.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-[#0A1833] text-sm">{currentStory.name}</h4>
            <p className="text-[#0A1833]/60 text-xs">{currentStory.title}</p>
            <p className="text-amber-600 text-xs font-medium">{currentStory.program}</p>
          </div>
        </div>
        <p className="text-[#0A1833]/80 text-sm italic leading-relaxed">
          &ldquo;{currentStory.quote}&rdquo;
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-amber-500'
                : 'w-1.5 bg-[#0A1833]/20 hover:bg-[#0A1833]/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const steps = [
    { number: 1, title: 'Choose Program', description: 'Select from 50+ UGC-approved programs' },
    { number: 2, title: 'Apply Online', description: 'Fill your application in 5 minutes' },
    { number: 3, title: 'Get Approved', description: 'Receive admission confirmation' },
    { number: 4, title: 'Start Learning', description: 'Begin your academic journey' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 mt-6">
      <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0A1833] text-center mb-6">
        How It Works
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-500/10 text-amber-600 font-bold flex items-center justify-center text-sm mb-2">
              {step.number}
            </div>
            <h3 className="font-semibold text-[#0A1833] text-sm">{step.title}</h3>
            <p className="text-[#0A1833]/60 text-xs mt-1">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={onOpenModal}
          className="px-6 py-2.5 bg-[#0A1833] hover:bg-[#1a2a4a] text-white font-semibold rounded-xl text-sm transition-colors"
        >
          Start Your Application
        </button>
      </div>
    </div>
  );
};

const CallToActionBanner: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 sm:p-8 mt-6 text-[#0A1833]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif-display text-xl font-bold">
            Ready to Transform Your Career?
          </h3>
          <p className="text-[#0A1833]/80 text-sm">
            Join 15,000+ professionals who have accelerated their careers with Mercury Academy.
          </p>
        </div>
        <button
          onClick={onOpenModal}
          className="px-6 py-3 bg-[#0A1833] hover:bg-[#1a2a4a] text-white font-bold rounded-xl text-sm transition-colors whitespace-nowrap"
        >
          Apply Now — Free Counseling
        </button>
      </div>
    </div>
  );
};

const InquiryModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <GraduationCap className="w-12 h-12 text-amber-500 mx-auto mb-2" />
          <h3 className="font-serif-display text-xl font-bold text-[#0A1833]">
            Request Information
          </h3>
          <p className="text-[#0A1833]/60 text-sm">
            Fill in your details and our admissions team will reach out to you.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition"
          />
          <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition">
            <option value="">Select Program</option>
            <option>Executive MBA - Operations</option>
            <option>MCA - Cloud Computing & AI</option>
            <option>M.Com - Financial Management</option>
            <option>BBA - Business Analytics</option>
            <option>BCA - Full Stack Development</option>
          </select>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-[#0A1833] font-bold rounded-xl transition-colors"
          >
            Submit Inquiry
          </button>
        </form>

        <p className="text-xs text-slate-400 text-center mt-4">
          By submitting, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </div>
  );
};

// Main Component
export const MercuryShowcase: React.FC = () => {
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
      <HeaderNav
        deviceMode={deviceMode}
        onSelectDeviceMode={setDeviceMode}
        onOpenModal={() => setIsModalOpen(true)}
      />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col items-center">
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

        <div className={`transition-all duration-500 mx-auto ${getContainerWidthClass()}`}>
          <div className="bg-[#FAF7EE] rounded-[32px] sm:rounded-[36px] p-3 sm:p-5 lg:p-6 shadow-xl border border-[#E8E1D2]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
              <div className="lg:col-span-6 flex">
                <div className="w-full">
                  <WhyChooseSection
                    features={MERCURY_FEATURES}
                    onOpenModal={() => setIsModalOpen(true)}
                  />
                </div>
              </div>

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

          <HowItWorksSection onOpenModal={() => setIsModalOpen(true)} />
          <CallToActionBanner onOpenModal={() => setIsModalOpen(true)} />
        </div>

        {deviceMode !== 'desktop' && (
          <div className="mt-4 text-xs text-slate-500 bg-white/80 px-4 py-2 rounded-full border border-slate-200/80">
            Previewing in <strong>{deviceMode.toUpperCase()}</strong> responsive frame.
          </div>
        )}
      </main>

      <footer className="w-full bg-[#0A1833] text-white border-t border-white/10 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 mt-12">
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
      </footer>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MercuryShowcase;