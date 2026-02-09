import { useMemo } from "react";
import { getCorrectValue } from "../utils/get-correct-value";
import type { Rotation } from "../types/rotation";

const ROTATION_FROM_VARIABLE = `--isometric-rotation-from`;
const ROTATION_TO_VARIABLE = `--isometric-rotation-to`;
const ROTATION_DELAY_VARIABLE = `--isometric-rotation-delay`;
const ROTATION_DURATION_VARIABLE = `--isometric-rotation-duration`;

export function useIsometricRotation(rotation?: Rotation) {
  return useMemo(() => {
    if (!rotation) {
      return undefined;
    }

    return {
      [ROTATION_FROM_VARIABLE]: getCorrectValue(rotation.from, "deg"),
      [ROTATION_TO_VARIABLE]: getCorrectValue(rotation.to, "deg"),
      [ROTATION_DELAY_VARIABLE]: getCorrectValue(rotation.delay, "s"),
      [ROTATION_DURATION_VARIABLE]: getCorrectValue(rotation.duration, "s"),
    };
  }, [rotation]);
}
