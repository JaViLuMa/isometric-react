import { css } from "styled-components";

const hasPseudoElementBefore = css`
  &::before {
    content: "";
    display: block;
  }
`;

const hasPseudoElementAfter = css`
  &::after {
    content: "";
    display: block;
  }
`;

export { hasPseudoElementBefore, hasPseudoElementAfter };
