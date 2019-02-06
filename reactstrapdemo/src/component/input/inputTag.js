import React from 'react';
import { Input, Row, Col } from 'reactstrap';
import './inputTag.css';

const InputTag = (props) => {
  return (
    <Row>
      <Col sm='12' className='col'>
        <Input className={`${props.type} input`}
          name={props.name}
          type={props.type}
          placeholder={`enter ${props.name}`}
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
          valid={props.validation === 'valid' ? true : undefined}
          invalid={props.validation === 'invalid' ? true : undefined}
        >
        </Input>
      </Col>
    </Row>
  )
}

export default InputTag;

InputTag.defultProps={
  className:'text',
  placeholder:'enter value',
}