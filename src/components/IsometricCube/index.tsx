import React, { FC, ReactElement } from "react";
import { IsometricCubeProps } from "../../types/IsometricCubeProps";
import IsometricCubeStyles from "../../styles/IsometricCubeStyles";

const IsometricCube: FC<IsometricCubeProps> = ({
  width,
  height,
  depth,
  color,
  children,
  border,
  shadow,
  position,
  animation,
  shadowAnimation,
  rotate,
  className,
}): ReactElement => (
  <IsometricCubeStyles
    width={width}
    height={height}
    depth={depth}
    color={color}
    border={border}
    shadow={shadow}
    position={position}
    animation={animation}
    shadowAnimation={shadowAnimation}
    rotate={rotate}
    className={className}
  >
    {children}
  </IsometricCubeStyles>
);

export default IsometricCube;
