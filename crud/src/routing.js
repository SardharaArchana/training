import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import List from './list/List';
import AddUser from '../src/user/addUser';
import Header from './list/header/header';
import './app.css';

const routing = (
  <div className='margin'>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route excat path='/new' component={AddUser} />
          <Route excat path='/list/edit/:id' component={AddUser} />
          <Route excat path='/list' component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default routing;
