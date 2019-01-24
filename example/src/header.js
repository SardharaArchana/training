import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <h2>User CRUD Application..</h2>
            <ul>
                <Link activeclassname='active' className='a' to='/list' >Record List</Link> |
              <Link activeclassname='active' className='a' to='/new' >Add Record</Link>
            </ul>
        </div>
    )
}

export default Header;