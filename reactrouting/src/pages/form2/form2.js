import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../header.css';
import ReactJs from './ReactJs';
import Form22 from './angular';
import Navbar from './navbar';

class Form2 extends Component {

    render() {
        return (
            <div className='container-fluid' style={{paddingLeft:'0px', paddingRight:'0px'}}>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <div className='container' style={{width:'100%', marginLeft:'0px', marginRight:'0px', maxWidth:'100%'}}>
                            <div className='row'>
                                <div className='col-12 '>
                                    <Switch>
                                        <Route path="/form2/reactjs" component={ReactJs} />
                                        <Route path="/form2/angular" component={Form22} />
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