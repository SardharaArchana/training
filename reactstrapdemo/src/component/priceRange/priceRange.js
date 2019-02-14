import React, { Component } from 'react';
import { Row, Col, Label } from 'reactstrap';

import InputTag from '../input/inputTag';

class PriceRange extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
      valid: {}
    }
  }

  setValue(e) {
    if (isNaN(e.target.value)) {
      this.setState({ valid: { ...this.state.valid, [e.target.name]: false } })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        valid: { ...this.state.valid, [e.target.name]: true }
      });
    }
    this.props.onChange(e);
  }

  async checkValueRange(e) {
    await this.props.checkValueRange(e);
    this.setState({valid:this.props.valid});
  }

  render() {
    const { from, to, valid } = this.state;
    console.log('state ', this.state);
    return (
      <React.Fragment>
        <Label>Enter Price Range:</Label>
        <Row>
          <Col sm={6}>From:
          <Col >
              <InputTag
                initialProp={{
                  name: 'from',
                  value: from,
                  placeholder: 'min-price',
                  empty: 'enter number',
                  errormsg: 'entered price is moore then max-price'
                }}
                validation={valid.from}
                onChange={(e) => this.setValue(e)}
                onBlur={(e) => this.checkValueRange(e)}
              />
            </Col>
          </Col>

          <Col sm={6} >To:
          <Col>
              <InputTag
                initialProp={{
                  name: 'to',
                  value: to,
                  placeholder: 'max-price',
                  empty: 'enter number',
                  errormsg: 'entered price is less then min-price'
                }}
                validation={valid.to}
                onChange={(e) => this.setValue(e)}
                onBlur={(e) => this.checkValueRange(e)}
              />
            </Col>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default PriceRange;