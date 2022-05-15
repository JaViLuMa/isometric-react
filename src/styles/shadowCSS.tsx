import { css } from "styled-components";

const shadowCSS = (distance: number, spacingX: number, spacingY: number) =>
  css`
    &::after {
      border-radius: inherit;
      background: rgba(0, 0, 0, ${0.2 / (1 + distance / 10)});
      border-color: rgba(0, 0, 0, ${0.2 / (1 + distance / 10)});
      transform: translateX(${distance * spacingX}rem)
        translateY(${distance * spacingY}rem) translateZ(-${distance}rem);
      box-shadow: 0 0 ${distance / 10}rem rgba(0, 0, 0, 0.2);
      filter: blur(${distance / 10}rem);
    }
  `.join("");

export default shadowCSS;
