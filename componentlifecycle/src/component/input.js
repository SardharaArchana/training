import React from 'react';

const Input = (props) => {
    return (
        <div>
            Enter {props.name || 'name'} :
            <Input
                type={props.type}
                name={props.name || 'name'}
                value={props.value}
                placeholder={props.name || 'enter here'}
                onChange={props.onChange}
            />

        </div>
    );
}

export default Input;