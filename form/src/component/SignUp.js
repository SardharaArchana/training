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
            isValidEmail: true,
            isUserId: true,
            isValidPassword: true
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
        else {
            this.setState({ isValidEmail: true });
        }

    };

    isValidUser(e) {
        let userId = e.target.value;
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!reg.test(userId)) {
            this.setState({ isUserId: false });
        }
        else {
            this.setState({ isUserId: true });
        }

    };
    isValidPassword(e) {
        let password = e.target.value;
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!reg.test(password)) {
            this.setState({ isValidPassword: false });
        }
        else {
            this.setState({ isValidPassword: true });
        }

    };

    render() {
        const { isUserId, isValidEmail } = this.state;

        return (

            <div className='divStyle'>
                <h1>SignUp</h1>
                <Input
                    type='text'
                    name='firstName'
                    onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)}
                />
                <Input
                    type='text'
                    name='lastName'
                    onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)}
                />
                <Input
                    type='text'
                    name='userId'
                    onBlur={(e) => this.isValidUser(e)}
                    onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)}
                />
                {isUserId ? null : <p style={{ color: 'red' }}>your user id have Minimum eight characters, at least one letter and one number</p>}
                <Input
                    type='email'
                    name='email'
                    onBlur={(e) => this.isValidEmail(e)}
                    onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)}
                />
                {isValidEmail ? null : <p style={{ color: 'red' }}>please enter valid email</p>}
                <Input
                    type='password'
                    name='password'
                    onBlur={(e) => this.isValidPassword(e)}
                    onChange={(e) => this.onChangeSignUp(e.target.name, e.target.value)}
                />
                <button onClick={() => this.onClick()}>submit</button>
            </div>
        );
    }
}

export default SignUp;
