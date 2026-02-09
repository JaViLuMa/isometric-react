import { useMemo } from "react";
import { getCorrectValue } from "../utils/get-correct-value";
import type { IsometricElements } from "../types/isometric-elements";
import type { SizeProps } from "../types/size";

export function useIsometricSize(size: SizeProps, element: IsometricElements) {
  return useMemo(() => {
    const widthVariable = `--isometric-${element}-width`;
    const heightVariable = `--isometric-${element}-height`;

    if (typeof size === "number" || typeof size === "string") {
      return {
        [widthVariable]: getCorrectValue(size),
        [heightVariable]: getCorrectValue(size),
      };
    }

    const { width, height } = size;

    return {
      [widthVariable]: getCorrectValue(width),
      [heightVariable]: getCorrectValue(height),
    };
  }, [element, size]);
}
