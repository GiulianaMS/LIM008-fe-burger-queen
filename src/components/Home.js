import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import title from '../img/title.png';

const Home = () => (
  <div className="bg">
    <Container>
      <Row className="row align-items-center">
        <Col sm={6} xs={12}>
          <div><Image className="img-title" src={title} /></div>
        </Col>
        <Col sm={6} xs={12} className="align-self-end">
          <br />
          <br />
          <br />
          <a href="orderview">
            <div className="btn-user">Mesero</div>
          </a>
          <br />
          <br />
          <br />
          <a href="orderview">
            <div className="btn-user">Cocinero</div>
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
