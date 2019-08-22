import React, { Component } from 'react';
import StateToggle from './Components/StateToggle';

class App extends Component {
    render() {
        return (
            <div>
                <StateToggle dataPoints={this.props.dataPoints}/>
            </div>
        )
    }
}

export default App;