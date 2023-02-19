import { TextSpan } from "@/components/TextSpan";
import { ContainerElement } from "@/types/Element";
import Link from "next/link";
import { FC } from "react";

interface Props extends ContainerElement {
  href: string;
}

export const LinkTextSpan: FC<Props> = ({ children, className, href }) => {
  return (
    <Link href={href} className={className} target="_blank">
      <TextSpan className="underline underline-offset-4">{children}</TextSpan>
    </Link>
  );
};
