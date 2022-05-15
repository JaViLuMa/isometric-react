import React, { FC } from "react";
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
}) => (
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
