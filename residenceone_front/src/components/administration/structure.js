import React, { Component } from 'react';
import axios from 'axios';
import TableTag from '../../common/table/table';

class Structure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structureList: [],
      structureListHeader: [],
      click: false
    }
    this.getTableDetails = this.getTableDetails.bind(this);
  }

  async getUserList() {
    await axios.get('http://127.0.0.1:3000/api/entry/structure?',
      {
        headers: { token: localStorage.getItem('userToken') }
      })
      .then(response => {
        console.log('response:', response);
        this.setState({ structureList: response.data.data });
      })
      .catch(error => {
        console.log('error:', error);
      })
    this.getTableDetails();
  }

  getTableDetails() {
    let column = [{
      Header: '',
      columns: [
        { Header: 'Entry', accessor: 'name' },
        { Header: 'Entry code', accessor: 'entryCode' },
        { Header: 'Building', accessor: 'building.name' },
        { Header: 'Building Code', accessor: 'buildingCode' },
        { Header: 'Section', accessor: 'section.name' },
        { Header: 'Overground levels', accessor: 'noOfOvergroundFloors' },
        { Header: 'UNderground levels', accessor: 'noOfUndergroundFloors' },]
    }
    ]
    this.setState({ structureListHeader: column, click: true });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.getUserList()}>get</button>{
          this.state.click ?
            <TableTag data={this.state.structureList} column={this.state.structureListHeader} /> :
            null
        }
      </React.Fragment >
    )
  }
}

export default Structure;