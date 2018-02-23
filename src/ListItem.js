import React from 'react';
import './ListItem.css';

function ListItem(props) {
    return(
        <li className="ListItem">
            <div className="ListItemDetails">
                <img src={props.poster} alt={`${props.title} Poster`} className="ListItemImage" />
                <div className="ListItemDetailsInfo">
                    <p className="ListItemDetailsTitle">{props.title}</p>
                    <p className="ListItemDetailsRatingGenre">
                        {props.rating}
                        &nbsp;
                        <i className="fas fa-star"></i>
                        <br/>
                        {props.genre}
                    </p>
                </div>
            </div>
            <div className="ListItemRankDetails">
                <div className="ListItemRankDetailsRank">#{props.rank}</div>
                <div className="ListItemRankDetailsVotes">
                    <div className="ListItemRankDetailsVotesPositive">3</div>
                    <div className="ListItemRankDetailsVotesNegative">1</div>
                </div>
            </div>
        </li>
    );
}

export default ListItem;