import React, { Component } from 'react';
import './Home.css';
import waiter from '../img/waiter.png'
import chef from '../img/chef.png'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Home extends Component {
  render() {
    return (
      <div className= "bg">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <a href="orderview" className="orange">
                <div>Mesero</div>
                <div><Image src={waiter}></Image></div>
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href="orderview" >
                <div>Mesero</div>
                <div><Image src={chef} className=''></Image></div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;