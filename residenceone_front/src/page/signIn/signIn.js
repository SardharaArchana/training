import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';

import './signIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  onSignIn() {
    console.log('click');
    let obj = this.state;
    axios.post('http://127.0.0.1:3000/api/user/login', obj)
      .then(response => {
        console.log('response:', response);
        localStorage.setItem('userToken', response.data.token);
      })
      .catch(error => {
        console.log('error:', error)
      })
    this.props.history.push('/display');
  }

  render() {
    const { email, password } = this.state;

    return (
      <React.Fragment>
        <Row className='justify-content-center'>
          <h2>The Cadenelle</h2>
        </Row>
        <Row className='justify-content-center'>
          <Col className='col' sm={4}>
            <Form>
              <p>LogIn</p>
              <hr />
              <FormGroup>
                <Label>Email:</Label>
                <input
                  className='form-control bounceIn animation-delay2'
                  type='email'
                  name='email'
                  value={email}
                  placeholder='enter email address'
                  onChange={(e) => { this.onChange(e) }}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password:</Label>
                <input
                  className='form-control bounceIn animation-delay2'
                  type='password'
                  name='password'
                  value={password}
                  placeholder='enter password'
                  onChange={(e) => { this.onChange(e) }}
                />
              </FormGroup>
              <br />
              <hr />
              <FormGroup style={{ float: 'right' }}>
                <Button
                  color="success"
                  onClick={() => this.onSignIn()}
                >SignIn</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SignIn;
