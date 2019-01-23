import React, { Component } from 'react';
import './form2.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import List from '../form1/list';
import Introduction from './introduction';
import Courses from './courses';
import Example from './example';

class Angular extends Component {
    render() {
        return (
            <div className='padding-10'>
                <BrowserRouter>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-4 border padding-0'>
                                <ul>
                                    <Link to="/form2/angular/introduction">
                                        <List listName='introduction' />
                                    </Link>
                                    <Link to="/form2/angular/courses">
                                        <List listName='courses' />
                                    </Link>
                                    <Link to="/form2/angular/example">
                                        <List listName='examples' />
                                    </Link>
                                </ul>
                            </div>
                            <div className='col-12 col-md-8 border bg'>
                                <div>
                                    <Switch>
                                        <Route path="/form2/angular/introduction" component={Introduction} />
                                        <Route path="/form2/angular/courses" component={Courses} />
                                        <Route path="/form2/angular/example" component={Example} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default Angular;