import React from "react";
import ReactDOM from "react-dom/client";
import {
  IsometricContainer,
  Isometric,
  IsometricGrid,
  IsometricPlane,
  IsometricCube,
} from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <IsometricContainer>
      <Isometric>
        {/* <IsometricGrid
          size={2}
          sizeMultiplier={{
            width: 2,
            height: 2,
          }}
          color="#fa0015"
          lineweight={5}
          animation={{
            name: "cubeAnimation",
            attribute: "transform",
            from: "translateZ(0)",
            to: "translateZ(2rem)",
            delay: "0s",
            duration: "2s",
            options: "alternate infinite",
          }}
          shadowAnimation={{
            name: "planeShadowAnimation",
            from: 0,
            to: 1,
            spacingX: 2,
            spacingY: 2,
            delay: "0s",
            duration: "2s",
            options: "alternate infinite",
          }}
          // rotate={{
          //   name: "rotateAnimation",
          //   from: "0deg",
          //   to: "360deg",
          //   delay: "0s",
          //   duration: "7s",
          // }}
        /> */}
        {/* <IsometricCube
          width={2}
          height={2}
          depth={2}
          color="#dd604a"
          border={{ size: "2px", style: "solid", color: "#dd604a" }}
          animation={{
            name: "cubeAnimation",
            attribute: "transform",
            from: "translateZ(0)",
            to: "translateZ(2rem)",
            delay: "0s",
            duration: "2s",
            options: "alternate infinite",
          }}
          shadow={{ distance: 0.3, spacingX: 0.5, spacingY: 0.5 }}
          // shadowAnimation={{
          //   name: "planeShadowAnimation",
          //   from: 0,
          //   to: 1,
          //   spacingX: 2,
          //   spacingY: 2,
          //   delay: "0s",
          //   duration: "2s",
          //   options: "alternate infinite",
          // }}
        >
          <>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </>
        </IsometricCube> */}
        <IsometricPlane
          width={2}
          height={6}
          color="#dd604a"
          // shadow={{ distance: 0.3, spacingX: 0.5, spacingY: 0.5 }}
          animation={{
            name: "planeAnimation",
            attribute: "transform",
            from: "translateZ(0)",
            to: "translateZ(2rem)",
            delay: "0s",
            duration: "2s",
            options: "alternate infinite",
          }}
          shadowAnimation={{
            name: "planeShadowAnimation",
            from: 0,
            to: 1,
            spacingX: 2,
            spacingY: 2,
            delay: "0s",
            duration: "2s",
            options: "alternate infinite",
          }}
          // rotate={{
          //   name: "rotateAnimation",
          //   from: "0deg",
          //   to: "360deg",
          //   delay: "0s",
          //   duration: "7s",
          // }}
        />
      </Isometric>
    </IsometricContainer>
  </React.StrictMode>
);
