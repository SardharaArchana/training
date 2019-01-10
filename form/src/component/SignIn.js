import React, { Component } from 'react';
import Input from './input';
import './input.css';

class SignIn extends Component {
    constructor(){
        super();
        this.state={
            userId:'',
            password:''
        }
    }
    onChangeSignIn(name,value) {
        let obj = {};
        obj[name] = value;
        this.setState(obj);
    }

    onCkick(){
        const {userId,password}=this.state;
        this.props.onSignIn(userId,password);
    }

    render() {
        return (
            <div className='divStyle'>
                <h1>SignIn</h1>
                <Input type='text' name='userId' onChange={(e) => this.onChangeSignIn(e.target.name, e.target.value)} />
                <Input type='password' name='password' onChange={(e) => this.onChangeSignIn(e.target.name, e.target.value)} />
                <button onClick={()=>this.onCkick()}> submit</button>
            </div>
        );
    }
}

export default SignIn;
