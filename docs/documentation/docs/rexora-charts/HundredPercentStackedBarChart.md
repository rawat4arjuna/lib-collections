# 100% Stacked Bar Chart

The 100% Stacked Bar Chart is a variation of the stacked bar chart where the segments of each bar are scaled to represent their proportion of the total. This chart type is ideal for showing the composition of a total across different categories and how those proportions change between categories.

## Installation

The 100% Stacked Bar Chart component is part of the `@rexora/charts` package. You can install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Here's a basic example of how to use the `HundredPercentStackedBarChart` component:
```
tsx
import React from 'react';
import { HundredPercentStackedBarChart } from '@rexora/charts';

const sampleData = [
  { category: 'A', value1: 20, value2: 30, value3: 50 },
  { category: 'B', value1: 40, value2: 10, value3: 50 },
  { category: 'C', value1: 10, value2: 50, value3: 40 },
];

const MyChartComponent = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <HundredPercentStackedBarChart
        data={sampleData}
        keys={['value1', 'value2', 'value3']}
        categoryKey="category"
        // Add other configuration options here
      />
    </div>
  );
};

export default MyChartComponent;
```
## Props and Options

The `HundredPercentStackedBarChart` component accepts the following props:

| Prop         | Type                 | Description                                                      | Required |
| :----------- | :------------------- | :--------------------------------------------------------------- | :------- |
| `data`       | `object[]`           | An array of objects representing the data for the chart.         | Yes      |
| `keys`       | `string[]`           | An array of strings corresponding to the keys in the data objects that represent the values to be stacked. | Yes      |
| `categoryKey`| `string`             | The key in the data objects that represents the category axis.   | Yes      |
| `width`      | `number`             | The width of the chart container (e.g., from a responsive container). | No       |
| `height`     | `number`             | The height of the chart container (e.g., from a responsive container).| No       |
| `margin`     | `{ top: number, right: number, bottom: number, left: number }` | The margins around the chart area. | No       |
| `colors`     | `string[]` or `(data: any) => string` | An array of colors or a function to determine colors for the stacked segments. | No       |
| `tooltip`    | `(data: any) => React.ReactNode` | A function that returns the content for the tooltip when hovering over segments. | No |
| `orientation`| `'vertical' | 'horizontal'` | The orientation of the bars. Defaults to 'vertical'. | No |
| ...          | ...                  | Other D3 related configuration options can be passed down.       | No       |

**Note:** The responsiveness is handled by using a container element with a flexible size (e.g., `width: '100%'`) and passing its dimensions to the `width` and `height` props of the chart component. The chart's internal D3 rendering logic should adapt to these dimensions.