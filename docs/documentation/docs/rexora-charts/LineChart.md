# Line Chart

A Line Chart is used to display data points connected by straight line segments. It's ideal for showing trends over time or across categories.

## Installation

The Line Chart component is part of the `@rexora/charts` package. You can install it using npm or yarn:

```bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```

## Usage

Here's a basic example of how to use the Line Chart component:

```tsx
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
      <LineChart 
        data={myData}
        options={{
          width: '100%',
          height: '100%',
          color: '#4f81bd',
          strokeWidth: 2
        }}
      />
    </div>
  );
};

export default MyLineChart;
```

## Props and Options

### Component Props

| Prop Name | Type     | Required | Description                                                                 | Default |
|-----------|----------|----------|-----------------------------------------------------------------------------|---------|
| `data`    | `Array`  | Yes      | Array of data objects containing x and y values                             | -       |
| `options` | `Object` | No       | Configuration object for chart appearance and behavior                      | `{}`    |

### Options Properties

| Option Name   | Type     | Description                                                                 | Default                          |
|---------------|----------|-----------------------------------------------------------------------------|----------------------------------|
| `width`       | `number` or `string` | Chart width in pixels or percentage (e.g., `500` or `'100%'`) | `'auto'`                        |
| `height`      | `number` or `string` | Chart height in pixels or percentage (e.g., `400` or `'100%'`) | `'auto'`                       |
| `margin`      | `Object` | Chart margins: `{ top: number, right: number, bottom: number, left: number }` | `{ top: 20, right: 20, bottom: 30, left: 40 }` |
| `xAccessor`   | `string` | Key for x-axis values in data objects                                       | `'label'`                       |
| `yAccessor`   | `string` | Key for y-axis values in data objects                                       | `'value'`                       |
| `color`       | `string` | Line color (any valid CSS color)                                            | `'steelblue'`                   |
| `strokeWidth` | `number` | Line stroke width in pixels                                                 | `1.5`                           |
| `showGrid`    | `boolean` | Whether to show grid lines                                                 | `true`                          |
| `showDots`    | `boolean` | Whether to show data points as dots                                         | `true`                          |
| `dotRadius`   | `number` | Radius of data point dots when shown                                        | `3`                             |
| `curveType`   | `string` | Line curve type (`'linear'`, `'monotone'`, `'step'`, etc.)                 | `'linear'`                      |

## Advanced Example

```tsx
<LineChart
  data={salesData}
  options={{
    width: 800,
    height: 400,
    xAccessor: 'month',
    yAccessor: 'revenue',
    color: '#e63946',
    strokeWidth: 3,
    showGrid: true,
    showDots: true,
    dotRadius: 4,
    curveType: 'monotone',
    margin: { top: 30, right: 40, bottom: 50, left: 60 }
  }}
/>
```

## Best Practices

1. Ensure your data is sorted by the x-axis values before passing it to the component
2. For time-series data, use proper date formatting
3. Consider responsive sizing by using percentage-based width/height
4. Use contrasting colors for better visibility
5. Include axis labels and a legend when showing multiple lines