import type { ReactNode, CSSProperties } from "react";

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
