// components/layout/site-footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  BookOpen,
  User,
  Trophy,
  FileText,
  PhoneCall,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Headphones,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import { siteConfig } from "@/config/site.config";
import { footerNavigation } from "@/constants/navigation";
import LogoImg from "../../public/images/Logo.png";

/**
 * Mercury Academy Responsive Modern Footer Component
 * Built with Next.js & Tailwind CSS
 * Exactly matching the Mercury Academy design specification
 */
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  // Map footer navigation items with icons
  const exploreLinks = footerNavigation.explore.map((item) => {
    const iconMap: Record<string, any> = {
      Universities: Building2,
      Programs: BookOpen,
      "About Mercury": User,
      "Success Stories": Trophy,
      Resources: FileText,
      "Contact Us": PhoneCall,
    };
    return {
      ...item,
      icon: iconMap[item.label] || FileText,
    };
  });

  const popularCourses = [
    { label: "Dayananda Sagar", href: "/universities/dayananda-sagar-university-online" },
    { label: "Alliance University", href: "/universities/alliance-university-online" },
    { label: "Amity University", href: "/universities/amity-university-online" },
    { label: "Manipal University", href: "/universities/manipal-university-jaipur-online" },
    { label: "GLA University", href: "/universities/gla-university-online" },
];

  const socialLinks = [
    { 
      name: "facebook", 
      href: "https://www.facebook.com/Mercuryacademydistanceeducation/",
      icon: FaFacebookF,
      color: "hover:text-[#1877f2]"
    },
    { 
      name: "instagram", 
      href: "https://www.instagram.com/mercuryacademydistanceedu/",
      icon: FaInstagram,
      color: "hover:text-[#e4405f]"
    },
    { 
      name: "linkedin", 
      href: " https://www.linkedin.com/company/138554307/",
      icon: FaLinkedinIn,
      color: "hover:text-[#0a66c2]"
    },
    // { 
    //   name: "youtube", 
    //   href: "https://youtube.com/mercuryacademy",
    //   icon: FaYoutube,
    //   color: "hover:text-[#ff0000]"
    // },
  ];

  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${siteConfig.contact.email}`;

  return (
    <footer className="w-full bg-[#020917] text-slate-200 border-t border-amber-500/20 pt-14 pb-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand Logo, Crest, Description & Social Icons (Col-span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            {/* Logo */}
            <div className="flex items-center mb-3">
              <Image
                src={LogoImg}
                alt="Mercury Academy"
                width={240}
                height={78}
                className="h-16 w-auto bg-white rounded-lg p-1"
                priority
              />
            </div>

            <h3 className="font-serif text-xl font-bold tracking-wider text-white uppercase">
              MERCURY ACADEMY
            </h3>
            <p className="text-xs font-semibold tracking-[0.16em] text-amber-400 uppercase mt-0.5">
              YOUR FUTURE, OUR MISSION
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mt-3 rounded-full" />

            <p className="text-sm text-slate-300 leading-relaxed mt-5 max-w-sm">
              Explore recognized universities, compare online and distance courses, and receive complete admission guidance to shape your future.
            </p>

            {/* Social Media Circular Buttons with React Icons */}
            <div className="flex items-center space-x-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-10 h-10 rounded-full border border-amber-500/30 bg-[#07132a] flex items-center justify-center text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all shadow-sm ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Explore Links (Col-span 2) */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-bold text-white mb-2">Explore</h3>
            <div className="relative mt-2.5 flex items-center mb-6">
              <div className="h-0.5 w-14 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" />
              <div className="h-[1px] w-10 bg-gradient-to-r from-amber-500/50 to-transparent" />

              {/* Glowing dot / star flare on the underline */}
              <span className="absolute left-8 -top-1 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(253,224,71,0.9),0_0_15px_rgba(234,179,8,0.7)] animate-pulse" />
            </div>


            <ul className="space-y-3.5">
              {exploreLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between group py-1 text-sm text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-amber-400 opacity-80 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Popular Universities (Col-span 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl font-bold text-white mb-2">Popular Universities</h3>
            {/* <div className="flex items-center mb-6">
              <div className="h-0.5 w-14 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
              <div className="h-2 w-2 rounded-full bg-amber-300 -ml-6 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
            </div> */}
            <div className="relative mt-2.5 flex items-center mb-6">
              <div className="h-0.5 w-14 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" />
              <div className="h-[1px] w-10 bg-gradient-to-r from-amber-500/50 to-transparent" />

              {/* Glowing dot / star flare on the underline */}
              <span className="absolute left-8 -top-1 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(253,224,71,0.9),0_0_15px_rgba(234,179,8,0.7)] animate-pulse" />
            </div>

            <div className="space-y-3">
               {popularCourses.map((course) => (
                <Link
                  key={course.label}
                  href={course.href}
                  className="flex items-center justify-between bg-[#0a1733] border border-slate-800/80 hover:border-amber-500/40 hover:bg-[#0f2147] transition-all duration-200 rounded-xl px-4 py-2.5 text-sm font-medium text-white group shadow-sm"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6 h-6 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <span>{course.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

          </div>

          {/* Column 4: Contact Us + Need Help Card (Col-span 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl font-bold text-white mb-2">Contact Us</h3>
            <div className="relative mt-2.5 flex items-center mb-6">
              <div className="h-0.5 w-14 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full" />
              <div className="h-[1px] w-10 bg-gradient-to-r from-amber-500/50 to-transparent" />

              {/* Glowing dot / star flare on the underline */}
              <span className="absolute left-8 -top-1 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(253,224,71,0.9),0_0_15px_rgba(234,179,8,0.7)] animate-pulse" />
            </div>


            <div className="space-y-3.5 text-sm text-slate-300">
              <a href={phoneHref} className="flex items-center space-x-3 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a href={emailHref} className="flex items-center space-x-3 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}</span>
              </div>
            </div>

            {/* Need Help CTA Box */}
            <div className="mt-6 border border-amber-500/30 bg-[#07132a] rounded-2xl p-4 flex items-center justify-between shadow-[0_0_25px_rgba(234,179,8,0.08)]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full border border-amber-500/30 bg-[#0a1835] flex items-center justify-center text-amber-400">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white">Need Help?</h4>
                  <p className="text-xs text-slate-400">Talk to our education experts</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 flex items-center justify-center text-[#020917] font-bold shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Glowing Top Divider above Bottom Banner */}
        <div className="relative w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent">
          <span className="absolute right-12 -top-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(234,179,8,1)] animate-pulse" />
        </div>

        {/* Bottom Bar / Copyright & Policy Links */}
        <div className="mt-8 border border-amber-500/30 bg-[#050f25] rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg border border-amber-500/30 bg-amber-500/10 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xs md:text-sm text-slate-300">
              © {currentYear} Mercury Academy. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-slate-300">
            {footerNavigation.legal.map((item, index) => (
              <div key={item.href} className="flex items-center gap-4">
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 hover:text-amber-400 transition-colors"
                >
                  <span className="w-6 h-6 rounded border border-amber-500/30 bg-amber-500/10 flex items-center justify-center text-amber-400">
                    {item.label === "Privacy Policy" && <ShieldCheck className="w-3.5 h-3.5" />}
                    {item.label === "Terms & Conditions" && <FileText className="w-3.5 h-3.5" />}
                    {item.label === "Refund Policy" && <RotateCcw className="w-3.5 h-3.5" />}
                  </span>
                  <span>{item.label}</span>
                </Link>
                {index < footerNavigation.legal.length - 1 && (
                  <span className="h-3 w-px bg-slate-700 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}