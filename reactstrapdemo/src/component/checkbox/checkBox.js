import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, FormGroup } from 'reactstrap';

import './checkBox.css';
const CheckBox = (props) => {
  return (
    <FormGroup inline check>
      <Label check>
        <Input className='checkbox'
          type='checkbox'
          {...props.initialProp}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />{props.initialProp.name}
      </Label>
    </FormGroup>

  )
}

export default CheckBox;

CheckBox.defaultProps = {
  initialProp: {
    value: 'value',
    name: 'name',
    checked: undefined,
  },
  onChange: () => { },
  onBlur: () => { },
}

CheckBox.propTypes = {
  initialProp: PropTypes.shape({
    name:PropTypes.string,
    value:PropTypes.string,
    checked:PropTypes.bool
  }),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}