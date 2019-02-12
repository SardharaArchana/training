import React, { Component } from 'react';

import App from '../registration/registration';
import Display from '../display/display';

import './home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      User: [],
      isDisplay: false,
      editUser: null
    }
  }

  editUser(user, i) {
    const array = this.state.User;
    const res = this.state.User.filter(u => {
      if (u.email === user.email &&
        u.password === user.password &&
        u.number === user.number &&
        u.Gender === user.Gender &&
        u.Designation === user.Designation
        )
        array.splice(i, 1);
        console.log(array.splice(i, 1))
      this.setState({ User: array,editUser:u });
      return 'x';
    })
    console.log('res',res)
    this.setState({ isDisplay: false });
  }

  newuser() {
    this.setState({ isDisplay: false, editUser: null });
  }

  setUser(user) {
    this.setState(prevState => ({
      User: [...prevState.User, user]
    }));
    this.setState({ isDisplay: true });
  }

  render() {
    console.log("state.....", this.state);
    return (
      <React.Fragment>
        {this.state.isDisplay ? <Display data={this.state.User}
          editUser={(user, i) => this.editUser(user, i)}
          onClick={() => { this.newuser() }}
        /> :
          <App user={(user) => this.setUser(user)} getEditUser={this.state.editUser} />
        }
      </React.Fragment >
    )
  }
}

export default Home;