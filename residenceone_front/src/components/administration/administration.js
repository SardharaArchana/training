import React, { Component } from 'react';
import { Route, Switch,Redirect, Link } from 'react-router-dom';
import { Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import '../../page/admin/admin.css';
import User from './user';
import Structure from './structure';
import Unit from './unit';
import Dashboard from '../dashboard/dashboard';

class Administration extends Component {
  constructor() {
    super();
  }
  render() {
    const { url } = this.props.match;
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={`${url}/User`} component={User} />
          <Route exact path={`${url}/Structure`} component={Structure} />
          <Route exact path={`${url}/Units`} component={Unit} />
          <Route exact path={`${url}/dashboard`} component={Dashboard} />
          <Route exact path={`${url}/`} component={Dashboard} />
          <Redirect to={{ pathname: `${this.props.location.pathname}`, state: { name: 'error' } }} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Administration;