import scss from "rollup-plugin-scss";
import { defineConfig } from "tsdown";

export default defineConfig({
  platform: "neutral",
  format: "esm",
  dts: true,
  minify: true,
  external: ["react", "react-dom"],
  entry: {
    isometric: "./src/components/isometric/components/Isometric.tsx",
    "isometric-plane":
      "./src/components/isometric-plane/components/IsometricPlane.tsx",
    "isometric-cube":
      "./src/components/isometric-cube/components/IsometricCube.tsx",
    "isometric-grid":
      "./src/components/isometric-grid/components/IsometricGrid.tsx",
  },
  plugins: [
    scss({
      include: ["src/styles/isometric.css"],
      fileName: "isometric.css",
      outputStyle: "compressed",
    }),
  ],
});
