import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './action.css';

class Action extends Component {

  constructor() {

    super();
    this.state = {
      id: 0,
    };
  
  }

  componentDidMount() {

    this.setState({ id: this.props.id });
  
  }

  render() {

    return (
      <div>
        <Link to={`/list/edit/${this.state.id}`} params={{ id: this.state.id }} >Edit</Link> | &nbsp;
        <Link to={`/list/delete/${this.state.id}`} params={{ id: this.state.id }} >Delete</Link>
      </div>
    );
  
  }

}
export default Action;


Action.propTypes = {
  id: PropTypes.number,
};