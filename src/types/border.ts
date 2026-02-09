import type { CSSProperties } from "react";

export interface Border {
  size?: CSSProperties["borderWidth"];
  style?: CSSProperties["borderStyle"];
  color?: CSSProperties["borderColor"];
}

export interface BorderProps {
  border?: Border;
}
