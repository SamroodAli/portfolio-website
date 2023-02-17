import { Element } from "@/types/Element";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props extends Element {
  children: ReactNode;
}

export const Paragraph: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={classNames("my-2 text-base md:text-lg lg:text-xl", className)}
    >
      {children}
    </p>
  );
};
