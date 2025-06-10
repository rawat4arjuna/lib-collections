import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DataItem {
  [key: string]: number | string;
}

interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface StackedBarChartProps {
  data: DataItem[];
  keys: string[]; // Keys to stack
  xKey: string; // Key for the x-axis (category)
  margin?: Margin;
  width?: number;
  height?: number;
}

const defaultMargin: Margin = { top: 20, right: 30, bottom: 40, left: 40 };

const HundredPercentStackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  keys,
  xKey,
  margin = defaultMargin,
  width = 600,
  height = 400,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || data.length === 0 || !keys || keys.length === 0 || !xKey) {
      return;
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous content

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // D3 rendering logic for 100% Stacked Bar Chart goes here
    // This will involve:
    // 1. Creating a stack generator
    // 2. Calculating the total for each category for percentage calculation
    // 3. Creating scales (band scale for x, linear scale for y (0-100%))
    // 4. Drawing the bars for each stack segment
    // 5. Adding axes
    // 6. Adding tooltips (optional)
    // 7. Handling responsiveness (e.g., using resize observer)

    console.log("Rendering 100% Stacked Bar Chart with data:", data);
    console.log("Keys to stack:", keys);
    console.log("X-axis key:", xKey);

    // Placeholder for actual D3 chart drawing
    g.append('text')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight / 2)
      .attr('text-anchor', 'middle')
      .text('100% Stacked Bar Chart Placeholder');

  }, [data, keys, xKey, margin, width, height]); // Redraw chart when these dependencies change

  return (
    <svg ref={svgRef} width={width} height={height}>
      {/* Chart will be drawn inside this SVG */}
    </svg>
  );
};

export default HundredPercentStackedBarChart;