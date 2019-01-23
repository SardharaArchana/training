import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import Pagination from './pagination';

class List extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      loading: true,
      fetch: false
    }
    this.onclick = this.onclick.bind(this);
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('res :::', res);

        this.setState({ userList: res.data || [], loading: false });
      });
  }
  onclick(val) {
    this.setState({ fetch: true });
    fetch('https://reqres.in/api/users?page=' + val)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('res :::', res);

        this.setState({ userList: res.data || [], fetch: false });
      });
  }
  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            {this.state.loading ? <p>Please Wait while we are getting user Details..</p> :
              <div>
                {this.state.userList.map((u, i) => {
                  return <div key={i}>
                    <div style={{verticalAlign:'-webkit-baseline-middle'}}>
                      <div style={{ display: 'inline-block', width: '25%', height: '80px', border: 'solid 0.25px grey' }}>{u.first_name} </div>
                      <div style={{ display: 'inline-block', width: '25%', height: '80px', border: 'solid 0.25px grey' }}>{u.last_name}</div>
                      <div style={{ display: 'inline-block', width: '15%', height: '80px', border: 'solid 0.25px grey' }}><img width='30px' height='30px' style={{ verticalAlign: '-webkit-baseline-middle' }} src={u.avatar} alt='avatar' /></div>
                      <div style={{ display: 'inline-block', width: '25%', height: '80px', border: 'solid 0.25px grey' }}>Edit | delete</div>
                    </div>
                  </div>
                })}

                <Route path='/list/:id?' component={() => <Pagination onClick={(e) => this.onclick(e)} />}>
                </Route>
                <div>{this.state.fetch ? <span>fetching data</span> : null}</div>
              </div>}
          </div>
        </BrowserRouter>
      </div >
    );
  }
}

export default List;
