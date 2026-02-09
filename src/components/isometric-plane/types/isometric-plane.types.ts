import type { ElementType, ReactNode } from "react";
import type { IsometricOptionals } from "../../../types/isometric-optionals";
import type { PolymorphicProps } from "../../../types/polymorphic";
import type { SizeAsObject } from "../../../types/size";

export interface IsometricPlaneBaseProps extends IsometricOptionals {
  size: SizeAsObject;
  children?: ReactNode;
  color?: string;
}

export type IsometricPlaneProps<Root extends ElementType = "div"> =
  PolymorphicProps<Root, IsometricPlaneBaseProps>;
