# Grouped Bar Chart

A grouped bar chart is used to compare values across different categories, with bars grouped together for subcategories. This chart is effective for showing relationships between two categorical variables and a quantitative variable.

## Installation

The `GroupedBarChart` component is part of the `@rexora/charts` package. You can install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Here's a basic example of how to use the `GroupedBarChart` component:
```
tsx
import React from 'react';
import { GroupedBarChart } from '@rexora/charts';

const data = [
  { category: 'A', subcategory: 'X', value: 20 },
  { category: 'A', subcategory: 'Y', value: 25 },
  { category: 'B', subcategory: 'X', value: 15 },
  { category: 'B', subcategory: 'Y', value: 30 },
];

const MyGroupedBarChart = () => {
  return (
    <div>
      <h2>Grouped Bar Chart Example</h2>
      <GroupedBarChart data={data} width={600} height={400} />
    </div>
  );
};

export default MyGroupedBarChart;
```
## Props and Options

The `GroupedBarChart` component accepts the following props:

| Prop Name | Type   | Description                                     | Default |
| :-------- | :----- | :---------------------------------------------- | :------ |
| `data`    | `Array<Object>` | The data to be visualized. Each object should contain properties for the main category, subcategory, and value. | `[]`    |
| `width`   | `number` | The width of the chart in pixels.               | `auto`  |
| `height`  | `number` | The height of the chart in pixels.              | `auto`  |
| `options` | `Object` | An object for additional configuration options. (Details below) | `{}`    |

**Options Object:**

| Option Name       | Type   | Description                                     | Default   |
| :---------------- | :----- | :---------------------------------------------- | :-------- |
| `margin`          | `Object` | Margins for the chart (top, right, bottom, left). | `{ top: 20, right: 30, bottom: 40, left: 40 }` |
| `categoryField`   | `string` | The field name in the data for the main category. | `'category'` |
| `subcategoryField`| `string` | The field name in the data for the subcategory. | `'subcategory'` |
| `valueField`      | `string` | The field name in the data for the value.       | `'value'` |
| `colors`          | `Array<string>` | An array of colors to use for the subcategories. | `D3 default color scheme` |
| `xAxisLabel`      | `string` | Label for the x-axis.                           | `''`      |
| `yAxisLabel`      | `string` | Label for the y-axis.                           | `''`      |
| `tooltip`         | `boolean` | Whether to enable tooltips on hover.            | `true`    |
| `tooltipFormatter`| `(d: Object) => string` | A function to format the tooltip content. | `default formatter` |

## Development

The `GroupedBarChart` component is built using React and D3. You can find the source code in `packages/charts/src/charts/GroupedBarChart.tsx`. Feel free to contribute or customize it to your needs.