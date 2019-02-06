import React from 'react';
import { Button } from 'reactstrap';
import './button.css';
const ButtonTag = (props) => {
    return (
        <Button className='button'
            onClick={props.onClick}
            color={props.color}
        >
            {props.name}
        </Button>

    )
}

export default ButtonTag;

ButtonTag.defaultProps = {
    color: 'secondary',
}