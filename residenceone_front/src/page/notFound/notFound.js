import React from 'react';

import './notFound.css';

const NotFound = (props) => {
  return (
    <React.Fragment>
      <center className='divStyle'>
      <p><b>404.</b>That's an error</p>
      <p>The requested URL <b>{props.location.pathname}</b> was not found on this</p>
      <button onClick={()=>{props.history.push('/')}}>Back</button>
      </center>
    </React.Fragment>
  )
}

export default NotFound;

