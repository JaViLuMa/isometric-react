import type { ElementType } from "react";
import type { IsometricOptionalsWithoutBorderAndEdge } from "../../../types/isometric-optionals";
import type { PolymorphicProps } from "../../../types/polymorphic";
import type { SizeMultiplier } from "../../../types/size";

export interface IsometricGridBaseProps
  extends IsometricOptionalsWithoutBorderAndEdge {
  size: number | string;
  sizeMultiplier?: SizeMultiplier;
  color?: string;
  lineweight?: number | string;
}

export type IsometricGridProps<Root extends ElementType = "div"> =
  PolymorphicProps<Root, IsometricGridBaseProps>;
