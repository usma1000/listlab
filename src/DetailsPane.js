import React, { Component } from 'react';
import './DetailsPane.css';

import TopBar from './TopBar';
import Details from './Details';

class DetailsPane extends Component {
    render() {
        return (
            <div className="DetailsPane">
                <TopBar/>
                <Details selectedMovie={this.props.selectedMovie}/>
            </div>
        );
    }
}

export default DetailsPane;
