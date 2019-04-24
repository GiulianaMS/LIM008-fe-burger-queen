import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pedido = ({ isMenu }) => {
  return (
    <div>
      <Row className="row">
        <Col sm={2} xs={1}>CANT.</Col>
        <Col sm={4} xs={2}>PRODUCTO</Col>
        <Col sm={2} xs={2}>P.UNIT</Col>
        <Col sm={2} xs={1}>TOTAL</Col>
        <Col sm={2} xs={1}>X</Col>
      </Row>
      {isMenu.map(product => (
        <Row className="row">
          <Col sm={2} xs={1}>CANT.</Col>
          <Col sm={4} xs={2}>{product.nombre}</Col>
          <Col sm={2} xs={2}>P.UNIT</Col>
          <Col sm={2} xs={1}>TOTAL</Col>
          <Col sm={2} xs={1}>X</Col>
        </Row>
      ))}
    </div>
  );
};
export default Pedido;
