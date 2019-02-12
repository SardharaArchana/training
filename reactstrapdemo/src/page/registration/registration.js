import React, { Component } from 'react';
import { Row, Form, Col, CardHeader, CardBody } from 'reactstrap';

import InputTag from '../../component/input/inputTag';
import TextAreaTag from '../../component/textarea/textareaTag';
import RadioButton from '../../component/radioButton/radioButton';
import CheckBox from '../../component/checkbox/checkBox';
import ButtonTag from '../../component/button/button';

import './registration.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        email: '',
        password: '',
        cpassword: '',
        number: '',
        Gender: '',
        Designation: ['', '', '']
      },
      isValid: {},
    }
  }

  componentDidMount() {
    if (this.props.getEditUser !== null) {
      console.log('prop', this.props.getEditUser)
      this.setState({ obj: this.props.getEditUser });
    }
  }

  onChangeInput(e) {
    this.setState({ obj: { ...this.state.obj, [e.target.name]: e.target.value } });
  }

  onChangeCheckBox(e, i) {
    let obj = this.state.obj.Designation;
    obj[i] = e.target.checked ? obj[i] = e.target.value : obj[i] = '';
    this.setState({
      obj: { ...this.state.obj, Designation: obj }
    });
  }

  onBlur(e) {
    let regexp;
    switch (e.target.name) {
      case 'email': {
        regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        break;
      }
      case 'password': {
        regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        break;
      }
      case 'cpassword': {
        if (this.state.obj.password !== e.target.value) {
          regexp = `^${this.state.obj.password}$`;
        }
        break;
      }
      case 'number': {
        regexp = /^[ ()+]*([0-9][ ()+]*){10}$/;
        break;
      }
      default: {
        console.log('onchange');
      }
    }
    if (e.target.value.match(regexp)) {
      this.setState({ isValid: { ...this.state.isValid, [e.target.name]: true } });
    } else {
      this.setState({ isValid: { ...this.state.isValid, [e.target.name]: false } });
    }
  }

  onClick(e) {
    e.preventDefault();
    const { email, password, cpassword, number, Gender, Designation } = this.state.obj;
    let obj = this.state.isValid;
    const confirmpsd = ((password !== '' && cpassword === '') || (password !== cpassword));
    const arr = [
      { name: 'email', value: email },
      { name: 'password', value: password },
      { name: 'cpassword', value: cpassword },
      { name: 'number', value: number },
      { name: 'Gender', value: Gender },
    ];

    if (email === '' || password === '' || number === '' || Gender === '' || confirmpsd) {
      arr.map((a, i) => {
        if (a.name === 'cpassword' ? confirmpsd : a.value === '') {
          obj[a.name] = false;
          this.setState({ isValid: obj });
        }
        return 'x';
      })
    } else {
      let obj = { email, password, number, Gender, Designation };
      this.props.user(obj);
    }
  }

  render() {
    const { email, password, cpassword, number, Gender, Designation } = this.state.obj;
    console.log(this.state.obj, 'va', this.state.isValid);
    const gender = [{ value: 'Female' }, { value: 'Male' }];
    const designation = [{ name: 'trainee', value: 'trainee' }, { name: 'employee', value: 'employee' }, { name: 'developer', value: 'developer' }];
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
                validation={this.state.isValid.email}
                errorMsg='enter email in form abcd@xyz.com'
              />

              <Row className='Row'>Password:</Row>
              <InputTag
                name='password'
                type='password'
                value={password}
                onBlur={(e) => this.onBlur(e)}
                onChange={(e) => { this.onChangeInput(e) }}
                validation={this.state.isValid.password}
                errorMsg='enter password with Min 8 characters, at least 1 letter and 1 number'
              />

              <Row className='Row'>Confirm Password:</Row>
              <InputTag
                name='cpassword'
                type='password'
                value={cpassword}
                onBlur={(e) => this.onBlur(e)}
                onChange={(e) => { this.onChangeInput(e) }}
                validation={this.state.isValid.cpassword}
                errorMsg='enter same password'
              />

              <Row className='Row'>Phone Number:</Row>
              <InputTag
                name='number'
                type='number'
                value={number}
                onBlur={(e) => this.onBlur(e)}
                onChange={(e) => { this.onChangeInput(e) }}
                validation={this.state.isValid.number}
                errorMsg='must enter 10 number'
              />

              <Row className='Row'>Gender:</Row>
              {gender.map((gender, i) => <React.Fragment key={i}>
                <RadioButton
                  name='Gender'
                  value={gender.value}
                  checked={Gender === gender.value}
                  onChange={(e) => { this.onChangeInput(e) }}
                />
              </React.Fragment>)}
              {this.state.isValid.Gender === false ?
                <p>select any one</p> :
                null}

              <Row className='Row'> Designation:</Row>
              {designation.map((deg, i) => <React.Fragment key={i}>
                <CheckBox
                  name={deg.name}
                  value={deg.value}
                  checked={Designation[i] === deg.value}
                  onChange={(e) => { this.onChangeCheckBox(e, i) }}
                />
              </React.Fragment>)}
              {this.state.isValid.Designation === false ?
                <p>select any one</p> :
                null}

              <Row className='Row'>Remarks:</Row>
              <TextAreaTag name='remarks' onChange={(e) => { this.onChangeInput(e) }} />

              <Row className='Row'>
                <ButtonTag type='submit' name='submit' onClick={(e) => this.onClick(e)} />
              </Row>
            </CardBody>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default App;