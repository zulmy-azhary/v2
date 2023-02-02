import type { CSSProperties, ReactNode } from "react";

export type TagSphereProps = {
  texts: (string | ReactNode)[];
  radius?: number;
  maxSpeed: number;
  initialSpeed: number;
  initialDirection: number;
  keepRollingAfterMouseOut: boolean;
  className?: string;
  style?: CSSProperties;
  useContainerInlineStyles: boolean;
  fullWidth: boolean;
  fullHeight: boolean;
};

export type Items = {
  x: number;
  y: number;
  z: number;
  ref: HTMLElement;
  el: JSX.Element;
};
