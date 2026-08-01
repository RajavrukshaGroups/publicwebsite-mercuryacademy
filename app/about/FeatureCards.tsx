import React from 'react';
import Image from 'next/image';
import { Users, GraduationCap, Building2 } from 'lucide-react';
import pic1 from "../../public/images/pic1.webp"
import pic2 from "../../public/images/pic2.webp"
import pic3 from "../../public/images/pic3.webp"

interface FeatureCardsProps {
  onOpenEnquiryModal: (defaultCourse?: string) => void;
}

export default function FeatureCards({
  onOpenEnquiryModal,
}: FeatureCardsProps) {
  return (
    <section id="explore-courses" className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 sm:space-y-8">
        {/* Card 1: Find the Right Course (Image Left, Content Right) */}
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Photo */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm aspect-[16/10] sm:aspect-[16/9] bg-gray-100 relative">
            <Image
              src={pic1}
              alt="Academic counselors and university ceremony recognition"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#faf5eb] border border-[#f0e3cd] flex items-center justify-center text-[#112143] mb-4 shadow-xs">
              <Users className="w-6 h-6 text-[#112143]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#112143]">
              Find the Right Course
            </h3>

            <div className="w-10 h-0.5 bg-[#d19e4a] my-3" />

            <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-6">
              Choosing the right online course and the best university matters. We help you decide
              with clarity.
            </p>

            <button
              type="button"
              onClick={() => onOpenEnquiryModal('Online MBA')}
              className="text-sm font-semibold text-[#d19e4a] hover:text-[#b37e2e] flex items-center gap-1 group cursor-pointer"
            >
              <span>Explore Top Courses</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Card 2: Tailored to You (Content Left, Image Right on desktop) */}
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-[#f1f5f9] p-4 sm:p-6 lg:p-8 flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#faf5eb] border border-[#f0e3cd] flex items-center justify-center text-[#112143] mb-4 shadow-xs">
              <GraduationCap className="w-6 h-6 text-[#112143]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#112143]">
              Tailored to You
            </h3>

            <div className="w-10 h-0.5 bg-[#d19e4a] my-3" />

            <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-6">
              We match you with suitable courses based on your work experience and interests to
              enhance your opportunities.
            </p>

            <button
              type="button"
              onClick={() => onOpenEnquiryModal('MCA / Executive Program')}
              className="text-sm font-semibold text-[#d19e4a] hover:text-[#b37e2e] flex items-center gap-1 group cursor-pointer"
            >
              <span>Get Customized Recommendation</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Photo */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm aspect-[16/10] sm:aspect-[16/9] bg-gray-100 relative">
            <Image
              src={pic2}
              alt="Batch of scholars celebrating university program graduation"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card 3: Reputed Universities (Image Left, Content Right) */}
        <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Photo */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm aspect-[16/10] sm:aspect-[16/9] bg-gray-100 relative">
            <Image
              src={pic3}
              alt="University campus outdoor community with palm trees"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#faf5eb] border border-[#f0e3cd] flex items-center justify-center text-[#112143] mb-4 shadow-xs">
              <Building2 className="w-6 h-6 text-[#112143]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#112143]">
              Reputed Universities
            </h3>

            <div className="w-10 h-0.5 bg-[#d19e4a] my-3" />

            <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-6">
              Best online degree programs and diploma courses from top-notch universities we are
              proud to be associated with.
            </p>

            <a
              href="#partner-universities"
              className="text-sm font-semibold text-[#d19e4a] hover:text-[#b37e2e] flex items-center gap-1 group"
            >
              <span>View All Associated Universities</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
