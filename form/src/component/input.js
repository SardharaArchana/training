import React, { Component } from 'react';
import './input.css';
const Input = (props) => {
    return (
        <div>
            Enter {props.name} : 
            <input className='input'
             type={props.type} 
             name={props.name} 
             placeholder={props.name} 
             onChange={props.onChange} />

        </div>
    );
}
export default Input;