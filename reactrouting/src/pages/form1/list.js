import React from 'react';

const List=(props)=>{
    return(
        <div>
    <li className='list-group-item list-group-item-action'>{props.listName}</li>
    </div>
    );
}

export default List;