import React from 'react';
import Movies from './sampledata';
import './List.css'

import Button from './Button';
import ListItem from './ListItem';
const imdb = require('imdb-api');

// DELETE ME: testing imdb api call
imdb.get('The Toxic Avenger', { apiKey: '869d3931', timeout: 30000 }).then(console.log).catch(console.log);

function List(props) {
    return(
        <div className="List">
            <Button type="mega" text="+ Suggest a movie"/>
            <ul className="ListUl">
                {Movies.map((m,i) => <ListItem
                    key={i}
                    poster={m.Poster}
                    title={m.Title}
                    rating={m.Ratings[0].Value}
                    rank={i+1}
                    genre={m.Genre} />)
                }
            </ul>
        </div>
    );
}

export default List;