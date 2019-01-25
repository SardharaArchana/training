import React, { Component } from 'react';
import axios from 'axios';

import Pagination from './pagination';
import Action from './action';
import ListHeader from './listHeader';
import './list.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      loading: true,
      fetch: false,
      activePage: 0,
      totalPage: 0,
    };
    this.onclick = this.onclick.bind(this);
  }

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=1')
      .then((response) => {
        console.log('response', response);
        this.setState({
          userList: response.data.data || [],
          loading: false,
          activePage: response.data.page,
          totalPage: response.data.total_pages,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onclick(val, currentpage) {
    this.setState({ fetch: true });
    axios.get(`https://reqres.in/api/users?page=${val}`)
      .then((res) => {
        console.log('response', res);
        this.setState({ userList: res.data.data || [], fetch: false, activePage: currentpage });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div >
        <div>
          {this.state.loading ? <p>Please Wait while we are getting user Details..</p>
            : <div className=''>
              <div className='div'>
                <ListHeader />
                {this.state.userList.map((u, i) => <div key={i}>
                  <div className='divStyle'>
                    <div className='divElement'>{u.first_name}</div>
                    <div className='divElement'>{u.last_name}</div>
                    <div className='divElement'><img className='divStyle-img' src={u.avatar} alt='avatar' /></div>
                    <div className='divElement'><Action id={u.id} /></div>
                  </div>
                </div>)}
              </div>
              <div className='inline'>
                <Pagination
                  onClick={(e, i) => this.onclick(e, i)}
                  totalpage={this.state.totalPage}
                  activePage={this.state.activePage}
                />
              </div>
              <div className='inline'>{this.state.fetch ? <span> fetching data....</span> : null}</div>
            </div>}
        </div>
      </div >
    );
  }
}

export default List;
