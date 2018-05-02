import React from 'react';
import './css/Button.css'

const Button = (props) => {
    return (
        <button className={`Button Button--${props.type}`} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default Button;