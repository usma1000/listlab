import React from 'react';
import './css/Details.css'

function Details(props) {
    const { Title, Poster, Genre, Released, Director, Actors, imdbRating, Runtime, Awards, Plot, Website } = props.selectedMovie;
    return (
        <div className="Details">
            <h2>{Title}</h2>
            <img src={Poster} alt={`${Title} Poster`} className="" />
            <p><strong>Genre:</strong> {Genre}</p>
            <p><strong>Released:</strong> {Released}</p>
            <p><strong>Director:</strong> {Director}</p>
            <p><strong>Actors:</strong> {Actors}</p>
            <p><strong>IMDB Rating:</strong> {imdbRating}</p>
            <p><strong>Runtime:</strong> {Runtime}</p>
            <p><strong>Awards:</strong> {Awards}</p>
            <p>{Plot}</p>
            <a href={Website} target="_blank">Website</a>
        </div>
    );
}

export default Details;