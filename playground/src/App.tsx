import { Isometric } from "../../dist/isometric";
import { IsometricCube } from "../../dist/isometric-cube";
import "../../dist/isometric.css";

export function App() {
  return (
    <Isometric>
      <IsometricCube
        border={{ size: "1px", color: "red", style: "solid" }}
        depth="5rem"
        size={{ width: "5rem", height: "5rem" }}
      >
        <IsometricCube.Side side="top">hello</IsometricCube.Side>
        <IsometricCube.Side side="front-left">hello</IsometricCube.Side>
        <IsometricCube.Side side="front-right">hello</IsometricCube.Side>
        <IsometricCube.Side side="back-right">hello</IsometricCube.Side>
      </IsometricCube>
    </Isometric>
  );
}
