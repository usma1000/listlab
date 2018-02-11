import React from 'react';
import './ListItem.css';

function ListItem(props) {
    return(
        <li className="ListItem">
            <div className="ListItemDetails">
                <img src="http://via.placeholder.com/100x100" alt="placeholder" className="ListItemImage" />
                <div className="ListItemDetailsInfo">
                    <p className="ListItemDetailsTitle">{props.title}</p>
                    <p className="ListItemDetailsRatingGenre">
                        {props.rating}<br/>
                        Genre
                    </p>
                </div>
            </div>
            <div className="ListItemRankDetails">
                <div className="ListItemRankDetailsRank">#15</div>
                <div className="ListItemRankDetailsVotes">
                    <div className="ListItemRankDetailsVotesPositive">3</div>
                    <div className="ListItemRankDetailsVotesNegative">1</div>
                </div>
            </div>
        </li>
    );
}

export default ListItem;