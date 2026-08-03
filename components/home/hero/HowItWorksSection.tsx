'use client';

import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
}

const STEPS: StepItem[] = [
  {
    number: '1',
    title: 'Book Free Counselling',
    subtitle: 'Talk to our experts',
  },
  {
    number: '2',
    title: 'Choose Your Program',
    subtitle: 'We help you select the right course',
  },
  {
    number: '3',
    title: 'Easy Admission',
    subtitle: 'Quick & hassle-free enrollment',
  },
  {
    number: '4',
    title: 'Start Your Journey',
    subtitle: 'Learn, grow & achieve your goals',
  },
];

interface HowItWorksSectionProps {
  onOpenModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenModal }) => {
  return (
    <div
      id="how-it-works-section"
      className="bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-xl border border-[#E8E1D2] mt-6 relative overflow-hidden"
    >
      {/* Centered Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="font-serif-display text-[#0A1833] text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-wide">
          How It Works?
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-1.5">
          Your journey to success in 4 simple steps.
        </p>
      </div>

      {/* Main Responsive Grid: 4 Steps on Left + Dark Navy Box on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* Left Side: 4 Steps with Connecting Arrows */}
        <div className="lg:col-span-8 xl:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-4 relative">
            {STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center relative group px-2"
              >
                {/* Step Number Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A1833] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-md group-hover:scale-105 group-hover:bg-[#142C5F] transition-all duration-300 mb-4 z-10">
                  {step.number}
                </div>

                {/* Connecting Arrow (between steps on Desktop/Tablet) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden xl:flex absolute top-6 -right-4 translate-x-1/2 items-center justify-center z-0">
                    <div className="w-10 flex items-center justify-center text-amber-500/70">
                      <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                )}

                {/* Step Title & Subtitle */}
                <h3 className="text-[#0A1833] font-bold text-sm sm:text-base leading-snug mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[170px] sm:max-w-[180px]">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Need Help Choosing? Dark Navy Card */}
        <div className="lg:col-span-4 xl:col-span-3 flex">
          <div className="w-full bg-[#0A1833] rounded-[24px] p-6 sm:p-7 text-left shadow-lg border border-white/10 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="font-serif-display text-white text-xl sm:text-2xl font-semibold mb-2 leading-tight">
                Need Help Choosing?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Our experts are here to guide you.
              </p>
            </div>

            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-[#E79B20] to-[#F2A82D] hover:from-[#D98E17] hover:to-[#E59D24] text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm group cursor-pointer active:scale-[0.98]"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;