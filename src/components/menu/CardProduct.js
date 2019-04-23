import React from 'react';
import './Menu.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const CardProduct = data => (
  <button type="button" className="list-product">
    <Card className="main-card" style={{ width: '7rem' }}>
      <Card.Body>
        <p className="card-title">{data.nombre}</p>
        <Image className="img-product" src={data.imagen} />
        <br />
        <Card.Text>S/. {data.precio}</Card.Text>
      </Card.Body>
    </Card>
    <br />
  </button>
);
export default CardProduct;
