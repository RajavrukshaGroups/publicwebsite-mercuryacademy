import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  spacing?: SectionSpacing;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  containerClassName?: string;
  disableContainer?: boolean;
}

const sectionSpacing: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-8 md:py-10",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-20 lg:py-24",
  xl: "py-20 md:py-28 lg:py-32",
};

export function Section({
  children,
  spacing = "lg",
  containerSize = "xl",
  containerClassName,
  disableContainer = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionSpacing[spacing], className)} {...props}>
      {disableContainer ? (
        children
      ) : (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
