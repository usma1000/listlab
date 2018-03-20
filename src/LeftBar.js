import React from 'react';
import './css/LeftBar.css'

import LeftBarLink from './LeftBarLink';

function LeftBar(props) {
    return (
        <div className="LeftBar">
            <LeftBarLink icon="list" />
            <LeftBarLink icon="comments" />
            <LeftBarLink icon="users" />
            <LeftBarLink icon="share-square" />
            <LeftBarLink icon="cogs" />
        </div>
    );
}

export default LeftBar;