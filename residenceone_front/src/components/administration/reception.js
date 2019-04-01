import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav, NavItem, NavLink, Row, Col, Button, Modal, Collapse,
  DropdownToggle, DropdownItem, DropdownMenu, Dropdown
} from 'reactstrap';
import {FaEllipsisV} from 'react-icons/fa';

import TableTag from '../../common/table/table';

import { getReceptionTable } from '../../api/apiCall';

class Reception extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openHelp: false,
      active: 'resident',
      disply: false,
      userList:[],
      pageLimit:20,
      totalPage:0
    }
  }

  componentDidMount() {
    this.getReceptionTable({ page: 1, limit: 20, status: 1 });
  }

  async getReceptionTable(params) {
    let res = await getReceptionTable(params);
    await this.setState({ userList: res.data.data, totalPage: Math.ceil(res.data.totalRecords / this.state.pageLimit) })
    this.getTableDetails();
    console.log('reception response', res);
  }

  getTableDetails() {
    let column = [{
      Header: '',
      columns: [
        {
          Header: 'Name',
          accessor: 'fullName',
          Cell: row =>
            <Link to={{
              pathname: `/admin/userprofile/${row.original.id}`, state: { name: 'User Profile' }
            }} >
              {row.original.fullName}
            </Link >
        },
        {
          Header: 'Profile Picture',
          accessor: 'picture',
          style: { height: '50px' },
          Cell: row =>
            <img
              src={`http://127.0.0.1:3000/images/lacadenelle13008fr/users/${row.original.picture}`}
              width='30px'
              height='auto'
              alt='profile picture'
            />,
          width: 200,
          filterable: false,
        },
        { Header: 'Main Unit ID', accessor: 'id', width: 300, filterable: false },
        { Header: 'Telephone', accessor: 'telephone', width: 300, filterable: false },
        {
          Header:'',
          accessor:'',
          filterable:false,
          width:100,
          Cell:row=>
          <Button color='success'>
            Receive
          </Button>
        },
        {
          Header:'Complete',
          accessor:'',
          filterable:false,
          width:200,
          Cell:row=>
          <div>abcd</div>
        }
      ]
    }];
    this.setState({ userListHeader: column, loading: false, disply: true });
  }

  selectActiveTab(name) {
    this.setState({ active: name })
  }

  render() {
    const { active,disply } = this.state;
    const tabs = [
      { name: 'Residents', value: 'resident' },
      { name: 'Packets in', value: 'packetIN' },
      { name: 'Packets out', value: 'packetOUT' },
    ];
    return (
      <React.Fragment>
        <React.Fragment>
          <Row style={{ margin: '0px', backgroundColor: '#fff' }}>
            <Nav tabs style={{ width: '100%', backgroundColor: '#f3f3f3', height: 'max-content' }}>
              {tabs.map((tab, i) =>
                <NavItem key={i}>
                  <NavLink active={active === tab.value} name={tab.value} onClick={(e) => this.selectActiveTab(e.target.name)}>
                    {tab.name}
                  </NavLink>
                </NavItem>
              )}
            </Nav>
            <Row style={{ margin: '0px', width: '100%', padding: '10px' }}>
              <button style={{ backgroundColor: 'white', color: '#777', height: '30px', border: 'none' }}
                onClick={() => { this.setState({ openHelp: !this.state.openHelp }) }}
              >
                <FaEllipsisV />
              </button>
              <Collapse isOpen={this.state.openHelp}>
                <Row className='Col' style={{ margin: '0px', paddingLeft: '-15px' }}>Reception</Row>
              </Collapse>
              <Button style={{ position: 'absolute', right: '25px' }}> Scan QR Code</Button>
            </Row>
          </Row>
        </React.Fragment>
        {disply ?
          <TableTag
            data={this.state.userList}
            column={this.state.userListHeader}
            page={this.state.page}
            pages={this.state.totalPage}
            loading={this.state.loading}
            pageLimit={this.state.pageLimit}
            filtered={this.state.filtered}
            onPageChange={(page) => this.onPageChange(page)}
            onPageSizeChange={noOfPage => this.onPageSizeChange(noOfPage)}
            onFilteredChange={filter => this.onFilteredChange(filter)}
            onSortedChange={(sort) => this.onSortedChange(sort)}
          /> : null}
      </React.Fragment >
    )
  }
}

export default Reception;