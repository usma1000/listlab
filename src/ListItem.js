import React from 'react';
import './ListItem.css';

function ListItem(props) {
    return(
        <li className="ListItem" onClick={props.handleClick}>
            <div className="ListItemDetails">
                <img src={props.movie.Poster} alt={`${props.movie.Title} Poster`} className="ListItemImage" />
                <div className="ListItemDetailsInfo">
                    <p className="ListItemDetailsTitle">{props.movie.Title}</p>
                    <p className="ListItemDetailsRatingGenre">
                        {props.movie.imdbRating}
                        &nbsp;
                        <i className="fas fa-star"></i>
                        <br/>
                        {props.movie.Genre}
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