"use client";

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Building2, Target } from 'lucide-react';
import BackgroundImg from "../../public/images/about-bg-banner.png"

interface HeroProps {
  onOpenEnquiryModal: () => void;
}

export default function HeroSection({ onOpenEnquiryModal }: HeroProps) {
  return (
    <section id="home" className="relative text-white overflow-hidden pt-10 sm:pt-14 pb-20 sm:pb-28 lg:pb-36 -mt-24.5  aspect-[16/13.5] md:aspect-[16/9]"

      style={{ backgroundImage: `url(${BackgroundImg.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Decorative subtle golden dot matrix top right */}
      <div className="absolute top-8 right-8 w-48 h-48 opacity-20 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#d19e4a]" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-19">
          {/* Left Column: Headline and Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* ABOUT MERCURY ACADEMY Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1b3161]/80 border border-[#c49852]/50 text-[#e4bd74] text-[10px] text-xs font-bold tracking-[0.18em] uppercase mb-6 shadow-sm">
              <span>ABOUT MERCURY ACADEMY</span>
            </div>

            {/* Serif Headline */}
            <h1 className="font-serif font-bold text-xl sm:text-xl lg:text-6xl leading-[1.12] sm:leading-[1.15] text-white">
              We Are Here to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbeaa6] via-[#deae5a] to-[#c78e38] italic">
                Shape Your Future
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-sm sm:text-lg lg:text-xl max-w-xl mt-4 sm:mt-6 leading-relaxed font-normal">
              Your trusted partner in finding the right online education and the best university for
              your goals.
            </p>

            {/* CTA button for mobile/tablet convenience */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 lg:hidden hidden md:block">
              <button
                type="button"
                onClick={onOpenEnquiryModal}
                className="bg-gradient-to-r from-[#d19e4a] to-[#b37e2e] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md"
              >
                Get Expert Advice
              </button>
            </div>

            {/* 3 Pillars Row */}
            <div className="w-full grid grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15">
              {/* Trusted Guidance */}
              <div
                onClick={onOpenEnquiryModal}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left cursor-pointer group hidden md:block"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-[#d19e4a]/40 flex items-center justify-center text-[#e2b568] group-hover:bg-[#d19e4a]/20 transition-colors flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-white leading-tight">
                    Trusted
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#d8b06a] sm:text-gray-300 font-medium">
                    Guidance
                  </div>
                </div>
              </div>

              {/* Top Universities */}
              <div
                onClick={onOpenEnquiryModal}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left cursor-pointer group hidden md:block"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-[#d19e4a]/40 flex items-center justify-center text-[#e2b568] group-hover:bg-[#d19e4a]/20 transition-colors flex-shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-white leading-tight">
                    Top
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#d8b06a] sm:text-gray-300 font-medium">
                    Universities
                  </div>
                </div>
              </div>

              {/* Career Focused */}
              <div
                onClick={onOpenEnquiryModal}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left cursor-pointer group hidden md:block"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-[#d19e4a]/40 flex items-center justify-center text-[#e2b568] group-hover:bg-[#d19e4a]/20 transition-colors flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-white leading-tight">
                    Career
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#d8b06a] sm:text-gray-300 font-medium">
                    Focused
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Graduation Students Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#d19e4a]/20 to-blue-500/10 rounded-3xl blur-2xl pointer-events-none" />

              {/* Graduation Scholars photo with rounded top frame */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Signature Golden & White Curved Bottom Wave Divider */}
      
    </section>
  );
}
