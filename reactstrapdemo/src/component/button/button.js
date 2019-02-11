import React from 'react';
import { Button } from 'reactstrap';
import './button.css';
const ButtonTag = (props) => {
    return (
        <Button className='button'
            onClick={props.onClick}
            type={props.type}
            color={props.color}
            disabled={props.disabled}
        >
            {props.name}
        </Button>

    )
}

export default ButtonTag;

ButtonTag.defaultProps = {
    color: 'secondary',
    type:'button',
    onChange:()=>{console.log('clicked')},
    disabled:false
}