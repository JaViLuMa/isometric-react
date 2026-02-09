export interface ShadowAnimation {
  from: number | string;
  to: number | string;
  spacingX: number;
  spacingY: number;
  delay?: number;
  duration?: number;
  options?: string;
}

export interface ShadowAnimationProps {
  shadowAnimation?: ShadowAnimation;
}
