import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pagination.css';

class Pagination extends Component {
    constructor(props){
        super(props);
    }
    onClick(val){
        this.props.onClick(val);
    }
    render() {
        return (
            <div>
                <Link  to='/list/1'><button value='1' onClick={(e) => this.onClick(e.target.value)}>1</button></Link>
                <Link to='/list/2'><button value='2' onClick={(e) => this.onClick(e.target.value)}>2</button></Link>
                <Link to='/list/3'><button value='3' onClick={(e) => this.onClick(e.target.value)}>3</button></Link>
                <Link to='/list/4'><button value='4' onClick={(e) => this.onClick(e.target.value)}>4</button></Link>
            </div>
        );
    }
}

export default Pagination;
