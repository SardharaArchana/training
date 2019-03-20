import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={()=>{this.props.history.push('/signin')}}>Log In</button>
      </React.Fragment>
    )
  }
}

export default Home;