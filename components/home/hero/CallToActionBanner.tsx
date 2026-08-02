'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import firstStepBgImg from "../../../public/images/first-step-bg-img.png"

interface CallToActionBannerProps {
  onOpenModal: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenModal }) => {
  return (
    <div
      id="cta-banner-section"
      className="bg-[#FAF7EE] rounded-[32px] sm:rounded-[36px] p-2.5 sm:p-3.5 lg:p-4 shadow-xl border border-[#E8E1D2] mt-6"
    >
      <div className="bg-[#0A1833] rounded-[24px] sm:rounded-[28px] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-inner"
      style={{backgroundImage:`url(${firstStepBgImg.src})`, backgroundSize:"cover", backgroundPosition:"center"}}

      >
        {/* Subtle decorative glowing background waves */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Left Content Area */}
        <div className="z-10 max-w-xl text-center md:text-left">
          <h2 className="font-serif-display text-white text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-wide leading-tight mb-2.5 sm:mb-3">
            Take the First Step Towards a Better Future
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-7">
            Book your free counselling session today and get expert guidance.
          </p>

          <Link
            //onClick={onOpenModal}
            href="/contact"
            className="bg-gradient-to-r from-[#E79B20] to-[#F2A82D] hover:from-[#D98E17] hover:to-[#E59D24] text-white font-semibold px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 inline-flex items-center gap-2.5 text-sm sm:text-base group cursor-pointer active:scale-[0.98]"
          >
            <span>Book Free Counselling</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right Graduation Cap, Diploma & Golden Light Arc Graphic */}
        <div className="z-10 relative flex items-center justify-center shrink-0 w-full md:w-auto mt-4 md:mt-0">
          {/* Graduation Cap & Degree Scroll Custom SVG Illustration */}
          <div className="relative w-72 sm:w-80 md:w-88 h-40 sm:h-44 flex items-center justify-center select-none">
            {/* Soft backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-28 bg-amber-500/15 rounded-full blur-2xl" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBanner;