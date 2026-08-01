"use client";

import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

interface AboutIntroProps {
  onOpenEnquiryModal: () => void;
}

export default function AboutIntro({
  onOpenEnquiryModal,
}: AboutIntroProps) {
    return (
    <section
      id="about-intro"
      className="py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-[#b48334] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase">
            WE AT MERCURY ACADEMY
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112143] leading-[1.2]">
            Guiding You to the <br className="hidden sm:block" />
            Right Opportunities
          </h2>

          <div className="w-16 h-1 bg-[#d19e4a] rounded-full" />

          <div className="space-y-4 text-[#334155] text-base sm:text-lg leading-relaxed pt-2">
            <p>
              We at Mercury Academy understand that it is very important to find online courses and
              also to decide which would be the best university to study.
            </p>

            <p>
              We will help you in providing suitable courses based on your work experience and your
              interest, that enhances your opportunities.
            </p>

            <p>
              We offer the best online degree programs and diploma courses from the reputed
              universities. We are associated with the top-notch universities like Jain University,
              Manipal University, Yenepoya University, Andhra University, Bharathidasan University,
              MGR University, DY Patil University and many more.
            </p>
          </div>

          {/* Quick interactive action button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={onOpenEnquiryModal}
              className="inline-flex items-center gap-2 bg-white text-[#112143] font-semibold px-6 py-3 rounded-xl border border-[#e2e8f0] shadow-sm hover:border-[#d19e4a] hover:text-[#d19e4a] transition-all cursor-pointer"
            >
              <span>Explore Suitable Courses</span>
              <span className="text-[#d19e4a]">→</span>
            </button>
          </div>
        </div>

        {/* Right Image & Overlapping Card Column */}
        <div className="lg:col-span-6 relative">
          {/* Main Campus Photo */}
          <div className="rounded-3xl shadow-xl overflow-hidden border border-[#f1f5f9] relative aspect-[16/11] sm:aspect-[16/10] bg-[#f1f5f9]">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt="University campus building with warm evening sunlight"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Soft gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Overlapping Dark Navy Card */}
          <div className="relative -mt-12 sm:-mt-16 sm:ml-8 mx-3 z-20">
            <div className="bg-[#0f2146] text-white p-5 sm:p-6 rounded-2xl shadow-2xl max-w-sm border border-[#21376b] flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-[#d19e4a]/40 flex items-center justify-center text-[#d19e4a] flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base font-medium leading-snug text-[#f1f5f9]">
                Empowering learners to make informed decisions and achieve their academic goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
