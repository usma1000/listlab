import React from 'react';
import './List.css'
import Movies from './sampledata';

import ListItem from './ListItem';

function List(props) {
    return(
        <ul className="List">
            {Object
                .keys(Movies)
                .map((m) => <ListItem key={m} title={Movies[m].title} rating={Movies[m].rating} />)
            }
        </ul>
    );
}

export default List;