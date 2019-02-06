import React from 'react';
import { Input } from 'reactstrap';
import './textarea.css';
const TextAreaTag = (props) => {
  return (
    <Input className='textarea'
      name={props.name}
      type='textarea'
      placeholder={`enter ${props.name}`} 
    >
    </Input>
  )
}

export default TextAreaTag;