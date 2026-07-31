// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   BadgeIndianRupee,
//   CalendarDays,
//   ChevronRight,
//   GraduationCap,
//   MonitorPlay,
//   ShieldCheck,
//   TrendingUp,
//   Users,
// } from "lucide-react";

// import { Container } from "@/components/ui/container";

// import { HeroFeatureCard } from "./hero-feature-card";
// import { HeroStats } from "./hero-stats";

// const programs = ["MBA", "MCA", "BBA", "BCA", "B.Com"];

// const partnerUniversities = [
//   "Amity University",
//   "Manipal University",
//   "Jain University",
//   "Alliance University",
//   "Sharda University",
// ];

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(244,189,22,0.045),transparent_32rem)]" />

//       <Container className="relative z-10 max-w-[1440px] px-0">
//         <div className="grid lg:min-h-[800px] lg:grid-cols-2">
//           <div className="relative z-20 flex items-start px-5 py-11 sm:px-8 sm:py-14 lg:px-12 lg:pb-28 lg:pt-11">
//             <div className="w-full max-w-[650px]">
//               <div className="inline-flex items-center gap-2 rounded-lg border border-brand-navy px-4 py-3 text-xs font-bold uppercase tracking-[0.035em] text-brand-navy sm:text-base">
//                 <ShieldCheck className="size-5" aria-hidden="true" />
//                 UGC & DEB Approved Programs
//               </div>

//               <h1 className="mt-6 font-sans text-[2.65rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-brand-navy-dark sm:text-[3.6rem] lg:text-[3.55rem] xl:text-[4rem]">
//                 Your Dream Job
//                 <br />
//                 Doesn&apos;t Wait.
//                 <br />
//                 <span className="text-brand-gold-light">
//                   Neither Should Your Degree.
//                 </span>
//               </h1>

//               <div className="mt-2 h-[3px] w-[82%] rounded-full bg-gradient-to-r from-brand-gold-light via-brand-gold-light to-transparent" />

//               <p className="mt-5 max-w-[570px] text-base leading-7 text-[#17223a] sm:text-[17px] sm:leading-[1.55]">
//                 Earn a recognised online or distance degree from India&apos;s
//                 leading universities—without quitting your job, pausing your
//                 family life, or putting your ambitions on hold.
//               </p>

//               <p className="mt-6 text-base font-bold text-brand-navy sm:text-[17px]">
//                 For working professionals, freshers and career restarters.
//               </p>

//               <div className="mt-6 flex flex-col gap-4 sm:flex-row">
//                 <Link
//                   href="/contact"
//                   className="inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-lg bg-brand-gold-light px-6 text-base font-bold text-brand-navy-dark shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-brand-gold hover:shadow-brand-md sm:w-auto"
//                 >
//                   Get Free Career Counselling

//                   <span className="flex size-7 items-center justify-center rounded-full bg-brand-navy text-white">
//                     <ChevronRight className="size-4" />
//                   </span>
//                 </Link>

//                 <Link
//                   href="/universities"
//                   className="inline-flex min-h-14 w-full items-center justify-center gap-8 rounded-lg border border-brand-navy bg-white px-6 text-base font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white sm:w-auto"
//                 >
//                   Explore Universities
//                   <ArrowRight className="size-5" />
//                 </Link>
//               </div>

//               <div className="mt-5 flex items-start gap-3 text-sm text-brand-navy sm:items-center sm:text-[15px]">
//                 <ShieldCheck
//                   className="mt-0.5 size-5 shrink-0 sm:mt-0"
//                   aria-hidden="true"
//                 />

//                 <p className="leading-6">
//                   Personalised guidance
//                   <span className="mx-2">•</span>
//                   No pressure
//                   <span className="mx-2">•</span>
//                   100% admission support
//                 </p>
//               </div>

//               <div className="mt-8 hidden sm:block">
//                 <p className="text-sm text-[#6b7486]">
//                   Admission guidance for leading universities across India
//                 </p>

//                 <div className="scrollbar-hidden mt-4 flex gap-4 overflow-x-auto pb-2">
//                   {partnerUniversities.map((university) => (
//                     <div
//                       key={university}
//                       className="flex shrink-0 items-center gap-2 border-r border-[#cfd3da] pr-4 font-display text-[10px] font-medium uppercase text-[#576071]"
//                     >
//                       <GraduationCap className="size-5" />
//                       {university}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative min-h-[620px] overflow-hidden lg:min-h-full">
//             <div className="absolute inset-0 hidden translate-x-[-7px] bg-brand-navy lg:block [clip-path:ellipse(90%_78%_at_91%_44%)]" />

//             <div className="absolute inset-0 overflow-hidden lg:[clip-path:ellipse(90%_78%_at_92%_44%)]">
//               <Image
//                 src="/images/hero2.png"
//                 alt="Working professional studying online"
//                 fill
//                 priority
//                 className="object-cover object-[56%_center] lg:object-[57%_center]"
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//             </div>

//             <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/20 via-transparent to-transparent" />

//             <div className="absolute right-4 top-12 hidden w-[190px] space-y-4 sm:block lg:right-5 lg:top-16">
//               <HeroFeatureCard
//                 icon={MonitorPlay}
//                 title="Flexible Online Learning"
//               />

//               <HeroFeatureCard
//                 icon={CalendarDays}
//                 title="Weekend Live Classes"
//               />

//               <HeroFeatureCard
//                 icon={BadgeIndianRupee}
//                 title="Zero-Cost EMI"
//               />

//               <HeroFeatureCard
//                 icon={Users}
//                 title="Career & Placement Support"
//               />
//             </div>

//             <div className="absolute bottom-[155px] right-5 hidden rounded-xl bg-brand-navy px-5 py-4 text-white shadow-brand-lg sm:block lg:right-16">
//               <div className="flex items-center gap-5">
//                 <div>
//                   <p className="text-sm font-medium text-white/80">
//                     Next Goal:
//                   </p>

//                   <p className="text-lg font-bold">Promotion</p>
//                 </div>

//                 <TrendingUp className="size-10 text-brand-gold-light" />
//               </div>
//             </div>

//             <div className="absolute bottom-5 left-1/2 w-[calc(100%-2rem)] max-w-[372px] -translate-x-1/2 rounded-xl border border-[#d9dde5] bg-white/95 p-5 shadow-brand-md backdrop-blur lg:bottom-[80px] lg:left-14 lg:translate-x-0">
//               <p className="font-bold text-brand-navy">
//                 Popular Programs
//               </p>

//               <div className="mt-3 flex flex-wrap gap-2">
//                 {programs.map((program) => (
//                   <Link
//                     key={program}
//                     href={`/courses?search=${encodeURIComponent(program)}`}
//                     className="rounded-lg border border-brand-navy/30 bg-white px-3 py-2 text-xs font-semibold text-brand-navy transition hover:border-brand-gold hover:bg-brand-gold-soft"
//                   >
//                     {program}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 href="/courses"
//                 className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-navy transition hover:text-brand-gold"
//               >
//                 View all 50+ programs
//                 <ArrowRight className="size-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Container>

//       <HeroStats />

//       <div
//         className="absolute bottom-0 left-0 right-0 -z-0 h-24 bg-gradient-to-b from-transparent to-blue-50/70"
//         aria-hidden="true"
//       />
//     </section>
//   );
// }


// import Image from "next/image";
// import {
//   Calendar,
//   Play,
//   ArrowRight,
//   TrendingUp,
//   GraduationCap,
// } from "lucide-react";
// import heroBg from "../../../public/images/hero-banner.png";

// interface HeroProps {
//   onOpenCounselling?: () => void;
//   onOpenHowItWorks?: () => void;
// }

// export function Hero({
//   onOpenCounselling,
//   onOpenHowItWorks,
// }: HeroProps = {}) {
//   return (
//     <section className="relative z-10  overflow-hidden " 
//     style={{backgroundImage: `url(${heroBg.src})` , backgroundPosition: "center" , backgroundSize: "cover" , backgroundRepeat: "no-repeat" , backgroundAttachment: "fixed"}}
//     >
//       {/* Background Glow */}
//       <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

//       <div className="relative pt-6 pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
//         {/* Left Content */}
//         <div className="lg:col-span-6 space-y-6 lg:pr-4">
//           <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.12] tracking-tight">
//             Your Dream Career <br />
//             Deserves the Right <br />
//             <span className="gold-gradient-text font-serif-display italic font-semibold">
//               Qualification.
//             </span>
//           </h1>

//           <p className="text-slate-300 text-base sm:text-lg font-normal max-w-xl leading-relaxed font-sans">
//             Earn a UGC-approved online or distance degree from India's top
//             universities—without quitting your job.
//             <span className="text-white font-medium">
//               {" "}
//               Flexible. Affordable. Future-ready.
//             </span>
//           </p>

//           <div className="pt-2 flex flex-wrap items-center gap-4">
//             <button
//               onClick={onOpenCounselling}
//               className="gold-btn-gradient text-white font-bold text-base px-7 py-3.5 rounded-full shadow-xl shadow-amber-950/50 hover:shadow-amber-500/25 flex items-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
//             >
//               <Calendar className="w-5 h-5 text-amber-100" />
//               <span>Book Free Counselling</span>
//               <ArrowRight className="w-5 h-5 text-amber-100" />
//             </button>

//             <button
//               onClick={onOpenHowItWorks}
//               className="bg-[#081836]/90 border border-slate-600/80 hover:border-amber-400/60 text-white font-semibold text-base px-6 py-3.5 rounded-full flex items-center gap-2.5 transition-all hover:bg-[#0E234A]"
//             >
//               <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
//                 <Play className="w-3 h-3 fill-current ml-0.5" />
//               </div>

//               <span>How It Works</span>
//             </button>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center">

//           {/* Background Circle */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-1">
//             <svg
//               className="w-[110%] h-[110%] text-amber-400/50 gold-glow"
//               viewBox="0 0 500 500"
//               fill="none"
//             >
//               <circle
//                 cx="250"
//                 cy="250"
//                 r="220"
//                 stroke="url(#goldGradient)"
//                 strokeWidth="2.5"
//                 strokeDasharray="8 4"
//               />

//               <circle
//                 cx="250"
//                 cy="250"
//                 r="230"
//                 stroke="url(#goldGradientSoft)"
//                 strokeWidth="1"
//                 opacity="0.4"
//               />

//               <defs>
//                 <linearGradient
//                   id="goldGradient"
//                   x1="0"
//                   y1="0"
//                   x2="500"
//                   y2="500"
//                 >
//                   <stop offset="0%" stopColor="#FDE047" />
//                   <stop offset="50%" stopColor="#D97706" />
//                   <stop offset="100%" stopColor="#78350F" />
//                 </linearGradient>

//                 <linearGradient
//                   id="goldGradientSoft"
//                   x1="0"
//                   y1="0"
//                   x2="500"
//                   y2="500"
//                 >
//                   <stop offset="0%" stopColor="#F59E0B" />
//                   <stop offset="100%" stopColor="#1E3A8A" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//           {/* Portrait */}
         

//           {/* Card 1 */}
//           <div className="absolute -top-4 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-200/80 flex items-start gap-3.5 z-20 transform hover:scale-105 transition-transform max-w-[240px]">
//             <div className="w-10 h-10 rounded-xl bg-[#081838] flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
//               <TrendingUp className="w-5 h-5" />
//             </div>

//             <div className="flex flex-col text-xs leading-tight font-sans">
//               <span className="text-slate-500 font-medium">
//                 Better Qualification
//               </span>

//               <span className="text-slate-800 font-bold mt-0.5">
//                 Better Opportunities
//               </span>

//               <span className="text-amber-700 font-extrabold text-sm mt-1 gold-gradient-text">
//                 Better Future
//               </span>
//             </div>
//           </div>

//           {/* Arrow */}
//           <svg
//             className="absolute top-16 right-24 w-28 h-20 text-amber-300/60 pointer-events-none z-10 hidden sm:block"
//             viewBox="0 0 100 80"
//             fill="none"
//           >
//             <path
//               d="M10 70 C40 60, 60 40, 85 15"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeDasharray="4 4"
//             />

//             <path
//               d="M75 12 L88 12 L86 25"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>

//           {/* Card 2 */}
//           <div className="absolute -bottom-5 right-2 sm:bottom-4 sm:right-2 bg-[#071738]/90 backdrop-blur-md border border-amber-500/40 rounded-full px-5 py-3 shadow-2xl flex items-center gap-3.5 z-20">
//             <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
//               <GraduationCap className="w-5 h-5" />
//             </div>

//             <div className="flex flex-col text-left font-sans">
//               <span className="text-amber-400 font-extrabold text-lg leading-none">
//                 15,000+
//               </span>

//               <span className="text-slate-200 text-xs font-medium leading-snug">
//                 Students Guided
//                 <br className="hidden sm:inline" />
//                 Towards Success
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }


import { HeroStats } from "./hero-stats";
import HeroFeatureCard from "./hero-feature-card";
import PartnerUniversities from "./PartnerUniversities"
import CareerChallengesSection from "./CareerChallengesSection"
import DegreeTransformationSection from "./DegreeTransformationSection"

export function Hero() {
  return (
    <>
      {/* Hero Stats */}
      <HeroStats />

      {/* Hero Feature Card */}
      <HeroFeatureCard />

      <DegreeTransformationSection />
      <CareerChallengesSection />
        <PartnerUniversities/>
    </>
  );
}