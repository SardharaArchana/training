import React from 'react';
import { Route,  Router, Switch, Redirect } from 'react-router-dom';
import history from './history';

import SignIn from './page/signIn/signIn';
import Admin from './page/admin/admin';
import NotFound from './page/notFound/notFound';
import Home from './page/home/home';
import Documents from './components/administration/document';

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
  return (
    <React.Fragment>
      <Router history={history}>
        <React.Fragment>
          <Switch>
            <Route  path='/tables/doc' component={Documents} />
            <AdminRoute path='/(admin|apps|union|residencies|owner|public)' component={Admin} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    </React.Fragment>
  )
}

export default Routing;
