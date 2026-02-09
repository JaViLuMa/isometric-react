import type { ElementType } from "react";
import type { PolymorphicProps } from "../../../types/polymorphic";

export type IsometricProps<Root extends ElementType = "div"> =
  PolymorphicProps<Root>;
