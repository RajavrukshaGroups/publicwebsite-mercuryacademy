// app/terms/page.tsx
// Terms & Conditions page component for Mercury Academy
// Light Theme · Blue & Gold Premium Luxurious
// Professional typography with Inter + Playfair Display

import React from "react";
import {
  Scale,
  GraduationCap,
  ShieldCheck,
  DollarSign,
  RotateCw,
  BadgeCheck,
  Phone,
  TriangleAlert,
  FileText,
  Key,
  Mail,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-brand-cream">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-sm border border-brand-border rounded-[3rem] p-8 md:p-12 shadow-brand-lg transition-all duration-300">
        
        {/* HEADER with gold accents */}
        <div className="border-b border-brand-border pb-6 mb-8">
          <div className="flex items-center gap-3 mb-1">
            <Scale className="w-8 h-8 text-brand-gold drop-shadow-[0_0_6px_rgba(226,160,0,0.2)]" strokeWidth={1.5} />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-gold bg-brand-gold-soft/60 px-4 py-1 rounded-full border border-brand-border">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy-dark font-display leading-[1.1]">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-2 pl-4 border-l-2 border-brand-gold bg-gradient-to-r from-brand-gold-soft/30 to-transparent font-light">
            Please read these terms before using Mercury Academy's website and services.
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-8 text-foreground leading-relaxed bg-brand-gold-soft/20 rounded-2xl px-5 py-4 border border-brand-border">
          <p className="font-light">
            Welcome to Mercury Academy. By accessing or using our website and services, you agree to comply with the following terms and conditions.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-7">

          {/* 1. Services Offered */}
          <Section
            icon={<GraduationCap className="w-5 h-5" />}
            title="Services Offered"
            badge="counselling"
          >
            <p className="font-light">Mercury Academy provides:</p>
            <ul className="list-disc pl-6 mt-1 space-y-0.5 marker:text-brand-gold font-light">
              <li>Educational counselling services</li>
              <li>Guidance for admissions (BA, BCom, BCA, BBA, MBA, MCA, MCom, etc.)</li>
              <li>Assistance with Distance, Online, and Abroad education programs</li>
            </ul>
            <p className="mt-2 text-brand-gold text-sm font-medium">We act as a counselling and support platform, not the university itself.</p>
          </Section>

          {/* 2. Admission & Enrollment */}
          <Section
            icon={<ShieldCheck className="w-5 h-5" />}
            title="Admission &amp; Enrollment"
          >
            <ul className="list-disc pl-6 space-y-0.5 marker:text-brand-gold font-light">
              <li>Admission is subject to eligibility criteria of respective universities</li>
              <li>Mercury Academy does not guarantee admission in any specific university</li>
              <li>Final approval depends on the university/institution</li>
            </ul>
          </Section>

          {/* 3. Fees & Payments */}
          <Section
            icon={<DollarSign className="w-5 h-5" />}
            title="Fees &amp; Payments"
          >
            <ul className="list-disc pl-6 space-y-0.5 marker:text-brand-gold font-light">
              <li>Counselling/service charges (if applicable) will be informed in advance</li>
              <li>University fees are separate and must be paid directly to the university (or as guided)</li>
              <li>Fees once paid may be non-refundable, depending on university policies</li>
            </ul>
          </Section>

          {/* 4. Refund Policy */}
          <Section
            icon={<RotateCw className="w-5 h-5" />}
            title="Refund Policy"
          >
            <ul className="list-disc pl-6 space-y-0.5 marker:text-brand-gold font-light">
              <li>Mercury Academy is not responsible for refund delays or rejections from universities</li>
              <li>Any refund will be processed as per university rules and timelines</li>
            </ul>
          </Section>

          {/* 5. Information Accuracy */}
          <Section
            icon={<BadgeCheck className="w-5 h-5" />}
            title="Information Accuracy"
          >
            <p className="font-light">Students must provide correct and complete information. Mercury Academy is not responsible for issues caused by incorrect details.</p>
          </Section>

          {/* 6. Communication */}
          <Section
            icon={<Phone className="w-5 h-5" />}
            title="Communication"
          >
            <p className="font-light">By submitting your details, you agree to be contacted via:</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="bg-brand-gold-soft/40 border border-brand-border text-foreground px-4 py-1.5 rounded-full text-sm flex items-center gap-2 font-light">
                <PhoneCall className="w-3.5 h-3.5 text-brand-gold" strokeWidth={1.5} />
                Call
              </span>
              <span className="bg-brand-gold-soft/40 border border-brand-border text-foreground px-4 py-1.5 rounded-full text-sm flex items-center gap-2 font-light">
                <MessageSquare className="w-3.5 h-3.5 text-brand-gold" strokeWidth={1.5} />
                WhatsApp
              </span>
              <span className="bg-brand-gold-soft/40 border border-brand-border text-foreground px-4 py-1.5 rounded-full text-sm flex items-center gap-2 font-light">
                <Mail className="w-3.5 h-3.5 text-brand-gold" strokeWidth={1.5} />
                SMS / Email
              </span>
            </div>
          </Section>

          {/* 7. Limitation of Liability */}
          <Section
            icon={<TriangleAlert className="w-5 h-5" />}
            title="Limitation of Liability"
          >
            <p className="font-light">Mercury Academy is not liable for:</p>
            <ul className="list-disc pl-6 mt-1 space-y-0.5 marker:text-brand-gold font-light">
              <li>Admission rejection</li>
              <li>Course changes by university</li>
              <li>Visa issues (for abroad programs)</li>
              <li>Any academic or personal outcomes</li>
            </ul>
          </Section>

          {/* 8. Intellectual Property */}
          <Section
            icon={<FileText className="w-5 h-5" />}
            title="Intellectual Property"
          >
            <p className="font-light">All content on this website (logo, text, design) belongs to Mercury Academy. Unauthorized use is strictly prohibited.</p>
          </Section>

          {/* 9. Privacy */}
          <Section
            icon={<Key className="w-5 h-5" />}
            title="Privacy"
          >
            <p className="font-light">Your personal data will be handled securely. We do not sell your information to third parties.</p>
          </Section>

          {/* CONTACT */}
          <div className="mt-10 pt-6 border-t border-brand-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-brand-gold-soft/15 rounded-2xl px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold-soft/40 border border-brand-border flex items-center justify-center text-brand-gold">
                <Mail className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-brand-navy-dark font-semibold text-sm tracking-wide font-display">Contact Us</h4>
                <p className="text-brand-gold text-sm font-light">
                  counsellor@mercuryacademy.in
                </p>
              </div>
            </div>
            <div className="text-xs text-muted-foreground tracking-wider border-l-2 border-brand-gold/40 pl-4 font-light">
              <span className="text-brand-gold font-medium">✦</span> questions about these T&amp;C
            </div>
          </div>

          <div className="text-center text-[0.6rem] text-muted-foreground/40 mt-6 tracking-[0.2em] uppercase border-t border-brand-border pt-4 font-light">
            Mercury Academy · premium counselling
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------
// reusable Section component
// ----------------------------------------------
interface SectionProps {
  icon: React.ReactNode;
  title: string;
  badge?: string;
  children: React.ReactNode;
}

function Section({ icon, title, badge, children }: SectionProps) {
  return (
    <div className="group transition-all duration-200 hover:bg-brand-gold-soft/15 rounded-2xl px-1 py-0.5">
      <div className="flex items-center gap-3 border-b border-brand-border/40 pb-1.5 mb-2">
        <span className="text-brand-gold w-6 flex justify-center filter drop-shadow-[0_0_4px_rgba(226,160,0,0.12)]">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-brand-navy-dark tracking-tight font-display">
          {title}
        </h3>
        {badge && (
          <span className="text-[0.55rem] font-bold uppercase bg-brand-gold text-white px-3 py-0.5 rounded-full tracking-[0.1em]">
            {badge}
          </span>
        )}
      </div>
      <div className="pl-8 text-foreground leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}