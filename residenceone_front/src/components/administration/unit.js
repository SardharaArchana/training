import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableTag from '../../common/table/table';
import {
  DropdownToggle, DropdownItem, DropdownMenu, Dropdown
} from 'reactstrap';
import { FaEllipsisV,FaLink } from 'react-icons/fa';

class Unit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitList: [],
      unitListHeader: [],
      click: false,
      selected: {},
      selectAll: 0,
      ownerProfile: 0
    }
    this.getTableDetails = this.getTableDetails.bind(this);
  }

  componentDidMount() {
    this.getUserList();
  }

  async getUserList() {
    await axios.get('http://127.0.0.1:3000/api/unit/list?page=1',
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

  openOwnerProfile(id) {
    this.setState({ ownerProfile: this.state.ownerProfile === id ? '' : id })
  }

  getTableDetails() {
    console.log('dasdkm');
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
                    input = this.state.selectAll === 2;
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
          Header: 'Unit Id',
          accessor: 'officialId',
          Cell: row => <Link to={{
            pathname: `/admin/unit-profile/${row.original.id}`,
            state: { name: `Unit Profile: ${row.original.officialId}` }
          }}>
            {row.original.officialId}
          </Link>
        },
        { Header: 'Section', accessor: 'section.name' },
        { Header: 'Building', accessor: 'building.name' },
        { Header: 'Entry', accessor: 'entry' },
        { Header: 'Level', accessor: 'level' },
        { Header: 'Location', accessor: 'location' },
        { Header: 'Shares', accessor: 'shares' },
        { Header: 'Type', accessor: 'unit_type.type' },
        { Header: 'Unit Format', accessor: 'unit_type_format' },
        { Header: 'Surface Area', accessor: 'surfaceArea' },
        {
          id: 'menu',
          accessor: '',
          Cell: ({ original }) => {
            return (
              original.ownerId === null ? null :
                <Dropdown className='drop-down' isOpen={this.state.ownerProfile === original.id} toggle={() => this.openOwnerProfile(original.id)} >
                  <DropdownToggle style={{ backgroundColor: 'inherit', width: '100%', padding: '2px', color: 'black', borderStyle: 'none' }}>
                    <FaEllipsisV />
                  </DropdownToggle>
                  <DropdownMenu>

                    <Link to={{
                      pathname: `/admin/owners-profile/${original.ownerId}`, state: { name: `Owner Profile` }
                    }}>
                      <DropdownItem>go to owner profile</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </Dropdown>
            );
          },
          Header: x => {
            return null;
          },
          width: 30,
          sortable: false,
          filterable: false,
        }
      ],
    }];
    this.setState({ unitListHeader: column, click: true });
  }

  render() {
    return (
      <React.Fragment >
        <div className='Col' style={{ margin: '0px', padding: '20px', display: 'flex', flexFlow: 'row wrap', flexDirection: 'column' }}>
          {
            this.state.click ? <>
              <FaEllipsisV style={{ marginBottom: '20px' }} />
              <TableTag data={this.state.unitList} column={this.state.unitListHeader} />
            </> :
              null
          }
        </div>
      </React.Fragment >
    )
  }
}

export default Unit;