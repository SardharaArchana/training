import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <React.Row>
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider round"></span>
            </label>
            <Link to='/'>Registration</Link>
            <Link to='/display'>Users</Link>
        </React.Row>
    )
}

export default Home;