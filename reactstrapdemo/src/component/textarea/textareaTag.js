import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import './textarea.css';
const TextAreaTag = (props) => {
  return (
    <Input className='textarea'
      type='textarea'
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
    >
    </Input>
  )
}

export default TextAreaTag;

TextAreaTag.defaultProps={
  name:'name',
  placeholder:'enter value',
  onChange:()=>{},
  onBlur:()=>{},
}

TextAreaTag.propTypes = {
  name:PropTypes.string,
  placeholder:PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}