# Stacked Bar Chart

A stacked bar chart is used to show how different parts contribute to a whole over categories. It's effective for comparing the total value across categories while also showing the composition of each total.

## Installation

The Rexora Charts components are part of the `@rexora/charts` package. Install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Import the `StackedBarChart` component and use it in your React application. You will need to provide data in the appropriate format and configure the chart using props.
```
tsx
import React from 'react';
import { StackedBarChart } from '@rexora/charts';

const myData = [
  { category: 'A', group1: 20, group2: 30, group3: 10 },
  { category: 'B', group1: 15, group2: 25, group3: 20 },
  { category: 'C', group1: 30, group2: 10, group3: 15 },
];

const MyComponent = () => {
  return (
    <div>
      <h2>Stacked Bar Chart Example</h2>
      <StackedBarChart
        data={myData}
        keys={['group1', 'group2', 'group3']} // Keys for the stacked values
        categoryKey="category" // Key for the categories on the x-axis
        width={600}
        height={400}
        margin={{ top: 20, right: 30, bottom: 40, left: 40 }}
      />
    </div>
  );
};

export default MyComponent;
```
## Props and Options

The `StackedBarChart` component accepts various props to customize its appearance and behavior:

| Prop Name    | Type             | Description                                                     | Default     |
| :----------- | :--------------- | :-------------------------------------------------------------- | :---------- |
| `data`       | `Array<Object>`  | The dataset for the chart. Each object should represent a category. | `[]`        |
| `keys`       | `string[]`       | An array of strings representing the keys in the data objects to be stacked. | `[]`        |
| `categoryKey`| `string`         | The key in the data objects that represents the categories (usually on the x-axis). | `''`        |
| `width`      | `number`         | The width of the chart SVG container.                           | `600`       |
| `height`     | `number`         | The height of the chart SVG container.                          | `400`       |
| `margin`     | `object`         | An object specifying the top, right, bottom, and left margins. | `{ top: 20, right: 20, bottom: 30, left: 30 }` |
| `colors`     | `string[]` or `(d: any, i: number) => string` | An array of colors or a function to determine the color of each stack segment. | `d3.schemeCategory10` |
| `tooltip`    | `boolean`        | Whether to enable tooltips on hover.                            | `false`     |
| `xAxisLabel` | `string`         | Label for the x-axis.                                           | `''`        |
| `yAxisLabel` | `string`         | Label for the y-axis.                                           | `''`        |
| `enableGridX`| `boolean`        | Whether to show vertical grid lines.                            | `false`     |
| `enableGridY`| `boolean`        | Whether to show horizontal grid lines.                          | `false`     |
| `borderRadius`| `number`         | The border radius for the bars.                                 | `0`         |
| `onBarClick` | `(d: any) => void` | Callback function triggered when a bar segment is clicked.      | `undefined` |

You can pass other standard SVG element props to the `StackedBarChart` component as well.