
# Isometric React (React version of [IsometricSass](https://github.com/MorganCaron/IsometricSass))

Full rewrite of IsometricSass using TypeScript, React and [styled-components](https://styled-components.com).

## Installation

To install using `npm`, run the following command:
```sh
npm i isometric-react
```

If you wanna install using `yarn`, run the following command:
```sh
yarn add isometric-react
```

## Initial setup

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
<img src="https://user-images.githubusercontent.com/16469387/218879862-b96d96a4-816c-42b1-8e7a-782a18244830.png" alt="Container preview" width="500" height="500" />
</td>
</tr>
</tbody>
</table>

## Begin using

Isometric React comes with couple of components that all have their specific properties.
They need to be placed inside the previously mentioned containers (replacing `<p>Hello World!</p>` with Isometric components).

## Grid Component

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
<img src="https://user-images.githubusercontent.com/16469387/218881920-fcc04d26-1c1a-44f6-a43a-730d75be0045.png" alt="Grid preview" width="500" height="500" />
</td>
</tr>
</tbody>
</table>
