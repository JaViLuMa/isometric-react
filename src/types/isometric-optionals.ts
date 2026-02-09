import type { BorderProps } from "./border";
import type { EdgeProps } from "./edge";
import type { PositionProps } from "./position";
import type { RotationProps } from "./rotation";
import type { ShadowProps } from "./shadow";
import type { ShadowAnimationProps } from "./shadow-animation";

export type IsometricOptionalsWithoutBorderAndEdge = ShadowProps &
  PositionProps &
  ShadowAnimationProps &
  RotationProps;

export type IsometricOptionalsWithoutEdge =
  IsometricOptionalsWithoutBorderAndEdge & BorderProps;

export type IsometricOptionals = IsometricOptionalsWithoutEdge & EdgeProps;
