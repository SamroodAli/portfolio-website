import { fira } from "@/fonts";
import { ContainerElement } from "@/types/Element";
import classNames from "classnames";
import { FC } from "react";

export const Heading3: FC<ContainerElement> = ({ children, className }) => {
  return (
    <h3
      className={classNames(
        "my-3 italic underline underline-offset-8 text-lg xxs:text-2xl sm:text-3xl lg:text-3xl text-day-900 dark:text-teal-300 font-medium lg:my-4",
        fira.className,
        className
      )}
    >
      {children}
    </h3>
  );
};
