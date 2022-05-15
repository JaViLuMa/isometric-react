/// <reference types="react-scripts" />

type IsometricContainerProps = {
  children: JSX.Element;
  className?: string;
};

type IsometricProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

type PositionProps = {
  position?: {
    top: number;
    left: number;
    elevation: number;
  };
};

type AnimationProps = {
  animation?: {
    name: string;
    attribute: string;
    from: string;
    to: string;
    delay: string;
    duration: string;
    options: string;
  };
};

type ShadowAnimationProps = {
  shadowAnimation?: {
    name: string;
    from: number;
    to: number;
    spacingX: number;
    spacingY: number;
    delay: string;
    duration: string;
    options: string;
  };
};

type RotateProps = {
  rotate?: {
    name: string;
    from: string;
    to: string;
    delay: string;
    duration: string;
  };
};

type ShadowProps = {
  shadow?: {
    distance: number;
    spacingX: number;
    spacingY: number;
  };
};

type IsometricGridProps = ShadowProps &
  PositionProps &
  AnimationProps &
  ShadowAnimationProps &
  RotateProps & {
    size: number;
    sizeMultiplier: {
      width: number;
      height: number;
    };
    color: string;
    lineweight: number;
    children?: JSX.Element | JSX.Element[];
    className?: string;
  };

type BorderProps = {
  border?: {
    size: string;
    style: string;
    color: string;
  };
};

type EdgeProps = {
  edge?: {
    depth: string;
    color: string;
  };
};

type IsometricPlaneProps = BorderProps &
  EdgeProps &
  ShadowProps &
  PositionProps &
  AnimationProps &
  ShadowAnimationProps &
  RotateProps & {
    width: number;
    height: number;
    color: string;
    children?: JSX.Element | JSX.Element[];
    className?: string;
  };

type IsometricCubeProps = BorderProps &
  ShadowProps &
  PositionProps &
  AnimationProps &
  ShadowAnimationProps &
  RotateProps & {
    width: number;
    height: number;
    depth: number;
    color: string;
    children: JSX.Element | JSX.Element[];
    className?: string;
  };
