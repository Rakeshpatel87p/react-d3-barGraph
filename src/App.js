import React, { Component } from 'react';
import BarChart from './Components/BarChart';
import StateToggle from './Components/StateToggle';

class App extends Component {
    render() {
        return (
            <div>
                <StateToggle />
                <BarChart dataPoints={this.props.dataPoints} />
            </div>
        )
    }
}

export default App;