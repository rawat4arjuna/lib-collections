import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface LineChartProps {
  data: { x: any; y: number }[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  // Add more configuration options as needed (e.g., colors, axis labels, tooltips)
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);

    // Clear previous chart elements
    svg.selectAll("*").remove();

    const x = d3.scaleUtc() // Or d3.scaleLinear() depending on your data
      .domain(d3.extent(data, d => d.x) as [Date, Date]) // Adjust domain based on your data type
      .range([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y) as number])
      .nice()
      .range([height - marginBottom, marginTop]);

    const line = d3.line<{ x: any; y: number }>()
      .x(d => x(d.x))
      .y(d => y(d.y));

    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Add responsiveness logic here (e.g., using resize observer or handling window resize)
    // For a simple example, you might re-render on resize, but more complex solutions
    // involving dynamic scales and element updates are possible.

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]); // Redraw chart if data or dimensions change

  return (
    <svg ref={svgRef} width={width} height={height}></svg>
  );
};

export default LineChart;