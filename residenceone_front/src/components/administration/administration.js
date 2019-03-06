import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Unit from './unit';
import User from './user';

class Administration extends Component {
  constructor() {
    super();
    this.abcd = this.abcd.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  abcd() {
    const arr = [
      { url: 'Units', component: Unit },
      { url: 'User', component: User },
      { url: 'Structure', component: User }
    ];
    let res = arr.find(route => {
      if (route.url === this.props.match.params.name) {
        return route;
      }
    })
    return res;
  }
  render() {
    console.log(this.props)
    const com = this.abcd();
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            {console.log('in rotue', com)}
            <Route path={`/admin/Administration/${com.url}`} component={com.component} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default Administration;