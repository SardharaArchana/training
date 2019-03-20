import React, { Component } from 'react';
import {
  Nav, NavItem, NavLink, Row, Col, Button, Modal, ModalHeader,
  ModalBody, ModalFooter, Input, DropdownToggle, DropdownItem, DropdownMenu, Dropdown
} from 'reactstrap';
import FaMail from 'react-icons/lib/io/email';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import TableTag from '../../common/table/table';

import { getUserTable, getNotificationTable } from '../../api/apiCall';

import './user.css';
import AddNewUser from './addNewUser';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      userListHeader: [],
      totalPage: 1,
      page: 0,
      userStatus: 'true',
      pageLimit: 20,
      loading: true,
      selected: {},
      selectAll: 0,
      userForm1: false,
      userForm: false,
      sortType: 'asc',
      filtered: []
    }
    this.toggleRow = this.toggleRow.bind(this);
    this.getTableDetails = this.getTableDetails.bind(this);
    this.onModalClick = this.onModalClick.bind(this);
    this.onModalClick1 = this.onModalClick1.bind(this);
  }

  toggleRow(firstName) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[firstName] = !this.state.selected[firstName];
    this.setState({
      selected: newSelected,
      selectAll: 2
    });
  }

  toggleSelectAll() {
    let newSelected = {};

    if (this.state.selectAll === 0) {
      this.state.userList.forEach(x => {
        newSelected[x.firstName] = true;
      });
    }
    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }

  componentDidMount() {
    this.getUserList({ page: this.state.page, status: this.state.userStatus, limit: this.state.pageLimit });
  }

  async getUserList(params) {
    let res = await getUserTable(params);
    this.setState({ userList: res.data.data, totalPage: Math.ceil(res.data.totalRecords / this.state.pageLimit) })
    this.getTableDetails();
  }

  getTableDetails() {
    let column = [{
      Header: '',
      columns: [
        {
          id: "checkbox",
          accessor: "",
          Cell: ({ original }) => {
            return (
              <input
                type="checkbox"
                className="checkbox"
                checked={this.state.selected[original.firstName] === true}
                onChange={() => this.toggleRow(original.firstName)}
              />
            );
          },
          Header: x => {
            return (
              <input
                type="checkbox"
                className="checkbox"
                checked={this.state.selectAll === 1}
                ref={input => {
                  if (input) {
                    input.indeterminate = this.state.selectAll === 2;
                  }
                }}
                onChange={() => this.toggleSelectAll()}
              />
            );
          },
          sortable: false,
          filterable: false,
          width: 45
        },
        {
          Header: 'Name',
          accessor: 'fullName',
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
        { Header: 'Status', accessor: 'status', filterable: false },
        { Header: 'Main Unit ID', accessor: 'id', width: 300, filterable: false },
        { Header: 'Position', accessor: 'personStatus', filterable: false },
        {
          Header: 'Email',
          accessor: 'email',
          Cell: (cell) => {
            return <Row style={{ margin: '0px', padding: '2px' }}>
              {cell.original.email === null ?
                <Col sm={{ size: 2, order: 2, offset: 10 }}><FaMail /></Col> :
                <Col sm={10}>{cell.original.email}</Col>
              }
            </Row>
          },
          width: 200,
          filterable: true
        },
        { Header: 'Birth Date', accessor: 'dateOfBirth', filterable: false },
        { Header: 'Mobile Number', accessor: 'telephone', width: 200 }],
    }]
    this.setState({ userListHeader: column, loading: false });
  }

  getUser(e) {
    let status = e.target.name === 'active' ? 'true' : 'false';
    this.setState({ userStatus: status, loading: true });
    this.getUserList({ page: this.state.page, status: status, limit: this.state.pageLimit });
  }

  onPageChange(page) {
    this.setState({ page: page, loading: true });
    this.getUserList({ page: page + 1, status: this.state.userStatus, limit: this.state.pageLimit });
  }

  onFilteredChange(filtered) {
    const { page, userStatus, pageLimit } = this.state;
    this.setState({ loading: true, filtered: [...filtered] });
    if (filtered.length) {
      filtered.map(async field => {
        this.getUserList({ page: page, status: userStatus, [field.id]: field.value, limit: pageLimit });
      })
    } else {
      this.setState({ loading: false })
    }
  }

  onPageSizeChange(noOfPage) {
    this.setState({ pageLimit: noOfPage, loading: true });
    this.getUserList({ page: this.state.page, status: this.state.userStatus, limit: noOfPage });
  }

  async onSortedChange(sort) {
    this.setState({ loading: true });
    let srt = this.state.sortType === 'desc' ? 'asc' : 'desc';
    const { page, userStatus, pageLimit } = this.state;
    let response = await getUserTable({ page: page, status: userStatus, field: sort[0].id, sort: srt })
    this.setState({ userList: response.data.data, sortType: srt, totalPage: Math.ceil(response.data.totalRecords / pageLimit) })
    this.getTableDetails();
  }

  onModalClick() {
    this.setState(prevState => ({
      userForm: !prevState.userForm
    }));
  }
  onModalClick1() {
    this.setState(prevState => ({
      userForm1: !prevState.userForm1
    }));
  }

  render() {
    const { userStatus } = this.state;
    const active = userStatus === 'true' ? true : false;
    const inactive = userStatus === 'false' ? true : false;
    return (
      <React.Fragment >
        <Row style={{ margin: '0px' }}>
          <Nav style={{ width: '100%', backgroundColor: '#f3f3f3' }} tabs>
            <NavItem>
              <NavLink name='active' onClick={(e) => this.getUser(e)} active={active}>Active</NavLink>
            </NavItem>
            <NavItem>
              <NavLink name='inactive' onClick={(e) => this.getUser(e)} active={inactive}>Inactive</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                name='notification'
                onClick={() => {
                  // async (e) => { let res = await getNotificationTable() }
                  console.log('notification click')
                }}
              >
                Notification</NavLink>
            </NavItem>
          </Nav>
        </Row>
        <div className='table-main'>
          <Dropdown className='drop-down' isOpen={this.state.userForm} toggle={() => this.onModalClick()} >
            <DropdownToggle style={{ backgroundColor: 'white', width: '100%', color: '#777', borderStyle: 'none' }}>
              <FaEllipsisV />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.onModalClick1()}>Add new user</DropdownItem>
              <DropdownItem>Send notification</DropdownItem>
              <DropdownItem>Pre-prepared notification</DropdownItem>
              <DropdownItem>Help</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Modal size='lg' scrollable='true' contentClassName='modal-content' isOpen={this.state.userForm1} >
            <AddNewUser />
          </Modal>
          <br />
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
          />
        </div>
      </React.Fragment >
    )
  }
}

export default User;