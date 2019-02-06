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
                />{props.value}
            </Label>
        </FormGroup>

    )
}

export default CheckBox;