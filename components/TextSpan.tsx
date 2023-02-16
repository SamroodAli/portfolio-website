import { headingFont } from "@/fonts";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const TextSpan: FC<Props> = ({ children }) => {
  return (
    <span
      className={classNames(
        "italic text-lg text-day-900 dark:text-teal-300 font-medium",
        headingFont.className
      )}
    >
      {children}
    </span>
  );
};
