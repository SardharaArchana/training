import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Unit from './unit';

class Administration extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/admin/Administration/Units" component={Unit} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default Administration;