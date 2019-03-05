import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import SignIn from './page/signIn/signIn';
import Display from './page/display/admin';
import NotFound from './page/notFound/notFound';

const Routing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/admin" component={Display} />
            <Route exact path="/" component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Routing;
