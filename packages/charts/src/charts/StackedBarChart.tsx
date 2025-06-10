import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface StackedBarChartProps {
  data: { [key: string]: any }[];
  keys: string[];
  indexBy: string;
  margin?: { top: number; right: number; bottom: number; left: number };
  width?: number;
  height?: number;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  keys,
  indexBy,
  margin = { top: 20, right: 30, bottom: 40, left: 40 },
  width = 600,
  height = 400,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous chart

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Placeholder for D3 rendering logic
    // This is where you would implement the scales, axes, stacking, and rendering of bars
    console.log("Rendering Stacked Bar Chart with D3:", { data, keys, indexBy });

    // Example: Basic scales (replace with actual scales based on your data and requirements)
    const xScale = d3.scaleBand()
      .domain(data.map(d => d[indexBy]))
      .range([0, innerWidth])
      .padding(0.1);

    const stack = d3.stack()
        .keys(keys);

    const stackedData = stack(data);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(stackedData, (d) => d3.max(d, (d) => d[1])) as any])
        .range([innerHeight, 0]);

     const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
        .domain(keys);


    // Placeholder for rendering logic (bars, axes, etc.)
    g.selectAll(".layer")
      .data(stackedData)
      .enter().append("g")
        .attr("class", "layer")
        .attr("fill", (d) => colorScale(d.key) as string)
      .selectAll("rect")
      .data(d => d)
      .enter().append("rect")
        .attr("x", d => xScale(d?.data[indexBy]) as any)
        .attr("y", d => yScale(d[1]))
        .attr("height", d => yScale(d[0]) - yScale(d[1]))
        .attr("width", xScale.bandwidth());


     // Add X axis
     g.append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale));

     // Add Y axis
     g.append("g")
        .call(d3.axisLeft(yScale));


  }, [data, keys, indexBy, margin, width, height]); // Redraw chart if these dependencies change

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
    >
      {/* D3 will render chart elements here */}
    </svg>
  );
};

export default StackedBarChart;