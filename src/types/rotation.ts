export interface Rotation {
  from: number | string;
  to: number | string;
  delay?: number;
  duration?: number;
}

export interface RotationProps {
  rotation?: Rotation;
}
