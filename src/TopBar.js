import React from 'react';
import './css/TopBar.css'

import Button from './Button';

function TopBar(props) {
    return (
        <div className="TopBar flex">
            <div className="TopBar--logo"></div>
            <Button type="mega" text="+ Suggest a movie" />
            <div className="Search">(SEARCH BAR AND OPTIONS GO HERE)</div>
            <div className="TopBar--avatar">M</div>
        </div>
    );
}

export default TopBar;