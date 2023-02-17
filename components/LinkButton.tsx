import { fira } from "@/fonts";
import { ContainerElement } from "@/types/Element";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

interface Props extends ContainerElement {
  href: string;
}

export const LinkButton: FC<Props> = ({ children, className, href }) => {
  return (
    <button
      className={classNames(
        "rounded-lg m-3 text-day-800 dark:text-white first:border-day-700 dark:first:border-teal-500 first:border last:bg-day-700 dark:last:bg-teal-600 last:text-white px-2.5 py-1.5 shadow-lg sm:hover:scale-110 transition-all duration-100",
        fira.className
      )}
    >
      <Link href={href}>{children}</Link>
    </button>
  );
};
