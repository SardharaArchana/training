import React from 'react';
import {Link} from 'react-router-dom';
import './list.css';

const Header = () => {
    return (
        <div>
            <h2>User CRUD Application</h2>
            <ul>
                <Link to='/list' style={{ display: 'inline' }}>Record List</Link> |
              <Link to='/new' style={{ display: 'inline' }}>Add Record</Link>
            </ul>
        </div>
    )
}

export default Header;