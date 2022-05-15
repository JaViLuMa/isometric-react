import React, { FC } from "react";

import IsometricStyles from "../../styles/IsometricStyles";

const Isometric: FC<IsometricProps> = ({ children, className }) => (
  <IsometricStyles className={className}>{children}</IsometricStyles>
);

export default Isometric;
