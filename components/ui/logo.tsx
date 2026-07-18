import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  href?: string;
  size?: LogoSize;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  onClick?: () => void;
}

const logoSizes: Record<
  LogoSize,
  {
    width: number;
    height: number;
    className: string;
  }
> = {
  sm: {
    width: 190,
    height: 62,
    className: "h-11 w-auto",
  },
  md: {
    width: 240,
    height: 78,
    className: "h-14 w-auto",
  },
  lg: {
    width: 290,
    height: 94,
    className: "h-16 w-auto sm:h-18",
  },
};

const logoUrl =
  "https://res.cloudinary.com/busitmxb/image/upload/v1784022519/mercury-academy/universities/fzuuczyu72guut1pu6ev.png";

export function Logo({
  href = "/",
  size = "md",
  className,
  imageClassName,
  priority = false,
  onClick,
}: LogoProps) {
  const styles = logoSizes[size];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Mercury Academy home"
    >
      <Image
        src={logoUrl}
        alt="Mercury Academy"
        width={styles.width}
        height={styles.height}
        priority={priority}
        className={cn("object-contain", styles.className, imageClassName)}
      />
    </Link>
  );
}
