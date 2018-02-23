import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <button className={`Button Button--${props.type}`}>
            {props.text}
        </button>
    );
}

export default Button;