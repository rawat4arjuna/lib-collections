import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface GroupedBarChartProps {
  data: { group: string; values: { category: string; value: number }[] }[];
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  colors?: string[];
}

const GroupedBarChart: React.FC<GroupedBarChartProps> = ({
  data,
  width = 600,
  height = 400,
  margin = { top: 20, right: 30, bottom: 40, left: 40 },
  colors = d3.schemeCategory10,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous content

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Extract all category names
    const categories = Array.from(new Set(data.flatMap(d => d.values.map(v => v.category))));
    const groups = data.map(d => d.group);

    // X and Y scales
    const x0Scale = d3.scaleBand()
      .domain(groups)
      .range([0, innerWidth])
      .paddingInner(0.1);

    const x1Scale = d3.scaleBand()
      .domain(categories)
      .range([0, x0Scale.bandwidth()])
      .padding(0.05);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d3.max(d.values, v => v.value)) || 0])
      .range([innerHeight, 0]);

    // Color scale
    const colorScale = d3.scaleOrdinal<string, string>()
      .domain(categories)
      .range(colors);

    // Draw bars
    g.append('g')
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', d => `translate(${x0Scale(d.group)},0)`)
      .selectAll('rect')
      .data(d => d.values)
      .join('rect')
      .attr('x', d => x1Scale(d.category)!)
      .attr('y', d => yScale(d.value))
      .attr('width', x1Scale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.value))
      .attr('fill', d => colorScale(d.category));

    // Add axes
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x0Scale));

    g.append('g')
      .call(d3.axisLeft(yScale));

    // Add labels, tooltips, etc. (Placeholder)
    // You would add code here to include axis labels, a legend, tooltips, etc.
    // Example: Adding Y-axis label
    g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (innerHeight / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Value");

    // Example: Adding X-axis label
    g.append("text")
        .attr("transform", `translate(${innerWidth / 2}, ${innerHeight + margin.bottom - 5})`)
        .style("text-anchor", "middle")
        .text("Group");

  }, [data, width, height, margin, colors]); // Redraw when data or dimensions change

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
    >
      {/* D3 will render the chart inside this SVG */}
    </svg>
  );
};

export default GroupedBarChart;