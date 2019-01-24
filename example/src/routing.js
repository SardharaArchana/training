import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import List from './List';
import AddUser from './addUser';
import Header from './header';
import EditUser from './editUser';
import DeleteUser from './deleteUser';

const routing = (
  <div style={{ margin: '40px' }}>
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
)

export default routing;
