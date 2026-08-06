
"use client";

import React, { useState, useEffect } from 'react';
import {
  Plus,
  Minus,
  CheckCircle,
  CheckCircle2,
  Search,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Check,
  GraduationCap,
  Award,
  BookOpen,
  ChevronRight,
  Phone,
  Sparkles,
  X,
  User,
  Mail,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import FAQBanner from "../../public/images/faq-bg-banner.png"
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from "next/navigation"

/* ============================================================================
   1. TYPES & DATA
============================================================================ */
export interface FAQItem {
  id: number;
  badgeNumber: string;
  question: string;
  answer: string;
  category: 'all' | 'accreditation' | 'programs' | 'admissions' | 'career';
  highlights?: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  programOfInterest: string;
  question: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'accreditation', label: 'Accreditation & UGC' },
  { id: 'programs', label: 'Programs & MBA' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'career', label: 'Career & Support' },
] as const;

export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    badgeNumber: '1',
    question: 'Is the online degree program offered by Universities, UGC entitled?',
    answer:
      'Yes, all online degree programs offered by our partner universities are 100% entitled and recognized by the University Grants Commission (UGC) - Distance Education Bureau (DEB). According to UGC notifications, online degrees from entitled institutions hold the exact same academic value and recognition as conventional campus-based degrees for employment, higher education, and government competitive examinations.',
    category: 'accreditation',
    highlights: [
      'Recognized by UGC-DEB under regulation 2020',
      'Equal value to regular campus degrees for public & private sector jobs',
      'Eligible for higher studies in India and overseas universities',
    ],
  },
  {
    id: 2,
    badgeNumber: '2',
    question: 'What is an online MBA?',
    answer:
      'An Online MBA (Master of Business Administration) is a 2-year postgraduate degree program delivered completely through digital learning platforms. It provides professionals and graduates with comprehensive management education, leadership training, and specialized business knowledge without requiring physical attendance on campus. Live interactive faculty sessions, case studies, industry mentorship, and flexible exam schedules make it ideal for working adults.',
    category: 'programs',
    highlights: [
      '2-year UGC-entitled postgraduate management program',
      'Live interactive classes + recorded lectures for 24/7 access',
      'Specializations in Finance, Marketing, Analytics, HR, and Operations',
    ],
  },
  {
    id: 3,
    badgeNumber: '3',
    question:
      'Can online degrees from Manipal University Jaipur be recognized in all regions of Canada?',
    answer:
      'Yes! Manipal University Jaipur (MUJ) is a NAAC A+ accredited university recognized globally. Degrees earned through MUJ are accepted by World Education Services (WES), ICAS, IQAS, and other international credential evaluation bodies in Canada. Graduates successfully use their MUJ online degree for Canadian immigration (Express Entry/PR), work permits, and admission to Canadian universities across Ontario, British Columbia, Alberta, and all other provinces.',
    category: 'accreditation',
    highlights: [
      'WES (World Education Services) approved for Canada & USA',
      'NAAC A+ grade accredited university degree',
      'Valid for Canadian Express Entry PR points and further master\'s studies',
    ],
  },
  {
    id: 4,
    badgeNumber: '4',
    question: 'Which universities is Mercury Academy associated with?',
    answer:
      'Mercury Academy partners exclusively with India\'s top NAAC A+ and Grade-1 UGC-entitled universities to offer authentic online and distance learning degree programs. Our primary academic partners include Manipal University Jaipur, Amity University Online, Jain (Deemed-to-be University), Chandigarh University, and NMIMS Global.',
    category: 'accreditation',
    highlights: [
      'Manipal University Jaipur (NAAC A+)',
      'Amity University Online & Jain University',
      'Direct university enrollment with official student ID & portal access',
    ],
  },
  {
    id: 5,
    badgeNumber: '5',
    question: 'What programs do you offer?',
    answer:
      'We offer a diverse portfolio of undergraduate and postgraduate degree programs designed for career acceleration. These include MBA (Master of Business Administration), MCA (Master of Computer Applications), BBA, BCA, M.Com, B.Com, MA in Journalism & Mass Communication, and specialized executive certificates in Data Science, Artificial Intelligence, and Cloud Computing.',
    category: 'programs',
    highlights: [
      'Management: MBA & BBA with 10+ specializations',
      'Technology: MCA & BCA (AI, Full Stack, Data Science)',
      'Commerce & Arts: M.Com, B.Com, MA English & Economics',
    ],
  },
  {
    id: 6,
    badgeNumber: '6',
    question: 'What are the key features of your distance learning programs?',
    answer:
      'Our distance and online programs combine academic rigor with cutting-edge learning technology. Key features include an AI-powered Learning Management System (LMS), weekly live masterclasses with university professors, downloadable e-books and study guides, virtual laboratory environments, flexible online proctored examinations, and dedicated academic mentors assigned to every student.',
    category: 'programs',
    highlights: [
      '100% online learning with zero mandatory campus visits required',
      'AI-powered Learning Management System (LMS) accessible on mobile & desktop',
      'Remote proctored exams you can take from the comfort of your home',
    ],
  },
  {
    id: 7,
    badgeNumber: '7',
    question: 'How can I enquire about admissions?',
    answer:
      'You can enquire about admissions in three simple ways: (1) Click the "Talk to an Expert >" button at the bottom of this page to request a free instant callback from our academic counselors; (2) Fill out the quick eligibility form on our portal; or (3) Connect directly with our admission helpline via WhatsApp or phone. Our experts will verify your academic documents and guide you through fee scholarships and enrollment.',
    category: 'admissions',
    highlights: [
      'Free 1-on-1 career and specialization counseling',
      'Zero processing fees for eligibility and document verification',
      'Easy EMI and zero-interest student scholarship plans available',
    ],
  },
  {
    id: 8,
    badgeNumber: '8',
    question: 'Can I switch my specialization during the course?',
    answer:
      'Yes, most partner universities allow students to change or confirm their major specialization before the start of the second semester (for postgraduate programs like MBA) or the second academic year (for undergraduate programs). Our academic counselors assist you with the formal specialization transfer request without losing any academic credits.',
    category: 'admissions',
    highlights: [
      'Flexibility to choose or switch specialization by Semester 2',
      'No loss of semester credits or academic standing',
      'Guided counseling to match specializations with current market demand',
    ],
  },
  {
    id: 9,
    badgeNumber: '9',
    question: 'Do online and distance programs offer placement or career support?',
    answer:
      'Absolutely! Enrolled students gain full access to the University Virtual Placement Cell and Career Assistance Services. This includes resume review workshops, AI-driven mock interviews, LinkedIn profile optimization, career mentorship from industry leaders, and direct access to virtual job fairs featuring over 500+ corporate hiring partners including TCS, Infosys, Amazon, KPMG, and Deloitte.',
    category: 'career',
    highlights: [
      'Access to 500+ hiring partners and exclusive job boards',
      '1-on-1 resume review, portfolio building & mock interview preparation',
      'Alumni networking opportunities and leadership webinars',
    ],
  },
  {
    id: 10,
    badgeNumber: '10.',
    question: 'Is it possible to study while working full-time?',
    answer:
      'Yes, over 85% of our online degree learners are full-time working professionals, entrepreneurs, or homemakers. The curriculum is specifically engineered for flexibility: live lectures are scheduled on weekends or evening hours, and all sessions are recorded and archived in the LMS for on-demand viewing anytime. You can study at your own pace without interrupting your job or career progress.',
    category: 'career',
    highlights: [
      'Weekend and evening live faculty sessions designed for professionals',
      '100% recorded lecture archive available 24/7 on any device',
      'Flexible assignment submission timelines and weekend exam slots',
    ],
  },
];

/* ============================================================================
   2. MAIN FAQ PAGE COMPONENT
============================================================================ */
export default function FaqPage() {
    const router = useRouter();
  // UI States
  const [openIds, setOpenIds] = useState<number[]>([1]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<number, 'yes' | 'no'>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Modal form states
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    programOfInterest: 'MBA (Master of Business Administration)',
    question: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Accordion toggles
  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(FAQ_DATA.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const handleFeedback = (id: number, type: 'yes' | 'no') => {
    setHelpfulFeedback((prev) => ({ ...prev, [id]: type }));
  };

  const handleCopyLink = (id: number) => {
    const url = `${window.location.origin}${window.location.pathname}#faq-${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter questions
  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle consultation form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleFormReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      programOfInterest: 'MBA (Master of Business Administration)',
      question: '',
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1E293B] relative selection:bg-[#D4AF37]/30 selection:text-[#0F2557] overflow-x-hidden"
    >
      {/* ======================================================================
          A. BACKGROUND DECORATION & SVG SWOOPS
      ====================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-amber-100/25 blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-80 h-80 rounded-full bg-indigo-100/20 blur-3xl" />
        <div className="absolute top-10 left-10 w-48 h-48 bg-dots-pattern opacity-60" />
        <div className="absolute top-16 right-16 w-64 h-64 bg-dots-pattern opacity-70" />
        <div className="absolute bottom-24 left-20 w-40 h-40 bg-dots-pattern opacity-50" />

        {/* Swooping architectural SVG curved lines */}
        <svg
          className="absolute top-0 right-0 w-[900px] h-[700px] text-blue-900/10 opacity-70 hidden lg:block"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M800 0 C600 150, 400 50, 200 300 C50 480, 100 550, 0 600"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M850 50 C650 200, 450 100, 250 350 C100 530, 150 600, 50 650"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="6 8"
          />
          <path
            d="M900 100 C700 250, 500 150, 300 400 C150 580, 200 650, 100 700"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
        </svg>
      </div>


      {/* ======================================================================
          C. MAIN CONTENT
      ====================================================================== */}
      <main className="relative z-10">
        {/* HERO SECTION - Responsive 16:9 */}
        <section 
          className="w-full"
          style={{
            backgroundImage: `url(${FAQBanner.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            aspectRatio: '16/9',
          }}
        >
          <div className="h-full w-full flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center w-full">
              {/* Left Column: Title and Description */}
              <div className="lg:col-span-7 xl:col-span-6 space-y-3 sm:space-y-4 lg:space-y-6 text-left py-4 sm:py-6 lg:py-8">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center"
                >
                  <span className="bg-[#0A1D3C]/90 text-[#E8C673] border border-[#D4AF37]/80 px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase shadow-sm">
                    FAQ
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-0.5 sm:space-y-1"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-playfair font-bold text-[#0F2557] leading-tight">
                    Frequently
                  </h1>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-playfair font-bold text-[#B8860B] gold-gradient-text leading-tight">
                    Asked Questions
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0.8 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center space-x-2 sm:space-x-3 max-w-xs"
                >
                  <div className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-r from-[#D4AF37] to-transparent flex-grow" />
                  <span className="text-[#C69A43] text-base sm:text-lg select-none hidden md:block" aria-hidden="true">
                    ✦
                  </span>
                  <div className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-l from-[#D4AF37] to-transparent flex-grow hidden md:block" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#334155] leading-relaxed max-w-lg font-normal hidden md:block"
                >
                  Find quick answers to the most commonly asked questions about our online
                  degree programs and services.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="pt-1 sm:pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3"
                >
                  <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-white/80 border border-[#D4AF37]/30 text-[#0F2557] text-[10px] sm:text-xs md:text-sm font-medium shadow-xs">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#C69A43]" />
                    <span>UGC Entitled</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-white/80 border border-[#D4AF37]/30 text-[#0F2557] text-[10px] sm:text-xs md:text-sm font-medium shadow-xs">
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-[#C69A43]" />
                    <span>NAAC A+</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-white/80 border border-[#D4AF37]/30 text-[#0F2557] text-[10px] sm:text-xs md:text-sm font-medium shadow-xs">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-[#C69A43]" />
                    <span>100% Online</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Hidden on mobile, visible on larger screens */}
              <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-center lg:justify-end relative">
                {/* Placeholder for illustration - you can add an image here if needed */}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section id="faq" className="py-6 sm:py-8 md:py-12 lg:py-16 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* FAQ Center Heading Accent Header */}
          <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-10 lg:mb-14">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
              <div className="h-[1px] w-8 sm:w-12 md:w-16 lg:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
              <span className="text-[#C69A43] text-[10px] sm:text-xs font-semibold select-none" aria-hidden="true">
                ✦
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold font-playfair tracking-[0.15em] sm:tracking-[0.2em] text-[#0F2557] uppercase">
                FAQ
              </span>
              <span className="text-[#C69A43] text-[10px] sm:text-xs font-semibold select-none" aria-hidden="true">
                ✦
              </span>
              <div className="h-[1px] w-8 sm:w-12 md:w-16 lg:w-24 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-playfair font-bold text-[#0F2557] tracking-tight px-2">
              Frequently <span className="text-[#B8860B] gold-gradient-text">Asked Questions</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#334155] max-w-xl mx-auto font-normal px-2">
              Everything you need to know about our online programs.
            </p>

            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#DFBA6B] via-[#C29D4E] to-[#DFBA6B] mx-auto rounded-full mt-1 sm:mt-2" />
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mb-4 sm:mb-6 md:mb-8 space-y-3 sm:space-y-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/30 shadow-xs">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-1.5 w-full lg:w-auto">
                {CATEGORIES.map((category) => {
                  const isSelected = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#0F2557] text-[#E8C673] shadow-sm border border-[#D4AF37]'
                          : 'bg-[#F4F2EB] text-[#475569] hover:bg-[#ECE8DC] hover:text-[#0F2557]'
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-center lg:justify-end">
                <div className="relative w-full sm:w-48 md:w-56">
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-7 sm:pl-9 pr-2.5 sm:pr-3 py-1.5 rounded-full text-xs sm:text-sm bg-[#F8F6F0] border border-amber-200/60 focus:outline-none focus:border-[#C69A43] focus:bg-white transition-colors"
                  />
                </div>

                <div className="hidden sm:flex items-center gap-1 shrink-0 text-[10px] sm:text-xs text-[#0F2557] font-medium">
                  <button
                    type="button"
                    onClick={expandAll}
                    className="hover:text-[#B8860B] underline px-1.5 py-1 cursor-pointer transition-colors"
                  >
                    Expand all
                  </button>
                  <span className="text-slate-300">/</span>
                  <button
                    type="button"
                    onClick={collapseAll}
                    className="hover:text-[#B8860B] underline px-1.5 py-1 cursor-pointer transition-colors"
                  >
                    Collapse
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3 sm:space-y-3.5 md:space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-8 sm:py-10 md:py-12 bg-white/70 rounded-2xl border border-amber-200/50 px-4">
                <p className="text-base sm:text-lg text-slate-600 font-medium">No matching questions found.</p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Try clearing your search query or switching categories.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 rounded-full bg-[#0F2557] text-[#E8C673] text-xs sm:text-sm font-semibold hover:bg-[#153472] transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((item) => {
                const isOpen = openIds.includes(item.id);

                return (
                  <motion.div
                    key={item.id}
                    id={`faq-${item.id}`}
                    initial={false}
                    className={`group rounded-xl sm:rounded-2xl transition-all duration-300 bg-white border ${
                      isOpen
                        ? 'border-[#D4AF37] shadow-[0_8px_30px_rgba(15,37,87,0.09)]'
                        : 'border-slate-200/80 hover:border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(15,37,87,0.04)] hover:shadow-[0_6px_24px_rgba(15,37,87,0.07)]'
                    }`}
                  >
                    {/* Question Row Header */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left px-3 sm:px-5 md:px-7 py-3 sm:py-4 md:py-5 lg:py-6 flex items-center justify-between gap-2 sm:gap-4 md:gap-6 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-grow min-w-0">
                        {/* Number Badge */}
                        <div
                          className={`w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-[#0F2557] border-2 border-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 ${
                            isOpen ? 'scale-105 bg-[#0A1A3B]' : 'group-hover:scale-105'
                          }`}
                        >
                          <span className="text-[#E8C673] font-cormorant text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight">
                            {item.badgeNumber}
                          </span>
                        </div>

                        {/* Question Title */}
                        <span
                          className={`font-cormorant font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-snug transition-colors break-words ${
                            isOpen ? 'text-[#0F2557]' : 'text-[#0F2557] group-hover:text-[#1E3E80]'
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      {/* Right Plus / Minus Icon */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#0F2557]/10 text-[#0F2557]'
                            : 'text-[#C69A43] group-hover:bg-[#C69A43]/10'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#C69A43]" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#C69A43]" strokeWidth={2.5} />
                        )}
                      </div>
                    </button>

                    {/* Answer Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 sm:px-5 md:px-7 pb-4 sm:pb-5 md:pb-6 pt-1 border-t border-amber-100/80 space-y-3 sm:space-y-4">
                            <p className="text-[#334155] text-sm sm:text-base md:text-lg leading-relaxed font-normal pt-2">
                              {item.answer}
                            </p>

                            {/* Highlights list */}
                            {item.highlights && item.highlights.length > 0 && (
                              <div className="bg-[#FAF8F2] border border-amber-200/60 rounded-xl p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0F2557] block mb-0.5 sm:mb-1">
                                  Key Highlights
                                </span>
                                {item.highlights.map((highlight, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm md:text-base text-[#1E293B]"
                                  >
                                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C69A43] shrink-0 mt-0.5 sm:mt-1 fill-[#C69A43]/15" />
                                    <span>{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Feedback & Share Link */}
                            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-slate-100 text-[10px] sm:text-xs md:text-sm text-slate-500">
                              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                <span className="text-[10px] sm:text-xs">Was this answer helpful?</span>
                                <div className="flex items-center gap-1">
                                  <button
                                    type="button"
                                    onClick={() => handleFeedback(item.id, 'yes')}
                                    className={`inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border transition-all cursor-pointer text-[10px] sm:text-xs ${
                                      helpfulFeedback[item.id] === 'yes'
                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300 font-medium'
                                        : 'border-slate-200 hover:border-[#C69A43] hover:text-[#0F2557]'
                                    }`}
                                  >
                                    <ThumbsUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    <span className="hidden xs:inline">Yes</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleFeedback(item.id, 'no')}
                                    className={`inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full border transition-all cursor-pointer text-[10px] sm:text-xs ${
                                      helpfulFeedback[item.id] === 'no'
                                        ? 'bg-rose-50 text-rose-700 border-rose-300 font-medium'
                                        : 'border-slate-200 hover:border-rose-400 hover:text-slate-700'
                                    }`}
                                  >
                                    <ThumbsDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    <span className="hidden xs:inline">No</span>
                                  </button>
                                </div>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleCopyLink(item.id)}
                                className="inline-flex items-center gap-0.5 sm:gap-1 text-slate-500 hover:text-[#0F2557] font-medium transition-colors cursor-pointer text-[10px] sm:text-xs"
                                title="Copy link to this question"
                              >
                                {copiedId === item.id ? (
                                  <>
                                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                                    <span className="text-emerald-600 hidden xs:inline">Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Share2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    <span className="hidden xs:inline">Share link</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>
        </section>

        {/* STILL HAVE QUESTIONS CTA */}
        <section className="pt-4 pb-8 sm:pb-12 md:pb-16 lg:pb-24 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#FFFBF4] via-[#FAF6ED] to-[#FFFBF4] border border-[#E3CA8E]/80 shadow-[0_8px_30px_rgba(15,37,87,0.06)] p-4 sm:p-6 md:p-8 lg:p-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full md:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#0F2557] border-2 border-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 text-[#E8C673]" />
                </div>
                <div className="space-y-0.5 sm:space-y-1 max-w-md">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-[#0F2557] tracking-tight">
                    Still have questions?
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#4B5563] leading-relaxed font-normal">
                    Our education experts are here to help you choose the right program
                    for your future.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block h-14 w-[1px] bg-[#D4AF37]/35 shrink-0" />

              <div className="w-full sm:w-auto flex justify-center shrink-0">
                <button
                  type="button"
                  onClick={() => router.push("/contact")}
                  className="w-full sm:w-auto gold-btn-gradient text-[#0F2557] font-bold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-98 transition-all duration-200 inline-flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer border border-[#8C6B28]/20"
                >
                  <span>Talk to an Expert</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ======================================================================
          E. CONSULTATION MODAL
      ====================================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#0F2557]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-amber-200/80 overflow-hidden z-10 mx-2 sm:mx-4"
            >
              <div className="bg-[#0F2557] px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-white relative">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-4 md:right-5 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#D4AF37] text-[#0F2557] flex items-center justify-center shrink-0 font-bold">
                    <GraduationCap className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-playfair font-bold text-white">
                      Talk to an Education Expert
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-amber-200/90">
                      Get personalized guidance &amp; scholarship eligibility
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                {isSubmitted ? (
                  <div className="text-center py-4 sm:py-5 md:py-6 space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-playfair font-bold text-[#0F2557]">
                      Inquiry Received!
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-sm mx-auto px-2">
                      Thank you, <strong className="text-[#0F2557]">{formData.fullName}</strong>! One of our
                      senior academic counselors will connect with you shortly.
                    </p>
                    <div className="bg-[#FAF8F2] border border-amber-200/60 rounded-xl p-3 sm:p-4 text-left text-[10px] sm:text-xs md:text-sm text-slate-700 space-y-0.5 sm:space-y-1">
                      <p>
                        <strong>Program:</strong> {formData.programOfInterest}
                      </p>
                      <p>
                        <strong>Status:</strong> Callback scheduled within 15 mins
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleFormReset}
                      className="mt-1 sm:mt-2 w-full gold-btn-gradient text-[#0F2557] font-bold py-2.5 sm:py-3 rounded-xl shadow-md hover:scale-[1.01] transition-transform cursor-pointer text-sm sm:text-base"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#0F2557] mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C69A43] text-xs sm:text-sm text-[#0F2557]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#0F2557] mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            placeholder="name@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C69A43] text-xs sm:text-sm text-[#0F2557]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#0F2557] mb-1">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 / +1 ..."
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C69A43] text-xs sm:text-sm text-[#0F2557]"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#0F2557] mb-1">
                        Program of Interest *
                      </label>
                      <div className="relative">
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={formData.programOfInterest}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              programOfInterest: e.target.value,
                            })
                          }
                          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C69A43] text-xs sm:text-sm text-[#0F2557] bg-white cursor-pointer"
                        >
                          <option value="MBA (Master of Business Administration)">
                            MBA (Master of Business Administration)
                          </option>
                          <option value="MCA (Master of Computer Applications)">
                            MCA (Master of Computer Applications)
                          </option>
                          <option value="BBA (Bachelor of Business Administration)">
                            BBA (Bachelor of Business Administration)
                          </option>
                          <option value="BCA (Bachelor of Computer Applications)">
                            BCA (Bachelor of Computer Applications)
                          </option>
                          <option value="Executive Management & Leadership">
                            Executive Management &amp; Leadership
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#0F2557] mb-1">
                        Specific Question or Requirement (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-3" />
                        <textarea
                          rows={3}
                          placeholder="e.g. I want to check my eligibility for WES Canada evaluation..."
                          value={formData.question}
                          onChange={(e) =>
                            setFormData({ ...formData, question: e.target.value })
                          }
                          className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#C69A43] text-xs sm:text-sm text-[#0F2557]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gold-btn-gradient text-[#0F2557] font-bold py-2.5 sm:py-3.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-1 sm:mt-2 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <span>Sending your inquiry...</span>
                      ) : (
                        <span>Request Instant Consultation &gt;</span>
                      )}
                    </button>

                    <p className="text-[10px] sm:text-[11px] text-slate-400 text-center mt-0.5 sm:mt-1">
                      Your details are 100% private. No spam calls guaranteed.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}