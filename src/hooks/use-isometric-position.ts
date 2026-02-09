import { useMemo } from "react";
import { getCorrectValue } from "../utils/get-correct-value";
import type { Position } from "../types/position";

const TOP_VARIABLE = `--isometric-position-top`;
const LEFT_VARIABLE = `--isometric-position-left`;
const ELEVATION_VARIABLE = `--isometric-position-elevation`;

export function useIsometricPosition(position?: Position) {
  return useMemo(() => {
    if (!position) {
      return undefined;
    }

    return {
      [TOP_VARIABLE]: getCorrectValue(position.top),
      [LEFT_VARIABLE]: getCorrectValue(position.left),
      [ELEVATION_VARIABLE]: getCorrectValue(position.elevation),
    };
  }, [position]);
}
