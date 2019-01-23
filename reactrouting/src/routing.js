import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Form1 from './pages/form1/form1';
import Form2 from './pages/form2/form2';
import Header from './pages/header';
import App from './App';
import NotFound from './Notfound';
const routing = (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/form1" component={Form1} />
          <Route path="/form2" component={Form2} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    <footer className='border'><center>footer</center></footer>
  </div>
)

export default routing;