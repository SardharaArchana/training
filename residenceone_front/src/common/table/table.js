import React, { Component } from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

class TableTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  render() {
    console.log('table', this.props);

    return <ReactTable
      manual
      data={this.props.data}
      filterable
      loading={this.props.loading}
      filtered={this.props.filtered}
      noDataText="Opps!!!  No data found"
      page={this.props.page}
      pages={this.props.pages}
      columns={this.props.column}
      onPageSizeChange={noOfPage => this.props.onPageSizeChange(noOfPage)}
      defaultPageSize={this.props.pageLimit}
      className="-striped -highlight"
      pageSizeOptions={[5, 10, 20, 25, 50, 100]}
      onFilteredChange={(filter) => this.props.onFilteredChange(filter)}
      onSortedChange={(sort) => this.props.onSortedChange(sort)}
      onPageChange={page => { this.props.onPageChange(page) }
      }
    />
  }
}

export default TableTag;