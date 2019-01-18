import React from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => (

    <ul className='list-group'>
        <div className='container-fluid'>
            <div className=' navbar navbar-expand-sm bg-dark navbar-dark row'>
                <Link style={{color:'white'}} to='/form2/reactjs'>
                    <div className='col-12 col-md-6'>
                        React
                    </div>
                </Link>
                <Link style={{color:'white'}} to='/form2/angular'>
                    <div className='col-12 col-md-6'>
                        Angular
                    </div>
                </Link>
            </div>
        </div>
    </ul>

)

export default Navbar;