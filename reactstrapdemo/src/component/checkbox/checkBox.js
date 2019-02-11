import React from 'react';
import { Input, Label, FormGroup } from 'reactstrap';
import './checkBox.css';
const CheckBox = (props) => {
    return (
        <FormGroup inline check>
            <Label check>
                <Input className='checkbox'
                    type='checkbox'
                    onChange={props.onChange}
                    onClick={props.onClick}
                    value={props.value}
                    name={props.name}
                    checked={props.checked}
                />{props.value}
            </Label>
        </FormGroup>

    )
}

export default CheckBox;

CheckBox.defaultProps={
    value:'value',
    name:'name',
    checked:undefined,
    onClick:()=>{console.log('clicked')}
}