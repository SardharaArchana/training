import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import InputTag from '../input/inputTag';

import '../../page/registration/registration.css';

class PriceRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      valid: undefined
    }
  }

  setValue(e) {
    if (isNaN(e.target.value)) {
      this.setState({ valid: false })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        valid: true
      });
      this.props.onChange(e);
    }
  }

  async checkValueRange(e) {
    let val = (isNaN(e.target.value));
    this.setState({ valid: !val });
    await this.props.checkValueRange(e);
    // this.setState({ valid: this.props.valid });
  }

  render() {
    const { from, to, valid } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col sm='auto' className='padding-left-0'>From:</Col>
          <Col sm={5}>
            <InputTag
              initialProp={{
                name: 'from',
                value: from,
                placeholder: 'min-price',
              }}
              validation={this.props.valid}
              onChange={(e) => this.setValue(e)}
              onBlur={(e) => this.checkValueRange(e)}
            />
          </Col>

          <Col sm='auto' className='padding-left-0'>To:</Col>
          <Col sm={5} >
            <InputTag
              initialProp={{
                name: 'to',
                value: to,
                placeholder: 'max-price',
              }}
              validation={this.props.valid}
              onChange={(e) => this.setValue(e)}
              onBlur={(e) => this.checkValueRange(e)}
            />
          </Col>
        </Row>
        {(this.props.valid === false && (from !== '' && to !== '')) ?
          <span className='color-red'><b>To</b> is value less then <b>From</b> value</span> :
          (valid === false && (from === '' || to === '')) ? <span className='color-red'>numbers only</span> :
            null
        }
      </React.Fragment>
    )
  }
}

export default PriceRange;