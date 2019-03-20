import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import FaArrowUp from 'react-icons/lib/io/android-arrow-dropup-circle';
import FaArrowDown from 'react-icons/lib/io/android-arrow-dropdown-circle';

import './admin.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { match } = this.props;
    const { heading, collapsed } = this.state;
    const administrationList = [
      { name: 'Structure' }, { name: 'Units' }, { name: 'User' }, { name: 'Groupes' }, { name: 'Families' }, { name: 'Owner' },
      { name: 'Vehicles' }, { name: 'Documents' }, { name: 'Events' }, { name: 'Informantion thread' },
      { name: 'Swimming pool' }, { name: 'Tracking Problems' }, { name: 'Contact' }, { name: 'Settings' }
    ];
    const applicationsList = [
      { name: 'Swimming pool' }, { name: 'Reception' }, { name: 'Notification' },
      { name: 'Vehicles' }, { name: 'Tracking Problems' }, { name: 'Contact' }
    ];
    const unionCouncilList = [
      { name: 'Members' }, { name: 'Documents' }, { name: 'Contacts' },
      { name: 'Disscussion' }, { name: 'Informantion thread' }, { name: 'Tracking Problems' }
    ];
    const residenceList = [
      { name: 'Dashboard' }, { name: 'Events' }, { name: 'Tracking Problems' }, { name: 'Bus' },
      { name: 'Documents' }, { name: 'Infromation thread' }, { name: 'Contacts' }, { name: 'Reservations' },
      { name: 'Services' }, { name: 'Groupes' }, { name: 'Ideas' }
    ];
    const ownersList = [
      { name: 'Dashboard' }, { name: 'Documents' }, { name: 'Infromation thread' },
      { name: 'Tracking Problems' }, { name: 'Contacts' },
    ];
    const publicList = [
      { name: 'Site Internet' }, { name: 'Blog' }, { name: 'Documents' }
    ];
    const sidebar = [
      { name: 'Administration', value: administrationList, path: 'admin' },
      { name: 'Applications', value: applicationsList, path: 'apps' },
      { name: 'UnionCouncil', value: unionCouncilList, path: 'union' },
      { name: 'Residence', value: residenceList, path: 'residencies' },
      { name: 'Owners', value: ownersList, path: 'owner' },
      { name: 'Public', value: publicList, path: 'public' }
    ];
    return (
      <React.Fragment>
        <Col className="col-sidebar" >
          <div >
            <div className="siderbar-header">The Cadenelle</div>
            <div className="siderbar-body">
              <div className="menu-body">
                <Nav vertical>
                  {sidebar.map(list =>
                    <React.Fragment key={list.name}>
                      <NavItem >
                        <div onClick={() => this.props.toggleNavbar(list.name)}>
                          {list.name}<span>{this.props.toggle[list.name] ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}</span>
                        </div>
                      </NavItem>
                      <Collapse isOpen={this.props.toggle[list.name]}>
                        {list.value.map(item =>
                          <Link
                            to={{ pathname: `/${list.path}/${item.name}`, state: { name: list.path } }}
                            onClick={() => this.props.setHeading(item.name)}
                            key={item.name}
                          >
                            {item.name}<br />
                          </Link>
                        )}
                      </Collapse>
                    </React.Fragment>
                  )}
                </Nav>
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment >
    )
  }
}

export default SideBar;