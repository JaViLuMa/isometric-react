import clsx from "clsx";
import { forwardRef, useMemo } from "react";
import { useIsometricBorder } from "../../../hooks/use-isometric-border";
import { useIsometricEdge } from "../../../hooks/use-isometric-edge";
import { useIsometricPosition } from "../../../hooks/use-isometric-position";
import { useIsometricRotation } from "../../../hooks/use-isometric-rotation";
import { useIsometricShadow } from "../../../hooks/use-isometric-shadow";
import { useIsometricShadowAnimation } from "../../../hooks/use-isometric-shadow-animation";
import { useIsometricSize } from "../../../hooks/use-isometric-size";
import type {
  PolymorphicComponent,
  PolymorphicRef,
} from "../../../types/polymorphic";
import type {
  IsometricPlaneBaseProps,
  IsometricPlaneProps,
} from "../types/isometric-plane.types";
import "../../../styles/isometric.css";

const IsometricPlaneImplementation = (
  props: IsometricPlaneProps,
  ref: PolymorphicRef<"div">,
) => {
  const {
    as,
    className,
    size,
    color = "#000",
    position,
    border,
    edge,
    shadow,
    shadowAnimation,
    rotation,
    ...rest
  } = props;

  const Component = as ?? "div";

  const sizeVariables = useIsometricSize(size, "plane");
  const positionVariables = useIsometricPosition(position);
  const borderVariables = useIsometricBorder(border);
  const edgeVariables = useIsometricEdge(edge);
  const shadowVariables = useIsometricShadow(shadow);
  const shadowAnimationVariables = useIsometricShadowAnimation(shadowAnimation);
  const rotationVariables = useIsometricRotation(rotation);

  const styles = useMemo<Record<PropertyKey, string>>(
    () => ({
      ...sizeVariables,
      ...(positionVariables && { ...positionVariables }),
      ...(borderVariables && { ...borderVariables }),
      ...(edgeVariables && { ...edgeVariables }),
      ...(shadowVariables && { ...shadowVariables }),
      ...(shadowAnimationVariables && { ...shadowAnimationVariables }),
      ...(rotationVariables && { ...rotationVariables }),
      "--isometric-plane-color": color,
    }),
    [
      sizeVariables,
      positionVariables,
      borderVariables,
      edgeVariables,
      color,
      shadowVariables,
      shadowAnimationVariables,
      rotationVariables,
    ],
  );

  return (
    <Component
      className={clsx(
        "isometric-plane",
        positionVariables && "isometric-position",
        borderVariables && "isometric-border",
        edgeVariables && "isometric-edge",
        (shadowVariables || shadowAnimationVariables) && "isometric-shadow",
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

export const IsometricPlane = forwardRef(
  IsometricPlaneImplementation,
) as PolymorphicComponent<"div", IsometricPlaneBaseProps>;
