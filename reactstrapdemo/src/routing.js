import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Display from './page/display/display';
import Home from './page/home/home';
import NotFound from './page/notFound/notFound';

const routing = (
  <React.Fragment>
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/display" component={Display} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </React.Fragment>
)

export default routing;