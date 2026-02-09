import { useMemo } from "react";
import { getCorrectValue } from "../utils/get-correct-value";
import type { Border } from "../types/border";

const BORDER_SIZE_VARIABLE = `--isometric-border-size`;
const BORDER_STYLE_VARIABLE = `--isometric-border-style`;
const BORDER_COLOR_VARIABLE = `--isometric-border-color`;

export function useIsometricBorder(border?: Border, suffix = "") {
  return useMemo(() => {
    if (!border) {
      return undefined;
    }

    return {
      [`${BORDER_SIZE_VARIABLE}${suffix}`]: getCorrectValue(border.size, "px"),
      [`${BORDER_STYLE_VARIABLE}${suffix}`]: border.style ?? "solid",
      [`${BORDER_COLOR_VARIABLE}${suffix}`]: border.color ?? "#000",
    };
  }, [border, suffix]);
}
