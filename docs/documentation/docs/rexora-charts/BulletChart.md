# Bullet Chart

A Bullet Chart is a variation of a bar chart developed by Stephen Few. It's designed to replace dashboard gauges and meters. A bullet chart compares a primary measure (e.g., year-to-date revenue) to one or more target measures (e.g., annual revenue goal) and qualitative ranges (e.g., poor, satisfactory, good).

## Installation

The `BulletChart` component is part of the `@rexora/charts` package. You can install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Here's a basic example of how to use the `BulletChart` component:
```
tsx
import React from 'react';
import { BulletChart } from '@rexora/charts';

const data = {
  title: 'Revenue',
  subtitle: 'US$, in thousands',
  ranges: [150, 225, 300], // Bad, Satisfactory, Good
  measures: [270], // Current year-to-date
  markers: [250], // Previous year-to-date
};

const MyBulletChart = () => {
  return (
    <div>
      <h2>My Dashboard</h2>
      <BulletChart data={data} width={400} height={80} />
    </div>
  );
};

export default MyBulletChart;
```
## Props and Options

The `BulletChart` component accepts the following props:

| Prop     | Type   | Description                                                                 | Required | Default |
| :------- | :----- | :-------------------------------------------------------------------------- | :------- | :------ |
| `data`   | `object` | An object containing the data for the chart. See data structure below.      | Yes      |         |
| `width`  | `number` | The width of the chart in pixels.                                           | No       | `960`   |
| `height` | `number` | The height of the chart in pixels.                                          | No       | `50`    |
| `margin` | `object` | An object defining the chart margins (top, right, bottom, left).            | No       | `{ top: 0, right: 40, bottom: 0, left: 120 }` |

### Data Structure

The `data` prop is an object with the following structure:

| Property   | Type      | Description                                                                 | Required |
| :--------- | :-------- | :-------------------------------------------------------------------------- | :------- |
| `title`    | `string`  | The main title of the bullet chart.                                         | Yes      |
| `subtitle` | `string`  | A subtitle or descriptive text for the chart.                               | No       |
| `ranges`   | `number[]`| An array of numbers representing the qualitative ranges (e.g., poor, good). | Yes      |
| `measures` | `number[]`| An array of numbers representing the primary measures.                      | Yes      |
| `markers`  | `number[]`| An array of numbers representing the target markers.                        | No       |

## Notes

- The `ranges`, `measures`, and `markers` arrays should contain numbers representing the values on the chart's scale.
- The number of elements in `ranges`, `measures`, and `markers` will determine the visual representation of the chart.
- The D3 implementation within the component will handle the scaling and rendering based on the provided data and dimensions.