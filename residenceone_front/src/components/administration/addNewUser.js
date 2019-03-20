import React, { Component } from 'react';
import {
  Row, Col, Button, Modal, ModalHeader, Collapse, InputGroupAddon, InputGroup,
  ModalBody, ModalFooter, Input, DropdownToggle, DropdownItem, DropdownMenu, Dropdown
} from 'reactstrap';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

class AddNewUser extends Component {
  constructor() {
    super();
    this.state = {
      collapse: false,
      userForm1: false,
    }
    this.onModalClick1 = this.onModalClick1.bind(this);
  }

  onModalClick1() {
    this.setState(prevState => ({
      userForm1: !prevState.userForm1
    }));
  }
  render() {
    return (
      <React.Fragment>
        <ModalHeader >Add new User</ModalHeader>
        <ModalBody className='adduser-form'>
          First Name:<Input />
          Last Name:<Input />
          <div onClick={() => { this.setState({ collapse: !this.state.collapse }) }}>
            Presonal Data<FaAngleDown />
          </div>
          <Collapse tag='form' isOpen={this.state.collapse} >
            Mobile number
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='mobile' />
            </InputGroup>
            Email address
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='email' />
            </InputGroup>
            Company Name
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='text' />
            </InputGroup>
            Select date of birth
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='date' />
            </InputGroup>
            <Button color='primary'>upload profile picture</Button>
          </Collapse>
          <div>Security<FaAngleDown />
          </div><Collapse tag='form' isOpen={this.state.collapse} >
            Password
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='password' />
            </InputGroup>
            Confirm password
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='password' />
            </InputGroup>
          </Collapse>
          <div>Residence-linked data<FaAngleDown /></div>
          <Collapse tag='form' isOpen={this.state.collapse} >
            Active date range
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='text' />
            </InputGroup>
            Position
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='text' />
            </InputGroup>
          </Collapse>
          <div>Pool<FaAngleDown /></div>
          <Collapse tag='form' isOpen={this.state.collapse} >
            Manual pool access
          </Collapse>
          <div>Note<FaAngleDown /></div>
          <Collapse tag='form' isOpen={this.state.collapse} >
            note
            <InputGroup size='sm'>
              <InputGroupAddon addonType="prepend">#</InputGroupAddon>
              <Input type='text' />
            </InputGroup>
          </Collapse>
        </ModalBody >
        <ModalFooter>
          <Button onClick={this.onModalClick1}>Submit</Button>{' '}
          <Button onClick={this.onModalClick1}>Cancel</Button>
        </ModalFooter>
      </React.Fragment >
    )
  }
}

export default AddNewUser;