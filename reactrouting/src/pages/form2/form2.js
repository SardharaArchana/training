import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../header.css';
import './form2.css';
import ReactJs from './ReactJs';
import Navbar from './navbar';
import Angular from './angular';

class Form2 extends Component {

    render() {
        return (
            <div className='container-fluid padding-0'>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <div className='container-fluid padding-0'>
                            <div className='row'>
                                <div className='col-12'>
                                    <Switch>
                                        <Route path="/form2/reactjs" component={ReactJs} />
                                        <Route path="/form2/angular" component={Angular} />
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

export default Form2;