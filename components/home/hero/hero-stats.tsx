// import {
//   BookOpen,
//   Building2,
//   MapPin,
//   ShieldCheck,
//   Users,
// } from "lucide-react";

// const stats = [
//   {
//     icon: Building2,
//     value: "20+",
//     title: "UGC-Approved",
//     subtitle: "Universities",
//   },
//   {
//     icon: BookOpen,
//     value: "50+",
//     title: "UG & PG",
//     subtitle: "Programs",
//   },
//   {
//     icon: Users,
//     value: "15,000+",
//     title: "Students",
//     subtitle: "Guided",
//   },
//   {
//     icon: MapPin,
//     value: "PAN India",
//     title: "Learning",
//     subtitle: "Network",
//   },
//   {
//     icon: ShieldCheck,
//     value: "",
//     title: "Guidance from",
//     subtitle: "Enquiry to enrolment",
//   },
// ];

// export function HeroStats() {
//   return (
//     <div className="relative z-30 mx-auto w-full max-w-[1440px] px-4 pb-7 sm:px-8 lg:-mt-[58px] lg:px-12">
//       <div className="rounded-2xl border border-[#e2e5ea] bg-white/95 p-4 shadow-[0_10px_25px_rgba(3,27,73,0.14)] backdrop-blur sm:px-7 sm:py-5">
//         <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={`${stat.title}-${stat.subtitle}`}
//                 className={cnStat(index)}
//               >
//                 <span className="flex size-12 shrink-0 items-center justify-center text-brand-navy sm:size-16">
//                   <Icon
//                     className="size-9 sm:size-11"
//                     strokeWidth={1.7}
//                     aria-hidden="true"
//                   />
//                 </span>

//                 <div>
//                   {stat.value && (
//                     <p className="text-xl font-extrabold leading-none text-brand-navy sm:text-[2rem]">
//                       {stat.value}
//                     </p>
//                   )}

//                   <p className="mt-1 text-sm font-bold text-brand-navy">
//                     {stat.title}
//                   </p>

//                   <p className="text-xs leading-5 text-muted-foreground">
//                     {stat.subtitle}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function cnStat(index: number) {
//   return [
//     "flex items-center gap-3 rounded-xl px-2 py-3 sm:px-4 lg:justify-center",
//     index !== stats.length - 1
//       ? "lg:border-r lg:border-brand-border"
//       : "",
//   ]
//     .filter(Boolean)
//     .join(" ");
// }






import Image from "next/image";
import {
  Calendar,
  Play,
  ArrowRight,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import heroBg from "../../../public/images/hero-banner.png";

interface HeroStatsProps {
  onOpenCounselling?: () => void;
  onOpenHowItWorks?: () => void;
}

export function HeroStats({
  onOpenCounselling,
  onOpenHowItWorks,
}: HeroStatsProps = {}) {
  return (
    <section className="relative z-10  overflow-hidden " 
    style={{backgroundImage: `url(${heroBg.src})` , backgroundPosition: "center" , backgroundSize: "cover" , backgroundRepeat: "no-repeat", minHeight: "100vh" }}
    >
      {/* Background Glow */}
      <div className="absolute top-10 right-0  bg-gradient-to-br from-amber-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative pt-6 pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-6 lg:pr-4 lg:pt-20">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.12] tracking-tight">
            Your Dream Career <br />
            Deserves the Right <br />
            <span className="gold-gradient-text font-serif-display italic font-semibold">
              Qualification.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-normal max-w-xl leading-relaxed font-sans">
            Earn a UGC-approved online or distance degree from India's top
            universities—without quitting your job.
            <span className="text-white font-medium">
              {" "}
              Flexible. Affordable. Future-ready.
            </span>
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenCounselling}
              className="gold-btn-gradient text-white font-bold text-base px-7 py-3.5 rounded-full shadow-xl shadow-amber-950/50 hover:shadow-amber-500/25 flex items-center gap-3 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-5 h-5 text-amber-100" />
              <span>Book Free Counselling</span>
              <ArrowRight className="w-5 h-5 text-amber-100" />
            </button>

            <button
              onClick={onOpenHowItWorks}
              className="bg-[#081836]/90 border border-slate-600/80 hover:border-amber-400/60 text-white font-semibold text-base px-6 py-3.5 rounded-full flex items-center gap-2.5 transition-all hover:bg-[#0E234A]"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>

              <span>How It Works</span>
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center">

          {/* Background Circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-1">
            <svg
              className="w-[110%] h-[110%] text-amber-400/50 gold-glow"
              viewBox="0 0 500 500"
              fill="none"
            >
              <circle
                cx="250"
                cy="250"
                r="220"
                stroke="url(#goldGradient)"
                strokeWidth="2.5"
                strokeDasharray="8 4"
              />

              <circle
                cx="250"
                cy="250"
                r="230"
                stroke="url(#goldGradientSoft)"
                strokeWidth="1"
                opacity="0.4"
              />

              <defs>
                <linearGradient
                  id="goldGradient"
                  x1="0"
                  y1="0"
                  x2="500"
                  y2="500"
                >
                  <stop offset="0%" stopColor="#FDE047" />
                  <stop offset="50%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>

                <linearGradient
                  id="goldGradientSoft"
                  x1="0"
                  y1="0"
                  x2="500"
                  y2="500"
                >
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Portrait */}
         

          {/* Card 1 */}
          <div className="absolute -top-4 -right-2 sm:top-4 sm:right-0 bg-white/95 backdrop-blur-md text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-200/80 flex items-start gap-3.5 z-20 transform hover:scale-105 transition-transform max-w-[240px]">
            <div className="w-10 h-10 rounded-xl bg-[#081838] flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
              <TrendingUp className="w-5 h-5" />
            </div>

            <div className="flex flex-col text-xs leading-tight font-sans">
              <span className="text-slate-500 font-medium">
                Better Qualification
              </span>

              <span className="text-slate-800 font-bold mt-0.5">
                Better Opportunities
              </span>

              <span className="text-amber-700 font-extrabold text-sm mt-1 gold-gradient-text">
                Better Future
              </span>
            </div>
          </div>

          {/* Arrow */}
          <svg
            className="absolute top-16 right-24 w-28 h-20 text-amber-300/60 pointer-events-none z-10 hidden sm:block"
            viewBox="0 0 100 80"
            fill="none"
          >
            <path
              d="M10 70 C40 60, 60 40, 85 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            <path
              d="M75 12 L88 12 L86 25"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Card 2 */}
          <div className="absolute -bottom-5 right-2 sm:bottom-4 sm:right-2 bg-[#071738]/90 backdrop-blur-md border border-amber-500/40 rounded-full px-5 py-3 shadow-2xl flex items-center gap-3.5 z-20">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>

            <div className="flex flex-col text-left font-sans">
              <span className="text-amber-400 font-extrabold text-lg leading-none">
                15,000+
              </span>

              <span className="text-slate-200 text-xs font-medium leading-snug">
                Students Guided
                <br className="hidden sm:inline" />
                Towards Success
              </span>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}