import React, { Component } from 'react';
import { addUser, getUser, editUser } from '../apiCall';

import './addUser.css';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        avatar: '',
      },
      Id: 0,
      submit: false,
      empty: false
    };
  }

  async componentDidMount() {
    let userid = Number(this.props.match.params.id);
    await this.setState({ Id: userid });
    if (this.state.Id) {
      let response = await getUser(this.state.Id);
      if (response) {
        this.setState({ user: response.data.data });
      }
    } else {
      this.setState({
        user: {
          first_name: '',
          last_name: '',
          avatar: ''
        },
        id: 0,
        submit: false
      });
      console.log('add user');
    }
  }

  async onClick() {
    const { submit, Id } = this.state;
    const { first_name, last_name } = this.state.user;
    this.setState({ submit: true });
    if (this.state.empty) {
      alert('enter value');
    } else {
      if (Id) {
        await editUser(first_name, last_name);
        this.setState({
          user: {
            first_name: '',
            last_name: '',
            avatar: ''
          },
          Id: 0,
          submit: false,
        });
      } else {
        await addUser(first_name, last_name);
        this.setState({ submit: false });
      }
    }
    if (!submit) {
      this.props.history.push('/list');
    }
  }

  cancel() {
    this.setState({ submit: true });
    this.props.history.push('/list');
  }

  onChange(name, value) {
    const obj = { ...this.state.user };
    obj[name] = value;
    this.setState({ user: obj });
  }

  onBlur(value) {
    value === '' ? this.setState({ empty: true }) : this.setState({ empty: false });
  }

  render() {
    const { last_name, first_name, avatar } = this.state.user;
    const { submit, Id } = this.state;

    return (
      <div className='div'>
        <h4 className='h4'>
          {Id ? 'Edit User' : 'Add User'}
        </h4>
        <div className='div'>
          <label className='label' >Name:</label>
        </div>
        <input
          className='input'
          placeholder='enter first name'
          value={first_name} name='first_name'
          onBlur={(e) => this.onBlur(e.target.value)}
          onChange={e => this.onChange(e.target.name, e.target.value)}
        >
        </input>
        <div className='div'>
          <label className='label'>Job:</label>
        </div>
        <input
          className='input'
          placeholder='enter job'
          value={last_name} name='last_name'
          onBlur={(e) => this.onBlur(e.target.value)}
          onChange={e => this.onChange(e.target.name, e.target.value)}
        >
        </input>
        {Id ?
          <div>
            <div className='div'>
              <label className='label'>Avatar:</label>
            </div>
            <div className='div'>
              <img className='img-style' src={avatar} alt='avatar' />
            </div>
          </div> : null
        }
        <div className='div'>
          <button className='button' onClick={() => this.onClick()}>
            {submit ? 'please wait' : 'Submit'}
          </button>
          <button className='button' onClick={() => this.cancel()} >Cancel</button>
        </div>
      </div>
    );
  }

}

export default AddUser;
