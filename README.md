
# Isometric React (React version of [IsometricSass](https://github.com/MorganCaron/IsometricSass)) #

Full rewrite of IsometricSass using TypeScript, React and [styled-components](https://styled-components.com).

## Installation ##

To install using `npm`, run the following command:
```sh
npm i isometric-react
```

If you wanna install using `yarn`, run the following command:
```sh
yarn add isometric-react
```

## Initial setup ##

To begin using this package, you will have to import two wrappers that will act as a container for all of your HTML:

<table>
<thead>
<tr>
<th>Code</th>
<th>Preview</th>
</tr>
</thead>
<tbody>
<tr>
<td>
      
```ts
import { IsometricContainer, Isometric } from "isometric-react";

const Showcase = () => {
  return (
    <IsometricContainer>
      <Isometric>
        <p>Hello World!</p>
      </Isometric>
    </IsometricContainer>
  );
};
```
      
</td>
<td>
<img src="https://user-images.githubusercontent.com/16469387/218879862-b96d96a4-816c-42b1-8e7a-782a18244830.png" alt="Container preview" width="300" height="300" />
</td>
</tr>
</tbody>
</table>

## Begin using ##

Isometric React comes with couple of components that all have their specific properties.
They need to be placed inside the previously mentioned containers (replacing `<p>Hello World!</p>` with Isometric components).

Below you will find API for each component that exists inside this package. For more advance usage (like shadows, position changing, animations, etc.) you can find that further below under `Advanced API` section.

## Grid Component ##

<table>
<thead>
<tr>
<th>Code</th>
<th>Preview</th>
</tr>
</thead>
<tbody>
<tr>
<td>
      
```ts
import { IsometricGrid } from "isometric-react";

const Showcase = () => {
  return (
    <IsometricContainer>
      <Isometric>
      
        <IsometricGrid
          size={10}
          sizeMultiplier={{
            width: 5,
            height: 5,
          }}
          color="red"
          lineweight={2}
        />
        
      </Isometric>
    </IsometricContainer>
  );
};
```
      
</td>
<td>
<img src="https://user-images.githubusercontent.com/16469387/218881920-fcc04d26-1c1a-44f6-a43a-730d75be0045.png" alt="Grid preview" width="300" height="300" />
</td>
</tr>
</tbody>
</table>

### Grid API ###

| Property name  | Description                                                                  | Type                                | Required |
|----------------|------------------------------------------------------------------------------|-------------------------------------|----------|
| size           | Defines how large will grid appear to be                                     | `number`                            | `True`   |
| sizeMultiplier | Defines number of rows and columns                                           | `{ width: number; height: number }` | `True`   |
| color          | Defines the color of the grid. Accepts RGB, Hex or just a regular color name | `string`                            | `True`   |
| lineweight     | Defines the thickness of the grid lines                                      | `number`                            | `True`   |
| children       | Takes any HTML or JSX/TSX elements and renders them                          | `JSX.Element \| JSX.Element[]`      | `False`  |

## Plane Component ##

<table>
<thead>
<tr>
<th>Code</th>
<th>Preview</th>
</tr>
</thead>
<tbody>
<tr>
<td>
      
```ts
import { IsometricGrid } from "isometric-react";

const Showcase = () => {
  return (
    <IsometricContainer>
      <Isometric>

        <IsometricPlane color="#ffffff" width={5} height={5} />
        
      </Isometric>
    </IsometricContainer>
  );
};
```
      
</td>
<td>
<img src="https://user-images.githubusercontent.com/16469387/219105820-d0ba5095-1b97-4c81-a939-89ded5fcd81f.png" alt="Plane preview" width="300" height="300" />
</td>
</tr>
</tbody>
</table>

### Plane API ###

| Property name | Description                                                                                                                                              | Type                                                                                                                                                      | Required |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| width         | Defines the width of a plane                                                                                                                             | `number`                                                                                                                                                  | `True`   |
| height        | Defines the height of a plane                                                                                                                            | `number`                                                                                                                                                  | `True`   |
| color         | Defines the color of the grid. Accepts RGB, Hex or just a regular color name                                                                             | `string`                                                                                                                                                  | `True`   |
| border        | Defines the border of the plane                                                                                                                          | `{ size: string; style: 'dotted' \| 'dashed' \| 'solid' \| 'double' \| 'groove' \| 'ridge' \| 'inset' \| 'outset' \| 'none' \| 'hidden'; color: string }` | `False`  |
| edge          | [Defines the "shadow" plane of the current plane (works best with lower depth values)](https://user-images.githubusercontent.com/16469387/219111806-282f3999-238a-44cd-9473-1268d8dab6b7.png) | `{ depth: string ([number][unit]); color: string (HEX colors only); }`                                                                                    | `False`  |
| children      | Takes any HTML or JSX/TSX elements and renders them                                                                                                      | `JSX.Element \| JSX.Element[]`                                                                                                                            | `False`  |
