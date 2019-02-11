import React, { Component } from 'react';
import { Row, Form, Col, CardHeader, CardBody } from 'reactstrap';
import { checkEmail, checkPassword, checkConfirmPassword, checkPhnNo } from '../../validation/validation';
import InputTag from '../../component/input/inputTag';
import TextAreaTag from '../../component/textarea/textareaTag';
import RadioButton from '../../component/radioButton/radioButton';
import CheckBox from '../../component/checkbox/checkBox';
import ButtonTag from '../../component/button/button';

import './registration.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      obj: {
        email: '',
        password: '',
        cpassword: '',
        number: '',
        Gender: '',
        designation: []
      },
      isChecked: false,
      isValidEmail: '',
      isValidPassword: '',
      isValidPhnNo: '',
      isValidConfirmPassword: '',
      isValidGender: '',
      User: [],
    }
  }

  onChangeInput(e) {
    this.setState({ obj: { ...this.state.obj, [e.target.name]: e.target.value } });
    if (e.target.name === 'Gender') {
      if (e.target.value === '') {
        this.setState({ isValidGender: 'invalid' });
      } else {
        this.setState({ isValidGender: 'valid' });
      }
    }
  }

  onChangeCheckBox(e, i) {
    this.setState({ isChecked: true });
    let obj = this.state.obj.designation;
    obj[i - 1] = { [e.target.name]: e.target.checked };
    this.setState({
      obj: { ...this.state.obj, designation: obj }
    });
  }

  onBlur(e) {
    switch (e.target.name) {
      case 'email': {
        const email = checkEmail(e.target.value);
        this.setState({ isValidEmail: email });
        break;
      }
      case 'password': {
        const password = checkPassword(e.target.value);
        this.setState({ isValidPassword: password });
        break;
      } case 'cpassword': {
        const cpassword = checkConfirmPassword(e.target.value, this.state.obj.password);
        this.setState({ isValidConfirmPassword: cpassword });
        break;
      }
      case 'number': {
        const number = checkPhnNo(e.target.value);
        this.setState({ isValidPhnNo: number });
        break;
      }
      default: {
        console.log('onchange');
      }
    }

  }

  async onClick(e) {
    e.preventDefault();
    const { email, password, cpassword, number, Gender } = this.state.obj;
    const a = email === '',
      b = password === '',
      c = ((password !== '' && cpassword === '') || (password !== cpassword)),
      d = number === '',
      g = Gender === '';
    if (a || b || c || d || g) {
      if (a) {
        this.setState({ isValidEmail: 'invalid' });
      }
      if (b) {
        this.setState({ isValidPassword: 'invalid' });
      }
      if (c) {
        this.setState({ isValidConfirmPassword: 'invalid' });
      }
      if (d) {
        this.setState({ isValidPhnNo: 'invalid' });
      }
      if (g) {
        this.setState({ isValidGender: 'invalid' })
      }
    } else {
      await this.setState(prevState => ({
        User: [...prevState.User, this.state.obj]
      }))
      this.setState({
        obj: {
          email: '',
          password: '',
          cpassword: '',
          number: '',
          Gender: '',
          designation: [
            { trainee: false },
            { developer: false },
            { employee: false }
          ]
        }, isChecked: false
      })
      // this.props.history.push({
      //   pathname: '/display',
      //   state: this.state.User
      // })
    }
  }

  onEditClick() {
    let user = this.state.User.pop();
    this.setState({ obj: user });
  }

  render() {
    const { email, password, cpassword, number, Gender,designation} = this.state.obj;
    console.log(this.state.obj, 'user', this.state.User);
    return (
      <Row className='justify-content-md-center'>
        <Col sm='4'>
          <Form className='div'>
            <CardHeader tag='h4'>Registration Form</CardHeader>
            <CardBody>
              <Row className='Row'>Email:</Row>
              <InputTag
                name='email'
                type='email'
                value={email}
                onBlur={(e) => this.onBlur(e)}
                onChange={(e) => { this.onChangeInput(e) }}
                validation={this.state.isValidEmail}
              />
              {this.state.isValidEmail === 'invalid' && email === '' ? <p>enter value</p> :
                this.state.isValidEmail === 'invalid' ?
                  <p>enter email in form abcd@xyz.com</p> : null
              }

              <Row className='Row'>Password:</Row>
              <InputTag
                name='password'
                type='password'
                value={password}
                onBlur={(e) => this.onBlur(e)}
                onChange={(e) => { this.onChangeInput(e) }}
                validation={this.state.isValidPassword}
              />
              {this.state.isValidPassword === 'invalid' && password === '' ? <p>enter value</p> :
                this.state.isValidPassword === 'invalid' ?
                  <p>enter password with Min 8 characters, at least 1 letter and 1 number</p> :
                  null
              }

              <Row className='Row'>Confirm Password:</Row>
              <InputTag
                name='cpassword'
                type='password'
                value={cpassword}
                onBlur={(e) => this.onBlur(e)}
                onChange={(e) => { this.onChangeInput(e) }}
                validation={this.state.isValidConfirmPassword}
              />
              {this.state.isValidConfirmPassword === 'invalid' && password !== '' && cpassword === '' ? <p>enter value</p> :
                this.state.isValidConfirmPassword === 'invalid' ?
                  <p>enter same password</p> :
                  null
              }

              <Row className='Row'>Phone Number:</Row>
              <InputTag
                name='number'
                type='number'
                value={number}
                onBlur={(e) => this.onBlur(e)}
                onChange={(e) => { this.onChangeInput(e) }}
                validation={this.state.isValidPhnNo}
              />
              {this.state.isValidPhnNo === 'invalid' ?
                <p>must enter 10 numbers</p> :
                null
              }

              <Row className='Row'>Gender:</Row>
              <RadioButton
                name='Gender'
                value='Male'
                checked={Gender === 'Male'}
                onChange={(e) => { this.onChangeInput(e) }} />
              <RadioButton
                name='Gender'
                value='Female'
                checked={Gender === 'Female'}
                onChange={(e) => { this.onChangeInput(e) }} />
              {this.state.isValidGender === 'invalid' ?
                <p>select any one</p> :
                null
              }

              <Row className='Row'> Designation:</Row>
              <CheckBox
                name='trainee'
                value='trainee'
                checked={designation[0]==={trainee:false}?false:designation[0]==={trainee:true}?true:null}
                onChange={(e) => { this.onChangeCheckBox(e, 1) }}
              />
              <CheckBox
                name='employee'
                value='employee'
                onChange={(e) => { this.onChangeCheckBox(e, 2) }}
              />
              <CheckBox
                name='developer'
                value='developer'
                onChange={(e) => { this.onChangeCheckBox(e, 3) }}
              />

              <Row className='Row'>Remarks:</Row>
              <TextAreaTag name='remarks' onChange={(e) => { this.onChangeInput(e) }} />

              <Row className='Row'>
                <ButtonTag type='submit' name='submit' onClick={(e) => this.onClick(e)} />&nbsp;
                <ButtonTag color='primary' name='Edit' onClick={() => this.onEditClick()} />
              </Row>
            </CardBody>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default App;