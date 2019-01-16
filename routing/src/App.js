import React, { Component } from 'react';
import './App.css';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: []
    }
  }

  setValue(e, userid) {
    let user = this.state.form.find((user) => { return user.userId === userid }) || '';
    if (user === '') {
      this.state.form.push(e);
      this.setState({ form: this.state.form });
    } else if (user.userId === userid) {
      alert('this user ID is already exsist');
    }
  }

  checkValue(userid, password) {
    let ans = this.state.form.filter((user) => { return user.userId === userid });
    console.log('ans', ans);
    if (ans.length === 0) {
      alert('not valid user.....plaese signup first');
    } else {
      if (ans[0].password === password) {
        alert('login');
      } else {
        alert('invalid password');
      }
    }
  }

  checkUser(userid) {
    let ans = this.state.form.filter((user) => { return user.userId === userid });
    if (!ans.length === 0) {
      alert('user id exsist');
    }
  }

  render() {

    console.log('form1:', this.state.form);
    const right = { float: 'right', marginRight: '20px' };
    const left = { float: 'left', marginLeft: '20px' };
    return (
      <div>
        <div style={left}>
          <SignUp
            onSignUp={(e, userId) => this.setValue(e, userId)}
            isUserId={(e) => this.checkUser(e)}
          />
        </div>
        <div style={right}>
          <SignIn
            onSignIn={(userId, password) => this.checkValue(userId, password)}
          />
        </div>

      </div>
    );
  }
}

export default App;
