import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface LollipopChartProps {
  data: { name: string; value: number }[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const LollipopChart: React.FC<LollipopChartProps> = ({
  data,
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${marginLeft},${marginTop})`);

    const innerWidth = width - marginLeft - marginRight;
    const innerHeight = height - marginTop - marginBottom;

    // Placeholder for D3 rendering logic for Lollipop Chart
    // You will need to implement the scales, axes, circles, and lines here based on your data and desired visualization.

    // Example: Basic scales (replace with your actual scaling logic)
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 0])
      .range([innerHeight, 0]);

    // Example: Drawing lollipops (replace with your actual drawing logic)
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.name)! + xScale.bandwidth() / 2)
      .attr("cy", d => yScale(d.value))
      .attr("r", 5) // Adjust radius as needed
      .attr("fill", "steelblue");

    svg.selectAll("line")
      .data(data)
      .enter()
      .append("line")
      .attr("x1", d => xScale(d.name)! + xScale.bandwidth() / 2)
      .attr("x2", d => xScale(d.name)! + xScale.bandwidth() / 2)
      .attr("y1", innerHeight)
      .attr("y2", d => yScale(d.value))
      .attr("stroke", "gray") // Adjust color as needed
      .attr("stroke-width", 1); // Adjust width as needed


    // Example: Adding axes (replace with your actual axis logic)
    svg.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .call(d3.axisLeft(yScale));

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default LollipopChart;