import React, { Component } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

class TableTag extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    console.log('table',this.props);

    return <ReactTable
      data={this.props.data}
      noDataText="Opps!!!  No data found"
      filterable
      columns={this.props.coloumn}
      defaultPageSize={10}
      className="-striped -highlight"
      pageSizeOptions={[5, 10, 20, 25, 50, 100]}
    />
  }
}

export default TableTag;