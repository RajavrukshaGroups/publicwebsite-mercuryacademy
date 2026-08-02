"use client";

import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import jain from "../../public/logos/jain.webp"
import manipal from "../../public/logos/manipal.webp"
import alliance from "../../public/logos/alliance.png"
import dayananda from "../../public/logos/DSU white.png"
import amity from "../../public/logos/amity.png"
import gla from "../../public/logos/gla.webp"
//import yenepoya from "../../public/logos/yenepoya.webp"



// import { PartnerUniversityLogo } from "./Logo";
// import type { PartnerUniversity } from "../types";

// interface PartnerUniversitiesProps {
//   onSelectUniversity: (university: PartnerUniversity) => void;
//   onOpenEnquiryModal: (defaultUniversity?: string) => void;
// }

const partnerUniversitiesData = [
  {
    id: "jain",
    name: "Jain University",
    image:jain,
    shortName: "JAIN",
    badgeText: "DEEMED-TO-BE UNIVERSITY",
    location: "Bangalore, Karnataka",
    accreditation: "NAAC A++ Graded | UGC Entitled",
    courses: [
      "Online MBA",
      "Online MCA",
      "Online BBA",
      "Online BCA",
      "Online B.Com",
      "Online M.Com",
    ],
    description:
      "Ranked among top universities in India, offering world-class online degree programs with industry-relevant curriculum and dedicated career support.",
    logoType: "jain",
  },
  {
    id: "manipal",
    name: "Manipal University",
    image:manipal,
    shortName: "MANIPAL",
    badgeText: "ACADEMY OF HIGHER EDUCATION",
    location: "Manipal, Karnataka",
    accreditation: "NAAC A++ Graded | UGC Entitled",
    courses: [
      "Online MBA",
      "Online MCA",
      "Online M.Com",
      "Online BBA",
      "Online BCA",
    ],
    description:
      "Manipal Academy of Higher Education (MAHE) provides globally recognized online degrees designed for working professionals seeking career acceleration.",
    logoType: "manipal",
  },
  {
    id: "alliance",
    name: "Alliance University Online",
    image:alliance,
    shortName: "ALLIANCE",
    badgeText: "UNIVERSITY ONLINE",
    location: "Bangalore, Karnataka",
    accreditation: "NAAC A+ Graded | UGC Approved",
    courses: [
      "Online MBA (Business Analytics)",
      "Executive MBA",
      "Online BBA",
      "Online B.Com",
    ],
    description:
      "Alliance University Online delivers flexible, practical management and commerce programs with live expert faculty mentorship.",
    logoType: "alliance",
  },
  {
    id: "dayananda",
    name: "Dayananda Sagar University Online",
    image:dayananda,
    shortName: "DAYANANDA SAGAR",
    badgeText: "UNIVERSITY ONLINE",
    location: "Bangalore, Karnataka",
    accreditation: "NAAC A+ Graded | UGC Entitled",
    courses: [
      "Online MBA",
      "Online MCA",
      "Online BCA",
      "Online BBA",
      "Data Science Specialization",
    ],
    description:
      "Known for technological excellence and corporate partnerships, offering cutting-edge online degree courses in management and computer applications.",
    logoType: "dayananda",
  },
  {
    id: "amity",
    name: "Amity University",
    image:amity,
    shortName: "AMITY",
    badgeText: "UNIVERSITY ONLINE",
    location: "Noida / Global",
    accreditation: "NAAC A+ Graded | WASC Accredited | UGC Approved",
    courses: [
      "Online MBA",
      "Online MCA",
      "Online BBA",
      "Online BCA",
      "Online BA",
      "Post-Grad Diploma",
    ],
    description:
      "India's first university to receive UGC entitlement for online degrees, providing global learning experiences and AI-enabled student support.",
    logoType: "amity",
  },
  {
    id: "gla",
    name: "GLA University",
    image:gla,
    shortName: "GLA",
    badgeText: "UNIVERSITY ONLINE",
    location: "Mathura, Uttar Pradesh",
    accreditation: "NAAC A+ Graded | UGC Approved",
    courses: [
      "Online MBA",
      "Online MCA",
      "Online BBA",
      "Online BCA",
      "Online B.Com",
    ],
    description:
      "Delivers affordable, high-impact online degree programs with a strong focus on practical skills and placement readiness.",
    logoType: "gla",
  },
 
];

export default function PartnerUniversities() {
  const router = useRouter();
  return (
    <section
      id="partner-universities"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <div className="bg-[#fffcf7] border border-[#f0e6cf] rounded-3xl p-6 sm:p-10 lg:p-14 text-center shadow-xs">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112143] mb-3">
          Our Partner Universities
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
          We are associated with top-notch universities, including:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {partnerUniversitiesData.slice(0, 6).map((uni) => (
            <div
              key={uni.id}
              // onClick={() => onSelectUniversity(uni)}
              className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-between min-h-[150px] cursor-pointer group hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="flex-1 flex items-center justify-center">
                {/* <PartnerUniversityLogo type={uni.logoType} /> */}
                 <img src={uni.image.src} />
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 w-full flex items-center justify-between text-xs text-gray-500 font-medium group-hover:text-[#d19e4a]">
                <span>{uni.name}</span>

                {/* <span className="flex items-center text-[11px] font-semibold text-[#d19e4a]">
                  Explore
                  <ChevronRight className="w-3.5 h-3.5" />
                </span> */}
              </div>
            </div>
          ))}

        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#f0e6cf] flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-gray-600 text-sm sm:text-base">
            Not sure which university fits your career goals?
          </span>

          <button
           onClick={() => router.push('/contact')}
            className="bg-[#112143] hover:bg-[#1a305e] text-white font-semibold text-sm px-6 py-3 rounded-2 shadow-sm transition-colors"
          >
            Get Free University Counseling
          </button>
        </div>
      </div>
    </section>
  );
}