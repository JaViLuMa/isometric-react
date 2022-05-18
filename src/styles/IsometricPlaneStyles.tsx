import styled, { css } from "styled-components";
import before from "./before";
import after from "./after";
import darken from "../utils/darken";
import keyframes from "./keyframes";
import shadowCSS from "./shadowCSS";
import { IsometricPlaneProps } from "../types/IsometricPlaneProps";

const IsometricPlaneStyles = styled.div<IsometricPlaneProps>`
  position: absolute;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  background: ${({ color }) => color};

  ${({ position }) =>
    position &&
    css`
      top: ${position.top}rem;
      left: ${position.left}rem;
      transform: translateZ(${position.elevation}rem);
    `};

  ${({ border }) =>
    border &&
    css`
      box-sizing: border-box;
      border: ${border.size} ${border.style} ${border.color};
    `};

  ${({ edge }) =>
    edge &&
    css`
      ${before};
      &::before {
        border-radius: inherit;
        transform: translateZ(-${edge.depth});
        background: ${darken(edge.color)};
        box-shadow: 0 0 ${darken(edge.color)};
      }
    `};

  ${({ shadowAnimation }) =>
    shadowAnimation &&
    css`
      ${after};
      ${shadowCSS(
        shadowAnimation.from,
        shadowAnimation.spacingX,
        shadowAnimation.spacingY
      )};

      @keyframes ${shadowAnimation.name} {
        from {
          background: rgba(0, 0, 0, ${0.2 / (1 + shadowAnimation.from / 10)});
          border-color: rgba(0, 0, 0, ${0.2 / (1 + shadowAnimation.from / 10)});
          transform: translateX(
              ${shadowAnimation.from * shadowAnimation.spacingX}rem
            )
            translateY(${shadowAnimation.from * shadowAnimation.spacingY}rem)
            translateZ(-${shadowAnimation.from}rem);
          box-shadow: 0 0 ${shadowAnimation.from / 10}rem rgba(0, 0, 0, 0.2);
          filter: blur(${shadowAnimation.from / 10}rem);
        }

        to {
          background: rgba(0, 0, 0, ${0.2 / (1 + shadowAnimation.to / 10)});
          border-color: rgba(0, 0, 0, ${0.2 / (1 + shadowAnimation.to / 10)});
          transform: translateX(
              ${shadowAnimation.to * shadowAnimation.spacingX}rem
            )
            translateY(${shadowAnimation.to * shadowAnimation.spacingY}rem)
            translateZ(-${shadowAnimation.to}rem);
          box-shadow: 0 0 ${shadowAnimation.to / 10}rem rgba(0, 0, 0, 0.2);
          filter: blur(${shadowAnimation.to / 10}rem);
        }
      }

      &::after {
        animation: ${shadowAnimation.name} ${shadowAnimation.duration}
          ease-in-out forwards ${shadowAnimation.options};
        animation-delay: ${shadowAnimation.delay};
      }
    `};

  ${({ animation }) =>
    animation &&
    css`
      ${keyframes(
        animation.name,
        animation.from,
        animation.to,
        animation.attribute
      )};

      ${animation.attribute}: ${animation.from};
      animation: ${animation.name} ${animation.duration} ease-in-out forwards
        ${animation.options};
      animation-delay: ${animation.delay};
    `};

  ${({ shadow }) =>
    shadow &&
    css`
      ${after};
      ${shadowCSS(shadow.distance, shadow.spacingX, shadow.spacingY)};
    `};

  ${({ rotate }) =>
    rotate &&
    css`
      transform-origin: center;
      ${keyframes(
        rotate.name,
        `rotateZ(${rotate.from})`,
        `rotateZ(${rotate.to})`
      )};

      transform: rotateZ(${rotate.from});
      animation: ${rotate.name} ${rotate.duration} linear forwards infinite;
      animation-delay: ${rotate.delay};
    `}
`;

export default IsometricPlaneStyles;
