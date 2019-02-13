import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Form, Col, CardHeader, CardBody } from 'reactstrap';

import ButtonTag from '../../component/button/button';

import './display.css'

const Display = (props) => {
  return (
    <React.Fragment>
      <Row className='justify-content-md-center'>
        <Col sm='10'>
          <Form className='div'>
            <CardHeader tag='h4'>User Data</CardHeader>
            <CardBody>
              {props.data.map((u, i) => <React.Fragment key={i}>
                <Row className='RowStyle'>
                  <Col md='3' className='ColStyle'>{u.email}</Col>
                  <Col sm='2' className='ColStyle'>{u.password}</Col>
                  <Col sm='2' className='ColStyle'>{u.number}</Col>
                  <Col sm='1' className='ColStyle'>{u.Gender}</Col>
                  <Col sm='1' className='ColStyle'>{u.Designation.map((l, i) => <React.Fragment key={i}>
                    <Row> {l}</Row>
                  </React.Fragment>
                  )}</Col>
                  <Col sm='2' className='ColStyle'>{u.remarks}</Col>
                  <Col sm='1' className='ColStyle'>
                    <ButtonTag block={true} color='primary' name='edit' onClick={() => { props.editUser(u, i) }} />
                  </Col>
                </Row>
              </React.Fragment>)}
              <Link to='/home'>
                <ButtonTag name='new User' onClick={props.onClick} /></Link>
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