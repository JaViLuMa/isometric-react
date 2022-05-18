import React, { FC, ReactElement } from "react";
import { IsometricContainerProps } from "../../types/IsometricContainerProps";
import IsometricContainerStyles from "../../styles/IsometricContainerStyles";

const IsometricContainer: FC<IsometricContainerProps> = ({
  children,
  className,
}): ReactElement => (
  <IsometricContainerStyles className={className}>
    {children}
  </IsometricContainerStyles>
);

export default IsometricContainer;
