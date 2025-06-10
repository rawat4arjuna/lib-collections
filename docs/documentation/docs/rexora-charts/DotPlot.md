# Dot Plot

A Dot Plot is a simple form of data visualization that uses dots to show the distribution of a dataset. It is particularly useful for showing the shape of a small to moderate-sized dataset.

## Installation

The `DotPlot` component is part of the `@rexora/charts` package. You can install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Here's an example of how to use the `DotPlot` component:
```
tsx
import React from 'react';
import { DotPlot } from '@rexora/charts';

const data = [
  { value: 1 },
  { value: 2 },
  { value: 2 },
  { value: 3 },
  { value: 3 },
  { value: 3 },
  { value: 4 },
  { value: 4 },
  { value: 5 },
];

const MyComponent = () => {
  return (
    <div>
      <h2>My Dot Plot</h2>
      <DotPlot data={data} width={600} height={400} />
    </div>
  );
};

export default MyComponent;
```
## Props and Options

The `DotPlot` component accepts the following props:

| Prop     | Type   | Description                           | Default     |
| :------- | :----- | :------------------------------------ | :---------- |
| `data`   | `Array` | The data array for the dot plot. Each object should have a `value` property. | `[]`        |
| `width`  | `number` | The width of the chart SVG.           | `null`      |
| `height` | `number` | The height of the chart SVG.          | `null`      |
| `options`| `object` | Configuration options for the chart. | `{}`        |

**Options**

| Option       | Type    | Description                                  | Default |
| :----------- | :------ | :------------------------------------------- | :------ |
| `dotColor`   | `string` | The color of the dots.                       | `#333`  |
| `dotRadius`  | `number` | The radius of the dots.                      | `3`     |
| `margin`     | `object` | Margins around the chart ({ top, right, bottom, left }). | `{ top: 20, right: 20, bottom: 30, left: 40 }` |