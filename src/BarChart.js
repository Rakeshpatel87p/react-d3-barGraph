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
       .attr("y", (d,i) => height - 10 * d.polling)
       .attr("width", 25)
       .attr("height", (d, i) => d.polling * 10)
       .attr("fill", (d, i) => i % 2 ? '#ff5455' : '#ffaaaa');

    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .text((d) => d.name)
       .attr("x", (d, i) => i * 40)
       .attr("y", (d, i) => height - (10 * d.polling) - 3)
  }
  
  render() {
    return (
      <h1>Hello Rakesh, we're all set for D3</h1>
    )
  }
}

export default BarChart;
