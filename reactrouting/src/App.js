import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false
    }
  }
  setUserData() {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({ name: 'hello', job: 'abcd' })
    }).then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  getUserData() {

    fetch('https://reqres.in/api/users?page=2')
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('res :::', res);

        this.setState({ userList: res.data || [], loading: false });
      });
  }

  handleClick() {
    alert('You have clicked on me');
  };

  render() {
    console.log('userlist', this.state.userList);
    return (
      <div>
        <button onClick={() => {
          this.setUserData();
        }}>Post Data</button>
        <button onClick={() => {
          this.getUserData();
        }}>Get Data</button>
        <br /><br />
        {/* {this.state.loading ? <h4>Loading...</h4> : null}
      {this.state.userList.first_name}<br />
      {this.state.userList.last_name}<br />
      {this.state.userList.avatar} */}
        <Panel>
          {this.state.userList.map((u, i) => {
            return <div key={i}>
              <Panel.Body className='border'>
                <b>First Name:</b> {u.first_name}<br />
                <b>Last Name:</b> {u.last_name}<br />
              </Panel.Body>
            </div>
          })}
        </Panel>
        <hr/>
        <div className='img1'></div>
        <Panel onClick={() => this.handleClick()}>
          <Panel.Body className='border'>Basic panel example &hellip;</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default App;
