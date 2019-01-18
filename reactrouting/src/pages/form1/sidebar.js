import React from 'react';
import List from './list';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  
        <ul className='list-group'>
            <Link to='/form1/html'><List listName='html' /></Link>
            <Link to='/form1/javascript'><List listName='javascript' /></Link>
            <Link to='/form1/css'><List listName='css' /></Link>
            <Link to='/form1/html'><List listName='html' /></Link>
            <Link to='/form1/javascript'><List listName='javascript' /></Link>
            <Link to='/form1/css'><List listName='css' /></Link>
            
        </ul>
    
)

export default Sidebar;