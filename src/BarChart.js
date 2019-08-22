import React from 'react';
import logo from './logo.svg';
import { Component } from 'react';
import * as d3 from 'd3';
import './App.css';

class BarChart extends Component {
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(
        (result) => {
          this.drawChart();
        },
        (error) => console.log(error)
      );
  }

  drawChart() {
    const data = this.props.dataPoints;
    const height = 500;
    const width = 700;
    let sortedDataByLeader = data.sort((a, b) => a.polling > b.polling ? -1 : 0)

    const scale = d3.scaleLinear().range([height, 0]);
    
    const svg = d3.select(".barChart") //Creates target to hook into
                  .append("svg") //hooks node into DOM
                  .attr("width", 700)
                  .attr("height", height)
                  .style("margin-left", 100);
    
    const yAxis = d3.axisLeft()
                    .scale(scale);

    svg.selectAll("rect")
       .data(sortedDataByLeader)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 60) //d is dataPoint and i is index
       .attr("y", (d,i) => height - 10 * d.polling)
       .attr("width", 25)
       .attr("height", (d, i) => d.polling * 10)
       .attr("fill", (d, i) => i % 2 ? '#4088ff' : '#77aafe');
  
    svg.selectAll("text")
       .data(sortedDataByLeader)
       .enter()
       .append("text")
       .text((d) => d.name)
       .attr("x", (d, i) => i * 60)
       .attr("y", (d, i) => height);

    svg.append('g')
       .call(yAxis);
    
    svg.append("g")
       .call(yAxis.ticks(10).tickSize("10px").tickFormat(d3.format("10%")))
  }
  
  render() {
    return (
      <div>
        <h1>Whose Ahead in Iowa?</h1>
        <div className="barChart"></div>
      </div>
    )
  }
}

export default BarChart;
