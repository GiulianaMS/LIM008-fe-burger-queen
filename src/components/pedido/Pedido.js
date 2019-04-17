import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pedido = () => {
  return (
    <div>
      <Row className="row">
        <Col sm={6} xs={12}>
          <div>
            <p>Producto</p>
          </div>
        </Col>
        <Col sm={6} xs={12}>
          <div>
            <p>Producto</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Pedido;
