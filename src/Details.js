import React from 'react';
import './Details.css'

function Details(props) {
    return (
        <div className="Details">
            {props.selectedMovie.Title.toString()}
        </div>
    );
}

export default Details;