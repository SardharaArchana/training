import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListHeader from './listHeader';
import { getUserList, deleteUser } from '../../../api/apiCall';

import '../pagination.css';
import './list.css';

class List extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
      loading: true,
      fetch: false,
    };
  }

  async componentDidMount() {
    let result = await getUserList();
    if (result) {
      this.setState({
        user: result.data,
        loading: false
      });
    }
    else {
      console.log('user list not found');
    }
    console.log(this.state.user);
  }

  async setList(id) {
    this.setState({ fetch: true });
    let response = await getUserList(id);
    this.setState({
      user: response.data,
      fetch: false
    });
  }

  deleteUser(id) {
    if (window.confirm('are you sure you want to delete')) {
      if (deleteUser(id)) {
        console.log('deleted');
      } else {
        console.log('error');
      }
    } else {
      console.log('error');
    }
  }

  createButton = () => {
    const {total_pages,page}=this.state.user;
    const pagination = Array(total_pages)
    return (
      pagination.fill(0).map((u, i) =>
        <button key={i } className={i+1===page?'active':'buttonStyle'} id={i } onClick={() => this.setList(i + 1)}>{u + i + 1}</button>
      ))
  }

  render() {
    return (
      <div >
        <div>
          {this.state.loading ?
            <p>Please Wait while we are getting user Details..</p> :
            <div>
              <div className='divBorder'>
                <ListHeader />
                {this.state.user.data.map((u, i) => <div key={i}>
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
                {this.createButton()}
              </div>
              <div className='inline'>
                {this.state.fetch ?
                  <span> fetching data....</span> :
                  null
                }
              </div>
            </div>
          }
        </div>
      </div >
    );
  }
}

export default List;
