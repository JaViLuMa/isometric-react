import { useMemo } from "react";
import { getCorrectValue } from "../utils/get-correct-value";
import type { Shadow } from "../types/shadow";

const SHADOW_DISTANCE_VARIABLE = `--isometric-shadow-distance`;
const SHADOW_DISTANCE_WITH_UNIT_VARIABLE = `--isometric-shadow-distance-with-unit`;
const SHADOW_SPACING_X_VARIABLE = `--isometric-shadow-spacing-x`;
const SHADOW_SPACING_Y_VARIABLE = `--isometric-shadow-spacing-y`;

export function useIsometricShadow(shadow?: Shadow) {
  return useMemo(() => {
    if (!shadow) {
      return undefined;
    }

    return {
      [SHADOW_DISTANCE_VARIABLE]: parseFloat(
        shadow.distance?.toString() ?? "0",
      ).toString(),
      [SHADOW_DISTANCE_WITH_UNIT_VARIABLE]: getCorrectValue(shadow.distance),
      [SHADOW_SPACING_X_VARIABLE]: shadow.spacingX.toString(),
      [SHADOW_SPACING_Y_VARIABLE]: shadow.spacingY.toString(),
    };
  }, [shadow]);
}
