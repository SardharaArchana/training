import React, { Component } from 'react';
import { Row, Form,Col } from 'reactstrap';
import InputTag from './component/input/inputTag';
import TextAreaTag from './component/textarea/textareaTag';
import RadioButton from './component/radioButton/radioButton';
import CheckBox from './component/checkbox/checkBox';
import ButtonTag from './component/button/button';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      obj: {},
      isValidEmail: '',
      isValidPassword: '',
      isValidPhnNo: '',
    }
  }
  checkEmail(email) {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email.match(reg)) {
      this.setState({ isValidEmail: 'valid' });
      console.log(this.state.isValidEmail)
    }
    else {
      this.setState({ isValidEmail: 'invalid' })
      console.log(this.state.isValidEmail)
    }
  }

  checkPassword(password) {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.match(reg)) {
      this.setState({ isValidPassword: 'valid' });
      console.log(this.state.isValidPassword)
    }
    else {
      this.setState({ isValidPassword: 'invalid' })
      console.log(this.state.isValidPassword)
    }
  }

  checkPhnNo(phnno) {
    let reg = /^[ ()+]*([0-9][ ()+]*){10}$/;
    if (phnno.match(reg)) {
      this.setState({ isValidPhnNo: 'valid' });
      console.log(this.state.isValidPhnNo)
    }
    else {
      this.setState({ isValidPhnNo: 'invalid' })
      console.log(this.state.isValidPhnNo)
    }
  }



  onChangeInput(value, name) {
    this.setState({ obj: { ...this.state.obj, [name]: value } });
  }

  onChangeRadio(value, name) {
    this.setState({ obj: { ...this.state.obj, [name]: value } });
  }

  onChangeCheckBox(value, name) {
    this.setState({
      obj: { ...this.state.obj, designation: { ...this.state.obj.designation, [name]: value } }
    });
  }

  onClick() {
    console.log(this.state.obj);
  }

  render() {
    return (
      <Row>
        <Col sm='6'>
          <div className='div'>
            <Form>
              Email:
          <InputTag onBlur={(e) => this.checkEmail(e.target.value)} name='email' type='email'
                validation={this.state.isValidEmail}
                onChange={(e) => { this.onChangeInput(e.target.value, e.target.name) }}
              />
              {this.state.isValidEmail === 'invalid' ? <p>enter email in form abcd@xyz.com</p> : null}
              Password:
          <InputTag name='password' type='password'
                onBlur={(e) => this.checkPassword(e.target.value)}
                onChange={(e) => { this.onChangeInput(e.target.value, e.target.name) }}
                validation={this.state.isValidPassword}
              />
              {this.state.isValidPassword === 'invalid' ?
                <p>enter password with Min 8 characters, at least 1 letter and 1 number</p> :
                null
              }
              Phone Number:
          <InputTag name='number' type='number'
                onBlur={(e) => this.checkPhnNo(e.target.value)}
                onChange={(e) => { this.onChangeInput(e.target.value, e.target.name) }}
                validation={this.state.isValidPhnNo}
              />
              {this.state.isValidPhnNo === 'invalid' ?
                <p>max 10 numbers</p> :
                null
              }
              Remarks:
          <TextAreaTag name='dfjdfk' />
              Gender:
          <RadioButton name='Gender' value='Male' onChange={(e) => { this.onChangeRadio(e.target.value, e.target.name) }} />
              <RadioButton name='Gender' value='Female' onChange={(e) => { this.onChangeRadio(e.target.value, e.target.name) }} />
              <Row className='row'>
                Designation:
            <CheckBox name='trainee' value='trainee' onChange={(e) => { this.onChangeCheckBox(e.target.value, e.target.name) }} />
                <CheckBox name='employee' value='employee' onChange={(e) => { this.onChangeCheckBox(e.target.value, e.target.name) }} />
                <CheckBox name='developer' value='developer' onChange={(e) => { this.onChangeCheckBox(e.target.value, e.target.name) }} />
              </Row>

              <ButtonTag onClick={() => this.onClick()} name='submit' />
              <ButtonTag color='primary' name='click' />
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default App;
