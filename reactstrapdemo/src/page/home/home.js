import React, { Component } from 'react';

import App from '../registration/registration';
import Display from '../display/display';

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
    array.filter(u => {
      if (u.email === user.email &&
        u.password === user.password &&
        u.number === user.number &&
        u.Gender === user.Gender &&
        u.Designation === user.Designation
      ) {
        this.setState({ editUser: u });
        return null;
      }
      else {
        return null;
      }
    })
    array.splice(i, 1);
    this.setState({ isDisplay: false, User: array });
  }

  newuser() {
    this.setState({ isDisplay: false, editUser: null });
  }

  setUser(user) {
    this.setState({ User: [...this.state.User, user], isDisplay: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isDisplay ?
          <Display data={this.state.User}
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