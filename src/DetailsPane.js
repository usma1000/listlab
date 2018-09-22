import React, { Component } from 'react';
import AddMovieForm from './AddMovieForm';

import './css/DetailsPane.css';

import Details from './Details';

class DetailsPane extends Component {
    showForm() {
        // find some way to show form on click
        // <AddMovieForm>
    }

    render() {
        let showMe;

        if (this.props.showAddForm) {
            showMe = <AddMovieForm />
        } else {
            showMe = <Details selectedMovie={this.props.selectedMovie} />
        }
        return (
            <div className="DetailsPane">
                {showMe}
            </div>
        );
    }
}

export default DetailsPane;
