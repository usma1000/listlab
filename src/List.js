import React from 'react';
import Movies from './sampledata';
import './List.css'

import Button from './Button';
import ListItem from './ListItem';
// const imdb = require('imdb-api');

function List(props) {
    return(
        <div className="List">
            <Button type="mega" text="+ Suggest a movie"/>
            <ul className="ListUl">
                {Movies.map((m,i) => <ListItem key={i} movie={m} rank={i+1} handleClick={props.handleClick(m)} />)}
            </ul>
        </div>
    );
}

export default List;