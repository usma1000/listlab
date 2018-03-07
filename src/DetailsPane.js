import React, { Component } from 'react';
import './DetailsPane.css';

import Details from './Details';

class DetailsPane extends Component {
    render() {
        return (
            <div className="DetailsPane">
                <Details selectedMovie={this.props.selectedMovie}/>
            </div>
        );
    }
}

export default DetailsPane;
