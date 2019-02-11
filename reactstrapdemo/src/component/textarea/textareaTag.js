import React from 'react';
import { Input } from 'reactstrap';
import './textarea.css';
const TextAreaTag = (props) => {
  return (
    <Input className='textarea'
      name={props.name}
      type='textarea'
      placeholder={`enter ${props.name}`}
      onChange={props.onChange}
    >
    </Input>
  )
}

export default TextAreaTag;

TextAreaTag.defaultProps={
  name:'name',
  onChange:()=>{console.log('Changed')},
}