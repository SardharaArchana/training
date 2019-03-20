import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import SignIn from './page/signIn/signIn';
import Admin from './page/admin/admin';
import NotFound from './page/notFound/notFound';
import Home from './page/home/home';

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Route
        {...rest}
        render={props => localStorage.getItem('userToken') ?
          <Component {...props} /> :
          <Redirect to='/signin' />
        }
      />
    </React.Fragment>
  );
}

const Routing = () => {
  const roles = ['admin', 'apps', 'union', 'residencies', 'owner', 'public'];
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            {
              roles.map(role => {
                return <AdminRoute key={role} path={`/${role}`} component={Admin} />
              })
            }
            <Route exact path="/signin" component={SignIn} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Routing;
