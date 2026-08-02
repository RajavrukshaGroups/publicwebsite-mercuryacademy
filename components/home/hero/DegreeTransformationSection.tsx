"use client";

import Image from "next/image";
import {
  Star,
  User,
  IndianRupee,
  BarChart2,
  Users,
  HelpCircle,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Network,
  Briefcase,
  TrendingUp,
  Rocket,
  UserCheck,
  Scale,
  Trophy,
  Shield,
  Target,
  Award,
  Building2,
  CheckCircle,
  ArrowRight,
  Megaphone,
  Settings,
  PieChart,
} from "lucide-react";
import { useRouter } from "next/navigation";

import futureYouPortraitImg from "@/public/images/future_you_portrait_1785321590935.jpg";

// interface DegreeTransformationSectionProps {
//   onOpenCounselling: (reason?: string) => void;
// }

export function DegreeTransformationSection () {
  const router = useRouter();
  return (
    <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#ECE3D2] text-slate-900 rounded-3xl shadow-2xl my-12 border border-amber-200/70 overflow-hidden font-sans">
      
      {/* Background Lighting & Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-amber-200/30 via-amber-100/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* TOP HEADER SECTION */}
      <div className="text-center space-y-4 mb-12">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 bg-white/90 border border-amber-300/80 rounded-full px-5 py-1.5 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span className="text-[11px] sm:text-xs font-extrabold text-slate-800 tracking-wider uppercase">
            BETTER QUALIFICATION. BETTER FUTURE.
          </span>
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
        </div>

        {/* Main Title */}
        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.75rem] font-medium leading-[1.1] tracking-tight">
          <span className="text-[#081838]">Your Degree Today. </span>
          <span className="gold-gradient-text font-serif-display font-semibold">
            Your Success Tomorrow.
          </span>
        </h2>

        {/* Subtitle with Accent Line */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="w-8 h-[2px] bg-amber-500 rounded-full" />
          <p className="text-slate-700 text-sm sm:text-base font-medium max-w-xl">
            A small step today can lead to a lifetime of growth, stability and success.
          </p>
          <div className="w-8 h-[2px] bg-amber-500 rounded-full" />
        </div>
      </div>


      {/* MAIN 3-COLUMN COMPARISON & ROADMAP MAP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12 pt-4">
        
        {/* LEFT CARD: CURRENT YOU (3 of 12 cols) */}
        <div className="lg:col-span-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl p-5 pt-8 relative mt-3 sm:mt-0">
          
          {/* Badge Header positioned cleanly on top border */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-[#081838] text-white text-[11px] sm:text-xs font-black tracking-widest uppercase px-6 py-2 rounded-full shadow-lg border border-slate-700 whitespace-nowrap">
              CURRENT YOU
            </div>
          </div>

          {/* List Items */}
          <div className="space-y-3.5 pt-1">
            
            {/* 1. Limited Opportunities */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow">
                <User className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-slate-900 text-sm">Limited Opportunities</span>
                <span className="text-slate-500 font-medium">Growth feels out of reach.</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-slate-100" />

            {/* 2. Average Salary */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow">
                <IndianRupee className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-slate-900 text-sm">Average Salary</span>
                <span className="font-extrabold text-amber-700 text-xs bg-amber-100/90 border border-amber-300/80 px-2 py-0.5 rounded mt-0.5 inline-block w-fit shadow-xs">
                  ₹20,000 – ₹30,000 <span className="font-normal text-slate-600">/ Month</span>
                </span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-slate-100" />

            {/* 3. No Promotion */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow">
                <BarChart2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-slate-900 text-sm">No Promotion</span>
                <span className="text-slate-500 font-medium">Career Growth Stagnant</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-slate-100" />

            {/* 4. High Competition */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-slate-900 text-sm">High Competition</span>
                <span className="text-slate-500 font-medium">Standing in the Crowd</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-slate-100" />

            {/* 5. Uncertain Future */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow">
                <HelpCircle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-slate-900 text-sm">Uncertain Future</span>
                <span className="text-slate-500 font-medium">Lack of Job Security</span>
              </div>
            </div>

          </div>
        </div>


        {/* MIDDLE COLUMN: COMPLETE YOUR ONLINE DEGREE ROADMAP HUB (5 of 12 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center py-2">
          
          {/* Header Title with Flanking Gold Lines */}
          <div className="flex items-center gap-3 mb-5 w-full justify-center">
            <div className="h-[2px] w-12 bg-amber-400 rounded-full hidden sm:block" />
            <h3 className="font-sans font-black text-xs sm:text-sm tracking-widest text-[#081838] uppercase text-center">
              COMPLETE YOUR ONLINE DEGREE
            </h3>
            <div className="h-[2px] w-12 bg-amber-400 rounded-full hidden sm:block" />
          </div>

          {/* Node Map Container */}
          <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 items-center">
            
            {/* Center Glowing Graduation Cap Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden sm:flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-2xl shadow-amber-500/50 gold-glow">
                <div className="w-full h-full rounded-full bg-[#081838] border border-amber-300/60 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-8 h-8 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                </div>
              </div>
            </div>

            {/* LEFT INPUT NODES (5 Pills) */}
            <div className="space-y-2 z-10">
              
              <div className="bg-white/95 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Upgrade Qualification')}
              >
                <div className="w-6 h-6 rounded-full bg-[#081838] text-amber-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">Upgrade Your Qualification</span>
              </div>

              <div className="bg-white/95 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Gain In-Demand Skills')}
              >
                <div className="w-6 h-6 rounded-full bg-[#081838] text-amber-400 flex items-center justify-center shrink-0">
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">Gain In-Demand Skills</span>
              </div>

              <div className="bg-white/95 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Industry-Relevant Learning')}
              >
                <div className="w-6 h-6 rounded-full bg-[#081838] text-amber-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-3 h-3" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">Industry-Relevant Learning</span>
              </div>

              <div className="bg-white/95 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Build Confidence')}
              >
                <div className="w-6 h-6 rounded-full bg-[#081838] text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">Build Confidence & Expertise</span>
              </div>

              <div className="bg-white/95 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Better Exposure')}
              >
                <div className="w-6 h-6 rounded-full bg-[#081838] text-amber-400 flex items-center justify-center shrink-0">
                  <Network className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight">Better Exposure & Network</span>
              </div>

            </div>

            {/* RIGHT OUTPUT NODES (5 Pills with Arrows) */}
            <div className="space-y-2 z-10">
              
              <div className="bg-gradient-to-r from-amber-50/90 to-white/90 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center justify-between gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('More Job Opportunities')}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                    <Briefcase className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">More Job Opportunities</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              </div>

              <div className="bg-gradient-to-r from-amber-50/90 to-white/90 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center justify-between gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Higher Salary Potential')}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                    <IndianRupee className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">Higher Salary Potential</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              </div>

              <div className="bg-gradient-to-r from-amber-50/90 to-white/90 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center justify-between gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Faster Career Growth')}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                    <Rocket className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">Faster Career Growth</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              </div>

              <div className="bg-gradient-to-r from-amber-50/90 to-white/90 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center justify-between gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Leadership Responsibilities')}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">Leadership Responsibilities</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              </div>

              <div className="bg-gradient-to-r from-amber-50/90 to-white/90 border border-amber-300/80 rounded-full py-1.5 px-3 shadow-md flex items-center justify-between gap-2 hover:border-amber-500 transition-colors cursor-pointer" 
              //onClick={() => onOpenCounselling('Work-Life Balance')}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                    <Scale className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">Work-Life Balance</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT CARD: FUTURE YOU (4 of 12 cols) */}
        <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-2xl border border-amber-300/80 shadow-xl p-5 pt-8 relative mt-3 sm:mt-0">
          
          {/* Badge Header positioned cleanly on top border */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="gold-btn-gradient text-white text-[11px] sm:text-xs font-black tracking-widest uppercase px-6 py-2 rounded-full shadow-lg border border-amber-300/60 whitespace-nowrap">
              FUTURE YOU
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
            
            {/* Left Content List (7 of 12 cols) */}
            <div className="sm:col-span-7 space-y-3 z-10">
              
              {/* 1. Limitless Opportunities */}
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 shadow">
                  <Trophy className="w-3.5 h-3.5 fill-current text-slate-900" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">Limitless Opportunities</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100" />

              {/* 2. Higher Salary */}
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 shadow font-black">
                  <IndianRupee className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-slate-900 text-xs">Higher Salary</span>
                  <span className="font-extrabold text-amber-700 text-xs sm:text-sm">
                    ₹60,000 – ₹1,50,000+ <span className="font-normal text-slate-600 text-[10px]">/ Month</span>
                  </span>
                  <span className="text-[10px] text-slate-500">Based on skills, role &amp; experience</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100" />

              {/* 3. Better Roles */}
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 shadow">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-slate-900 text-xs">Better Roles</span>
                  <span className="text-[10px] text-slate-600 font-medium">
                    Manager | Analyst | Consultant Specialist | Leadership Roles
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100" />

              {/* 4. Career Growth */}
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 shadow">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-slate-900 text-xs">Career Growth</span>
                  <span className="text-[10px] text-slate-600 font-medium">
                    Faster Promotions Professional Growth
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100" />

              {/* 5. Secure Future */}
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shrink-0 shadow">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="font-bold text-slate-900 text-xs">Secure Future</span>
                  <span className="text-[10px] text-slate-600 font-medium">
                    Job Security Long-term Stability
                  </span>
                </div>
              </div>

            </div>

            {/* Right Portrait Photo Overlay (5 of 12 cols) */}
            <div className="sm:col-span-5 relative h-full min-h-[200px] flex items-end justify-center mt-2 sm:mt-0">
              <img
                src={futureYouPortraitImg.src}
                alt="Future Successful Executive Professional"
                className="w-52 h-full max-h-62 object-cover object-top rounded-xl border border-amber-300/40 shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM ROW 1: IN-DEMAND CAREERS AFTER YOUR DEGREE */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-amber-200/90 p-4 sm:p-5 shadow-lg mb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Left Title Badge */}
          <div className="flex items-center gap-3 shrink-0 lg:pr-4 lg:border-r border-slate-200 w-full lg:w-auto">
            <div className="w-12 h-12 rounded-full bg-[#081838] text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-display font-bold text-[#081838] text-base leading-tight">
                In-Demand Careers
              </h4>
              <span className="text-slate-600 text-xs font-semibold">After Your Degree</span>
            </div>
          </div>

          {/* 6 Career Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 w-full">
            {/* 4. Healthcare Management */}
            <div className="bg-[#F8FAF9] border border-slate-200 rounded-xl p-2.5 text-center flex flex-col items-center justify-between space-y-1.5 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                <Settings className="w-3.5 h-3.5 text-amber-600" />
                <span className="leading-tight">Healthcare Management</span>
              </div>
              <span className="bg-amber-100/90 text-amber-800 border border-amber-300/80 font-black text-[11px] px-2 py-0.5 rounded-full w-full">
                ₹3 LPA – ₹35 LPA
              </span>
            </div>
            
            {/* 1. Business Development Manager */}
            <div className="bg-[#F8FAF9] border border-slate-200 rounded-xl p-2.5 text-center flex flex-col items-center justify-between space-y-1.5 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                <span className="leading-tight">Business Dev Manager</span>
              </div>
              <span className="bg-amber-100/90 text-amber-800 border border-amber-300/80 font-black text-[11px] px-2 py-0.5 rounded-full w-full">
                ₹6 LPA – ₹12 LPA
              </span>
            </div>

            {/* 2. HR Manager */}
            <div className="bg-[#F8FAF9] border border-slate-200 rounded-xl p-2.5 text-center flex flex-col items-center justify-between space-y-1.5 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span className="leading-tight">HR Manager</span>
              </div>
              <span className="bg-amber-100/90 text-amber-800 border border-amber-300/80 font-black text-[11px] px-2 py-0.5 rounded-full w-full">
                ₹5 LPA – ₹10 LPA
              </span>
            </div>

            {/* 3. Marketing Manager */}
            <div className="bg-[#F8FAF9] border border-slate-200 rounded-xl p-2.5 text-center flex flex-col items-center justify-between space-y-1.5 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                <Megaphone className="w-3.5 h-3.5 text-amber-600" />
                <span className="leading-tight">Marketing Manager</span>
              </div>
              <span className="bg-amber-100/90 text-amber-800 border border-amber-300/80 font-black text-[11px] px-2 py-0.5 rounded-full w-full">
                ₹6 LPA – ₹14 LPA
              </span>
            </div>

            

            {/* 5. Data Analyst */}
            <div className="bg-[#F8FAF9] border border-slate-200 rounded-xl p-2.5 text-center flex flex-col items-center justify-between space-y-1.5 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                <PieChart className="w-3.5 h-3.5 text-amber-600" />
                <span className="leading-tight">Data Analyst</span>
              </div>
              <span className="bg-amber-100/90 text-amber-800 border border-amber-300/80 font-black text-[11px] px-2 py-0.5 rounded-full w-full">
                ₹5 LPA – ₹11 LPA
              </span>
            </div>

            {/* 6. Financial Analyst */}
            <div className="bg-[#F8FAF9] border border-slate-200 rounded-xl p-2.5 text-center flex flex-col items-center justify-between space-y-1.5 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-800">
                <IndianRupee className="w-3.5 h-3.5 text-amber-600" />
                <span className="leading-tight">Financial Analyst</span>
              </div>
              <span className="bg-amber-100/90 text-amber-800 border border-amber-300/80 font-black text-[11px] px-2 py-0.5 rounded-full w-full">
                ₹5 LPA – ₹12 LPA
              </span>
            </div>

          </div>

        </div>

        {/* Disclaimer Text */}
        <p className="text-[11px] text-slate-500 text-center font-medium italic">
          *Salary range is indicative and may vary based on experience, skills, industry and location.
        </p>
      </div>


      {/* BOTTOM ROW 2: DARK CALLOUT BANNER WITH TARGET ICON */}
      <div className="bg-gradient-to-r from-[#030E26] via-[#081838] to-[#030E26] text-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-amber-400/40 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left Bullseye / Target Icon & Headline */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="relative w-14 h-14 rounded-full border-2 border-amber-400/60 bg-[#061531] flex items-center justify-center shrink-0 shadow-xl">
            <div className="w-10 h-10 rounded-full border border-amber-300/50 flex items-center justify-center bg-amber-500/20 text-amber-300">
              <Target className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col font-sans">
            <h4 className="text-white font-extrabold text-base sm:text-lg leading-snug">
              Invest in your education today.
            </h4>
            <span className="gold-gradient-text font-serif-display font-semibold text-lg sm:text-xl">
              Reap the rewards for years to come.
            </span>
          </div>
        </div>

        {/* Middle Feature Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200 border-t lg:border-t-0 lg:border-l border-slate-700/80 pt-4 lg:pt-0 lg:pl-6">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold">Expert Career Counselling</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold">Choose from Top Universities</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold">Hassle-free Admission</span>
          </div> */}
        </div>

        {/* Right CTA Gold Button */}
        <button
          onClick={() => router.push('/contact')}
          className="gold-btn-gradient text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-xl shadow-amber-950/50 hover:shadow-amber-500/25 flex items-center gap-3 transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>Get Free Counselling</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>

      </div>

    </section>
  );
};

export default DegreeTransformationSection;
