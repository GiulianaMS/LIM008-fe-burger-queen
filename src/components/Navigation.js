import React from 'react';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import burger from '../img/burger.png';
import back from '../img/back.png';

const Navigation = () => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Image className="mr-3" src={burger} />
      <Navbar.Brand className="title-nav" href="orderview">Burger Queen</Navbar.Brand>
      <Nav className="mr-auto" />
      <Form inline>
        <a href="/"><Image className="mr-3" src={back} /></a>
      </Form>
    </Navbar>
  </div>
);
export default Navigation;
