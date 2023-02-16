import Link from "next/link";
import { FC } from "react";

export interface LinkBadgeProps {
  label: string;
  href: string;
}

export const LinkBadge: FC<LinkBadgeProps> = ({ label, href }) => {
  return (
    <Link
      href={href}
      target={href.includes("http") ? "_blank" : undefined}
      className="text-center rounded-md text-sm py-1 block w-full bg-day-800 dark:bg-teal-100 text-white dark:text-black"
    >
      {label}
    </Link>
  );
};
