import React from 'react';
import './list.css'

const ListHeader = () => {
    return (
        <div>
            <div className='divStyleHeader'>First Name </div>
            <div className='divStyleHeader'>Last Name</div>
            <div className='divStylesmallHeader'>Avatar </div>
            <div className='divStyleHeader'>Action</div>
        </div>
    )
}

export default ListHeader;