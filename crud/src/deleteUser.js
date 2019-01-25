import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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

  deleteUser = () => {

    axios.delete(`https://reqres.in/api/users/${this.props.match.params.id}`)
      .then((response) => {

        console.log('deleted', response);
        this.setState({ delete: true });
      
      })
      .catch((error) => {

        console.log(error);
      
      });
  
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