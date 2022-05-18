import React, { FC, ReactElement } from "react";
import { IsometricPlaneProps } from "../../types/IsometricPlaneProps";
import IsometricPlaneStyles from "../../styles/IsometricPlaneStyles";

const IsometricPlane: FC<IsometricPlaneProps> = ({
  width,
  height,
  color,
  children,
  border,
  edge,
  shadow,
  position,
  animation,
  shadowAnimation,
  rotate,
  className,
}): ReactElement => (
  <IsometricPlaneStyles
    width={width}
    height={height}
    color={color}
    border={border}
    edge={edge}
    shadow={shadow}
    position={position}
    animation={animation}
    shadowAnimation={shadowAnimation}
    rotate={rotate}
    className={className}
  >
    {children}
  </IsometricPlaneStyles>
);

export default IsometricPlane;
