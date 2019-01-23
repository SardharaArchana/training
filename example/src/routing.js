import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import List from './List';
import AddUser from './addUser';
import Header from './header';

const routing = (
  <div style={{margin:'40px'}}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/new' component={AddUser} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

export default routing;
