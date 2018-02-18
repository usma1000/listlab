import React from 'react';
import './List.css'
import Movies from './sampledata';

import ListItem from './ListItem';

function List(props) {
    return(
        <ul className="List">
            {Object
                .keys(Movies)
                .map((m,i) => <ListItem 
                    key={m}
                    title={Movies[m].title}
                    rating={Movies[m].rating}
                    rank={i+1}
                    genre={Movies[m].genre} />)
            }
        </ul>
    );
}

export default List;