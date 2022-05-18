import { BorderProps } from "./BorderProps";
import { EdgeProps } from "./EdgeProps";
import { ShadowProps } from "./ShadowProps";
import { PositionProps } from "./PositionProps";
import { AnimationProps } from "./AnimationProps";
import { ShadowAnimationProps } from "./ShadowAnimationProps";
import { RotateProps } from "./RotateProps";

export interface IsometricPlaneProps
  extends BorderProps,
    EdgeProps,
    ShadowProps,
    PositionProps,
    AnimationProps,
    ShadowAnimationProps,
    RotateProps {
  width: number;
  height: number;
  color: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
}
