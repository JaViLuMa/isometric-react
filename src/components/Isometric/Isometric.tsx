import React, { FC, ReactElement } from "react";
import { IsometricProps } from "../../types/IsometricProps";
import IsometricStyles from "../../styles/IsometricStyles";

const Isometric: FC<IsometricProps> = ({
  children,
  className,
}): ReactElement => (
  <IsometricStyles className={className}>{children}</IsometricStyles>
);

export default Isometric;
