import React, { FC } from "react";
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
}) => (
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
