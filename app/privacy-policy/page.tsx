// app/privacy/page.tsx
// Privacy Policy page component for Mercury Academy
// Light Theme · Blue & Gold Premium Luxurious
// Professional typography with Inter + Playfair Display

import React from "react";
import {
  Shield,
  Lock,
  Cookie,
  Database,
  Mail,
  Phone,
  MapPin,
  FileText,
  Users,
  Eye,
  Trash2,
  Share2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 py-12 bg-brand-cream">
      <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border border-brand-border rounded-[3rem] p-8 md:p-12 shadow-brand-lg transition-all duration-300">
        
        {/* HEADER */}
        <div className="border-b border-brand-border pb-6 mb-8">
          <div className="flex items-center gap-3 mb-1">
            <Shield className="w-8 h-8 text-brand-gold drop-shadow-[0_0_6px_rgba(226,160,0,0.2)]" strokeWidth={1.5} />
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-gold bg-brand-gold-soft/60 px-4 py-1 rounded-full border border-brand-border">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy-dark font-display leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-2 pl-4 border-l-2 border-brand-gold bg-gradient-to-r from-brand-gold-soft/30 to-transparent font-light">
            How Mercury Academy collects, uses, and protects your information.
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-8 text-foreground leading-relaxed bg-brand-gold-soft/20 rounded-2xl px-5 py-4 border border-brand-border">
          <p className="font-light">
            At Mercury Academy, accessible from www.mercuryacademy.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mercury Academy and how we use it.
          </p>
          <p className="font-light mt-2">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
          <p className="font-light mt-2 text-sm text-muted-foreground">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Mercury Academy. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-7">

          {/* Consent */}
          <Section
            icon={<AlertCircle className="w-5 h-5" />}
            title="Consent"
          >
            <p className="font-light">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </Section>

          {/* Information we collect */}
          <Section
            icon={<Database className="w-5 h-5" />}
            title="Information we collect"
          >
            <p className="font-light">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p className="font-light mt-2">
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p className="font-light mt-2">
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>
          </Section>

          {/* How we use your information */}
          <Section
            icon={<Users className="w-5 h-5" />}
            title="How we use your information"
          >
            <p className="font-light">We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 mt-1 space-y-0.5 marker:text-brand-gold font-light">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </Section>

          {/* Log Files */}
          <Section
            icon={<FileText className="w-5 h-5" />}
            title="Log Files"
          >
            <p className="font-light">
              Mercury Academy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
          </Section>

          {/* Cookies */}
          <Section
            icon={<Cookie className="w-5 h-5" />}
            title="Cookies and Web Beacons"
          >
            <p className="font-light">
              Like any other website, Mercury Academy uses &quot;cookies&quot;. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </Section>

          {/* Advertising Partners */}
          <Section
            icon={<Share2 className="w-5 h-5" />}
            title="Advertising Partners Privacy Policies"
          >
            <p className="font-light">
              You may consult this list to find the Privacy Policy for each of the advertising partners of Mercury Academy.
            </p>
            <p className="font-light mt-2">
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Mercury Academy, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p className="font-light mt-2 text-sm text-muted-foreground">
              Note that Mercury Academy has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </Section>

          {/* Third Party Privacy Policies */}
          <Section
            icon={<Lock className="w-5 h-5" />}
            title="Third Party Privacy Policies"
          >
            <p className="font-light">
              Mercury Academy's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p className="font-light mt-2">
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>
          </Section>

          {/* CCPA */}
          <Section
            icon={<Eye className="w-5 h-5" />}
            title="CCPA Privacy Rights (Do Not Sell My Personal Information)"
          >
            <p className="font-light">Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc pl-6 mt-1 space-y-0.5 marker:text-brand-gold font-light">
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
            <p className="font-light mt-2">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </Section>

          {/* GDPR */}
          <Section
            icon={<Trash2 className="w-5 h-5" />}
            title="GDPR Data Protection Rights"
          >
            <p className="font-light">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="list-disc pl-6 mt-1 space-y-0.5 marker:text-brand-gold font-light">
              <li><span className="font-medium">The right to access</span> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
              <li><span className="font-medium">The right to rectification</span> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
              <li><span className="font-medium">The right to erasure</span> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><span className="font-medium">The right to restrict processing</span> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><span className="font-medium">The right to object to processing</span> – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><span className="font-medium">The right to data portability</span> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p className="font-light mt-2">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </Section>

          {/* Children's Information */}
          <Section
            icon={<Users className="w-5 h-5" />}
            title="Children's Information"
          >
            <p className="font-light">
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p className="font-light mt-2">
              Mercury Academy does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </Section>

          {/* Changes */}
          <Section
            icon={<FileText className="w-5 h-5" />}
            title="Changes to This Privacy Policy"
          >
            <p className="font-light">
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>
          </Section>

          {/* CONTACT */}
          <div className="mt-10 pt-6 border-t border-brand-border">
            <h3 className="text-xl font-semibold text-brand-navy-dark font-display mb-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-gold" />
              Contact Us
            </h3>
            <div className="bg-brand-gold-soft/15 rounded-2xl px-6 py-5 space-y-4">
              <p className="font-light text-foreground">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
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