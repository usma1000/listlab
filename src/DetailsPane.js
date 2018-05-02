import React, { Component } from 'react';
// import AddMovieForm from './AddMovieForm';

import './css/DetailsPane.css';

import Details from './Details';

class DetailsPane extends Component {
    showForm() {
        // find some way to show form on click
        // <AddMovieForm>
    }

    render() {
        return (
            <div className="DetailsPane">
                <Details selectedMovie={this.props.selectedMovie}/>
            </div>
        );
    }
}

export default DetailsPane;
