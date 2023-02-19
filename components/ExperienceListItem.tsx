import { ContainerElement } from "@/types/Element";
import classNames from "classnames";
import { FC } from "react";

export const ExperienceListItem: FC<ContainerElement> = ({
  children,
  className,
}) => {
  return (
    <li className={classNames("sm:text-lg p-1", className)}>{children}</li>
  );
};
