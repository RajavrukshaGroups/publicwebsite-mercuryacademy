import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site.config";
import { footerNavigation } from "@/constants/navigation";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const popularCourses = [
  { label: "Online MBA", href: "/courses/online-mba" },
  { label: "Online MCA", href: "/courses/online-mca" },
  { label: "Online BBA", href: "/courses/online-bba" },
  { label: "Online BCA", href: "/courses/online-bca" },
  { label: "Online M.Com", href: "/courses/online-mcom" },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${siteConfig.contact.email}`;

  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Explore recognized universities, compare online and distance
              courses, and receive complete admission guidance.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">Explore</h2>

            <ul className="mt-5 space-y-3">
              {footerNavigation.explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white">Popular Courses</h2>

            <ul className="mt-5 space-y-3">
              {popularCourses.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white">Contact Us</h2>

            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href={phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />

                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={emailHref}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                  <span className="break-all">{siteConfig.contact.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <span>
                  {siteConfig.address.city}, {siteConfig.address.state},{" "}
                  {siteConfig.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col gap-4 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Mercury Academy. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
