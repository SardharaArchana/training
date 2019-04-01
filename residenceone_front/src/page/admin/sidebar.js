import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import {
  FaChevronCircleUp, FaChevronCircleDown, FaRegCircle, FaRegBuilding, FaUser, FaAtom,
  FaUsers, FaUserSecret, FaCarAlt, FaFileAlt, FaCalendarAlt, FaNewspaper,
  FaSwimmer, FaRegCheckCircle, FaRegAddressCard, FaCogs, FaGift, FaFlagCheckered,
  FaRegAddressBook, FaUserFriends, FaDesktop, FaBusAlt, FaUtensils, FaTableTennis,
  FaConciergeBell, FaCircleNotch, FaRegLightbulb, FaGlobeAmericas,
} from 'react-icons/fa'

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
      { name: 'Structure', icon: <FaRegCircle /> },
      { name: 'Units', icon: <FaRegBuilding /> },
      { name: 'User', icon: <FaUser /> },
      { name: 'Groupes', icon: <FaAtom /> },
      { name: 'Families', icon: <FaUsers /> },
      { name: 'Owner', icon: <FaUserSecret /> },
      { name: 'Vehicles', icon: <FaCarAlt /> },
      { name: 'Documents', icon: <FaFileAlt /> },
      { name: 'Events', icon: <FaCalendarAlt /> },
      { name: 'News Feed', icon: <FaNewspaper /> },
      { name: 'Swimming pool', icon: <FaSwimmer /> },
      { name: 'Tracking Problems', icon: <FaRegCheckCircle /> },
      { name: 'Contact', icon: <FaRegAddressCard /> },
      { name: 'Settings', icon: <FaCogs /> }
    ];
    const applicationsList = [
      { name: 'Swimming pool', icon: <FaSwimmer /> },
      { name: 'Reception', icon: <FaGift /> },
      { name: 'Notification', icon: <FaFlagCheckered /> },
      { name: 'Vehicles', icon: <FaCarAlt /> },
      { name: 'Tracking Problems', icon: <FaRegCheckCircle /> },
      { name: 'Contact', icon: <FaRegAddressCard /> }
    ];
    const unionCouncilList = [
      { name: 'Members', icon: <FaRegAddressBook /> },
      { name: 'Documents', icon: <FaFileAlt /> },
      { name: 'Contacts', icon: <FaRegAddressCard /> },
      { name: 'Disscussion', icon: <FaUserFriends /> },
      { name: 'News Feed', icon: <FaNewspaper /> },
      { name: 'Tracking Problems', icon: <FaRegCheckCircle /> }
    ];
    const residenceList = [
      { name: 'Dashboard', icon: <FaDesktop /> },
      { name: 'Events', icon: <FaCalendarAlt /> },
      { name: 'Tracking Problems', icon: <FaRegCheckCircle /> },
      { name: 'Bus', icon: <FaBusAlt /> },
      { name: 'Documents', icon: <FaFileAlt /> },
      { name: 'News Feed', icon: <FaNewspaper /> },
      { name: 'Contacts', icon: <FaRegAddressBook /> },
      { name: 'Restaurant', icon: <FaUtensils /> },
      { name: 'Reservations', icon: <FaTableTennis /> },
      { name: 'Services', icon: <FaConciergeBell /> },
      { name: 'Groupes', icon: <FaCircleNotch /> },
      { name: 'Ideas', icon: <FaRegLightbulb /> }
    ];
    const ownersList = [
      { name: 'Dashboard', icon: <FaDesktop /> },
      { name: 'Documents', icon: <FaFileAlt /> },
      { name: 'News Feed', icon: <FaNewspaper /> },
      { name: 'Tracking Problems', icon: <FaRegCheckCircle /> },
      { name: 'Contacts', icon: <FaRegAddressCard /> },
    ];
    const publicList = [
      { name: 'Site Internet', icon: <FaGlobeAmericas /> },
      { name: 'Blog', icon: <FaNewspaper /> },
      { name: 'Documents', icon: <FaFileAlt /> }
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
                          {list.name}<span>{this.props.toggle[list.name] ? <FaChevronCircleUp size={20} />
                            : <FaChevronCircleDown size={20} />}</span>
                        </div>
                      </NavItem>
                      <Collapse isOpen={this.props.toggle[list.name]}>
                        {list.value.map(item =>
                          <Link
                            to={{ pathname: `/${list.path}/${item.name}`, state: { name: item.name } }}
                            onClick={() => this.props.setHeading(item.name)}
                            key={item.name}
                          >
                            {item.icon}  {item.name}<br />
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