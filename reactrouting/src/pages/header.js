import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <h2>
                        <img src="/favicon.ico" alt="app-logo"></img>
                        <a href='/'>React App</a>
                    </h2>
                    <button><Link to='/form2'>form2</Link></button>
                    <button><Link to='/form1'>form1</Link></button>
                    <button><Link to='/'>home</Link></button>

                </ul>
            </nav>
        </div>
    );
}

export default Header;