"use client";

//import { PARTNER_UNIVERSITIES } from "@/data/universities";
import amity from "../../../public/logos/amity.png"
import manipal from "../../../public/logos/manipal.webp"
import jain from "../../../public/logos/jain.webp"
import alliance from "../../../public/logos/alliance.png"
import gla from "../../../public/logos/gla.webp"
import dypatil from "../../../public/logos/dypatil.avif"
import sharda from "../../../public/logos/sharda.png"
import chandigarh from "../../../public/logos/chandigarh.webp"
import { StaticImageData } from "next/image";

interface University {
  id: string;
  name: string;
  image:StaticImageData;
  location: string;
  accreditation: string;
  badgeBg: string;
  logoBg: string;
  popularCourses: string[];
  ranking: string;
  mode: string;
  logoText: string;
  accentColor: string;
}
const PARTNER_UNIVERSITIES: University[] = [
  {
    id: 'amity',
    name: 'AMITY UNIVERSITY',
    image:amity,
    location: 'Noida / Online',
    accreditation: 'UGC-DEB Approved | NAAC A+',
    badgeBg: 'bg-indigo-900',
    logoBg: 'bg-amber-500',
    logoText: 'AMITY',
    accentColor: '#1E3A8A',
    ranking: 'Top 10 Private University',
    mode: '100% Online & Distance',
    popularCourses: ['Online MBA', 'Online MCA', 'BBA', 'BCA', 'M.Com'],
  },
  {
    id: 'manipal',
    name: 'MANIPAL UNIVERSITY JAIPUR',
    image:manipal,
    location: 'Jaipur, Rajasthan',
    accreditation: 'UGC-DEB Approved | NAAC A+',
    badgeBg: 'bg-orange-800',
    logoBg: 'bg-orange-500',
    logoText: 'MANIPAL',
    accentColor: '#C2410C',
    ranking: 'NIRF Ranked #25',
    mode: 'Online & Distance Learning',
    popularCourses: ['Online MBA', 'Online MCA', 'B.Com', 'BBA', 'M.Sc Data Science'],
  },
  {
    id: 'jain',
    name: 'JAIN DEEMED-TO-BE UNIVERSITY',
    image:jain,
    location: 'Bengaluru, Karnataka',
    accreditation: 'UGC-DEB Approved | NAAC A++',
    badgeBg: 'bg-slate-900',
    logoBg: 'bg-blue-600',
    logoText: 'JAIN',
    accentColor: '#1E40AF',
    ranking: 'Category-1 Deemed University',
    mode: 'Flexible Distance Mode',
    popularCourses: ['MBA Dual Specialization', 'MCA AI & ML', 'BBA International Finance', 'BCA Coding'],
  },
  {
    id: 'alliance',
    name: 'ALLIANCE UNIVERSITY',
    image:alliance,
    location: 'Bengaluru, Karnataka',
    accreditation: 'UGC Approved | AACSB Member',
    badgeBg: 'bg-red-950',
    logoBg: 'bg-red-700',
    logoText: 'ALLIANCE',
    accentColor: '#B91C1C',
    ranking: 'Top Business School in South India',
    mode: 'Blended & Online',
    popularCourses: ['Executive MBA', 'BBA Business Analytics', 'MBA HR & Finance'],
  },
  {
    id: 'gla',
    name: 'GLA UNIVERSITY MATHURA',
    image:gla,
    location: 'Mathura, UP',
    accreditation: 'UGC-DEB Approved | NAAC A+',
    badgeBg: 'bg-emerald-950',
    logoBg: 'bg-emerald-600',
    logoText: 'GLA',
    accentColor: '#047857',
    ranking: 'Leading Tech & Mgmt Institution',
    mode: 'Distance & Online Education',
    popularCourses: ['MBA Marketing', 'MCA Cloud Computing', 'BBA', 'B.Com General'],
  },
  {
    id: 'dypatil',
    name: 'DY PATIL UNIVERSITY',
    image:dypatil,
    location: 'Navi Mumbai, Maharashtra',
    accreditation: 'UGC-DEB Approved | NAAC A++',
    badgeBg: 'bg-rose-950',
    logoBg: 'bg-rose-800',
    logoText: 'DY PATIL',
    accentColor: '#9F1239',
    ranking: 'Top Medical & Management Varsity',
    mode: 'Interactive Online LMS',
    popularCourses: ['MBA Hospital Mgmt', 'MBA Healthcare', 'BBA', 'Diploma in Hospital Admin'],
  },
  {
    id: 'sharda',
    name: 'SHARDA UNIVERSITY',
    image:sharda,
    location: 'Greater Noida, UP',
    accreditation: 'UGC Approved | NAAC A+',
    badgeBg: 'bg-sky-950',
    logoBg: 'bg-sky-600',
    logoText: 'SHARDA',
    accentColor: '#0369A1',
    ranking: 'Global Academic Exposure',
    mode: 'Distance & Live Sessions',
    popularCourses: ['Online MBA', 'BBA', 'MA English', 'MA Economics', 'M.Com'],
  },
  {
    id: 'chandigarh',
    name: 'CHANDIGARH UNIVERSITY',
    image:chandigarh,
    location: 'Mohali, Punjab',
    accreditation: 'UGC-DEB Approved | NAAC A+',
    badgeBg: 'bg-red-900',
    logoBg: 'bg-red-600',
    logoText: 'CU ONLINE',
    accentColor: '#DC2626',
    ranking: 'QS Asia Ranked #1 Private Varsity',
    mode: 'Self-Paced Online',
    popularCourses: ['MBA Logistics', 'MCA Full Stack', 'BBA Fintech', 'MA Journalism'],
  },
];

export default function PartnerUniversities() {
  return (
    <section className="relative z-10 pt-4 pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-amber-500/70" />

        <h2 className="text-amber-300 font-bold text-sm sm:text-base tracking-wider uppercase text-center">
          Our Partner Universities
        </h2>

        <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-amber-500/70" />
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-stretch">
        {PARTNER_UNIVERSITIES.slice(0, 7).map((univ) => (
          <div
            key={univ.id}
            className="bg-white text-slate-900 rounded-xl p-3 sm:p-3.5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-center justify-center gap-2 border border-slate-200/80 group h-full"
          >
            {/* Logo */}
            <div
              //className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${univ.logoBg} flex items-center justify-center text-white shrink-0 shadow-sm font-black text-[10px] tracking-tight group-hover:scale-105 transition-transform`}
            >
              <img src={univ.image.src} alt={univ.name} className="h-full w-auto" />
            </div>

            {/* University Name */}
            {/* <div className="flex flex-col text-center sm:text-left leading-tight">
              <span className="font-extrabold text-[11px] sm:text-[12px] text-slate-900 tracking-tight uppercase line-clamp-2">
                {univ.name}
              </span>
            </div> */}
          </div>
        ))}

        {/* Many More Card */}
        <div className="bg-white/90 text-slate-900 rounded-xl p-3 sm:p-3.5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center border border-amber-400/60 h-full bg-gradient-to-br from-white to-amber-50/50">
          <span className="font-extrabold text-xs text-amber-900 text-center leading-tight">
            &amp; Many
            <br />
            More
          </span>
        </div>
      </div>
    </section>
  );
}