import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import './textarea.css';
const TextAreaTag = (props) => {
  return (
    <Input className='textarea'
      type='textarea'
      name={props.name}
      value={props.value}
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
  value:'',
  placeholder:'enter value',
  onChange:()=>{},
  onBlur:()=>{},
}

TextAreaTag.propTypes = {
  name:PropTypes.string,
  value:PropTypes.string,
  placeholder:PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}