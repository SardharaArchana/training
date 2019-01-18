import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../../css/bootstrap.css';
import Html from './html';
import Css from './css';
import JavaScript from './javascript';
import Sidebar from './sidebar';
class Form1 extends Component {

    render() {
        return (
            <div className='padding-10'>
                <BrowserRouter>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 col-md-4 border'>
                                <Sidebar/>
                            </div>
                            <div className='col-12 col-md-8 border'>
                                <div style={{padding:'10px'}}>
                                    <Switch>
                                        <Route exact path="/" component={Form1} />
                                        <Route path="/form1/html" component={Html} />
                                        <Route path="/form1/javascript" component={JavaScript} />
                                        <Route path="/form1/css" component={Css} />
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

export default Form1;