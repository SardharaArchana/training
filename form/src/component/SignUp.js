import React, { Component } from 'react';
import Input from './input';
import './input.css';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            userId: '',
            isValidEmail: true
        }
    }
    onChangeSignUp(name, value) {
        let obj = {};
        obj[name] = value;
        this.setState(obj);
    }
    onClick() {
        const { firstName, lastName, password, email, userId } = this.state;
        let obj = { firstName, lastName, password, email, userId };
        this.props.onSignUp(obj, this.state.userId);
    }
    isValidEmail(e) {
        let email = e.target.value;
        let reg = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/;
        if (!reg.test(email)) {
            this.setState({ isValidEmail: false });
        }

    };

    render() {
        const {isValidEmail}=this.state;

        return (

            <div className='divStyle'>
                <h1>SignUp</h1>
                <Input type='text' name='firstName' onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)} />
                <Input type='text' name='lastName' onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)} />
                <Input type='text' name='userId' onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)} />
                <Input type='email' name='email' onBlur={(e) => this.isValidEmail(e)} onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)} />
                {isValidEmail? null:<p style={{color:'red'}}>please enter valid email</p>}
                <Input type='password' name='password' onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)} />
                <button onClick={() => this.onClick()}>submit</button>
            </div>
        );
    }
}

export default SignUp;
