import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import List from './page/home/list/List';
import AddUser from './page/user/addUser';
import Header from './page/home/header/header';
import './app.css';
import NotFound from './page/notfound/notFound';

const routing = (
  <div className='margin'>
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route excat path='/new' component={AddUser} />
          <Route excat path='/list/edit/:id' component={AddUser} />
          <Route excat path='/list' component={List} />
          <Route component={NotFound}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default routing;
