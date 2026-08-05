"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  UserCheck,
  ShieldCheck,
  ArrowLeft,
  Calendar,
  Monitor,
  MapPin,
  Award,
  CreditCard,
  Download,
  User,
  FileText,
  Star,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  BookOpen,
  Layers,
  Play,
  Mail,
  // Facebook,
  // Linkedin,
  // Twitter,
  // Instagram,
  // Youtube,
  IndianRupee,
} from 'lucide-react';


type ModalType =
  | null
  | 'counselling'
  | 'signin'
  | 'apply'
  | 'brochure'
  | 'eligibility'
  | 'admission'
  | 'video';

type CourseClientViewProps = {
  university: any;
  course: any;
  curriculum: any[];
  faqs: any[];
  summary: any;
  courseName: string;
  fullCourseName: string;
  bannerUrl?: string | null;
  logoUrl?: string | null;
  brochureUrl?: string | null;
  location?: string | null;
  feeItems: { label: string; value: number | null | undefined }[];
};

function formatMoney(value?: number | null, currency = "INR") {
  if (value === undefined || value === null) {
    return "Contact for details";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CourseClientView(props: CourseClientViewProps) {
  const {
    university,
    course,
    curriculum,
    faqs,
    summary,
    courseName,
    fullCourseName,
    bannerUrl,
    logoUrl,
    brochureUrl,
    location,
    feeItems
  } = props;

  // Modal State
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialization: 'Business Analytics',
    workExperience: 'Fresh Graduate',
  });

  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [universitiesOpen, setUniversitiesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [openSemesterId, setOpenSemesterId] = useState<number | null>(2);
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1']);

  // Handlers
  const handleCardAction = (actionId: string) => {
    switch (actionId) {
      case 'eligibility':
        setActiveModal('eligibility');
        break;
      case 'admission':
        setActiveModal('admission');
        break;
      case 'benefits':
        setActiveModal('counselling');
        break;
      default:
        setActiveModal('counselling');
    }
  };

  const toggleSemester = (id: number) => {
    setOpenSemesterId(openSemesterId === id ? null : id);
  };

  const toggleFaq = (id: string) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter((item) => item !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  const handleSubmitModalForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveModal(null);
    }, 2500);
  };

  // Helper for rendering fee card icon
  const renderFeeIcon = (iconType: string) => {
    switch (iconType) {
      case 'application':
        return <Award className="w-6 h-6 text-amber-600" />;
      case 'semester':
        return <Calendar className="w-6 h-6 text-amber-600" />;
      case 'annual':
        return <Clock className="w-6 h-6 text-amber-600" />;
      case 'total':
        return <DollarSign className="w-6 h-6 text-amber-600" />;
      default:
        return <CreditCard className="w-6 h-6 text-amber-600" />;
    }
  };

  // Calculate visibility flags
  const hasValidFees = feeItems && feeItems.some(f => f.value !== null && f.value !== undefined);
  const hasCurriculum = curriculum && curriculum.length > 0;
  const hasSummary = summary && (summary.totalSemesters || summary.totalSubjects || summary.totalCredits);
  const hasFaqs = faqs && faqs.length > 0;

  // Helper for rendering info card icon
  const renderInfoIcon = (type: string) => {
    switch (type) {
      case 'eligibility':
        return <User className="w-6 h-6 text-amber-600" />;
      case 'admission':
        return <FileText className="w-6 h-6 text-amber-600" />;
      case 'benefits':
        return <Star className="w-6 h-6 text-amber-600" />;
      default:
        return <User className="w-6 h-6 text-amber-600" />;
    }
  };

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [gateFormState, setGateFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    universityCourse: '',
    country: '',
    state: '',
    city: '',
    message: ''
  });
  const [gateSubmitting, setGateSubmitting] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (course?._id && localStorage.getItem(`lead_unlocked_${course._id}`)) {
      setIsUnlocked(true);
    }
  }, [course?._id]);

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const firstName = gateFormState.firstName.trim();
    if (firstName.length < 2) {
      alert('First name must be at least 2 characters.');
      return;
    }
    const phone = gateFormState.phone.trim();
    if (phone.startsWith('0')) {
      alert('Phone number cannot start with zero.');
      return;
    }
    if (phone.length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }
    setGateSubmitting(true);
    try {
      const payload = {
        ...gateFormState,
        universityCourse: course?._id
      };

      // Filter out empty strings and text inputs that are not objectIds
      const payloadData = Object.fromEntries(
        Object.entries(payload).filter(([key, val]) => 
          val !== '' && !['country', 'state', 'city'].includes(key)
        )
      );
      
      //const res = await fetch('http://localhost:5000/api/v1/leads', {
      const res = await fetch('https://mercuryapi.bouncyboxstudio.in/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadData)
      });
      
      if (res.ok) {
        localStorage.setItem(`lead_unlocked_${course._id}`, 'true');
        setIsUnlocked(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to submit form.');
    } finally {
      setGateSubmitting(false);
    }
  };

  // Divide FAQ items into two columns
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  if (isClient && !isUnlocked) {
    return (
      <div className="min-h-screen bg-[#0a1835] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Unlock Course Details</h2>
            <p className="text-gray-500 text-sm">Please fill out this quick form to view the complete curriculum, fees, and more for {courseName}.</p>
          </div>
          <form onSubmit={handleGateSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">First Name *</label>
                <input required type="text" value={gateFormState.firstName} onChange={(e) => setGateFormState({...gateFormState, firstName: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Last Name *</label>
                <input required type="text" value={gateFormState.lastName} onChange={(e) => setGateFormState({...gateFormState, lastName: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-amber-400" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email *</label>
              <input required type="email" value={gateFormState.email} onChange={(e) => setGateFormState({...gateFormState, email: e.target.value})} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-amber-400" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone *</label>
              <input required type="tel" pattern="^[1-9][0-9]{9}$" maxLength={10} value={gateFormState.phone} onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '');
                if (val.length <= 10) setGateFormState({...gateFormState, phone: val});
              }} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-amber-400" placeholder="9876543210" />
            </div>
            <button disabled={gateSubmitting} type="submit" className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold rounded-lg transition-colors mt-4">
              {gateSubmitting ? 'Unlocking...' : 'View Course Details'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-amber-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. TOP STICKY NAVIGATION BAR                                             */}
      {/* ========================================================================= */}
     

      {/* ========================================================================= */}
      {/* 2. HERO BANNER WITH ARCHITECTURE PHOTO AND GOLD DIAGONAL SEPARATOR      */}
      {/* ========================================================================= */}
      <section id="hero" className="relative bg-[#0d1c3a] text-white overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 flex">
          {/* Left Dark Navy Gradient Backdrop */}
          <div className="w-full lg:w-[58%] h-full bg-gradient-to-r from-[#0a1835] via-[#0d1c3a] to-[#112347] z-10"></div>

          {/* Right University Architecture Photo with Diagonal clip */}
          <div className="hidden lg:block lg:w-[46%] h-full relative z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${bannerUrl || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80'}')`,
              }}
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-950/20 to-[#0d1c3a]" />
            {/* Diagonal Golden Stripe separator */}
            <div
              className="absolute top-0 left-0 bottom-0 w-3 bg-amber-400 z-20 shadow-xl"
              style={{
                transform: 'skewX(-16deg)',
                transformOrigin: 'top left',
              }}
            />
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            {/* Left Column Content */}
            <div className="max-w-2xl">
              {/* Breadcrumb Back Link */}
              <Link
                href={`/universities/${university.slug}`}
                className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 text-sm font-semibold transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to {university.name}</span>
              </Link>

              {/* Program Type & UG Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-3.5 py-1 rounded-full border border-amber-400/80 text-amber-400 font-bold text-xs uppercase tracking-wider bg-amber-400/10">
                  {course.courseCatalog.level || "Degree"}
                </span>
                {/* <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider">
                  {course.courseCatalog.level}
                </span> */}
              </div>

              {/* Main Program Title */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
                <span className="block text-white">
                  {course.courseCatalog?.shortName || course.courseCatalog?.name}
                  {course.specialization?.name ? ' in' : ''}
                </span>
                {course.specialization?.name && (
                  <span className="block text-[#fdb813] drop-shadow-sm">
                    {course.specialization.name}
                  </span>
                )}
              </h1>

              {/* Offered by line */}
              <p className="text-gray-200 text-base sm:text-lg mb-10 sm:mb-14 font-medium">
                Offered by{' '}
                <span className="text-[#fdb813] font-bold">
                  {university.name}
                </span>
              </p>

              {/* Highlights Horizontal Pills */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-sm sm:text-base font-semibold border-t border-white/15 pt-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-[#fdb813]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-white">{course.duration} {course.durationUnit}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-[#fdb813]">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="text-white">{course.studyMode || "Online"}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center text-[#fdb813]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-white">{location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: UGC Entitled Floating Badge */}
            <div className="flex flex-col items-start lg:items-end justify-between self-stretch">
              <div className="bg-white/95 text-gray-900 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3.5 border border-amber-100 backdrop-blur-sm self-start lg:self-end">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <Award className="w-6 h-6 text-amber-600 fill-amber-500/20" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm tracking-tight leading-tight">
                    UGC Approved
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Entitled Recognition
                  </div>
                </div>
              </div>

              {/* Mobile CTA buttons */}
              <div className="flex lg:hidden flex-wrap items-center gap-3 mt-8 w-full">
                <button
                  onClick={() => setActiveModal('apply')}
                  className="flex-1 px-5 py-3 rounded-xl bg-amber-500 text-white font-bold text-sm text-center shadow-md"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setActiveModal('brochure')}
                  className="flex-1 px-5 py-3 rounded-xl border border-white/40 text-white font-semibold text-sm text-center bg-white/10"
                >
                  Brochure ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT: ABOUT PROGRAM + PROGRAM HIGHLIGHTS CARD                  */}
      {/* ========================================================================= */}
      <main className="flex-1">
        <section id="about" className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: About course text (7 columns) */}
              <div className="lg:col-span-7">
                <span className="text-amber-600 font-extrabold text-xs tracking-wider uppercase mb-3 block">
                  ABOUT THIS PROGRAM
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  {courseName}
                </h2>

                <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                  <p className="text-gray-600 leading-7 whitespace-pre-line">{course.overview || course.courseCatalog.overview}</p>
                </div>
              </div>

              {/* Right Column: Program Highlights Dark Card (5 columns) */}
              <div className="lg:col-span-5">
                <div className="bg-[#051329] text-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-blue-900/40 relative overflow-hidden">
                  {/* Top golden accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />

                  <div className="text-amber-400 font-bold text-xs tracking-wider uppercase mb-2">
                    PROGRAM HIGHLIGHTS
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">
                    {fullCourseName}
                  </h3>

                  {/* Highlights rows */}
                  <div className="space-y-5 border-b border-white/10 pb-8 mb-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-300 font-medium">
                        <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <span>Duration</span>
                      </div>
                      <span className="font-bold text-white text-base">{course.duration} {course.durationUnit}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-300 font-medium">
                        <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                          <Monitor className="w-5 h-5" />
                        </div>
                        <span>Study Mode</span>
                      </div>
                      <span className="font-bold text-white text-base">{course.studyMode || "Online"}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-300 font-medium">
                        <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                          <UserCheck className="w-5 h-5" />
                        </div>
                        <span>Admission</span>
                      </div>
                      <span className="font-bold text-white text-base">Direct</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-300 font-medium">
                        <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <span>Total Fee</span>
                      </div>
                      <span className="font-bold text-white text-xl text-amber-300">
                        {formatMoney(course.totalFee, course.currency)}
                      </span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <button
                      onClick={() => setActiveModal('apply')}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg text-center cursor-pointer transform active:scale-98"
                    >
                      Apply Now
                    </button>

                    <button
                      onClick={() => setActiveModal('brochure')}
                      className="w-full py-3.5 px-4 rounded-xl border border-white/30 hover:border-white/60 bg-transparent hover:bg-white/5 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Download Brochure</span>
                      <Download className="w-4 h-4 text-gray-300" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. 3 INFO CARDS: ELIGIBILITY, ADMISSION PROCESS, LEARNING BENEFITS        */}
        {/* ========================================================================= */}
        <section className="pb-14 sm:pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100">
                      <UserCheck className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">
                      Eligibility
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                    {course.eligibility || "Contact our counsellors for complete eligibility details."}
                  </p>
                </div>
                {/* <button
                  onClick={() => setActiveModal('eligibility')}
                  className="inline-flex items-center gap-2 text-blue-950 hover:text-amber-600 font-bold text-sm group transition-colors self-start cursor-pointer pt-2"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button> */}
              </div>

              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                      <ShieldCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">
                      Admission Process
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                    {course.admissionProcess || "Apply online, submit the required documents and complete the university verification process."}
                  </p>
                </div>
                {/* <button
                  onClick={() => setActiveModal('apply')}
                  className="inline-flex items-center gap-2 text-blue-950 hover:text-amber-600 font-bold text-sm group transition-colors self-start cursor-pointer pt-2"
                >
                  <span>Start Application</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button> */}
              </div>

              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
                      <Download className="w-6 h-6 text-indigo-500" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">
                      Learning Benefits
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                    Flexible learning schedule tailored for working professionals. Live interactive sessions, recorded lectures, and dedicated mentors.
                  </p>
                </div>
                {brochureUrl ? (
                  // <a
                  //   href={brochureUrl}
                  //   target="_blank"
                  //   rel="noreferrer"
                  //   className="inline-flex items-center gap-2 text-blue-950 hover:text-amber-600 font-bold text-sm group transition-colors self-start cursor-pointer pt-2"
                  // >
                  //   <span>Download Brochure</span>
                  //   <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  // </a>
                  <></>
                ) : (
                  // <button
                  //   onClick={() => setActiveModal('brochure')}
                  //   className="inline-flex items-center gap-2 text-blue-950 hover:text-amber-600 font-bold text-sm group transition-colors self-start cursor-pointer pt-2"
                  // >
                  //   <span>Download Brochure</span>
                  //   <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  // </button>
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PROGRAM FEE STRUCTURE (4 HORIZONTAL CARDS)                             */}
        {/* ========================================================================= */}
        {hasValidFees && (
          <section id="fees" className="pb-16 sm:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-amber-600 font-extrabold text-xs tracking-wider uppercase mb-2 block">
                FEE DETAILS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Program Fee Structure
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {feeItems.map((fee, index) => (
                <div
                  key={index}
                  className="bg-amber-50/40 hover:bg-amber-50/70 rounded-2xl p-6 border border-amber-100/60 shadow-2xs hover:shadow-sm transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-amber-100 shrink-0">
                    <IndianRupee className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                      {fee.label}
                    </div>
                    <div className="font-serif text-2xl sm:text-3xl font-extrabold text-gray-900">
                      {formatMoney(fee.value, course.currency)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

       
        {(hasCurriculum || hasSummary) && (
          <section id="curriculum" className="pb-16 sm:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Semester-wise subjects accordion (7 columns) */}
              {hasCurriculum && (
                <div className="lg:col-span-7">
                <span className="text-amber-600 font-extrabold text-xs tracking-wider uppercase mb-2 block">
                  COURSE CURRICULUM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                  Semester-wise Subjects
                </h2>

                <div className="space-y-3">
                  {curriculum.map((sem) => {
                    const isOpen = openSemesterId === sem._id;
                    return (
                      <div
                        key={sem._id}
                        className="border border-gray-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
                      >
                        {/* Header bar */}
                        <button
                          onClick={() => toggleSemester(sem._id)}
                          className={`w-full px-6 py-4 flex items-center justify-between text-left font-bold transition-colors cursor-pointer ${
                            isOpen
                              ? 'bg-[#06142e] text-white'
                              : 'bg-white hover:bg-gray-50 text-gray-900'
                          }`}
                        >
                          <span className="text-base sm:text-lg font-bold">
                            {sem.title || `Semester ${sem.semesterNumber}`}
                          </span>
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                                isOpen
                                  ? 'bg-white/10 text-gray-200'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {sem.subjects.length} Subjects
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-300" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {/* Collapsible Content */}
                        {isOpen && (
                          <div className="p-6 sm:p-7 bg-white border-t border-gray-100 animate-in fade-in duration-200">
                            {sem.description && (
                              <p className="text-gray-600 text-sm sm:text-base mb-6 font-medium leading-relaxed">
                                {sem.description}
                              </p>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                              {sem.subjects.map((sub: any, sIdx: number) => (
                                <div
                                  key={sub._id || sIdx}
                                  className="flex items-start gap-2.5 text-gray-800 text-sm sm:text-base font-medium"
                                >
                                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                                  <span>{sub.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              )}

              {/* Right Column: Program at a Glance + Life at DSU Video Card (5 columns) */}
              {/* Right Column: Program at a Glance + Life at DSU Video Card (5 columns) */}
              {hasSummary && (
                <div className={`space-y-6 ${hasCurriculum ? 'lg:col-span-5' : 'lg:col-span-12 max-w-2xl mx-auto w-full'}`}>
                  {/* Dark Navy Program at a Glance card */}
                <div className="bg-[#051329] text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-blue-900/40">
                  <div className="text-amber-400 font-bold text-xs tracking-wider uppercase mb-7">
                    PROGRAM AT A GLANCE
                  </div>

                  <div className="space-y-7">
                    {/* 6 Semesters */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-serif text-3xl font-extrabold text-white leading-none mb-1">
                          {summary.totalSemesters || curriculum.length}
                        </div>
                        <div className="text-sm font-medium text-gray-300">
                          Semesters
                        </div>
                      </div>
                    </div>

                    {/* 31 Subjects */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                        <Layers className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-serif text-3xl font-extrabold text-white leading-none mb-1">
                          {summary.totalSubjects || 0}
                        </div>
                        <div className="text-sm font-medium text-gray-300">
                          Subjects
                        </div>
                      </div>
                    </div>

                    {/* 92 Total Credits */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-serif text-3xl font-extrabold text-white leading-none mb-1">
                          {summary.totalCredits || 0}
                        </div>
                        <div className="text-sm font-medium text-gray-300">
                          Total Credits
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Life at DSU Online Video Thumbnail Card */}
                <div
                  onClick={() => setActiveModal('video')}
                  className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-800 group cursor-pointer bg-[#0a1835] aspect-[16/10]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040e21] via-[#040e21]/70 to-[#040e21]/40 group-hover:via-[#040e21]/60 transition-colors" />

                  {/* Play icon & text centered */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <div className="w-16 h-16 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-gray-900 text-gray-900 ml-1" />
                    </div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-white mb-1.5">
                      Life at DSU Online
                    </div>
                    <div className="text-amber-400 font-bold text-sm tracking-wide">
                      Watch Video
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </section>
        )}

        {/* ========================================================================= */}
        {/* 7. FREQUENTLY ASKED QUESTIONS (2-COLUMN ACCORDION)                      */}
        {/* ========================================================================= */}
        {hasFaqs && (
          <section id="faq" className="pb-16 sm:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-amber-600 font-extrabold text-xs tracking-wider uppercase mb-2 block">
                COMMON QUESTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
              {/* Left column */}
              <div className="space-y-3.5">
                {leftFaqs.map((faq) => {
                  const isOpen = openFaqIds.includes(faq._id);
                  return (
                    <div
                      key={faq._id}
                      className="border border-gray-200/80 rounded-2xl bg-white shadow-2xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(faq._id)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-gray-800 hover:text-blue-950 transition-colors cursor-pointer"
                      >
                        <span className="text-sm sm:text-base pr-3 font-semibold">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100/80 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right column */}
              <div className="space-y-3.5">
                {rightFaqs.map((faq) => {
                  const isOpen = openFaqIds.includes(faq._id);
                  return (
                    <div
                      key={faq._id}
                      className="border border-gray-200/80 rounded-2xl bg-white shadow-2xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(faq._id)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-gray-800 hover:text-blue-950 transition-colors cursor-pointer"
                      >
                        <span className="text-sm sm:text-base pr-3 font-semibold">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100/80 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        )}
      </main>


     
     
    </div>
  );
}
