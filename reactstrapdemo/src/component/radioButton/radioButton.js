import React from 'react';
import { Input, Label, FormGroup } from 'reactstrap';
import './radioButton.css';
const RadioButton = (props) => {
    return (
            <FormGroup inline check>
                <Label check>
                    <Input className='radio'
                        type='radio'
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />{props.value}
                </Label>
            </FormGroup>
        
    )
}

export default RadioButton;