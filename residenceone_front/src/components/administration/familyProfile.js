import React, { Component } from 'react';
import { Nav, NavLink, NavItem, Row, Col, Collapse } from 'reactstrap';
import {FaEllipsisV} from 'react-icons/fa';
import { getUnitDetails, getFamilyByOnwerId } from '../../api/apiCall';
import TableTag from '../../common/table/table';

class FamilyProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: {},
      active: 'resident',
      openHelp: false
    }
  }

  async componentDidMount() {
    let res = await getFamilyByOnwerId(this.props.match.params.id);
    await this.setState({ data: res.data.data, loading: false });
    console.log('fmaily profile response', res);
  }

  selectActiveTab(name) {
    this.setState({ active: name })
  }

  render() {
    console.log('owner profile', this.props);
    const { active } = this.state;
    const tabs = [
      { name: 'Residents', value: 'resident' },
      { name: 'Extended members', value: 'expandedMember' },
      { name: 'Personnel', value: 'personnel' },
      { name: 'Temporary resident', value: 'tempresident' },
      { name: 'Documents', value: 'document' },
      { name: 'Units', value: 'unit' },
      { name: 'Vehicles', value: 'vehicle' },
      { name: 'Packets', value: 'packet' },
      { name: 'Purchases', value: 'purchase' },
    ];
    return (
      <React.Fragment>
        {this.state.loading ? null :
          <React.Fragment>
            <Row style={{ margin: '0px', width: '100%', backgroundColor: '#fff', fontSize: '16px' }}>
              <Nav tabs style={{ width: '100%', backgroundColor: '#f3f3f3', height: 'max-content' }}>
                {tabs.map((tab, i) =>
                  <NavItem key={i}>
                    <NavLink active={active === tab.value} name={tab.value} onClick={(e) => this.selectActiveTab(e.target.name)}>
                      {tab.name}
                    </NavLink>
                  </NavItem>
                )}
              </Nav>
              <Row style={{ margin: '0px', padding: '10px' }}>
                <button style={{ backgroundColor: 'white', color: '#777', height: '30px', border: 'none' }}
                  onClick={() => { this.setState({ openHelp: !this.state.openHelp }) }}
                >
                  <FaEllipsisV />
                </button>
                <Collapse isOpen={this.state.openHelp}>
                  help
                </Collapse>
              </Row>
              <div style={{ width: '100%', margin: '0px', padding: '10px' }}>
                <FamilyTable data={this.state.data.users} />
              </div>
            </Row>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default FamilyProfile;

const FamilyTable = (props) => {
  const columns = [{
    Header: '',
    columns: [
      { Header: '', accessor: 'fullName' },
      {
        Header: 'Profile Picture', accessor: 'picture',
        Cell: row =>
          <img src={`http://127.0.0.1:3000/images/lacadenelle13008fr/users/${row.original.picture}`}
            alt='profile'
            width='30px'
            height='30px'
          />
      },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Date of birth', accessor: 'dateOfBirth' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Mobile Number', accessor: 'telephone' },
      { Header: 'Active On', accessor: 'activeTo' },
      {
        Header: '', accessor: '',
        Cell: row => <FaEllipsisV />
      },
    ]
  }]
  return (
    <React.Fragment>
      <TableTag data={props.data}
        column={columns}
      />
    </React.Fragment>
  )
}