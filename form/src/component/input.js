import React from 'react';
import './input.css';

const Input = (props) => {
    return (
        <div>
            Enter {props.name || 'name'} :
            <input className='input'
                type={props.type}
                name={props.name || 'nameI'}
                placeholder={props.name || 'enter here'}
                onChange={props.onChange}
                onBlur={props.onBlur} />

        </div>
    );
}

export default Input;