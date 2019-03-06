import React, { Component } from 'react';
import axios from 'axios';
import TableTag from '../../common/table/table';

class Structure extends Component {
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
    await axios.get('http://127.0.0.1:3000/api/entry/structure?',
      {
        headers: { token: localStorage.getItem('userToken') }
      })
      .then(response => {
        console.log('response:', response);
        // this.setState({ unitList: response.data.data })
      })
      .catch(error => {
        console.log('error:', error);
      })
    // this.getTableDetails();
  }

  getTableDetails() {
    console.log('dasdkm');
    let column = [
      { Header: 'Unit Id', accessor: 'officialId' },
      { Header: 'Section', accessor: 'section.name' },
      { Header: 'Building', accessor: 'building.name' },
      { Header: 'Entry', accessor: 'entry' },
      { Header: 'Level', accessor: 'level' },
      { Header: 'Location', accessor: 'location' },
      { Header: 'Shares', accessor: 'shares' },
      { Header: 'Type', accessor: 'unit_type.type' },
      { Header: 'Unit Format', accessor: 'unit_type_format' },
      { Header: 'Surface Area', accessor: 'surfaceArea' }
    ]
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

export default Structure;