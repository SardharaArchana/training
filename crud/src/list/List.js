import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ListHeader from './listHeader';
import Pagination from './pagination/pagination';
import './list.css';
import { getUserList, deleteUser } from '../apiCall';

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

  async setList(id) {
    this.setState({ fetch: true });
    let response = await getUserList(id);
    this.setState({
      userList: response.data.data,
      activePage: response.data.page,
      totalPage: response.data.total_pages,
      fetch: false
    });
  }

  deleteUser(id) {
    if (window.confirm('are you sure you want to delete')) {
      if (deleteUser(id)) {
        console.log('deleted');
        this.props.history.push('/list');
      } else {
        console.log('error');
      }
    }

    else {
      console.log('error');
    }
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
                    <div className='divElement'>  
                    <Link className='a-style' to={`/list/edit/${u.id}`} params={{ id: u.id }} >Edit</Link> | &nbsp;
                     <Link className='a-style' to='/list' onClick={() => this.deleteUser(u.id)} >Delete</Link></div>
                  </div>
                </div>)}
              </div>

              <div className='inline'>
                <Pagination key={this.state.activePage}
                  totalpage={this.state.totalPage}
                  activepage={this.state.activePage}
                  onClick={(e) => this.setList(e)}
                />
              </div>
              <div className='inline'>{this.state.fetch ? <span> fetching data....</span> : null}</div>

            </div>
          }
        </div>
      </div >
    );

  }

}

export default List;
