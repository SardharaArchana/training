import React, { Component } from 'react';
import axios from 'axios';
import TableTag from '../../common/table/table';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitList: [],
      unitListHeader: [],
      click: false
    }
    this.getTableDetails = this.getTableDetails.bind(this);
  }

  async getUserList() {
    await axios.get('http://127.0.0.1:3000/api/user/list',
      {
        headers: { token: localStorage.getItem('userToken') }
      })
      .then(response => {
        console.log('response:', response);
        this.setState({ unitList: response.data.data })
      })
      .catch(error => {
        console.log('error:', error);
      })
    this.getTableDetails();
  }

  getTableDetails() {
    let Unit = [
      { name: 'Name', value: 'family.name' },
      { name: 'Profile Picture', value: 'picture' },
      { name: 'Status', value: 'status' },
      { name: 'Main Unit ID', value: 'id' },
      { name: 'Position', value: 'personStatus' },
      { name: 'Email', value: 'email' },
      { name: 'Birth Date', value: 'dateOfBirth' },
      { name: 'Mobile Number', value: 'telephone' }
    ]
    let column = Unit.map(units => {
      return { Header: units.name, accessor: units.value }
    })
    this.setState({ unitListHeader: column, click: true });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.getUserList()}>get</button>{
          this.state.click ?
            <TableTag data={this.state.unitList} coloumn={this.state.unitListHeader} /> :
            null
        }
      </React.Fragment >
    )
  }
}

export default User;