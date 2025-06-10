# Lollipop Chart

A Lollipop Chart is a variation of a bar chart where each bar is replaced by a line ending in a dot. It's useful for comparing values across different categories, especially when the number of categories is large.

## Installation

The Lollipop Chart component is part of the `@rexora/charts` package. You can install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Here's a basic example of how to use the `LollipopChart` component:
```
tsx
import React from 'react';
import { LollipopChart } from '@rexora/charts';

const data = [
  { category: 'A', value: 20 },
  { category: 'B', value: 45 },
  { category: 'C', value: 30 },
  { category: 'D', value: 60 },
  { category: 'E', value: 25 },
];

const MyLollipopChart = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <LollipopChart data={data} />
    </div>
  );
};

export default MyLollipopChart;
```
## Props and Options

The `LollipopChart` component accepts the following props:

| Prop Name      | Type               | Description                                          | Default   |
| :------------- | :----------------- | :--------------------------------------------------- | :-------- |
| `data`         | `Array<object>`    | An array of data objects. Each object should have properties for the category and value. | `[]`      |
| `width`        | `number`           | The width of the chart container (optional, for fixed size). | `'100%'`  |
| `height`       | `number`           | The height of the chart container (optional, for fixed size). | `'300px'` |
| `margin`       | `object`           | Margins for the chart (top, right, bottom, left).  | `{ top: 20, right: 20, bottom: 30, left: 40 }` |
| `categoryAccessor` | `(d: object) => string` | Accessor function for the category value.        | `d => d.category` |
| `valueAccessor`  | `(d: object) => number` | Accessor function for the value.             | `d => d.value` |
| `color`        | `string` or `(d: object) => string` | Color of the lollipop line and circle.           | `'steelblue'` |
| `circleRadius` | `number`           | The radius of the circle at the end of the line. | `4`       |
| `xAxisLabel`   | `string`           | Label for the x-axis.                                | `''`      |
| `yAxisLabel`   | `string`           | Label for the y-axis.                                | `''`      |
| `tooltip`      | `(d: object) => React.ReactNode` | A function to render a custom tooltip content. | `undefined` |
| `responsive`   | `boolean`          | Whether the chart should be responsive.              | `true`    |

**Note:** When `responsive` is true, `width` and `height` props will be used as initial dimensions, and the chart will resize with its container.