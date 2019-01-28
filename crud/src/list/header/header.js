import React from 'react';
import { Link  } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div>
    <h2>User CRUD Application..</h2>
    <ul>
      <Link className='a' to='/list'>Record List</Link> | &nbsp;
      <Link className='a' to='/new' >Add Record</Link>
    </ul>
  </div>
);

export default Header;
