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

  // shouldComponentUpdate(prevProps, prevState) {
  //   console.log('abcd', prevProps, this.props)
  //   if (prevProps.loading !== this.props.loading || prevState.data !== this.state.data ||
  //     prevProps.filtered !== this.props.filtered || prevProps.page !== this.props.page || 
  //     prevProps.pages !== this.props.pages || prevProps.pageLimit !== this.props.pageLimit
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    console.log('table', this.props);
    // this.props.data.length <= this.props.pageLimit ? this.props.data.length :98745 62156

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