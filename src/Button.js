import React from 'react';
import './css/Button.css'

function Button(props) {
    return (
        <button className={`Button Button--${props.type}`}>
            {props.text}
        </button>
    );
}

export default Button;