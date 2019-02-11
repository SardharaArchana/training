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
                        checked={props.checked}
                        onChange={props.onChange}
                        onClick={props.onClick}
                    />{props.value}
                </Label>
            </FormGroup>
        
    )
}

export default RadioButton;

RadioButton.defaultProps={
    name:'name',
    value:'value',
    checked:false,
    onChange:()=>{console.log('onChange')},
    onClick:()=>{console.log('onClick')},
}