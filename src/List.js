import React from 'react';
import Movies from './sampledata';
import './css/List.css'

import ListItem from './ListItem';
// const imdb = require('imdb-api');

function List(props) {
    return(
        <div className="List">
            <ul className="ListUl">
                {props.movies.map((m, i) => <ListItem key={i} movie={m} rank={i + 1} handleListClick={props.handleListClick} />)}
            </ul>
        </div>
    );
}

export default List;