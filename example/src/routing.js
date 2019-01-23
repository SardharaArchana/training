import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import List from './List';

const routing=(
  <div >
    <BrowserRouter>
      <Route excat path='/list' component={List} />
    </BrowserRouter>
  </div>
)

export default routing;
