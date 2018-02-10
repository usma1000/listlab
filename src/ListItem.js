import React from 'react';
import './ListItem.css';

function ListItem(props) {
    return(
        <li className="ListItem">Title: {props.title}, Rating: {props.rating}</li>
    );
}

export default ListItem;