import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export const Breakfast = ({ callback}) => {
  const arr = callback();
  const products = arr.map((product) => {
    if (product.categoria === 'Desayuno') {
      return (
        <div>
          <a>
            <Card className="main-card" style={{ width: '10rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Image src=""></Image>
                <Card.Text>S/. {product.precio}</Card.Text>
              </Card.Body>
            </Card>
            <br />
          </a>
          
        </div>
      );
    }
  });
  return (
    <div>
      <ul>
        {products}
      </ul>
    </div>
  );
};

export const LunchDinner = ({ callback }) => {
  const arr = callback();
  const products = arr.map((product) => {
    if (product.categoria === 'Resto del dia') {
      return (
        <p>{product.id}</p>
      );
    }
  });
  return (
    <div>
      <ul>
        {products}
      </ul>
    </div>
  );
};
