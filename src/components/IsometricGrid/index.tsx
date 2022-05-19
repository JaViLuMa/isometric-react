import React, { FC, ReactElement } from "react";
import { IsometricGridProps } from "../../types/IsometricGridProps";
import IsometricGridStyles from "../../styles/IsometricGridStyles";

const IsometricGrid: FC<IsometricGridProps> = ({
  size,
  sizeMultiplier,
  color,
  lineweight,
  children,
  shadow,
  position,
  animation,
  shadowAnimation,
  rotate,
  className,
}): ReactElement => (
  <IsometricGridStyles
    size={size}
    sizeMultiplier={sizeMultiplier}
    color={color}
    lineweight={lineweight}
    shadow={shadow}
    position={position}
    animation={animation}
    shadowAnimation={shadowAnimation}
    rotate={rotate}
    className={className}
  >
    {children}
  </IsometricGridStyles>
);

export default IsometricGrid;
