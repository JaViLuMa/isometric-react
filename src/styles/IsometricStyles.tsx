import styled from "styled-components";

const IsometricStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  overflow: visible;
  transform-style: preserve-3d;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
  * {
    transform-style: preserve-3d;
  }
`;

export default IsometricStyles;
