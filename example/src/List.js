import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import Pagination from './pagination';

class List extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      page: 0
    }
    this.onclick=this.onclick.bind(this);
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log('res :::', res);

        this.setState({ userList: res.data || [] });
      });
  }
  onclick(val){
    fetch('https://reqres.in/api/users?page=' + val)
  .then(res => {
    return res.json();
  })
  .then(res => {
    console.log('res :::', res);

    this.setState({ userList: res.data || [] });
  });
}
  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <h2>User CRUD Application</h2>
            <ul>
              <Link to='/list' style={{ display: 'inline' }}>Record List</Link> |
          <Link to='/list/' style={{ display: 'inline' }}>Add Record</Link>
            </ul>
            {this.state.userList.map((u, i) => {
              return <div key={i}>
                <div>
                  <div style={{ display: 'inline-block', width: '25%', height:'40px', border:'solid 0.25px grey' }}>{u.first_name} </div>
                  <div style={{ display: 'inline-block', width: '25%', height:'40px',border:'solid 0.25px grey' }}>{u.last_name}</div>
                  <div style={{ display: 'inline-block', width: '15%', height:'40px',border:'solid 0.25px grey' }}><img width='30px' height='30px'style={{verticalAlign:'-webkit-baseline-middle'}} src={u.avatar} alt='avatar'/></div>
                  <div style={{ display: 'inline-block', width: '25%', height:'40px',border:'solid 0.25px grey' }}>Edit | delete</div>
                </div>
              </div>
            })}

            <Route path='/list/:id?' component={()=><Pagination onClick={(e)=>this.onclick(e)}/>}>
            </Route>
          </div>
        </BrowserRouter>
      </div >
    );
  }
}

export default List;
