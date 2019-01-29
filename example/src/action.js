import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/list/edit/${this.state.id}`} params={{ id: this.state.id }} >Edit</Link> |
        <Link to={`/list/delete/${this.state.id}`} params={{ id: this.state.id }} >Delete</Link>
      </div>
    );
  }
}
export default Action;