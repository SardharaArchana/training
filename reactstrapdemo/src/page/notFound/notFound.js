import React from 'react';

import './notFound.css';

const NotFound = (props) => {
  return (
    <React.Fragment>
      <center class='divStyle'>
      <p><b>404.</b>That's an error</p>
      <p>The requested URL <b>{props.location.pathname}</b> was not found on this</p>
      </center>
    </React.Fragment>
  )
}

export default NotFound;

