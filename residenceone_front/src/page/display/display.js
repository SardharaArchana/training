import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Display extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      listHeader: [],
      collapsed: true
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  getUserList() {
    let listheader = [];
    axios.get('http://127.0.0.1:3000/api/user/list',
      {
        headers: { token: localStorage.getItem('userToken') }
      })
      .then(response => {
        console.log('response:', response);
        for (let key in response.data.data[0]) {
          listheader = [...listheader, key];
        };
        this.setState({ userList: response.data.data, listHeader: listheader });
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

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    let listheader = this.state.listHeader;

    return (
      <React.Fragment>
        <Button
          onClick={() => this.getUserList()}
        >UserList</Button>

        <Button
          onClick={() => this.userLogOut()}
        >Log Out</Button>

        <Table>
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
        </Table>

        <div style={{ width: '20%' }}>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

      </React.Fragment >
    )
  }
}

export default Display;