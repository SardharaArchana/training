import React, { Component } from 'react';

import { addUser, getUser, editUser } from '../../api/apiCall';

import '../user/addUser.css';

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

  componentWillReceiveProps() {
    if (!this.state.submit) {
      this.setState({
        user: {
          first_name: '',
          last_name: '',
          avatar: ''
        },
        Id: 0,
      });
    }

  }

  async componentDidMount() {
    let userid = Number(this.props.match.params.id);
    await this.setState({ Id: userid });
    if (this.state.Id) {
      let response = await getUser(this.state.Id);
      if (response) {
        this.setState({ user: response.data.data });
      } else {
        console.log('error');
      }
    }
  }

  async onClick() {
    const { submit, Id } = this.state;
    const { first_name, last_name } = this.state.user;
    this.setState({ submit: true });
    if (Id) {
      await editUser({ first_name, last_name, Id });
      this.setState({ submit: false });
      if (!submit) {
        this.props.history.push('/list');
      }
    } else {
      let res = await addUser({ first_name, last_name });
      console.log(res);
      this.setState({ submit: false });
      if (!submit) {
        this.props.history.push({ pathname: '/list', state: { addUser: res.data } });
      }
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
    const { submit, Id, empty } = this.state;

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
          <button className='button-active' onClick={() => this.onClick()}>
            {submit ? 'please wait' : 'Submit'}
          </button>
          <button className='button' onClick={() => this.cancel()} >Cancel</button>
          {empty ? <span>enter values</span> : null}
        </div>
      </div>
    );
  }
}
export default AddUser;
