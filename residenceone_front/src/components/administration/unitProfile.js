import React, { Component } from 'react';
import { Nav, NavLink, NavItem, Row, Col, Collapse, TabContent, TabPane } from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';
import { getUnitDetails } from '../../api/apiCall';

class UnitProfile extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: null,
      active: 'detail',
      openHelp: false
    }
  }

  async componentDidMount() {
    let response = await getUnitDetails(this.props.match.params.id);
    this.setState({ data: response.data.data, loading: false });
  }

  selectActiveTab(name) {
    this.setState({ active: name })
  }

  render() {
    console.log('owner profile', this.props);
    const { active } = this.state;
    const tabs = [
      { name: 'Details', value: 'detail' },
      { name: 'Occupancy history', value: 'history' },
      { name: 'Issue tracking', value: 'issue' },
      { name: 'Documents', value: 'document' },
    ]
    return (
      <React.Fragment>
        <div className='row-body'>
          {this.state.loading && this.state.data === null ? null :
            <React.Fragment>
              <h3>
                <div className='heading'>Unit profile: {this.state.data.officialId}</div>
              </h3>
              <div style={{ margin: '0px', paddingLeft: '20px' }}>
                <Row >
                  <div className='label'>
                    Owner:
              </div>
                  <div className='data'>
                    {this.state.data.owner.name}
                  </div>
                </Row>
                {this.state.data.families_units.length === 0 ? null :
                  <Row >
                    <div className='label'>
                      Occupying family name:
              </div>
                    <div className='data'>
                      {this.state.data.families_units[0].family.mainPerson.fullName}
                    </div>
                  </Row>
                }
              </div>
              <Row style={{ margin: '0px', backgroundColor: '#fff', fontSize: '13px' }}>
                <Nav tabs style={{ width: '100%', backgroundColor: '#f3f3f3', height: 'max-content' }}>
                  {tabs.map((tab, i) =>
                    <NavItem key={i}>
                      <NavLink active={active === tab.value} name={tab.value} onClick={(e) => this.selectActiveTab(e.target.name)}>
                        {tab.name}
                      </NavLink>
                    </NavItem>
                  )}
                </Nav>
                <TabContent activeTab={active}>
                  <TabPane tabId='detail'>
                    <Details
                      isOpen={this.state.openHelp}
                      onClick={() => { this.setState({ openHelp: !this.state.openHelp }) }}
                      user={this.state.data}
                    />
                  </TabPane>
                  <TabPane tabId='history'>
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
                    <Row style={{ width: '100%', margin: '0px', padding: '10px' }}>
                      history
              </Row>
                  </TabPane>
                  <TabPane tabId='issue'>
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
                    <Row style={{ width: '100%', margin: '0px', padding: '10px' }}>
                      issue
              </Row>
                  </TabPane>
                  <TabPane tabId='document'>
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
                    <Row style={{ width: '100%', margin: '0px', padding: '10px' }}>
                      document
              </Row>
                  </TabPane>
                </TabContent>
              </Row>
            </React.Fragment>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default UnitProfile;

export const Details = (props) => {
  return (
    <React.Fragment>
      <Row style={{ margin: '0px', padding: '10px' }}>
        <button style={{ backgroundColor: 'white', color: '#777', height: '30px', border: 'none' }}
          onClick={() => props.onClick()}
        >
          <FaEllipsisV />
        </button>
        <Collapse isOpen={props.isOpen}>
          help
                </Collapse>
      </Row>
      <Row style={{ width: '100%', margin: '0px', padding: '10px', fontSize: '14px' }}>
        <Col sm={4}>
          <img
            className='default-unit-profile'
            src='http://127.0.0.1:3000/images/lacadenelle13008fr/users/defaultunit.jpg'
            alt='defaultunit picture'
          />
        </Col>
        <Col>
          <Row >
            <div className='label'>
              Section:
                       </div>
            <div className='data'>
              {props.user.section.name}
            </div>
          </Row>
          <Row>
            <div className='label'>
              Building:
                      </div>
            <div className='data'>
              {props.user.building.name}
            </div>
          </Row>
          <Row>
            <div className='label'>
              Type:
                        </div>
            <div className='data'>
              {props.user.unit_type.type}
            </div>
          </Row>
          <Row>
            <div className='label'>
              Shares:
                        </div>
            <div className='data'>
              {props.user.shares}
            </div>
          </Row>
          <Row>
            <div className='label'>
              Livable Unit:
                        </div>
            <div className='data'>
              {props.user.isLivableUnit === '1' ? 'yes' : 'no'}
            </div>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}