import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './pagination.css';

class Pagination extends Component {

  onClick(val) {
    this.props.onClick(val);
  }

  createButton = () => {

    const pagination = [];
    let classname = '';
    for (let i = 1; i <= 4; i++) {

      i === this.props.activepage ? classname = 'active' : classname = '';
      pagination.push(<Link to='/list' key={i}>  <button className={classname} value={i} onClick={e => this.onClick(e.target.value, i)}>{i}</button></Link>);

    }
    return pagination;

  }

  render() {

    return (
      <div>
        {this.createButton()}
      </div>
    );

  }

}

export default Pagination;


Pagination.propTypes = {
  totalpage: PropTypes.number,
  activepage: PropTypes.number,
  result: PropTypes.object,
  onClick: PropTypes.func
};
