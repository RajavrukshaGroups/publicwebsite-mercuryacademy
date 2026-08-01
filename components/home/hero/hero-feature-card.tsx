"use client";

import {
  Landmark,
  BookOpen,
  Users,
  Wallet,
} from "lucide-react";

export default function HeroFeatureCard() {
  return (
    <section className="relative z-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto my-6">
      <div className="bg-[#F3F5F9] text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-200/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-300/70">

          {/* Top Universities */}
          <div className="flex items-center gap-4 px-2 lg:px-6 pt-2 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow-md">
              <Landmark className="w-6 h-6 text-amber-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-amber-700 font-black text-2xl leading-none">
                20+
              </span>
              <span className="text-slate-900 font-bold text-sm sm:text-base leading-tight mt-0.5">
                Top Universities
              </span>
              <span className="text-slate-500 text-xs font-medium">
                UGC Approved
              </span>
            </div>
          </div>

          {/* UG & PG Programs */}
          <div className="flex items-center gap-4 px-2 lg:px-6 pt-4 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow-md">
              <BookOpen className="w-6 h-6 text-amber-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-amber-700 font-black text-2xl leading-none">
                50+
              </span>
              <span className="text-slate-900 font-bold text-sm sm:text-base leading-tight mt-0.5">
                UG & PG Programs
              </span>
              <span className="text-slate-500 text-xs font-medium">
                Across Domains
              </span>
            </div>
          </div>

          {/* Admission Support */}
          <div className="flex items-center gap-4 px-2 lg:px-6 pt-4 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow-md">
              <Users className="w-6 h-6 text-amber-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-amber-700 font-black text-2xl leading-none">
                100%
              </span>
              <span className="text-slate-900 font-bold text-sm sm:text-base leading-tight mt-0.5">
                Admission Support
              </span>
              <span className="text-slate-500 text-xs font-medium">
                End-to-End Guidance
              </span>
            </div>
          </div>

          {/* EMI & Scholarships */}
          <div className="flex items-center gap-4 px-2 lg:px-6 pt-4 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#081838] text-white flex items-center justify-center shrink-0 shadow-md">
              <Wallet className="w-6 h-6 text-amber-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-amber-700 font-extrabold text-base sm:text-lg leading-tight">
                Easy EMI &
              </span>
              <span className="text-amber-700 font-extrabold text-base sm:text-lg leading-tight">
                Scholarships
              </span>
              <span className="text-slate-500 text-xs font-medium">
                Education Made Affordable
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}