import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import App from './page/registration/registration';
import Display from './page/display/display';
import Home from './page/home/home';
const routing = (
    <React.Fragment>
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/display" component={Display} />
                    <Route path="/" component={App} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    </React.Fragment>
)

export default routing;