import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BarChart from './BarChart';
import * as serviceWorker from './serviceWorker';

const data = [
    {
        name: 'Biden',
        polling: 25
    },

    {
        name: 'Harris',
        polling: 12
    },

    {
        name: 'Warren',
        polling: 10
    },

    {
        name: 'Sanders',
        polling: 10
    }
]

ReactDOM.render(<BarChart dataPoints={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
