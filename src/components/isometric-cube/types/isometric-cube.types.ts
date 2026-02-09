import type { ElementType } from "react";
import type { IsometricOptionalsWithoutEdge } from "../../../types/isometric-optionals";
import type { PolymorphicProps } from "../../../types/polymorphic";
import type { SizeAsObject } from "../../../types/size";

export type CubeSides =
  | "top"
  | "front-left"
  | "front-right"
  | "bottom"
  | "back-left"
  | "back-right";

export interface IsometricCubeBaseProps extends IsometricOptionalsWithoutEdge {
  size: SizeAsObject;
  depth: number | string;
}

export interface IsometricCubeSideBaseProps {
  side: CubeSides;
}

export type IsometricCubeSideProps<Root extends ElementType = "div"> =
  PolymorphicProps<Root, IsometricCubeSideBaseProps>;

export type IsometricCubeProps<Root extends ElementType = "div"> =
  PolymorphicProps<Root, IsometricCubeBaseProps>;
