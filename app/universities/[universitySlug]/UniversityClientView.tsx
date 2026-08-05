"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Star, 
  Award, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Phone, 
  Building, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  ChevronDown, 
  ArrowRight, 
  BarChart, 
  Megaphone, 
  Truck, 
  ShieldAlert, 
  Smartphone, 
  Database, 
  Server, 
  Wifi, 
  Gamepad2, 
  Code, 
  Sparkles, 
  Brain, 
  PieChart, 
  Layers, 
  Package, 
  Laptop, 
  IndianRupee, 
  Cpu, 
  Rocket, 
  HelpCircle, 
  Building2,
  FileText
} from 'lucide-react';
import {useRouter} from 'next/navigation';

import dayanandasagarImg from '../../../public/images/dayananda-bg-banner.png';

interface UniversityClientViewProps {
  university: any;
  logoUrl: string | null;
  bannerUrl: string | null;
}

export default function UniversityClientView({
  university,
  logoUrl,
  bannerUrl
}: UniversityClientViewProps) {
  const router = useRouter();
  // Determine unique categories from courses for the tabs
  const courseCategories = ['ALL'];
  if (university.courses) {
    university.courses.forEach((course: any) => {
      const cat = course.courseCatalog?.shortName || 'OTHER';
      if (!courseCategories.includes(cat)) {
        courseCategories.push(cat);
      }
    });
  }

  const [activeTab, setActiveTab] = useState<string>('ALL');
  
  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (firstName.trim().length < 2) {
      alert('First name must be at least 2 characters.');
      return;
    }
    if (phone.trim().startsWith('0')) {
      alert('Phone number cannot start with zero.');
      return;
    }
    if (phone.trim().length !== 10) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    setSubmitting(true);
    
    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email,
        phone,
        universityCourse: selectedProgram,
        message: message.trim()
      };

      const payloadData = Object.fromEntries(
        Object.entries(payload).filter(([key, val]) => val !== '')
      );

      // const res = await fetch('http://localhost:5000/api/v1/leads', {
       const res = await fetch('https://mercuryapi.bouncyboxstudio.in/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadData)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const errorData = await res.json();
        console.error('Backend validation failed:', errorData);
        let errorDetails = '';
        if (errorData.errors && Array.isArray(errorData.errors)) {
           errorDetails = errorData.errors.map((err: any) => `${err.path ? err.path.join('.') : 'Field'}: ${err.message || err.code}`).join('\n');
        }
        alert(`Validation failed:\n${errorDetails || errorData.message || 'Please check your inputs.'}`);
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredCourses = activeTab === 'ALL' 
    ? (university.courses || [])
    : (university.courses || []).filter((c: any) => (c.courseCatalog?.shortName || 'OTHER') === activeTab);

  // Fallback image if banner is not provided
  const displayBannerUrl = bannerUrl || "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900 ">
      
      {/* 2. HERO SECTION - 18:9 Aspect Ratio */}
      <section 
        className="relative w-full bg-[#071938] pt-22"
        style={{
          backgroundImage: `url(${displayBannerUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          aspectRatio: '18/10',
          width: '100%',
          maxWidth: '100vw'
        }}
      >
        {/* Dark Overlay */}
       
        {/* Content Container */}
        <div className="relative h-full w-full flex items-center px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center w-full py-4 sm:py-6 lg:py-8">
            
            {/* Left Hero Content */}
         

            {/* Right Hero - Floating Enquire Form */}
           
          </div>
        </div>
      </section>

      {/* 3. STATS STRIP BANNER */}
      <section className="bg-white border-y border-slate-200 py-4 sm:py-5 md:py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-center justify-center text-center">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 block leading-tight">University</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium">Recognized</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Laptop className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 block leading-tight">{university.courses?.length || 0}+</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium">Online Programs</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 block leading-tight">10,000+</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium">Students</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 block leading-tight">Industry</span>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium">Collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-10 sm:py-12 md:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 sm:w-1.5 sm:h-6 bg-amber-500 rounded-full" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 font-serif-display">
                About {university.name || university.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {university.overview || "University overview will be updated soon."}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-3">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-slate-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md shadow-xs text-[10px] sm:text-xs font-semibold text-slate-700">
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                <span>Modern Infrastructure</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-slate-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md shadow-xs text-[10px] sm:text-xs font-semibold text-slate-700">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-slate-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md shadow-xs text-[10px] sm:text-xs font-semibold text-slate-700">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                <span>Innovation</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-slate-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md shadow-xs text-[10px] sm:text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                <span>Career Support</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-4 sm:mt-6 lg:mt-0">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <div className="lg:col-span-5 relative mt-3 sm:mt-4 lg:mt-0">
              {/* Floating Enquire Now Card */}
              <div className="bg-white/95 backdrop-blur-sm text-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-2xl border border-slate-200/80">
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">Enquire Now</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3 md:mb-4">Take the first step towards your future</p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-3 sm:p-4 text-center text-emerald-800 space-y-1">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-600 mx-auto" />
                    <p className="font-bold text-xs sm:text-sm">Enquiry Submitted Successfully!</p>
                    <p className="text-[10px] sm:text-xs">Our academic experts will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-2 sm:space-y-2.5 md:space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-1/2 px-3 sm:px-3.5 py-2 sm:py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-1/2 px-3 sm:px-3.5 py-2 sm:py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    />
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-100 border border-slate-300 px-2 sm:px-3 py-2 sm:py-2.5 rounded-md text-xs font-bold text-slate-700 flex items-center gap-1 shrink-0">
                        <span>🇮🇳</span>
                        <span className="hidden xs:inline">+91</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <select
                      required
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white text-slate-700 transition-colors"
                    >
                      <option value="">Select Program</option>
                      {university.courses?.map((c: any) => (
                        <option key={c._id} value={c._id}>
                          {c.courseCatalog?.shortName || c.courseCatalog?.name} {c.specialization?.name ? `- ${c.specialization.name}` : ''}
                        </option>
                      ))}
                    </select>
                    <textarea
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={2}
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full bg-[#FFB800] hover:bg-amber-400 text-slate-950 font-black text-[10px] sm:text-xs uppercase tracking-wider py-2.5 sm:py-3 rounded-md shadow-md transition-all cursor-pointer mt-0.5 sm:mt-1 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {submitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                       Our experts will contact you soon
                    </p>
                  </form>
                )}
              </div>
            </div>
            </div>
            {logoUrl && (
              <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -left-4 sm:-left-5 md:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white p-1 shadow-2xl border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                <img src={logoUrl} alt={university.name} className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. OUR ONLINE PROGRAMS GRID */}
      <section id="programs" className="py-10 sm:py-12 md:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#071938]">
        <div className="mb-6 sm:mb-8 md:mb-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 md:w-10 h-[2px] bg-amber-400/60" />
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-[0.1em] sm:tracking-[0.15em] text-amber-500 uppercase">
              EXPLORE. LEARN. SUCCEED.
            </span>
            <div className="w-6 sm:w-8 md:w-10 h-[2px] bg-amber-400/60" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif-display mb-2 sm:mb-3">
            Our Online Programs
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 font-medium max-w-2xl mx-auto px-2">
            Choose from a wide range of undergraduate and postgraduate programs
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mt-4 sm:mt-6 md:mt-8 justify-center">
            {courseCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 md:px-7 py-1.5 sm:py-2 md:py-2.5 rounded-full font-bold text-[10px] sm:text-[11px] md:text-[13px] transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#FFB800] text-[#071938] shadow-md'
                    : 'bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {tab === 'ALL' ? 'All Programs' : tab}
              </button>
            ))}
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {filteredCourses.map((prog: any, index: number) => {
              const shortName = prog.courseCatalog?.shortName || prog.courseCatalog?.name;
              const specName = prog.specialization?.name;
              
              const cardThemes = [
                { icon: BarChart, colorText: 'text-indigo-600', colorBg: 'bg-indigo-50' },
                { icon: Megaphone, colorText: 'text-orange-500', colorBg: 'bg-orange-50' },
                { icon: Truck, colorText: 'text-blue-500', colorBg: 'bg-blue-50' },
                { icon: ShieldCheck, colorText: 'text-emerald-500', colorBg: 'bg-emerald-50' },
                { icon: Smartphone, colorText: 'text-purple-500', colorBg: 'bg-purple-50' },
                { icon: Database, colorText: 'text-amber-500', colorBg: 'bg-amber-50' },
                { icon: Server, colorText: 'text-cyan-500', colorBg: 'bg-cyan-50' },
                { icon: Wifi, colorText: 'text-teal-500', colorBg: 'bg-teal-50' },
                { icon: Gamepad2, colorText: 'text-pink-500', colorBg: 'bg-pink-50' },
                { icon: Star, colorText: 'text-yellow-500', colorBg: 'bg-yellow-50' },
                { icon: Brain, colorText: 'text-green-500', colorBg: 'bg-green-50' },
                { icon: Cpu, colorText: 'text-indigo-500', colorBg: 'bg-indigo-50' },
                { icon: PieChart, colorText: 'text-blue-600', colorBg: 'bg-blue-50' },
                { icon: Layers, colorText: 'text-orange-600', colorBg: 'bg-orange-50' },
                { icon: Code, colorText: 'text-emerald-600', colorBg: 'bg-emerald-50' },
                { icon: Package, colorText: 'text-rose-500', colorBg: 'bg-rose-50' },
              ];
              const theme = cardThemes[index % cardThemes.length];
              const IconComponent = theme.icon;

              return (
                <div
                  key={prog._id}
                  className="bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group cursor-pointer h-full relative overflow-hidden"
                >
                  {/* Decorative corner slash */}
                  <div className="absolute bottom-[42px] right-[-6px] w-8 h-8 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1.5px] bg-amber-400/80 rotate-[-45deg]"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-5">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center shrink-0 ${theme.colorBg} ${theme.colorText}`}>
                        <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-[22px] md:h-[22px]" />
                      </div>
                      <div className="flex items-center gap-1 pt-1">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.4)]" />
                        <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-slate-600 tracking-wide">
                          {prog.studyMode || "Online"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-1 mb-4 sm:mb-5 md:mb-6">
                      <h3 className="font-extrabold text-[14px] sm:text-[15px] md:text-[16px] text-slate-900 leading-[1.3] group-hover:text-[#071938] transition-colors">
                        {shortName}
                        {specName ? (
                          <>
                            <span className="mr-1">-</span><br className="sm:hidden" />
                            <span className="text-[13px] sm:text-[14px] md:text-[15px]">{specName}</span>
                          </>
                        ) : ''}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] text-slate-500 font-medium">
                        Duration: {prog.duration} {prog.durationUnit}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/universities/${university.slug}/courses/${prog.slug}`}
                    className="w-full bg-[#071938] text-white text-[11px] sm:text-[12px] md:text-[13px] font-semibold py-2 sm:py-2.5 px-4 sm:px-5 rounded-[10px] sm:rounded-[12px] flex items-center justify-center transition-colors hover:bg-[#112448] relative z-10"
                  >
                    <span>View Course</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1.5 sm:ml-2 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 text-gray-600 text-center">
            No published courses are currently available.
          </div>
        )}
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="bg-[#071938] text-white py-8 sm:py-10 md:py-12 px-3 sm:px-6 lg:px-8 my-6 sm:my-7 md:my-8 max-w-7xl mx-auto rounded-xl sm:rounded-2xl shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 relative z-10">
          <div className="flex items-center gap-3 sm:gap-4 text-center lg:text-left w-full lg:w-auto justify-center lg:justify-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-amber-400 p-1 shrink-0 flex items-center justify-center shadow-lg hidden sm:flex">
              <div className="w-full h-full rounded-full bg-[#071938] flex items-center justify-center text-amber-400 border border-amber-300">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-white">
                Ready to Start Your Journey?
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-300 font-medium mt-0.5 sm:mt-1 max-w-sm">
                Join thousands of learners who are building successful careers with {university.shortName || university.name} Online.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs text-slate-200">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Laptop className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber-400" />
              <span className="hidden sm:inline">100% Online Learning</span>
              <span className="sm:hidden">Online</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber-400" />
              <span className="hidden sm:inline">Flexible Learning</span>
              <span className="sm:hidden">Flexible</span>
            </div>
          </div>
          <button 
            className="w-full sm:w-auto bg-[#FFB800] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-md shadow-lg transition-all cursor-pointer whitespace-nowrap"
            onClick={() => router.push('/contact')}
          >
            Apply Now
          </button>
        </div>
      </section>

    </div>
  );
}