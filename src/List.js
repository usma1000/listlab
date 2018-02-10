import React from 'react';
import './List.css'

import ListItem from './ListItem';

const Movies = [
    {title: 'Fight Club', rating: 8.9},
    {title: 'Goodfellas', rating: 7.8},
    {title: 'Meet the Fockers', rating: 6.2}
]

function List(props) {
    return(
        <ul className="List">
            {Movies.map(
                (m) => <ListItem title={m.title} rating={m.rating} />
            )}
        </ul>
    );
}

export default List;