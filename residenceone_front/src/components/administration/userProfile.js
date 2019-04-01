import React, { Component } from 'react';
import { getUserDetails } from '../../api/apiCall';
import {
  Nav, NavLink, NavItem, Row, Collapse, TabContent, TabPane, Col, Button, Modal,
  DropdownToggle, DropdownItem, DropdownMenu, Dropdown
} from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';

import { markHandicapped, markActive } from '../../api/apiCall';

import './user.css';
import AddNewUser from './addNewUser';

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
      active: 'profile',
      openHelp: false,
      openModal: '',
      editUserModal: false
    }
  }

  componentDidMount(){
    this.getUserProfile();
  }

  async getUserProfile() {
    let res = await getUserDetails(this.props.match.params.id);
    this.setState({ data: res, loading: false });
  }

  selectActiveTab(name) {
    this.setState({ active: name })
  }

  async saveHandicape(name) {
    let status = this.state.data.data.data.isHandicapped === 0 ? 1 : 0;
    await markHandicapped(this.state.data.data.data.id, status);
    this.openModal(name);
    this.getUserProfile();
  }

  async saveActive(name) {
    console.log(name,this.state.data.data.data.id);
    let active = this.state.data.data.data.status === "0" ? 1 : 0;
    await markActive(this.state.data.data.data.id, active);
    this.openModal(name);
    this.getUserProfile();
  }

  openModal(name) {
    this.setState({ openModal: this.state.openModal === name ? '' : name })
  }

  editUserModal() {
    this.setState({ editUserModal: !this.state.editUserModal })
  }

  render() {
    const { active } = this.state;
    const tabs = [
      { name: 'Profile', value: 'profile' },
      { name: 'Notifications', value: 'notification' },
      { name: 'Packets', value: 'packets' },
      { name: 'Preferences', value: 'preferences' },
      { name: 'Role history', value: 'role' },
      { name: 'Group history', value: 'grp' },
      { name: 'Ownership history', value: 'owner' },
      { name: 'Family history', value: 'family' },
    ]
    return (
      <React.Fragment>
        {this.state.loading ? null :
          <React.Fragment>
            <Modal size='lg' scrollable='true' isOpen={this.state.openModal === 'handicape'} >
              <Button name='handicape' onClick={(e) => this.saveHandicape(e.target.name)}>Save</Button>
              <Button name='handicape' onClick={(e) => this.openModal(e.target.name)} >Cancel</Button>
            </Modal>
            <Modal size='lg' scrollable='true' isOpen={this.state.openModal === 'active'} >
              inactive
          <Button name='active' onClick={(e) => this.saveActive(e.target.name)}>Save</Button>
              <Button name='active' onClick={(e) => this.openModal(e.target.name)} >Cancel</Button>
            </Modal>
            <Row style={{ margin: '0px', backgroundColor: '#fff' }}>
              <Nav tabs style={{ width: '100%', backgroundColor: '#f3f3f3', height: 'max-content' }}>
                {tabs.map((tab, i) =>
                  <NavItem key={i}>
                    <NavLink active={active === tab.value} name={tab.value} onClick={(e) => this.selectActiveTab(e.target.name)}>
                      {tab.name}
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <TabContent activeTab={active}>
                <TabPane tabId="profile">
                  <Row style={{ margin: '0px', padding: '10px' }}>

                    <Dropdown className='drop-down' isOpen={this.state.openHelp}
                      toggle={() => { this.setState({ openHelp: !this.state.openHelp }) }} >
                      <DropdownToggle style={{ backgroundColor: 'inherit', width: '100%', padding: '2px', color: 'black', borderStyle: 'none' }}>
                        <FaEllipsisV />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem onClick={() => this.editUserModal()}>
                          Edit profile
                        </DropdownItem>
                        <DropdownItem name='handicape' onClick={(e) => this.openModal(e.target.name)}>
                          {this.state.data.data.data.isHandicapped === 0 ? 'mark as handicapped' : 'unmark as handicapped'}
                        </DropdownItem>
                        <DropdownItem name='active' onClick={(e) => this.openModal(e.target.name)}>
                          {this.state.data.data.data.status === 1 ? 'mark as inactive' : 'mark as active'}
                        </DropdownItem>
                        <DropdownItem>
                          Help
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown >
                    <Collapse style={{position:'relative',right:'15px'}} isOpen={this.state.editUserModal}>
                      <AddNewUser onModalClick1={() => this.editUserModal()} />
                    </Collapse>
                  </Row>
                  <Row style={{ width: '100%', margin: '0px', padding: '10px' }}>
                    <img src={this.state.data.data.data.picture} alt='user profile' />
                  </Row>
                </TabPane>
              </TabContent>

            </Row>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default UserProfile;