import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Form, Col, CardHeader, CardBody } from 'reactstrap';
import ButtonTag from '../../component/button/button';

const Display = (props) => {
  return (
    <React.Fragment>
      <Row className='justify-content-md-center'>
        <Col sm='auto'>
          <Form className='div'>
            <CardHeader tag='h4'>User Data</CardHeader>
            <CardBody>
              {props.location ? <>
                {props.location.state.map((u, i) => <React.Fragment key={i}>
                  <Row>
                    <Col>{u.email}</Col>
                    <Col>{u.password}</Col>
                    <Col>{u.number}</Col>
                    <Col>{u.Gender}</Col>
                    {/* <div>{props.location.state.designation.map((u, i) => <div key={i}>{u.i}</div>)}</div> */}
                    <Col>
                      <li  >Edit</li> | &nbsp;
                    <li  >Delete</li>
                    </Col>
                  </Row>
                </React.Fragment>)}</> : null}
              <Link to='/'>
                <ButtonTag color='primary'
                  name='Back' />
              </Link>
            </CardBody>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Display;

Display.defaultProps = {
  location: null,
}