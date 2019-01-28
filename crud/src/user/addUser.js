import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './addUser.css';
import { addUser } from '../apiCall';

class AddUser extends Component {

  constructor() {

    super();
    this.state = {
      submit: false,
      name: '',
      job: '',
      getData: false,
      empty: false
    };

  }

  async onClick() {
    if (this.state.empty) {
      alert('enter value');
    } else {
      this.setState({ getData: true });
      const { name, job } = this.state;
      await addUser(name, job);
      this.setState({ submit: true, getData: false });
    }
  }

  cancel() {

    this.setState({ submit: true });

  }

  onChange(name, value) {
    const obj = {};
    obj[name] = value;
    this.setState(obj);

  }

  onBlur(value) {

    value === '' ? this.setState({ empty: true }) : this.setState({ empty: false });
  }

  render() {

    return (
      <div className='div'>
        <h4 className='h4'>Add User</h4><br />
        <div className='div'>
          <label className='label' >Name:</label>
        </div>
        <input className='input' placeholder='enter first name' name='name' onBlur={(e) => this.onBlur(e.target.value)} onChange={e => this.onChange(e.target.name, e.target.value)} ></input>
        {this.state.empty ? <span>please enter value..</span> : null}
        <div className='div'>
          <label className='label'>Job:</label>
        </div>
        <input className='input' placeholder='enter job' name='job' onChange={e => this.onChange(e.target.name, e.target.value)} ></input>
        {this.state.empty ? <span>please enter value..</span> : null}
        <div className='div'>
          <button className='button' onClick={() => this.onClick()}>{this.state.getData ? 'please wait' : 'Submit'}</button>
          <button className='button' onClick={() => this.cancel()} >Cancel</button>
        </div>
        {this.state.submit ? <Redirect to='/list' /> : null}
      </div>
    );

  }

}

export default AddUser;
