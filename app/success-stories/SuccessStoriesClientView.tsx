"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Quote, 
  TrendingUp, 
  Briefcase, 
  Award, 
  Users,
  PlayCircle
} from 'lucide-react';
import Image from 'next/image';

const successStories = [
  {
    id: 1,
    name: "Aarav Sharma",
    previousRole: "Software Engineer",
    currentRole: "Senior Data Scientist",
    company: "Google",
    hike: "120%",
    quote: "The Business Analytics program completely transformed my approach to data. The hands-on projects and expert faculty guidance were instrumental in my transition to Google.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    course: "MBA in Business Analytics"
  },
  {
    id: 2,
    name: "Priya Patel",
    previousRole: "HR Executive",
    currentRole: "HR Business Partner",
    company: "Amazon",
    hike: "85%",
    quote: "The comprehensive curriculum and peer learning network helped me develop a strategic mindset. I can now confidently drive HR initiatives at a global scale.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    course: "MBA in Human Resource Management"
  },
  {
    id: 3,
    name: "Rahul Desai",
    previousRole: "Marketing Associate",
    currentRole: "Digital Marketing Head",
    company: "Unilever",
    hike: "150%",
    quote: "I was looking for a program that offered flexibility without compromising on quality. The online MBA provided exactly that, along with incredible networking opportunities.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    course: "MBA in Marketing Management"
  },
  {
    id: 4,
    name: "Neha Gupta",
    previousRole: "Financial Analyst",
    currentRole: "Investment Banker",
    company: "Goldman Sachs",
    hike: "200%",
    quote: "The rigor of the finance modules prepared me for the demanding world of investment banking. The career support team was exceptional in helping me secure my dream role.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    course: "MBA in Financial Management"
  },
  {
    id: 5,
    name: "Vikram Singh",
    previousRole: "Operations Manager",
    currentRole: "Supply Chain Director",
    company: "Flipkart",
    hike: "90%",
    quote: "Learning from industry veterans gave me practical insights that I could immediately apply at work. The curriculum is perfectly aligned with current industry needs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    course: "MBA in Operations Management"
  },
  {
    id: 6,
    name: "Ananya Reddy",
    previousRole: "Business Development Exec",
    currentRole: "VP of Sales",
    company: "Salesforce",
    hike: "140%",
    quote: "The leadership skills I gained during the program were a game-changer. The interactive sessions and case studies provided a deep understanding of global business dynamics.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    course: "BBA in General Management"
  }
];

const metrics = [
  { icon: TrendingUp, value: "54%", label: "Average Salary Hike" },
  { icon: Users, value: "10,000+", label: "Alumni Network" },
  { icon: Briefcase, value: "500+", label: "Hiring Partners" },
  { icon: Award, value: "Top 1%", label: "Industry Placement" },
];

export default function SuccessStoriesClientView() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 selection:bg-amber-500 selection:text-white -mt-25">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER WITH NAVY BACKGROUND AND GOLD ACCENT                       */}
      {/* ========================================================================= */}
      <section className="relative bg-[#0d1c3a] text-white overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full lg:w-[60%] h-full bg-gradient-to-r from-[#0a1835] via-[#0d1c3a] to-[#112347] z-10"></div>
          
          <div className="hidden lg:block lg:w-[40%] h-full relative z-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay grayscale"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-950/40 to-[#0d1c3a]" />
            {/* Diagonal Golden Stripe */}
            <div
              className="absolute top-0 left-0 bottom-0 w-3 bg-amber-400 z-20 shadow-xl"
              style={{
                transform: 'skewX(-16deg)',
                transformOrigin: 'top left',
              }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl pt-12">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-xs uppercase tracking-wider mb-6">
              Alumni Success
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="block text-white">Real People.</span>
              <span className="block text-[#fdb813] drop-shadow-sm">Real Impact.</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed font-medium max-w-2xl">
              Discover how our graduates have transformed their careers, achieved their dreams, and become leaders in top global organizations.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#stories" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Read Their Stories
              </a>
              <Link href="/courses" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all">
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. IMPACT METRICS BAR                                                     */}
      {/* ========================================================================= */}
      <section className="relative z-20 -mt-10 lg:-mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div key={idx} className={`flex flex-col items-center text-center ${idx % 2 !== 0 ? 'md:border-l-0' : ''}`}>
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4 text-amber-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-serif text-3xl font-extrabold text-gray-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SUCCESS STORIES GRID                                                   */}
      {/* ========================================================================= */}
      <section id="stories" className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Inspiring Journeys
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Read how our flexible online learning model empowered these professionals to upskill without pausing their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div 
                key={story.id} 
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative background blur */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all duration-500"></div>

                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-amber-300 opacity-50" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8 flex-grow relative z-10 italic">
                  "{story.quote}"
                </p>

                {/* Separator */}
                <div className="h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-8"></div>

                {/* User Info & Stats */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-amber-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{story.name}</h4>
                    <p className="text-xs text-amber-600 font-bold tracking-wide uppercase mt-0.5">
                      {story.course}
                    </p>
                  </div>
                </div>

                {/* Career Transition Block */}
                <div className="mt-6 bg-[#f8fafc] rounded-2xl p-4 border border-gray-100 relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="text-xs font-semibold text-gray-500 truncate" title={story.previousRole}>
                      {story.previousRole}
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-500 shrink-0" />
                    <div className="text-xs font-bold text-blue-950 truncate" title={story.currentRole}>
                      {story.currentRole}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                    <div className="text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      {story.company}
                    </div>
                    <div className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {story.hike} Hike
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-bold text-sm transition-all group">
              <span>Load More Stories</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. VIDEO TESTIMONIAL BANNER (DARK)                                        */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#051329] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <span className="text-amber-400 font-bold text-xs tracking-wider uppercase mb-3 block">
                Video Testimonial
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                "The flexibility allowed me to study while leading a global team."
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Watch how Sarah leveraged the cutting-edge curriculum and industry connections to secure an executive role at a top-tier consulting firm.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <PlayCircle className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-bold text-white">Sarah Jenkins</div>
                  <div className="text-sm text-gray-400">VP Strategy, McKinsey</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/10 shadow-2xl group cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-950/40 group-hover:bg-blue-950/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:text-blue-950 transition-all shadow-xl group-hover:scale-110">
                    <PlayCircle className="w-10 h-10 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM CTA                                                             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to write your own success story?
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of successful alumni. Enroll in our industry-aligned programs and take the next big step in your career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/courses" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Explore Programs
            </Link>
            <button className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 font-bold text-sm transition-all">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
