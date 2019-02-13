import React, { Component } from 'react';
import { Row, Col, CardHeader, CardBody } from 'reactstrap';

import InputTag from '../../component/input/inputTag';
import TextAreaTag from '../../component/textarea/textareaTag';
import RadioButton from '../../component/radioButton/radioButton';
import CheckBox from '../../component/checkbox/checkBox';
import ButtonTag from '../../component/button/button';
import { validation, emptyValue } from '../../utils/validation';

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
        remarks: '',
        Designation: []
      },
      isValid: {},
    }
    this.gender = [{ value: 'Female' }, { value: 'Male' }];
    this.designation = [{ name: 'trainee', value: 'trainee' }, { name: 'employee', value: 'employee' }, { name: 'developer', value: 'developer' }];

  }

  componentDidMount() {
    if (this.props.getEditUser !== null) {
      console.log('register prop', this.props.getEditUser);
      let user = { ...this.props.getEditUser, cpassword: this.props.getEditUser.password };
      this.setState({ obj: user });
    }
  }

  onChangeInput(e) {
    this.setState({ obj: { ...this.state.obj, [e.target.name]: e.target.value } });
  }

  onChangeCheckBox(e, i) {
    let designation = this.state.obj.Designation;
    if (e.target.checked) {
      designation = [...designation, e.target.value];
    } else {
      designation.splice(i, 1);
    }
    let valid = this.validCheckBox(designation);
    this.setState({
      obj: { ...this.state.obj, Designation: designation },
      isValid: { ...this.state.isValid, Designation: valid }
    });

  }

  validCheckBox(designation) {
    if (designation.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  onBlur(e) {
    let regexp;
    if (e.target.name === 'cpassword') {
      regexp = `^${this.state.obj.password}$`;
    }
    let valid = validation(e, regexp);
    this.setState({ isValid: { ...this.state.isValid, [e.target.name]: valid } })
  }

  onClick() {
    let user = this.state.obj;
    let res = emptyValue(user);
    if (res !== null) {
      this.setState({ isValid: res });
    }
    else {
      const { email, password, number, Gender, Designation,remarks } = this.state.obj;
      let obj = { email, password, number, Gender, Designation,remarks };
      this.props.user(obj);
    }
  }

  render() {
    const { email, password, cpassword, number, Gender, Designation } = this.state.obj;
    console.log(this.state.obj, 'va', this.state.isValid);
    return (
      <Row className='justify-content-md-center'>
        <Col sm='5' className='div'>
          <CardHeader tag='h4'>Registration Form</CardHeader>
          <CardBody>
            <Row className='Row'>Email:</Row>
            <InputTag
              initialProp={{
                name: 'email',
                type: 'email',
                value: email,
                placeholder: 'enter email',
                errormsg: 'enter email in form abcd@xyz.com'
              }}
              validation={this.state.isValid.email}
              onBlur={(e) => this.onBlur(e)}
              onChange={(e) => { this.onChangeInput(e) }}
            />

            <Row className='Row'>Password:</Row>
            <InputTag
              initialProp={{
                name: 'password',
                type: 'password',
                value: password,
                placeholder: 'enter password',
                errormsg: 'enter password with Min 8 characters, at least 1 letter and 1 number'
              }}
              validation={this.state.isValid.password}
              onBlur={(e) => this.onBlur(e)}
              onChange={(e) => { this.onChangeInput(e) }}
            />

            <Row className='Row'>Confirm Password:</Row>
            <InputTag
              initialProp={{
                name: 'cpassword',
                type: 'password',
                value: cpassword,
                placeholder: 'enter same password',
                errormsg: 'enter same password'
              }}
              validation={this.state.isValid.cpassword}
              onBlur={(e) => this.onBlur(e)}
              onChange={(e) => { this.onChangeInput(e) }}
            />

            <Row className='Row'>Phone Number:</Row>
            <InputTag
              initialProp={{
                name: 'number',
                type: 'number',
                value: number,
                placeholder: 'enter phone number',
                errormsg: 'must enter 10 number'
              }}
              validation={this.state.isValid.number}
              onBlur={(e) => this.onBlur(e)}
              onChange={(e) => { this.onChangeInput(e) }}
            />

            <Row className='Row'>Gender:
            {this.state.isValid.Gender === false ?
                <span>*required</span> :
                null}
            </Row>
            {this.gender.map((g, i) => <React.Fragment key={i}>
              <RadioButton
                initialProp={{
                  name: 'Gender',
                  value: g.value,
                  checked: Gender === g.value
                }}
                onChange={(e) => { this.onChangeInput(e) }}
                onBlur={(e) => this.onBlur(e)}
              />
            </React.Fragment>)}


            <Row className='Row'> Designation:
            {this.state.isValid.Designation === false ?
                <p>*required</p> :
                null}
            </Row>
            {this.designation.map((d, i) => <React.Fragment key={i}>
              <CheckBox
                initialProp={{
                  name: d.name,
                  value: d.value,
                  checked: Designation.includes(d.value)
                }}
                onChange={(e) => { this.onChangeCheckBox(e, i) }}
                onBlur={(e) => this.onBlur(e)}
              />
            </React.Fragment>)}

            <Row className='Row'>Remarks:
            {this.state.isValid.remarks === false ?
                <p>*required</p> :
                null}
            </Row>
            <TextAreaTag
              name='remarks'
              onChange={(e) => { this.onChangeInput(e) }}
              onBlur={(e) => this.onBlur(e)}
            />

            <Row className='Row'>
              <ButtonTag
                type='submit'
                name='submit'
                onClick={() => this.onClick()}
              />
            </Row>
          </CardBody>
        </Col>
      </Row>
    );
  }
}

export default App;