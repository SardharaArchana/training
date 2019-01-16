import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';


import App from './App';
import SignUp from './component/SignUp';
import SignIn from './component/SignIn';

const routing = (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </div>
    </BrowserRouter>
  )

  export default routing;