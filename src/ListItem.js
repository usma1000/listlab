import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
    render() {
        return (
            <li className="ListItem" onClick={this.props.handleListClick}>
                <div className="ListItemDetails">
                    <img src={this.props.movie.Poster} alt={`${this.props.movie.Title} Poster`} className="ListItemImage" />
                    <div className="ListItemDetailsInfo">
                        <p className="ListItemDetailsTitle">{this.props.movie.Title}</p>
                        <p className="ListItemDetailsRatingGenre">
                            {this.props.movie.imdbRating}
                            &nbsp;
                        <i className="fas fa-star"></i>
                            <br />
                            {this.props.movie.Genre}
                        </p>
                    </div>
                </div>
                <div className="ListItemRankDetails">
                    <div className="ListItemRankDetailsRank">#{this.props.rank}</div>
                    <div className="ListItemRankDetailsVotes">
                        <div className="ListItemRankDetailsVotesPositive">0</div>
                        <div className="ListItemRankDetailsVotesNegative">0</div>
                    </div>
                </div>
            </li>
        );
    }
}
    

export default ListItem;