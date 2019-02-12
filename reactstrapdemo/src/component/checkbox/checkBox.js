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
                    value={props.value}
                    checked={props.checked}
                />{props.name}
            </Label>
        </FormGroup>

    )
}

export default CheckBox;

CheckBox.defaultProps={
    value:'value',
    name:'name',
    checked:undefined,
}