import React, { Component } from 'react';
import {
  Nav, NavLink, NavItem, Row, Col, Collapse,
  Dropdown, DropdownItem, DropdownToggle, DropdownMenu, TabContent, TabPane
} from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';
import { getOwnerDetails } from '../api/apiCall';
import TableTag from '../common/table/table';

class OwnerProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
      active: 'detail',
      openHelp: false
    }
  }

  async componentDidMount() {
    let response = await getOwnerDetails(this.props.match.params.id);
    await this.setState({ data: response.data, loading: false });
  }

  selectActiveTab(name) {
    this.setState({ active: name })
  }

  render() {
    const { active } = this.state;
    const tabs = [
      { name: 'Details', value: 'detail' },
      { name: 'Units', value: 'unit' },
    ]
    return (
      <React.Fragment>
        {this.state.loading ? null :
          <React.Fragment>
            <Row style={{ margin: '0px', backgroundColor: '#fff', fontSize: '16px' }}>
              <Nav tabs style={{ width: '100%', backgroundColor: '#f3f3f3', height: 'max-content' }}>
                {tabs.map((tab, i) =>
                  <NavItem key={i}>
                    <NavLink active={active === tab.value} name={tab.value} onClick={(e) => this.selectActiveTab(e.target.name)}>
                      {tab.name}
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <TabContent style={{width:'100%'}} activeTab={active}>
                <TabPane tabId='detail'>
                  <Details
                    openHelp={() => { this.setState({ openHelp: !this.state.openHelp }) }}
                    open={this.state.openHelp}
                    data={this.state.data.data}
                  />
                </TabPane>
                <TabPane tabId='unit'>
                  <Units
                    tableData={this.state.data.data.units}
                  />
                </TabPane>
              </TabContent>
            </Row>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default OwnerProfile;

export const Details = (props) => {
  return (
    <React.Fragment>
      <Row style={{ margin: '0px', padding: '10px' }}>
        <button style={{ backgroundColor: 'white', color: '#777', height: '30px', border: 'none' }}
          onClick={() => { props.openHelp() }}
        >
          <FaEllipsisV />
        </button>
        <Collapse isOpen={props.open}>
          help
                </Collapse>
      </Row>
      <Row style={{ width: '100%', margin: '0px', padding: '10px' }}>
        <Col>
          <Row>
            <div className='label'>
              Account reference:
                    </div>
            <div className='data'>
              {props.data.ownerAccRef}
            </div>
          </Row>
          <Row>
            <div className='label'>
              Total shares:
                    </div>
            <div className='data'>
              {props.data.totalShares}
            </div>
          </Row>
          <Row>
            <div className='label'>
              Total units:
                      </div>
            <div className='data'>
              {props.data.units.length}
            </div>
          </Row>
        </Col>
        <Col >
          <Row>
            <div className='label'>
              Address:
                    </div>
          </Row>
          <Row className='Col data' style={{ marginLeft: '-15px' }}>
            {props.data.address}
          </Row>
        </Col>
      </Row>

    </React.Fragment>
  )

}

export const Units = (props) => {
  const column = [{
    Header: '',
    columns: [
      {
        Header: 'Unit Id',
        accessor: 'officialId'
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
            // <Dropdown className='drop-down' isOpen={this.state.ownerProfile === original.id} toggle={() => this.openOwnerProfile(original.id)} >
            //   <DropdownToggle style={{ backgroundColor: 'inherit', width: '100%', padding: '2px', color: 'black', borderStyle: 'none' }}>
            <FaEllipsisV />
            //   </DropdownToggle>
            //   <DropdownMenu>
            //     <DropdownItem>go to owner profile</DropdownItem>
            //   </DropdownMenu>
            // </Dropdown>
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
  return (
    <React.Fragment>
      <TableTag
        data={props.tableData}
        column={column}
      />
    </React.Fragment>
  )
}