import React, { Component } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { Row, Col, DropdownMenu, DropdownItem, ButtonDropdown, DropdownToggle } from 'reactstrap';
import { FaBars } from 'react-icons/fa/';

import './admin.css';
import Unit from '../../components/administration/unit';
import User from '../../components/administration/user';
import Dashboard from '../../components/dashboard/dashboard';
import Structure from '../../components/administration/structure';
import NotFound from '../notFound/notFound';
import SideBar from './sidebar';
import { getUserProfile } from '../../api/apiCall';
import UserProfile from '../../components/administration/userProfile';
import OwnerProfile from '../../components/ownerProfile';
import Reception from '../../components/administration/reception';
import UnitProfile from '../../components/administration/unitProfile';
import FamilyProfile from '../../components/administration/familyProfile';
import Group from '../../components/administration/gruop';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      listHeader: [],
      collapsed: {
        Administration: false,
        Applications: false,
        UnionCouncil: false,
        Residence: false,
        Public: false,
        Owners: false
      },
      open: true,
      option: false,
      heading: 'Dashboard',
      userProfile: {},
      loading: true
    }
  }

  async componentDidMount() {
    let res = await getUserProfile();
    if (res) {
      this.setState({ userProfile: res.data.data, loading: false });
      if (this.props.location.state !== undefined) {
        if (this.props.location.state.name !== this.state.heading) {
          this.setHeading(this.props.location.state.name);
        }
      }
    }
  }

  toggleNavbar(name) {
    let collapsed = this.state.collapsed;
    for (let key in collapsed) {
      collapsed[key] = key === name ? !collapsed[key] : false;
    }
    this.setState({
      collapsed: collapsed
    });
  }

  setHeading(heading) {
    this.setState({
      heading: heading
    })
  }

  render() {
    const { match, location, history } = this.props;
    const { heading, collapsed, open, option } = this.state;
    console.log('admin', this.props);
    let heading1 = '';
    return (
      this.state.loading ? null :
        <React.Fragment>
          {location.state === true ? <Route component={NotFound} /> :
            <Row className="Row-main">
              {!open ? null :
                <SideBar
                  toggleNavbar={(name) => this.toggleNavbar(name)}
                  setHeading={(name) => this.setHeading(name)}
                  toggle={collapsed}
                />
              }
              <Col className="col-body" >
                <Row className="Row">
                  <div onClick={() => { this.setState({ open: !this.state.open }) }} ><FaBars color='black' size='25px' /></div>
                  <div className='button-right'>
                    <ButtonDropdown isOpen={option} toggle={() => {
                      console.log('asdfg', option);
                      this.setState({ option: !option });
                    }}>
                      <DropdownToggle style={{ borderRadius: '26px', padding: '0px', backgroundColor: 'none' }}>
                        <img
                          src='http://127.0.0.1:3000/images/lacadenelle13008fr/users/profile.png'
                          width='50px' height='50px' alt='profile picture'
                          style={{ borderRadius: '26px' }}
                        />
                        <div className='user-status'></div>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Profile</DropdownItem>
                        <DropdownItem>Preferences</DropdownItem>
                        <Link to='/'> <DropdownItem>LogOut</DropdownItem></Link>
                        <DropdownItem>Help</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </Row>
                <Switch>
                  <Route exact path={`${match.url}/userprofile/:id`} component={UserProfile} />
                  <Route exact path={`${match.url}/owners-profile/:id`} component={OwnerProfile} />
                  <Route exact path={`${match.url}/unit-profile/:id`} component={UnitProfile} />
                  <Route exact path={`${match.url}/family/:id`} component={FamilyProfile} />
                  <Switch>
                    <div className='row-body'>
                      <h3>
                        <div className='heading'>{ heading}</div>
                      </h3>
                      <Route exact path={`${match.url}/Units`} component={Unit} />
                      <Route exact path={`${match.url}/User`} component={User} />
                      <Route exact path={`${match.url}/Groupes`} component={Group} />
                      <Route exact path={`${match.url}/Structure`} component={Structure} />
                      <Route exact path={`${match.url}/Reception`} component={Reception} />
                      <Route exact path={`${match.url}/dashboard`} component={Dashboard} />
                      <Route exact path={`${match.url}`} component={Dashboard} />
                    </div>
                  </Switch>
                  <Redirect to={{ pathname: `${location.pathname}`, state: true }} />
                </Switch>
              </Col>
            </Row>
          }
        </React.Fragment >
    )
  }
}

export default Admin;