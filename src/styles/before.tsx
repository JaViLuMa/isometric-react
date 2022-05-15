import { css } from "styled-components";
import { hasPseudoElementBefore } from "./hasPseudoElement";

const before = css`
  ${hasPseudoElementBefore};
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default before;
