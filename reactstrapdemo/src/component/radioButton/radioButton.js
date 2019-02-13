import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, FormGroup } from 'reactstrap';

import './radioButton.css';

const RadioButton = (props) => {
  return (
    <FormGroup inline check>
      <Label check>
        <Input className='radio'
          type='radio'
          {...props.initialProp}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />{props.initialProp.value}
      </Label>
    </FormGroup>
  )
}

export default RadioButton;

RadioButton.defaultProps = {
  initialProp:{
    name: 'name',
    value: 'value',
    checked: false,
  },
  onChange: () => { },
  onBlur: () => { },
}

RadioButton.propTypes = {
  initialProp: PropTypes.shape({
    name:PropTypes.string,
    value:PropTypes.string,
    checked:PropTypes.bool
  }),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}