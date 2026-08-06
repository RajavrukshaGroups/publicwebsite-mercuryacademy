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
  IndianRupee,
  Shield,
  BarChart3,
  Sparkles,
  HelpCircle,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';



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
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  // Enquiry Form State
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'Karnataka',
    city: '',
    qualification: 'Passed 10+2',
    workExperience: 'Fresh Graduate (0 years)'
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const handleOpenEnquiry = () => setEnquiryModalOpen(true);
  const handleCloseEnquiry = () => setEnquiryModalOpen(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (formData.phone.length >= 10) {
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit mobile number first.");
    }
  };

  const handleEnquiryFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEnquirySubmitted(true);
    }, 900);
  };

  const handleResetForm = () => {
    setEnquirySubmitted(false);
    setOtpSent(false);
    setOtpCode('');
    setEnquiryModalOpen(false);
  };

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
    setOpenFaqId(openFaqId === id ? null : id);
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
      
      const res = await fetch('http://localhost:5000/api/v1/leads', {
      //const res = await fetch('https://mercuryapi.bouncyboxstudio.in/api/v1/leads', {
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
      <section id="hero" className="relative bg-[#0d1c3a] text-white overflow-hidden h-auto"
        style={{
          backgroundImage: `url('${bannerUrl || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80'}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
          aspectRatio: '16/9',
          objectFit: 'cover',
          
        }}
      >
        {/* Background Layers */}

        {/* Main Content Container */}
        
      </section>

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT: ABOUT PROGRAM + PROGRAM HIGHLIGHTS CARD                  */}
      {/* ========================================================================= */}
      <main className="flex-1 w-full bg-slate-50 text-slate-900 font-sans">
      {/* 1. HERO / ABOUT & PROGRAM HIGHLIGHTS SECTION */}
      <section id="about" className="relative hero-pattern-bg pt-8 pb-14 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
          
          {/* Left Column: About This Program */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-800 uppercase font-sans">
                ABOUT THIS PROGRAM
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading font-bold text-slate-900 mt-2 leading-[1.15]">
                {courseName}
              </h1>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-sans-body whitespace-pre-line">
              <p className="text-slate-700 leading-relaxed font-normal">
                {course.overview || course?.courseCatalog?.overview}
              </p>
            </div>
          </div>

          {/* Right Column: Program Highlights Card */}
          <div id="highlights" className="lg:col-span-5">
            <div className="relative card-gold-border rounded-2xl p-6 sm:p-8 backdrop-blur-md bg-white">
              
              {/* Gold Crest Ribbon Badge */}
              <div className="absolute top-0 right-6 w-14 h-16 gold-ribbon-badge flex flex-col items-center justify-center pt-1 shadow-xl">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-amber-300/60 flex items-center justify-center p-1">
                  <Shield className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                </div>
              </div>

              {/* Card Title */}
              <div className="pr-16 mb-6">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-800 uppercase">
                  PROGRAM HIGHLIGHTS
                </span>
                <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-slate-900 mt-2 leading-snug">
                  {fullCourseName}
                </h2>
              </div>

              {/* Key Details List */}
              <div className="space-y-5 my-8">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gold-icon-badge flex items-center justify-center text-amber-700">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">Duration</span>
                  </div>
                  <span className="text-base font-bold text-slate-900 font-sans">{course.duration} {course.durationUnit}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gold-icon-badge flex items-center justify-center text-amber-700">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">Study Mode</span>
                  </div>
                  <span className="text-base font-bold text-slate-900 font-sans">{course.studyMode || "Online"}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gold-icon-badge flex items-center justify-center text-amber-700">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">Admission</span>
                  </div>
                  <span className="text-base font-bold text-slate-900 font-sans">Direct</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gold-icon-badge flex items-center justify-center text-amber-700">
                      <IndianRupee className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600">Total Fee</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight text-amber-700">
                    {formatMoney(course.totalFee, course.currency)}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Link href={"/contact"}>
              <button
                className="w-full bg-gold-button text-slate-950 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 text-base shadow-lg hover:brightness-105 transition-all cursor-pointer group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. KEY INFO CARDS (Eligibility, Admission, Learning Benefits) */}
      <section id="key-info" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Eligibility Card */}
          <div className="card-gold-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-white">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-amber-900">
                  Eligibility
                </h3>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans-body whitespace-pre-line">
                {course.eligibility || "Contact our counsellors for complete eligibility details."}
              </p>
            </div>
          </div>

          {/* Admission Process Card */}
          <div className="card-gold-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-white">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-amber-900">
                  Admission Process
                </h3>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans-body whitespace-pre-line">
                {course.admissionProcess || "Apply online, submit the required documents and complete the university verification process."}
              </p>
            </div>
          </div>

          {/* Learning Benefits Card */}
          <div className="card-gold-border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-white">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-amber-900">
                  Learning Benefits
                </h3>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans-body">
                Flexible learning schedule tailored for working professionals. Live interactive sessions, recorded lectures, and dedicated mentors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEE DETAILS SECTION */}
      {hasValidFees && (
      <section id="fee-details" className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-800 uppercase font-sans">
              FEE DETAILS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-slate-900 mt-1">
              Program Fee Structure
            </h2>
          </div>

          <div className="card-gold-border rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
              
              {feeItems.map((fee, index) => (
              <div key={index} className={`flex items-center gap-4 lg:px-6 ${index === 0 ? 'first:pl-0' : ''} ${index === feeItems.length - 1 ? 'last:pr-0' : ''}`}>
                <div className="w-12 h-12 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0 shadow-inner">
                  <IndianRupee className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase block">
                    {fee.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                    {formatMoney(fee.value, course.currency)}
                  </span>
                </div>
              </div>
              ))}

            </div>
          </div>

        </div>
      </section>
      )}

      {/* 4. COURSE CURRICULUM SECTION */}
      {(hasCurriculum || hasSummary) && (
      <section id="curriculum" className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Semester Accordion */}
            {hasCurriculum && (
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-800 uppercase font-sans">
                  COURSE CURRICULUM
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-slate-900 mt-1">
                  Semester-wise Subjects
                </h2>
              </div>

              <div className="space-y-3.5">
                {curriculum.map((sem) => {
                  const isOpen = openSemesterId === sem._id;
                  const actualSubjectCount = sem.subjects?.length || 0;

                  return (
                    <div
                      key={sem._id}
                      className="card-gold-border rounded-xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleSemester(sem._id)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors focus:outline-none cursor-pointer bg-white"
                      >
                        <span className="text-base sm:text-lg font-serif-heading font-bold text-slate-900">
                          {sem.title || `Semester ${sem.semesterNumber}`}
                        </span>

                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 border border-amber-400/40 text-amber-900">
                            {actualSubjectCount} Subjects
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-amber-700 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="border-t border-slate-200 bg-slate-50/60"
                          >
                            <div className="p-4 sm:p-5 space-y-2.5">
                              {sem.description && (
                                <p className="text-xs text-slate-600 mb-4">{sem.description}</p>
                              )}
                              {actualSubjectCount > 0 ? (
                                sem.subjects.map((sub: any, idx: number) => (
                                  <div
                                    key={sub._id || idx}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-amber-400/60 transition-colors gap-2 shadow-xs"
                                  >
                                    <div className="flex items-center gap-3">
                                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                                      <div>
                                        <span className="text-sm font-semibold text-slate-800">
                                          {sub.name}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                        {sub.credits || 3} Credits
                                      </span>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="text-xs text-slate-600 italic p-2">
                                  Subjects will be updated shortly.
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
            )}

            {/* Right Column: Program At A Glance Box */}
            {hasSummary && (
            <div className={`lg:sticky lg:top-24 ${hasCurriculum ? 'lg:col-span-5' : 'lg:col-span-12 max-w-2xl mx-auto w-full'}`}>
              <div className="card-gold-border rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group bg-white">
                
                {/* Building Silhouette Overlay */}
                <div 
                  className="absolute inset-0 opacity-10 bg-cover bg-right-bottom pointer-events-none mix-blend-multiply"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')`
                  }}
                />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-800 uppercase font-sans">
                    PROGRAM AT A GLANCE
                  </span>

                  <div className="space-y-7 my-8">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0 shadow-md">
                        <BookOpen className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 block leading-none">
                          {summary.totalSemesters || curriculum.length}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mt-1.5 block">
                          Semesters
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0 shadow-md">
                        <Layers className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 block leading-none">
                          {summary.totalSubjects || 0}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mt-1.5 block">
                          Subjects
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0 shadow-md">
                        <Award className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 block leading-none">
                          {summary.totalCredits || 0}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider mt-1.5 block">
                          Total Credits
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300/60 flex items-start gap-3 relative z-10 backdrop-blur-sm">
                    <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-800 leading-relaxed font-sans-body font-medium">
                      Hands-on curriculum featuring industry-aligned coursework and projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            )}

          </div>

        </div>
      </section>
      )}

      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      {hasFaqs && (
      <section id="faqs" className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10 text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-800 uppercase font-sans">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq._id;

              return (
                <div
                  key={faq._id}
                  className="card-gold-border rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq._id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors focus:outline-none gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-sans leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-700 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="border-t border-slate-200 bg-slate-50/80"
                      >
                        <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans-body">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-amber-50/60 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gold-icon-badge flex items-center justify-center text-amber-700 shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Have more questions about admissions or eligibility?</h4>
                <p className="text-xs text-slate-600">Our academic counselors are available to guide you step-by-step.</p>
              </div>
            </div>
            <Link href={"/contact"}>
            <button
              className="text-xs font-bold px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/40 text-amber-900 hover:bg-amber-500/20 transition-colors shrink-0 cursor-pointer"
            >
              Enquire Now
            </button>
            </Link>
          </div>

        </div>
      </section>
      )}

      {/* 6. ENQUIRY MODAL DIALOG */}
      <AnimatePresence>
        {enquiryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseEnquiry}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl bg-white border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-slate-900"
            >
              <button
                onClick={handleCloseEnquiry}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!enquirySubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-amber-800 uppercase font-sans">
                      ADMISSION ENQUIRY
                    </span>
                    <h3 className="text-2xl font-serif-heading font-bold text-slate-900 mt-1">
                      {courseName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill in your details below to receive the detailed syllabus, fee breakdown, and counselor callback.
                    </p>
                  </div>

                  <form onSubmit={handleEnquiryFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-amber-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address <span className="text-amber-700">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="rahul@example.com"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile Number <span className="text-amber-700">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleFormChange}
                            placeholder="10-digit mobile"
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-3.5 pr-16 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                          />
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 text-[10px] font-bold text-amber-900 bg-amber-500/20 border border-amber-500/40 rounded hover:bg-amber-500/30 transition-colors cursor-pointer"
                          >
                            {otpSent ? 'Resend' : 'Get OTP'}
                          </button>
                        </div>
                      </div>
                    </div>

                    {otpSent && (
                      <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                        <div className="flex-1">
                          <span className="text-xs text-amber-900 block font-bold">OTP sent to +91 {formData.phone}</span>
                          <input
                            type="text"
                            maxLength={6}
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                            placeholder="Enter OTP (e.g. 123456)"
                            className="mt-1.5 w-full bg-white border border-slate-300 rounded px-3 py-1.5 text-xs text-slate-900 focus:outline-none focus:border-amber-600"
                          />
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Highest Qualification
                        </label>
                        <select
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleFormChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                        >
                          <option value="Passed 10+2">Passed 10+2 / Higher Secondary</option>
                          <option value="Diploma">Diploma Holder</option>
                          <option value="Appearing 10+2">Appearing for 10+2 Exams</option>
                          <option value="Graduate">Graduation Pursuing/Passed</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Work Experience
                        </label>
                        <select
                          name="workExperience"
                          value={formData.workExperience}
                          onChange={handleFormChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                        >
                          <option value="Fresh Graduate (0 years)">Fresh Student / No Experience</option>
                          <option value="1-3 Years">1 - 3 Years Working Experience</option>
                          <option value="3-5 Years">3 - 5 Years Working Experience</option>
                          <option value="5+ Years">5+ Years Working Experience</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleFormChange}
                          placeholder="e.g. Karnataka"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleFormChange}
                          placeholder="e.g. Bengaluru"
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold-button text-slate-950 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md hover:brightness-105 transition-all cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Submitting Enquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Application Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                      Your information is 100% confidential and secure.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="py-6 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold tracking-widest text-amber-800 uppercase">
                      ENQUIRY RECEIVED SUCCESSFULLY!
                    </span>
                    <h3 className="text-2xl font-serif-heading font-bold text-slate-900">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your admission enquiry has been submitted. An academic advisor will reach out to you shortly via phone or email.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Selected Course:</span>
                      <span className="font-bold text-slate-900">{courseName}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleResetForm}
                      className="bg-gold-button text-slate-950 font-bold px-6 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </main>


     
     
    </div>
  );
}
