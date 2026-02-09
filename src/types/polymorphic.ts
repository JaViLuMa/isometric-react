/** biome-ignore-all lint/complexity/noBannedTypes: keyof {} = never, needed for polymorphic Omit */
import type { ComponentPropsWithRef, ElementType, JSX } from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

export type PolymorphicProps<C extends ElementType, P = {}> = P &
  AsProp<C> &
  Omit<ComponentPropsWithRef<C>, PropsToOmit<C, P>>;

export type PolymorphicComponent<DefaultC extends ElementType, P = {}> = {
  <C extends ElementType = DefaultC>(
    props: PolymorphicProps<C, P>,
  ): JSX.Element | null;
  defaultComponent?: DefaultC;
};
