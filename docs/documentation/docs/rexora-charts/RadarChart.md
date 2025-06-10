# Radar Chart (Spider Chart)

The Radar Chart, also known as a Spider Chart, is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.

## Installation

The `RadarChart` component is part of the `@rexora/charts` package. You can install it using npm or yarn:
```
bash
npm install @rexora/charts
# or
yarn add @rexora/charts
```
## Usage

Here's a basic example of how to use the `RadarChart` component:
```
tsx
import React from 'react';
import { RadarChart } from '@rexora/charts';

const data = [
  { skill: 'Strength', level: 80 },
  { skill: 'Dexterity', level: 60 },
  { skill: 'Constitution', level: 75 },
  { skill: 'Intelligence', level: 90 },
  { skill: 'Wisdom', level: 70 },
  { skill: 'Charisma', level: 85 },
];

const MyRadarChart = () => {
  return (
    <div>
      <h2>Character Skills</h2>
      <RadarChart
        data={data}
        width={400}
        height={400}
        options={{
          margin: { top: 40, right: 40, bottom: 40, left: 40 },
          levels: 5,
          maxValue: 100,
          labelFactor: 1.2,
          wrapWidth: 60,
          opacityArea: 0.35,
          dotRadius: 4,
          opacityCircles: 0.1,
          strokeWidth: 2,
          roundStrokes: true,
          color: '#FF0000', // Example color
        }}
      />
    </div>
  );
};

export default MyRadarChart;
```
## Props and Options

The `RadarChart` component accepts the following props:

| Prop     | Type    | Description                         | Required |
| :------- | :------ | :---------------------------------- | :------- |
| `data`   | `Array` | The data array for the chart. Each object should have properties corresponding to your skill/variable and level/value. | Yes      |
| `width`  | `number` | The width of the chart SVG.         | Yes      |
| `height` | `number` | The height of the chart SVG.        | Yes      |
| `options` | `object` | Configuration options for the chart. | No       |

The `options` prop is an object that can contain the following properties:

| Option       | Type    | Description                                                                 | Default       |
| :----------- | :------ | :-------------------------------------------------------------------------- | :------------ |
| `margin`     | `object` | Margins around the chart (top, right, bottom, left).                       | `{ top: 20, right: 20, bottom: 20, left: 20 }` |
| `levels`     | `number` | The number of levels to draw on the radar chart.                            | `5`           |
| `maxValue`   | `number` | The maximum value for the radar axes. Data values will be scaled to this. | Determined from data if not provided |
| `labelFactor`| `number` | How much farther than the radius the labels should be.                       | `1.25`        |
| `wrapWidth`  | `number` | The width in pixels to wrap the axis labels.                                | `60`          |
| `opacityArea`| `number` | The opacity of the colored area.                                            | `0.35`        |
| `dotRadius`  | `number` | The radius of the dots on the radar points.                               | `4`           |
| `opacityCircles` | `number` | The opacity of the circles on the grid.                                   | `0.1`         |
| `strokeWidth`| `number` | The width of the web lines.                                                 | `2`           |
| `roundStrokes`| `boolean` | Whether to have round or flat line endings.                                | `false`       |
| `color`      | `string` | The color of the radar area and lines.                                     | Category20 D3 color scale |

## Notes

- The `data` array should be structured such that each object represents a point on the radar chart axes. You'll need to adapt the accessors within the D3 rendering logic to match your data structure.
- The `maxValue` option is crucial for scaling your data correctly on the radar axes.
- Customization of colors, tooltips, and interactions will require adding more D3 logic within the component.