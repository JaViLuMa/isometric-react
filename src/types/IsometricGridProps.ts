import { ShadowProps } from "./ShadowProps";
import { PositionProps } from "./PositionProps";
import { AnimationProps } from "./AnimationProps";
import { ShadowAnimationProps } from "./ShadowAnimationProps";
import { RotateProps } from "./RotateProps";

export interface IsometricGridProps
  extends ShadowProps,
    PositionProps,
    AnimationProps,
    ShadowAnimationProps,
    RotateProps {
  size: number;
  sizeMultiplier: {
    width: number;
    height: number;
  };
  color: string;
  lineweight: number;
  children?: JSX.Element | JSX.Element[];
  className?: string;
}
