// app/refund/page.tsx
// Refund Policy page component for Mercury Academy
// Light Theme · Blue & Gold Premium Luxurious
// Professional typography with Inter + Playfair Display

import React from "react";
import {
  RotateCw,
  ShieldCheck,
  AlertCircle,
  XCircle,
  CheckCircle,
  FileText,
  Clock,
  UserX,
  BookOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function RefundPage() {
  return (
    <div className="min-h-screen px-4 py-12 bg-brand-cream">
      <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border border-brand-border rounded-[3rem] p-8 md:p-12 shadow-brand-lg transition-all duration-300">
        
        {/* HEADER */}
        <div className="border-b border-brand-border pb-6 mb-8">
          <div className="flex items-center gap-3 mb-1">
            <RotateCw className="w-8 h-8 text-brand-gold drop-shadow-[0_0_6px_rgba(226,160,0,0.2)]" strokeWidth={1.5} />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-gold bg-brand-gold-soft/60 px-4 py-1 rounded-full border border-brand-border">
              Policy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy-dark font-display leading-[1.1]">
            Refund Policy
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-2 pl-4 border-l-2 border-brand-gold bg-gradient-to-r from-brand-gold-soft/30 to-transparent font-light">
            Understanding Mercury Academy's refund guidelines and eligibility criteria.
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-8 text-foreground leading-relaxed bg-brand-gold-soft/20 rounded-2xl px-5 py-4 border border-brand-border">
          <p className="font-light">
            At Mercury Academy, we strive to provide transparent and fair policies regarding refunds. 
            This document outlines the circumstances under which refunds may be considered, as well as 
            cases where refunds are not applicable.
          </p>
          <p className="font-light mt-2">
            Please read this policy carefully before proceeding with any payments or admissions.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-8">

          {/* Refund Eligibility */}
          <div className="group transition-all duration-200 hover:bg-brand-gold-soft/15 rounded-2xl px-1 py-0.5">
            <div className="flex items-center gap-3 border-b border-brand-border/40 pb-1.5 mb-3">
              <span className="text-brand-gold w-6 flex justify-center filter drop-shadow-[0_0_4px_rgba(226,160,0,0.12)]">
                <CheckCircle className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-brand-navy-dark tracking-tight font-display">
                Refund Eligibility
              </h3>
              <span className="text-[0.55rem] font-bold uppercase bg-emerald-600 text-white px-3 py-0.5 rounded-full tracking-[0.1em]">
                Eligible
              </span>
            </div>
            <div className="pl-8 text-foreground leading-relaxed text-sm md:text-base">
              <p className="font-light mb-3">
                Refunds, if applicable, may be considered only in the following cases:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-emerald-50/60 border border-emerald-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Duplicate payment</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Duplicate payment made by the student.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-emerald-50/60 border border-emerald-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Technical error</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Payment collected due to a verified technical error.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-emerald-50/60 border border-emerald-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">University-approved refund</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Refund approved by the concerned university in accordance with its official refund policy.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Non-Refundable Cases */}
          <div className="group transition-all duration-200 hover:bg-brand-gold-soft/15 rounded-2xl px-1 py-0.5">
            <div className="flex items-center gap-3 border-b border-brand-border/40 pb-1.5 mb-3">
              <span className="text-brand-gold w-6 flex justify-center filter drop-shadow-[0_0_4px_rgba(226,160,0,0.12)]">
                <XCircle className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-brand-navy-dark tracking-tight font-display">
                Non-Refundable Cases
              </h3>
              <span className="text-[0.55rem] font-bold uppercase bg-rose-600 text-white px-3 py-0.5 rounded-full tracking-[0.1em]">
                Not Eligible
              </span>
            </div>
            <div className="pl-8 text-foreground leading-relaxed text-sm md:text-base">
              <p className="font-light mb-3">
                Refund requests will <span className="font-semibold text-rose-600">not</span> be accepted for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-rose-50/60 border border-rose-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-rose-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Change of mind</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Change of mind after admission processing has begun.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-rose-50/60 border border-rose-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-rose-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Incomplete documentation</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Failure to submit required documents.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-rose-50/60 border border-rose-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-rose-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Eligibility failure</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Failure to meet university eligibility criteria.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-rose-50/60 border border-rose-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-rose-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Discontinuation</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Student's decision to discontinue the course after enrollment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-rose-50/60 border border-rose-200/50 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-rose-600 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Documentation delays</span>
                    <p className="font-light text-muted-foreground text-sm">
                      Delays caused by incomplete documentation from the student.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-brand-navy-dark/5 border border-brand-navy-dark/10 rounded-2xl px-5 py-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-brand-navy-dark font-display text-sm">Important Note</h4>
                <p className="font-light text-foreground text-sm mt-0.5">
                  All refund requests must be submitted in writing to counsellor@mercuryacademy.in 
                  with relevant supporting documents. Processing time may vary depending on the 
                  university's policies and procedures.
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mt-10 pt-6 border-t border-brand-border">
            <h3 className="text-xl font-semibold text-brand-navy-dark font-display mb-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-gold" />
              Contact Us
            </h3>
            <div className="bg-brand-gold-soft/15 rounded-2xl px-6 py-5 space-y-4">
              <p className="font-light text-foreground">
                For any questions regarding our refund policy, please reach out to us:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-brand-navy-dark">Email</p>
                    <p className="font-light text-foreground">counsellor@mercuryacademy.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-brand-navy-dark">Phone</p>
                    <p className="font-light text-foreground">+91 7204141825</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium text-brand-navy-dark">Address</p>
                    <p className="font-light text-foreground">
                      No - 99/1, First Floor, Ramarao Layout, 1st Cross, 3rd Phase,<br />
                      Kathriguppe main road, BSK 3rd stage, Above Central Bank.<br />
                      Bangalore - 560085.
                    </p>
                  </div>
                </div>
              </div>
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