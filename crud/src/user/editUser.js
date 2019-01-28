import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { editUser, getUser } from '../apiCall';

class EditUser extends Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        avatar: '',
      },
      submit: false,
      updated: false,
    };

  }

  async componentDidMount() {

    let response = await getUser(this.props.match.params.id);
    this.setState({ user: response.data.data });

  }

  onChange(name, value) {

    const obj = this.state.user;
    obj[name] = value;
    this.setState({ user: obj });

  }

  async onClick() {

    this.setState({ updated: true });
    await editUser(this.props.match.params.id, this.state.first_name, this.state.last_name);
    this.setState({ submit: true, updated: false });
  }

  cancel() {

    this.setState({ submit: true });

  }

  render() {

    return (
      <div>
        <h4 className='h4'>Edit User</h4><br />
        <div className='div'>
          <label className='label' >Name:</label>
        </div>
        <input className='input' name='first_name' onChange={e => this.onChange(e.target.name, e.target.value)} value={this.state.user.first_name} placeholder='enter first name' ></input>
        <div className='div'>
          <label className='label'>Job:</label>
        </div>
        <input className='input' name='last_name' onChange={e => this.onChange(e.target.name, e.target.value)} value={this.state.user.last_name} placeholder='enter job' ></input>
        <div className='div'>
          <img src={this.state.user.avatar} alt='avatar' />
        </div>
        <div className='div'>
          <button className='button' activeclassname='buttonactive' onClick={() => this.onClick()} >{this.state.updated ? 'please wait' : 'Submit'}</button>
          <button className='button' onClick={() => this.cancel()} >Cancel</button>
        </div>
        {this.state.submit ? <Redirect to='/list' /> : null}
      </div>
    );

  }

}

export default EditUser;


EditUser.propTypes = {
  match: PropTypes.object,
};