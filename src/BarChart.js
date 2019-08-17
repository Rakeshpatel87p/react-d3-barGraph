import React from 'react';
import logo from './logo.svg';
import { Component } from 'react';
import * as d3 from 'd3';
import './App.css';

class BarChart extends Component {
  
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.dataPoints;
    const height = 500;
    const width = 700;
    
    const scale = d3.scaleLinear()
                    .domain([0, d3.max(data)])
                    .range([0, height]);

    const yAxis = d3.axisLeft()
                    .scale(scale)
                    .ticks(5);
    
    const svg = d3.select("body") //Creates target to hook into
                  .append("svg") //hooks node into DOM
                  .attr("width", 700)
                  .attr("height", height)
                  .style("margin-left", 100);
    
    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 60) //d is dataPoint and i is index
       .attr("y", (d,i) => height - 10 * d.polling - 25)
       .attr("width", 25)
       .attr("height", (d, i) => d.polling * 10)
       .attr("fill", (d, i) => i % 2 ? '#4088ff' : '#77aafe');
  
    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .text((d) => d.name)
       .attr("x", (d, i) => i * 60)
       .attr("y", (d, i) => height);

    svg.append('g')
       .call(yAxis);
  }
  
  render() {
    return (
      <h1>Whose Ahead in Iowa?</h1>
    )
  }
}

export default BarChart;
