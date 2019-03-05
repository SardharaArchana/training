import React, { Component } from 'react';
import axios from 'axios';
import TableTag from '../../common/table/table';

class Unit extends Component {
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
    await axios.get('http://127.0.0.1:3000/api/unit/list?page=2',
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
    console.log('dasdkm'); let Unit = [
      { name: 'Unit Id', value: 'officialId' },
      { name: 'Section', value: 'section.name' },
      { name: 'Building', value: 'building.name' },
      { name: 'Entry', value: 'entry' },
      { name: 'Level', value: 'level' },
      { name: 'Location', value: 'location' },
      { name: 'Shares', value: 'shares' },
      { name: 'Type', value: 'unit_type.type' },
      { name: 'Unit Format', value: 'unit_type_format' },
      { name: 'Surface Area', value: 'surfaceArea' }
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

export default Unit;