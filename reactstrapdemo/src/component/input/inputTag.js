import React from 'react';
import PropTypes from 'prop-types';
import { Input, Row, Col } from 'reactstrap';
import './inputTag.css';

const InputTag = (props) => {
  const invalid={border:'1px solid red'};
  const valid={border:'1px solid green'};
  return (
    <Row className='input'>
      <Col sm='12' className='col'>
        <Input className={`${props.className} `}
        style={props.validation === 'valid' ? valid : props.validation === 'invalid' ? invalid :null } 
          name={props.name}
          type={props.type}
          placeholder={`enter ${props.name}`}
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
       >
        </Input>
      </Col>
    </Row>
  )
}

export default InputTag;

InputTag.defaultProps={
  name:'value',
  type:'text',
  className:'input',
  onBlur:()=>{console.log('onBulr')},
  onChange:()=>{console.log('onChange')},
}

InputTag.propTypes={
  name:PropTypes.string,
  type:PropTypes.string,
  className:PropTypes.string,
  onBlur:PropTypes.func,
  onChange:PropTypes.func,
}