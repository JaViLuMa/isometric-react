import React, { FC } from "react";

import IsometricContainerStyles from "../../styles/IsometricContainerStyles";

const IsometricContainer: FC<IsometricContainerProps> = ({
  children,
  className,
}) => (
  <IsometricContainerStyles className={className}>
    {children}
  </IsometricContainerStyles>
);

export default IsometricContainer;
