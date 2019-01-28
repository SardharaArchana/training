import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteUser } from '../apiCall';

class DeleteUser extends Component {

  constructor(props) {

    super(props);
    this.state = {
      cancel: false,
      delete: false,
    };

  }

  componentDidMount() {

    this.confirmDelete();

  }

  async deleteUser ()  {

    await deleteUser(this.props.match.params.id);
    this.setState({ delete: true });
  }

  cancel = () => {

    this.setState({ cancel: true });

  }

  confirmDelete = () => {

    if (alert('are you sure you want to delete')) {

      this.deleteUser();

    } else {

      this.cancel();

    }

  }

  render() {

    return (
      <div>
        {this.state.delete ? <Redirect to='/list' /> : null}
        {this.state.cancel ? <Redirect to='/list' /> : null}
      </div>
    );

  }

}

export default DeleteUser;


DeleteUser.propTypes = {
  match: PropTypes.object,
};