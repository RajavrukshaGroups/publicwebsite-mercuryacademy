'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FeatureIcon } from './FeatureIcon';
import Link from 'next/link';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseSectionProps {
  features: FeatureItem[];
  onOpenModal: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  features,
  onOpenModal,
}) => {


  return (
    <div
      id="why-choose-section"
      className="bg-[#0A1833] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden h-full"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Title & Accent Underline */}
        <div className="text-center mb-7 sm:mb-9">
          <h2 className="font-serif-display text-white text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-wide">
            Why Choose Mercury Academy?
          </h2>
          <div className="w-10 h-1 bg-amber-400 rounded-full mx-auto mt-2.5" />
        </div>

        {/* 6 Feature Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-8 sm:mb-10">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-[#10224A]/90 hover:bg-[#142C5F] transition-all duration-300 rounded-[20px] p-4 sm:p-5 flex flex-col items-center text-center border border-white/[0.07] hover:border-amber-400/30 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#193268]/90 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-110 group-hover:bg-amber-400/15 transition-all duration-300 shadow-inner">
                <FeatureIcon name={item.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-white font-semibold text-sm sm:text-[15px] mb-1 leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-[200px] sm:max-w-none">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button Centered at Bottom */}
      <div className="text-center pt-2">
        <Link
          href="/about"
          className="bg-gradient-to-r from-[#E79B20] to-[#F2A82D] hover:from-[#D98E17] hover:to-[#E59D24] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 inline-flex items-center gap-2.5 text-sm sm:text-base group cursor-pointer active:scale-[0.98]"
        >
          <span>Know More About Us</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default WhyChooseSection;