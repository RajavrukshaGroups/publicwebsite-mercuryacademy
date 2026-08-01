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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // In a real app, this would submit the form
      setSubmitted(false);
      alert(`Enquiry submitted for ${selectedProgram || university.name}`);
    }, 1200);
  };

  const filteredCourses = activeTab === 'ALL' 
    ? (university.courses || [])
    : (university.courses || []).filter((c: any) => (c.courseCatalog?.shortName || 'OTHER') === activeTab);

  // Fallback image if banner is not provided
  const displayBannerUrl = bannerUrl || "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      
      {/* 1. TOP HEADER / NAVBAR */}
     


      {/* 2. HERO SECTION WITH ENQUIRE NOW FORM */}
      <section className="relative bg-[#071938] text-white -mt-24.5 pt-10 pb-16 overflow-hidden h-[110vh]"
       style={{backgroundImage: `url(${dayanandasagarImg.src})` , backgroundPosition: "center" , backgroundSize: "cover" , backgroundRepeat: "no-repeat"}}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 pt-40">
              <div className="inline-block">
                <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
                  FUTURE-<span className="text-white">READY EDUCATION</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl text-white lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-serif-display">
                Learn. Grow. <br />
                Lead the <span className="text-[#FFB800]">Future.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg font-sans">
                {university.name} offers industry-aligned UG & PG programs designed to help you build in-demand skills and achieve your career goals.
              </p>

              {/* 4 Feature Badges */}
              {/* <div className="grid grid-cols-2 gap-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md border border-amber-400/40 bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
                    UGC Entitled Programs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md border border-amber-400/40 bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
                    Industry-Aligned Curriculum
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md border border-amber-400/40 bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
                    Flexible Online Learning
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md border border-amber-400/40 bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
                    Placement Support
                  </span>
                </div>
              </div> */}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#programs"
                  className="bg-[#FFB800] hover:bg-amber-400 text-slate-950 font-extrabold text-sm px-7 py-3 rounded-md shadow-lg transition-all cursor-pointer"
                >
                  Explore Programs
                </a>
                <button
                  className="border-2 border-amber-400/80 hover:bg-amber-400/10 text-amber-300 font-bold text-sm px-6 py-3 rounded-md flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Talk to an Advisor</span>
                </button>
              </div>
            </div>

            {/* Right Hero Frame & Floating Form */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-24">
              <div className="relative rounded-3xl overflow-hidden border-4 border-amber-400/30 shadow-2xl min-h-[420px]">
                <img 
                  src={displayBannerUrl} 
                  alt={`${university.name} Campus`} 
                  className="w-full h-full object-cover min-h-[440px] filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071938]/90 via-[#071938]/30 to-transparent" />
              </div>

              {/* Floating Enquire Now Card */}
              <div className="relative lg:absolute lg:inset-x-4 lg:bottom-4 bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 z-20 mt-4 lg:mt-0">
                <h3 className="text-xl font-extrabold text-slate-900">Enquire Now</h3>
                <p className="text-xs text-slate-500 mb-4">Take the first step towards your future</p>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4 text-center text-emerald-800 space-y-1">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p className="font-bold text-sm">Enquiry Submitted Successfully!</p>
                    <p className="text-xs">Our academic experts will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-100 border border-slate-300 px-3 py-2.5 rounded-md text-xs font-bold text-slate-700 flex items-center gap-1 shrink-0">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <select
                      required
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs font-medium focus:outline-none focus:border-amber-500 focus:bg-white text-slate-700"
                    >
                      <option value="">Select Program</option>
                      {university.courses?.map((c: any) => (
                        <option key={c._id} value={c.slug}>
                          {c.courseCatalog?.shortName || c.courseCatalog?.name} {c.specialization?.name ? `- ${c.specialization.name}` : ''}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="w-full bg-[#FFB800] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3 rounded-md shadow-md transition-all cursor-pointer mt-1"
                    >
                      Submit Enquiry
                    </button>
                    <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                       Our experts will contact you soon
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS STRIP BANNER */}
      <section className="bg-white border-y border-slate-200 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* <div className="flex items-center justify-center gap-3 pt-2 md:pt-0">
              <Building className="w-7 h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-xs text-slate-500 font-medium block">Approved</span>
                <span className="text-base font-extrabold text-slate-900">UGC-DEB</span>
              </div>
            </div> */}
            <div className="flex items-center justify-center gap-3 pt-2 md:pt-0">
              <GraduationCap className="w-7 h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-base font-extrabold text-slate-900 block leading-tight">University</span>
                <span className="text-xs text-slate-500 font-medium">Recognized</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2 md:pt-0">
              <Laptop className="w-7 h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-base font-extrabold text-slate-900 block leading-tight">{university.courses?.length || 0}+</span>
                <span className="text-xs text-slate-500 font-medium">Online Programs</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2 md:pt-0">
              <Users className="w-7 h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-base font-extrabold text-slate-900 block leading-tight">10,000+</span>
                <span className="text-xs text-slate-500 font-medium">Students</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2 md:pt-0 col-span-2 md:col-span-1">
              <ShieldCheck className="w-7 h-7 text-amber-500 shrink-0" />
              <div className="text-left">
                <span className="text-base font-extrabold text-slate-900 block leading-tight">Industry</span>
                <span className="text-xs text-slate-500 font-medium">Collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display">
                About {university.shortName || university.name}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {university.overview || "University overview will be updated soon."}
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-md shadow-xs text-xs font-semibold text-slate-700">
                <Building2 className="w-4 h-4 text-amber-500" />
                <span>Modern Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-md shadow-xs text-xs font-semibold text-slate-700">
                <Users className="w-4 h-4 text-amber-500" />
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-md shadow-xs text-xs font-semibold text-slate-700">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Innovation &amp; Research</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-md shadow-xs text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Career Support</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src={displayBannerUrl} 
                alt="Building Architecture" 
                className="w-full h-80 object-cover"
              />
            </div>
            {logoUrl && (
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white p-1 shadow-2xl border-2 border-slate-200 flex items-center justify-center overflow-hidden">
                <img src={logoUrl} alt={university.name} className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. OUR ONLINE PROGRAMS GRID */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-display">
              Our Online Programs
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Choose from a wide range of undergraduate and postgraduate programs
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {courseCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md font-bold text-xs transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#FFB800] text-slate-950 shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab === 'ALL' ? 'All Programs' : tab}
              </button>
            ))}
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map((prog: any, index: number) => {
              const title = `${prog.courseCatalog?.shortName || prog.courseCatalog?.name} ${prog.specialization?.name ? `- ${prog.specialization.name}` : ''}`;
              
              const cardThemes = [
                { icon: BarChart, colorText: 'text-indigo-600', colorBg: 'bg-indigo-50', hoverBorder: 'group-hover:border-indigo-500' },
                { icon: Megaphone, colorText: 'text-orange-500', colorBg: 'bg-orange-50', hoverBorder: 'group-hover:border-orange-500' },
                { icon: Truck, colorText: 'text-blue-500', colorBg: 'bg-blue-50', hoverBorder: 'group-hover:border-blue-500' },
                { icon: ShieldCheck, colorText: 'text-emerald-500', colorBg: 'bg-emerald-50', hoverBorder: 'group-hover:border-emerald-500' },
                { icon: Smartphone, colorText: 'text-purple-500', colorBg: 'bg-purple-50', hoverBorder: 'group-hover:border-purple-500' },
                { icon: Database, colorText: 'text-amber-500', colorBg: 'bg-amber-50', hoverBorder: 'group-hover:border-amber-500' },
                { icon: Server, colorText: 'text-cyan-500', colorBg: 'bg-cyan-50', hoverBorder: 'group-hover:border-cyan-500' },
                { icon: Wifi, colorText: 'text-teal-500', colorBg: 'bg-teal-50', hoverBorder: 'group-hover:border-teal-500' },
                { icon: Gamepad2, colorText: 'text-pink-500', colorBg: 'bg-pink-50', hoverBorder: 'group-hover:border-pink-500' },
                { icon: Star, colorText: 'text-yellow-500', colorBg: 'bg-yellow-50', hoverBorder: 'group-hover:border-yellow-500' },
                { icon: Brain, colorText: 'text-green-500', colorBg: 'bg-green-50', hoverBorder: 'group-hover:border-green-500' },
                { icon: Cpu, colorText: 'text-indigo-500', colorBg: 'bg-indigo-50', hoverBorder: 'group-hover:border-indigo-500' },
                { icon: PieChart, colorText: 'text-blue-600', colorBg: 'bg-blue-50', hoverBorder: 'group-hover:border-blue-600' },
                { icon: Layers, colorText: 'text-orange-600', colorBg: 'bg-orange-50', hoverBorder: 'group-hover:border-orange-600' },
                { icon: Code, colorText: 'text-emerald-600', colorBg: 'bg-emerald-50', hoverBorder: 'group-hover:border-emerald-600' },
                { icon: Package, colorText: 'text-rose-500', colorBg: 'bg-rose-50', hoverBorder: 'group-hover:border-rose-500' },
              ];
              const theme = cardThemes[index % cardThemes.length];
              const IconComponent = theme.icon;

              return (
                <div
                  key={prog._id}
                  className={`bg-white rounded-[20px] p-6 shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full border-b-[3px] border-b-transparent ${theme.hoverBorder}`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${theme.colorBg} ${theme.colorText}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1.5 bg-white border border-slate-100 px-3 py-1.5 rounded-full shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-semibold text-slate-600">
                          {prog.studyMode || "Online"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 mb-6">
                      <h3 className="font-extrabold text-[17px] text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                        {title}
                      </h3>
                      <p className="text-[13px] text-slate-500 font-medium">
                        Duration: {prog.duration} {prog.durationUnit}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/universities/${university.slug}/courses/${prog.slug}`}
                    className="flex items-center text-[14px] font-bold text-blue-700 group-hover:text-blue-800 transition-colors"
                  >
                    <span>View Course</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-gray-600">
            No published courses are currently available.
          </div>
        )}
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="bg-[#071938] text-white py-12 px-4 sm:px-6 lg:px-8 my-8 max-w-7xl mx-auto rounded-2xl shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-full bg-amber-400 p-1 shrink-0 flex items-center justify-center shadow-lg hidden sm:flex">
              <div className="w-full h-full rounded-full bg-[#071938] flex items-center justify-center text-amber-400 border border-amber-300">
                <GraduationCap className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Join thousands of learners who are building successful careers with {university.shortName || university.name} Online.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-amber-400" />
              <span>100% Online Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Flexible Learn at Your Pace</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Career Support</span>
            </div> */}
          </div>
          <button className="bg-[#FFB800] hover:bg-amber-400 text-slate-950 font-black text-sm px-8 py-3.5 rounded-md shadow-lg transition-all cursor-pointer whitespace-nowrap">
            Apply Now
          </button>
        </div>
      </section>

    </div>
  );
}
