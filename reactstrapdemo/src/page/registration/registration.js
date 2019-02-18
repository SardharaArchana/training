import React, { Component } from 'react';
import { Row, Col, CardHeader, CardBody } from 'reactstrap';

import InputTag from '../../component/input/inputTag';
import TextAreaTag from '../../component/textarea/textareaTag';
import RadioButton from '../../component/radioButton/radioButton';
import CheckBox from '../../component/checkbox/checkBox';
import ButtonTag from '../../component/button/button';
import PriceRange from '../../component/priceRange/priceRange';
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
        from: '',
        to: '',
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

  onChangeCheckBox(e) {
    let designation = this.state.obj.Designation;
    let valid = designation.length !== 0 ? true : null;
    if (e.target.checked) {
      designation = [...designation, e.target.value];
    } else {
      designation.splice(designation.indexOf(e.target.value), 1);
    }
    this.setState({
      obj: { ...this.state.obj, Designation: designation },
      isValid: { ...this.state.isValid, Designation: valid }
    });
  }

  checkValueRange(e) {
    const { from, to } = this.state.obj;
    let price;
    if (Number(from) < Number(to) && (to !== '' && from !== '')) {
      this.setState({ isValid: { priceRange: true } });
    } else {
      if (e.target.name === 'to' && from !== '') {
        price = Number(to) > Number(from) ? true : false;
      }
      if (e.target.name === 'from' && to !== '') {
        price = Number(to) > Number(from) ? true : false;
      }
      this.setState({ isValid: { ...this.state.isValid, priceRange: price } });
    }
  }

  onBlur(e) {
    let valid = validation(e, this.state.obj,this.state.isValid);
    valid={...this.state.isValid,...valid};
    this.setState({isValid:valid});
  }

  onClick() {
    let user = this.state.obj;
    let res = emptyValue(user);
    if (res !== null) {
      this.setState({ isValid: res });
    }
    else {
      const { email, password, number, Gender, Designation, remarks,to,from } = this.state.obj;
      let obj = { email, password, number, Gender, Designation, remarks ,to,from};
      this.props.user(obj);
    }
  }

  render() {
    const { email, password, cpassword, number, Gender, Designation,remarks, to, from } = this.state.obj;
    console.log(this.state.obj, 'valid', this.state.isValid);
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
                errormsg: 'enter email in form abcd@xyz.com',
                empty: '*required'
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
                errormsg: 'enter password with Min 8 characters, at least 1 letter and 1 number',
                empty: '*required'
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
                errormsg: 'enter same password',
                empty: '*required'
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
                errormsg: 'must enter 10 number',
                empty: '*required'
              }}
              validation={this.state.isValid.number}
              onBlur={(e) => this.onBlur(e)}
              onChange={(e) => { this.onChangeInput(e) }}
            />

            <Row className='Row'>Gender:
            {this.state.isValid.Gender === false ?
                <span className='color-red'>*required</span> :
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
                <span className='color-red'>*required</span> :
                null}
            </Row>
            {this.designation.map((d, i) => <React.Fragment key={i}>
              <CheckBox
                initialProp={{
                  name: d.name,
                  value: d.value,
                  checked: Designation.includes(d.value)
                }}
                onChange={(e) => { this.onChangeCheckBox(e) }}
              />
            </React.Fragment>)}

            <Row className='Row'>Remarks:
            {this.state.isValid.remarks === false ?
                <span className='color-red'>*required</span> :
                null}
            </Row>
            <TextAreaTag
              name='remarks'
              value={remarks}
              onChange={(e) => { this.onChangeInput(e) }}
              onBlur={(e) => this.onBlur(e)}
            />

            <Row className='Row'>Enter Price Range:
              {(this.state.isValid.priceRange === false && (from === '' || to === '')) ?
                <span className='color-red'>*required</span> :
                null
              }
              <PriceRange
                value={{from,to}}
                valid={this.state.isValid.priceRange}
                onChange={(e) => { this.onChangeInput(e) }}
                checkValueRange={(e) => { this.checkValueRange(e) }}
              />
            </Row>

            <Row className='Row'>
              <ButtonTag
                type='submit'
                name='submit'
                onClick={() => this.onClick()}
                onBlur={(e) => this.onBlur(e)}
              />
            </Row>

          </CardBody>
        </Col>
      </Row>
    );
  }
}

export default App;