import {
  BookOpen,
  Building2,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "20+",
    title: "UGC-Approved",
    subtitle: "Universities",
  },
  {
    icon: BookOpen,
    value: "50+",
    title: "UG & PG",
    subtitle: "Programs",
  },
  {
    icon: Users,
    value: "15,000+",
    title: "Students",
    subtitle: "Guided",
  },
  {
    icon: MapPin,
    value: "PAN India",
    title: "Learning",
    subtitle: "Network",
  },
  {
    icon: ShieldCheck,
    value: "",
    title: "Guidance from",
    subtitle: "Enquiry to enrolment",
  },
];

export function HeroStats() {
  return (
    <div className="relative z-30 mx-auto w-full max-w-[1440px] px-4 pb-7 sm:px-8 lg:-mt-[58px] lg:px-12">
      <div className="rounded-2xl border border-[#e2e5ea] bg-white/95 p-4 shadow-[0_10px_25px_rgba(3,27,73,0.14)] backdrop-blur sm:px-7 sm:py-5">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={`${stat.title}-${stat.subtitle}`}
                className={cnStat(index)}
              >
                <span className="flex size-12 shrink-0 items-center justify-center text-brand-navy sm:size-16">
                  <Icon
                    className="size-9 sm:size-11"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  {stat.value && (
                    <p className="text-xl font-extrabold leading-none text-brand-navy sm:text-[2rem]">
                      {stat.value}
                    </p>
                  )}

                  <p className="mt-1 text-sm font-bold text-brand-navy">
                    {stat.title}
                  </p>

                  <p className="text-xs leading-5 text-muted-foreground">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function cnStat(index: number) {
  return [
    "flex items-center gap-3 rounded-xl px-2 py-3 sm:px-4 lg:justify-center",
    index !== stats.length - 1
      ? "lg:border-r lg:border-brand-border"
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}