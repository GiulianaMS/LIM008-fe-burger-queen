import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prefer-stateless-function
class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='orderview'>Burger Queen</Navbar.Brand>
          <Nav className='mr-auto'>
          </Nav>
          <Form inline>
            <Button variant='outline-info' href='/'>Regresar</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;