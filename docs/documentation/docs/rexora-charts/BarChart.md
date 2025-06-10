# Bar Chart

The Bar Chart is a fundamental data visualization that uses rectangular bars to represent the values of different categories. The length of each bar is proportional to the value it represents. Bar charts are effective for comparing quantities across different categories.

## Installation/Import

To use the Bar Chart component, import it from the `@rexora/charts` package:
```
tsx
import { BarChart } from '@rexora/charts';
```
## Usage

Here's a basic example of how to render a Bar Chart:
```
tsx
import React from 'react';
import { BarChart } from '@rexora/charts';

const data = [
  { category: 'A', value: 30 },
  { category: 'B', value: 80 },
  { category: 'C', value: 45 },
  { category: 'D', value: 60 },
];

const MyBarChartComponent = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <BarChart data={data} />
    </div>
  );
};

export default MyBarChartComponent;
```
## Props and Options

The `BarChart` component accepts the following props:

| Prop       | Type     | Description                                     | Default |
| :--------- | :------- | :---------------------------------------------- | :------ |
| `data`     | `Array<object>` | An array of objects representing the data. Each object should have a category and a value property. | `[]`    |
| `width`    | `number` | The width of the chart container.              | `auto`  |
| `height`   | `number` | The height of the chart container.             | `auto`  |
| `margin`   | `object` | Margins around the chart (top, right, bottom, left). | `{ top: 20, right: 20, bottom: 30, left: 40 }` |
| `color`    | `string` | The color of the bars.                        | `steelblue` |
| `xAccessor` | `string` | The key in the data object for the category axis. | `'category'` |
| `yAccessor` | `string` | The key in the data object for the value axis. | `'value'` |
| `tooltip`  | `boolean` | Whether to show tooltips on hover.             | `true`  |
| `xAxisLabel` | `string` | Label for the x-axis.                       | `''`    |
| `yAxisLabel` | `string` | Label for the y-axis.                       | `''`    |
| `...`      | `...`    | Additional D3-specific configuration options can be passed. |         |

**Note:** More advanced customization options for scales, axes, and interactivity can be passed directly to the D3 rendering logic within the component implementation.