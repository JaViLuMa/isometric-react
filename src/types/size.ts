export interface SizeAsObject {
  width: string | number;
  height: string | number;
}

export type SizeProps = SizeAsObject | number | string;

export interface SizeMultiplier {
  width?: number;
  height?: number;
}
