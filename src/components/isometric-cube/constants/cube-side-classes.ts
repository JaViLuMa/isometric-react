import type { CubeSides } from "../types/isometric-cube.types";

export const cubeSideClasses: Record<CubeSides, string> = {
  top: "isometric-cube-top",
  "front-left": "isometric-cube-front-left",
  "front-right": "isometric-cube-front-right",
  bottom: "isometric-cube-bottom",
  "back-left": "isometric-cube-back-left",
  "back-right": "isometric-cube-back-right",
};
