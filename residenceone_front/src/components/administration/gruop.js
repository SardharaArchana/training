import React, { Component } from 'react';
import Table from '../../common/table/tables';
import { getGroupTable } from '../../api/apiCall';

class Group extends Component {

  async componentDidMount() {
    console.log('componentDidMount');
    // let response = await getGroupTable({ page: 1, limit: 20, isDeleted: 0, groupOnly: 1 });
    let response = await getGroupTable({ page: 1, limit: 20});
    console.log('response', response)
  }

  render() {
    return (
      <React.Fragment>
        Gruop Component
        <br /><br />
        {Table.Gruop()}
      </React.Fragment>
    )
  }
}

export default Group;