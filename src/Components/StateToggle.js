import React, { Component } from 'react';
import BarChart from './BarChart';

class StateToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {stateToDisplay: 'Iowa'};
    }
    updateStatePolling(event) {
        this.setState({stateToDisplay: event.target.value});
    }
    
    render() {
        return(
            <div>
                <h1>Which Democratic Candidate is leading in  
                    <select onChange={(e) => this.updateStatePolling(e)}>
                        <option value="Iowa">Iowa</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="Nevada">Nevada</option>
                        <option value="South Carolina">South Carolina</option>
                    </select>
                </h1>
                <BarChart stateToDisplay={this.state.stateToDisplay} dataPoints={this.props.dataPoints} />
            </div>
        )
    }
}

export default StateToggle;