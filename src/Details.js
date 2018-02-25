import React from 'react';
import './Details.css'

function Details(props) {
    return (
        <div className="Details">
            <h2>{props.selectedMovie.Title}</h2>
        </div>
    );
}

export default Details;