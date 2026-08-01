"use client";

import Image from "next/image";
import {
  AlertCircle,
  Briefcase,
  Clock,
  TrendingUp,
  RotateCcw,
  GraduationCap,
  ShieldCheck,
  Users,
  Star,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

import cardNoPromotionImg from "../../../public/images/card_no_promotion_1785318727639.jpg";
import cardBusyWorkImg from "@/public/images/card_busy_work_1785318747176.jpg";
import cardBetterSalaryImg from "@/public/images/card_better_salary_1785318760850.jpg";
import cardCareerGapImg from "@/public/images/card_career_gap_1785318776597.jpg";
import cardDegreeCompletionImg from "@/public/images/card_degree_completion_1785318790482.jpg";
import cardGovtJobImg from "@/public/images/card_govt_job_1785318808387.jpg";

// interface CareerChallengesSectionProps {
//   onOpenCounselling: (reason?: string) => void;
//   onCallClick: () => void;
// }

export function CareerChallengesSection() {
  const CHALLENGE_CARDS = [
    {
      id: 'no-promotion',
      title: 'No Promotion in Sight?',
      description: 'A better qualification can open doors to higher positions.',
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      image: cardNoPromotionImg,
      alt: 'Professional thinking about career promotion',
    },
    {
      id: 'busy-work',
      title: 'Too Busy with Work?',
      description: 'Flexible online classes that fit around your schedule.',
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      image: cardBusyWorkImg,
      alt: 'Professional working on laptop with busy schedule',
    },
    {
      id: 'better-salary',
      title: 'Want a Better Salary?',
      description: 'Upgrade your skills and earn what you truly deserve.',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      image: cardBetterSalaryImg,
      alt: 'Professional celebrating higher salary',
    },
    {
      id: 'career-gap',
      title: 'Career Break or Gap?',
      description: 'Restart your career with the right degree and confidence.',
      icon: <RotateCcw className="w-5 h-5 text-amber-400" />,
      image: cardCareerGapImg,
      alt: 'Female professional restarting career',
    },
    {
      id: 'degree-completion',
      title: "Didn't Complete Your Degree?",
      description: 'Complete your graduation and unlock new opportunities.',
      icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
      image: cardDegreeCompletionImg,
      alt: 'Graduation cap and gown student at university',
    },
    {
      id: 'govt-job',
      title: 'Need Govt. Job Eligibility?',
      description: 'UGC-approved degrees make you eligible for government exams.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      image: cardGovtJobImg,
      alt: 'Government building with Indian national flag',
    },
  ];

  return (
    <section className="relative z-10 py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#EFE7D8] text-slate-900 rounded-3xl shadow-2xl my-12 border border-amber-200/60 overflow-hidden">
      
      {/* Background Soft Gold Ambient Light & Flare */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/40 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-300/20 via-amber-100/10 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main Top Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        
        {/* Left Headline & Hero Stats Block (5 of 12 cols) */}
        <div className="lg:col-span-5 space-y-6 lg:pr-2">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-white/90 border border-amber-300/80 rounded-full px-4 py-1.5 shadow-sm">
            <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
              <AlertCircle className="w-3.5 h-3.5 fill-current text-white" />
            </div>
            <span className="text-[11px] sm:text-xs font-extrabold text-slate-800 tracking-wider uppercase font-sans">
              CHALLENGES TODAY. OPPORTUNITIES TOMORROW.
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-[#081838] leading-[1.1] tracking-tight">
            Is Something <br />
            Holding Back <br />
            <span className="gold-gradient-text font-serif-display font-semibold">
              Your Career?
            </span>
          </h2>

          {/* Accent Line */}
          <div className="flex items-center gap-1.5 pt-1">
            <div className="h-[3px] w-12 bg-[#081838] rounded-full" />
            <div className="h-[3px] w-8 bg-amber-500 rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans max-w-md">
            You’re not alone. Thousands of ambitious professionals face the same roadblocks. Let’s turn them into stepping stones.
          </p>

          {/* Dark Navy Hero Stats Card */}
          <div 
            //onClick={() => onOpenCounselling('Transformed Careers')}
            className="bg-gradient-to-r from-[#04122B] via-[#081A3C] to-[#04122B] text-white rounded-2xl p-5 shadow-xl border border-amber-400/40 relative overflow-hidden group cursor-pointer hover:border-amber-400 transition-all transform hover:-translate-y-0.5"
          >
            {/* Soft Gold Background Glow */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex items-center gap-4">
              {/* Gold Ring Star Icon */}
              <div className="relative w-16 h-16 rounded-full border-2 border-amber-400/60 bg-[#061531] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full border border-amber-300/40 flex items-center justify-center bg-amber-500/10 text-amber-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-1 w-5 h-5 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shadow">
                  <Star className="w-3 h-3 fill-current text-slate-900" />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col font-sans">
                <span className="text-amber-400 font-extrabold text-2xl sm:text-3xl leading-none font-serif-display">
                  15,000+
                </span>
                <span className="text-white font-bold text-sm sm:text-base leading-snug mt-1">
                  Students Transformed
                </span>
                <span className="text-slate-300 text-xs font-medium">
                  Their Careers with Us
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right 3x2 Grid of Challenge Cards (7 of 12 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CHALLENGE_CARDS.map((card) => (
            <div
              key={card.id}
              //onClick={() => onOpenCounselling(card.title)}
              className="bg-white rounded-2xl border border-amber-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              {/* Card Header & Content */}
              <div className="p-4 space-y-2">
                {/* Icon Badge */}
                <div className="w-11 h-11 rounded-full bg-[#081838] flex items-center justify-center shrink-0 shadow-md group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif-display text-lg font-bold text-[#081838] leading-snug group-hover:text-amber-700 transition-colors">
                  {card.title}
                </h3>

                {/* Gold Underline Accent */}
                <div className="w-6 h-[2px] bg-amber-400 rounded-full" />

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              {/* Bottom Card Photo */}
              <div className="relative h-32 sm:h-36 w-full overflow-hidden mt-2">
                <img
                  src={card.image.src}
                  alt={card.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Floating Origami Dotted Flight Line graphic */}
      <div className="relative flex justify-start pl-12 -mt-6 -mb-2 pointer-events-none hidden lg:block">
        <svg className="w-48 h-16 text-amber-500/60" viewBox="0 0 200 60" fill="none">
          <path d="M10 50 C 60 20, 120 50, 180 10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <polygon points="180,10 170,12 176,22" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom Floating Banner Bar */}
      <div className="bg-white/95 backdrop-blur-md border border-amber-300/80 rounded-2xl sm:rounded-full p-4 sm:px-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Phone / Chat Icon & Text */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full gold-btn-gradient text-white flex items-center justify-center shrink-0 shadow-lg">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#081838] font-bold text-sm sm:text-base font-sans">
              Every career challenge has a solution.
            </span>
            <span className="gold-gradient-text font-serif-display font-semibold text-lg sm:text-xl leading-tight">
              Let us help you find yours.
            </span>
          </div>
        </div>

        {/* Right Action Button */}
        <button
          //onClick={onCallClick}
          className="bg-[#081838] hover:bg-[#0E234A] text-white font-bold text-sm px-6 py-3.5 rounded-full flex items-center gap-3 shadow-xl shadow-slate-900/20 hover:shadow-amber-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 whitespace-nowrap"
        >
          <span>Talk to Our Experts</span>
          <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>

    </section>
  );
};

export default CareerChallengesSection;
