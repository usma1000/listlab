import React from 'react';
import './List.css'
import Movies from './sampledata';

import ListItem from './ListItem';

function List(props) {
    return(
        <ul className="List">
            {Movies.map((m,i) => <ListItem 
                key={m}
                title={m.Title}
                rating={m.Ratings[0].Value}
                rank={i+1}
                genre={m.Genre} />)
            }
        </ul>
    );
}

export default List;