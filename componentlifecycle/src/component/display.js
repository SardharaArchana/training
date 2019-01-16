import React from 'react';

const Display = (props) => {

    return (
        <div>
            <p>{props.name} : {props.state}</p>
        </div>

    );

}

export default Display;