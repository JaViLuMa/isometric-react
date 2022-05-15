import { css } from "styled-components";
import { hasPseudoElementAfter } from "./hasPseudoElement";

const after = css`
  ${hasPseudoElementAfter};
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default after;
