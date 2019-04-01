import React, { Component } from 'react';
import axios from 'axios';
import TableTag from '../../common/table/table';
import { FaEllipsisV } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, InputGroup, Label } from 'reactstrap';

import { updateFloors } from '../../api/apiCall';

class Structure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structureList: [],
      structureListHeader: [],
      click: false,
      selected: {},
      selectAll: 0,
      modelUpadateFloor: false,
      currentUser: null,
    }
    this.getTableDetails = this.getTableDetails.bind(this);
  }

  componentDidMount() {
    this.getUserList();
  }

  async getUserList() {
    await axios.get('http://127.0.0.1:3000/api/entry/structure?',
      {
        headers: { token: localStorage.getItem('userToken') }
      })
      .then(response => {
        console.log('response:', response);
        this.setState({ structureList: response.data.data });
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

  async updateFloors() {
    let res = await updateFloors(this.state.currentUser.id,
      {
        noOfOvergroundFloors: this.state.currentUser.noOfOvergroundFloors,
        noOfUndergroundFloors: this.state.currentUser.noOfUndergroundFloors
      });
    this.updateFloorsModal();
    this.getUserList();
  }

  updateFloorsModal() {
    this.setState({ modelUpadateFloor: !this.state.modelUpadateFloor });
  }

  updateFloorsValue(name, value) {
    this.setState({ currentUser: { ...this.state.currentUser, [name]: value } });
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
                    input = this.state.selectAll === 2;
                  }
                }}
                onChange={() => this.toggleSelectAll()}
              />
            );
          },
        },
        {
          Header: 'Entry', accessor: 'name',
          Cell: ({ original }) =>
            <div style={{ color: 'rgb(0, 98, 177)' }}
              onClick={() => { this.setState({ currentUser: original }); this.updateFloorsModal() }}
            >
              {original.name}
            </div>
        },
        { Header: 'Entry code', accessor: 'entryCode' },
        { Header: 'Building', accessor: 'building.name' },
        { Header: 'Building Code', accessor: 'buildingCode' },
        { Header: 'Section', accessor: 'section.name' },
        { Header: 'Overground levels', accessor: 'noOfOvergroundFloors' },
        { Header: 'Underground levels', accessor: 'noOfUndergroundFloors' },]
    }];
    this.setState({ structureListHeader: column, click: true });
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.modelUpadateFloor}>
          {this.state.currentUser === null ? null : <>
            {console.log(this.state.currentUser)}
            <ModalHeader>{this.state.currentUser.name}</ModalHeader>
            <ModalBody>
              <InputGroup>
                <Label>Overground floors</Label>
                <Input
                  type='number'
                  name='noOfOvergroundFloors'
                  value={this.state.currentUser.noOfOvergroundFloors}
                  onChange={(e) => this.updateFloorsValue(e.target.name, e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Label>Underground floors</Label>
                <Input
                  type='number'
                  name='noOfUndergroundFloors'
                  value={this.state.currentUser.noOfUndergroundFloors}
                  onChange={(e) => this.updateFloorsValue(e.target.name, e.target.value)}
                />
              </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                color='success'
                onClick={() => this.updateFloors()}>Save</Button>
              <Button
                color='danger'
                onClick={() => { this.setState({ modelUpadateFloor: !this.state.modelUpadateFloor }) }}>Cancel</Button>
            </ModalFooter></>
          }
        </Modal>
        <div className='Col' style={{ padding: '20px', display: 'flex', flexFlow: 'row wrap', flexDirection: 'column' }}>
          {
            this.state.click ? <>
              <FaEllipsisV style={{ marginBottom: '20px' }} />
              <TableTag data={this.state.structureList} column={this.state.structureListHeader} />
            </> :
              null
          }
        </div>
      </React.Fragment >
    )
  }
}

export default Structure;