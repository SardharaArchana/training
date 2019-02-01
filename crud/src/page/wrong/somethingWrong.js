import React from 'react';
import { PropTypes } from 'prop-types';

const Wrong = (props) => {
  return (
    <div>
      <h2>Opps!!!  Something Went Wrong</h2>
      <p>{props.location.state.error}</p>
    </div>
  );
}

export default Wrong;

Wrong.propTypes = {
  location: PropTypes.object,
};