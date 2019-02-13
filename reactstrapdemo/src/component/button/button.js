import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import './button.css';
const ButtonTag = (props) => {
  return (
    <Button className='button'
      onClick={props.onClick}
      type={props.type}
      color={props.color}
      disabled={props.disabled}
      block={props.block}
    >
      {props.name}
    </Button>

  )
}

export default ButtonTag;

ButtonTag.defaultProps = {
  color: 'secondary',
  type: 'button',
  block: false,
  disabled: false,
  onChange: () => { console.log('clicked') },
}

ButtonTag.propTypes = {
  color: PropTypes.string,
  type:PropTypes.string,
  block:PropTypes.bool,
  disabled:PropTypes.bool,
  onChange: PropTypes.func,
}