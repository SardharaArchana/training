import React, { Component } from 'react';
import Action from './action/action';
import ListHeader from './listHeader';
import Pagination from './pagination/pagination';
import './list.css';
import { getUserList } from '../apiCall';

class List extends Component {

  constructor() {

    super();
    this.state = {
      loading: true,
      fetch: true,
      activePage: 0,
      totalPage: 0,
    };
  }

  async componentDidMount() {
    let res = await getUserList();
    this.setState({
      userList: res.data.data,
      activePage: res.data.page,
      totalPage: res.data.total_pages,
      loading: false
    });
  }

  render() {
    return (
      <div >
        <div>
          {this.state.loading ? <p>Please Wait while we are getting user Details..</p>
            : <div className=''>
              <div className='divBorder'>
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
              {/* <Pagination/> */}
                {/* <Pagination
                    totalpage={this.state.totalPage}
                    activepage={this.state.activePage}
                  /> */}
              </div>
              <div className='inline'>{this.state.fetch ? <span> fetching data....</span> : null}</div>

            </div>}
        </div>
      </div >
    );

  }

}

export default List;
