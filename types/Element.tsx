import { ReactNode } from "react";

export interface Element {
  className?: string;
}

export interface ContainerElement extends Element {
  children: ReactNode;
}
