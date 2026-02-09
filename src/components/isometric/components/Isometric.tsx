import clsx from "clsx";
import { forwardRef } from "react";
import type {
  PolymorphicComponent,
  PolymorphicRef,
} from "../../../types/polymorphic";
import type { IsometricProps } from "../types/isometric.types";
import "../../../styles/isometric.css";

const IsometricImplementation = (
  props: IsometricProps,
  ref: PolymorphicRef<"div">,
) => {
  const { as, className, children, ...rest } = props;

  const Component = as ?? "div";

  return (
    <Component className="isometric-container" ref={ref} {...rest}>
      <div className={clsx("isometric", className)}>{children}</div>
    </Component>
  );
};

export const Isometric = forwardRef(
  IsometricImplementation,
) as PolymorphicComponent<"div">;
