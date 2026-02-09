import { useMemo } from "react";
import { getCorrectValue } from "../utils/get-correct-value";
import { useIsometricShadow } from "./use-isometric-shadow";
import type { Shadow } from "../types/shadow";
import type { ShadowAnimation } from "../types/shadow-animation";

const SHADOW_ANIMATION_FROM_VARIABLE = `--isometric-shadow-animation-from`;
const SHADOW_ANIMATION_FROM_WITH_UNIT_VARIABLE = `--isometric-shadow-animation-from-with-unit`;
const SHADOW_ANIMATION_TO_VARIABLE = `--isometric-shadow-animation-to`;
const SHADOW_ANIMATION_TO_WITH_UNIT_VARIABLE = `--isometric-shadow-animation-to-with-unit`;
const SHADOW_ANIMATION_DELAY_VARIABLE = `--isometric-shadow-animation-delay`;
const SHADOW_ANIMATION_DURATION_VARIABLE = `--isometric-shadow-animation-duration`;
const SHADOW_ANIMATION_OPTIONS_VARIABLE = `--isometric-shadow-animation-options`;

export function useIsometricShadowAnimation(shadowAnimation?: ShadowAnimation) {
  const shadowPropertiesToUse: Shadow | undefined = shadowAnimation
    ? {
        distance: shadowAnimation.from,
        spacingX: shadowAnimation.spacingX,
        spacingY: shadowAnimation.spacingY,
      }
    : undefined;

  const shadowStyles = useIsometricShadow(shadowPropertiesToUse);

  return useMemo(() => {
    if (!shadowStyles) {
      return undefined;
    }

    return {
      ...shadowStyles,
      [SHADOW_ANIMATION_FROM_VARIABLE]: parseFloat(
        shadowAnimation?.from?.toString() ?? "0",
      ).toString(),
      [SHADOW_ANIMATION_FROM_WITH_UNIT_VARIABLE]: getCorrectValue(
        shadowAnimation?.from,
      ),
      [SHADOW_ANIMATION_TO_VARIABLE]: parseFloat(
        shadowAnimation?.to?.toString() ?? "0",
      ).toString(),
      [SHADOW_ANIMATION_TO_WITH_UNIT_VARIABLE]: getCorrectValue(
        shadowAnimation?.to,
      ),
      [SHADOW_ANIMATION_DELAY_VARIABLE]: getCorrectValue(
        shadowAnimation?.delay,
        "s",
      ),
      [SHADOW_ANIMATION_DURATION_VARIABLE]: getCorrectValue(
        shadowAnimation?.duration,
        "s",
      ),
      [SHADOW_ANIMATION_OPTIONS_VARIABLE]: shadowAnimation?.options ?? "normal",
    };
  }, [shadowAnimation, shadowStyles]);
}
