import clsx from "clsx";
import { forwardRef, useMemo } from "react";
import { useIsometricPosition } from "../../../hooks/use-isometric-position";
import { useIsometricRotation } from "../../../hooks/use-isometric-rotation";
import { useIsometricShadow } from "../../../hooks/use-isometric-shadow";
import { useIsometricShadowAnimation } from "../../../hooks/use-isometric-shadow-animation";
import { getCorrectValue } from "../../../utils/get-correct-value";
import type {
  PolymorphicComponent,
  PolymorphicRef,
} from "../../../types/polymorphic";
import type {
  IsometricGridBaseProps,
  IsometricGridProps,
} from "../types/isometric-grid.types";
import "../../../styles/isometric.css";

const IsometricGridImplementation = (
  props: IsometricGridProps,
  ref: PolymorphicRef<"div">,
) => {
  const {
    as,
    className,
    size,
    sizeMultiplier,
    lineweight,
    color = "#000",
    position,
    shadow,
    shadowAnimation,
    rotation,
    ...rest
  } = props;

  const Component = as ?? "div";

  const { width = 1, height = 1 } = sizeMultiplier ?? {};

  const positionVariables = useIsometricPosition(position);
  const shadowVariables = useIsometricShadow(shadow);
  const shadowAnimationVariables = useIsometricShadowAnimation(shadowAnimation);
  const rotationVariables = useIsometricRotation(rotation);

  const styles = useMemo<Record<PropertyKey, string>>(
    () => ({
      ...(positionVariables && { ...positionVariables }),
      ...(shadowVariables && { ...shadowVariables }),
      ...(shadowAnimationVariables && { ...shadowAnimationVariables }),
      ...(rotationVariables && { ...rotationVariables }),
      "--isometric-grid-size": getCorrectValue(size),
      "--isometric-grid-lineweight": getCorrectValue(lineweight, "%"),
      "--isometric-grid-color": color,
      "--isometric-grid-width": width?.toString() ?? "1",
      "--isometric-grid-height": height?.toString() ?? "1",
    }),
    [
      size,
      lineweight,
      color,
      width,
      height,
      positionVariables,
      shadowVariables,
      shadowAnimationVariables,
      rotationVariables,
    ],
  );

  return (
    <Component
      className={clsx(
        "isometric-grid",
        positionVariables && "isometric-position",
        shadowVariables && "isometric-shadow",
        shadowAnimationVariables && "isometric-shadow-animation",
        rotationVariables && "isometric-rotation",
        className,
      )}
      ref={ref}
      style={styles}
      {...rest}
    />
  );
};

export const IsometricGrid = forwardRef(
  IsometricGridImplementation,
) as PolymorphicComponent<"div", IsometricGridBaseProps>;
