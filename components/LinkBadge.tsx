import { Element } from "@/types/Element";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

export interface LinkBadgeProps extends Element {
  label: string;
  href: string;
}

export const LinkBadge: FC<LinkBadgeProps> = ({ label, href, className }) => {
  return (
    <Link
      href={href}
      target={href.includes("http") ? "_blank" : undefined}
      className={classNames(
        "text-center rounded-md text-sm py-1 block w-full bg-day-800 dark:bg-teal-100 text-white dark:text-black",
        className
      )}
    >
      {label}
    </Link>
  );
};
