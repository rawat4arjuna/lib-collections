# Line Chart

A Line Chart is used to display data points connected by straight line segments. It's ideal for showing trends over time or across categories.

## Installation

The Line Chart component is part of the `@rexora/charts` package. You can install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Here's a basic example of how to use the Line Chart component:
```
tsx
import React from 'react';
import { LineChart } from '@rexora/charts';

const myData = [
  { label: 'Jan', value: 10 },
  { label: 'Feb', value: 15 },
  { label: 'Mar', value: 8 },
  { label: 'Apr', value: 12 },
  { label: 'May', value: 18 },
];

const MyLineChart = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <LineChart data={myData} />
    </div>
  );
};

export default MyLineChart;
```
## Props and Options

The `LineChart` component accepts the following props:

| Prop Name | Type    | Description                                       | Default |
| :-------- | :------ | :------------------------------------------------ | :------ |
| `data`    | `Array` | An array of data objects. Each object should have properties for the x and y values (e.g., `label` and `value` in the example). | Required |
| `options` | `Object` | An optional object to configure the chart's appearance and behavior. | `{}`    |

**Options Properties:**

| Option Name | Type    | Description                                     | Default    |
| :---------- | :------ | :---------------------------------------------- | :--------- |
| `width`     | `number` | The width of the chart in pixels.             | `auto`     |
| `height`    | `number` | The height of the chart in pixels.            | `auto`     |
| `margin`    | `Object` | Margins around the chart ({ top, right, bottom, left }). | `{ top: 20, right: 20, bottom: 30, left: 40 }` |
| `xAccessor` | `string` | The key in your data objects for the x-axis value. | `'label'` |
| `yAccessor` | `string` | The key in your data objects for the y-axis value. | `'value'` |
| `color`     | `string` | The color of the line.                          | `'steelblue'` |
| `strokeWidth`| `number` | The width of the line stroke.                  | `1.5`      |

You can pass these options within the `options` prop:
```
tsx
<LineChart
  data={myData}
  options={{
    width: 500,
    height: 400,
    color: 'green',
    strokeWidth: 2
  }}
/>
```
Customize the chart's appearance and behavior by adjusting these options.