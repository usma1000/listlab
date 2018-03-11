import React from 'react';
import './css/LeftBarLink.css'

function LeftBarLink(props) {
    return (
        <div className="LeftBarLink">
            <i className={`fas fa-${props.icon}`}></i>
        </div>
    );
}

export default LeftBarLink;