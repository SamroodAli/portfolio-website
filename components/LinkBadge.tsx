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
      className="bg-teal-800 text-white text-center dark:bg-orange-600 rounded-md text-sm p-1.5 shadow-sm w-full block"
    >
      {label}
    </Link>
  );
};
