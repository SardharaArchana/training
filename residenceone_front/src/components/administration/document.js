import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import {
  Nav, NavItem, NavLink, TabContent, TabPane, Row,
  Button
} from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';
import User from './user';
import { getDocumentList } from '../../api/apiCall';
import TableTag from '../../common/table/table';

class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'general',
      General: {
        activeTab: 'active',
      }
    }
  }

  async componentDidMount() {
    let res = await getDocumentList({ page: 1, limit: 20, isActive: 'true' });
    console.log('document', res);
  }

  render() {

    const tabs = [
      { name: 'General', value: 'general' },
      { name: 'Personal', value: 'personal' },
      { name: 'My documents', value: 'mydoc' },
    ]

    return (
      <React.Fragment>
        <Nav tabs>
          {tabs.map(tab =>
            <NavItem key={tab.name}>
              <NavLink
                active={this.state.activeTab === tab.value}
                name={tab.value}
                onClick={(e) => { this.setState({ activeTab: e.target.name }) }}
              >
                {tab.name}
              </NavLink>
            </NavItem>
          )}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='general'>
            <Switch>
              <General
                activeTab={this.state.General.activeTab}
                setActiveTab={(name) => { this.setState({ General: { activeTab: name } }) }}
                url={this.props.match.url}
              />
            </Switch>
            general
          </TabPane>
          <TabPane tabId='personal'>
            Personal
          </TabPane>
          <TabPane tabId='mydoc'>
            My Documents
          </TabPane>
        </TabContent>
      </React.Fragment>
    )
  }
}

export default Documents;

export const General = (props) => {
  const tabs = [
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },
  ];
  const columns = [
    {
      Header: '',
      columns:[
        { Header: 'Number', accessor: 'aaa' }
      ]
    }
  ]
  return (
    <React.Fragment>
      <Row className='Col'>
        <Nav tabs style={{ backgroundColor: '#f3f3f3', width: '100%' }}>
          {tabs.map(tab =>
            <NavItem key={tab.name}>
              <NavLink
                active={props.activeTab === tab.value}
                name={tab.value}
                onClick={(e) => props.setActiveTab(e.target.name)}
              >
                {tab.name}
              </NavLink>
            </NavItem>
          )}
        </Nav>
        <Row style={{ margin: '10px' }}>
          <Link to='/tables/doc/table'>
            <Button
              style={{ backgroundColor: 'white', color: '#555', borderStyle: 'none' }}
            >
              <FaEllipsisV />
            </Button>
          </Link>
        </Row>
        <Route exact path={`${props.url}/table`} component={User} />
      </Row>
    </React.Fragment>
  )
}