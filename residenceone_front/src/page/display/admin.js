import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import './admin.css';
import Unit from '../../components/administration/unit';
import User from '../../components/administration/user';
import Administration from '../../components/administration/administration';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      listHeader: [],
      collapsed: {
        Administration: true,
        Applications: true,
        UnionCouncil: true,
        Residence: true,
        Public: true,
        Owners: true
      },
      open: true
    }
  }

  // componentDidMount() {
  //   this.getUserList();
  // }

  getUserList() {
    let listheader = [];
    axios.get('http://127.0.0.1:3000/api/user/list',
      {
        headers: { token: localStorage.getItem('userToken') }
      })
      .then(response => {
        console.log('response:', response);
        for (let key in response.data.data[0]) {
          if (key === 'family') {
            listheader = [...listheader, { Header: 'family', accessor: 'family' }];
          } else {
            listheader = [...listheader, { Header: key, accessor: key }];
          }
        };
        let arr = response.data.data.map(user => {
          user.family = 'family';
          return user;
        })
        this.setState({ userList: arr, listHeader: listheader });
      })
      .catch(error => {
        console.log('error:', error);
      })
  }

  userLogOut() {
    console.log('logout');
    localStorage.removeItem('userToken');
  }

  getdata(user) {
    let val = [];
    for (let key in user) {
      if (key === 'family') {
        console.log('fsdfes');
      } else {
        if (key === 'picture') {
          val = [...val, <img src={user[key]} />]
        } else {
          val = [...val, user[key]];
        }
      }
    }
    return val;
  }

  toggleNavbar(name) {
    this.setState({
      collapsed: { ...this.state.collapsed, [name]: !this.state.collapsed[name] }
    }, () => { console.log(this.state) });
  }
  render() {
    let listheader = this.state.listHeader;
    const administrationList = [
      'Structure', 'Units', 'User', 'Groupes', 'Families', 'Owner',
      'Vehicles', 'Documents', 'Events', 'Informantion thread',
      'Swimming pool', 'Tracking Problems', 'Contact', 'Settings'
    ];
    const applicationsList = [
      'Swimming pool', 'Reception', 'Notification',
      'Vehicles', 'Tracking Problems', 'Contact'
    ];
    const unionCouncilList = [
      'Members', 'Documents', 'Contacts',
      'Disscussion', 'Informantion thread', 'Tracking Problems'
    ];
    const residenceList = [
      'Dashboard', 'Events', 'Tracking Problems', 'Bus',
      'Documents', 'Infromation thread', 'Contacts', 'Reservations',
      'Services', 'Groupes', 'Ideas'
    ];
    const ownersList = [
      'Dashboard', 'Documents', 'Infromation thread',
      'Tracking Problems', 'Contacts',
    ];
    const publicList = [
      'Site Internet', 'Blog', 'Documents'
    ];
    const sidebar = [
      { name: 'Administration', value: administrationList },
      { name: 'Applications', value: applicationsList },
      { name: 'UnionCouncil', value: unionCouncilList },
      { name: 'Residence', value: residenceList },
      { name: 'Owners', value: ownersList },
      { name: 'Public', value: publicList }
    ];
    return (
      <BrowserRouter>
        <React.Fragment>
          {/* <Button
          onClick={() => this.getUserList()}
        >UserList</Button>

        <Button
          onClick={() => this.userLogOut()}
        >Log Out</Button> */}

          {/* <Table>
          <thead>
            <tr>
              {listheader.map((l, i) => <th key={i}>
                {l}
              </th>)}
            </tr>
          </thead>
          <tbody>
            {this.state.userList.map(user =>
              <tr key={user.id}>
                {this.getdata(user).map((l, i) => <td key={i}>
                  {l}
                </td>)}
              </tr>)}
          </tbody>
        </Table> */}
          {/* <div>
          <Row>
            <Collapse isOpen={!this.state.open}>
              <Col sm='auto'>
                abcd
            </Col>
            </Collapse>
            <Col sm='auto'>
              <button onClick={() => { this.setState({ open: !this.state.open }) }}>
                click
          </button>
            </Col>
          </Row>
        </div> */}
          <Row style={{ display: 'flex-box' }} className="Row-main">
            {!this.state.open ? null :
              <div className="Row" style={{ width: '20%' }} >
                <Navbar color="dark" dark>
                  <Nav vertical>
                    {sidebar.map(list =>
                      <NavItem style={{ color: 'white' }} key={list.name}>
                        {list.name}
                        <NavbarToggler onClick={() => this.toggleNavbar(list.name)} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed[list.name]} navbar>
                          <Nav navbar vertical>
                            <NavItem>
                              {list.value.map(item =>
                                <Link to={`/admin/${list.name}/${item}`} params={{ name: item }} key={item}>
                                  {item}<br />
                                </Link>
                              )}
                            </NavItem>
                          </Nav>
                        </Collapse>
                      </NavItem>
                    )}
                  </Nav>
                </Navbar>
              </div>
            }
            <Col style={{ width: '100%', minWidth: '80%', maxWidth: '100%' }} className="Margin-0">
              <Row className="Row" style={{ backgroundColor: 'white' }} >
                <Navbar color="faded" light fixed='true'>
                  <NavbarToggler onClick={() => { this.setState({ open: !this.state.open }) }} />
                </Navbar>
              </Row>
              <br /><br />
              <h3>Dashboard</h3>
              <hr />
              <Row className="Row">
                <Col className='Col'>Welcome to Dashboard</Col>
              </Row>
              <Switch>
                <Route exact path='/admin/Administration/:name' component={Administration} />
              </Switch>
            </Col>
          </Row>
        </React.Fragment >
      </BrowserRouter>
    )
  }
}

export default Admin;