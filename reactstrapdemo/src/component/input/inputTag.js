import React from 'react';
import PropTypes from 'prop-types';
import { Input, Row, Col } from 'reactstrap';
import {get} from 'lodash';

import './inputTag.css';

const InputTag = (props) => {
  const invalid = { border: '1px solid red' };
  const valid = { border: '1px solid green' };
  return (
    <Row className='input'>
      <Col sm='12' className='col'>
        <Input
          {...props.initialProp}
          className={props.className}
          style={props.validation === true ? valid : props.validation === false ? invalid : null}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onClick={props.onClick}
        >
        </Input>
        <React.Fragment >
          <span style={{ color: 'red' }}>
            {(props.validation === false && get(props, 'initialProp.value') === '') ?
              < >{get(props, 'initialProp.errormsg.empty')}</> :
              props.validation === false ? get(props, 'initialProp.errormsg.invalid') : null}</span>
        </React.Fragment>
      </Col>
    </Row>
  )
}

InputTag.defaultProps = {
  initialProp: {
    name: 'value',
    type: 'text',
    errormsg: {
      empty: 'empty',
      invalid: 'invalid',
    },
    value: '',
    placeholder: 'enter value'
  },
  validation: undefined,
  className: '',
  onBlur: () => { },
  onChange: () => { },
  onClick: () => { },
};

InputTag.propTypes = {
  initialProp: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    errormsg: PropTypes.shape({
      empty: PropTypes.string,
      invalid: PropTypes.string,
    }),
  }),
  validation: PropTypes.bool,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default InputTag;
