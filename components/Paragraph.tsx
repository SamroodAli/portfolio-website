import { Element } from "@/types/Element";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props extends Element {
  children: ReactNode;
}

export const Paragraph: FC<Props> = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={classNames(
        "my-2 text-base md:text-lg lg:text-xl",
        props.className
      )}
    >
      {children}
    </p>
  );
};
