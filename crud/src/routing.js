import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import List from './list/List';
import AddUser from '../src/user/addUser';
import Header from './list/header/header';
import EditUser from '../src/user/editUser';
import DeleteUser from '../src/user/deleteUser';
import './app.css';

const routing = (
  <div className='margin'>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/new' component={AddUser} />
          <Route path='/list/edit/:id' component={EditUser} />
          <Route path='/list/delete/:id' component={DeleteUser} />
          <Route excat path='/list' component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default routing;
