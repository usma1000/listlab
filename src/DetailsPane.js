import React, { Component } from 'react';
import Movies from './sampledata';
import './DetailsPane.css';

import TopBar from './TopBar';

class DetailsPane extends Component {
    render() {
        let selectedMovie = this.props.selectedMovie
        return (
            <div className="DetailsPane">
                <TopBar/>
                <div>
                    {Object.keys(selectedMovie).map(function (key) {
                        return <p>{key}: {selectedMovie[key].toString()}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default DetailsPane;
