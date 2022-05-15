import { css } from "styled-components";

const keyframes = (
  name: string,
  from: string | number,
  to: string | number,
  attribute?: string
) =>
  css`
    @keyframes ${name} {
      from {
        ${attribute ? `${attribute}: ${from};` : `transform: ${from};`};
      }

      to {
        ${attribute ? `${attribute}: ${to};` : `transform: ${to};`};
      }
    }
  `.join("");

export default keyframes;
