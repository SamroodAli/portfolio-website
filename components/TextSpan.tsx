import { fira } from "@/fonts";
import { ContainerElement } from "@/types/Element";
import classNames from "classnames";
import { FC } from "react";

export const TextSpan: FC<ContainerElement> = ({ children, className }) => {
  return (
    <span
      className={classNames(
        "italic text-lg sm:text-xl md:text-xl lg:text-2xl text-day-900 dark:text-teal-300 font-medium",
        fira.className,
        className
      )}
    >
      {children}
    </span>
  );
};
