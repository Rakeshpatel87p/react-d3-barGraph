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
    const data = [12, 5, 15, 20, 30];
    const height = 500
    const svg = d3.select("body") //Creates target to hook into
                  .append("svg") //hooks node into DOM
                  .attr("width", 700)
                  .attr("height", height)
                  .style("margin-left", 100);
    
    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 40) //d is dataPoint and i is index
       .attr("y", (d,i) => height - 10 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 10)
       .attr("fill", "green");

    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 40)
       .attr("y", (d, i) => height - (10 * d) - 3)
  }
  
  render() {
    return (
      <h1>Hello Rakesh, we're all set for D3</h1>
    )
  }
}

export default BarChart;
