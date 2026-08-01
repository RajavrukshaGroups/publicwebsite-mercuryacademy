"use client";

import HeroSection from "./HeroSection";
import AboutIntro from "./AboutIntro"
import FeatureCards from "./FeatureCards"
import PartnerUniversities from "./PartnerUniversities"

export default function Page() {
  return (
    <>
      <HeroSection onOpenEnquiryModal={() => { }} />
      <AboutIntro onOpenEnquiryModal={() => { }} />
      <FeatureCards onOpenEnquiryModal={() => { }} />
      <PartnerUniversities />
    </>
  );
}
