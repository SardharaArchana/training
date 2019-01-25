import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './pagination.css';

class Pagination extends Component {

  onClick(val, i) {

    this.props.onClick(val, i);
  
  }

  createButton = () => {

    const pagination = [];
    let classname = '';
    for (let i = 1; i <= this.props.totalpage; i + 1) {

      this.props.activePage === i ? classname = 'active' : classname = '';
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
  totalpage: PropTypes.object,
  activePage: PropTypes.object,
  onClick: PropTypes.object,
};
