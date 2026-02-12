import clsx from "clsx";
import { forwardRef, useMemo } from "react";
import { useIsometricBorder } from "../../../hooks/use-isometric-border";
import { useIsometricPosition } from "../../../hooks/use-isometric-position";
import { useIsometricRotation } from "../../../hooks/use-isometric-rotation";
import { useIsometricShadow } from "../../../hooks/use-isometric-shadow";
import { useIsometricShadowAnimation } from "../../../hooks/use-isometric-shadow-animation";
import { useIsometricSize } from "../../../hooks/use-isometric-size";
import { getCorrectValue } from "../../../utils/get-correct-value";
import { cubeSideClasses } from "../constants/cube-side-classes";
import type {
  PolymorphicComponent,
  PolymorphicRef,
} from "../../../types/polymorphic";
import type {
  IsometricCubeBaseProps,
  IsometricCubeProps,
  IsometricCubeSideBaseProps,
  IsometricCubeSideProps,
} from "../types/isometric-cube.types";
import "../../../styles/isometric.css";

const IsometricCubeImplementation = (
  props: IsometricCubeProps,
  ref: PolymorphicRef<"div">,
) => {
  const {
    as,
    className,
    children,
    depth,
    size,
    border,
    position,
    shadow,
    shadowAnimation,
    rotation,
    ...rest
  } = props;

  const Component = as ?? "div";

  const sizeVariables = useIsometricSize(size, "cube");
  const borderVariables = useIsometricBorder(border, "-cube");
  const positionVariables = useIsometricPosition(position);
  const shadowVariables = useIsometricShadow(shadow);
  const shadowAnimationVariables = useIsometricShadowAnimation(shadowAnimation);
  const rotationVariables = useIsometricRotation(rotation);

  const styles = useMemo<Record<PropertyKey, string>>(
    () => ({
      ...sizeVariables,
      ...(borderVariables && { ...borderVariables }),
      ...(positionVariables && { ...positionVariables }),
      ...(shadowVariables && { ...shadowVariables }),
      ...(shadowAnimationVariables && { ...shadowAnimationVariables }),
      ...(rotationVariables && { ...rotationVariables }),
      "--isometric-cube-depth": getCorrectValue(depth),
    }),
    [
      depth,
      sizeVariables,
      borderVariables,
      positionVariables,
      shadowVariables,
      shadowAnimationVariables,
      rotationVariables,
    ],
  );

  return (
    <Component
      className={clsx(
        "isometric-cube",
        positionVariables && "isometric-position",
        (shadowVariables || shadowAnimationVariables) && "isometric-shadow",
        shadowAnimationVariables && "isometric-shadow-animation",
        rotationVariables && "isometric-rotation",
        className,
      )}
      ref={ref}
      style={styles}
      {...rest}
    >
      {children}
    </Component>
  );
};

const IsometricCubeSideImplementation = (
  props: IsometricCubeSideProps,
  ref: PolymorphicRef<"div">,
) => {
  const { as, className, children, side, ...rest } = props;

  if (!children) {
    return null;
  }

  const Component = as ?? "div";

  return (
    <Component
      className={clsx(cubeSideClasses[side], className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
};

const IsometricCubeSide = forwardRef(
  IsometricCubeSideImplementation,
) as PolymorphicComponent<"div", IsometricCubeSideBaseProps>;

const IsometricCubeBase = forwardRef(
  IsometricCubeImplementation,
) as PolymorphicComponent<"div", IsometricCubeBaseProps>;

export const IsometricCube = Object.assign(IsometricCubeBase, {
  Side: IsometricCubeSide,
});
