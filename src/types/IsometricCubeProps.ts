import { BorderProps } from "./BorderProps";
import { ShadowProps } from "./ShadowProps";
import { PositionProps } from "./PositionProps";
import { AnimationProps } from "./AnimationProps";
import { ShadowAnimationProps } from "./ShadowAnimationProps";
import { RotateProps } from "./RotateProps";

export interface IsometricCubeProps
  extends BorderProps,
    ShadowProps,
    PositionProps,
    AnimationProps,
    ShadowAnimationProps,
    RotateProps {
  width: number;
  height: number;
  depth: number;
  color: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
}
