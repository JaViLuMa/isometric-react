import styled, { css } from "styled-components";
import darken from "../utils/darken";
import after from "./after";
import keyframes from "./keyframes";
import shadowCSS from "./shadowCSS";

const IsometricCubeStyles = styled.div<IsometricCubeProps>`
  position: absolute;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  transform-origin: center;

  ${({ position }) =>
    position &&
    css`
      top: ${position.top}rem;
      left: ${position.left}rem;
      transform: translateZ(${position.elevation}rem);
    `};

  > * {
    position: absolute;
    ${({ border }) =>
      border &&
      `box-sizing: border-box; border: ${border.size} ${border.style} ${darken(
        border.color
      )};`};
    background: ${({ color }) => color};
  }
  > *:nth-child(3n + 1) {
    width: ${({ width }) => width}rem;
    height: ${({ height }) => height}rem;
  }
  > *:nth-child(3n + 2) {
    width: ${({ width }) => width}rem;
    height: ${({ depth }) => depth}rem;
  }
  > *:nth-child(3n + 3) {
    width: ${({ height }) => height}rem;
    height: ${({ depth }) => depth}rem;
  }
  > *:nth-child(1) {
    transform: translateZ(${({ depth }) => depth}rem);
  }
  > *:nth-child(2) {
    transform: translateY(${({ height, depth }) => height - depth / 2}rem)
      translateZ(${({ depth }) => depth / 2}rem) rotateX(-90deg);
  }
  > *:nth-child(3) {
    transform: translateX(${({ height, width }) => width - height / 2}rem)
      translateY(${({ height, depth }) => height / 2 - depth / 2}rem)
      translateZ(${({ depth }) => depth / 2}rem) rotateX(-90deg) rotateY(90deg);
  }
  > *:nth-child(4) {
    transform: initial;
    ${({ shadow }) =>
      shadow &&
      css`
        ${after};
        ${shadowCSS(shadow.distance, shadow.spacingX, shadow.spacingY)};
      `};
  }
  > *:nth-child(5) {
    transform: translateY(${({ depth }) => -(depth / 2)}rem)
      translateZ(${({ depth }) => depth / 2}rem) rotateX(-90deg);
  }
  > *:nth-child(6) {
    transform: translateX(${({ height }) => -(height / 2)}rem)
      translateY(${({ height, depth }) => height / 2 - depth / 2}rem)
      translateZ(${({ depth }) => depth / 2}rem) rotateX(-90deg) rotateY(90deg);
  }

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

export default IsometricCubeStyles;
