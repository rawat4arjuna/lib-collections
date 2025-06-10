import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface DotPlotProps {
  data: { value: number; category: string }[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const DotPlot: React.FC<DotPlotProps> = ({
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
    const svg = d3.select(svgRef.current);
    const innerWidth = width - marginLeft - marginRight;
    const innerHeight = height - marginTop - marginBottom;

    // Clear previous content
    svg.selectAll("*").remove();

    const g = svg.append("g")
      .attr("transform", `translate(${marginLeft},${marginTop})`);

    // Placeholder for D3 rendering logic
    // You will need to implement scales, axes, and rendering of dots here
    console.log("Rendering Dot Plot with data:", data);

    // Example: Simple axis (replace with proper scales and data binding)
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) || 1])
      .range([0, innerWidth]);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    // Add responsiveness (basic example, requires more sophisticated handling)
    svg.attr("width", width)
       .attr("height", height);

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default DotPlot;