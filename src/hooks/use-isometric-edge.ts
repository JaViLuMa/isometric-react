import { useMemo } from "react";
import { getCorrectValue } from "../utils/get-correct-value";
import type { Edge } from "../types/edge";

const EDGE_DEPTH_VARIABLE = `--isometric-edge-depth`;
const EDGE_COLOR_VARIABLE = `--isometric-edge-color`;

export function useIsometricEdge(edge?: Edge) {
  return useMemo(() => {
    if (!edge) {
      return undefined;
    }

    return {
      [EDGE_DEPTH_VARIABLE]: getCorrectValue(edge.depth, "px"),
      [EDGE_COLOR_VARIABLE]: edge.color ?? "#fff",
    };
  }, [edge]);
}
