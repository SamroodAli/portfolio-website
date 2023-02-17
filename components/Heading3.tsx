import { headingFont } from "@/fonts";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Heading3: FC<Props> = ({ children }) => {
  return (
    <h3
      className={classNames(
        "my-3 italic underline underline-offset-8 text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-day-900 dark:text-teal-300 font-bold lg:my-4",
        headingFont.className
      )}
    >
      {children}
    </h3>
  );
};
