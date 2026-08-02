'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  title: string;
  program: string;
  quote: string;
  avatarUrl: string;
  profileImageUrl: string;
}

interface SuccessStoriesSectionProps {
  stories: SuccessStory[];
  stats: StatItem[];
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  stories,
  stats,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentStory = stories[currentIndex] || stories[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div
      id="success-stories-section"
      className="bg-[#FDFAEE] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border border-[#EAE3D3] shadow-xl relative overflow-hidden h-full"
    >
      <div>
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-serif-display text-[#0A1833] text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-wide">
            Success Stories
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1">
            Real people. Real growth.
          </p>
        </div>

        {/* Testimonial & Portrait Layout */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-8 my-2 sm:my-4">
          {/* Quote & Author Info (Left Column) */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <div
                className="text-amber-500 font-serif text-5xl sm:text-6xl leading-none select-none -mb-3"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="font-serif-display text-[#112044] text-base sm:text-lg lg:text-[19px] leading-relaxed mb-6 italic transition-all duration-300">
                {currentStory.quote}
              </p>
            </div>

            {/* Author Profile + Pagination Dots */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={currentStory.avatarUrl}
                  alt={currentStory.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/40 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80';
                  }}
                />
                <div>
                  <h4 className="text-[#0A1833] font-semibold text-sm sm:text-base leading-tight">
                    {currentStory.name}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                    {currentStory.title}
                  </p>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2 mt-6">
                {stories.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Show testimonial by ${story.name}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex
                        ? 'w-6 bg-amber-500'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Large Circular Portrait (Right Column) */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-slate-900/10 relative group">
              <img
                src={currentStory.profileImageUrl}
                alt={`${currentStory.name} - ${currentStory.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            {/* Next / Prev Story Switcher Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous success story"
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-600 hover:text-amber-600 shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 border border-slate-200/80"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next success story"
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-amber-600 shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95 border border-slate-200/80"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="bg-[#F4F0E3] rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#E9E1D1] mt-6 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-300/60">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${
                idx > 0 ? 'pt-3 sm:pt-0 sm:pl-2' : ''
              }`}
            >
              <div className="text-amber-600 font-bold text-xl sm:text-2xl lg:text-[28px] tracking-tight font-sans">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;