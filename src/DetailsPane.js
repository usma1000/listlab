import React, { Component } from 'react';
import Movies from './sampledata';
import './DetailsPane.css';

import TopBar from './TopBar';

class DetailsPane extends Component {
    render() {
        return (
            <div className="DetailsPane">
                <TopBar/>
                <div>
                    {Object.keys(Movies[0]).map(function (key) {
                        return <p>{key}: {Movies[0][key].toString()}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default DetailsPane;
