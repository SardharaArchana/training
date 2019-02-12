import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Display from './page/display/display';
import Home from './page/home/home';
const routing = (
    <React.Fragment>
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route path="/display" component={Display} />
                    <Route path="/" component={Home} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    </React.Fragment>
)

export default routing;